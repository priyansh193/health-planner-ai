"use server"

import { auth, currentUser } from "@clerk/nextjs/server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    // Get current user details from Clerk to get email
    const clerkUser = await currentUser();
    if (!clerkUser) throw new Error("User not found in Clerk");

    // First check if CountryInsight exists
    let countryInsight = await db.countryInsight.findUnique({
      where: {
        country_ageGroup: {
          country: data.country,
          ageGroup: data.ageGroup,
        },
      },
    });

    // If not found, generate insights first
    if (!countryInsight) {
      const insights = await generateAIInsights(data.country, data.ageGroup);
      
      // Create CountryInsight with generated data
      countryInsight = await db.countryInsight.create({
        data: {
          country: data.country,
          ageGroup: data.ageGroup,
          ...insights,
        },
      });
    }

    // Use upsert to either update existing user or create new one
    const updatedUser = await db.user.upsert({
      where: {
        clerkUserId: userId,
      },
      update: {
        country: data.country,
        ageGroup: data.ageGroup,
        gender: data.gender,
      },
      create: {
        clerkUserId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress || "", // Get email from Clerk
        name: clerkUser.firstName && clerkUser.lastName 
          ? `${clerkUser.firstName} ${clerkUser.lastName}` 
          : clerkUser.firstName || clerkUser.username || "", // Get name from Clerk
        country: data.country,
        ageGroup: data.ageGroup,
        gender: data.gender,
      },
    });

    revalidatePath("/dashboard");
    return updatedUser;

  } catch (error) {
    console.error("Error updating user and country insight:", error.message);
    throw new Error("Failed to update user profile.");
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        country: true,
      },
    });

    // If user doesn't exist in database yet, they are not onboarded
    if (!user) {
      return {
        isOnboarded: false,
      };
    }

    // User exists, check if they have completed onboarding (have country set)
    return {
      isOnboarded: !!user.country,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}

// Optional: Add a function to create user if needed
export async function createUserIfNotExists() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const clerkUser = await currentUser();
    if (!clerkUser) throw new Error("User not found in Clerk");

    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!existingUser) {
      const newUser = await db.user.create({
        data: {
          clerkUserId: userId,
          email: clerkUser.emailAddresses[0]?.emailAddress || "",
          name: clerkUser.firstName && clerkUser.lastName 
            ? `${clerkUser.firstName} ${clerkUser.lastName}` 
            : clerkUser.firstName || clerkUser.username || "",
        },
      });
      return newUser;
    }

    return existingUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}
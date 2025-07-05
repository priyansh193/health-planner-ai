"use server"

import { auth } from "@clerk/nextjs/server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
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

    // Now update user in a separate transaction
    const updatedUser = await db.user.update({
      where: {
        id: user.id,
      },
      data: {
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
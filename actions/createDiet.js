"use server"

import db from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateAiPlan = async (data) => {
  try {
    const prompt = `Generate a 1 week meal plan in JSON format with the following structure:
    {
      "dailyCalories": number,
      "macros": {
        "proteins": number,
        "carbs": number,
        "fats": number
      },
      "weeklyPlan": {
        "monday": {
          "breakfast": string,
          "lunch": string,
          "snacks": string,
          "dinner": string
        },
        "tuesday": { ... similar structure },
        "wednesday": { ... similar structure },
        "thursday": { ... similar structure },
        "friday": { ... similar structure },
        "saturday": { ... similar structure },
        "sunday": { ... similar structure }
      }
    }

    Create this plan for a person with:
    - Age: ${data.age}
    - Current Weight: ${data.currentWeight}kg
    - Target Weight: ${data.targetWeight}kg
    - Medical Conditions: ${data.diseases.join(', ') || 'None'}
    - Dietary Preference: ${data.dietaryPreference}

    Important: 
    - Follow ${data.dietaryPreference} diet restrictions strictly
    - Respond ONLY with the JSON object, no additional text
    - Ensure all meals comply with the dietary preference`;


    const result = await model.generateContent(prompt);
    const response = await result.response;
    const textContent = response.text();
    
    // Clean up the response to ensure valid JSON
    const cleanedContent = textContent
      .trim()
      .replace(/^```json\s*/, '')  // Remove JSON code block start if present
      .replace(/```$/, '')         // Remove JSON code block end if present
      .trim();

    try {
      const mealPlan = JSON.parse(cleanedContent);
      
      // Validate the required structure
      if (!mealPlan.dailyCalories || !mealPlan.macros || !mealPlan.weeklyPlan) {
        throw new Error("Invalid meal plan structure");
      }

      return mealPlan;
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Received content:", cleanedContent);
      throw new Error("Invalid JSON response from AI");
    }
  } catch (error) {
    console.error("AI Plan Generation Error:", error);
    throw new Error("Failed to generate meal plan: " + error.message);
  }
}

export async function CreateDietPlan(data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId }
    });
    if (!user) throw new Error("User not found");

    // Generate AI meal plan
    const aiMealPlan = await generateAiPlan(data);

    // Calculate end date
    const endDate = new Date(data.startDate);
    endDate.setDate(endDate.getDate() + data.duration);

    // Create the diet plan
    const dietPlan = await db.dietChart.create({
      data: {
        userId: user.id,
        name: data.planName,
        goalType: data.targetWeight > data.currentWeight ? "WEIGHT_GAIN" : 
                 data.targetWeight < data.currentWeight ? "WEIGHT_LOSS" : 
                 "MAINTENANCE",
        dietaryPreference: data.dietaryPreference,
        currentWeight: data.currentWeight,
        targetWeight: data.targetWeight,
        duration: data.duration,
        startDate: data.startDate,
        endDate: endDate,
        // Add weekly meal plan directly to the chart
        monday: aiMealPlan.weeklyPlan.monday,
        tuesday: aiMealPlan.weeklyPlan.tuesday,
        wednesday: aiMealPlan.weeklyPlan.wednesday,
        thursday: aiMealPlan.weeklyPlan.thursday,
        friday: aiMealPlan.weeklyPlan.friday,
        saturday: aiMealPlan.weeklyPlan.saturday,
        sunday: aiMealPlan.weeklyPlan.sunday,
        calories: aiMealPlan.dailyCalories,
        proteins: aiMealPlan.macros.proteins,
        carbs: aiMealPlan.macros.carbs,
        fats: aiMealPlan.macros.fats
      }
    });

    // Create initial progress update
    const progressUpdate = await db.progressUpdate.create({
      data: {
        chartId: dietPlan.id,
        date: data.startDate,
        completed: false
      }
    });

    return {
      success: true,
      data: {
        ...dietPlan,
        initialProgress: progressUpdate
      }
    };

  } catch (error) {
    console.error("Diet Plan Creation Error:", error);
    return {
      success: false,
      error: error.message
    };
  }
}
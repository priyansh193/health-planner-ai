"use server"

import db from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateAIInsights = async (country, ageGroup) => {
  const prompt = `
    Provide general health statistics for ${country}, specifically for the ${ageGroup} age group.
    Respond ONLY in the following JSON format without any additional notes or explanation:
    {
      "stepsRecommendationByAgeGroup": [
        { "ageGroups": "string", "min": number, "max": number, "median": number }
      ],

      "aqi": number,
      "aqiCategory": "Good" | "Moderate" | "Unhealthy for Sensitive Groups" | "Unhealthy" | "Very Unhealthy" | "Hazardous",

      "RecommendedDailySleepByAgeGroup": number,
      
      "nutritionNeeds": ["item1", "item2"],

      "averageLifeExpectancy": number,

      "healthTrends": ["trend1", "trend2", "trend3"],
      
      "healthTips": ["tip1", "tip2", "tip3"],
      
    }
    Return ONLY valid JSON. Avoid markdown or commentary.
    Include 5 age group for stepsRecommendationByAgeGroup (18-25, 25-40, 40-55, 55-65, 65+).

  `;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  return JSON.parse(cleanedText);
};

export async function getCountryInsights() {
    const { userId } = await auth()
    if (!userId) throw new Error("Unauthorized")
    
    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
        include: {
        countryInsight: true,
        },
    });

    if (!user) throw new Error("User not found");

    if (!user.countryInsight){
        const insights = await generateAIInsights(user.country, user.ageGroup)

        const countryInsights = await db.countryInsight.create({
            data : {
                country : user.country,
                ageGroup : user.ageGroup,
                ...insights
            }
        })

        return countryInsights
    }
    return user.countryInsight
}
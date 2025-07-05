"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const healthAdvice = async (data) => {
    try {
        const prompt = `You are a health assistant AI. Based on the following user details, provide health advice:

        User Details:
        - Age: ${data.age} years
        - Gender: ${data.gender}
        - Weight: ${data.weight} kg
        - Symptoms: ${data.symptoms}  
        - Duration of Symptoms: ${data.symptomDuration} days

        Provide your response in this JSON format:
        {
            "success": true,
            "data": {
                "advice": "<your health advice here>"
            }
        }
        
        Important: Respond ONLY with the JSON object, no additional text or markdown formatting.`

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        
        // Clean and parse the response
        const cleanedText = text.replace(/```json\n?|```/g, "").trim();
        const parsedResponse = JSON.parse(cleanedText);

        return {
            success: true,
            data: parsedResponse.data
        };

    } catch (error) {
        console.error("Health Advice Generation Error:", error);
        return {
            success: false,
            error: error.message
        };
    }
}
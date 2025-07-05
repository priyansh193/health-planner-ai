"use server"

import db from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export async function updateProgress({ chartId, completed, date }) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error("Unauthorized")

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const existingProgress = await db.progressUpdate.findFirst({
      where: {
        chartId,
        date: {
          gte: today,
          lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
        }
      }
    })

    if (!existingProgress) {
      // Check if the chart is active today
      const chart = await db.dietChart.findFirst({
        where: {
          id: chartId,
          AND: [
            { startDate: { lte: today } },
            { endDate: { gte: today } }
          ]
        }
      })

      if (!chart) {
        throw new Error("No progress entry available for today - Chart is not active")
      }

      // Create new progress entry
      const newProgress = await db.progressUpdate.create({
        data: {
          chartId,
          date: today,
          completed: true
        }
      })

      revalidatePath(`/diet/${chartId}`)
      return {
        success: true,
        data: newProgress
      }
    }

    if (existingProgress.completed) {
      throw new Error("Today's progress is already marked as complete")
    }

    // Update existing progress
    const updatedProgress = await db.progressUpdate.update({
      where: { id: existingProgress.id },
      data: { completed }
    })

    revalidatePath(`/diet/${chartId}`)
    return {
      success: true,
      data: updatedProgress
    }

  } catch (error) {
    console.error("Progress Update Error:", error)
    return {
      success: false,
      error: error.message
    }
  }
}
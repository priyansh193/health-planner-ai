"use server"

import db from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function getDietChart(id) {
  try {
    const { userId } = await auth()
    if (!userId) return null

    const user = await db.user.findUnique({
      where: { clerkUserId: userId }
    })
    if (!user) return null

    const chart = await db.dietChart.findUnique({
      where: {
        id,
        userId: user.id
      },
      include: {
        progressUpdates: {
          orderBy: {
            date: 'desc'
          }
        }
      }
    })

    // Transform the data for frontend consumption
    if (chart) {
      return {
        ...chart,
        weeklyPlan: {
          monday: chart.monday,
          tuesday: chart.tuesday,
          wednesday: chart.wednesday,
          thursday: chart.thursday,
          friday: chart.friday,
          saturday: chart.saturday,
          sunday: chart.sunday
        },
        macros: {
          proteins: chart.proteins,
          carbs: chart.carbs,
          fats: chart.fats
        }
      }
    }

    return null
  } catch (error) {
    console.error("Error fetching diet chart:", error)
    return null
  }
}
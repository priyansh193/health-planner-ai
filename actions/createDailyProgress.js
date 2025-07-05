"use server"

import db from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createDailyProgress() {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    console.log("Fetching active charts...")
    const activeCharts = await db.dietChart.findMany({
      where: {
        AND: [
          {
            endDate: {
              gte: today // End date is in the future
            }
          },
          {
            startDate: {
              lte: today // Start date is today or in the past
            }
          }
        ]
      }
    })
    console.log(`Found ${activeCharts.length} active charts`)

    let created = 0
    // Create progress entries for each active chart
    for (const chart of activeCharts) {
      const exists = await db.progressUpdate.findFirst({
        where: {
          chartId: chart.id,
          date: {
            gte: today,
            lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
          }
        }
      })

      if (!exists) {
        await db.progressUpdate.create({
          data: {
            chartId: chart.id,
            date: today,
            completed: false
          }
        })
        created++
      }
    }

    console.log(`Created ${created} new progress entries`)
    revalidatePath('/diet')
    
    return { 
      success: true,
      created,
      totalCharts: activeCharts.length
    }
  } catch (error) {
    console.error("Daily Progress Error:", error)
    return { success: false, error: error.message }
  }
}
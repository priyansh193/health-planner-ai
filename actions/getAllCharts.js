"use server"

import db from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function getAllCharts() {
    try {
        const { userId } = await auth()
        if (!userId) throw new Error("Unauthorized request")

        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user) {
            throw new Error("User not Exist")
        }

        const charts = await db.dietChart.findMany({
            where: {
                userId: user.id
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                progressUpdates: {
                    orderBy: {
                        date: 'desc'
                    },
                    take: 1 // Get only the latest progress update
                }
            }
        });

        return {
            success: true,
            data: charts.map(chart => ({
                ...chart,
                latestProgress: chart.progressUpdates[0] || null
            }))
        };

    } catch (error) {
        console.error("Error fetching charts:", error);
        return {
            success: false,
            error: error.message
        };
    }
}
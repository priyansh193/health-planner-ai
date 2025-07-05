import { NextResponse } from "next/server"
import { createDailyProgress } from "@/actions/createDailyProgress"

export async function GET(request) {
  try {
    // Verify the request is from Vercel Cron
    const authHeader = request.headers.get("authorization")
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      console.error("Unauthorized cron attempt")
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    console.log("Starting daily progress creation:", new Date().toISOString())
    const result = await createDailyProgress()
    console.log("Completed daily progress creation:", result)
    
    return NextResponse.json(result)
  } catch (error) {
    console.error("Cron execution failed:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
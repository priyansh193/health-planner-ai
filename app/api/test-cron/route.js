import { NextResponse } from "next/server"
import { createDailyProgress } from "@/actions/createDailyProgress"

export async function GET() {
  console.log("Test cron triggered:", new Date().toISOString())
  const result = await createDailyProgress()
  return NextResponse.json(result)
}
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getDietChart } from "@/actions/getDietChart"
import DietChartDisplay from "./_components/DietChartDisplay"
import { Toaster } from "sonner"

export default async function DietChartPage({ params }) {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const chart = await getDietChart(params.id)

  if (!chart) {
    redirect('/diet')
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="container mx-auto py-6">
        <DietChartDisplay chart={chart} />
      </div>
    </>
  )
}
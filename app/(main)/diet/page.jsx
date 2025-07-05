import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getAllCharts } from "@/actions/getAllCharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarIcon, Plus } from "lucide-react"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { Toaster } from "sonner"

export default async function DietChartsPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const { data: charts, error } = await getAllCharts()

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <p className="text-destructive">Error loading charts: {error}</p>
      </div>
    )
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Diet Plans</h1>
          <Link href="/diet/create">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Plan
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {charts?.map((chart) => {
            const isActive = new Date(chart.endDate) > new Date()
            
            return (
              <Link 
                href={`/diet/${chart.id}`} 
                key={chart.id}
              >
                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{chart.name}</CardTitle>
                      <Badge variant={isActive ? "default" : "secondary"}>
                        {isActive ? "Active" : "Completed"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Start Date</p>
                          <p>{format(new Date(chart.startDate), "PPP")}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">End Date</p>
                          <p>{format(new Date(chart.endDate), "PPP")}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Current Weight</p>
                          <p>{chart.currentWeight} kg</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Target Weight</p>
                          <p>{chart.targetWeight} kg</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}

          {charts?.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No diet plans yet. Create your first plan!</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
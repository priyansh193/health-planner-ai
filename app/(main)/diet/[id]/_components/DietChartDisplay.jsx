"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { updateProgress } from "@/actions/updateProgress"
import { toast } from "sonner"
import { format } from "date-fns"

const DietChartDisplay = ({ chart }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  // Define proper meal order with colors
  const mealOrder = ['breakfast', 'lunch', 'snacks', 'dinner']
  
  // Define meal colors and styling
  const mealStyles = {
    breakfast: {
      color: 'text-amber-600 dark:text-amber-400',
      dotColor: 'bg-amber-500'
    },
    lunch: {
      color: 'text-emerald-600 dark:text-emerald-400',
      dotColor: 'bg-emerald-500'
    },
    snacks: {
      color: 'text-purple-600 dark:text-purple-400',
      dotColor: 'bg-purple-500'
    },
    dinner: {
      color: 'text-blue-600 dark:text-blue-400',
      dotColor: 'bg-blue-500'
    }
  }

  // Calculate progress
  const daysCompleted = chart.progressUpdates?.filter(p => p.completed).length || 0
  const progressPercentage = (daysCompleted / chart.duration) * 100

  const handleMarkComplete = async () => {
    try {
      setIsSubmitting(true)
      const result = await updateProgress({
        chartId: chart.id,
        completed: true,
        date: new Date()
      })

      if (result.success) {
        toast.success("Progress updated!")
        window.location.reload()
      } else {
        toast.error(result.error || "Failed to update progress")
      }
    } catch (error) {
      toast.error("Error updating progress")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Details Card */}
      <Card>
        <CardHeader>
          <CardTitle>{chart.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Start Date</p>
              <p className="font-medium">{format(new Date(chart.startDate), "PPP")}</p>
            </div>
            <div>
              <p className="text-muted-foreground">End Date</p>
              <p className="font-medium">{format(new Date(chart.endDate), "PPP")}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Current Weight</p>
              <p className="font-medium">{chart.currentWeight} kg</p>
            </div>
            <div>
              <p className="text-muted-foreground">Target Weight</p>
              <p className="font-medium">{chart.targetWeight} kg</p>
            </div>
            <div>
              <p className="text-muted-foreground">Goal Type</p>
              <p className="font-medium capitalize">{chart.goalType.toLowerCase()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Duration</p>
              <p className="font-medium">{chart.duration} days</p>
            </div>
            <div>
              <p className="text-muted-foreground">Diet Type</p>
              <p className="font-medium capitalize">{chart.dietaryPreference.toLowerCase()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Card */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Tracker</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress ({daysCompleted} days completed)</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          <Button 
            onClick={handleMarkComplete} 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Updating..." : "Mark Today Complete"}
          </Button>
        </CardContent>
      </Card>

      {/* Macros Card */}
      <Card>
        <CardHeader>
          <CardTitle className='text-center'>Macros Intake Per Day</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-muted-foreground">Calories</p>
              <p className="text-2xl font-bold">{chart.calories}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Proteins</p>
              <p className="text-2xl font-bold">{chart.proteins}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Carbs</p>
              <p className="text-2xl font-bold">{chart.carbs}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Fats</p>
              <p className="text-2xl font-bold">{chart.fats}g</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Meal Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Meal Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {days.map((day) => (
              <Card key={day} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="capitalize text-lg">{day}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {mealOrder.map((meal) => {
                    // Check if the meal exists for this day
                    const mealData = chart[day] && chart[day][meal]
                    
                    if (!mealData) return null
                    
                    const style = mealStyles[meal]
                    
                    return (
                      <div key={meal} className="flex items-start gap-3 p-2 rounded-md hover:bg-muted/30 transition-colors">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${style.dotColor}`}></div>
                        <div className="flex-1 space-y-1">
                          <h4 className={`font-semibold capitalize text-sm tracking-wide ${style.color}`}>
                            {meal}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {mealData}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DietChartDisplay
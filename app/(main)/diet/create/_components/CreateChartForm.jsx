"use client"
import React, { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { CreateDietPlan } from '@/actions/createDiet'
import { useRouter } from 'next/navigation'

export default function CreateChartForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  
  // Form state
  const [planName, setPlanName] = useState('')
  const [age, setAge] = useState('')
  const [currentWeight, setCurrentWeight] = useState('')
  const [targetWeight, setTargetWeight] = useState('')
  const [duration, setDuration] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [medicalConditions, setMedicalConditions] = useState('')
  const [dietaryPreference, setDietaryPreference] = useState('')
  const [calendarOpen, setCalendarOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const formData = {
        planName,
        age: parseInt(age),
        currentWeight: parseFloat(currentWeight),
        targetWeight: parseFloat(targetWeight),
        duration: parseInt(duration),
        startDate: startDate.toISOString().split('T')[0],
        medicalConditions,
        dietaryPreference,
      }
      
      const result = await CreateDietPlan(formData)
      
      if (result.success) {
        router.push(`/diet/${result.planId}`)
      } else {
        alert(result.error || 'Failed to create diet plan')
      }
    } catch (error) {
      console.error('Error creating diet plan:', error)
      alert('Failed to create diet plan. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card className="border shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create Your Diet Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Plan Name */}
            <div className="space-y-2">
              <Label htmlFor="planName" className="text-sm font-medium">Plan Name</Label>
              <Input
                id="planName"
                type="text"
                value={planName}
                onChange={(e) => setPlanName(e.target.value)}
                placeholder="Enter your diet plan name"
                className="h-10"
                required
              />
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium">Age</Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="h-10"
                min="1"
                max="120"
                required
              />
            </div>

            {/* Current Weight */}
            <div className="space-y-2">
              <Label htmlFor="currentWeight" className="text-sm font-medium">Current Weight (kg)</Label>
              <Input
                id="currentWeight"
                type="number"
                step="0.1"
                value={currentWeight}
                onChange={(e) => setCurrentWeight(e.target.value)}
                placeholder="Enter your current weight"
                className="h-10"
                min="20"
                max="300"
                required
              />
            </div>

            {/* Target Weight */}
            <div className="space-y-2">
              <Label htmlFor="targetWeight" className="text-sm font-medium">Target Weight (kg)</Label>
              <Input
                id="targetWeight"
                type="number"
                step="0.1"
                value={targetWeight}
                onChange={(e) => setTargetWeight(e.target.value)}
                placeholder="Enter your target weight"
                className="h-10"
                min="20"
                max="300"
                required
              />
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-medium">Duration (weeks)</Label>
              <Input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter plan duration in weeks"
                className="h-10"
                min="1"
                max="52"
                required
              />
            </div>

            {/* Start Date - Calendar */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Start Date</Label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-10 justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                    type="button"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-auto p-0 bg-background border shadow-md" 
                  align="start"
                  sideOffset={4}
                >
                  <CalendarComponent
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => {
                      if (date) {
                        setStartDate(date)
                        setCalendarOpen(false)
                      }
                    }}
                    disabled={(date) => {
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)
                      return date < today
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Medical Conditions */}
            <div className="space-y-2">
              <Label htmlFor="medicalConditions" className="text-sm font-medium">Medical Conditions (Optional)</Label>
              <Input
                id="medicalConditions"
                type="text"
                value={medicalConditions}
                onChange={(e) => setMedicalConditions(e.target.value)}
                placeholder="Enter any medical conditions or allergies"
                className="h-10"
              />
            </div>

            {/* Dietary Preference */}
            <div className="space-y-2">
              <Label htmlFor="dietaryPreference" className="text-sm font-medium">Dietary Preference</Label>
              <Select value={dietaryPreference} onValueChange={setDietaryPreference}>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select your dietary preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                  <SelectItem value="keto">Keto</SelectItem>
                  <SelectItem value="paleo">Paleo</SelectItem>
                  <SelectItem value="mediterranean">Mediterranean</SelectItem>
                  <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                  <SelectItem value="low-carb">Low-Carb</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 mt-6"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating Diet Plan...
                </>
              ) : (
                'Create Diet Plan'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

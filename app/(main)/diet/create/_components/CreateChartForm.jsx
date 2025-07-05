"use client"
import React from 'react'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Loader2 } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { CreateDietPlan } from "@/actions/createDiet";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CreateChartForm = () => {
  const router = useRouter();
  
  // Form state with correct default values
  const [chartName, setChartName] = useState("")             // String
  const [age, selectAge] = useState(0)                       // Number
  const [ageError, setAgeError] = useState("")               // String
  const [diseases, setDiseases] = useState([])               // Array of strings
  const [duration, setDuration] = useState(1)                // Number (weeks)
  const [startDate, setStartDate] = useState(new Date())     // Date object
  const [currentWeight, setCurrentWeight] = useState(0)      // Number
  const [targetWeight, setTargetWeight] = useState(0)        // Number
  const [weightError, setWeightError] = useState("")         // String
  const [newDisease, setNewDisease] = useState("")
  const [dietaryPreference, setDietaryPreference] = useState("VEGETARIAN")
  
  // Loading state for the submit button
  const [isCreatingPlan, setIsCreatingPlan] = useState(false)

  const handlePlanNameChange = (e) => {
    setChartName(e.target.value)
  }

  const handleAgeChange = (e) => {
    const value = parseInt(e.target.value)
    if (value > 120) {
      setAgeError("Age cannot be greater than 120")
      selectAge(120)
    } else if (value < 0) {
      setAgeError("Age cannot be negative")
      selectAge(0)
    } else {
      setAgeError("")
      selectAge(value)
    }
  }

  // Handler for current weight
  const handleCurrentWeightChange = (e) => {
    const value = parseFloat(e.target.value)
    if (value < 0) {
      setWeightError("Weight cannot be negative")
      setCurrentWeight(0)
    } else if (value > 500) {
      setWeightError("Weight seems too high")
      setCurrentWeight(500)
    } else {
      setWeightError("")
      setCurrentWeight(value)
    }
  }

  // Handler for target weight
  const handleTargetWeightChange = (e) => {
    const value = parseFloat(e.target.value)
    if (value < 0) {
      setWeightError("Target weight cannot be negative")
      setTargetWeight(0)
    } else if (value > 500) {
      setWeightError("Target weight seems too high")
      setTargetWeight(500)
    } else {
      setWeightError("")
      setTargetWeight(value)
    }
  }

  // Handler for duration
  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value)
    setDuration(Math.max(1, Math.min(365, value))) // Limit between 1-52 weeks
  }

  // Handler for start date
  const handleStartDateChange = (date) => {
    setStartDate(date)
  }

  // Update disease handler
  const handleAddDisease = (e) => {
    e.preventDefault()
    if (newDisease.trim() === "") return

    setDiseases(prev => [...prev, newDisease.trim()])
    setNewDisease("") 
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state to true
    setIsCreatingPlan(true);

    try {
      const formData = {
        planName: chartName,
        age,
        currentWeight,
        targetWeight,
        duration,
        startDate: new Date(),
        diseases,
        dietaryPreference
      };

      const result = await CreateDietPlan(formData);

      if (result.success) {
        // Reset form fields
        console.log("entered")
        setChartName("");
        selectAge(0);
        setAgeError("");
        setCurrentWeight(0);
        setTargetWeight(0);
        setWeightError("");
        setDuration(1);
        setStartDate(new Date());
        setDiseases([]);
        setNewDisease("");
        setDietaryPreference("VEGETARIAN");

        // Redirect to the created diet plan
        router.push(`/diet/${result.data.id}`);
        console.log(result)
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Error creating diet plan:", error);
      // You might want to add a toast notification here
    } finally {
      // Set loading state to false when done
      setIsCreatingPlan(false);
    }
  };

  const isFormValid = !isCreatingPlan && chartName && age !== 0 && currentWeight !== 0 && duration !== 0 && targetWeight !== 0;

  return (
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className='text-4xl'>Create your Diet Plan</CardTitle>
          <CardDescription>Please provide your basic information to generate a diet plan</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleFormSubmit} className="space-y-6">

            {/* Plan name input */}
            <div className="space-y-2">
              <Label htmlFor="planName">Plan Name</Label>
              <Input
                id="planName"
                type="text"
                placeholder="Enter your plan name"
                value={chartName}
                onChange={handlePlanNameChange}
                className="w-full"
                disabled={isCreatingPlan}
              />
            </div>

            {/* Age input with error message */}
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={handleAgeChange}
                className={`w-full ${ageError ? 'border-red-500' : ''}`}
                disabled={isCreatingPlan}
              />
              {ageError && (
                <p className="text-sm text-red-500 mt-1">{ageError}</p>
              )}
            </div>

            {/* Weight inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentWeight">Current Weight (kg)</Label>
                <Input
                  id="currentWeight"
                  type="number"
                  placeholder="Enter current weight"
                  value={currentWeight}
                  onChange={handleCurrentWeightChange}
                  className={`w-full ${weightError ? 'border-red-500' : ''}`}
                  disabled={isCreatingPlan}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetWeight">Target Weight (kg)</Label>
                <Input
                  id="targetWeight"
                  type="number"
                  placeholder="Enter target weight"
                  value={targetWeight}
                  onChange={handleTargetWeightChange}
                  className={`w-full ${weightError ? 'border-red-500' : ''}`}
                  disabled={isCreatingPlan}
                />
              </div>
            </div>
            {weightError && (
              <p className="text-sm text-red-500 mt-1">{weightError}</p>
            )}

            {/* Duration input */}
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (days)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="Enter duration in days"
                value={duration}
                onChange={handleDurationChange}
                className="w-full"
                disabled={isCreatingPlan}
              />
            </div>


            {/* Diseases input */}
            <div className="space-y-2">
              <Label htmlFor="diseases">Medical Conditions</Label>
              <Input
                placeholder="Enter your medical conditions (if any)"
                value={newDisease}
                onChange={(e) => setNewDisease(e.target.value)}
                className="w-full"
                disabled={isCreatingPlan}
              />
              <Button 
                onClick={handleAddDisease}
                disabled={isCreatingPlan}
              >
                Add
              </Button>
              <p className="text-sm text-muted-foreground">
                Example: Diabetes, Thyroid, High Blood Pressure
              </p>

              {diseases.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {diseases.map((disease, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1 pr-1"
                    >
                      {disease}
                      <X
                        className={`h-3 w-3 ml-1 cursor-pointer hover:text-destructive ${isCreatingPlan ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => {
                          if (!isCreatingPlan) {
                            setDiseases(prev => prev.filter((_, i) => i !== index))
                          }
                        }}
                      />
                    </Badge>
                  ))}
                </div>
              )}
                
            </div>

            {/* Dietary Preference Select */}
            <div className="space-y-2">
              <Label htmlFor="dietaryPreference">Dietary Preference</Label>
              <Select
                value={dietaryPreference}
                onValueChange={setDietaryPreference}
                disabled={isCreatingPlan}
              >
                <SelectTrigger id="dietaryPreference" className="w-full">
                  <SelectValue placeholder="Select your dietary preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="VEGETARIAN">Vegetarian</SelectItem>
                  <SelectItem value="NON_VEGETARIAN">Non Vegetarian</SelectItem>
                  <SelectItem value="VEGAN">Vegan</SelectItem>
                  <SelectItem value="EGGETARIAN">Eggetarian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit"
              className="w-full mt-6"
              disabled={!isFormValid}
            >
              {isCreatingPlan ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Plan...
                </>
              ) : (
                'Create Plan'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateChartForm

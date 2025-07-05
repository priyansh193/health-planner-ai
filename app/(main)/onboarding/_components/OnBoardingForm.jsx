"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import useFetch from "@/hooks/use-fetch";
import { updateUser } from '@/actions/user'
import { toast } from 'sonner'

const OnBoardingForm = ({countries}) => {
  const router = useRouter()
  const [selectCountry, setSelectedCountry] = React.useState("")
  const [ageGroup, setAgeGroup] = React.useState("")
  const [gender, setGender] = React.useState("")

  const ageGroups = [
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65+"
  ]

  const genders = [
    "Male",
    "Female",
    "Other",
    "Prefer not to say"
  ]

  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
  } = useFetch(updateUser);

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    if (!selectCountry || !ageGroup || !gender) {
      toast.error("Please fill in all fields")
      return
    }

    try {
      await updateUserFn({
        country: selectCountry,
        ageGroup: ageGroup,
        gender: gender
      })
    } catch (error) {
      console.error("Onboarding error:", error)
      toast.error("Something went wrong!")
    }

  }

  useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      toast.success("Profile completed successfully!");
      router.push("/dashboard");
      router.refresh();
    }
  }, [updateResult, updateLoading]);


  return (
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className='text-4xl'>Complete Your Profile</CardTitle>
          <CardDescription>Please provide your basic information to get started</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select value={selectCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age Group</Label>
              <Select value={ageGroup} onValueChange={setAgeGroup}>
                <SelectTrigger id="age">
                  <SelectValue placeholder="Select your age group" />
                </SelectTrigger>
                <SelectContent>
                  {ageGroups.map((age) => (
                    <SelectItem key={age} value={age}>
                      {age}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  {genders.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit"
              className="w-full mt-6" 
              disabled={!selectCountry || !ageGroup || !gender || updateLoading}
            >
              {updateLoading ? "Saving..." : "Continue"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default OnBoardingForm

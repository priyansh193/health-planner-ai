"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
  HeartPulse,
  Wind,
  Moon,
  ActivitySquare,
  Sparkles,
  Stethoscope
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DashboardView = ({ insights }) => {
  // Transform salary data for the chart
  const stepsData = insights.stepsRecommendationByAgeGroup.map((range) => ({
    name: range.ageGroups,
    min: range.min,
    max: range.max,
    median: range.median
  }));

  const getAQILevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "good":
        return "bg-green-500";
      case "moderate":
        return "bg-green-100";
      case "unhealthy for sensitive groups":
        return "bg-yellow-500";
      case "unhealthy" :
        return "bg-orange-300";
      case "very unhealthy" :
        return "bg-orange-700";
      default:
        return "bg-red-500";
    }
  };

  return (
    <div className="space-y-6">

      {/* Market Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          {/* Life Expectancy Card */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Life Expectancy
            </CardTitle>
            <HeartPulse className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.averageLifeExpectancy} Years</div>
          </CardContent>
        </Card>

        <Card>
          {/* AQI Card */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              AQI
            </CardTitle>
            <Wind className="h-4 w-4 text-sky-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {insights.aqi}
            </div>
            <Badge 
              className={`${getAQILevelColor(insights.aqiCategory)}`}
            >
              {insights.aqiCategory}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          {/* Sleep Hours Card */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recommended Sleep Hours
            </CardTitle>
            <Moon className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.RecommendedDailySleepByAgeGroup} - {insights.RecommendedDailySleepByAgeGroup+1} Hours</div>
          </CardContent>
        </Card>

        <Card>
          {/* Nutritional Needs Card */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Key Nutritional Needs
            </CardTitle>
            <Sparkles className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {insights.nutritionNeeds.map((nut) => (
                <Badge key={nut} variant="secondary">
                  {nut}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Salary Ranges Chart */}
      <Card className="col-span-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Daily Steps Recommended by age group</CardTitle>
            <ActivitySquare className="h-4 w-4 text-green-500" />
          </div>
          <CardDescription>
            Displaying minimum, median, and maximum steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stepsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-md">
                          <p className="font-medium">{label}</p>
                          {payload.map((item) => (
                            <p key={item.name} className="text-sm">
                              {item.name}: {item.value}
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="min" fill="#94a3b8" name="Min Steps" />
                <Bar dataKey="median" fill="#64748b" name="Median Steps" />
                <Bar dataKey="max" fill="#475569" name="Max Steps" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Industry Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          {/* Health Trends Card */}
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Key Health Trends</CardTitle>
              <Stethoscope className="h-4 w-4 text-violet-500" />
            </div>
            <CardDescription>
              Current Health trends 
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {insights.healthTrends.map((trend, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                  <span>{trend}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Tips</CardTitle>
            <CardDescription>Tips to consider for better Health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {insights.healthTips.map((tips) => (
                <Badge key={tips} variant="outline">
                  {tips}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;

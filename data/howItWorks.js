import { 
  ClipboardCheck, 
  Scale, 
  LineChart, // Changed from ChartLineUp
  Apple 
} from "lucide-react";

export const howItWorks = [
  {
    title: "Set Your Health Goals",
    description: "Define your dietary preferences and health objectives for personalized planning",
    icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: "Track Your Progress",
    description: "Monitor your weight, diet adherence, and health improvements daily",
    icon: <Scale className="w-8 h-8 text-primary" />,
  },
  {
    title: "Get Health Insights",
    description: "Receive AI-powered health advice and dietary recommendations",
    icon: <LineChart className="w-8 h-8 text-primary" />, // Updated icon component
  },
  {
    title: "Follow Your Meal Plan",
    description: "Access daily meal schedules with nutritional information and recipes",
    icon: <Apple className="w-8 h-8 text-primary" />,
  },
];
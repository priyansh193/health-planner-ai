import { 
  BrainCircuit, 
  Utensils, 
  LineChart, 
  GraduationCap 
} from "lucide-react";

export const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Powered Diet Planning",
    description:
      "Create personalized diet plans tailored to your goals using advanced AI technology.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 mb-4 text-primary" />,
    title: "Health Assistant",
    description:
      "Get instant health advice and recommendations from our AI health assistant.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Country Health Insights",
    description:
      "Explore health statistics, dietary patterns, and nutritional trends across different countries.",
  },
  {
    icon: <Utensils className="w-10 h-10 mb-4 text-primary" />,
    title: "Smart Meal Planning",
    description: 
      "Generate balanced meal plans with nutritional tracking and customization options.",
  },
];
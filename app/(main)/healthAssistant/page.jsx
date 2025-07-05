"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { healthAdvice } from '@/actions/generatehealthAdvice'
import { cn } from "@/lib/utils";

export default function HealthAssistant() {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("MALE");
  const [weight, setWeight] = useState(0);
  const [symptoms, setSymptoms] = useState("");
  const [symptomDuration, setSymptomDuration] = useState(0);

  const [messages, setMessages] = useState([
    { from: 'assistant', text: '👋 Hello! I\'m your AI Health Assistant. To get started, please provide your Age, Gender, Weight, Symptoms, and Symptoms Duration using the form below.' }
  ]);
  const [subscribed, setSubscribed] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when messages update
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add user details summary as user message
    const userText = `Details — Age: ${age}, Gender: ${gender}, Weight: ${weight}kg, Symptoms: ${symptoms}, Duration: ${symptomDuration} days`;
    setMessages((msgs) => [...msgs, { from: 'user', text: userText }]);

    // Call healthAdvice
    const result = await healthAdvice({ age, gender, weight, symptoms, symptomDuration });
    const reply = result.success ? result.data.advice : 'Sorry, I couldn\'t fetch advice right now.';
    setMessages((msgs) => [...msgs, { from: 'assistant', text: reply }]);
    setSubscribed(true);
  };

  return (
    <div className={cn(
      "flex flex-col h-full mx-auto p-4 space-y-4",
      subscribed ? "max-w-4xl" : "max-w-2xl"
    )}>
      {/* Chat window */}
      <div className="flex-1 overflow-y-auto p-4 bg-muted/10 dark:bg-muted/30 rounded-lg space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.from === 'assistant' ? 'justify-start' : 'justify-end'}`}>
            <div className={`px-4 py-2 rounded-lg break-words whitespace-pre-wrap max-w-[50%]
              ${msg.from === 'assistant' ? 'bg-card text-card-foreground' : 'bg-primary text-primary-foreground'}`}>  
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Detail collection form (shown until first submit) */}
      {!subscribed && (
        <Card className="bg-card border bg-background shadow">
          <CardHeader>
            <CardTitle>Your Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Age */}
              <div className="space-y-1">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={e => setAge(Math.max(0, Math.min(120, parseInt(e.target.value) || 0)))}
                  className="w-full"
                  min={0}
                  max={120}
                  required
                />
              </div>
              {/* Gender */}
              <div className="space-y-1">
                <Label htmlFor="gender">Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger id="gender" className="w-full">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMALE">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Weight */}
              <div className="space-y-1">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={e => setWeight(Math.max(5, Math.min(150, parseInt(e.target.value) || 0)))}
                  className="w-full"
                  min={5}
                  max={150}
                  required
                />
              </div>
              {/* Symptoms */}
              <div className="space-y-1">
                <Label htmlFor="symptoms">Symptoms</Label>
                <Input
                  id="symptoms"
                  type="text"
                  value={symptoms}
                  onChange={e => setSymptoms(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              {/* Symptoms Duration */}
              <div className="space-y-1">
                <Label htmlFor="symptomDuration">Symptoms Duration (days)</Label>
                <Input
                  id="symptomDuration"
                  type="number"
                  value={symptomDuration}
                  onChange={e => setSymptomDuration(Math.max(0, Math.min(365, parseInt(e.target.value) || 0)))}
                  className="w-full"
                  min={0}
                  max={365}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={age===0 || weight===0 || !symptoms || symptomDuration===0}
              >
                Start Chat
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* After details submitted: allow resetting */}
      {subscribed && (
        <Button variant="outline" onClick={() => window.location.reload()} className="mt-2">Start Over</Button>
      )}
    </div>
  );
}


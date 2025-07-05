"use client";
import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { Card } from '@/components/ui/card';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md p-6">
        <SignUp path="/sign-up" routing="path" />
      </Card>
    </div>
  );
}

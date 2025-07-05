import React from 'react';
import { SignIn } from '@clerk/nextjs';
import { Card } from '@/components/ui/card';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md p-6">
        <SignIn path="/sign-in" routing="path" />
      </Card>
    </div>
  );
}

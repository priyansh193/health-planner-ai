"use client"

import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function UserSync() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (isLoaded && user) {
        try {
          // Call an API route to sync the user instead of direct DB access
          await fetch('/api/sync-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              clerkUserId: user.id,
              name: `${user.firstName} ${user.lastName}`,
              imageUrl: user.imageUrl,
              email: user.emailAddresses[0]?.emailAddress,
            }),
          });
        } catch (error) {
          console.error('Failed to sync user:', error);
        }
      }
    };

    syncUser();
  }, [isLoaded, user]);

  return null; // This component doesn't render anything
}

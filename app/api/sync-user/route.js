import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import db from '@/lib/prisma';

export async function POST(request) {
  try {
    // Verify the user is authenticated
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { clerkUserId, name, imageUrl, email } = body;

    // Verify the clerk user ID matches
    if (user.id !== clerkUserId) {
      return NextResponse.json({ error: 'Invalid user' }, { status: 403 });
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { clerkUserId }
    });

    if (existingUser) {
      // Update existing user
      const updatedUser = await db.user.update({
        where: { clerkUserId },
        data: { name, imageUrl, email }
      });
      return NextResponse.json(updatedUser);
    } else {
      // Create new user
      const newUser = await db.user.create({
        data: { clerkUserId, name, imageUrl, email }
      });
      return NextResponse.json(newUser);
    }
  } catch (error) {
    console.error('User sync error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

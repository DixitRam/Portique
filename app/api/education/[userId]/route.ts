"use server"

import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Education } from '@/lib/models/education';
import { auth } from '@clerk/nextjs/server';

// Define education type based on the schema
interface EducationType {
  userId: string;
  institution: string;
  degree: string;
  description?: string;
  date: string;
}

// Define RouteParams interface for consistent type usage
interface RouteParams {
  params: Promise<{ userId: string }>;
}

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  const { userId } = await params;

  try {
    const { userId: authUserId } = await auth();
    if (!authUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const educations = await Education.find({ userId });
    
    
    return NextResponse.json({ success: true, data: educations });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Error fetching education' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: RouteParams
) {
  const searchParams = new URL(request.url).searchParams;
  const resolvedParams = await params;
  const { userId } = resolvedParams;
  const queryUserId = searchParams.get('userId');
  const finalUserId = queryUserId || userId;

  try {
    const { userId: authUserId } = await auth();
    if (!authUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { educations } = await request.json();
    
    // Delete existing education entries
    await Education.deleteMany({ userId: finalUserId });
    
    // Create new education entries
    const savedEducation = await Education.create(
      educations.map((education: EducationType) => ({
        ...education,
        userId: finalUserId
      }))
    );
    
    return NextResponse.json({ success: true, data: savedEducation });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Error updating education' },
      { status: 500 }
    );
} 
}
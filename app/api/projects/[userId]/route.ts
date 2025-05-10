"use server"
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Project } from '@/lib/models/project';
import { auth } from '@clerk/nextjs/server';

// Define RouteParams interface for consistent type usage
interface RouteParams {
  params: Promise<{ userId: string }>;
}

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  const resolvedParams = await params;
  const { userId } = resolvedParams;

  try {
    const { userId: authUserId } = await auth();
    if (!authUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const projects = await Project.find({ userId });
    
    return NextResponse.json({ success: true, data: projects });
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: RouteParams
) {
  const resolvedParams = await params;
  const { userId } = resolvedParams;

  try {
    const { userId: authUserId } = await auth();
    if (!authUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { projects } = await request.json();
    
    // Delete existing projects
    await Project.deleteMany({ userId });
    
    // Create new projects
    const savedProjects = await Project.create(
      projects.map((project: unknown) => {
        if (typeof project === 'object' && project !== null) {
          return {
            ...project,
            userId
          };
        }
        throw new Error('Invalid project data');
      })
    );
    
    return NextResponse.json({ success: true, data: savedProjects });
  } catch (e ) {
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
} 
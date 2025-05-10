"use server"
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Project } from '@/lib/models/project';
import { auth } from '@clerk/nextjs/server';

interface ProjectInput {
  name: string;
  description: string;
  technologies: string[];
  project_url: string;
  thumbnail: string;
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { projects } = await req.json();
    
    const savedProjects = await Project.create(
      projects.map((project: ProjectInput) => ({
        ...project,
        userId
      }))
    );
    
    return NextResponse.json({ projects: savedProjects });
  } catch (error: Error | unknown) {
    console.error('Error saving projects:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 
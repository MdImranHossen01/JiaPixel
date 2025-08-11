import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { type Blog, Prisma } from '@prisma/client';

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ message: 'Could not fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // FIXED: Explicitly type the incoming data from the request
    const data: Blog = (await request.json()) as Blog;

    const newBlog = await prisma.blog.create({ data });
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    // Check if the error is a known Prisma error for unique constraint violation
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return NextResponse.json(
        { message: 'A blog with this slug already exists.' },
        { status: 409 }
      );
    }
    
    // Generic error handling for all other errors
    console.error('Error creating blog:', error);
    return NextResponse.json({ message: 'Could not create blog' }, { status: 500 });
  }
}
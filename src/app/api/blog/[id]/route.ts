import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { type Blog } from '@prisma/client';

// Update a specific blog post
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    // FIXED: Use a type assertion 'as' to correctly type the data from request.json()
    const data = await request.json() as Partial<Blog>;

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ message: 'Could not update blog' }, { status: 500 });
  }
}

// Delete a specific blog post
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.blog.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ message: 'Could not delete blog' }, { status: 500 });
  }
}
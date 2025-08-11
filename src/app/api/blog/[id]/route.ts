import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { type Blog } from '@prisma/client';

// Update a specific blog post
export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    const data = (await request.json()) as Partial<Blog>;

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { message: 'Could not update blog' },
      { status: 500 }
    );
  }
}

// Delete a specific blog post
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    await prisma.blog.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { message: 'Could not delete blog' },
      { status: 500 }
    );
  }
}

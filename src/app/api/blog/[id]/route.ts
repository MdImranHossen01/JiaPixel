import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { type Blog } from '@prisma/client';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data: Partial<Blog> = (await request.json()) as Partial<Blog>;
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

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.blog.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    // Check if the error is a PrismaClientKnownRequestError for record not found
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Blog not found.' },
        { status: 404 }
      );
    }
    // Generic error handling
    console.error("Error deleting blog:", error);
    return NextResponse.json({ message: 'Could not delete blog' }, { status: 500 });
  }
}
 
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import type { Service } from '@prisma/client';

// Update service by ID
export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const body = (await request.json()) as Partial<Service>;

  try {
    const updatedService = await prisma.service.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(updatedService);
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// Delete service by ID
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    await prisma.service.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}

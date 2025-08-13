import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { type Service } from '@prisma/client';

// Get a single service by its ID
export async function GET(request: Request, { params }: { params: { id: string } }) { // FIXED: Removed type annotation
  try {
    const { id } = params;
    const service = await prisma.service.findUnique({
      where: { id },
    });
    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }
    return NextResponse.json(service);
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json({ message: 'Could not fetch service' }, { status: 500 });
  }
}

// Update a specific service
export async function PUT(request: Request, { params }: { params: { id: string } }) { // FIXED: Removed type annotation
  try {
    const { id } = params;
    const data = await request.json() as Partial<Service>;

    const updatedService = await prisma.service.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedService);
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json({ message: 'Could not update service' }, { status: 500 });
  }
}

// Delete a specific service
export async function DELETE(request: Request, { params }: { params: { id: string } }) { // FIXED: Removed type annotation
  try {
    const { id } = params;
    await prisma.service.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json({ message: 'Could not delete service' }, { status: 500 });
  }
}
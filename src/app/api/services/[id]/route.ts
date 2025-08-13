import { NextResponse } from 'next/server';
import { PrismaClient, Prisma, type Service } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * GET a single service by its ID
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const service = await prisma.service.findUnique({
      where: { id },
    });
    
    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }
    
    return NextResponse.json(service);
  } catch {
    return NextResponse.json({ message: 'Error fetching service' }, { status: 500 });
  }
}

/**
 * UPDATE a specific service by its ID
 */
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json() as Partial<Service>;
    
    // Extract pricing from body and handle separately
    const { pricing, ...rest } = body;
    
    // Create update data with all fields except pricing
    const updateData: Prisma.ServiceUpdateInput = {
      ...rest,
    };
    
    // Handle pricing field separately if it exists
    if (pricing !== undefined) {
      // In MongoDB, we can directly set JSON fields to null
      updateData.pricing = pricing as Prisma.InputJsonValue;
    }
    
    const updatedService = await prisma.service.update({
      where: { id },
      data: updateData,
    });
    
    return NextResponse.json(updatedService);
  } catch {
    return NextResponse.json({ message: 'Error updating service' }, { status: 500 });
  }
}

/**
 * DELETE a specific service by its ID
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    await prisma.service.delete({
      where: { id },
    });
    
    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ message: 'Error deleting service' }, { status: 500 });
  }
}
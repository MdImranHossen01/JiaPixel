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
    
    // Create a clean update data object
    const updateData: Prisma.ServiceUpdateInput = {};
    
    // Copy all properties except pricing
    Object.keys(body).forEach(key => {
      if (key !== 'pricing') {
        (updateData as any)[key] = (body as any)[key];
      }
    });
    
    // Handle pricing separately
    if (body.pricing !== undefined) {
      if (body.pricing === null) {
        // If pricing is explicitly set to null, we need to use Prisma.JsonNull
        updateData.pricing = Prisma.JsonNull;
      } else {
        // Otherwise, use the provided value
        updateData.pricing = body.pricing as Prisma.InputJsonValue;
      }
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
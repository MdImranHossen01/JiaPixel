import { NextResponse } from 'next/server';
import { PrismaClient, type Service } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * GET a single service by its ID
 */
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const service = await prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch { // FIXED: Removed unused 'error' variable
    return NextResponse.json({ message: 'Error fetching service' }, { status: 500 });
  }
}

/**
 * UPDATE a specific service by its ID
 */
export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    // FIXED: Type the JSON body as 'unknown' first for type safety.
    const body: unknown = await request.json();

    const updatedService = await prisma.service.update({
      where: { id },
      // Then, assert the type when passing it to Prisma.
      data: body as Partial<Service>,
    });

    return NextResponse.json(updatedService);
  } catch { // FIXED: Removed unused 'error' variable
    return NextResponse.json({ message: 'Error updating service' }, { status: 500 });
  }
}

/**
 * DELETE a specific service by its ID
 */
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    
    await prisma.service.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch { // FIXED: Removed unused 'error' variable
    return NextResponse.json({ message: 'Error deleting service' }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * GET a single service by its ID
 */
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params; // Correctly access id from context
    const service = await prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (error) {
    // Avoid console logs in production code
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
    const { id } = context.params; // Correctly access id from context
    const body = await request.json();

    const updatedService = await prisma.service.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedService);
  } catch (error) {
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
    const { id } = context.params; // Correctly access id from context
    
    await prisma.service.delete({
      where: { id },
    });

    // Return a 204 No Content response, which is standard for a successful DELETE
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting service' }, { status: 500 });
  }
}
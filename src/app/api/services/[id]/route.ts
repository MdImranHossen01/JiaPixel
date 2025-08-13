import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// GET a single service by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const service = await prisma.service.findUnique({
      where: { id: params.id },
    });

    return service 
      ? NextResponse.json(service)
      : NextResponse.json({ message: 'Service not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching service' },
      { status: 500 }
    );
  }
}

// UPDATE a service by ID
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const updatedService = await prisma.service.update({
      where: { id: params.id },
      data: {
        ...body,
        pricing: body.pricing ? JSON.parse(JSON.stringify(body.pricing)) : undefined,
      },
    });

    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating service' },
      { status: 500 }
    );
  }
}

// DELETE a service by ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.service.delete({
      where: { id: params.id },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error deleting service' },
      { status: 500 }
    );
  }
}
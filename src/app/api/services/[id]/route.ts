import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Type for route parameters
type RouteParams = {
  id: string;
};

// GET handler
export async function GET(
  _request: Request,
  { params }: { params: RouteParams }
): Promise<NextResponse> {
  try {
    const service = await prisma.service.findUnique({
      where: { id: params.id },
    });

    return service
      ? NextResponse.json(service)
      : NextResponse.json({ error: 'Service not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT handler
export async function PUT(
  request: Request,
  { params }: { params: RouteParams }
): Promise<NextResponse> {
  try {
    const data = await request.json();
    const updatedService = await prisma.service.update({
      where: { id: params.id },
      data,
    });

    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE handler
export async function DELETE(
  _request: Request,
  { params }: { params: RouteParams }
): Promise<NextResponse> {
  try {
    await prisma.service.delete({
      where: { id: params.id },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
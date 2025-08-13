import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const service = await prisma.service.findUnique({
      where: { id: params.id },
    });

    return service
      ? NextResponse.json(service)
      : NextResponse.json({ error: 'Service not found' }, { status: 404 });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const body: unknown = await request.json();
    
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const updateData: Prisma.ServiceUpdateInput = {
      ...(typeof body === 'object' ? body : {}),
    };

    const updatedService = await prisma.service.update({
      where: { id: params.id },
      data: updateData,
    });

    return NextResponse.json(updatedService);
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    await prisma.service.delete({
      where: { id: params.id },
    });
    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
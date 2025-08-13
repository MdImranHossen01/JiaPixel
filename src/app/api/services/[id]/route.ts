import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  _request: Request,
  context: { params: { id: string } }
) {
  try {
    const service = await prisma.service.findUnique({
      where: { id: context.params.id },
    });

    return service
      ? NextResponse.json(service)
      : NextResponse.json({ message: 'Service not found' }, { status: 404 });
  } catch {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const updatedService = await prisma.service.update({
      where: { id: context.params.id },
      data: body,
    });

    return NextResponse.json(updatedService);
  } catch {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  context: { params: { id: string } }
) {
  try {
    await prisma.service.delete({
      where: { id: context.params.id },
    });
    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
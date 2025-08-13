import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

interface ServiceUpdateData extends Partial<Prisma.ServiceUpdateInput> {
  pricing?: Prisma.InputJsonValue;
}

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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
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
    const body = await request.json() as unknown;
    
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const updateData: ServiceUpdateData = {
      ...body,
      pricing: body.pricing ? JSON.parse(JSON.stringify(body.pricing)) : undefined
    };

    const updatedService = await prisma.service.update({
      where: { id: params.id },
      data: updateData,
    });

    return NextResponse.json(updatedService);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
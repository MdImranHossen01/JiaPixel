import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// Define interfaces for our requests
interface ServiceUpdateBody {
  title?: string;
  slug?: string;
  category?: string;
  bannerImage?: string;
  pricing?: Prisma.InputJsonValue;
  description?: string;
  requirements?: string;
  status?: string;
}

interface RouteParams {
  params: {
    id: string;
  };
}

// Development-only logger
const devLogger = (context: string, error: unknown) => {
  if (process.env.NODE_ENV !== 'production') {
    const errorMessage = error instanceof Error ? error.message : String(error);
    process.stderr.write(`[${context}] ${errorMessage}\n`);
  }
};

// GET a single service by ID
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { id } = params;
    const service = await prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      return NextResponse.json(
        { message: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(service);
  } catch (error) {
    devLogger('GET /api/services/[id]', error);
    return NextResponse.json(
      { message: 'Error fetching service' },
      { status: 500 }
    );
  }
}

// UPDATE a service by ID
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { id } = params;
    const body = await request.json() as Partial<ServiceUpdateBody>;

    const updateData: Prisma.ServiceUpdateInput = {
      ...body,
      ...(body.pricing && { pricing: body.pricing }),
    };

    const updatedService = await prisma.service.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedService);
  } catch (error) {
    devLogger('PUT /api/services/[id]', error);
    return NextResponse.json(
      { message: 'Error updating service' },
      { status: 500 }
    );
  }
}

// DELETE a service by ID
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { id } = params;
    await prisma.service.delete({
      where: { id },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    devLogger('DELETE /api/services/[id]', error);
    return NextResponse.json(
      { message: 'Error deleting service' },
      { status: 500 }
    );
  }
}
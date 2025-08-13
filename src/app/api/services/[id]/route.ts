import { NextResponse, type NextRequest } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// Define an interface for the expected request body
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

// Helper function for development-only error logging
const logError = (context: string, error: unknown) => {
  if (process.env.NODE_ENV !== 'production') {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    process.stderr.write(`[${context}] Error: ${errorMessage}\n`);
  }
};

/**
 * UPDATE a specific service by its ID
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Parse and validate the request body
    const body: unknown = await request.json();
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json(
        { message: 'Invalid request body' },
        { status: 400 }
      );
    }

    // Create a type-safe update data object
    const updateData: Prisma.ServiceUpdateInput = {};
    
    // Safely assign known properties
    const knownProperties: (keyof ServiceUpdateBody)[] = [
      'title', 'slug', 'category', 'bannerImage', 
      'description', 'requirements', 'status'
    ];

    for (const key of knownProperties) {
      if (key in body && body[key] !== undefined) {
        updateData[key] = body[key] as never;
      }
    }

    // Handle pricing field with proper type checking
    if ('pricing' in body && body.pricing !== undefined) {
      updateData.pricing = body.pricing as Prisma.InputJsonValue;
    }

    const updatedService = await prisma.service.update({
      where: { id },
      data: updateData,
    });
    
    return NextResponse.json(updatedService);
  } catch (error: unknown) {
    logError('PUT /api/services/[id]', error);
    return NextResponse.json(
      { message: 'Error updating service' }, 
      { status: 500 }
    );
  }
}

/**
 * DELETE a specific service by its ID
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    await prisma.service.delete({
      where: { id },
    });
    
    return new NextResponse(null, { status: 204 });
  } catch (error: unknown) {
    logError('DELETE /api/services/[id]', error);
    return NextResponse.json(
      { message: 'Error deleting service' }, 
      { status: 500 }
    );
  }
}

/**
 * GET a single service by its ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const service = await prisma.service.findUnique({
      where: { id },
    });
    
    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }
    
    return NextResponse.json(service);
  } catch (error: unknown) {
    logError('GET /api/services/[id]', error);
    return NextResponse.json(
      { message: 'Error fetching service' }, 
      { status: 500 }
    );
  }
}
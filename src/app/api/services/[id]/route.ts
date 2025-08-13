import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface Params {
  params: { id: string };
}

// GET single service by ID
export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const service = await prisma.service.findUnique({
      where: { id: params.id },
    });

    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (err) {
    console.error('Failed to fetch service:', err);
    return NextResponse.json({ error: 'Failed to fetch service' }, { status: 500 });
  }
}

// PUT update service
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const body = await request.json();

    const updatedService = await prisma.service.update({
      where: { id: params.id },
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        slug: body.slug,
        features: Array.isArray(body.features) ? body.features : [],
      },
    });

    return NextResponse.json(updatedService);
  } catch (err) {
    console.error('Failed to update service:', err);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

// DELETE service
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    await prisma.service.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (err) {
    console.error('Failed to delete service:', err);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}

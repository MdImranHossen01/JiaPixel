import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET a single service
export async function GET(request: NextRequest, context: RouteParams) {
  try {
    const { id } = await context.params;
    const service = await prisma.service.findUnique({
      where: { id },
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

// PUT update a service
export async function PUT(request: NextRequest, context: RouteParams) {
  try {
    const { id } = await context.params;
    const body = await request.json() as { 
      title: string; 
      description: string; 
      image?: string 
    };
    
    const { title, description, image } = body;
    
    const service = await prisma.service.update({
      where: { id },
      data: { title, description, image },
    });
    return NextResponse.json(service);
  } catch (err) {
    console.error('Failed to update service:', err);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

// DELETE a service
export async function DELETE(request: NextRequest, context: RouteParams) {
  try {
    const { id } = await context.params;
    await prisma.service.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (err) {
    console.error('Failed to delete service:', err);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
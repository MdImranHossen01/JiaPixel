import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET a single service by ID (for admin purposes)
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
    
    // Get current service
    const currentService = await prisma.service.findUnique({
      where: { id },
    });
    
    if (!currentService) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    
    // Generate new slug if title changed
    let slug = currentService.slug;
    if (title !== currentService.title) {
      slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      // Check if new slug already exists (and not current service)
      const existingService = await prisma.service.findFirst({
        where: { 
          slug,
          NOT: { id }
        },
      });
      
      if (existingService) {
        let counter = 1;
        let newSlug = `${slug}-${counter}`;
        
        while (await prisma.service.findFirst({ 
          where: { 
            slug: newSlug,
            NOT: { id }
          } 
        })) {
          counter++;
          newSlug = `${slug}-${counter}`;
        }
        
        slug = newSlug;
      }
    }
    
    const service = await prisma.service.update({
      where: { id },
      data: { title, description, image, slug },
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
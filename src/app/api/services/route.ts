import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim(); // Remove leading/trailing hyphens
}

// GET all services
export async function GET() {
  try {
    console.log("API: Fetching services...");
    
    await prisma.$connect();
    console.log("API: Database connected");
    
    const services = await prisma.service.findMany({
      orderBy: { id: 'desc' },
    });
    
    console.log(`API: Found ${services.length} services`);
    return NextResponse.json(services);
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json(
      { 
        error: 'Failed to fetch services',
        details: err instanceof Error ? err.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

// POST a new service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { 
      title: string; 
      description: string; 
      image?: string 
    };
    
    const { title, description, image } = body;
    
    // Generate slug from title
    const slug = generateSlug(title);
    
    // Check if slug already exists
    const existingService = await prisma.service.findUnique({
      where: { slug },
    });
    
    if (existingService) {
      // If slug exists, append a number
      let counter = 1;
      let newSlug = `${slug}-${counter}`;
      
      while (await prisma.service.findUnique({ where: { slug: newSlug } })) {
        counter++;
        newSlug = `${slug}-${counter}`;
      }
      
      const service = await prisma.service.create({
        data: { title, description, image, slug: newSlug },
      });
      
      return NextResponse.json(service, { status: 201 });
    }
    
    const service = await prisma.service.create({
      data: { title, description, image, slug },
    });
    
    return NextResponse.json(service, { status: 201 });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
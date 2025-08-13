import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all services
export async function GET() {
  try {
    console.log("API: Fetching services...");
    
    // Test database connection
    await prisma.$connect();
    console.log("API: Database connected");
    
    const services = await prisma.service.findMany({
      orderBy: { id: 'desc' }, // Sort by ID instead of DateTime
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
    
    const service = await prisma.service.create({
      data: { title, description, image },
    });
    return NextResponse.json(service, { status: 201 });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
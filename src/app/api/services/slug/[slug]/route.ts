import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// GET a single service by slug
export async function GET(request: NextRequest, context: RouteParams) {
  try {
    const { slug } = await context.params;
    const service = await prisma.service.findUnique({
      where: { slug },
    });
    
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    
    return NextResponse.json(service);
  } catch (err) {
    console.error('Failed to fetch service by slug:', err);
    return NextResponse.json({ error: 'Failed to fetch service' }, { status: 500 });
  }
}
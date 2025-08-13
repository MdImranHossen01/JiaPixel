// src/app/api/services/[id]/route.ts
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
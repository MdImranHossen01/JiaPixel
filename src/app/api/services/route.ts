import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all services
export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(services);
  } catch (err) {
    console.error('Failed to fetch services:', err);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

// POST create a new service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const service = await prisma.service.create({
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        slug: body.slug,
        features: Array.isArray(body.features) ? body.features : [], // ensure it's array
      },
    });

    return NextResponse.json(service);
  } catch (err) {
    console.error('Failed to create service:', err);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

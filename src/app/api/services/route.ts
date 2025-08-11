import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { type Service } from '@prisma/client';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: 'asc' },
    });
    return NextResponse.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json({ message: "Could not fetch services" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data: Service = (await request.json()) as Service;
    const newService = await prisma.service.create({ data });
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json({ message: "Could not create service" }, { status: 500 });
  }
}
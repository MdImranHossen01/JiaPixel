import { MetadataRoute } from 'next';
import prisma from '@/lib/prisma'; // 1. Import your Prisma client

// 2. Make the function async and return a Promise
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.jiapixel.com';

  // --- Static Routes ---
  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/faq',
    '/mission-vision',
    '/terms-and-conditions',
    '/privacy-policy',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1.0 : 0.8,
  }));

  // --- Dynamic Service Routes ---
  // 3. Fetch all services from your database
  const services = await prisma.service.findMany({
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    lastModified: service.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 4. Combine static and dynamic URLs
  return [
    ...staticUrls,
    ...serviceUrls,
  ];
}
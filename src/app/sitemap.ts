import { MetadataRoute } from 'next';
import prisma from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.jiapixel.com';

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

  const services = await prisma.service.findMany({
    select: {
      slug: true,
      createdAt: true,
    },
  });

  // FIXED: Added an explicit type to the 'service' parameter to resolve the error.
  const serviceUrls = services.map((service: { slug: string; createdAt: Date }) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: service.createdAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    ...staticUrls,
    ...serviceUrls,
  ];
}
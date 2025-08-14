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

  // FIXED: Explicitly type the array to match the required sitemap type.
  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1.0 : 0.8,
  }));

  const services = await prisma.service.findMany({
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  // FIXED: Explicitly type this array as well for consistency and type safety.
  const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: service.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    ...staticUrls,
    ...serviceUrls,
  ];
}
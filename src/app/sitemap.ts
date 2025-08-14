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

  // This will now work because the schema is correct
  const services = await prisma.service.findMany({
    select: {
      slug: true,
      updatedAt: true, // Using the best field for lastModified
    },
  });

  const serviceUrls = services.map((service: { slug: string; updatedAt: Date }) => ({
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
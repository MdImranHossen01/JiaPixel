import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jiapixel.com';

  // Add all your static page routes here
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

  return [
    ...staticUrls,
  ];
}
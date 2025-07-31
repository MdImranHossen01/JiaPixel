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
    changeFrequency: 'monthly', // Or 'weekly', 'daily'
    priority: route === '/' ? 1.0 : 0.8,
  } as const));

  // If you have dynamic routes (e.g., blog posts), you would fetch them
  // from your database or CMS here and add them to the sitemap.
  // Example for dynamic routes:
  // const blogPosts = await getBlogPostsFromCMS();
  // const dynamicUrls = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly',
  //   priority: 0.6,
  // }));

  return [
    ...staticUrls,
    // ...dynamicUrls, // Uncomment when you have dynamic routes
  ];
}
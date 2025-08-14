import { Metadata } from 'next';
import { Service } from '@prisma/client';
import ServiceDetailsClient from './ServiceDetailsClient';

async function getService(slug: string): Promise<Service | null> {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'}/api/services/slug/${slug}`;
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json() as Service;
    return data;
    
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to fetch service:", error);
    return null;
  }
}

// Generates dynamic metadata for the page
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const service = await getService(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | JiaPixel',
      description: 'The service you are looking for does not exist.',
    };
  }

  const title = `${service.title} | JiaPixel`;
  const description = service.description.length > 160
    ? `${service.description.substring(0, 157)}...`
    : service.description;
  const ogImage = service.image ?? 'https://www.jiapixel.com/icon.png';

  return {
    title,
    description,
    keywords: [service.title, 'digital agency', 'web development', 'SEO', 'JiaPixel'],
    authors: [{ name: 'JiaPixel' }],
    publisher: 'JiaPixel',
    metadataBase: new URL('https://www.jiapixel.com'),
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      url: `https://www.jiapixel.com/services/${service.slug}`,
      siteName: 'JiaPixel',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@jiapixel',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// The main page component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ServiceDetailPage({ params }: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const service = await getService(params.slug);
  
  return <ServiceDetailsClient service={service} />;
}
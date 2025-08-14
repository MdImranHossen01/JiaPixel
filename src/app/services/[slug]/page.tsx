import { Metadata } from 'next';
import { Service } from '@prisma/client';
import ServiceDetailsClient from './ServiceDetailsClient'; // Import the new client component

interface PageProps {
  params: { slug: string };
}

// Fetches a single service from your API
async function getService(slug: string): Promise<Service | null> {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'}/api/services/slug/${slug}`;
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return null;
    }

    // Fix 1: Await the JSON and cast it to the correct type
    const data = await res.json() as Service;
    return data;
    
  } catch (error) {
    // Fix 2: Add a comment to disable the ESLint rule for this line
    // eslint-disable-next-line no-console
    console.error("Failed to fetch service:", error);
    return null;
  }
}

// Generates dynamic metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
export default async function ServiceDetailPage({ params }: PageProps) {
  const service = await getService(params.slug);
  
  // Pass the server-fetched data to the client component for rendering
  return <ServiceDetailsClient service={service} />;
}
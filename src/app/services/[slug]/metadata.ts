import { Metadata } from 'next';
import { Service } from '@prisma/client';

interface MetadataParams {
  params: { slug: string };
}

// Function to generate metadata for the service page
export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  try {
    // Fetch the service data
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'}/api/services/slug/${params.slug}`);
    
    if (!response.ok) {
      return {
        title: 'Service Not Found | JiaPixel',
        description: 'The service you are looking for could not be found.',
      };
    }
    
    const service = await response.json() as Service;
    
    // Generate a clean title and description
    const title = `${service.title} | JiaPixel`;
    const description = service.description.length > 160 
      ? `${service.description.substring(0, 157)}...` 
      : service.description;
    
    // OpenGraph image - use service image or fallback to default
    const ogImage = service.image ?? 'https://www.jiapixel.com/icon.png';
    
    return {
      title,
      description,
      keywords: [service.title, 'digital agency', 'web development', 'SEO', 'JiaPixel'],
      authors: [{ name: 'JiaPixel' }],
      creator: 'JiaPixel',
      publisher: 'JiaPixel',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
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
        site: '@jiapixel',
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch {
    return {
      title: 'Service Not Found | JiaPixel',
      description: 'The service you are looking for could not be found.',
    };
  }
}
'use client';
import { useEffect, useState } from 'react';
import { Service } from '@prisma/client';
import Link from 'next/link';
import { Metadata } from 'next';

// Generate metadata for the services listing page
export const metadata: Metadata = {
  title: 'Our Services | JiaPixel',
  description: 'Explore our comprehensive range of digital services including web development, mobile app development, SEO, and digital marketing solutions.',
  keywords: ['digital services', 'web development', 'mobile app development', 'SEO', 'digital marketing', 'JiaPixel'],
  authors: [{ name: 'JiaPixel' }],
  creator: 'JiaPixel',
  publisher: 'JiaPixel',
  metadataBase: new URL('https://www.jiapixel.com'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services | JiaPixel',
    description: 'Explore our comprehensive range of digital services including web development, mobile app development, SEO, and digital marketing solutions.',
    url: 'https://www.jiapixel.com/services',
    siteName: 'JiaPixel',
    images: [
      {
        url: 'https://www.jiapixel.com/icon.png',
        width: 1200,
        height: 630,
        alt: 'JiaPixel Digital Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | JiaPixel',
    description: 'Explore our comprehensive range of digital services including web development, mobile app development, SEO, and digital marketing solutions.',
    images: ['https://www.jiapixel.com/icon.png'],
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

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Failed to fetch services: ${res.status} - ${errorText}`);
        }
        
        const data = await res.json() as Service[];
        setServices(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('CLIENT Error:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    
    void fetchServices();
  }, []);

  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="container mx-auto px-4 py-12" suppressHydrationWarning>
      <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
      
      {error && (
        <div className="mb-8 p-4 bg-red-100 text-red-700 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      )}
      
      {services.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">No services available at the moment.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh Page
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {service.image && (
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
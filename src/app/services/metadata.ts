import { Metadata } from 'next';

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
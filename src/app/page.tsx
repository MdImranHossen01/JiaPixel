import type { Metadata } from 'next';

import Hero from "./components/Home/Hero/Hero";
import HowWeWork from "./components/Home/HowWeWork/HowWeWork";
import IndustriesServed from "./components/Home/IndustriesWeServed/IndustriesWeServed";
import ServicesOverview from "./components/Home/ServicesOverview/ServicesOverview";
import Stats from "./components/Stats/Stats";

export const metadata: Metadata = {
  title: 'Jia Pixel | Reliable Web Development & Digital Marketing Agency',
  description: 'Jia Pixel is a leading digital agency in Bangladesh specializing in custom web development, SEO, and results-driven digital marketing strategies. Contact us today!',
  
  // Open Graph (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Jia Pixel | Reliable Web Development & Digital Marketing Agency',
    description: 'Jia Pixel is a leading digital agency in Bangladesh specializing in custom web development, SEO, and results-driven digital marketing strategies.',
    url: 'https://www.jiapixel.com',
    siteName: 'Jia Pixel',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/5f4457266e6bc413f94c5229/6077139599d92f8a5d8b3e93_13f95248dea5407f780cc9011f1a2acce458b09c_office-manager-professional-development.jpeg', // Replace with your image URL
        width: 1200,
        height: 630,
        alt: 'Jia Pixel Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Jia Pixel | Reliable Web Development & Digital Marketing Agency',
    description: 'Jia Pixel is a leading digital agency in Bangladesh specializing in custom web development, SEO, and results-driven digital marketing strategies.',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/5f4457266e6bc413f94c5229/6077139599d92f8a5d8b3e93_13f95248dea5407f780cc9011f1a2acce458b09c_office-manager-professional-development.jpeg', // Replace with your image URL
        width: 1200,
        height: 630,
        alt: 'Jia Pixel Agency',
      },
    ],
  },

  // Optional: For controlling search engine crawlers
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};



export default function Home() {
  return (
    <main>
     <Hero></Hero>
     <ServicesOverview></ServicesOverview>
     <HowWeWork></HowWeWork>
     <IndustriesServed></IndustriesServed>
     <Stats></Stats>
      
    </main>
  );
}

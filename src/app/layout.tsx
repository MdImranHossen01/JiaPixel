import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react"; // 1. Import Suspense
import GoogleTagManager from "./components/GoogleTagManager"; // 2. Import your GTM 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.jiapixel.com'), // Important!
  title: "Jia Pixel",
  description: "A leading digital agency in Bangladesh.",
  alternates: {
    canonical: 'https://www.jiapixel.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jia Pixel",
    description: "A leading digital agency in Bangladesh.",
    url: 'https://www.jiapixel.com',
    siteName: 'Jia Pixel',
    images: [
      {
        url: 'https://www.jiapixel.com/icon.png',
        width: 1200,
        height: 630,
        alt: 'Jia Pixel - Reliable Web Development & Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jia Pixel",
    description: "A leading digital agency in Bangladesh.",
    images: [
      {
        url: 'https://www.jiapixel.com/icon.png',
        width: 1200,
        height: 630,
        alt: 'Jia Pixel - Reliable Web Development & Digital Marketing Agency',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="JWpS0CTCZQueL8zbGQi3mvgV7kUrk2HDkB73M1B_aAM" />
      {/* The <head> tag is automatically populated by Next.js from your metadata */}
      {/* <body className="min-h-screen flex flex-col {`${geistSans.variable} ${geistMono.variable} antialiased`}"> */}
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}>
        {/* 3. Add the GTM component wrapped in Suspense here */}
        <Suspense fallback={null}>
          <GoogleTagManager />
        </Suspense>

              {/* Add this Schema Script block here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Jia Pixel",
              "url": "https://www.jiapixel.com",
              "logo": "https://www.jiapixel.com/icon.png", // Change to your actual logo URL
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+8801919011101", // Change to your business phone number
                "contactType": "Customer Service"
              }
            })
          }}
        />
      
        
        <Navbar />
        <div className="grow-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
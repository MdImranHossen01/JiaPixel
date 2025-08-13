import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react";
import GoogleTagManager from "./components/GoogleTagManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.jiapixel.com'),
  title: "Jia Pixel",
  description: "A leading digital agency in Bangladesh.",
  verification: {
    google: "JWpS0CTCZQueL8zbGQi3mvgV7kUrk2HDkB73M1B_aAM",
  },
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
        alt: 'Jia Pixel | Reliable Web Development & Digital Agency',
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
        alt: 'Jia Pixel | Reliable Web Development & Digital Agency',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Jia Pixel",
              "url": "https://www.jiapixel.com",
              "logo": "https://www.jiapixel.com/icon.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+8801919011101",
                "contactType": "Customer Service"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`} suppressHydrationWarning>
        <Suspense fallback={null}>
          <GoogleTagManager />
        </Suspense>
        
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
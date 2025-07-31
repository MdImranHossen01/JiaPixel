import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../src/app/globals.css' // Adjust path if needed


declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const pageview = (url: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
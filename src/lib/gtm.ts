// src/lib/gtm.ts

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};

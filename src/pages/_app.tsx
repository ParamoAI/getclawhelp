import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import '@/styles/globals.css';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  // Fire Meta Pixel "Lead" event on Calendly link clicks
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href*="calendly.com"]');
      if (anchor && window.fbq) {
        window.fbq('track', 'Lead');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return <Component {...pageProps} />;
}

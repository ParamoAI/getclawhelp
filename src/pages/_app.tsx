import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { trackMetaEvent } from '@hacktoolkit/nextjs-htk';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // Fire Meta Pixel "Lead" event on Calendly link clicks
  useEffect(() => {
    const handler = () => {
      trackMetaEvent('Lead');
    };
    const clickHandler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href*="calendly.com"]');
      if (anchor) {
        handler();
      }
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  return <Component {...pageProps} />;
}

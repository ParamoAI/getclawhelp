import Head from 'next/head';
import { GoogleAnalytics, MetaPixel } from '@hacktoolkit/nextjs-htk';

import { ANALYTICS, BUSINESS, SEO } from '@/config';

import styles from '@/styles/Layout.module.css';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title,
  description = SEO.description.default,
}: LayoutProps) {
  const pageTitle = SEO.formatTitle(title);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={SEO.keywords.join(', ')} />
        <link rel="canonical" href={BUSINESS.url} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content={SEO.og.type} />
        <meta property="og:url" content={SEO.og.url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={SEO.og.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={SEO.og.twitter.card} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={SEO.og.image} />
        <meta name="twitter:site" content={SEO.og.twitter.site} />
      </Head>
      <GoogleAnalytics measurementId={ANALYTICS.google.measurementId} />
      <GoogleAnalytics measurementId={ANALYTICS.google.ga4MeasurementId} />
      <MetaPixel pixelId={ANALYTICS.meta.pixelId} />
      <div className={styles.bgGradient} />
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

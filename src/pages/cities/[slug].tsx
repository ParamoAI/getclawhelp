import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { BUSINESS, SEO } from '@/config';
import { CITIES, City } from '@/config/cities';

import Layout from '@/components/Layout';

import styles from '@/styles/Article.module.css';

interface CityPageProps {
  city: City;
}

export default function CityPage({ city }: CityPageProps) {
  const title = `AI Assistant Setup in ${city.name} | OpenClaw`;
  const description = city.description;

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `ClawCon ${city.name} — OpenClaw AI Meetup`,
    description: city.description,
    url: 'https://claw-con.com',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: city.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressCountry: city.country,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'OpenClaw / Paramo AI',
      url: BUSINESS.url,
    },
  };

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${BUSINESS.url}/cities/${city.slug}/`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BUSINESS.url}/cities/${city.slug}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      </Head>
      <Layout title={title} description={description}>
        <article className={styles.article}>
          <Link href="/" className={styles.back}>
            ← Back to Home
          </Link>

          <div className={styles.badge}>
            <span>📍</span>
            <span>{city.name}, {city.country}</span>
          </div>

          <h1>AI Assistant Setup in {city.name}</h1>

          <p className={styles.lead}>{city.description} Join ClawCon {city.name}.</p>

          <h2>Why OpenClaw in {city.name}?</h2>
          <p>{city.localFlavor}</p>

          <h2>What You Get</h2>
          <ul>
            <li><strong>Self-hosted AI</strong> — Your data stays on servers you control</li>
            <li><strong>Multi-channel</strong> — WhatsApp, Slack, Discord, Telegram, and more</li>
            <li><strong>Any LLM</strong> — Claude, GPT-4, Gemini, or local models</li>
            <li><strong>24/7 operation</strong> — Your assistant never sleeps</li>
          </ul>

          <h2>Join ClawCon {city.name}</h2>
          <p>
            Meet other OpenClaw users in {city.name}. Learn automation strategies, share workflows,
            and connect with the community. Visit{' '}
            <a href="https://claw-con.com" target="_blank" rel="noopener noreferrer">
              claw-con.com
            </a>{' '}
            for upcoming events.
          </p>

          <div className={styles.ctaBox}>
            <h3>Ready to set up OpenClaw in {city.name}?</h3>
            <p>Book a free 30-minute call and we&apos;ll get you running today.</p>
            <a
              href={BUSINESS.calendly.url}
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Call →
            </a>
          </div>
        </article>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CITIES.map((city) => ({
    params: { slug: city.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CityPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const city = CITIES.find((c) => c.slug === slug);

  if (!city) {
    return { notFound: true };
  }

  return { props: { city } };
};

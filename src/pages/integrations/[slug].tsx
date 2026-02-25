import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { BUSINESS, SEO } from '@/config';
import { INTEGRATIONS, Integration } from '@/config/integrations';

import Layout from '@/components/Layout';

import styles from '@/styles/Article.module.css';

interface IntegrationPageProps {
  integration: Integration;
}

export default function IntegrationPage({ integration }: IntegrationPageProps) {
  const title = `How to Connect OpenClaw to ${integration.name}: Complete Setup Guide`;
  const description = integration.description;

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${BUSINESS.url}/integrations/${integration.slug}/`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BUSINESS.url}/integrations/${integration.slug}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Layout title={title} description={description}>
        <article className={styles.article}>
          <Link href="/" className={styles.back}>
            ← Back to Home
          </Link>

          <div className={styles.badge}>
            <span>{integration.icon}</span>
            <span>{integration.name} Integration</span>
          </div>

          <h1>How to Connect OpenClaw to {integration.name}</h1>

          <p className={styles.lead}>{integration.description}</p>

          <h2>What You Can Do</h2>
          <p>
            With OpenClaw connected to {integration.name}, you can:
          </p>
          <ul>
            <li>Receive and respond to messages automatically</li>
            <li>Run custom workflows triggered by conversations</li>
            <li>Integrate with your existing tools and APIs</li>
            <li>Operate 24/7 without manual intervention</li>
          </ul>

          <h2>Getting Started</h2>
          <p>
            The full setup guide for {integration.name} includes step-by-step instructions for:
          </p>
          <ol>
            <li>Creating the necessary credentials and tokens</li>
            <li>Configuring OpenClaw to connect</li>
            <li>Testing your integration</li>
            <li>Setting up your first automation</li>
          </ol>

          <div className={styles.ctaBox}>
            <h3>Want us to set up {integration.name} for you?</h3>
            <p>Book a free 30-minute call and we&apos;ll configure everything.</p>
            <a
              href={BUSINESS.calendly.url}
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Call →
            </a>
          </div>

          <h2>Related Integrations</h2>
          <ul>
            {INTEGRATIONS.filter((i) => i.slug !== integration.slug)
              .slice(0, 4)
              .map((i) => (
                <li key={i.slug}>
                  <Link href={`/integrations/${i.slug}/`}>
                    {i.icon} {i.name} Integration
                  </Link>
                </li>
              ))}
          </ul>
        </article>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = INTEGRATIONS.map((integration) => ({
    params: { slug: integration.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<IntegrationPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const integration = INTEGRATIONS.find((i) => i.slug === slug);

  if (!integration) {
    return { notFound: true };
  }

  return { props: { integration } };
};

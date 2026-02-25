import Head from 'next/head';
import Link from 'next/link';

import { BUSINESS, SEO } from '@/config';

import Layout from '@/components/Layout';

import styles from '@/styles/Legal.module.css';

export default function Terms() {
  const title = 'Terms of Service';
  const description = 'Terms of Service for GetClawHelp — the rules and guidelines for using our services.';

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${BUSINESS.url}/terms/`} />
      </Head>
      <Layout title={title} description={description}>
        <div className={styles.container}>
          <Link href="/" className={styles.back}>
            ← Back to GetClawHelp
          </Link>
          <h1>Terms of Service</h1>
          <p className={styles.updated}>Last updated: February 23, 2026</p>

          <p>
            Welcome to GetClawHelp. By using our website and services, you agree to these Terms of
            Service.
          </p>

          <h2>1. Services</h2>
          <p>
            GetClawHelp provides Done-For-You OpenClaw setup services. We install and configure
            OpenClaw on your server during a live 1-on-1 call.
          </p>

          <h2>2. Your Responsibilities</h2>
          <ul>
            <li>Provide accurate server access credentials for the setup.</li>
            <li>Ensure you have the right to use the server and any API keys provided.</li>
            <li>Be present during the scheduled setup call.</li>
          </ul>

          <h2>3. Payment</h2>
          <p>
            Payment is due at the time of booking. All payments are processed securely through
            Stripe. Prices are listed in USD unless otherwise noted.
          </p>

          <h2>4. Refunds</h2>
          <p>
            If we cannot complete your setup for any reason, you will receive a full refund. If you
            cancel before your scheduled call, you will receive a full refund.
          </p>

          <h2>5. Disclaimer</h2>
          <p>
            OpenClaw is open-source software maintained by a third party. We provide setup
            assistance but do not guarantee the ongoing operation or maintenance of OpenClaw itself.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            GetClawHelp is not responsible for any damages arising from your use of OpenClaw or our
            services, including but not limited to data loss, server issues, or third-party service
            failures.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of our services constitutes
            acceptance of any changes.
          </p>

          <h2>8. Contact</h2>
          <p>
            Questions about these terms? Contact us via X (Twitter) at{' '}
            <a href={BUSINESS.social.twitterUrl} target="_blank" rel="noopener noreferrer">
              {BUSINESS.social.twitter}
            </a>
            .
          </p>
        </div>
      </Layout>
    </>
  );
}

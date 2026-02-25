import Head from 'next/head';
import Link from 'next/link';

import { BUSINESS, SEO } from '@/config';

import Layout from '@/components/Layout';

import styles from '@/styles/Legal.module.css';

export default function Privacy() {
  const title = 'Privacy Policy';
  const description = 'Privacy Policy for GetClawHelp — how we collect, use, and protect your data.';

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${BUSINESS.url}/privacy/`} />
      </Head>
      <Layout title={title} description={description}>
        <div className={styles.container}>
          <Link href="/" className={styles.back}>
            ← Back to GetClawHelp
          </Link>
          <h1>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: February 23, 2026</p>

          <p>
            GetClawHelp (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website{' '}
            <a href={BUSINESS.url}>{BUSINESS.domain}</a>. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website and services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            <strong>Information you provide:</strong>
          </p>
          <ul>
            <li>
              <strong>Contact information:</strong> Name and email address when you submit our
              onboarding form.
            </li>
            <li>
              <strong>Service credentials:</strong> Server access details (SSH/VPS credentials), API
              keys, and configuration preferences you provide for us to complete your setup.
            </li>
            <li>
              <strong>Payment information:</strong> Payments are processed by Stripe. We do not
              store your credit card details. See{' '}
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
                Stripe&apos;s Privacy Policy
              </a>
              .
            </li>
          </ul>
          <p>
            <strong>Information collected automatically:</strong>
          </p>
          <ul>
            <li>Standard web analytics (page views, referral source) via Google Analytics.</li>
            <li>Advertising platform pixels (Meta, TikTok) for ad performance measurement.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To deliver the Done-For-You OpenClaw setup service you purchased.</li>
            <li>To communicate with you about your order and setup progress.</li>
            <li>To improve our website and services.</li>
            <li>To measure advertising effectiveness.</li>
          </ul>

          <h2>3. How We Protect Your Information</h2>
          <p>We take the security of your data seriously:</p>
          <ul>
            <li>
              Server credentials you provide are used solely to complete your setup and are deleted
              after your service is delivered.
            </li>
            <li>We do not share, sell, or rent your personal information to third parties.</li>
            <li>All data is transmitted over encrypted connections (HTTPS).</li>
          </ul>

          <h2>4. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li>
              <strong>Stripe</strong> — payment processing
            </li>
            <li>
              <strong>Google Analytics</strong> — website analytics
            </li>
            <li>
              <strong>Meta (Facebook/Instagram)</strong> — advertising
            </li>
            <li>
              <strong>TikTok</strong> — advertising
            </li>
          </ul>
          <p>Each service has its own privacy policy governing how they handle your data.</p>

          <h2>5. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies for analytics and advertising purposes.
            You can control cookies through your browser settings.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request deletion of your personal data.</li>
            <li>Opt out of marketing communications.</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>
            We retain your contact information for customer support purposes. Server credentials are
            deleted within 7 days of completing your setup. You may request deletion of all your
            data at any time.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or want to exercise your data rights,
            contact us via X (Twitter) at{' '}
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

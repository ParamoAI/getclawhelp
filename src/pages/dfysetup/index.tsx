import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import { BUSINESS, SEO } from '@/config';

import Layout from '@/components/Layout';
import StructuredData from '@/components/StructuredData';

import styles from '@/styles/DfySetup.module.css';

const STRIPE_URL = 'https://buy.stripe.com/7sY6oI3TQ1BQarqgBF8AE05';

const handleCheckoutClick = () => {
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'InitiateCheckout', {
      value: 247.0,
      currency: 'USD',
      content_name: 'DFY OpenClaw Setup',
      content_category: 'Service',
    });
  }
};

const features = [
  {
    icon: '\uD83D\uDDA5\uFE0F',
    title: 'Full VPS Installation',
    desc: 'Complete OpenClaw installation and configuration on your VPS — production-ready from day one.',
  },
  {
    icon: '\uD83E\uDDE0',
    title: 'Your Preferred LLM Connected',
    desc: 'We connect Claude, GPT, Gemini, or whichever model you prefer. Fully configured and tested.',
  },
  {
    icon: '\uD83D\uDCAC',
    title: '1 Messaging Channel',
    desc: "WhatsApp, Telegram, Slack, or Discord — pick your platform and we'll set it up for you.",
  },
];

const steps = [
  {
    num: 1,
    title: 'Pay & Submit Your Details',
    desc: 'Complete checkout and fill out a quick onboarding form with your preferences and API keys.',
  },
  {
    num: 2,
    title: 'We Build Your Setup',
    desc: 'Our team configures your OpenClaw instance exactly to your specs. Usually done within 24 hours.',
  },
  {
    num: 3,
    title: 'Go Live',
    desc: "Hop on a 30-min walkthrough call, then start automating. We're here for 7 days if you need anything.",
  },
];

const faqs = [
  {
    question: 'What do I need to provide?',
    answer:
      'Just your VPS credentials (we can help you get one), your LLM API key, and which messaging platform you want connected. Our onboarding form walks you through everything.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most setups are completed within 24 hours of receiving your onboarding form.',
  },
  {
    question: "What if I buy now but I'm not ready yet?",
    answer:
      "No problem! Your setup doesn't expire. Submit your onboarding form whenever you're ready and we'll get started.",
  },
  {
    question: 'Can I add more channels or features later?',
    answer:
      'Absolutely. We offer custom add-ons and advanced configurations. Just reach out after your initial setup.',
  },
  {
    question: 'Is there a refund policy?',
    answer:
      "If we can't complete your setup for any reason, you get a full refund. No questions asked.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Done-For-You OpenClaw Setup',
  provider: {
    '@type': 'Organization',
    name: BUSINESS.name,
    url: BUSINESS.url,
  },
  name: 'Done-For-You OpenClaw Setup',
  description:
    'We install, configure, and deploy OpenClaw on your VPS in 24 hours. Includes LLM connection, messaging channel setup, custom persona, security hardening, walkthrough call, and 7 days of support.',
  url: `${BUSINESS.url}/dfysetup/`,
  offers: {
    '@type': 'Offer',
    price: '247',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BUSINESS.url}/` },
    { '@type': 'ListItem', position: 2, name: 'DFY Setup', item: `${BUSINESS.url}/dfysetup/` },
  ],
};

export default function DfySetup() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const title = 'Done-For-You OpenClaw Setup — Live in 24 Hours';
  const description =
    'Done-For-You OpenClaw setup. We install, configure, and deploy your AI assistant on your VPS in 24 hours. One-time payment of $247. No subscription.';

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="OpenClaw setup service, done for you OpenClaw, OpenClaw installation, OpenClaw VPS setup, AI assistant setup, OpenClaw configuration service"
        />
        <link rel="canonical" href={`${BUSINESS.url}/dfysetup/`} />
        <meta property="og:url" content={`${BUSINESS.url}/dfysetup/`} />
        <meta property="og:title" content={`${title} | ${BUSINESS.name}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${BUSINESS.url}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | ${BUSINESS.name}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${BUSINESS.url}/og-image.png`} />
        <meta name="twitter:site" content={BUSINESS.social.twitter} />
        <StructuredData type="service" data={serviceSchema} />
        <StructuredData type="faq" data={faqSchema} />
        <StructuredData type="breadcrumb" data={breadcrumbSchema} />
      </Head>
      <Script id="meta-pixel-dfysetup" strategy="afterInteractive">
        {`if(typeof fbq!=='undefined'){fbq('init','1993957208166087');fbq('track','PageView');}`}
      </Script>
      <Layout title={title} description={description}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.badge}>
              &#x1F525; Launch Special — 65% Off (First 50 Customers Only)
            </div>
            <h1>
              Your AI Assistant, Set Up and Running in{' '}
              <span className={styles.highlight}>24 Hours</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We handle everything — installation, configuration, and deployment. You just submit
              your details and we do the rest.
            </p>
            <div className={styles.priceBlock}>
              <span className={styles.priceOriginal}>$697</span>
              <span className={styles.priceCurrent}>$247</span>
            </div>
            <div className={styles.ctaGroup}>
              <a href={STRIPE_URL} className={styles.btnPrimary} onClick={handleCheckoutClick}>
                Claim Your Setup &rarr;
              </a>
              <p className={styles.ctaNote}>One-time payment. No subscription. No hidden fees.</p>
              <p className={styles.urgencyNote}>
                &#x26A1; We&apos;re keeping this low while we build case studies. It won&apos;t last.
              </p>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className={styles.features}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>What You Get</p>
            <h2 className={styles.sectionTitle}>Everything you need to go live</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature) => (
                <div key={feature.title} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.howItWorks}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>How It Works</p>
            <h2 className={styles.sectionTitle}>3 simple steps to go live</h2>
            <div className={styles.steps}>
              {steps.map((step) => (
                <div key={step.num} className={styles.step}>
                  <div className={styles.stepNumber}>{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>FAQ</p>
            <h2 className={styles.sectionTitle}>Common questions</h2>
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <div key={faq.question} className={styles.faqItem}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(i)}>
                    {faq.question}
                    <svg
                      className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ''}`}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`${styles.faqAnswer} ${openFaq === i ? styles.faqAnswerOpen : ''}`}
                  >
                    <div className={styles.faqAnswerInner}>{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta} id="checkout">
          <div className={styles.container}>
            <h2>
              Ready to get <span className={styles.highlight}>started</span>?
            </h2>
            <div className={styles.priceBlock} style={{ marginBottom: '32px' }}>
              <span className={styles.priceOriginal}>$697</span>
              <span className={styles.priceCurrent}>$247</span>
            </div>
            <a href={STRIPE_URL} className={styles.btnPrimary} onClick={handleCheckoutClick}>
              Claim Your Setup &rarr;
            </a>
            <p className={styles.finalCtaNote}>
              One-time payment. Price increases after launch period.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}

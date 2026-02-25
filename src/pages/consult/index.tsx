import Head from 'next/head';
import Link from 'next/link';

import { BUSINESS, SEO } from '@/config';

import Layout from '@/components/Layout';

import styles from '@/styles/Consult.module.css';

const services = [
  { icon: '🤖', title: 'Agent Development', desc: 'Custom AI agents for your workflows' },
  { icon: '⚙️', title: 'Workflow Automation', desc: 'Connect apps, automate tasks' },
  { icon: '🏗️', title: 'Architecture Consulting', desc: 'System design & infrastructure' },
  { icon: '🔌', title: 'Custom Integrations', desc: 'Connect any app or API' },
  { icon: '📚', title: 'Training & Support', desc: 'Learn to build your own' },
  { icon: '🚀', title: 'Something Else?', desc: "Tell us what you're building" },
];

export default function Consult() {
  const title = 'Custom Solutions — Tell Us What You Need';
  const description =
    "Need something beyond a basic setup? Tell us what you're building and we'll scope a custom solution — agents, workflows, architecture, and more.";

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${BUSINESS.url}/consult/`} />
        <meta property="og:url" content={`${BUSINESS.url}/consult/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Layout title={title} description={description}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.badge}>🔧 Custom Solutions</div>
            <h1>
              Need Something <span className={styles.highlightOrange}>More Custom</span>?
            </h1>
            <p className={styles.heroSubtitle}>
              Beyond basic setup — agent development, workflow automation, architecture consulting.
              Tell us what you&apos;re building.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.services}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <div key={service.title} className={styles.serviceCard}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to discuss your project?</h2>
            <p>Book a call and tell us what you need. We&apos;ll scope out a solution together.</p>
            <a
              href={BUSINESS.calendly.url}
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Consultation
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}

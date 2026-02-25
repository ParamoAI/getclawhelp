import Head from 'next/head';
import Link from 'next/link';

import { BUSINESS } from '@/config';

import { HomeStructuredData } from '@/components/StructuredData';
import Layout from '@/components/Layout';

import styles from '@/styles/Home.module.css';

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Head>
        <HomeStructuredData />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.badge}>🤝 Free Setup Call — We Do Everything For You</div>
            <h1 className={styles.heroTitle}>
              Need Help With <span className={styles.highlight}>OpenClaw</span>?
              <br />
              We&apos;ll Set It Up <span className={styles.highlightOrange}>For You</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Book a free 30-minute call. We install OpenClaw, connect your apps, and get your AI
              assistant running — no coding, no terminal, no stress.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href={BUSINESS.calendly.url}
                className={styles.btnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Free Call
                <ArrowIcon />
              </a>
              <p className={styles.ctaNote}>No credit card required · Takes 30 minutes</p>
            </div>

            {/* How It Works Mini */}
            <div className={styles.valuePropsSteps}>
              <div className={styles.valuePropsStep}>
                <span>📞</span>
                <span className={styles.valuePropsStepText}>Book a free call</span>
              </div>
              <div className={styles.valuePropsStep}>
                <span>🛠️</span>
                <span className={styles.valuePropsStepText}>We set everything up</span>
              </div>
              <div className={styles.valuePropsStep}>
                <span>✅</span>
                <span className={styles.valuePropsStepText}>Your AI assistant is live</span>
              </div>
            </div>

            <div className={styles.valueProps}>
              <div className={styles.valueProp}>
                <CheckIcon />
                Running in 30 minutes
              </div>
              <div className={styles.valueProp}>
                <CheckIcon />
                No technical skills needed
              </div>
              <div className={styles.valueProp}>
                <CheckIcon />
                We do everything for you
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className={styles.section} style={{ paddingBottom: 40 }}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Pricing</p>
            <h2 className={styles.sectionTitle}>OpenClaw is free. Really.</h2>
            <div className={styles.featuresGridSmall}>
              <div className={styles.featureCardCentered}>
                <div className={styles.featureIconCentered}>💰</div>
                <h3>$0 for OpenClaw</h3>
                <p>
                  OpenClaw is open source and always free. You just need a small server ($5–10/mo)
                  and an AI API key. We handle the rest.
                </p>
              </div>
              <div className={styles.featureCardCentered}>
                <div className={styles.featureIconCentered}>🎯</div>
                <h3>One-Time Setup</h3>
                <p>
                  No subscriptions, no recurring fees for our help. Book the call, we set it up,
                  you&apos;re done. It&apos;s yours forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.section} style={{ paddingTop: 40 }}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Why Use a VPS?</p>
            <h2 className={styles.sectionTitle}>Your OpenClaw deserves a proper home</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌐</div>
                <h3>Always Online</h3>
                <p>
                  Your OpenClaw runs 24/7—no need to keep your laptop open or worry about your home
                  internet going down.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔒</div>
                <h3>Your Data, Your Server</h3>
                <p>
                  Everything stays on hardware you control. Your emails, calendar, and conversations
                  never leave your machine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.sectionSecondary}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>How It Works</p>
            <h2 className={styles.sectionTitle}>Live in 3 simple steps</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Book Your Session</h3>
                <p>Pick a time that works. We will walk you through onboarding!</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>We Handle the Tech</h3>
                <p>We&apos;ll set up your VPS and install OpenClaw FOR YOU with your preferred LLM</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Start Automating</h3>
                <p>
                  Your OpenClaw is live. Connect your inbox, calendar, and start building
                  automations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Need */}
        <section className={styles.section} style={{ paddingTop: 40 }}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Before You Book</p>
            <h2 className={styles.sectionTitle}>What You Need</h2>
            <div className={styles.featuresGridSmall}>
              <div className={styles.featureCardCentered}>
                <div className={styles.featureIconCentered}>🕐</div>
                <h3>30 Minutes</h3>
                <p>A quick Zoom call is all it takes</p>
              </div>
              <div className={styles.featureCardCentered}>
                <div className={styles.featureIconCentered}>👋</div>
                <h3>No Coding Required</h3>
                <p>No Linux or tech experience needed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>What People Say</p>
            <h2 className={styles.sectionTitle}>Join hundreds running OpenClaw</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialContent}>
                  &quot;I was dreading the server setup, but they walked me through everything in 20
                  minutes. Now I actually understand how it all works.&quot;
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>JK</div>
                  <div>
                    <div className={styles.testimonialName}>Jake K.</div>
                    <div className={styles.testimonialHandle}>@jakekdev</div>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialContent}>
                  &quot;One-time fee vs monthly subscriptions elsewhere? Easy choice. The setup call
                  was super helpful and saved me hours of frustration.&quot;
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>SM</div>
                  <div>
                    <div className={styles.testimonialName}>Sarah M.</div>
                    <div className={styles.testimonialHandle}>@sarahcodes</div>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialContent}>
                  &quot;Booked a slot, showed up, and left with OpenClaw running on my own server.
                  Easiest tech setup I&apos;ve ever done.&quot;
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>AR</div>
                  <div>
                    <div className={styles.testimonialName}>Alex R.</div>
                    <div className={styles.testimonialHandle}>@alexrbuilds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2>
              Need something <span className={styles.highlight}>more custom</span>?
            </h2>
            <p>
              Agent development, workflow automation, architecture consulting — tell us what you
              need and we&apos;ll make it happen.
            </p>
            <Link href="/consult/" className={styles.btnPrimary}>
              Get Custom Help
              <ArrowIcon />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}

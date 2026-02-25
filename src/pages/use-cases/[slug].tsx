import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { BUSINESS, SEO } from '@/config';
import { USE_CASES, UseCase } from '@/config/useCases';

import Layout from '@/components/Layout';

import styles from '@/styles/Article.module.css';

interface UseCasePageProps {
  useCase: UseCase;
}

export default function UseCasePage({ useCase }: UseCasePageProps) {
  const title = useCase.title;
  const description = useCase.description;

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${BUSINESS.url}/use-cases/${useCase.slug}/`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BUSINESS.url}/use-cases/${useCase.slug}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Layout title={title} description={description}>
        <article className={styles.article}>
          <Link href="/" className={styles.back}>
            ← Back to Home
          </Link>

          <div className={styles.badge}>
            <span>{useCase.icon}</span>
            <span>Use Case: {useCase.name}</span>
          </div>

          <h1>{useCase.title}</h1>

          <p className={styles.lead}>{useCase.description}</p>

          <h2>The Challenge</h2>
          <div className={styles.painPoints}>
            <h3>Common pain points for {useCase.name.toLowerCase()}:</h3>
            <ul>
              {useCase.painPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <h2>How OpenClaw Helps</h2>
          {useCase.solutions.map((solution, i) => (
            <div key={i} className={styles.solutionCard}>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}

          <h2>Why OpenClaw?</h2>
          <ul>
            <li><strong>Self-hosted</strong> — Your data stays on servers you control</li>
            <li><strong>Cost-effective</strong> — Open source software, pay only for hosting + AI</li>
            <li><strong>Flexible</strong> — Works with any LLM and any integration</li>
            <li><strong>24/7</strong> — Your AI assistant never takes a break</li>
          </ul>

          <div className={styles.ctaBox}>
            <h3>Ready to automate your {useCase.name.toLowerCase()} workflows?</h3>
            <p>Book a free 30-minute call and we&apos;ll set up OpenClaw for you.</p>
            <a
              href={BUSINESS.calendly.url}
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Call →
            </a>
          </div>

          <h2>More Use Cases</h2>
          <ul>
            {USE_CASES.filter((uc) => uc.slug !== useCase.slug)
              .slice(0, 4)
              .map((uc) => (
                <li key={uc.slug}>
                  <Link href={`/use-cases/${uc.slug}/`}>
                    {uc.icon} {uc.name}
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
  const paths = USE_CASES.map((useCase) => ({
    params: { slug: useCase.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<UseCasePageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const useCase = USE_CASES.find((uc) => uc.slug === slug);

  if (!useCase) {
    return { notFound: true };
  }

  return { props: { useCase } };
};

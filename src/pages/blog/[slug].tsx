import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { BUSINESS, SEO } from '@/config';
import { BLOG_POSTS, BlogPost } from '@/config/blogPosts';

import Layout from '@/components/Layout';

import styles from '@/styles/Blog.module.css';

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const title = post.title;
  const description = post.description;

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${BUSINESS.url}/blog/${post.slug}/`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BUSINESS.url}/blog/${post.slug}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Layout title={title} description={description}>
        <article className={styles.article}>
          <Link href="/blog/" className={styles.back}>
            ← Back to Blog
          </Link>
          <h1>{post.title}</h1>
          <div className={styles.articleMeta}>
            {post.date} · {post.readTime}
          </div>
          <p>{post.description}</p>
          <p>
            <em>
              Full article content is being migrated. Please visit the{' '}
              <a
                href={`https://getclawhelp.com/blog/${post.slug}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                original article
              </a>{' '}
              for the complete content.
            </em>
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop: '48px',
              padding: '36px',
              background:
                'linear-gradient(135deg, rgba(255,107,74,0.08) 0%, rgba(78,205,196,0.08) 100%)',
              border: '1px solid var(--accent)',
              borderRadius: '16px',
              textAlign: 'center',
            }}
          >
            <h3>Ready to get started with OpenClaw?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Book a free 30-minute call and we&apos;ll set everything up for you.
            </p>
            <a
              href={BUSINESS.calendly.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, var(--accent) 0%, #ff8855 100%)',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '12px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
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
  const paths = BLOG_POSTS.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};

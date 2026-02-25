import Head from 'next/head';
import Link from 'next/link';

import { BUSINESS, SEO } from '@/config';
import { BLOG_POSTS } from '@/config/blogPosts';

import Layout from '@/components/Layout';

import styles from '@/styles/Blog.module.css';

export default function BlogIndex() {
  const title = 'Blog — OpenClaw Guides & Tips';
  const description =
    'Guides, tutorials, and tips for getting the most out of OpenClaw. VPS setup, automation ideas, and comparisons.';

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${BUSINESS.url}/blog/`} />
        <meta property="og:url" content={`${BUSINESS.url}/blog/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Layout title={title} description={description}>
        <div className={styles.pageHeader}>
          <div className={styles.container}>
            <h1>Blog</h1>
            <p>Guides, tutorials, and tips for getting the most out of OpenClaw.</p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className={styles.postCard}
              >
                <div className={styles.postMeta}>
                  {post.date} · {post.readTime}
                </div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

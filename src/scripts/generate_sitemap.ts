import * as fs from 'fs';
import * as path from 'path';

import { SITEMAP } from '../config/sitemap';
import { BLOG_POSTS } from '../config/blogPosts';
import { CITIES } from '../config/cities';
import { INTEGRATIONS } from '../config/integrations';
import { USE_CASES } from '../config/useCases';

const BUILD_DIR = 'docs';

interface SitemapEntry {
  path: string;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

// Main pages
const pages: SitemapEntry[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/consult/', priority: 0.9, changefreq: 'monthly' },
  { path: '/blog/', priority: 0.8, changefreq: 'weekly' },
  { path: '/privacy/', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms/', priority: 0.3, changefreq: 'yearly' },
];

// Dynamic content pages
const additionalPages: SitemapEntry[] = [
  ...BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}/`,
    priority: 0.7,
    changefreq: 'monthly' as const,
  })),
  ...CITIES.map((city) => ({
    path: `/cities/${city.slug}/`,
    priority: 0.6,
    changefreq: 'monthly' as const,
  })),
  ...INTEGRATIONS.map((integration) => ({
    path: `/integrations/${integration.slug}/`,
    priority: 0.6,
    changefreq: 'monthly' as const,
  })),
  ...USE_CASES.map((useCase) => ({
    path: `/use-cases/${useCase.slug}/`,
    priority: 0.6,
    changefreq: 'monthly' as const,
  })),
];

function generateSitemap(): string {
  const now = new Date().toISOString();
  const allPages = [...pages, ...additionalPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITEMAP.baseUrl}${page.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq ?? 'daily'}</changefreq>
    <priority>${page.priority ?? 0.8}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
}

const sitemap = generateSitemap();
const outputPath = path.join(BUILD_DIR, 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log(`✓ Generated sitemap.xml with ${pages.length + additionalPages.length} URLs`);

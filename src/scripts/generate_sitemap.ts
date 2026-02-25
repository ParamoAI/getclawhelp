import * as fs from 'fs';
import * as path from 'path';

import { SITEMAP } from '../config/sitemap';
import { BLOG_POSTS } from '../config/blogPosts';

const BUILD_DIR = 'docs';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

const staticPages: SitemapUrl[] = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/consult/', priority: '0.9', changefreq: 'monthly' },
  { loc: '/blog/', priority: '0.8', changefreq: 'weekly' },
  { loc: '/privacy/', priority: '0.3', changefreq: 'yearly' },
  { loc: '/terms/', priority: '0.3', changefreq: 'yearly' },
];

function generateSitemap(): void {
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [
    ...staticPages.map(page => ({ ...page, lastmod: today })),
    ...BLOG_POSTS.map(post => ({
      loc: `/blog/${post.slug}/`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${SITEMAP.baseUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  const outputPath = path.join(BUILD_DIR, 'sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  console.log(`✓ Generated sitemap.xml with ${urls.length} URLs`);
}

generateSitemap();

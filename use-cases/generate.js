#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const TODAY = new Date().toISOString().split('T')[0];
const TODAY_FORMATTED = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// Allow generating a single slug (for add-use-case.sh)
const targetSlug = process.argv[2] || null;
const entries = targetSlug ? data.filter(e => e.slug === targetSlug) : data;

if (targetSlug && entries.length === 0) {
  console.error(`❌ No entry found for slug: ${targetSlug}`);
  process.exit(1);
}

for (const entry of entries) {
  const outDir = path.join(ROOT, 'use-cases', entry.slug);
  fs.mkdirSync(outDir, { recursive: true });

  // Pain points HTML
  const painPointsHtml = entry.painPoints.map(p => `<li>${p}</li>`).join('\n                ');

  // Solutions HTML
  const solutionsHtml = entry.solutions.map(s =>
    `<div class="solution-card">\n            <h3>${s.title}</h3>\n            <p>${s.description}</p>\n        </div>`
  ).join('\n        ');

  // FAQs HTML
  const faqsHtml = entry.faqs.map(f =>
    `<div class="faq-item">\n            <h3>${f.question}</h3>\n            <p>${f.answer}</p>\n        </div>`
  ).join('\n        ');

  // Schema.org FAQ JSON
  const schemaFaqs = entry.faqs.map(f => {
    const q = f.question.replace(/"/g, '\\"');
    const a = f.answer.replace(/"/g, '\\"');
    return `{"@type":"Question","name":"${q}","acceptedAnswer":{"@type":"Answer","text":"${a}"}}`;
  }).join(',');

  // Related links (other use cases, excluding self, max 5)
  const relatedHtml = data
    .filter(e => e.slug !== entry.slug)
    .slice(0, 5)
    .map(e => `<a href="/use-cases/${e.slug}/">${e.heroEmoji} OpenClaw for ${e.industry}</a>`)
    .join('\n            ');

  let html = template
    .replace(/\{\{TITLE\}\}/g, entry.title)
    .replace(/\{\{DESCRIPTION\}\}/g, entry.description)
    .replace(/\{\{SLUG\}\}/g, entry.slug)
    .replace(/\{\{INDUSTRY\}\}/g, entry.industry)
    .replace(/\{\{HERO_EMOJI\}\}/g, entry.heroEmoji)
    .replace(/\{\{DATE\}\}/g, TODAY)
    .replace(/\{\{DATE_FORMATTED\}\}/g, TODAY_FORMATTED)
    .replace(/\{\{INTRO\}\}/g, entry.intro)
    .replace(/\{\{PAIN_POINTS\}\}/g, painPointsHtml)
    .replace(/\{\{SOLUTIONS\}\}/g, solutionsHtml)
    .replace(/\{\{TESTIMONIAL_QUOTE\}\}/g, entry.testimonialQuote)
    .replace(/\{\{TESTIMONIAL_ATTRIBUTION\}\}/g, entry.testimonialAttribution)
    .replace(/\{\{FAQS\}\}/g, faqsHtml)
    .replace(/\{\{SCHEMA_FAQS\}\}/g, schemaFaqs)
    .replace(/\{\{RELATED_LINKS\}\}/g, relatedHtml);

  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`✅ Generated: use-cases/${entry.slug}/index.html`);
}

// Update sitemap.xml
if (!targetSlug) {
  const sitemapPath = path.join(ROOT, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');

  // Remove any previously generated use-case entries
  sitemap = sitemap.replace(/\s*<!-- USECASE:START -->[\s\S]*?<!-- USECASE:END -->/g, '');

  const newEntries = data.map(e => `  <url>
    <loc>https://getclawhelp.com/use-cases/${e.slug}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n');

  const marker = `\n  <!-- USECASE:START -->\n${newEntries}\n  <!-- USECASE:END -->`;
  sitemap = sitemap.replace('</urlset>', `${marker}\n</urlset>`);

  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`✅ Updated sitemap.xml with ${data.length} use-case pages`);
}

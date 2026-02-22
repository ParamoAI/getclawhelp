#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const TODAY = '2026-02-22';
const TODAY_FORMATTED = 'February 22, 2026';

for (const entry of data) {
  const outDir = path.join(ROOT, 'integrations', entry.slug);
  fs.mkdirSync(outDir, { recursive: true });

  // Build setup steps HTML
  const stepsHtml = entry.setupSteps.map((step, i) => {
    return `<h2>Step ${i + 1}: ${step.title}</h2>\n        ${step.content}`;
  }).join('\n\n        ');

  // Build schema.org HowTo steps
  const schemaSteps = entry.setupSteps.map((step, i) => {
    const text = step.content.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 200);
    return `{"@type":"HowToStep","position":${i + 1},"name":"${step.title.replace(/"/g, '\\"')}","text":"${text.replace(/"/g, '\\"')}"}`;
  }).join(',');

  // Build requirements list
  const requirementsHtml = entry.requirements.map(r => `<li>${r}</li>`).join('\n                ');

  // Build use cases list
  const useCasesHtml = entry.useCases.map(u => `<li>${u}</li>`).join('\n                ');

  // Build related links (other integrations, excluding self)
  const relatedHtml = data
    .filter(e => e.slug !== entry.slug)
    .slice(0, 4)
    .map(e => `<a href="/integrations/${e.slug}/">${e.icon} OpenClaw + ${e.platform}</a>`)
    .join('\n            ');

  // Build intro paragraph
  const intro = `Connect <a href="/blog/what-is-openclaw/">OpenClaw</a> to ${entry.platform} and get a powerful AI assistant right where you already communicate. This guide walks you through every step — from initial setup to sending your first message.`;

  let html = template
    .replace(/\{\{TITLE\}\}/g, entry.title.replace(' | GetClawHelp', ''))
    .replace(/\{\{DESCRIPTION\}\}/g, entry.description)
    .replace(/\{\{SLUG\}\}/g, entry.slug)
    .replace(/\{\{PLATFORM\}\}/g, entry.platform)
    .replace(/\{\{ICON\}\}/g, entry.icon)
    .replace(/\{\{DATE\}\}/g, TODAY)
    .replace(/\{\{DATE_FORMATTED\}\}/g, TODAY_FORMATTED)
    .replace(/\{\{INTRO\}\}/g, intro)
    .replace(/\{\{REQUIREMENTS\}\}/g, requirementsHtml)
    .replace(/\{\{SETUP_STEPS\}\}/g, stepsHtml)
    .replace(/\{\{USE_CASES\}\}/g, useCasesHtml)
    .replace(/\{\{PLATFORM_NOTES\}\}/g, entry.platformNotes)
    .replace(/\{\{RELATED_LINKS\}\}/g, relatedHtml)
    .replace(/\{\{SCHEMA_STEPS\}\}/g, schemaSteps);

  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`✅ Generated: integrations/${entry.slug}/index.html`);
}

// Update sitemap.xml
const sitemapPath = path.join(ROOT, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Remove any previously generated integration entries
sitemap = sitemap.replace(/\s*<!-- PSEO:START -->[\s\S]*?<!-- PSEO:END -->/g, '');

const newEntries = data.map(e => `  <url>
    <loc>https://getclawhelp.com/integrations/${e.slug}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n');

const marker = `\n  <!-- PSEO:START -->\n${newEntries}\n  <!-- PSEO:END -->`;
sitemap = sitemap.replace('</urlset>', `${marker}\n</urlset>`);

fs.writeFileSync(sitemapPath, sitemap);
console.log(`✅ Updated sitemap.xml with ${data.length} integration pages`);

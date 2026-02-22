#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const TODAY = '2026-02-22';
const TODAY_FORMATTED = 'February 22, 2026';

// Load integration data for cross-linking
const integrationData = JSON.parse(fs.readFileSync(path.join(ROOT, 'pseo', 'data.json'), 'utf8'));
const integrationMap = {};
for (const i of integrationData) {
  integrationMap[i.slug] = i;
}

// Build city lookup
const cityMap = {};
for (const c of data) {
  cityMap[c.slug] = c;
}

for (const entry of data) {
  const outDir = path.join(ROOT, 'cities', entry.slug);
  fs.mkdirSync(outDir, { recursive: true });

  // Build use cases list
  const useCasesHtml = entry.useCases.map(u => `<li>${u}</li>`).join('\n                ');

  // Build related city links
  const relatedCityHtml = entry.relatedCities
    .filter(slug => cityMap[slug])
    .map(slug => {
      const c = cityMap[slug];
      return `<a href="/cities/${c.slug}/">${c.emoji} OpenClaw in ${c.city}</a>`;
    }).join('\n            ');

  // Build related integration links
  const relatedIntegrationHtml = entry.relatedIntegrations
    .filter(slug => integrationMap[slug])
    .map(slug => {
      const i = integrationMap[slug];
      return `<a href="/integrations/${i.slug}/">${i.icon} OpenClaw + ${i.platform}</a>`;
    }).join('\n            ');

  // Build inline integration links for setup section
  const integrationLinks = entry.relatedIntegrations
    .filter(slug => integrationMap[slug])
    .slice(0, 3)
    .map(slug => {
      const i = integrationMap[slug];
      return `<a href="/integrations/${i.slug}/">${i.platform}</a>`;
    });
  let integrationLinksStr = integrationLinks.join(', ');

  // Clean city name (remove parenthetical)
  const cityClean = entry.city.replace(/\s*\(.*?\)\s*/, '').trim();

  // H1 for the page
  const h1 = `Personal AI Assistant for ${entry.city} Professionals`;

  let html = template
    .replace(/\{\{TITLE\}\}/g, entry.title)
    .replace(/\{\{DESCRIPTION\}\}/g, entry.description)
    .replace(/\{\{SLUG\}\}/g, entry.slug)
    .replace(/\{\{CITY\}\}/g, entry.city)
    .replace(/\{\{CITY_CLEAN\}\}/g, cityClean)
    .replace(/\{\{COUNTRY\}\}/g, entry.country)
    .replace(/\{\{EMOJI\}\}/g, entry.emoji)
    .replace(/\{\{DATE\}\}/g, TODAY)
    .replace(/\{\{DATE_FORMATTED\}\}/g, TODAY_FORMATTED)
    .replace(/\{\{H1\}\}/g, h1)
    .replace(/\{\{LOCAL_ANGLE\}\}/g, entry.localAngle)
    .replace(/\{\{USE_CASES\}\}/g, useCasesHtml)
    .replace(/\{\{INTEGRATION_LINKS\}\}/g, integrationLinksStr)
    .replace(/\{\{RELATED_CITY_LINKS\}\}/g, relatedCityHtml)
    .replace(/\{\{RELATED_INTEGRATION_LINKS\}\}/g, relatedIntegrationHtml);

  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`✅ Generated: cities/${entry.slug}/index.html`);
}

// Update sitemap.xml
const sitemapPath = path.join(ROOT, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Remove any previously generated city entries
sitemap = sitemap.replace(/\s*<!-- PSEO-CITIES:START -->[\s\S]*?<!-- PSEO-CITIES:END -->/g, '');

const newEntries = data.map(e => `  <url>
    <loc>https://getclawhelp.com/cities/${e.slug}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n');

const marker = `\n  <!-- PSEO-CITIES:START -->\n${newEntries}\n  <!-- PSEO-CITIES:END -->`;
sitemap = sitemap.replace('</urlset>', `${marker}\n</urlset>`);

fs.writeFileSync(sitemapPath, sitemap);
console.log(`✅ Updated sitemap.xml with ${data.length} city pages`);

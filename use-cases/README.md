# Use Case pSEO Pages

Programmatic SEO pages targeting "OpenClaw for {Industry/Role}" keywords.

## Structure

- `data.json` — All page data (content, FAQs, solutions, etc.)
- `template.html` — HTML template with placeholders
- `generate.js` — Generator script that builds pages from data + template
- `add-use-case.sh` — Script to add a new use case quickly

## Generate All Pages

```bash
node use-cases/generate.js
```

This regenerates all pages and updates `sitemap.xml`.

## Generate a Single Page

```bash
node use-cases/generate.js lawyers
```

## Add a New Use Case

```bash
./use-cases/add-use-case.sh <slug> "<Industry Name>"
# Example:
./use-cases/add-use-case.sh fintech "Fintech & Financial Services"
```

This adds a placeholder entry to `data.json` and generates the page. Edit `data.json` to customize the content, then re-run `node use-cases/generate.js <slug>`.

## Current Pages (15)

| Slug | Keyword |
|------|---------|
| lawyers | openclaw for lawyers |
| real-estate | openclaw for real estate |
| small-business | openclaw for small business |
| executives | openclaw for executives |
| customer-support | openclaw for customer support |
| sales-teams | openclaw for sales teams |
| marketing | openclaw for marketing |
| hr | openclaw for hr |
| healthcare | openclaw for healthcare |
| education | openclaw for education |
| ecommerce | openclaw for ecommerce |
| startups | openclaw for startups |
| consultants | openclaw for consultants |
| accountants | openclaw for accountants |
| recruiters | openclaw for recruiters |

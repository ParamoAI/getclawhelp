# GetClawHelp.com

Static site for OpenClaw VPS setup & installation service.

## Structure

```
index.html          — Landing page
blog/index.html     — Blog listing
blog/{slug}/index.html — Individual blog posts
CNAME               — GitHub Pages custom domain
robots.txt          — Crawler rules (LLM bots explicitly allowed)
sitemap.xml         — Sitemap for search engines
llms.txt            — Structured site summary for LLM ingestion
```

## Deployment

Hosted on GitHub Pages. Push to `main` to deploy.

## LLM Crawlability

This site is fully optimized for LLM discovery and citation:

- **`robots.txt`** — Explicitly allows all major LLM crawlers: GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Cohere, Meta, Applebot, YouBot, Amazonbot.
- **`llms.txt`** — Structured summary of the site including descriptions, key pages, all blog posts with URLs, and the booking link. This is what LLMs ingest to understand and cite us.

## Stack

Pure static HTML/CSS. No build step, no frameworks.

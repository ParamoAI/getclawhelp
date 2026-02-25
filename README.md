# GetClawHelp.com

OpenClaw setup service website - helping users get their AI assistant running.

## Development

This site uses NextJS with static export for GitHub Pages deployment.

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build (outputs to docs/)
npm run build

# Start production server
npm start
```

## Project Structure

```
├── src/                    # NextJS source
│   ├── components/         # React components
│   ├── config/             # Site configuration
│   │   ├── analytics.ts    # Google Analytics
│   │   ├── business.ts     # Business details
│   │   ├── blogPosts.ts    # Blog post metadata
│   │   ├── cities.ts       # City pages data
│   │   ├── integrations.ts # Integration pages data
│   │   ├── useCases.ts     # Use case pages data
│   │   └── seo.ts          # SEO configuration
│   ├── pages/              # NextJS pages
│   │   ├── blog/           # Blog pages
│   │   ├── cities/         # City landing pages
│   │   ├── integrations/   # Integration guides
│   │   └── use-cases/      # Use case pages
│   ├── scripts/            # Build scripts
│   └── styles/             # CSS modules
├── public/                 # Static assets
├── docs/                   # Build output (GitHub Pages)
└── [legacy HTML files]     # Original static site (reference)
```

## Pages (54 total)

### Core Pages
- `/` - Homepage
- `/consult/` - Custom solutions
- `/blog/` - Blog index
- `/privacy/` - Privacy policy
- `/terms/` - Terms of service

### Blog Posts (12)
Dynamic routes at `/blog/[slug]/`

### Cities (10)
Programmatic SEO pages at `/cities/[slug]/`:
austin, cdmx, london, miami, new-york-city, rio-de-janeiro, san-francisco, tel-aviv, tokyo, vienna

### Integrations (10)
Platform guides at `/integrations/[slug]/`:
slack, discord, telegram, whatsapp, email, google-chat, imessage, signal, sms, irc

### Use Cases (15)
Industry pages at `/use-cases/[slug]/`:
startups, small-business, sales-teams, customer-support, real-estate, lawyers, consultants, recruiters, executives, marketing, ecommerce, healthcare, education, hr, accountants

## Configuration

### Static Export
- Output: `docs/` directory
- Trailing slashes enabled
- Images unoptimized for static export

### Analytics
- Google Ads/Analytics: `AW-17920782524`

## Migration Status

### ✅ Completed
- [x] NextJS infrastructure
- [x] Homepage with all sections
- [x] Custom Solutions (/consult/)
- [x] Privacy Policy (/privacy/)
- [x] Terms of Service (/terms/)
- [x] Blog index and 12 post templates
- [x] 10 City landing pages
- [x] 10 Integration guide pages
- [x] 15 Use case pages
- [x] Sitemap generation (52 URLs)
- [x] Google Analytics
- [x] Structured data (JSON-LD)

### 🔲 Pending
- [ ] Full blog post content migration (12 posts have templates only)
- [ ] DFY setup pages (/dfysetup/, /dfysetup/onboarding/)
- [ ] Remove legacy HTML files after verification

## Deployment

Build outputs to `docs/` for GitHub Pages:

```bash
npm run build
git add docs/
git commit -m "Build site"
git push
```

## Based On

Structure based on [skilletz.cafe](https://github.com/jontsai/skilletz.cafe) using `@hacktoolkit/nextjs-htk` patterns.

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
│   ├── pages/              # NextJS pages
│   ├── scripts/            # Build scripts
│   └── styles/             # CSS modules
├── public/                 # Static assets (copied to docs/)
├── docs/                   # Build output (GitHub Pages)
└── [legacy HTML files]     # Original static site (being migrated)
```

## Pages

- `/` - Homepage
- `/consult/` - Custom solutions
- `/blog/` - Blog index
- `/blog/[slug]/` - Blog posts
- `/privacy/` - Privacy policy
- `/terms/` - Terms of service

## Configuration

### Static Export
- Output: `docs/` directory
- Trailing slashes enabled
- Images unoptimized for static export

### Analytics
- Google Ads/Analytics: `AW-17920782524`

## Migration Status

### Completed
- [x] Homepage
- [x] Custom Solutions (/consult/)
- [x] Privacy Policy (/privacy/)
- [x] Terms of Service (/terms/)
- [x] Blog index and 12 post templates
- [x] Sitemap generation
- [x] Google Analytics
- [x] Structured data (JSON-LD)

### Pending
- [ ] Full blog post content migration
- [ ] Cities pages (programmatic SEO)
- [ ] Integrations pages
- [ ] Use cases pages
- [ ] DFY setup pages

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

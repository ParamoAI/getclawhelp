import { BUSINESS } from './business';

const BASE_TITLE = `OpenClaw Help — ${BUSINESS.tagline}`;

export const SEO = {
  formatTitle: (page?: string) => (page ? `${page} | ${BUSINESS.name}` : BASE_TITLE),

  description: {
    default: BUSINESS.description,
  },

  og: {
    type: 'website',
    url: BUSINESS.url,
    image: `${BUSINESS.url}/og-image.png`,
    twitter: {
      card: 'summary_large_image',
      site: BUSINESS.social.twitter,
    },
  },

  keywords: [
    'OpenClaw setup',
    'OpenClaw VPS install',
    'OpenClaw help',
    'install OpenClaw',
    'OpenClaw server setup',
    'OpenClaw installation service',
    'OpenClaw skills',
    'OpenClaw configuration',
    'AI assistant VPS',
    'self-hosted AI assistant',
  ],
} as const;

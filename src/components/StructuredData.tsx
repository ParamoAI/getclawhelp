import { BUSINESS } from '@/config';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'faq' | 'breadcrumb';
  data?: Record<string, unknown>;
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS.name,
  url: BUSINESS.url,
  logo: `${BUSINESS.url}/og-image.png`,
  description: 'Expert OpenClaw help — setup, installation, and configuration service.',
  sameAs: [BUSINESS.social.twitterUrl, BUSINESS.social.skool],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'OpenClaw VPS Installation and Setup',
  provider: {
    '@type': 'Organization',
    name: BUSINESS.name,
    url: BUSINESS.url,
  },
  name: 'OpenClaw VPS Setup Service',
  description:
    'We install and configure OpenClaw on your VPS in a live 1-on-1 call. No coding required. Includes skills installation, LLM configuration, and ongoing support.',
  url: BUSINESS.url,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is OpenClaw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpenClaw is an open-source personal AI assistant that runs on your own server. It connects to WhatsApp, Telegram, Slack, Discord, and other messaging platforms to automate tasks like email management, calendar scheduling, and workflow automation — all running 24/7 on hardware you control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need coding experience to use OpenClaw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. With GetClawHelp, we handle the entire installation and configuration for you in a live 1-on-1 call. No Linux, terminal, or coding experience is needed. The setup takes about 30 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I need before booking a setup session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Just 30 minutes for a Zoom call. You don't need any technical experience. We handle the VPS setup, OpenClaw installation, skill configuration, and LLM connection for you.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I run OpenClaw on a VPS instead of my laptop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A VPS keeps OpenClaw running 24/7 without needing your laptop open. Your data stays on a server you control, and you won't lose uptime from internet outages, reboots, or closing your laptop lid.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which LLMs does OpenClaw support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpenClaw is model-agnostic. It works with Anthropic Claude, OpenAI GPT, Google Gemini, and local models via Ollama. During your setup call, we configure your preferred LLM.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${BUSINESS.url}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: `${BUSINESS.url}/blog/`,
    },
  ],
};

const schemas = {
  organization: organizationSchema,
  service: serviceSchema,
  faq: faqSchema,
  breadcrumb: breadcrumbSchema,
};

export default function StructuredData({ type, data }: StructuredDataProps) {
  const schema = data || schemas[type];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HomeStructuredData() {
  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      <StructuredData type="breadcrumb" />
    </>
  );
}

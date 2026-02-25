export interface City {
  slug: string;
  name: string;
  country: string;
  description: string;
  localFlavor: string;
}

export const CITIES: City[] = [
  {
    slug: 'austin',
    name: 'Austin',
    country: 'United States',
    description: 'Set up your personal AI assistant in Austin with OpenClaw. Perfect for Austin\'s thriving tech scene.',
    localFlavor: 'Austin\'s tech community is booming, and OpenClaw fits right in. Whether you\'re a startup founder on South Congress or a developer in the Domain, your AI assistant runs 24/7 on your own infrastructure.',
  },
  {
    slug: 'cdmx',
    name: 'Mexico City',
    country: 'Mexico',
    description: 'Configure tu asistente de IA personal en CDMX con OpenClaw. Perfecto para la escena tech de Mexico.',
    localFlavor: 'Mexico City\'s startup ecosystem is exploding. OpenClaw gives you enterprise-grade AI automation without enterprise prices - perfect for the resourceful CDMX founder.',
  },
  {
    slug: 'london',
    name: 'London',
    country: 'United Kingdom',
    description: 'Set up your personal AI assistant in London with OpenClaw. Built for the UK tech ecosystem.',
    localFlavor: 'From Shoreditch startups to City finance, London runs on efficiency. OpenClaw automates your workflows while keeping your data on servers you control - GDPR-friendly by design.',
  },
  {
    slug: 'miami',
    name: 'Miami',
    country: 'United States',
    description: 'Set up your personal AI assistant in Miami with OpenClaw. Perfect for Miami tech and crypto founders.',
    localFlavor: 'Miami\'s tech scene moves fast. OpenClaw keeps up - automating your operations while you focus on building. Self-hosted means your data stays yours, not in some VC\'s hands.',
  },
  {
    slug: 'new-york-city',
    name: 'New York City',
    country: 'United States',
    description: 'Set up your personal AI assistant in NYC with OpenClaw. Built for the pace of New York.',
    localFlavor: 'New York doesn\'t sleep, and neither does your OpenClaw. From fintech in FiDi to startups in Brooklyn, your AI assistant handles the grind while you handle the deals.',
  },
  {
    slug: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    description: 'Configure seu assistente de IA pessoal no Rio com OpenClaw. Perfeito para a cena tech brasileira.',
    localFlavor: 'Rio\'s tech scene is heating up. OpenClaw gives Brazilian founders the same AI capabilities as Silicon Valley - self-hosted, private, and running on your terms.',
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    country: 'United States',
    description: 'Set up your personal AI assistant in SF with OpenClaw. Built by and for the Bay Area tech community.',
    localFlavor: 'In the city that invented modern AI, OpenClaw stands out by giving you control. Run any model you want - Claude, GPT, Llama - on your own infrastructure. No vendor lock-in.',
  },
  {
    slug: 'tel-aviv',
    name: 'Tel Aviv',
    country: 'Israel',
    description: 'Set up your personal AI assistant in Tel Aviv with OpenClaw. Perfect for the Startup Nation.',
    localFlavor: 'Israel builds companies that punch above their weight. OpenClaw is the same philosophy - maximum capability, minimum overhead. Your AI assistant, your servers, your rules.',
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    description: 'Set up your personal AI assistant in Tokyo with OpenClaw. Built for Japan\'s precision-driven tech culture.',
    localFlavor: 'Tokyo values precision and reliability. OpenClaw delivers both - running 24/7 on infrastructure you control, with the flexibility to integrate with Japanese services and workflows.',
  },
  {
    slug: 'vienna',
    name: 'Vienna',
    country: 'Austria',
    description: 'Set up your personal AI assistant in Vienna with OpenClaw. Perfect for Central European tech.',
    localFlavor: 'Vienna\'s tech scene values privacy and quality. OpenClaw is fully self-hosted - your data never leaves your servers. Perfect for the privacy-conscious European founder.',
  },
];

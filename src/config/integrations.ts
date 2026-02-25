export interface Integration {
  slug: string;
  name: string;
  icon: string;
  description: string;
  shortDescription: string;
}

export const INTEGRATIONS: Integration[] = [
  {
    slug: 'slack',
    name: 'Slack',
    icon: '💬',
    description: 'Step-by-step guide to connecting OpenClaw to Slack. Create a Slack app, configure OAuth, and run your AI assistant in any Slack workspace.',
    shortDescription: 'Connect OpenClaw to Slack workspaces for team AI automation.',
  },
  {
    slug: 'discord',
    name: 'Discord',
    icon: '🎮',
    description: 'Connect OpenClaw to your Discord server. Create a bot, configure permissions, and run AI-powered community management.',
    shortDescription: 'Run AI-powered automation in Discord communities.',
  },
  {
    slug: 'telegram',
    name: 'Telegram',
    icon: '✈️',
    description: 'Set up OpenClaw with Telegram. Create a bot via BotFather and start automating conversations and workflows.',
    shortDescription: 'Automate Telegram conversations and bot workflows.',
  },
  {
    slug: 'whatsapp',
    name: 'WhatsApp',
    icon: '📱',
    description: 'Connect OpenClaw to WhatsApp Business. Automate customer conversations, support, and notifications.',
    shortDescription: 'Automate WhatsApp Business conversations and support.',
  },
  {
    slug: 'email',
    name: 'Email',
    icon: '📧',
    description: 'Connect OpenClaw to your email. Automate triage, responses, and email-based workflows.',
    shortDescription: 'Automate email triage, responses, and workflows.',
  },
  {
    slug: 'google-chat',
    name: 'Google Chat',
    icon: '💼',
    description: 'Integrate OpenClaw with Google Chat for Workspace automation. Connect to rooms and DMs.',
    shortDescription: 'Automate Google Workspace communication.',
  },
  {
    slug: 'imessage',
    name: 'iMessage',
    icon: '🍎',
    description: 'Connect OpenClaw to iMessage on macOS. Automate personal messaging workflows.',
    shortDescription: 'Automate iMessage on Mac for personal AI assistance.',
  },
  {
    slug: 'signal',
    name: 'Signal',
    icon: '🔐',
    description: 'Connect OpenClaw to Signal for private, encrypted AI conversations and automation.',
    shortDescription: 'Private, encrypted AI automation via Signal.',
  },
  {
    slug: 'sms',
    name: 'SMS',
    icon: '📲',
    description: 'Connect OpenClaw to SMS via Twilio. Automate text-based customer communication.',
    shortDescription: 'Automate SMS conversations via Twilio.',
  },
  {
    slug: 'irc',
    name: 'IRC',
    icon: '📟',
    description: 'Connect OpenClaw to IRC networks. Classic chat protocol with modern AI capabilities.',
    shortDescription: 'AI-powered automation on IRC networks.',
  },
];

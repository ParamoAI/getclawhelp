import { useState, FormEvent } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import { BUSINESS, SEO } from '@/config';

import Layout from '@/components/Layout';

import styles from '@/styles/DfySetupOnboarding.module.css';

const PLATFORM_NOTES: Record<string, string> = {
  WhatsApp: "\uD83D\uDCF1 We'll help you set up the WhatsApp Business API",
  Telegram: "\u2708\uFE0F You'll need a Telegram Bot Token from @BotFather",
  Slack: "\uD83D\uDCBC We'll guide you through creating a Slack App",
  Discord: "\uD83C\uDFAE You'll need a Discord Bot Token from the Developer Portal",
};

export default function DfySetupOnboarding() {
  const [sshAuth, setSshAuth] = useState('');
  const [platform, setPlatform] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const title = 'Onboarding — Done-For-You OpenClaw Setup';
  const description =
    "Complete your onboarding form to get your Done-For-You OpenClaw setup started. We'll have your AI assistant running within 48 hours.";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const g = (k: string) => (fd.get(k) as string) || '_not provided_';
    const authType = g('ssh_auth');
    const authVal = authType === 'password' ? g('ssh_password') : '(SSH key provided)';

    const payload = {
      blocks: [
        {
          type: 'header',
          text: { type: 'plain_text', text: '\uD83C\uDF89 New DFY Setup Order!', emoji: true },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: '*Name:*\n' + g('name') },
            { type: 'mrkdwn', text: '*Email:*\n' + g('email') },
          ],
        },
        { type: 'divider' },
        {
          type: 'section',
          text: { type: 'mrkdwn', text: '*\uD83D\uDDA5\uFE0F Server Details*' },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: '*VPS Provider:*\n' + g('vps_provider') },
            { type: 'mrkdwn', text: '*SSH Host:*\n`' + g('ssh_host') + '`' },
            { type: 'mrkdwn', text: '*SSH User:*\n`' + g('ssh_user') + '`' },
            { type: 'mrkdwn', text: '*SSH Port:*\n`' + g('ssh_port') + '`' },
            { type: 'mrkdwn', text: '*Auth:*\n' + authType },
            { type: 'mrkdwn', text: '*Credentials:*\n`' + authVal + '`' },
          ],
        },
        { type: 'divider' },
        {
          type: 'section',
          text: { type: 'mrkdwn', text: '*\uD83E\uDDE0 LLM Configuration*' },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: '*Provider:*\n' + g('llm_provider') },
            { type: 'mrkdwn', text: '*API Key:*\n`' + g('api_key') + '`' },
            { type: 'mrkdwn', text: '*Preferred Model:*\n' + g('preferred_model') },
          ],
        },
        { type: 'divider' },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*\uD83D\uDCAC Messaging Channel:* ' + g('platform'),
          },
        },
        { type: 'divider' },
        { type: 'section', text: { type: 'mrkdwn', text: '*\uD83E\uDD16 AI Persona*' } },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: '*Use Case:*\n' + g('use_case') },
            { type: 'mrkdwn', text: '*Persona Name:*\n' + g('persona_name') },
            { type: 'mrkdwn', text: '*Tone:*\n' + g('tone') },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*Special Instructions:*\n' + g('special_instructions'),
          },
        },
      ],
    };

    try {
      const webhookUrl = atob(
        'aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDBBRU1BQlUwNzkvQjBBR1ZQOFE5UzUvMmdQamlMenNWRTFrQWtHZ1BKU0tjUFY5'
      );
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSubmittedEmail(g('email'));
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Submit failed');
      }
    } catch {
      setSubmitting(false);
      alert('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <>
      <Head>
        <title>{SEO.formatTitle(title)}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${BUSINESS.url}/dfysetup/onboarding/`} />
        <meta property="og:url" content={`${BUSINESS.url}/dfysetup/onboarding/`} />
        <meta property="og:title" content={`${title} | ${BUSINESS.name}`} />
        <meta property="og:description" content={description} />
      </Head>
      <Script id="meta-pixel-dfysetup-onboarding" strategy="afterInteractive">
        {`if(typeof fbq!=='undefined'){fbq('init','1993957208166087');fbq('track','PageView');fbq('track','Purchase',{value:247.00,currency:'USD'});}`}
      </Script>
      <Layout title={title} description={description}>
        {/* Hero */}
        <section className={styles.hero}>
          <div>
            <h1>
              Welcome! Let&apos;s Get You <span className={styles.highlight}>Set Up</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Fill out the details below and we&apos;ll have your OpenClaw instance running within 48
              hours.
            </p>
          </div>
        </section>

        <div className={styles.formContainer}>
          {!submitted && (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_form" value="dfysetup-onboarding" />

              {/* Section 1: Contact Info */}
              <div className={styles.formSection}>
                <h2>&#x1F4CB; Contact Info</h2>
                <p className={styles.sectionDesc}>
                  So we know who to reach when your setup is ready.
                </p>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email *</label>
                  <p className={styles.hint}>Use the same email you checked out with</p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Section 2: Server Details */}
              <div className={styles.formSection}>
                <h2>&#x1F5A5;&#xFE0F; Server Details</h2>
                <p className={styles.sectionDesc}>
                  We need SSH access to install OpenClaw on your VPS.
                </p>
                <div className={styles.field}>
                  <label htmlFor="vps_provider">VPS Provider *</label>
                  <select
                    id="vps_provider"
                    name="vps_provider"
                    required
                    defaultValue=""
                    className={styles.select}
                  >
                    <option value="" disabled>
                      Select your provider
                    </option>
                    <option value="DigitalOcean">DigitalOcean</option>
                    <option value="Hetzner">Hetzner</option>
                    <option value="Vultr">Vultr</option>
                    <option value="Linode">Linode</option>
                    <option value="AWS">AWS</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="ssh_host">SSH Host / IP Address *</label>
                  <input
                    type="text"
                    id="ssh_host"
                    name="ssh_host"
                    required
                    placeholder="123.45.67.89"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="ssh_user">SSH Username *</label>
                  <input
                    type="text"
                    id="ssh_user"
                    name="ssh_user"
                    required
                    defaultValue="root"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="ssh_port">SSH Port</label>
                  <input
                    type="number"
                    id="ssh_port"
                    name="ssh_port"
                    defaultValue={22}
                    min={1}
                    max={65535}
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label>SSH Authentication *</label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="ssh_auth"
                        value="password"
                        required
                        className={styles.radioInput}
                        onChange={() => setSshAuth('password')}
                      />{' '}
                      Password
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="ssh_auth"
                        value="key"
                        className={styles.radioInput}
                        onChange={() => setSshAuth('key')}
                      />{' '}
                      SSH Key
                    </label>
                  </div>
                  <div
                    className={
                      sshAuth === 'password' ? styles.conditionalVisible : styles.conditional
                    }
                  >
                    <label htmlFor="ssh_password">SSH Password</label>
                    <input
                      type="password"
                      id="ssh_password"
                      name="ssh_password"
                      placeholder="Your SSH password"
                      className={styles.input}
                    />
                  </div>
                  <div
                    className={
                      sshAuth === 'key' ? styles.conditionalVisible : styles.conditional
                    }
                  >
                    <label htmlFor="ssh_key">SSH Private Key</label>
                    <textarea
                      id="ssh_key"
                      name="ssh_key"
                      placeholder="Paste your private key here (-----BEGIN OPENSSH PRIVATE KEY-----)"
                      className={styles.textarea}
                    />
                  </div>
                </div>
                <div className={styles.securityNote}>
                  &#x1F512; Your credentials are encrypted and only used during setup. We delete them
                  after completion.
                </div>
              </div>

              {/* Section 3: LLM Configuration */}
              <div className={styles.formSection}>
                <h2>&#x1F9E0; LLM Configuration</h2>
                <p className={styles.sectionDesc}>
                  Which AI model should power your assistant?
                </p>
                <div className={styles.field}>
                  <label htmlFor="llm_provider">LLM Provider *</label>
                  <select
                    id="llm_provider"
                    name="llm_provider"
                    required
                    defaultValue=""
                    className={styles.select}
                  >
                    <option value="" disabled>
                      Select your provider
                    </option>
                    <option value="Anthropic/Claude">Anthropic / Claude</option>
                    <option value="OpenAI/GPT">OpenAI / GPT</option>
                    <option value="Google/Gemini">Google / Gemini</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="api_key">API Key *</label>
                  <input
                    type="password"
                    id="api_key"
                    name="api_key"
                    required
                    placeholder="sk-..."
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="preferred_model">Preferred Model</label>
                  <input
                    type="text"
                    id="preferred_model"
                    name="preferred_model"
                    placeholder="e.g. claude-sonnet-4, gpt-4o"
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Section 4: Messaging Channel */}
              <div className={styles.formSection}>
                <h2>&#x1F4AC; Messaging Channel</h2>
                <p className={styles.sectionDesc}>
                  Where do you want to chat with your AI assistant?
                </p>
                <div className={styles.field}>
                  <label htmlFor="platform">Platform *</label>
                  <select
                    id="platform"
                    name="platform"
                    required
                    defaultValue=""
                    className={styles.select}
                    onChange={(e) => setPlatform(e.target.value)}
                  >
                    <option value="" disabled>
                      Select your platform
                    </option>
                    <option value="WhatsApp">&#x1F4F1; WhatsApp</option>
                    <option value="Telegram">&#x2708;&#xFE0F; Telegram</option>
                    <option value="Slack">&#x1F4BC; Slack</option>
                    <option value="Discord">&#x1F3AE; Discord</option>
                  </select>
                  {Object.entries(PLATFORM_NOTES).map(([key, note]) => (
                    <div
                      key={key}
                      className={
                        platform === key ? styles.platformNoteVisible : styles.platformNote
                      }
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Your AI Assistant */}
              <div className={styles.formSection}>
                <h2>&#x1F916; Your AI Assistant</h2>
                <p className={styles.sectionDesc}>Help us personalize your assistant.</p>
                <div className={styles.field}>
                  <label htmlFor="use_case">Use Case *</label>
                  <p className={styles.hint}>
                    What do you want your AI assistant to help with? The more detail, the better we
                    can configure it.
                  </p>
                  <textarea
                    id="use_case"
                    name="use_case"
                    required
                    placeholder="e.g. Customer support for my e-commerce store, personal productivity assistant, team knowledge base..."
                    className={styles.textarea}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="persona_name">Persona Name</label>
                  <p className={styles.hint}>Give your AI a name, or we&apos;ll pick one</p>
                  <input
                    type="text"
                    id="persona_name"
                    name="persona_name"
                    placeholder="e.g. Atlas, Nova, Max"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="tone">Tone</label>
                  <select
                    id="tone"
                    name="tone"
                    defaultValue="Friendly"
                    className={styles.select}
                  >
                    <option value="Professional">Professional</option>
                    <option value="Friendly">Friendly</option>
                    <option value="Casual">Casual</option>
                    <option value="Technical">Technical</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="special_instructions">Any Special Instructions</label>
                  <textarea
                    id="special_instructions"
                    name="special_instructions"
                    placeholder="Anything else we should know about how you want your assistant to behave?"
                    className={styles.textarea}
                  />
                </div>
              </div>

              <button type="submit" className={styles.btnPrimary} disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit & Start My Setup \u2192'}
              </button>
            </form>
          )}

          {submitted && (
            <div className={styles.successMessageVisible}>
              <div className={styles.successEmoji}>&#x1F389;</div>
              <h2>We&apos;ve got everything we need!</h2>
              <p>
                Your setup will be completed within 48 hours. We&apos;ll email you at{' '}
                <span className={styles.emailHighlight}>{submittedEmail}</span> when it&apos;s
                ready.
              </p>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

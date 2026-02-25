export interface UseCase {
  slug: string;
  name: string;
  icon: string;
  title: string;
  description: string;
  painPoints: string[];
  solutions: Array<{ title: string; description: string }>;
}

export const USE_CASES: UseCase[] = [
  {
    slug: 'startups',
    name: 'Startups',
    icon: '🚀',
    title: 'OpenClaw for Startups: Do More With Less Using AI Automation',
    description: 'Learn how startups use OpenClaw to punch above their weight — automating operations, customer support, sales, and internal workflows without hiring.',
    painPoints: ['Too many tasks, too few hands', 'Can\'t afford enterprise software', 'Need to move fast without breaking things'],
    solutions: [
      { title: 'Customer Support Automation', description: 'Handle tier-1 support automatically, escalate complex issues to humans.' },
      { title: 'Sales Assistant', description: 'Qualify leads, answer product questions, book demos — 24/7.' },
      { title: 'Internal Ops', description: 'Automate standup reports, meeting notes, and internal workflows.' },
    ],
  },
  {
    slug: 'small-business',
    name: 'Small Business',
    icon: '🏪',
    title: 'OpenClaw for Small Business: Enterprise AI on a Bootstrap Budget',
    description: 'Small businesses use OpenClaw to automate customer service, scheduling, and operations without expensive SaaS subscriptions.',
    painPoints: ['High SaaS costs eating margins', 'No dedicated IT team', 'Customers expect instant responses'],
    solutions: [
      { title: 'Appointment Booking', description: 'Automated scheduling across multiple channels.' },
      { title: 'Customer FAQ Bot', description: 'Answer common questions instantly, any time of day.' },
      { title: 'Order Status Updates', description: 'Automated notifications via SMS, email, or chat.' },
    ],
  },
  {
    slug: 'sales-teams',
    name: 'Sales Teams',
    icon: '💰',
    title: 'OpenClaw for Sales Teams: AI That Sells While You Sleep',
    description: 'Sales teams use OpenClaw to qualify leads, nurture prospects, and handle follow-ups automatically.',
    painPoints: ['Too many leads to follow up manually', 'Prospects go cold waiting for responses', 'Repetitive qualification calls'],
    solutions: [
      { title: 'Lead Qualification', description: 'AI qualifies leads based on your criteria before they reach your team.' },
      { title: 'Automated Follow-ups', description: 'Never let a lead go cold with intelligent follow-up sequences.' },
      { title: 'Meeting Booking', description: 'Qualified leads book directly on your calendar.' },
    ],
  },
  {
    slug: 'customer-support',
    name: 'Customer Support',
    icon: '🎧',
    title: 'OpenClaw for Customer Support: AI That Actually Helps Customers',
    description: 'Support teams use OpenClaw to handle tier-1 tickets, reduce response times, and escalate intelligently.',
    painPoints: ['High ticket volume', 'Repetitive questions drain the team', 'Customers expect 24/7 availability'],
    solutions: [
      { title: 'Instant Responses', description: 'Answer common questions immediately, any time of day.' },
      { title: 'Smart Escalation', description: 'Route complex issues to the right human with full context.' },
      { title: 'Knowledge Base Integration', description: 'Pull answers from your docs automatically.' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: '🏠',
    title: 'OpenClaw for Real Estate: AI That Qualifies Leads and Books Showings',
    description: 'Real estate agents use OpenClaw to handle inquiries, qualify buyers, and schedule showings automatically.',
    painPoints: ['Leads expect instant responses', 'Too many unqualified inquiries', 'Scheduling showings is a hassle'],
    solutions: [
      { title: 'Lead Response', description: 'Respond to inquiries instantly, day or night.' },
      { title: 'Buyer Qualification', description: 'Ask qualification questions before routing to agents.' },
      { title: 'Showing Scheduler', description: 'Book showings directly on your calendar.' },
    ],
  },
  {
    slug: 'lawyers',
    name: 'Lawyers & Law Firms',
    icon: '⚖️',
    title: 'OpenClaw for Lawyers: AI That Handles Intake and Client Communication',
    description: 'Law firms use OpenClaw to automate client intake, answer common questions, and manage appointment scheduling.',
    painPoints: ['Client intake is time-consuming', 'Can\'t answer calls 24/7', 'Administrative work eats billable hours'],
    solutions: [
      { title: 'Client Intake', description: 'Automated intake forms and initial qualification.' },
      { title: 'FAQ Handling', description: 'Answer common legal questions and set expectations.' },
      { title: 'Appointment Booking', description: 'Schedule consultations without back-and-forth.' },
    ],
  },
  {
    slug: 'consultants',
    name: 'Consultants',
    icon: '📊',
    title: 'OpenClaw for Consultants: AI That Qualifies Clients and Books Calls',
    description: 'Independent consultants use OpenClaw to handle inbound inquiries, qualify prospects, and manage scheduling.',
    painPoints: ['Too many unqualified leads', 'Scheduling back-and-forth wastes time', 'No assistant to handle admin'],
    solutions: [
      { title: 'Prospect Qualification', description: 'Qualify leads before they get on your calendar.' },
      { title: 'Discovery Call Booking', description: 'Automated scheduling with your availability.' },
      { title: 'Follow-up Sequences', description: 'Nurture prospects who aren\'t ready to buy yet.' },
    ],
  },
  {
    slug: 'recruiters',
    name: 'Recruiters',
    icon: '👔',
    title: 'OpenClaw for Recruiters: AI That Screens Candidates and Schedules Interviews',
    description: 'Recruiters use OpenClaw to handle initial candidate screening, answer questions, and coordinate interviews.',
    painPoints: ['High volume of applicants', 'Screening is repetitive', 'Coordinating interviews is a nightmare'],
    solutions: [
      { title: 'Candidate Screening', description: 'Automated initial questions and qualification.' },
      { title: 'Interview Scheduling', description: 'Coordinate between candidates and hiring managers.' },
      { title: 'Candidate Nurturing', description: 'Keep candidates engaged throughout the process.' },
    ],
  },
  {
    slug: 'executives',
    name: 'Executives',
    icon: '👔',
    title: 'OpenClaw for Executives: AI That Manages Your Inbox and Calendar',
    description: 'Busy executives use OpenClaw to triage email, manage scheduling, and handle routine communications.',
    painPoints: ['Email overwhelm', 'Calendar chaos', 'Too much time on low-value tasks'],
    solutions: [
      { title: 'Email Triage', description: 'Prioritize important messages, summarize the rest.' },
      { title: 'Calendar Management', description: 'Smart scheduling with conflict resolution.' },
      { title: 'Meeting Prep', description: 'Automated briefings before each meeting.' },
    ],
  },
  {
    slug: 'marketing',
    name: 'Marketing Teams',
    icon: '📣',
    title: 'OpenClaw for Marketing: AI That Creates Content and Manages Campaigns',
    description: 'Marketing teams use OpenClaw to draft content, manage social media, and automate campaign workflows.',
    painPoints: ['Content production is slow', 'Social media is a time sink', 'Campaign coordination is complex'],
    solutions: [
      { title: 'Content Drafting', description: 'Generate first drafts of blog posts, emails, and social content.' },
      { title: 'Social Management', description: 'Schedule posts and respond to comments.' },
      { title: 'Campaign Automation', description: 'Coordinate multi-channel campaigns automatically.' },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    icon: '🛒',
    title: 'OpenClaw for E-commerce: AI That Handles Orders and Customer Questions',
    description: 'E-commerce stores use OpenClaw to automate customer service, order tracking, and post-purchase communication.',
    painPoints: ['High volume of "where\'s my order?" questions', 'Returns are complex to manage', 'Customers expect instant answers'],
    solutions: [
      { title: 'Order Tracking', description: 'Automated status updates across channels.' },
      { title: 'Returns Processing', description: 'Guide customers through returns and exchanges.' },
      { title: 'Product Questions', description: 'Answer questions about sizing, shipping, and more.' },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    title: 'OpenClaw for Healthcare: AI That Handles Scheduling and Patient Communication',
    description: 'Healthcare practices use OpenClaw to manage appointment scheduling, reminders, and patient communication.',
    painPoints: ['Phone lines always busy', 'No-shows are costly', 'Admin staff stretched thin'],
    solutions: [
      { title: 'Appointment Scheduling', description: 'Patients book and reschedule via chat or text.' },
      { title: 'Reminders', description: 'Automated appointment reminders reduce no-shows.' },
      { title: 'Pre-visit Forms', description: 'Collect information before patients arrive.' },
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    icon: '📚',
    title: 'OpenClaw for Education: AI That Supports Students and Automates Admin',
    description: 'Educational institutions use OpenClaw to answer student questions, manage enrollment, and automate administrative tasks.',
    painPoints: ['Students have questions 24/7', 'Enrollment is manual and slow', 'Admin tasks take time from teaching'],
    solutions: [
      { title: 'Student Support', description: 'Answer questions about courses, deadlines, and policies.' },
      { title: 'Enrollment Assistance', description: 'Guide prospective students through the process.' },
      { title: 'Admin Automation', description: 'Handle routine paperwork and scheduling.' },
    ],
  },
  {
    slug: 'hr',
    name: 'HR Teams',
    icon: '👥',
    title: 'OpenClaw for HR: AI That Handles Employee Questions and Onboarding',
    description: 'HR teams use OpenClaw to answer policy questions, streamline onboarding, and manage internal communications.',
    painPoints: ['Same questions asked repeatedly', 'Onboarding is inconsistent', 'HR team stretched thin'],
    solutions: [
      { title: 'Policy Q&A', description: 'Answer questions about PTO, benefits, and policies.' },
      { title: 'Onboarding Automation', description: 'Guide new hires through their first weeks.' },
      { title: 'Internal Comms', description: 'Distribute announcements and collect feedback.' },
    ],
  },
  {
    slug: 'accountants',
    name: 'Accountants',
    icon: '📈',
    title: 'OpenClaw for Accountants: AI That Handles Client Communication and Intake',
    description: 'Accounting firms use OpenClaw to manage client intake, answer common questions, and coordinate document collection.',
    painPoints: ['Tax season overwhelm', 'Chasing clients for documents', 'Repetitive questions drain time'],
    solutions: [
      { title: 'Client Intake', description: 'Automated onboarding for new clients.' },
      { title: 'Document Requests', description: 'Automated reminders for missing documents.' },
      { title: 'Tax Questions', description: 'Answer common questions about deadlines and requirements.' },
    ],
  },
];

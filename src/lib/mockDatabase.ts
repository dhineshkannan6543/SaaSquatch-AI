import { TargetLead } from '../types';

export const INITIAL_LEADS: TargetLead[] = [
  {
    id: 'lead-001',
    companyName: 'FieldTrack Logistics Solutions',
    domain: 'fieldtracklogistics.com',
    description: 'B2B field service management software for regional HVAC, electrical, and plumbing contractors.',
    industry: 'Field Service Automation',
    location: 'Columbus, OH',
    foundedYear: 2014,
    scrapedAt: '2026-10-05T14:20:00Z',
    aiScore: {
      techModernity: 48,
      automationPotential: 92,
      supportAiFit: 88,
      dataInfrastructure: 55,
      overallScore: 71,
    },
    acquisitionSignals: {
      founderRisk: 'High',
      techDebtLevel: 'High',
      hiringTrend: 'Flat',
      marketTier: 'Lower-Middle Market',
      estimatedARR: '$3.8M - $4.5M',
      employeeCount: '22',
    },
    techStack: [
      { category: 'CMS', name: 'WordPress (v5.8)', modernity: 'Legacy' },
      { category: 'Analytics', name: 'Google Analytics UA (Deprecated)', modernity: 'Outdated' },
      { category: 'Support/CRM', name: 'Zendesk Email Ticket Only', modernity: 'Legacy' },
      { category: 'Hosting/CDN', name: 'Apache / Shared Server', modernity: 'Outdated' },
      { category: 'Framework', name: 'PHP / jQuery', modernity: 'Legacy' },
    ],
    valueCreationPlan: [
      {
        title: 'AI Dispatch & Route Optimization Engine',
        impact: 'High Impact',
        description: 'Replace manual dispatcher scheduling with an automated real-time LLM dispatch agent.',
        estimatedEbitdaLift: '+18% Margin expansion',
      },
      {
        title: 'Voice AI Customer Support & Booking',
        impact: 'Quick Win',
        description: 'Implement 24/7 inbound AI voice assistant to handle emergency service calls and job scheduling.',
        estimatedEbitdaLift: '+12% Lead conversion',
      },
      {
        title: 'Modern Cloud Infrastructure & API Modernization',
        impact: 'Medium Impact',
        description: 'Migrate legacy PHP backend to modern serverless API to reduce maintenance overhead by 50%.',
        estimatedEbitdaLift: '-$140k Annual OPEX',
      },
    ],
    personalizedPitch: {
      subject: 'Partnering with FieldTrack: Strategic AI Value Creation & Growth',
      body: `Hi Mark,

I've been following FieldTrack's strong position in regional field service management. Unlike traditional financial buyers, Caprae Capital operates with a software-first mindset: we partner with high-potential SMBs and deploy modern AI infrastructure post-acquisition.

We see an immediate opportunity at FieldTrack to implement automated AI dispatching and 24/7 AI voice booking—unlocking 25%+ EBITDA growth while providing you with an attractive liquidity event or strategic growth partnership.

Would you be open to a brief 15-minute intro conversation next Tuesday?

Best regards,
Deal Sourcing Team | Caprae Capital`,
    },
    contactInfo: {
      founderName: 'Mark Higgins',
      title: 'Founder & CEO',
      email: 'm.higgins@fieldtracklogistics.com',
      linkedinUrl: 'https://linkedin.com/in/mark-higgins-fieldtrack',
    },
    status: 'Vetted',
  },
  {
    id: 'lead-002',
    companyName: 'MedFlow Workflow Systems',
    domain: 'medflowsystems.io',
    description: 'Patient intake, billing compliance, and records management portal for dental and outpatient clinics.',
    industry: 'Healthcare IT',
    location: 'Tampa, FL',
    foundedYear: 2016,
    scrapedAt: '2026-10-06T09:15:00Z',
    aiScore: {
      techModernity: 65,
      automationPotential: 85,
      supportAiFit: 78,
      dataInfrastructure: 60,
      overallScore: 72,
    },
    acquisitionSignals: {
      founderRisk: 'Medium',
      techDebtLevel: 'Moderate',
      hiringTrend: 'Growing',
      marketTier: 'Lower-Middle Market',
      estimatedARR: '$5.2M - $6.0M',
      employeeCount: '34',
    },
    techStack: [
      { category: 'Framework', name: 'React 17 / Node.js', modernity: 'Modern' },
      { category: 'Hosting/CDN', name: 'AWS EC2 / CloudFront', modernity: 'Modern' },
      { category: 'Support/CRM', name: 'Intercom Live Chat', modernity: 'Modern' },
      { category: 'Analytics', name: 'Mixpanel', modernity: 'Modern' },
      { category: 'AI/Automation', name: 'None Detected', modernity: 'Outdated' },
    ],
    valueCreationPlan: [
      {
        title: 'HIPAA-Compliant AI Medical Document Parsing',
        impact: 'High Impact',
        description: 'Automate manual claim processing and patient form extraction using fine-tuned vision models.',
        estimatedEbitdaLift: '+22% Operating Margin',
      },
      {
        title: 'Predictive Patient No-Show AI Model',
        impact: 'Quick Win',
        description: 'Deploy automated SMS/Voice AI reminders that optimize clinic calendar utilization.',
        estimatedEbitdaLift: '+$180k Annual Revenue',
      },
    ],
    personalizedPitch: {
      subject: 'MedFlow Growth: AI-Driven Healthcare Automation Partnership',
      body: `Hi Sarah,

MedFlow's workflow software has impressive market penetration among outpatient clinics. At Caprae Capital, we specialize in partnering with Healthcare IT firms to layer proprietary AI automation directly into post-acquisition operations.

By integrating automated HIPAA document parsing and AI patient scheduling, MedFlow can significantly expand gross margins while scaling ARR.

Let's connect for 15 minutes to discuss how Caprae supports long-term value creation.

Best,
Caprae M&A Team`,
    },
    contactInfo: {
      founderName: 'Sarah Jenkins',
      title: 'Co-Founder & President',
      email: 's.jenkins@medflowsystems.io',
      linkedinUrl: 'https://linkedin.com/in/sarah-jenkins-medflow',
    },
    status: 'New',
  },
  {
    id: 'lead-003',
    companyName: 'SupplyChain Hub Pro',
    domain: 'supplychainhub.net',
    description: 'Inventory auditing and supplier tracking SaaS for mid-sized automotive parts distributors.',
    industry: 'Supply Chain & ERP',
    location: 'Detroit, MI',
    foundedYear: 2012,
    scrapedAt: '2026-10-04T11:00:00Z',
    aiScore: {
      techModernity: 35,
      automationPotential: 96,
      supportAiFit: 90,
      dataInfrastructure: 40,
      overallScore: 65,
    },
    acquisitionSignals: {
      founderRisk: 'High',
      techDebtLevel: 'High',
      hiringTrend: 'Slowdown',
      marketTier: 'Lower-Middle Market',
      estimatedARR: '$2.1M - $2.8M',
      employeeCount: '14',
    },
    techStack: [
      { category: 'CMS', name: 'Custom ASP.NET WebForms', modernity: 'Outdated' },
      { category: 'Database', name: 'MSSQL Server 2012', modernity: 'Outdated' },
      { category: 'Support/CRM', name: 'Outlook Shared Inbox', modernity: 'Outdated' },
      { category: 'Analytics', name: 'None', modernity: 'Outdated' },
    ],
    valueCreationPlan: [
      {
        title: 'Demand Forecasting LLM Engine',
        impact: 'High Impact',
        description: 'Provide predictive inventory reordering powered by machine learning models to prevent stockouts.',
        estimatedEbitdaLift: '+30% Customer LTV',
      },
      {
        title: 'Legacy Monolith Refactoring to SaaS API',
        impact: 'Medium Impact',
        description: 'Refactor outdated .NET database into modern SaaS architecture to cut hosting and maintenance costs.',
        estimatedEbitdaLift: '-$95k Hosting Overhead',
      },
    ],
    personalizedPitch: {
      subject: 'Acquisition & AI Transformation for SupplyChain Hub Pro',
      body: `Hi Robert,

Your platform has established a defensible niche in automotive inventory tracking. Caprae Capital helps founder-led software companies transition into next-generation AI platforms.

We see enormous potential to introduce predictive inventory AI and automated supplier forecasting, providing you with flexible transaction terms and guaranteed long-term business continuity.

Are you open to an informal conversation this week?

Best,
Caprae Capital Team`,
    },
    contactInfo: {
      founderName: 'Robert Vance',
      title: 'Founder & Head of Engineering',
      email: 'rvance@supplychainhub.net',
      linkedinUrl: 'https://linkedin.com/in/robert-vance-supplychain',
    },
    status: 'In Discussion',
  },
  {
    id: 'lead-004',
    companyName: 'Apex Talent Suite',
    domain: 'apextalentsuite.com',
    description: 'Niche applicant tracking and skills assessment software for specialized engineering staffing agencies.',
    industry: 'HR Tech / Staffing',
    location: 'Austin, TX',
    foundedYear: 2018,
    scrapedAt: '2026-10-06T10:40:00Z',
    aiScore: {
      techModernity: 78,
      automationPotential: 89,
      supportAiFit: 84,
      dataInfrastructure: 75,
      overallScore: 81,
    },
    acquisitionSignals: {
      founderRisk: 'Low',
      techDebtLevel: 'Low',
      hiringTrend: 'Growing',
      marketTier: 'Lower-Middle Market',
      estimatedARR: '$6.8M - $7.5M',
      employeeCount: '41',
    },
    techStack: [
      { category: 'Framework', name: 'Next.js / TypeScript', modernity: 'Modern' },
      { category: 'AI/Automation', name: 'OpenAI API Basic Integration', modernity: 'Modern' },
      { category: 'Hosting/CDN', name: 'Vercel / Supabase', modernity: 'Modern' },
      { category: 'Analytics', name: 'PostHog', modernity: 'Modern' },
    ],
    valueCreationPlan: [
      {
        title: 'Autonomous AI Candidate Sourcing & Screening',
        impact: 'High Impact',
        description: 'Build automated AI interview evaluators to instantly match candidates to tech job descriptions.',
        estimatedEbitdaLift: '+35% Recruiter Efficiency',
      },
      {
        title: 'Enterprise Tier Pricing Restructure',
        impact: 'Quick Win',
        description: 'Introduce usage-based AI pricing modules to double average contract value (ACV).',
        estimatedEbitdaLift: '+$450k ARR Addition',
      },
    ],
    personalizedPitch: {
      subject: 'Scaling Apex Talent Suite with Caprae Capital\'s MaaS Engine',
      body: `Hi Elena,

Apex's ATS platform is built on an excellent modern stack. Caprae Capital’s M&A as a Service (MaaS) model works with high-growth SaaS firms to accelerate scale post-acquisition.

We would love to discuss combining Apex's strong core with Caprae's AI value creation playbook to capture enterprise market share.

Let's schedule a 15-minute call.

Best,
Caprae Sourcing Team`,
    },
    contactInfo: {
      founderName: 'Elena Rostova',
      title: 'Founder & CEO',
      email: 'e.rostova@apextalentsuite.com',
      linkedinUrl: 'https://linkedin.com/in/elena-rostova-apex',
    },
    status: 'Outreach Sent',
  },
];

// In-memory runtime storage for newly scraped leads
let leadsStore: TargetLead[] = [...INITIAL_LEADS];

export function getLeads(): TargetLead[] {
  return leadsStore;
}

export function addLead(newLead: TargetLead): TargetLead {
  // Check if domain already exists, replace or append
  const existingIndex = leadsStore.findIndex(
    (l) => l.domain.toLowerCase() === newLead.domain.toLowerCase()
  );
  if (existingIndex >= 0) {
    leadsStore[existingIndex] = newLead;
  } else {
    leadsStore.unshift(newLead);
  }
  return newLead;
}

export function deleteLead(id: string): boolean {
  const initialLength = leadsStore.length;
  leadsStore = leadsStore.filter((l) => l.id !== id);
  return leadsStore.length < initialLength;
}

export function updateLeadStatus(id: string, status: TargetLead['status']): TargetLead | null {
  const lead = leadsStore.find((l) => l.id === id);
  if (lead) {
    lead.status = status;
    return lead;
  }
  return null;
}

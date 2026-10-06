export interface TechStackItem {
  category: 'CMS' | 'Analytics' | 'Support/CRM' | 'Hosting/CDN' | 'AI/Automation' | 'Framework' | 'Database';
  name: string;
  modernity: 'Modern' | 'Legacy' | 'Outdated';
}

export interface AIScoreBreakdown {
  techModernity: number; // 0-100
  automationPotential: number; // 0-100
  supportAiFit: number; // 0-100
  dataInfrastructure: number; // 0-100
  overallScore: number; // 0-100
}

export interface AcquisitionSignals {
  founderRisk: 'High' | 'Medium' | 'Low';
  techDebtLevel: 'High' | 'Moderate' | 'Low';
  hiringTrend: 'Growing' | 'Flat' | 'Slowdown';
  marketTier: 'Lower-Middle Market' | 'Micro SaaS' | 'Mid-Market';
  estimatedARR: string; // e.g. "$2.5M - $5.0M"
  employeeCount: string; // e.g. "15-30"
}

export interface ValueCreationItem {
  title: string;
  impact: 'High Impact' | 'Medium Impact' | 'Quick Win';
  description: string;
  estimatedEbitdaLift: string;
}

export interface TargetLead {
  id: string;
  companyName: string;
  domain: string;
  logoUrl?: string;
  description: string;
  industry: string;
  location: string;
  foundedYear: number;
  scrapedAt: string;
  aiScore: AIScoreBreakdown;
  acquisitionSignals: AcquisitionSignals;
  techStack: TechStackItem[];
  valueCreationPlan: ValueCreationItem[];
  personalizedPitch: {
    subject: string;
    body: string;
  };
  contactInfo: {
    founderName: string;
    title: string;
    email: string;
    linkedinUrl?: string;
  };
  status: 'New' | 'Vetted' | 'Outreach Sent' | 'In Discussion' | 'Archived';
}

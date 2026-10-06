import { NextResponse } from 'next/server';
import { getLeads } from '@/lib/mockDatabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'json';
  const leads = getLeads();

  if (format === 'csv') {
    const headers = [
      'Company Name',
      'Domain',
      'Industry',
      'Estimated ARR',
      'AI Overall Score',
      'Automation Potential',
      'Tech Modernity',
      'Founder Risk',
      'Founder Email',
      'Status',
    ];

    const rows = leads.map((l) => [
      `"${l.companyName.replace(/"/g, '""')}"`,
      `"${l.domain}"`,
      `"${l.industry}"`,
      `"${l.acquisitionSignals.estimatedARR}"`,
      l.aiScore.overallScore,
      l.aiScore.automationPotential,
      l.aiScore.techModernity,
      `"${l.acquisitionSignals.founderRisk}"`,
      `"${l.contactInfo.email}"`,
      `"${l.status}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="saasquatch_ai_leads.csv"',
      },
    });
  }

  return NextResponse.json(leads);
}

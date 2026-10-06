import { NextResponse } from 'next/server';
import { scrapeTargetLead } from '@/lib/scraperEngine';
import { addLead } from '@/lib/mockDatabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, urls } = body;

    const urlList: string[] = [];
    if (urls && Array.isArray(urls)) {
      urlList.push(...urls);
    } else if (url && typeof url === 'string') {
      urlList.push(url);
    }

    if (urlList.length === 0) {
      return NextResponse.json({ error: 'Please provide at least one valid URL to analyze.' }, { status: 400 });
    }

    const results = [];
    for (const targetUrl of urlList) {
      if (targetUrl.trim()) {
        const lead = await scrapeTargetLead(targetUrl.trim());
        addLead(lead);
        results.push(lead);
      }
    }

    return NextResponse.json({
      success: true,
      count: results.length,
      leads: results,
    });
  } catch (error: unknown) {
    console.error('API /api/scrape Error:', error);
    const message = error instanceof Error ? error.message : 'Scraping failed.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

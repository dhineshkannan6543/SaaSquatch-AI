import { NextResponse } from 'next/server';
import { getLeads, deleteLead, updateLeadStatus } from '@/lib/mockDatabase';

export async function GET() {
  const leads = getLeads();
  return NextResponse.json({ success: true, count: leads.length, leads });
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing lead ID' }, { status: 400 });
    }
    const success = deleteLead(id);
    return NextResponse.json({ success });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }
    const updated = updateLeadStatus(id, status);
    return NextResponse.json({ success: !!updated, lead: updated });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

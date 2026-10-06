'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ScraperInput } from '@/components/ScraperInput';
import { MetricsOverview } from '@/components/MetricsOverview';
import { LeadsTable } from '@/components/LeadsTable';
import { LeadDrawer } from '@/components/LeadDrawer';
import { ComparisonModal } from '@/components/ComparisonModal';
import { TargetLead } from '@/types';
import { Scale } from 'lucide-react';

export default function Dashboard() {
  const [leads, setLeads] = useState<TargetLead[]>([]);
  const [selectedLead, setSelectedLead] = useState<TargetLead | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Fetch initial leads from API
  useEffect(() => {
    fetch('/api/leads')
      .then((res) => res.json())
      .then((data) => {
        if (data.leads) {
          setLeads(data.leads);
        }
      })
      .catch((err) => console.error('Failed to load initial leads:', err));
  }, []);

  const handleScrapeSuccess = () => {
    fetch('/api/leads')
      .then((res) => res.json())
      .then((data) => {
        if (data.leads) setLeads(data.leads);
      });
  };

  const handleDeleteLead = async (id: string) => {
    try {
      await fetch(`/api/leads?id=${id}`, { method: 'DELETE' });
      setLeads((prev) => prev.filter((l) => l.id !== id));
      if (selectedLead?.id === id) setSelectedLead(null);
      setCompareIds((prev) => prev.filter((i) => i !== id));
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleUpdateStatus = async (id: string, status: TargetLead['status']) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json();
      if (data.success && data.lead) {
        setLeads((prev) => prev.map((l) => (l.id === id ? data.lead : l)));
        if (selectedLead?.id === id) setSelectedLead(data.lead);
      }
    } catch (err) {
      console.error('Update status error:', err);
    }
  };

  const handleToggleCompare = (id: string) => {
    setCompareIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleExportCsv = () => {
    window.open('/api/export?format=csv', '_blank');
  };

  const handleExportJson = () => {
    window.open('/api/export?format=json', '_blank');
  };

  const avgAiScore = leads.length
    ? Math.round(leads.reduce((acc, l) => acc + l.aiScore.overallScore, 0) / leads.length)
    : 0;

  const compareLeads = leads.filter((l) => compareIds.includes(l.id));

  return (
    <div className="min-h-screen pb-16 flex flex-col">
      {/* Top Sticky Header */}
      <Header
        leadCount={leads.length}
        avgAiScore={avgAiScore}
        onExportCsv={handleExportCsv}
        onExportJson={handleExportJson}
      />

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8 flex-1">
        {/* Scraper Input Tool */}
        <ScraperInput onScrapeSuccess={handleScrapeSuccess} />

        {/* High-level KPIs */}
        <MetricsOverview leads={leads} />

        {/* Compare Floating Trigger Bar if targets selected */}
        {compareIds.length > 0 && (
          <div className="sticky top-20 z-20 glass-panel p-4 rounded-xl border border-sky-500/40 shadow-xl flex items-center justify-between animate-slide-up">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-300">
              <Scale className="w-4 h-4 text-sky-400" />
              <span>{compareIds.length} target leads selected for side-by-side comparison</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCompareIds([])}
                className="px-3 py-1 text-xs text-slate-400 hover:text-white transition"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsCompareOpen(true)}
                className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-600/30 flex items-center gap-1.5 transition"
              >
                Compare Now
              </button>
            </div>
          </div>
        )}

        {/* Target Leads Interactive Table */}
        <LeadsTable
          leads={leads}
          onSelectLead={setSelectedLead}
          onDeleteLead={handleDeleteLead}
          selectedCompareIds={compareIds}
          onToggleCompare={handleToggleCompare}
        />
      </main>

      {/* Slide-over Deep Dive Drawer */}
      <LeadDrawer
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
        onUpdateStatus={handleUpdateStatus}
      />

      {/* Side-by-side Comparison Modal */}
      {isCompareOpen && (
        <ComparisonModal leads={compareLeads} onClose={() => setIsCompareOpen(false)} />
      )}

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-500">
        <p>
          SaaSquatch AI • Caprae Capital AI-Readiness Pre-Screening Platform • Built for ETA & Search Funds
        </p>
      </footer>
    </div>
  );
}

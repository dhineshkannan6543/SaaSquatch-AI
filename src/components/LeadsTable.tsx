'use client';

import React, { useState } from 'react';
import {
  Search,
  ExternalLink,
  Zap,
  ChevronRight,
  Trash2,
} from 'lucide-react';
import { TargetLead } from '../types';

interface LeadsTableProps {
  leads: TargetLead[];
  onSelectLead: (lead: TargetLead) => void;
  onDeleteLead: (id: string) => void;
  selectedCompareIds: string[];
  onToggleCompare: (id: string) => void;
}

export const LeadsTable: React.FC<LeadsTableProps> = ({
  leads,
  onSelectLead,
  onDeleteLead,
  selectedCompareIds,
  onToggleCompare,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [minScoreFilter, setMinScoreFilter] = useState<number>(0);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.industry.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchesScore = lead.aiScore.overallScore >= minScoreFilter;

    return matchesSearch && matchesStatus && matchesScore;
  });

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    if (score >= 65) return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    return 'bg-slate-800 text-slate-400 border-slate-700';
  };

  const getStatusBadge = (status: TargetLead['status']) => {
    switch (status) {
      case 'Vetted':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'In Discussion':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'Outreach Sent':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden">
      {/* Table Toolbar */}
      <div className="p-5 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            Target Company Leads
          </h3>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {filteredLeads.length} leads
          </span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search Bar */}
          <div className="relative min-w-[200px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search domain, company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Status Select */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-sky-500"
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Vetted">Vetted</option>
            <option value="Outreach Sent">Outreach Sent</option>
            <option value="In Discussion">In Discussion</option>
          </select>

          {/* Min Score Filter */}
          <select
            value={minScoreFilter}
            onChange={(e) => setMinScoreFilter(Number(e.target.value))}
            className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-sky-500"
          >
            <option value={0}>Any AI Score</option>
            <option value={70}>70+ (High Fit)</option>
            <option value={80}>80+ (Top Opportunity)</option>
          </select>
        </div>
      </div>

      {/* Table Data */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900/90 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider text-[11px]">
            <tr>
              <th className="py-3.5 px-4 w-10 text-center">Compare</th>
              <th className="py-3.5 px-4">Company & Domain</th>
              <th className="py-3.5 px-4">AI Readiness Score</th>
              <th className="py-3.5 px-4">Est. ARR & Signals</th>
              <th className="py-3.5 px-4">Founder Contact</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-10 text-slate-500">
                  No target leads matching your search criteria.
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className="hover:bg-slate-800/40 transition group cursor-pointer"
                  onClick={() => onSelectLead(lead)}
                >
                  {/* Compare Checkbox */}
                  <td className="py-4 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selectedCompareIds.includes(lead.id)}
                      onChange={() => onToggleCompare(lead.id)}
                      className="rounded bg-slate-900 border-slate-700 text-sky-500 focus:ring-sky-500 h-4 w-4 cursor-pointer"
                    />
                  </td>

                  {/* Company Details */}
                  <td className="py-4 px-4">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center font-bold text-sky-400 text-xs flex-shrink-0 mt-0.5">
                        {lead.companyName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-sky-400 transition flex items-center gap-1.5">
                          {lead.companyName}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-slate-400 font-mono text-[11px]">{lead.domain}</span>
                          <a
                            href={`https://${lead.domain}`}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-500 hover:text-sky-400 transition"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* AI Readiness Score */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-lg font-bold border text-xs flex items-center gap-1 ${getScoreColor(
                          lead.aiScore.overallScore
                        )}`}
                      >
                        <Zap className="w-3 h-3" />
                        {lead.aiScore.overallScore}/100
                      </span>
                      <div className="hidden lg:block text-[11px] text-slate-400">
                        Automation: {lead.aiScore.automationPotential}%
                      </div>
                    </div>
                  </td>

                  {/* Estimated ARR & Signals */}
                  <td className="py-4 px-4">
                    <div className="font-semibold text-slate-200">
                      {lead.acquisitionSignals.estimatedARR}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded border ${
                          lead.acquisitionSignals.founderRisk === 'High'
                            ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                      >
                        Founder Risk: {lead.acquisitionSignals.founderRisk}
                      </span>
                    </div>
                  </td>

                  {/* Founder Contact */}
                  <td className="py-4 px-4">
                    <div className="text-slate-200 font-medium">{lead.contactInfo.founderName}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5 truncate max-w-[140px]">
                      {lead.contactInfo.email}
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-medium border inline-block ${getStatusBadge(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => onSelectLead(lead)}
                        className="px-2.5 py-1.5 rounded-lg bg-sky-600/20 hover:bg-sky-600/40 text-sky-300 text-xs font-medium border border-sky-500/30 flex items-center gap-1 transition"
                      >
                        Deep Dive
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDeleteLead(lead.id)}
                        className="p-1.5 rounded-lg hover:bg-rose-500/20 text-slate-500 hover:text-rose-400 transition"
                        title="Delete lead"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

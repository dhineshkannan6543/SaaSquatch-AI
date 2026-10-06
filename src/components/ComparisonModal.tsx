'use client';

import React from 'react';
import { X, Zap, Scale, ExternalLink } from 'lucide-react';
import { TargetLead } from '../types';

interface ComparisonModalProps {
  leads: TargetLead[];
  onClose: () => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ leads, onClose }) => {
  if (leads.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-5xl bg-[#0b101c] border border-slate-800 rounded-2xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-[#0b101c] z-10">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-sky-400" />
            <h2 className="text-lg font-bold text-white">Side-by-Side Target Lead Comparison</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid comparison */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="glass-panel p-5 rounded-2xl space-y-4 border border-slate-800 hover:border-sky-500/40 transition"
            >
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white">{lead.companyName}</h3>
                <a
                  href={`https://${lead.domain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-sky-400 font-mono hover:underline inline-flex items-center gap-1"
                >
                  {lead.domain}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* AI Score */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Overall AI Score</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {lead.aiScore.overallScore} / 100
                </span>
              </div>

              {/* ARR & Signals */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Est. ARR:</span>
                  <span className="font-bold text-emerald-400">
                    {lead.acquisitionSignals.estimatedARR}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Founder Risk:</span>
                  <span className="font-semibold text-rose-300">
                    {lead.acquisitionSignals.founderRisk}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tech Debt Level:</span>
                  <span className="font-semibold text-amber-300">
                    {lead.acquisitionSignals.techDebtLevel}
                  </span>
                </div>
              </div>

              {/* Value Creation Win */}
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block">
                  Top AI Quick Win
                </span>
                <p className="text-xs font-semibold text-white">
                  {lead.valueCreationPlan[0]?.title || 'AI Dispatch Engine'}
                </p>
                <p className="text-[11px] text-emerald-400 font-medium">
                  {lead.valueCreationPlan[0]?.estimatedEbitdaLift}
                </p>
              </div>

              {/* Tech stack badge list */}
              <div className="space-y-1">
                <span className="text-[11px] text-slate-400 font-medium">Tech Stack:</span>
                <div className="flex flex-wrap gap-1">
                  {lead.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

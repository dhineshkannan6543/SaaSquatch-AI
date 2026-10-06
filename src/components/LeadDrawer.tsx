'use client';

import React, { useState } from 'react';
import {
  X,
  Zap,
  Cpu,
  Mail,
  Check,
  Copy,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { TargetLead } from '../types';

interface LeadDrawerProps {
  lead: TargetLead | null;
  onClose: () => void;
  onUpdateStatus: (id: string, status: TargetLead['status']) => void;
}

export const LeadDrawer: React.FC<LeadDrawerProps> = ({ lead, onClose, onUpdateStatus }) => {
  const [copiedPitch, setCopiedPitch] = useState(false);

  if (!lead) return null;

  const handleCopyPitch = () => {
    const fullText = `Subject: ${lead.personalizedPitch.subject}\n\n${lead.personalizedPitch.body}`;
    navigator.clipboard.writeText(fullText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-[#0b101c] border-l border-slate-800 h-full overflow-y-auto flex flex-col shadow-2xl">
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-sky-500/20">
              {lead.companyName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">{lead.companyName}</h2>
                <a
                  href={`https://${lead.domain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-sky-400 hover:underline flex items-center gap-1 font-mono"
                >
                  {lead.domain}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{lead.industry} • Founded {lead.foundedYear}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 space-y-6 flex-1">
          {/* Top Banner: Status & Quick Metric */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Deal Status</span>
              <select
                value={lead.status}
                onChange={(e) => onUpdateStatus(lead.id, e.target.value as TargetLead['status'])}
                className="mt-1 px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-semibold text-white focus:outline-none focus:border-sky-500"
              >
                <option value="New">New Lead</option>
                <option value="Vetted">Vetted</option>
                <option value="Outreach Sent">Outreach Sent</option>
                <option value="In Discussion">In Discussion</option>
                <option value="Archived">Archived</option>
              </select>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 block font-medium">Estimated ARR</span>
              <span className="text-base font-bold text-emerald-400 mt-0.5 block">
                {lead.acquisitionSignals.estimatedARR}
              </span>
            </div>
          </div>

          {/* AI Readiness Score Breakdown */}
          <div className="glass-panel p-5 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                SaaSquatch AI Readiness Breakdown
              </h3>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold">
                {lead.aiScore.overallScore} / 100
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Tech Stack Modernity</span>
                  <span className="text-white font-bold">{lead.aiScore.techModernity}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: `${lead.aiScore.techModernity}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Automation Potential</span>
                  <span className="text-amber-400 font-bold">{lead.aiScore.automationPotential}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full rounded-full"
                    style={{ width: `${lead.aiScore.automationPotential}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Support AI Fit</span>
                  <span className="text-emerald-400 font-bold">{lead.aiScore.supportAiFit}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-400 h-full rounded-full"
                    style={{ width: `${lead.aiScore.supportAiFit}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Data Infra Maturity</span>
                  <span className="text-purple-300 font-bold">{lead.aiScore.dataInfrastructure}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-purple-400 h-full rounded-full"
                    style={{ width: `${lead.aiScore.dataInfrastructure}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Scraped Tags */}
          <div className="glass-panel p-5 rounded-2xl space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              Detected Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {lead.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 ${
                    tech.modernity === 'Modern'
                      ? 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                      : tech.modernity === 'Legacy'
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">
                    {tech.category}:
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Caprae Strategic Value Creation Roadmap */}
          <div className="glass-panel p-5 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Caprae Post-Acquisition AI Value Creation Roadmap
            </h3>

            <div className="space-y-3">
              {lead.valueCreationPlan.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{item.title}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {item.estimatedEbitdaLift}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Cold Outreach Pitch Draft */}
          <div className="glass-panel p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                Tailored AI Outreach Pitch
              </h3>
              <button
                type="button"
                onClick={handleCopyPitch}
                className="px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium flex items-center gap-1.5 transition"
              >
                {copiedPitch ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Pitch
                  </>
                )}
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
              <div className="text-sky-400 font-semibold border-b border-slate-800 pb-2">
                Subject: {lead.personalizedPitch.subject}
              </div>
              <div className="whitespace-pre-wrap leading-relaxed text-slate-300">
                {lead.personalizedPitch.body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

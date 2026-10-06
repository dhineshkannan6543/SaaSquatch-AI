'use client';

import React from 'react';
import { Target, Zap, AlertTriangle, TrendingUp } from 'lucide-react';
import { TargetLead } from '../types';

interface MetricsOverviewProps {
  leads: TargetLead[];
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ leads }) => {
  const totalLeads = leads.length;
  const avgScore = totalLeads
    ? Math.round(leads.reduce((acc, l) => acc + l.aiScore.overallScore, 0) / totalLeads)
    : 0;
  const highPriorityCount = leads.filter(
    (l) => l.aiScore.overallScore >= 70 || l.acquisitionSignals.founderRisk === 'High'
  ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Stat 1 */}
      <div className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
          <Target className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-400">Target Leads Sourced</p>
          <h3 className="text-2xl font-bold text-white mt-0.5">{totalLeads}</h3>
          <p className="text-[11px] text-sky-400 mt-0.5">Lower-Middle Market SaaS</p>
        </div>
      </div>

      {/* Stat 2 */}
      <div className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
          <Zap className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-400">Avg AI Readiness Score</p>
          <h3 className="text-2xl font-bold text-amber-400 mt-0.5">{avgScore}/100</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">High AI Upside Fit</p>
        </div>
      </div>

      {/* Stat 3 */}
      <div className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-400">High-Priority Deals</p>
          <h3 className="text-2xl font-bold text-emerald-400 mt-0.5">{highPriorityCount}</h3>
          <p className="text-[11px] text-emerald-400/80 mt-0.5">Founder Transition Signals</p>
        </div>
      </div>

      {/* Stat 4 */}
      <div className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-400">Est. AI EBITDA Expansion</p>
          <h3 className="text-2xl font-bold text-purple-300 mt-0.5">+24.5%</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">Post-Acquisition MaaS Model</p>
        </div>
      </div>
    </div>
  );
};

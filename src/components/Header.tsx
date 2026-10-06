'use client';

import React from 'react';
import { Cpu, Zap, Download, Database, ExternalLink } from 'lucide-react';

interface HeaderProps {
  leadCount: number;
  avgAiScore: number;
  onExportCsv: () => void;
  onExportJson: () => void;
}

export const Header: React.FC<HeaderProps> = ({ leadCount, avgAiScore, onExportCsv, onExportJson }) => {
  return (
    <header className="sticky top-0 z-30 glass-panel border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25">
            <Cpu className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">SaaSquatch AI</h1>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Caprae Engine v2.0
              </span>
            </div>
            <p className="text-xs text-slate-400">
              AI-Powered Deal Intelligence & Pre-Screening Platform for Search Funds
            </p>
          </div>
        </div>

        {/* Right Actions & Live Metrics */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Database className="w-3.5 h-3.5 text-sky-400" />
              <span>
                Leads Active: <strong className="text-white">{leadCount}</strong>
              </span>
            </div>
            <div className="h-3 w-px bg-slate-800"></div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>
                Avg AI Score: <strong className="text-amber-400">{avgAiScore}</strong>/100
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExportCsv}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
            >
              <Download className="w-3.5 h-3.5" />
              CSV Export
            </button>
            <button
              onClick={onExportJson}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium shadow-md shadow-sky-600/20 transition"
            >
              <Download className="w-3.5 h-3.5" />
              JSON Dataset
            </button>
            <a
              href="https://www.saasquatchleads.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1 text-xs text-slate-400 hover:text-sky-400 ml-2 transition"
            >
              <span>Original Tool</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

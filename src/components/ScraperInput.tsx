'use client';

import React, { useState } from 'react';
import { Search, Globe, Sparkles, Layers, Loader2 } from 'lucide-react';
import { TargetLead } from '../types';

interface ScraperInputProps {
  onScrapeSuccess: (newLeads: TargetLead[]) => void;
}

export const ScraperInput: React.FC<ScraperInputProps> = ({ onScrapeSuccess }) => {
  const [urlInput, setUrlInput] = useState('');
  const [isBatchMode, setIsBatchMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusStep, setStatusStep] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const PRESETS = [
    'fieldtracklogistics.com',
    'medflowsystems.io',
    'supplychainhub.net',
    'apextalentsuite.com',
    'zenithops.io',
  ];

  const handleScrapeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsLoading(true);
    setErrorMsg(null);
    setStatusStep('Connecting to target domain and parsing DOM structure...');

    try {
      await new Promise((res) => setTimeout(res, 600));
      setStatusStep('Extracting HTML meta tags, headers & tech stack signatures...');
      
      await new Promise((res) => setTimeout(res, 800));
      setStatusStep('Calculating AI Readiness Score & Acquisition Signals...');

      await new Promise((res) => setTimeout(res, 600));
      setStatusStep('Generating Caprae Strategic Value Creation Plan & Cold Outreach Pitch...');

      const payload = isBatchMode
        ? { urls: urlInput.split('\n').filter((u) => u.trim()) }
        : { url: urlInput.trim() };

      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to analyze target website.');
      }

      onScrapeSuccess(data.leads);
      setUrlInput('');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Scraping error occurred.';
      setErrorMsg(message);
    } finally {
      setIsLoading(false);
      setStatusStep('');
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            Caprae AI Target Prescreener & Web Scraper
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Input target company URL to scrape meta stack, evaluate AI Readiness, and generate deal pitches.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/80 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setIsBatchMode(false)}
            className={`px-3 py-1 rounded-md transition ${
              !isBatchMode ? 'bg-sky-600 text-white font-medium' : 'text-slate-400 hover:text-white'
            }`}
          >
            Single URL
          </button>
          <button
            type="button"
            onClick={() => setIsBatchMode(true)}
            className={`px-3 py-1 rounded-md transition ${
              isBatchMode ? 'bg-sky-600 text-white font-medium' : 'text-slate-400 hover:text-white'
            }`}
          >
            Batch Analysis
          </button>
        </div>
      </div>

      <form onSubmit={handleScrapeSubmit} className="space-y-4">
        {!isBatchMode ? (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Globe className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="e.g. fieldtracklogistics.com or https://company.com"
              className="w-full pl-10 pr-32 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !urlInput.trim()}
              className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-semibold rounded-lg shadow-md shadow-sky-600/20 flex items-center gap-1.5 transition"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-3.5 h-3.5" />
                  Analyze Lead
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <textarea
              rows={3}
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Paste multiple domains (one per line):&#10;fieldtracklogistics.com&#10;medflowsystems.io&#10;supplychainhub.net"
              className="w-full p-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition font-mono text-xs"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !urlInput.trim()}
              className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-semibold rounded-xl shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 transition"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing Batch Scrape...
                </>
              ) : (
                <>
                  <Layers className="w-4 h-4" />
                  Run Batch AI Prescreening
                </>
              )}
            </button>
          </div>
        )}
      </form>

      {/* Preset Launcher Bar */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <span className="font-medium text-slate-500">Quick Test Targets:</span>
        {PRESETS.map((domain) => (
          <button
            key={domain}
            type="button"
            onClick={() => setUrlInput(domain)}
            className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition"
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Live Loading Progress Bar Overlay */}
      {isLoading && (
        <div className="mt-4 p-4 rounded-xl bg-sky-950/40 border border-sky-800/50 flex items-center gap-3">
          <Loader2 className="w-5 h-5 text-sky-400 animate-spin flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-sky-300">SaaSquatch AI Scraping Pipeline</p>
            <p className="text-xs text-slate-300 truncate mt-0.5">{statusStep}</p>
          </div>
        </div>
      )}

      {/* Error Banner */}
      {errorMsg && (
        <div className="mt-3 p-3 rounded-xl bg-rose-950/40 border border-rose-800/50 text-xs text-rose-300">
          {errorMsg}
        </div>
      )}
    </div>
  );
};

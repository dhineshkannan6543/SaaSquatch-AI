import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SaaSquatch AI | Caprae Capital Deal Sourcing & AI Intelligence Engine',
  description:
    'Next-generation AI-powered lead generation, tech stack scraping, and acquisition intelligence platform built for Caprae Capital & Search Funds.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070b14] text-slate-100 min-h-screen radial-glow antialiased">
        {children}
      </body>
    </html>
  );
}

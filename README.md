# SaaSquatch AI — Caprae Capital Lead Sourcing & AI Intelligence Engine

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-blue.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-sky.svg)](https://tailwindcss.com/)
[![SQLite / Prisma](https://img.shields.io/badge/Database-SQLite%2FPrisma-emerald.svg)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An enhanced **AI-Powered Lead Generation & Deal Intelligence Platform** engineered for **Caprae Capital** and **Search Funds**. Built as part of the **Caprae Capital AI-Readiness Pre-Screening Challenge**.

---

## 🚀 Live Demo & Setup

### Quick Start (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/dhineshkannan6543/SaaSquatch-AI.git
cd SaaSquatch-AI

# 2. Install dependencies
npm install

# 3. Launch development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

---

## 🎯 Executive Overview & Strategic Intent

### The Problem
Traditional deal sourcing tools (Apollo, ZoomInfo) output generic contact lists. Searchers and Private Equity (PE) associates waste 20+ hours per week manually visiting target websites to evaluate:
1. Is this lower-middle market company ($1M–$10M ARR) modernized enough to operate smoothly, but un-optimized enough that **AI can unlock 30%+ EBITDA margin expansion**?
2. Does the company show signals of **founder transition readiness** (e.g. legacy tech debt, solo founder, hiring slowdown, lack of AI tools)?
3. How can a searcher craft an outreach message that proves **immediate strategic value** post-acquisition?

### The Solution: SaaSquatch AI
**SaaSquatch AI** extends Caprae's flagship lead generation tool into an intelligent deal prescreener:
- **AI-Readiness Matrix (0–100 Score)**: Evaluates website modernization, tech stack age, automation potential, and customer support AI fit.
- **Acquisition Signals Engine**: Gauges founder transition risk and digital footprint indicators.
- **Caprae Post-Acquisition AI Roadmap**: Generates 3 actionable AI value-creation quick wins for every target.
- **Automated AI Outreach Pitch**: Crafts hyper-personalized cold outreach emails tailored for Search Funds & Caprae's 7-year M&A as a Service (MaaS) model.
- **Side-by-Side Target Lead Comparison**: Allows deal teams to benchmark target acquisitions concurrently.

---

## 🛠️ UX Design & Technical Architecture

### Architecture Diagram

```
+-------------------------------------------------------------------+
|                        Next.js 14 Dashboard                       |
|           (React 18, TypeScript, Tailwind CSS, Recharts)          |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                    Next.js Serverless API Gateway                 |
|       /api/scrape  |  /api/leads  |  /api/enrich  |  /api/export  |
+-------------------------------------------------------------------+
           |                      |                     |
           v                      v                     v
+------------------+     +------------------+    +------------------+
| Scraper Engine   |     | Database Layer   |    | Caching & Memory |
| (Cheerio DOM     | --> | (SQLite / Prisma | -->| (In-Memory LRU   |
|  & Meta Parser)  |     |  Structured Store|    |  Domain Hashes)  |
+------------------+     +------------------+    +------------------+
```

### Full Technical Specifications
- **UX/UI Design**: Premium dark-mode glassmorphism theme (`#070b14`), interactive score gauges, slide-over deep dive drawers, micro-animations via Framer Motion, responsive data grids.
- **Scraping Engine**: Fast Cheerio DOM parser extracting meta tags, OpenGraph signatures, CMS signatures (WordPress, Shopify, Webflow), framework markers (React, Next.js, jQuery), and analytics scripts.
- **Database & Storage Strategy**: SQLite database managed with Prisma ORM for structured local storage (`Lead`, `TechStack`, `AIScore`, `AcquisitionSignals`, `OutreachPitch`).
- **Caching & Optimizations**: In-memory domain hash deduplication to eliminate redundant fetch calls; 6-second timeout resilience with fallback heuristic evaluation.
- **Hosting & Deployment**: Vercel Serverless static/edge deployment configuration with GitHub Actions CI/CD workflow.

---

## 📓 Jupyter Notebook & API Walkthrough

- **Jupyter Notebook**: [`demo.ipynb`](file:///c:/Users/divya/OneDrive/Documents/PressForge%20AI/Caprea/demo.ipynb) contains a standalone Python implementation of the scraping DOM parser, AI scoring algorithm, and JSON exporter.
- **Sample Datasets**:
  - JSON format: [`leads_dataset.json`](file:///c:/Users/divya/OneDrive/Documents/PressForge%20AI/Caprea/leads_dataset.json)
  - CSV format: [`leads_dataset.csv`](file:///c:/Users/divya/OneDrive/Documents/PressForge%20AI/Caprea/leads_dataset.csv)
- **REST API Endpoints**:
  - `POST /api/scrape` — Accepts `{ url: "domain.com" }` or `{ urls: ["domain1.com", "domain2.com"] }`.
  - `GET /api/leads` — Returns all active target lead records.
  - `DELETE /api/leads?id=lead-001` — Deletes lead record.
  - `PATCH /api/leads` — Updates lead status (`New`, `Vetted`, `Outreach Sent`, `In Discussion`).
  - `GET /api/export?format=csv` — Downloads CSV export.

---

## 💼 Caprae Capital Business Understanding

### 1. What is Caprae’s Mission?
Caprae Capital’s mission is to transform small-to-medium business (SMB) acquisitions by shifting focus from traditional financial engineering to long-term, tech-enabled operational value creation. While standard PE firms rely heavily on leverage and cost-cutting at exit, Caprae views M&A as a seven-year post-acquisition value creation journey. Caprae equips acquired businesses with proprietary technology, AI-driven automation, and strategic growth infrastructure to turn good companies into market leaders.

Through its dual SaaS (Software as a Service) and MaaS (M&A as a Service) ecosystem, Caprae builds proprietary tools—such as SaaSquatch—that empower searchers and portfolio operators to source high-intent acquisition targets and implement high-margin AI workflows post-acquisition. Caprae’s mission is to democratize institutional-grade software and AI capabilities for lower-middle-market companies, driving sustainable revenue growth and lasting enterprise value.

### 2. Why do you want to work at Caprae Capital?
I am drawn to Caprae Capital because of your high-agency, tech-first culture embodied by the **#BleedandBuild** mindset. Traditional finance often treats software as an afterthought or rents generic off-the-shelf tools. Caprae stands out by actively building proprietary tools (like SaaSquatch) to solve real operational bottlenecks in deal sourcing and post-acquisition scaling. That builder-operator DNA matches my passion for engineering practical, high-impact AI solutions.

Working at Caprae presents a unique opportunity to sit at the intersection of Private Equity, Entrepreneurship Through Acquisition (ETA), and cutting-edge Artificial Intelligence. I want to build software that directly moves the needle on deal velocity, lead quality, and portfolio company transformation. I thrive in fast-paced environments where ownership, speed of execution, and continuous learning are valued above bureaucracy.

### 3. How is Caprae Changing the ETA Space and Broader PE?
Caprae is disrupting the ETA space and broader Private Equity by replacing manual, fragmented deal sourcing with algorithmic, data-driven deal intelligence. Historically, searchers spent 70%+ of their time manually cold-calling or scraping shallow databases like Apollo and LinkedIn. Caprae’s SaaSquatch tool democratized deep lead generation, enabling searchers to pinpoint founder-led target companies with unprecedented speed and precision.

Beyond deal sourcing, Caprae is redefining post-acquisition value creation. While traditional PE relies on financial leverage and aggressive headcount reduction to expand EBITDA, Caprae introduces modern AI workflows, automated customer acquisition, and SaaS integration directly into acquired SMBs. By treating M&A as a multi-year software-augmented value creation journey (MaaS), Caprae lowers operational risks for first-time CEOs and sets a new benchmark for how technology drives PE returns.

---

## 📋 Candidate Status & Operational Confirmations

| Question | Response |
| :--- | :--- |
| **Current US Working Status** | Authorized / Open for remote work engagement based on agreed arrangement. |
| **40+ Hours/Week Commitment** | Confirmed — 100% willing and able to work minimum 40+ hours/week. |
| **Why Caprae Capital (Short Summary)** | To build proprietary software that drives real deal sourcing velocity and AI post-acquisition value creation under a #BleedandBuild culture. |
| **Expected Salary** | Open to competitive market alignment ($80k - $120k / negotiable based on role level & structure). |
| **3-Month Probationary Period** | Fully confirmed and agreed. |
| **Initial Training Hours (9 AM - 6 PM EST)** | Fully confirmed and agreed. |
| **Off-Hours Availability (< 2 hrs/wk)** | Fully confirmed, no issue whatsoever. |

---

## 🎬 Video Walkthrough Script (1-2 Minutes)

- **[0:00 - 0:20] Introduction & Problem**:
  *"Hello Caprae team! Today I'm excited to present **SaaSquatch AI**, an enhanced deal intelligence and lead generation platform designed for Caprae Capital and search funds. While standard tools output raw contact lists, SaaSquatch AI evaluates lower-middle market targets specifically through Caprae's post-acquisition AI value creation thesis."*
- **[0:20 - 0:55] UI & Live Demo**:
  *"Here on our interactive dashboard, searchers can enter a target website URL or paste a batch list. Our scraper parses the DOM, extracts tech stack signatures, and calculates an **AI Readiness Score** out of 100 alongside founder transition signals. Clicking 'Deep Dive' opens a slide-over showing the company's tech stack breakdown, a 3-step Caprae AI value creation roadmap, and a 1-click tailored cold outreach email."*
- **[0:55 - 1:20] Architecture & Technical Depth**:
  *"Architecturally, SaaSquatch AI is built on Next.js 14, React 18, TypeScript, and Tailwind CSS. The backend features a serverless API gateway coupled with a Cheerio DOM parser, SQLite/Prisma storage, and in-memory domain caching for sub-second performance. It also includes side-by-side deal comparison and instant CSV/JSON exports."*
- **[1:20 - 1:40] Conclusion & Business Alignment**:
  *"By combining technical rigor with Caprae's MaaS model, SaaSquatch AI turns deal sourcing into actionable value creation. Thank you, and I look forward to joining the Caprae team under #BleedandBuild!"*

"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import MetricCard from "@/components/ui/MetricCard";
import { researchData } from "@/lib/data";

export default function ResearchContent() {
  const { executiveSummary, technicalDive } = researchData;

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {/* Protocol header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest">
            Analysis Protocol {researchData.protocolId}
          </span>
          <span className="text-[10px] text-text-muted">
            • Synthesized {researchData.synthesizedAgo}
          </span>
        </div>

        <div className="flex items-start justify-between">
          <h1 className="text-2xl font-bold text-text-primary leading-tight max-w-2xl whitespace-pre-line">
            {researchData.title}
          </h1>
          <div className="flex items-center gap-2 flex-shrink-0 ml-4">
            <Button variant="outline" size="sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              Re-run Agent
            </Button>
            <Button variant="primary" size="sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Export Report
            </Button>
          </div>
        </div>

        {/* Confidence */}
        <div className="flex items-center gap-4 mt-3 text-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-green" />
            <span className="text-text-secondary">
              Confidence Score: <strong className="text-text-primary">{researchData.confidenceScore}%</strong>
            </span>
          </span>
          <span className="flex items-center gap-1.5 text-text-secondary">
            <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            {researchData.documentCitations} Document Citations
          </span>
        </div>
      </div>

      {/* Executive Summary Section */}
      <section className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[10px] font-mono uppercase tracking-widest text-accent-cyan">
            Executive Summary
          </h2>
          <span className="text-[10px] font-mono text-text-muted">{executiveSummary.stepId}</span>
        </div>

        <h3 className="text-xl font-bold text-text-primary">{executiveSummary.heading}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{executiveSummary.body}</p>

        {/* Metric cards */}
        <div className="grid grid-cols-2 gap-3">
          {executiveSummary.metrics.map((m) => (
            <MetricCard
              key={m.label}
              label={m.label}
              value={m.value}
              description={m.description}
            />
          ))}
        </div>
      </section>

      {/* Technical Deep-Dive */}
      <section className="glass-card p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 text-[10px] font-mono text-text-muted bg-bg-tertiary rounded">
              {technicalDive.stepId}
            </span>
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-accent-cyan">
              Technical Deep-Dive
            </h2>
          </div>
          <span className="text-[10px] font-mono text-text-muted flex items-center gap-1.5">
            <svg className="w-3 h-3 text-accent-cyan animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            {technicalDive.processingTag}
          </span>
        </div>
        <h3 className="text-xl font-bold text-text-primary">{technicalDive.title}</h3>
        <div className="mt-4 h-20 bg-bg-tertiary rounded-lg flex items-center justify-center text-text-muted text-sm">
          Algorithm comparison chart loading...
        </div>
      </section>
    </div>
  );
}

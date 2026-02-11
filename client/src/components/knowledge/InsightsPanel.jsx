"use client";

import { graphInsights } from "@/lib/data";

export default function InsightsPanel() {
  return (
    <div className="w-72 flex-shrink-0 border-l border-border-subtle bg-bg-secondary p-4 overflow-y-auto animate-slide-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
          <h3 className="text-sm font-bold text-accent-cyan uppercase tracking-wider">
            AI Insights
          </h3>
        </div>
        <button className="p-1 rounded text-text-muted hover:text-text-primary transition-colors cursor-pointer">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Suggested Connections */}
      <div className="mb-6">
        <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">
          Suggested Connections
        </h4>
        <div className="space-y-3">
          {graphInsights.connections.map((conn, i) => (
            <div key={i} className="flex items-start gap-3 group">
              <span className="mt-0.5 w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-text-primary">{conn.title}</p>
                <p className="text-[11px] text-text-muted mt-0.5">{conn.description}</p>
              </div>
              <button className="p-1 rounded text-text-muted hover:text-accent-cyan transition-colors opacity-0 group-hover:opacity-100 cursor-pointer">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* References */}
      <div className="mb-6">
        <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">
          References
        </h4>
        <div className="space-y-3">
          {graphInsights.references.map((ref, i) => (
            <div key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 w-2 h-2 rounded-sm flex-shrink-0"
                style={{ backgroundColor: ref.color }}
              />
              <div>
                <p className="text-sm font-medium text-text-primary">{ref.title}</p>
                <p className="text-[11px] text-text-muted mt-0.5">{ref.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search More */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-tertiary text-text-muted text-sm cursor-pointer hover:text-text-secondary transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        Find more sources
      </div>
    </div>
  );
}

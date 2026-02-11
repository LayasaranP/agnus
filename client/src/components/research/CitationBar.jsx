"use client";

import Card from "@/components/ui/Card";
import { researchCitations } from "@/lib/data";

export default function CitationBar() {
  return (
    <section className="px-6 pb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
            Source Citations
          </span>
          <span className="text-[10px] text-text-muted">(214 references)</span>
        </div>
        <span className="text-[10px] font-mono text-accent-cyan cursor-pointer hover:underline">
          EXPAND VIEW
        </span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {researchCitations.map((cite) => (
          <Card key={cite.id} hover className="flex-shrink-0 w-72">
            <h4 className="text-xs font-semibold text-text-primary line-clamp-1">
              {cite.title}
            </h4>
            <p className="text-[10px] text-text-muted mt-1 line-clamp-1">{cite.subtitle}</p>
            <div className="flex items-center justify-between mt-2">
              <span
                className="text-[10px] font-semibold"
                style={{ color: cite.matchColor }}
              >
                {cite.match}
              </span>
              <span className="text-[10px] text-text-muted font-mono">
                {cite.format} • {cite.size}
              </span>
            </div>
          </Card>
        ))}
        {/* Navigation arrows */}
        <div className="flex-shrink-0 flex items-center gap-1 pl-2">
          <button className="w-7 h-7 rounded bg-bg-tertiary flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="w-7 h-7 rounded bg-bg-tertiary flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

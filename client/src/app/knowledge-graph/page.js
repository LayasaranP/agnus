"use client";

import Navbar from "@/components/layout/Navbar";
import GraphCanvas from "@/components/knowledge/GraphCanvas";
import GraphToolbar from "@/components/knowledge/GraphToolbar";
import InsightsPanel from "@/components/knowledge/InsightsPanel";

export default function KnowledgeGraphPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <Navbar />
      
      <div className="flex-1 flex flex-col w-full h-full overflow-hidden">
        {/* Toolbar */}
        <GraphToolbar />

        {/* Canvas + Insights */}
        <div className="flex-1 flex overflow-hidden relative">
          <GraphCanvas />
          <InsightsPanel />
        </div>

        {/* Bottom status */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border-subtle bg-bg-secondary z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-green" />
            <span className="text-[10px] font-mono text-text-muted">SYSTEM ONLINE | V.2.4.8</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-1 text-text-muted hover:text-text-primary transition-colors cursor-pointer text-xs font-mono">
              −
            </button>
            <span className="text-[10px] text-text-muted">100%</span>
            <button className="p-1 text-text-muted hover:text-text-primary transition-colors cursor-pointer text-xs font-mono">
              +
            </button>
            <button className="p-1 text-text-muted hover:text-text-primary transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

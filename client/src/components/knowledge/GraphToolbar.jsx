"use client";

import Button from "@/components/ui/Button";

export default function GraphToolbar() {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-primary">
      <StatusPill />
      <Button variant="primary" size="sm">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Auto-generate
      </Button>
      <Button variant="ghost" size="sm">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6z" />
        </svg>
        Simplify
      </Button>
      <Button variant="ghost" size="sm">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Export
      </Button>
    </div>
  );
}

function StatusPill() {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20 mr-2">
      <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
      <span className="text-xs font-medium text-accent-green">Agent Active</span>
    </div>
  );
}

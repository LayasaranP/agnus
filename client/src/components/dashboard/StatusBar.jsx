"use client";

export default function StatusBar() {
  return (
    <div className="fixed bottom-0 left-60 right-0 z-30 h-8 flex items-center justify-between px-4 bg-bg-secondary/90 backdrop-blur-sm border-t border-border-subtle">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
        <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
          AI Researcher: Indexing Documents...
        </span>
      </div>
      <button className="text-text-muted hover:text-text-secondary cursor-pointer">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

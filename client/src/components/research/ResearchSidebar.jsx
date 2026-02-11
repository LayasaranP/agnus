"use client";

import { researchNavItems, researchData } from "@/lib/data";

export default function ResearchSidebar() {
  return (
    <aside className="w-56 flex-shrink-0 border-r border-border-subtle bg-bg-secondary flex flex-col">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-teal flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-bg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <div>
            <span className="text-sm font-bold text-text-primary">DEEP RESEARCH</span>
            <span className="ml-1.5 px-1.5 py-0.5 text-[8px] font-mono text-accent-cyan bg-accent-cyan/10 rounded">
              V2.4
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 py-3">
        <p className="px-2 mb-2 text-[10px] uppercase tracking-widest text-text-muted font-semibold">
          Navigation
        </p>
        <div className="space-y-1">
          {researchNavItems.map((item) => (
            <button
              key={item.id}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                item.active
                  ? "bg-accent-cyan/10 text-accent-cyan"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
              }`}
            >
              <NavIcon name={item.icon} active={item.active} />
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Agent Status */}
      <div className="px-3 mt-auto pb-4">
        <p className="px-2 mb-2 text-[10px] uppercase tracking-widest text-text-muted font-semibold">
          Agent Status
        </p>
        <div className="px-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-sm text-text-primary font-medium">
              {researchData.agentStatus}
            </span>
          </div>
          <p className="text-[10px] text-text-muted pl-4">
            Crawling: {researchData.crawling.join(", ")}
          </p>
        </div>
      </div>
    </aside>
  );
}

function NavIcon({ name, active }) {
  const cls = `w-4 h-4 ${active ? "text-accent-cyan" : "text-text-muted"}`;
  switch (name) {
    case "zap":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "database":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      );
    case "users":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    default:
      return null;
  }
}

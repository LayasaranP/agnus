"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { recentSources } from "@/lib/data";

export default function RecentSources() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-text-primary">Recent Sources</h2>
        <a href="/library" className="text-xs text-accent-cyan hover:underline">
          View all sources
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {recentSources.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
        <AddSourceCard />
      </div>
    </section>
  );
}

function SourceCard({ source }) {
  return (
    <Card hover className="flex flex-col gap-3 min-h-[160px]">
      {/* Thumbnail placeholder */}
      <div className="w-full h-20 rounded-lg bg-bg-tertiary flex items-center justify-center overflow-hidden">
        <Badge
          variant={
            source.type === "PDF" ? "red" : source.type === "WIKI" ? "green" : "red"
          }
        >
          {source.type}
        </Badge>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h4 className="text-xs font-semibold text-text-primary line-clamp-1">
          {source.title}
        </h4>
        <div className="flex items-center gap-2 mt-1 text-[10px] text-text-muted">
          <span>Accessed {source.accessedAgo}</span>
          {source.saves && (
            <>
              <span>•</span>
              <span className="flex items-center gap-0.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                {source.saves}
              </span>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}

function AddSourceCard() {
  return (
    <Card
      hover
      className="flex flex-col items-center justify-center min-h-[160px] border-dashed border-border-primary"
    >
      <div className="w-10 h-10 rounded-full bg-bg-tertiary flex items-center justify-center mb-2">
        <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
      <span className="text-xs text-text-muted text-center">Drop or Link New Source</span>
    </Card>
  );
}

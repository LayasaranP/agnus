"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function SourceListItem({ source }) {
  const trustVariant =
    source.trustBadge === "High Trust"
      ? "amber"
      : source.trustBadge === "Verified"
      ? "green"
      : "amber";

  return (
    <Card hover className="flex flex-col gap-3">
      {/* Header row: icon + title + trust badge */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-bg-tertiary flex items-center justify-center text-lg">
          {source.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-text-primary line-clamp-1">
              {source.title}
            </h4>
            <Badge variant={trustVariant} className="flex-shrink-0">
              {source.trustBadge}
            </Badge>
          </div>
          <p className="text-[11px] text-text-muted mt-0.5">
            {source.source}
            {source.year && ` • ${source.year}`}
            {source.format && ` • ${source.format}`}
            {source.duration && ` • ${source.duration}`}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {source.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] text-text-secondary bg-bg-tertiary rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer: grounded / status */}
      <div className="flex items-center justify-between">
        <div className="text-[10px] text-text-muted">
          {source.grounded ? (
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
              {source.grounded}
            </span>
          ) : source.status === "Unused" ? (
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted" />
              {source.status}
            </span>
          ) : (
            <span className="text-accent-amber">{source.status}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <button className="p-1 rounded text-text-muted hover:text-text-secondary transition-colors cursor-pointer">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <button className="p-1 rounded text-text-muted hover:text-text-secondary transition-colors cursor-pointer">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
}

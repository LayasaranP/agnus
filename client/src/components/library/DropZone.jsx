"use client";

import Badge from "@/components/ui/Badge";

const formats = ["PDF", "Web", "YouTube", "Markdown", "EPUB"];

export default function DropZone() {
  return (
    <div className="glass-card border-2 border-dashed border-border-primary hover:border-accent-cyan/40 transition-colors rounded-xl p-10 flex flex-col items-center justify-center text-center">
      {/* Upload icon */}
      <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
      </div>

      <h3 className="text-base font-semibold text-text-primary mb-1">
        Drop sources here to ground agent
      </h3>
      <p className="text-sm text-text-muted mb-4">
        Or paste URLs directly. We&apos;ll extract, tag, and rate quality instantly.
      </p>

      {/* Format badges */}
      <div className="flex items-center gap-2">
        {formats.map((fmt) => (
          <span
            key={fmt}
            className="px-3 py-1 text-xs text-text-secondary bg-bg-tertiary rounded-md hover:text-text-primary cursor-pointer transition-colors"
          >
            {fmt}
          </span>
        ))}
      </div>
    </div>
  );
}

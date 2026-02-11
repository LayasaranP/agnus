"use client";

import Button from "@/components/ui/Button";

const buttons = [
  { label: "Again", variant: "danger" },
  { label: "Hard", variant: "outline" },
  { label: "Good", variant: "outline" },
  { label: "Easy", variant: "outline" },
];

export default function DifficultyButtons() {
  return (
    <div className="flex items-center gap-3">
      {/* AI Explain button */}
      <Button variant="primary" size="md" className="gap-1.5">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
        <span className="text-[10px] uppercase tracking-wider font-semibold">RK</span> Explain
      </Button>

      {/* Divider */}
      <div className="w-px h-8 bg-border-subtle" />

      {/* Difficulty ratings */}
      {buttons.map((btn) => (
        <Button key={btn.label} variant={btn.variant} size="md">
          {btn.label}
        </Button>
      ))}
    </div>
  );
}

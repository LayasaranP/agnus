"use client";

import ProgressRing from "@/components/ui/ProgressRing";
import { deckData } from "@/lib/data";

export default function SessionStats() {
  const { session, mastery } = deckData;

  return (
    <div className="space-y-6">
      {/* Current Session */}
      <div>
        <h3 className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">
          Current Session
        </h3>
        <div className="flex items-end gap-3">
          <span className="text-4xl font-bold text-text-primary">{session.minutes}</span>
          <span className="text-2xl text-text-secondary">min</span>
          <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent-green/10 text-accent-green">
            {session.change}
          </span>
        </div>
        {/* Progress bar */}
        <div className="mt-3 w-full h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-cyan to-accent-teal rounded-full transition-all duration-500"
            style={{ width: `${(session.minutes / 60) * 100}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-1 text-[10px] text-text-muted">
          <span>{session.focusLabel}</span>
          <span>{session.goal}</span>
        </div>
      </div>

      {/* Domain Mastery */}
      <div>
        <h3 className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">
          Domain Mastery
        </h3>
        <div className="flex items-center gap-4">
          {mastery.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-2">
              <ProgressRing value={m.value} size={60} strokeWidth={4} />
              <span className="text-[10px] text-text-secondary text-center">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

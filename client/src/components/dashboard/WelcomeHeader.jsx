"use client";

import Badge from "@/components/ui/Badge";
import ProgressRing from "@/components/ui/ProgressRing";
import { useUser } from "@/context/UserContext";

export default function WelcomeHeader() {
  const { user } = useUser();

  return (
    <div className="flex items-end justify-between py-2">
      <div>
        <h1 className="text-4xl font-extrabold text-text-primary tracking-tight">
          Welcome back, <span className="text-accent-cyan glow-text">{user.name}</span>
        </h1>
        <div className="flex items-center gap-3 mt-4">
          <StatPill icon="🔥" label={`${user.streak}-day streak`} active />
          <StatPill icon="✨" label={`${user.sourcesAnalyzed} sources analyzed`} />
          <StatPill icon="🧠" label={`${user.pendingInsights} pending insights`} />
        </div>
      </div>

      {/* Research Progress Pill */}
      <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-bg-secondary border border-border-subtle shadow-sm">
        <div className="flex flex-col items-end">
          <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">
            Research Progress
          </span>
          <span className="text-2xl font-bold text-text-primary font-mono">
            {user.researchProgress}%
          </span>
        </div>
        <ProgressRing value={user.researchProgress} size={48} strokeWidth={4} />
      </div>
    </div>
  );
}

function StatPill({ icon, label, active }) {
  return (
    <span
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
        active
          ? "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20"
          : "bg-bg-tertiary text-text-secondary border-transparent hover:border-border-subtle"
      }`}
    >
      <span>{icon}</span>
      {label}
    </span>
  );
}

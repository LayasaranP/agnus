"use client";

const variants = {
  cyan: "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30",
  green: "bg-accent-green/20 text-accent-green border-accent-green/30",
  amber: "bg-accent-amber/20 text-accent-amber border-accent-amber/30",
  red: "bg-accent-red/20 text-accent-red border-accent-red/30",
  purple: "bg-accent-purple/20 text-accent-purple border-accent-purple/30",
  muted: "bg-bg-tertiary text-text-secondary border-border-subtle",
};

export default function Badge({ children, variant = "muted", className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${variants[variant] || variants.muted} ${className}`}
    >
      {children}
    </span>
  );
}

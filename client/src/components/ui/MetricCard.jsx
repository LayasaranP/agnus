"use client";

export default function MetricCard({ label, value, description, className = "" }) {
  return (
    <div className={`glass-card p-4 rounded-lg ${className}`}>
      <span className="text-[10px] font-semibold tracking-widest text-accent-cyan uppercase">
        {label}
      </span>
      <p className="mt-1 text-2xl font-mono font-bold text-text-primary">{value}</p>
      <p className="mt-1 text-xs text-text-muted">{description}</p>
    </div>
  );
}

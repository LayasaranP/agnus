"use client";

export default function ProgressRing({
  value = 0,
  size = 80,
  strokeWidth = 6,
  className = "",
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-bg-tertiary)"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-accent-cyan)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700 ease-out"
          style={{ filter: "drop-shadow(0 0 6px rgba(0, 212, 255, 0.5))" }}
        />
      </svg>
      <span className="absolute text-sm font-bold text-text-primary">
        {value}%
      </span>
    </div>
  );
}

"use client";

export default function Avatar({ name = "", badge, size = "md", className = "" }) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={`relative inline-flex ${className}`}>
      <div
        className={`${sizes[size]} rounded-full bg-gradient-to-br from-accent-cyan to-accent-teal flex items-center justify-center font-bold text-bg-primary`}
      >
        {initials}
      </div>
      {badge && (
        <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 text-[8px] font-bold rounded-full bg-accent-cyan text-bg-primary border-2 border-bg-primary">
          {badge}
        </span>
      )}
    </div>
  );
}

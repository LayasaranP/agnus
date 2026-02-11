"use client";

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer text-sm";

const variants = {
  primary:
    "bg-accent-cyan text-bg-primary hover:bg-accent-cyan/90 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-tertiary",
  outline:
    "bg-transparent text-accent-cyan border border-accent-cyan/40 hover:bg-accent-cyan/10",
  danger:
    "bg-accent-red/10 text-accent-red border border-accent-red/30 hover:bg-accent-red/20",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

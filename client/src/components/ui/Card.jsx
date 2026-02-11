"use client";

export default function Card({
  children,
  hover = false,
  className = "",
  ...props
}) {
  return (
    <div
      className={`glass-card ${hover ? "glass-card-hover cursor-pointer" : ""} p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

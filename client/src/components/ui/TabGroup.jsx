"use client";

import { useState } from "react";

export default function TabGroup({ tabs, defaultTab, onChange, className = "" }) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  const handleClick = (id) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleClick(tab.id)}
          className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 cursor-pointer ${
            active === tab.id
              ? "bg-bg-tertiary text-text-primary border border-border-primary"
              : "text-text-muted hover:text-text-secondary hover:bg-bg-tertiary/50"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

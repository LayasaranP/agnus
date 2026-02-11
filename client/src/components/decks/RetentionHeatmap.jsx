"use client";

import { deckData } from "@/lib/data";

export default function RetentionHeatmap() {
  const { retentionHeatmap } = deckData;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">
          Retention Heatmap
        </h3>
        <span className="text-[10px] text-text-muted">Last 30 days</span>
      </div>
      <div className="flex flex-col gap-1">
        {retentionHeatmap.map((row, ri) => (
          <div key={ri} className="flex gap-1">
            {row.map((val, ci) => (
              <div
                key={ci}
                className="w-6 h-6 rounded-sm transition-colors"
                style={{
                  backgroundColor: getHeatmapColor(val),
                }}
                title={`Intensity: ${val}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function getHeatmapColor(val) {
  const colors = {
    0: "var(--color-bg-tertiary)",
    1: "rgba(0, 212, 255, 0.15)",
    2: "rgba(0, 212, 255, 0.3)",
    3: "rgba(0, 212, 255, 0.5)",
    4: "rgba(0, 212, 255, 0.7)",
  };
  return colors[val] || colors[0];
}

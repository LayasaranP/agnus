"use client";

import { graphNodes, graphEdges } from "@/lib/data";

export default function GraphCanvas() {
  return (
    <div className="relative w-full h-full min-h-[500px] bg-bg-primary overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border-primary) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Connection lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {graphEdges.map((edge) => {
          const from = graphNodes.find((n) => n.id === edge.from);
          const to = graphNodes.find((n) => n.id === edge.to);
          if (!from || !to) return null;
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="var(--color-accent-cyan)"
              strokeWidth={1.5}
              opacity={0.4}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {graphNodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          {node.type === "core" ? (
            <CoreNode label={node.label} />
          ) : node.type === "node" ? (
            <BranchNode label={node.label} subtitle={node.subtitle} nodeId={node.nodeId} />
          ) : (
            <LeafNode label={node.label} />
          )}
        </div>
      ))}
    </div>
  );
}

function CoreNode({ label }) {
  return (
    <div className="relative">
      {/* Glow rings */}
      <div className="absolute inset-0 -m-3 rounded-full bg-accent-cyan/10 animate-pulse" />
      <div className="relative glass-card px-6 py-4 rounded-xl border-accent-cyan/40 text-center group-hover:border-accent-cyan transition-colors">
        <span className="text-[8px] uppercase tracking-widest text-accent-cyan font-semibold">
          Core Topic
        </span>
        <p className="text-base font-bold text-text-primary mt-1">{label}</p>
        {/* Add node button */}
        <button className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent-cyan flex items-center justify-center text-bg-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function BranchNode({ label, subtitle, nodeId }) {
  return (
    <div className="glass-card px-4 py-3 rounded-lg group-hover:border-accent-cyan/40 transition-colors min-w-[140px]">
      <span className="text-[8px] font-mono text-text-muted">{nodeId}</span>
      <p className="text-sm font-semibold text-text-primary">{label}</p>
      {subtitle && (
        <p className="text-[10px] text-text-muted mt-0.5">{subtitle}</p>
      )}
    </div>
  );
}

function LeafNode({ label }) {
  return (
    <div className="px-4 py-2.5 rounded-lg bg-bg-tertiary/60 border border-border-subtle text-sm text-text-secondary group-hover:text-text-primary group-hover:border-border-primary transition-colors">
      {label}
    </div>
  );
}

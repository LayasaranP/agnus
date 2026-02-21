"use client";

import React, { useState } from "react";

const templates = [
  { id: "timeline", name: "Timeline", icon: "⏱️" },
  { id: "comparison", name: "Comparison", icon: "⚖️" },
  { id: "process", name: "Process Flow", icon: "🔄" },
  { id: "stats", name: "Statistics", icon: "📊" },
];

export default function InfographicBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState("timeline");

  return (
    <div className="flex h-[calc(100vh-140px)] gap-6">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 flex flex-col gap-4">
        <div className="p-4 glass-card rounded-xl border border-border-primary">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Templates</h3>
          <div className="space-y-2">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedTemplate === template.id
                    ? "bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                }`}
              >
                <span className="text-lg">{template.icon}</span>
                {template.name}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 glass-card rounded-xl border border-border-primary flex-1">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Elements</h3>
          <div className="grid grid-cols-2 gap-2">
            {/* Placeholder for draggable elements */}
            <div className="aspect-square bg-bg-elevated rounded-lg flex items-center justify-center text-text-muted hover:bg-bg-card cursor-pointer border border-transparent hover:border-text-muted transition-colors">
              <span className="text-xs">Text</span>
            </div>
            <div className="aspect-square bg-bg-elevated rounded-lg flex items-center justify-center text-text-muted hover:bg-bg-card cursor-pointer border border-transparent hover:border-text-muted transition-colors">
              <span className="text-xs">Image</span>
            </div>
            <div className="aspect-square bg-bg-elevated rounded-lg flex items-center justify-center text-text-muted hover:bg-bg-card cursor-pointer border border-transparent hover:border-text-muted transition-colors">
              <span className="text-xs">Shape</span>
            </div>
            <div className="aspect-square bg-bg-elevated rounded-lg flex items-center justify-center text-text-muted hover:bg-bg-card cursor-pointer border border-transparent hover:border-text-muted transition-colors">
              <span className="text-xs">Icon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 glass-card rounded-xl border border-border-primary p-8 relative overflow-hidden flex flex-col">
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-bg-elevated text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors border border-border-subtle">
            Export
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-accent-purple text-xs font-medium text-white hover:bg-accent-purple/90 transition-colors shadow-lg shadow-accent-purple/20">
            Publish
          </button>
        </div>

        <div className="w-full h-full bg-bg-primary/50 rounded-lg border border-dashed border-border-subtle flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bg-elevated flex items-center justify-center text-3xl">
              {templates.find(t => t.id === selectedTemplate)?.icon}
            </div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              {templates.find(t => t.id === selectedTemplate)?.name} Template
            </h2>
            <p className="text-text-secondary text-sm max-w-md mx-auto">
              Drag and drop elements from the sidebar to customize your infographic layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

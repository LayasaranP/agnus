"use client";

import AppShell from "@/components/layout/AppShell";
import InfographicBuilder from "@/components/workspaces/infographic/InfographicBuilder";

export default function InfographicPage() {
  return (
    <AppShell>
      <div className="p-8 h-full flex flex-col animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-text-primary tracking-tight">Infographic Builder</h1>
          <p className="text-text-secondary mt-1">
            Visualize your research data with professional templates.
          </p>
        </div>
        <InfographicBuilder />
      </div>
    </AppShell>
  );
}

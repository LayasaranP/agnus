"use client";

import AppShell from "@/components/layout/AppShell";
import JobSearcher from "@/components/workspaces/job-searcher/JobSearcher";

export default function JobSearcherPage() {
  return (
    <AppShell>
      <div className="p-8 h-full flex flex-col animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-text-primary tracking-tight">Job Searcher</h1>
          <p className="text-text-secondary mt-1">
            Discover opportunities tailored to your skills and preferences.
          </p>
        </div>
        <JobSearcher />
      </div>
    </AppShell>
  );
}

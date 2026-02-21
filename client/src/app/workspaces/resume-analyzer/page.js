"use client";

import AppShell from "@/components/layout/AppShell";
import ResumeAnalyzer from "@/components/workspaces/resume-analyzer/ResumeAnalyzer";

export default function ResumeAnalyzerPage() {
  return (
    <AppShell>
      <div className="p-8 h-full flex flex-col animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-text-primary tracking-tight">Resume Analyzer</h1>
          <p className="text-text-secondary mt-1">
            Compare your resume against job descriptions to increase your chances of hiring.
          </p>
        </div>
        <ResumeAnalyzer />
      </div>
    </AppShell>
  );
}

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import InsightCarousel from "@/components/dashboard/InsightCarousel";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentSources from "@/components/dashboard/RecentSources";
import StatusBar from "@/components/dashboard/StatusBar";

// Sources Components
import LibraryHeader from "@/components/library/LibraryHeader";
import DropZone from "@/components/library/DropZone";
import SourceListItem from "@/components/library/SourceListItem";
import TabGroup from "@/components/ui/TabGroup"; // Kept for Sources sub-tabs if needed
import { libraryFilters, librarySources } from "@/lib/data";

// Research Components
import ResearchSidebar from "@/components/research/ResearchSidebar";
import ResearchContent from "@/components/research/ResearchContent";
import CitationBar from "@/components/research/CitationBar";
import ResearchChatBar from "@/components/research/ResearchChatBar";

// Workspaces Tools
import GraphToolbar from "@/components/knowledge/GraphToolbar";
import GraphCanvas from "@/components/knowledge/GraphCanvas";
import InsightsPanel from "@/components/knowledge/InsightsPanel";

import FlashcardDisplay from "@/components/decks/FlashcardDisplay";
import SessionStats from "@/components/decks/SessionStats";
import RetentionHeatmap from "@/components/decks/RetentionHeatmap";
import DifficultyButtons from "@/components/decks/DifficultyButtons";
import KnowledgeGap from "@/components/decks/KnowledgeGap";
import Button from "@/components/ui/Button";

// Assessment
import AssessmentPage from "@/app/assessment/page"; 

import InfographicBuilder from "@/components/workspaces/infographic/InfographicBuilder";
import ResumeAnalyzer from "@/components/workspaces/resume-analyzer/ResumeAnalyzer";
import JobSearcher from "@/components/workspaces/job-searcher/JobSearcher";

export default function DashboardPage() {
  return (
    <AppShell>
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <DashboardContent />
      </Suspense>
    </AppShell>
  );
}

function DashboardContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "dashboard";
  const activeWorkspaceTool = searchParams.get("tool") || "knowledge-graph";

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="p-6 pb-14 space-y-6 animate-fade-in">
            <WelcomeHeader />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <InsightCarousel />
              </div>
              <div>
                <QuickActions />
              </div>
            </div>
            <RecentSources />
            <StatusBar />
          </div>
        );

      case "sources":
        return (
          <div className="p-6 space-y-6 animate-fade-in">
            <LibraryHeader />
            <DropZone />
            <div className="flex items-center justify-between">
              <TabGroup tabs={libraryFilters} defaultTab="all" />
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-bg-tertiary text-text-muted hover:text-text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {librarySources.map((source) => (
                <SourceListItem key={source.id} source={source} />
              ))}
            </div>
          </div>
        );

      case "research":
        return (
          <div className="flex-1 flex overflow-hidden h-[calc(100vh-64px)]">
             <ResearchSidebar />
             <div className="flex-1 flex flex-col min-w-0">
               <ResearchContent />
               <CitationBar />
               <ResearchChatBar />
             </div>
          </div>
        );

      case "workspaces":
        return (
          <div className="flex flex-col h-[calc(100vh-64px)] animate-fade-in relative">
            {/* Tool Content - No Header, controlled by Top Navbar */}
            <div className="flex-1 overflow-auto p-0">
              {activeWorkspaceTool === "knowledge-graph" && (
                <div className="flex flex-col h-full overflow-hidden">
                  <GraphToolbar />
                  <div className="flex-1 flex overflow-hidden relative">
                    <GraphCanvas />
                    <InsightsPanel />
                  </div>
                </div>
              )}

              {activeWorkspaceTool === "decks" && (
                <div className="flex flex-1 h-full">
                  <div className="flex-1 flex flex-col p-6">
                    <FlashcardDisplay />
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-subtle">
                      <DifficultyButtons />
                      <Button variant="outline" size="sm">End Session</Button>
                    </div>
                  </div>
                  <aside className="w-72 flex-shrink-0 border-l border-border-subtle bg-bg-secondary p-5 space-y-6 overflow-y-auto">
                    <SessionStats />
                    <RetentionHeatmap />
                    <KnowledgeGap />
                  </aside>
                </div>
              )}

              {activeWorkspaceTool === "assessment" && (
                 <div className="absolute inset-0 z-10 bg-bg-primary">
                    <AssessmentPage />
                 </div>
              )}

              {activeWorkspaceTool === "infographic" && (
                <div className="p-6 h-full">
                  <InfographicBuilder />
                </div>
              )}

              {activeWorkspaceTool === "resume" && (
                <div className="p-6 h-full flex flex-col">
                  <ResumeAnalyzer />
                </div>
              )}

              {activeWorkspaceTool === "job-searcher" && (
                <div className="p-6 h-full flex flex-col">
                  <JobSearcher />
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full max-h-screen overflow-hidden">
        {/* No local TabGroup here */}
        <div className="flex-1 overflow-hidden flex flex-col relative">
          {renderContent()}
        </div>
    </div>
  );
}

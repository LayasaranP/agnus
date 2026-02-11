"use client";

import Navbar from "@/components/layout/Navbar";
import ResearchSidebar from "@/components/research/ResearchSidebar";
import ResearchContent from "@/components/research/ResearchContent";
import CitationBar from "@/components/research/CitationBar";
import ResearchChatBar from "@/components/research/ResearchChatBar";

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <ResearchSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <ResearchContent />
          <CitationBar />
          <ResearchChatBar />
        </div>
      </div>
    </div>
  );
}

"use client";

import AppShell from "@/components/layout/AppShell";
import LibraryHeader from "@/components/library/LibraryHeader";
import DropZone from "@/components/library/DropZone";
import SourceListItem from "@/components/library/SourceListItem";
import TabGroup from "@/components/ui/TabGroup";
import { libraryFilters, librarySources } from "@/lib/data";

export default function LibraryPage() {
  return (
    <AppShell>
      <div className="p-6 space-y-6 animate-fade-in">
        <LibraryHeader />
        <DropZone />

        {/* Filters + view toggle */}
        <div className="flex items-center justify-between">
          <TabGroup tabs={libraryFilters} defaultTab="all" />
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-bg-tertiary text-text-muted hover:text-text-primary transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </button>
            <button className="p-2 rounded-lg text-text-muted hover:text-text-primary transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Source grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {librarySources.map((source) => (
            <SourceListItem key={source.id} source={source} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}

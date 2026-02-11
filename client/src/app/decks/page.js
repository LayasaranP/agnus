"use client";

import AppShell from "@/components/layout/AppShell";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FlashcardDisplay from "@/components/decks/FlashcardDisplay";
import SessionStats from "@/components/decks/SessionStats";
import RetentionHeatmap from "@/components/decks/RetentionHeatmap";
import DifficultyButtons from "@/components/decks/DifficultyButtons";
import KnowledgeGap from "@/components/decks/KnowledgeGap";
import { deckData } from "@/lib/data";

export default function DecksPage() {
  return (
    <AppShell
      breadcrumb={
        <>
          <span className="text-text-muted">{deckData.breadcrumb.join(" / ")}</span>
        </>
      }
    >
      <div className="flex flex-1 animate-fade-in">
        {/* Left: Flashcard area */}
        <div className="flex-1 flex flex-col">
          {/* Title bar */}
          <div className="px-6 py-4 flex items-center justify-between border-b border-border-subtle">
            <div>
              <h1 className="text-xl font-bold text-text-primary">{deckData.title}</h1>
            </div>
            {deckData.agentActive && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-xs font-medium text-accent-green uppercase tracking-wider">
                  Agent Active
                </span>
              </div>
            )}
          </div>

          {/* Card display */}
          <FlashcardDisplay />

          {/* Bottom bar: difficulty buttons */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-border-subtle">
            <DifficultyButtons />
            <Button variant="outline" size="sm">
              End Session
            </Button>
          </div>
        </div>

        {/* Right: Stats sidebar */}
        <aside className="w-72 flex-shrink-0 border-l border-border-subtle bg-bg-secondary p-5 space-y-6 overflow-y-auto">
          <SessionStats />
          <RetentionHeatmap />
          <KnowledgeGap />
        </aside>
      </div>
    </AppShell>
  );
}

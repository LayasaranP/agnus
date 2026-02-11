"use client";

import Badge from "@/components/ui/Badge";
import { deckData } from "@/lib/data";

export default function FlashcardDisplay() {
  const { currentCard } = deckData;

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="glass-card w-full max-w-3xl p-10 rounded-2xl relative">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-6">
          {currentCard.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs text-text-secondary bg-bg-tertiary rounded-lg"
            >
              {tag}
            </span>
          ))}
          {/* Bookmark */}
          <button className="ml-auto p-1 rounded text-text-muted hover:text-accent-cyan transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </button>
        </div>

        {/* Category */}
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-semibold">
          {currentCard.category}
        </span>

        {/* Question */}
        <h2 className="text-2xl font-bold text-text-primary mt-3 leading-relaxed">
          {highlightTerms(currentCard.question, currentCard.highlightTerms)}
        </h2>

        {/* Subtext */}
        <p className="text-sm text-text-muted mt-4 leading-relaxed">
          {currentCard.subtext}
        </p>
      </div>
    </div>
  );
}

function highlightTerms(text, terms) {
  if (!terms?.length) return text;
  const parts = text.split(new RegExp(`(${terms.join("|")})`, "gi"));
  return parts.map((part, i) =>
    terms.some((t) => t.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-accent-cyan glow-text">{part}</span>
    ) : (
      part
    )
  );
}

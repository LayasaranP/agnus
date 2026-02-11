"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { aiInsights } from "@/lib/data";

export default function InsightCarousel() {
  const [current, setCurrent] = useState(0);
  const insight = aiInsights[current];

  return (
    <Card className="relative overflow-hidden">
      {/* Settings icon */}
      <button className="absolute top-4 right-4 p-2 rounded-full bg-bg-tertiary text-text-muted hover:text-accent-cyan transition-colors cursor-pointer">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* Tags */}
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="cyan">{insight.type}</Badge>
        {insight.tags.map((tag) => (
          <Badge key={tag} variant="muted">{tag}</Badge>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-text-primary mb-2">{insight.title}</h2>

      {/* Description with highlighted terms */}
      <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
        {highlightText(insight.description, insight.highlightTerms)}
      </p>

      {/* CTA row */}
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline" size="sm">
          {insight.cta} →
        </Button>
        <Button variant="ghost" size="sm">
          Dismiss
        </Button>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center gap-2 mt-4">
        {aiInsights.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              i === current ? "bg-accent-cyan w-4" : "bg-text-muted/40"
            }`}
          />
        ))}
        <span className="ml-2 text-[10px] text-text-muted">
          Synthesized from {insight.sourcesCount} recent papers
        </span>
      </div>
    </Card>
  );
}

function highlightText(text, terms) {
  if (!terms?.length) return text;
  const parts = text.split(new RegExp(`(${terms.join("|")})`, "gi"));
  return parts.map((part, i) =>
    terms.some((t) => t.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="text-text-primary font-semibold">{part}</strong>
    ) : (
      part
    )
  );
}

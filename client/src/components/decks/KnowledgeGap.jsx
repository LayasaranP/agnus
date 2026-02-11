"use client";

import Card from "@/components/ui/Card";
import { deckData } from "@/lib/data";

export default function KnowledgeGap() {
  const { knowledgeGap } = deckData;

  return (
    <Card className="mt-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-text-primary flex items-center gap-2">
            Knowledge Gap
          </h4>
          <p className="text-xs text-text-muted mt-1">
            You&apos;re struggling with <strong className="text-text-secondary">{knowledgeGap.topic}</strong>. {knowledgeGap.recommendation}
          </p>
          <button className="mt-2 text-xs font-semibold text-accent-cyan hover:underline cursor-pointer">
            {knowledgeGap.cta}
          </button>
        </div>
      </div>
    </Card>
  );
}

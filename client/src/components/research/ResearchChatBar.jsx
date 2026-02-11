"use client";

import { useState } from "react";

export default function ResearchChatBar() {
  const [message, setMessage] = useState("");

  return (
    <div className="sticky bottom-0 px-6 py-3 bg-bg-primary/80 backdrop-blur-md border-t border-border-subtle">
      <div className="flex items-center gap-3 max-w-3xl mx-auto">
        {/* Attachment button */}
        <button className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
          </svg>
        </button>

        {/* Agent selector dropdown */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-tertiary rounded-lg text-sm text-text-secondary cursor-pointer hover:bg-bg-elevated transition-colors">
          <svg className="w-3.5 h-3.5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          Research Agent V2
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        {/* Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a follow-up or refine research..."
          className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
        />

        {/* Send button */}
        <button className="w-9 h-9 rounded-full bg-accent-cyan flex items-center justify-center hover:bg-accent-cyan/90 transition-colors hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] cursor-pointer">
          <svg className="w-4 h-4 text-bg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

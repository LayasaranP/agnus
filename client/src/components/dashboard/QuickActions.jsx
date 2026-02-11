"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import { quickActions } from "@/lib/data";

export default function QuickActions() {
  return (
    <div className="flex flex-col gap-3">
      {quickActions.map((action) => (
        <Link key={action.id} href={action.href}>
          <Card hover className="flex items-start gap-4 transition-all duration-200">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
              {action.icon === "research" ? (
                <svg className="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
              )}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">{action.title}</h3>
              <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{action.description}</p>
            </div>
            {/* Arrow */}
            <svg className="ml-auto w-4 h-4 text-text-muted mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Card>
        </Link>
      ))}
    </div>
  );
}

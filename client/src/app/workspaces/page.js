"use client";

import React from "react";
import AppShell from "@/components/layout/AppShell";
import Link from "next/link";

const tools = [
  {
    id: "infographic",
    title: "Infographic Builder",
    description: "Create stunning infographics from your research data with customizable templates.",
    icon: (
      <svg className="w-8 h-8 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
    href: "/workspaces/infographic",
    color: "group-hover:border-accent-purple/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]",
  },
  {
    id: "resume",
    title: "Resume Analyzer",
    description: "Optimize your resume for specific job descriptions using AI-powered analysis.",
    icon: (
      <svg className="w-8 h-8 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    href: "/workspaces/resume-analyzer",
    color: "group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]",
  },
  {
    id: "jobs",
    title: "Job Searcher",
    description: "Find relevant opportunities aggregated from multiple platforms tailored to your profile.",
    icon: (
      <svg className="w-8 h-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    href: "/workspaces/job-searcher",
    color: "group-hover:border-accent-green/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]",
  },
];

export default function WorkspacesPage() {
  return (
    <AppShell>
      <div className="p-8 space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-text-primary tracking-tight">Workspaces</h1>
          <p className="text-text-secondary mt-2 text-lg">
            Specialized tools to enhance your productivity and research workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className={`group relative flex flex-col p-6 glass-card rounded-xl border border-border-primary transition-all duration-300 hover:scale-[1.02] ${tool.color}`}
            >
              <div className="mb-4 p-3 bg-bg-elevated rounded-lg w-fit group-hover:bg-bg-card transition-colors">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                {tool.title}
              </h3>
              <p className="text-text-secondary leading-relaxed flex-grow">
                {tool.description}
              </p>
              
              <div className="mt-4 flex items-center text-sm font-medium text-text-muted group-hover:text-accent-cyan transition-colors">
                <span>Open Tool</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

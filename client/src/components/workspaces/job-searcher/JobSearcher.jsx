"use client";

import React, { useState } from "react";

const jobData = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "TechFlow AI",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$160k - $210k",
    tags: ["React", "TypeScript", "AI"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Creative Solutions",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    salary: "$130k - $170k",
    tags: ["Figma", "UI/UX", "System Design"],
    posted: "1 day ago",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "StartUp Inc.",
    location: "Remote",
    type: "Contract",
    salary: "$80 - $120 / hr",
    tags: ["Node.js", "Next.js", "PostgreSQL"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Machine Learning Engineer",
    company: "DataMinds",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$180k - $250k",
    tags: ["Python", "PyTorch", "NLP"],
    posted: "Just now",
  },
];

export default function JobSearcher() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredJobs = jobData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Search & Filters */}
      <div className="glass-card p-4 rounded-xl border border-border-primary flex flex-wrap gap-4 items-center">
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by role, company, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-bg-elevated/50 border border-border-subtle rounded-lg py-2.5 pl-10 pr-4 text-text-primary focus:outline-none focus:border-accent-cyan placeholder:text-text-muted transition-colors"
          />
        </div>
        
        <div className="flex gap-2">
          {["All", "Full-time", "Contract", "Part-time"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedType === type
                  ? "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                  : "bg-bg-elevated/50 text-text-secondary border border-border-subtle hover:text-text-primary hover:bg-bg-elevated"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Job List */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="glass-card p-6 rounded-xl border border-border-primary hover:border-accent-cyan/30 transition-all group">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-text-secondary text-sm font-medium">{job.company}</p>
                </div>
                <div className="text-right">
                  <span className="block text-text-primary font-semibold">{job.salary}</span>
                  <span className="text-xs text-text-muted">{job.posted}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {job.type}
                </span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-bg-elevated text-xs font-medium text-text-secondary border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="px-4 py-2 rounded-lg bg-text-primary text-bg-primary font-semibold text-sm hover:opacity-90 transition-opacity">
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-text-muted">
            <svg className="w-12 h-12 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

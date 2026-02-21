"use client";

import React, { useState } from "react";

export default function ResumeAnalyzer() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setResults({
        score: 85,
        keywords: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        missing: ["GraphQL", "AWS"],
        suggestions: [
          "Quantify your achievements in the 'Experience' section.",
          "Add a 'Skills' section to highlight technical proficiencies.",
        ],
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col h-full gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-280px)]">
        {/* Resume Input */}
        <div className="glass-card p-6 rounded-xl border border-border-primary flex flex-col">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-xl">📄</span> Resume
          </h2>
          <textarea
            className="flex-1 w-full bg-bg-elevated/50 border border-border-subtle rounded-lg p-4 text-text-primary focus:outline-none focus:border-accent-cyan resize-none placeholder:text-text-muted"
            placeholder="Paste your resume text here..."
          ></textarea>
           <button className="mt-4 w-full py-2 rounded-lg border border-dashed border-border-primary text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors text-sm">
            Upload PDF/DOCX
          </button>
        </div>

        {/* Job Description Input */}
        <div className="glass-card p-6 rounded-xl border border-border-primary flex flex-col">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-xl">💼</span> Job Description
          </h2>
          <textarea
            className="flex-1 w-full bg-bg-elevated/50 border border-border-subtle rounded-lg p-4 text-text-primary focus:outline-none focus:border-accent-cyan resize-none placeholder:text-text-muted"
            placeholder="Paste the job description here..."
          ></textarea>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleAnalyze}
          disabled={analyzing}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-teal text-white font-semibold text-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {analyzing ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </>
          ) : (
            "Analyze Match"
          )}
        </button>
      </div>

      {/* Results Section */}
      {results && (
        <div className="glass-card p-6 rounded-xl border border-border-primary animate-slide-in-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-primary">Analysis Results</h2>
            <div className="flex items-center gap-4">
              <span className="text-text-secondary">Match Score:</span>
              <div className="px-4 py-1 rounded-full bg-accent-green/10 text-accent-green font-bold text-xl border border-accent-green/20">
                {results.score}%
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-bg-elevated/50 rounded-lg border border-border-subtle">
              <h3 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">Keywords Found</h3>
              <div className="flex flex-wrap gap-2">
                {results.keywords.map((k, i) => (
                  <span key={i} className="px-2 py-1 rounded-md bg-accent-cyan/10 text-accent-cyan text-xs font-medium border border-accent-cyan/20">
                    {k}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-bg-elevated/50 rounded-lg border border-border-subtle">
              <h3 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">Missing Keywords</h3>
               <div className="flex flex-wrap gap-2">
                {results.missing.map((k, i) => (
                  <span key={i} className="px-2 py-1 rounded-md bg-accent-red/10 text-accent-red text-xs font-medium border border-accent-red/20">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-bg-elevated/50 rounded-lg border border-border-subtle">
              <h3 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">Suggestions</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-text-muted">
                {results.suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const assessmentData = [
  {
    id: 1,
    question: "Explain the primary difference between Transformer architecture and Recurrent Neural Networks (RNNs) in the context of parallelization.",
    topic: "Deep Learning Architecture",
    options: [
      { id: "a", text: "Transformers allow parallel processing of the entire sequence, whereas RNNs process sequentially." },
      { id: "b", text: "RNNs utilize self-attention for faster parallelization than Transformers." },
      { id: "c", text: "Transformers rely on recurrent layers for time-step processing." },
      { id: "d", text: "There is no significant difference in parallelization capabilities." },
    ],
    correctAnswer: "a",
    explanation: "Transformers utilize the mechanism of self-attention to weigh the significance of different parts of the input data simultaneously. This architecture eliminates the sequential dependency found in RNNs, enabling massive parallelization during training.",
    sources: [
      { title: "Attention Is All You Need", author: "Vaswani et al., 2017", type: "paper" },
      { title: "Sequence Modeling: RNNs vs Transformers", author: "Stanford CS224N", type: "course" }
    ]
  },
  // Add more dummy questions if needed
];

export default function AssessmentPage() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [confidence, setConfidence] = useState(50);
  const [timer, setTimer] = useState(860); // 14:20 in seconds

  const question = assessmentData[currentQuestionIdx];
  const isCorrect = selectedOption === question.correctAnswer;

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleOptionSelect = (id) => {
    if (showFeedback) return;
    setSelectedOption(id);
    // Auto-show feedback for demo purposes, or wait for submit?
    // Screenshot shows selected option AND feedback card.
    setShowFeedback(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setConfidence(50);
    if (currentQuestionIdx < assessmentData.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      // End of assessment
      alert("Assessment Complete!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-text-primary flex flex-col font-sans selection:bg-accent-cyan/20">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-black/50 backdrop-blur-sm fixed top-0 w-full z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-teal flex items-center justify-center shadow-lg shadow-accent-cyan/20">
            <svg className="w-4 h-4 text-bg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /> 
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-white">Agentic Study</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            Exit Assessment
          </Link>
          <div className="px-3 py-1.5 rounded-md bg-[#0A0E14] border border-accent-cyan/30 text-accent-cyan font-mono text-sm font-bold shadow-[0_0_15px_rgba(0,212,255,0.15)]">
            {formatTime(timer)}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-8 py-24 relative">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-end justify-between text-sm font-bold text-text-muted mb-3 uppercase tracking-wider">
            <span>Question {currentQuestionIdx + 1} of 20</span>
            <span className="text-accent-cyan">20%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-accent-cyan w-[20%] shadow-[0_0_12px_rgba(0,212,255,0.6)]" />
          </div>
        </div>

        {/* Question */}
        <div className="mb-12 animate-fade-in relative z-10 w-full max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.15] mb-6 text-white tracking-tight">
            {question.question}
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-text-muted font-medium hover:bg-white/10 transition-colors cursor-default">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            {question.topic}
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4 relative z-0 w-full max-w-3xl">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              disabled={showFeedback}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 group relative overflow-hidden ${
                selectedOption === option.id
                  ? "border-accent-cyan bg-accent-cyan/10 shadow-[0_0_30px_rgba(0,212,255,0.15)]"
                  : "border-white/5 bg-[#0A0E14] hover:bg-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-start gap-5 relative z-10">
                <div
                  className={`w-6 h-6 rounded-full border-2 mt-0.5 flex items-center justify-center transition-colors flex-shrink-0 ${
                    selectedOption === option.id
                      ? "border-accent-cyan"
                      : "border-white/20 group-hover:border-white/40"
                  }`}
                >
                  {selectedOption === option.id && (
                    <div className="w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                  )}
                </div>
                <span
                  className={`text-lg font-medium leading-relaxed ${
                    selectedOption === option.id ? "text-white" : "text-text-secondary group-hover:text-white"
                  }`}
                >
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Confidence Slider */}
        <div className="mt-16 pt-8 border-t border-white/5 max-w-2xl">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
              Confidence Level
            </span>
          </div>
          <div className="relative h-2 bg-white/10 rounded-full">
             <div 
               className="absolute top-0 left-0 h-full bg-accent-cyan rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" 
               style={{ width: `${confidence}%` }}
             />
             <input
                type="range"
                min="0"
                max="100"
                value={confidence}
                onChange={(e) => setConfidence(e.target.value)}
                disabled={showFeedback}
                className="absolute top-[-8px] left-0 w-full h-6 opacity-0 cursor-pointer z-10"
             />
             <div 
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg pointer-events-none transition-all"
                style={{ left: `calc(${confidence}% - 8px)` }}
             />
          </div>
          <div className="flex justify-between text-[10px] text-text-muted mt-3 font-mono uppercase tracking-widest">
             <span>GUESS</span>
             <span>CERTAIN</span>
          </div>
        </div>

        {/* Feedback Card (Desktop Floating or Inline Mobile) */}
        {showFeedback && (
          <div className="xl:fixed xl:bottom-12 xl:right-12 z-50 mt-8 xl:mt-0 animate-slide-in-up">
             <AppraisalCard isCorrect={isCorrect} explanation={question.explanation} sources={question.sources} onNext={handleNext} />
          </div>
        )}
      </main>
    </div>
  );
}

function AppraisalCard({ isCorrect, explanation, sources, onNext }) {
  return (
    <div className="w-full xl:w-[420px] bg-black border border-[#10b981] rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.1)] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-[#10b981]/20 bg-[#10b981]/5">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#10b981] text-black">
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-[#10b981]">
            Correct
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black border border-white/10 text-[10px] text-white/60 font-medium">
           <span className="text-[#10b981]">✦</span> AI Analysis
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h4 className="text-lg font-bold text-white mb-2">
           Excellent choice.
        </h4>
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {explanation}
        </p>

        <div className="mb-6">
          <h5 className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-3">Grounding Sources</h5>
          <div className="space-y-2">
            {sources.map((source, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#0A0E14] border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-text-muted group-hover:text-white transition-colors shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-accent-cyan truncate group-hover:underline mb-0.5">
                    {source.title}
                  </div>
                  <div className="text-[10px] text-text-muted truncate">
                    {source.author}
                  </div>
                </div>
                <svg className="w-3 h-3 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <button 
           onClick={onNext}
           className="w-full py-3 rounded-lg bg-accent-cyan text-black font-bold text-sm hover:bg-accent-cyan/90 transition-colors flex items-center justify-center gap-2"
        >
          Next Question
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

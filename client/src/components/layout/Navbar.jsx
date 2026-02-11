"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Avatar from "@/components/ui/Avatar";
import SettingsModal from "@/components/settings/SettingsModal";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { user } = useUser();

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-6 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle">
        {/* Left: Logo + Navigation */}
        <div className="flex items-cente gap-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-teal flex items-center justify-center">
              <svg className="w-4 h-4 text-bg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-text-primary tracking-tight">
              Agnus
            </span>
          </Link>
        </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/" label="Dashboard" active={pathname === "/"} />
            <NavLink href="/library" label="Sources" active={pathname === "/library"} />
            <NavLink href="/research" label="Deep Research" active={pathname.startsWith("/research")} />
            <WorkspacesDropdown active={pathname.startsWith("/knowledge-graph") || pathname.startsWith("/decks") || pathname.startsWith("/assessment")} />
          </nav>
        

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent-cyan" />
          </button>

          {/* User */}
          <div className="flex items-center gap-3 pl-2 border-l border-border-subtle">
            <button onClick={() => setIsSettingsOpen(true)} className="focus:outline-none">
              <Avatar name={user.name} badge={user.plan} size="md" />
            </button>
          </div>
        </div>
      </header>
      
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}

function NavLink({ href, label, active }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        active
          ? "text-text-primary bg-bg-tertiary"
          : "text-text-muted hover:text-text-primary hover:bg-bg-tertiary/50"
      }`}
    >
      {label}
    </Link>
  );
}

function WorkspacesDropdown({ active }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
          active || isOpen
            ? "text-text-primary bg-bg-tertiary"
            : "text-text-muted hover:text-text-primary hover:bg-bg-tertiary/50"
        }`}
      >
        Workspaces
        <svg className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 p-1 rounded-xl glass-card shadow-xl border-border-primary flex flex-col animate-fade-in origin-top-left">
          <DropdownItem
            href="/knowledge-graph"
            icon={GraphIcon}
            label="Knowledge Graph"
            desc="Visualize neural maps"
          />
          <DropdownItem
            href="/decks"
            icon={DecksIcon}
            label="Flashcards"
            desc="Review & retention"
          />
          <DropdownItem
            href="/assessment"
            icon={AssessmentIcon}
            label="Skill Assessment"
            desc="Test your knowledge"
          />
        </div>
      )}
    </div>
  );
}

function DropdownItem({ href, icon: Icon, label, desc }) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-bg-tertiary transition-colors group"
    >
      <div className="w-8 h-8 rounded-lg bg-bg-tertiary group-hover:bg-bg-elevated flex items-center justify-center text-accent-cyan transition-colors">
        <Icon />
      </div>
      <div>
        <div className="text-sm font-medium text-text-primary">{label}</div>
        <div className="text-[10px] text-text-muted">{desc}</div>
      </div>
    </Link>
  );
}

function GraphIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

function DecksIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  );
}

function AssessmentIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}

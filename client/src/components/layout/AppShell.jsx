"use client";

import Navbar from "./Navbar";

export default function AppShell({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <Navbar />
      <main className="flex-1 overflow-y-auto w-full max-w-[1920px] mx-auto">
        {children}
      </main>
    </div>
  );
}

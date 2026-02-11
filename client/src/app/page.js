"use client";

import AppShell from "@/components/layout/AppShell";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import InsightCarousel from "@/components/dashboard/InsightCarousel";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentSources from "@/components/dashboard/RecentSources";
import StatusBar from "@/components/dashboard/StatusBar";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="p-6 pb-14 space-y-6 animate-fade-in">
        <WelcomeHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <InsightCarousel />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>

        <RecentSources />
      </div>
      <StatusBar />
    </AppShell>
  );
}

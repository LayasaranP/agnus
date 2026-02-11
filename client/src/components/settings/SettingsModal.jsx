"use client";

import { useState, useEffect } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useUser } from "@/context/UserContext";

export default function SettingsModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("general");
  const { user, updateProfile, updateTheme } = useUser();
  
  // Local state for edits
  const [name, setName] = useState(user.name);
  const [description, setDescription] = useState(user.workspaceName || "Advanced neuroscience study materials, deep learning papers, and agentic research flows for the upcoming Q1 publication.");
  const [themeInput, setThemeInput] = useState(user.themeAccent || "cyan");

  // Reset local state when modal opens or user changes
  useEffect(() => {
    if (isOpen) {
      setName(user.name);
      setDescription(user.workspaceName || "Advanced neuroscience study materials, deep learning papers, and agentic research flows for the upcoming Q1 publication.");
      setThemeInput(user.themeAccent || "cyan");
    }
  }, [isOpen, user]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSave = () => {
    updateProfile({ name, workspaceName: description });
    updateTheme(themeInput);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-4xl h-[600px] bg-bg-secondary rounded-2xl border border-border-primary shadow-2xl flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-bg-tertiary border-r border-border-subtle p-6 flex flex-col">
          <h2 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-6">Settings</h2>
          <nav className="space-y-1 flex-1">
            <SettingsTab
              id="general"
              icon="grid-view"
              label="General"
              active={activeTab === "general"}
              onClick={() => setActiveTab("general")}
            />
            <SettingsTab
              id="ai"
              icon="sparkles"
              label="AI Processing"
              active={activeTab === "ai"}
              onClick={() => setActiveTab("ai")}
            />
            <SettingsTab
              id="integrations"
              icon="link"
              label="Integrations"
              active={activeTab === "integrations"}
              onClick={() => setActiveTab("integrations")}
            />
            <SettingsTab
              id="tags"
              icon="tag"
              label="Tags & Metadata"
              active={activeTab === "tags"}
              onClick={() => setActiveTab("tags")}
            />
            <SettingsTab
              id="storage"
              icon="database"
              label="Storage"
              active={activeTab === "storage"}
              onClick={() => setActiveTab("storage")}
            />
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-text-muted hover:text-text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {activeTab === "general" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-xl font-bold text-text-primary">General Settings</h1>
                <p className="text-sm text-text-muted mt-1">Manage your workspace identity and interface preferences.</p>
              </div>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <h3 className="font-semibold text-text-primary">Workspace Profile</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Workspace Name / Username</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-bg-tertiary border border-border-subtle rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Description</label>
                    <textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                      className="w-full bg-bg-tertiary border border-border-subtle rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                    />
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                  <h3 className="font-semibold text-text-primary">Appearance</h3>
                </div>
                
                <div className="bg-bg-tertiary border border-border-subtle rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-text-primary">Theme Accent</div>
                    <div className="text-xs text-text-muted mt-1">Primary highlight color for buttons and active states.</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ThemeButton color="cyan" active={themeInput === "cyan"} onClick={() => setThemeInput("cyan")} />
                    <ThemeButton color="purple" active={themeInput === "purple"} onClick={() => setThemeInput("purple")} />
                    <ThemeButton color="green" active={themeInput === "green"} onClick={() => setThemeInput("green")} />
                    <ThemeButton color="amber" active={themeInput === "amber"} onClick={() => setThemeInput("amber")} />
                  </div>
                </div>
              </section>
              
              <div className="flex justify-end pt-4">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" onClick={onClose}>Cancel</Button>
                  <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "storage" && <StorageSettings />}
          {/* Placeholders for other tabs */}
          {(activeTab !== "general" && activeTab !== "storage") && (
            <div className="flex flex-col items-center justify-center h-full text-text-muted">
              <svg className="w-12 h-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <p>This settings panel is coming soon.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}


function SettingsTab({ id, icon, label, active, onClick }) {
  const icons = {
    "grid-view": <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />,
    "sparkles": <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
    "link": <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />,
    "tag": <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3a6 6 0 013 0 6 6 0 013 0 .75.75 0 00.126.31 6 6 0 011.66 3.908.75.75 0 00.417.654 6 6 0 012.698 4.773.75.75 0 00.323.593 6 6 0 010 4.312.75.75 0 00-.323.593 6 6 0 01-2.698 4.773.75.75 0 00-.417.654 6 6 0 01-1.66 3.908.75.75 0 00-.126.31 6 6 0 01-6 0 .75.75 0 00-.126-.31 6 6 0 01-1.66-3.908.75.75 0 00-.417-.654 6 6 0 01-2.698-4.773.75.75 0 00-.323-.593 6 6 0 012.698-4.773.75.75 0 00.417-.654 6 6 0 011.66-3.908.75.75 0 00.126-.31z" />, 
    "database": <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />,
  };

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-accent-cyan/10 text-accent-cyan"
          : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
      }`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        {icons[icon]}
      </svg>
      {label}
    </button>
  );
}

function ThemeButton({ color, active, onClick }) {
  const bgClasses = {
    cyan: "bg-accent-cyan",
    purple: "bg-accent-purple",
    green: "bg-accent-green",
    amber: "bg-accent-amber",
  };

  return (
    <button
      onClick={onClick}
      className={`w-6 h-6 rounded-full ${bgClasses[color]} transition-transform ${
        active ? "ring-2 ring-white scale-110" : "opacity-50 hover:opacity-100 hover:scale-110"
      }`}
    />
  );
}

function StorageSettings() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-text-primary">Storage Management</h1>
        <p className="text-sm text-text-muted mt-1">Monitor your library usage and manage data retention.</p>
      </div>

      <div className="bg-bg-tertiary border border-border-subtle rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-text-primary">Storage Usage</h3>
          <span className="text-sm text-text-muted">4.2 GB of 10 GB used</span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-2 w-full bg-bg-elevated rounded-full overflow-hidden flex mb-3">
          <div className="h-full bg-accent-cyan w-[30%]" />
          <div className="h-full bg-accent-purple w-[10%]" />
          <div className="h-full bg-accent-green w-[2%]" />
        </div>
        
        <div className="flex items-center gap-6 text-xs text-text-muted mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            Documents (3.0 GB)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-purple" />
            Vector Indices (1.0 GB)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-green" />
            Images (0.2 GB)
          </div>
        </div>

        <div className="bg-gradient-to-r from-bg-elevated to-bg-tertiary border border-border-primary rounded-lg p-3 flex items-center justify-between">
          <span className="flex items-center gap-2 text-accent-cyan font-medium text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            Upgrade to Pro for 100GB storage
          </span>
          <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Detailed Breakdown</h3>
        <div className="space-y-3">
          <StorageItem 
            icon="document" 
            label="PDF Documents" 
            sublabel="142 files" 
            size="2.8 GB" 
          />
          <StorageItem 
            icon="database" 
            label="Agent Memory & Indices" 
            sublabel="Auto-generated" 
            size="1.0 GB" 
          />
        </div>
      </div>
    </div>
  );
}

function StorageItem({ icon, label, sublabel, size }) {
  const icons = {
    document: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />,
    database: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  };

  return (
    <div className="flex items-center justify-between p-4 bg-bg-tertiary/50 hover:bg-bg-tertiary border border-transparent hover:border-border-subtle rounded-xl transition-all">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-bg-elevated flex items-center justify-center text-text-muted">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {icons[icon]}
          </svg>
        </div>
        <div>
          <div className="font-medium text-text-primary text-sm">{label}</div>
          <div className="text-xs text-text-muted">{sublabel}</div>
        </div>
      </div>
      <div className="font-mono text-sm text-text-primary">{size}</div>
    </div>
  );
}

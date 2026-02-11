"use client";

import { createContext, useContext, useState } from "react";
import { userProfile as defaultUserProfile } from "@/lib/data";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    ...defaultUserProfile,
    themeAccent: "cyan",
  });

  const updateProfile = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  const updateTheme = (color) => {
    setUser((prev) => ({ ...prev, themeAccent: color }));
    document.documentElement.style.setProperty("--color-accent-cyan", getAccentColor(color));
  };

  return (
    <UserContext.Provider value={{ user, updateProfile, updateTheme }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

// Helper to map theme names to hex colors (simplified)
function getAccentColor(name) {
  const colors = {
    cyan: "#00d4ff",
    purple: "#8b5cf6", // violet-500
    green: "#10b981",  // emerald-500
    amber: "#f59e0b",  // amber-500
  };
  return colors[name] || colors.cyan;
}

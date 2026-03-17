"use client";

import * as React from "react";
import { Moon } from "lucide-react";

// Single dark theme only — no toggle needed, just a visual indicator
export function ThemeToggle() {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-foreground/50" aria-label="Dark theme">
      <Moon size={14} />
    </div>
  );
}

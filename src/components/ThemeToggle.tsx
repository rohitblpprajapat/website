"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const themes = [
  { name: "light", color: "#ffffff", border: "#e5e7eb" },
  { name: "dark", color: "#0a0a0a", border: "#374151" },
  { name: "stone", color: "#d4d4d8", border: "#a1a1aa" },
  { name: "sand", color: "#fdf6e3", border: "#e2e8f0" },
  { name: "midnight", color: "#0f172a", border: "#334155" }
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-32 h-8" />; // Placeholder to avoid hydration mismatch
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 p-1.5 rounded-full border border-black/10 dark:border-white/10 backdrop-blur-md">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className="relative w-6 h-6 rounded-full overflow-hidden transition-transform hover:scale-110 flex items-center justify-center"
          style={{ backgroundColor: t.color, borderColor: t.border, borderWidth: '1px' }}
          aria-label={`Switch to ${t.name} theme`}
        >
          {currentTheme === t.name && (
            <motion.div
              layoutId="activeTheme"
              className="absolute inset-0 ring-2 ring-gold ring-inset rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

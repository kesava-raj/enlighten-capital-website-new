"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggleFAB() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 right-8 z-[100] p-4 rounded-full bg-white dark:bg-[#111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-slate-200 dark:border-slate-800 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center text-[#C9A14A] group"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3, ease: "backOut" }}
        >
          {theme === "dark" ? (
            <Sun size={24} fill="currentColor" />
          ) : (
            <Moon size={24} fill="currentColor" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

"use client";

import { useSyncExternalStore } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "dark" | "light";

const THEME_EVENT = "fitlog-theme-change";

const readTheme = (): Theme =>
  typeof document !== "undefined" &&
  document.documentElement.dataset.theme === "light"
    ? "light"
    : "dark";

const subscribe = (onChange: () => void) => {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
};

const handleToggle = () => {
  const next: Theme = readTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("fitlog-theme", next);
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
};

const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark");

  return (
    <button
      onClick={handleToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-line bg-ghost text-brand-text transition hover:bg-brand-soft"
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;

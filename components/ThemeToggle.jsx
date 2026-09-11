"use client";

import { useEffect, useState } from "react";

/**
 * Light is the brand default; the toggle stamps data-theme="dark" on <html>
 * and remembers the choice. Wrapped in try/catch because storage throws in
 * private windows and when site data is blocked.
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem("genuss-theme");
    } catch {}
    if (saved === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem("genuss-theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      className="themetoggle"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
          <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M10 1.6v2.2M10 16.2v2.2M18.4 10h-2.2M3.8 10H1.6M15.9 4.1l-1.6 1.6M5.7 14.3l-1.6 1.6M15.9 15.9l-1.6-1.6M5.7 5.7 4.1 4.1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M17 12.3A7.6 7.6 0 0 1 7.7 3a7.6 7.6 0 1 0 9.3 9.3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

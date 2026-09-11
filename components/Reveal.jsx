"use client";

import { useEffect } from "react";

/**
 * Adds the `.in` class to every `.r` element as it scrolls into view.
 * Mounted once in the root layout; re-scans on route change.
 */
export default function Reveal() {
  useEffect(() => {
    const supported =
      typeof IntersectionObserver !== "undefined" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supported) {
      document.querySelectorAll(".r").forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const scan = () =>
      document
        .querySelectorAll(".r:not(.in)")
        .forEach((el) => io.observe(el));

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

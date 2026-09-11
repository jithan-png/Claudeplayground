"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/** Counts the numeric part of a stat up once, the first time it scrolls in. */
function Stat({ value, label, delay }) {
  const [shown, setShown] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    const m = value.match(/^(\d+)(.*)$/);
    const el = ref.current;
    if (!m || !el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const target = Number(m[1]);
    const suffix = m[2];
    setShown("0" + suffix);

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const duration = 1100;
        const t0 = performance.now() + delay;
        const tick = (now) => {
          const p = Math.min(1, Math.max(0, (now - t0) / duration));
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(Math.round(target * eased) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, delay]);

  return (
    <div className="stats__item" ref={ref}>
      <div className="stats__val">{shown}</div>
      <div className="stats__label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="wrap">
      <div className="stats">
        {site.stats.map((s, i) => (
          <Stat key={s.label} value={s.value} label={s.label} delay={i * 110} />
        ))}
      </div>
    </div>
  );
}

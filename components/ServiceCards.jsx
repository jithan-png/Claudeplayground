"use client";

import Link from "next/link";
import { services } from "@/lib/site";
import { Art } from "./Patterns";
import { Arrow } from "./Icons";

export default function ServiceCards() {
  const track = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mx",
      `${((e.clientX - r.left) / r.width) * 100}%`
    );
    e.currentTarget.style.setProperty(
      "--my",
      `${((e.clientY - r.top) / r.height) * 100}%`
    );
  };

  return (
    <div className="svc-grid">
      {services.map((s, i) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="svc r"
          data-accent={s.accent}
          style={{ "--d": `${i * 90}ms` }}
          onMouseMove={track}
        >
          <div className="svc__art" aria-hidden>
            <Art pattern={s.pattern} accent={s.accent} />
          </div>
          <span className="svc__num">
            {String(i + 1).padStart(2, "0")} — {s.eyebrow}
          </span>
          <h3 className="h3">{s.title}</h3>
          <p>{s.short}</p>
          <div className="svc__foot">
            <div className="svc__tags">
              {s.bullets.slice(0, 3).map((b) => (
                <span className="tag" key={b}>
                  {b}
                </span>
              ))}
            </div>
            <span className="tlink" style={{ marginTop: 20 }}>
              Explore this service <Arrow />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

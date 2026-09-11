"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, services } from "@/lib/site";
import { Arrow, Phone } from "./Icons";

function Mark() {
  return (
    <img
      className="logo__img"
      src="/img/logo.webp"
      alt=""
      width={38}
      height={38}
    />
  );
}

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={`header${stuck ? " is-stuck" : ""}`}>
        <div className="wrap header__bar">
          <Link href="/" className="logo" aria-label={`${site.name} — home`}>
            <Mark />
            <span className="logo__text">
              <span className="logo__name">Genuss</span>
              <span className="logo__sub">Renovation Ltd.</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <div className="drop">
              <button type="button" aria-haspopup="true">
                Services
                <svg width="9" height="6" viewBox="0 0 12 8" fill="none" aria-hidden>
                  <path
                    d="M1 1l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="drop__panel">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="drop__item"
                  >
                    {s.title}
                    <span>{s.eyebrow}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/projects" data-active={active("/projects")}>
              Projects
            </Link>
            <Link href="/about" data-active={active("/about")}>
              About
            </Link>
            <Link
              href="/services/accessibility"
              data-active={active("/services/accessibility")}
            >
              WorkSafeBC
            </Link>
          </nav>

          <div className="header__cta">
            <a className="header__phone" href={site.phoneHref}>
              <Phone />
              {site.phone}
            </a>
            <Link href="/contact" className="btn">
              Get a quote <Arrow />
            </Link>
            <button
              type="button"
              className="burger"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobilenav${open ? " is-open" : ""}`}>
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`}>
            {s.title}
          </Link>
        ))}
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <div className="mobilenav__foot">
          <a className="btn btn--ghost" href={site.phoneHref}>
            <Phone /> {site.phone}
          </a>
          <Link className="btn" href="/contact">
            Get a free quote <Arrow />
          </Link>
        </div>
      </div>
    </>
  );
}

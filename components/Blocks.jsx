import Link from "next/link";
import {
  site,
  processSteps,
  projects,
  testimonials,
  differentiators,
} from "@/lib/site";
import { Art, HeroGrid } from "./Patterns";
import { Arrow, Check, Phone, whyIcons } from "./Icons";

export function SectionHead({ eyebrow, title, aside, teal }) {
  return (
    <div className="shead">
      <div className="r">
        <span className={`eyebrow${teal ? " eyebrow--teal" : ""}`}>
          {eyebrow}
        </span>
        <h2 className="h2">{title}</h2>
      </div>
      {aside ? (
        <div className="shead__aside r" style={{ "--d": "120ms" }}>
          <p className="lede">{aside}</p>
        </div>
      ) : null}
    </div>
  );
}

export function PageHero({
  crumbs = [],
  eyebrow,
  title,
  lede,
  accent = "brass",
  children,
}) {
  return (
    <section className={`phero${accent === "teal" ? " phero--teal" : ""}`}>
      <div className="phero__art" aria-hidden>
        <HeroGrid accent={accent} />
      </div>
      <div className="phero__glow" aria-hidden />
      <div className="wrap">
        {crumbs.length ? (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
                {i < crumbs.length - 1 ? <span> / </span> : null}
              </span>
            ))}
          </nav>
        ) : null}
        <span className={`eyebrow${accent === "teal" ? " eyebrow--teal" : ""}`}>
          {eyebrow}
        </span>
        <h1 className="display">{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <div className="wrap">
      <div className="stats r">
        {site.stats.map((s) => (
          <div className="stats__item" key={s.label}>
            <div className="stats__val">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  const items = [
    "Hardwood & engineered flooring",
    "Large-format porcelain",
    "Curbless wet rooms",
    "WorkSafeBC modifications",
    "Custom home construction",
    "Tenant improvements",
    "Heated floor systems",
    "Natural stone & marble",
    "Finish carpentry",
    "Restoration subcontracting",
    "Aging in place",
    "Commercial fit-outs",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {doubled.map((t, i) => (
          <span className="marquee__item" key={`${t}-${i}`}>
            <i />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Process() {
  return (
    <div className="process">
      {processSteps.map((s, i) => (
        <div className="process__step r" key={s.n} style={{ "--d": `${i * 70}ms` }}>
          <span className="process__n">{s.n}</span>
          <h3 className="h3">{s.h}</h3>
          <p>{s.p}</p>
        </div>
      ))}
    </div>
  );
}

export function ProjectGrid({ limit }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="proj-grid">
      {list.map((p, i) => (
        <article className="proj r" key={p.title} style={{ "--d": `${i * 70}ms` }}>
          <div className="proj__art">
            <span className="proj__type">{p.type}</span>
            <Art
              pattern={p.pattern}
              variant={i > 2}
              accent={
                p.type === "Accessibility" || p.type === "Commercial"
                  ? "teal"
                  : "brass"
              }
            />
          </div>
          <div className="proj__body">
            <h3 className="h3">{p.title}</h3>
            <dl className="proj__meta">
              <div className="proj__row">
                <dt>Location</dt>
                <dd>{p.location}</dd>
              </div>
              <div className="proj__row">
                <dt>Scope</dt>
                <dd>{p.scope}</dd>
              </div>
              <div className="proj__row">
                <dt>Duration</dt>
                <dd>{p.duration}</dd>
              </div>
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}

export function WhyGrid() {
  return (
    <div className="why">
      {differentiators.map((d, i) => {
        const Icon = whyIcons[i % whyIcons.length];
        return (
          <div className="why__cell r" key={d.h} style={{ "--d": `${i * 60}ms` }}>
            <Icon />
            <h3 className="h3">{d.h}</h3>
            <p>{d.p}</p>
          </div>
        );
      })}
    </div>
  );
}

export function Quotes() {
  return (
    <div className="quotes">
      {testimonials.map((t, i) => (
        <figure className="quote r" key={t.detail} style={{ "--d": `${i * 80}ms` }}>
          <span className="quote__mark" aria-hidden>
            &ldquo;
          </span>
          <blockquote>
            <p>{t.quote}</p>
          </blockquote>
          <figcaption>
            <footer>
              <strong>{t.name}</strong>
              <span>{t.detail}</span>
            </footer>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function CTA({
  eyebrow = "Start here",
  title = (
    <>
      Let&apos;s talk about <em className="ital">your</em> project.
    </>
  ),
  lede = "Free consultation, a written itemized scope, and a firm price. No pressure, no vague allowances — just a straight answer about what your project takes.",
}) {
  return (
    <div className="wrap">
      <div className="cta r">
        <div className="cta__glow" aria-hidden />
        <span className="eyebrow eyebrow--plain">{eyebrow}</span>
        <h2 className="h2">{title}</h2>
        <p className="lede">{lede}</p>
        <div className="cta__actions">
          <Link href="/contact" className="btn btn--lg">
            Request a free quote <Arrow />
          </Link>
          <a href={site.phoneHref} className="btn btn--ghost btn--lg">
            <Phone /> {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export function SpecList({ items, teal }) {
  return (
    <ul className={`spec-list${teal ? " spec-list--teal" : ""}`}>
      {items.map((b) => (
        <li key={b}>
          <Check />
          {b}
        </li>
      ))}
    </ul>
  );
}

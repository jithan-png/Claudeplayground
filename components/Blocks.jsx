import Link from "next/link";
import {
  site,
  processSteps,
  projects,
  testimonials,
  differentiators,
  gallery,
} from "@/lib/site";
import { Arrow, Check, Phone, Star, whyIcons } from "./Icons";

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
        <div className="r" style={{ "--d": "120ms" }}>
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
  image,
  imageAlt = "",
  children,
}) {
  return (
    <section className="phero">
      {image ? (
        <div className="phero__photo" aria-hidden>
          <img src={image} alt={imageAlt} fetchPriority="high" />
        </div>
      ) : null}
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
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display">{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function Marquee() {
  const items = [
    "Vinyl plank & hardwood flooring",
    "Large-format porcelain",
    "Curbless wet rooms",
    "WorkSafeBC modifications",
    "Custom home construction",
    "Tenant improvements",
    "Basement renovations",
    "Kitchen & bathroom remodels",
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

/** Continuously scrolling strip of project photography. */
export function PhotoMarquee() {
  const doubled = [...gallery, ...gallery];
  return (
    <div className="pmarquee" aria-label="Recent Genuss Renovation work">
      <div className="pmarquee__track">
        {doubled.map((g, i) => (
          <figure key={`${g.src}-${i}`} aria-hidden={i >= gallery.length}>
            <img src={g.src} alt={i < gallery.length ? g.alt : ""} loading="lazy" />
            <figcaption>{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Process() {
  return (
    <div className="process rail">
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

export function ProjectGrid({ limit, rail }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className={`proj-grid${rail ? " rail" : ""}`}>
      {list.map((p, i) => (
        <article className="proj r" key={p.title} style={{ "--d": `${i * 70}ms` }}>
          <div className="proj__art">
            <span className="proj__type">{p.type}</span>
            <img src={p.image} alt={p.alt} loading="lazy" />
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
    <div className="why rail">
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
    <div className="quotes rail">
      {testimonials.map((t, i) => (
        <figure className="quote r" key={t.name} style={{ "--d": `${i * 80}ms` }}>
          <div className="quote__stars" aria-label="Five out of five">
            {[0, 1, 2, 3, 4].map((n) => (
              <Star key={n} />
            ))}
          </div>
          <blockquote>
            <p>{t.quote}</p>
          </blockquote>
          <figcaption>
            <footer>
              <span className="quote__avatar" aria-hidden>
                {t.name.trim()[0]}
              </span>
              <span>
                <strong>{t.name}</strong>
                <span>{t.detail}</span>
              </span>
            </footer>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function PullQuote({ quote }) {
  return (
    <div className="wrap">
      <figure className="pullquote r">
        <span className="eyebrow eyebrow--plain">What clients say</span>
        <blockquote style={{ marginTop: 20 }}>
          &ldquo;{quote.quote}&rdquo;
        </blockquote>
        <figcaption>
          <footer>
            {quote.name} &mdash; {quote.detail}
          </footer>
        </figcaption>
      </figure>
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
  lede = "Free consultation, a written itemized scope, and a firm price. We define the scope up front so there are no delays and no hidden costs.",
}) {
  return (
    <div className="wrap">
      <div className="cta inverse r">
        <div className="cta__photo" aria-hidden>
          <img src="/img/6585770.webp" alt="" loading="lazy" />
        </div>
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

import Link from "next/link";
import { site, services, faqs, featuredQuote } from "@/lib/site";
import { Arrow, Check, Phone } from "@/components/Icons";
import { HeroGrid } from "@/components/Patterns";
import ServiceCards from "@/components/ServiceCards";
import Accordion from "@/components/Accordion";
import {
  CTA,
  Marquee,
  PullQuote,
  Process,
  ProjectGrid,
  Quotes,
  SectionHead,
  Stats,
  WhyGrid,
} from "@/components/Blocks";

/** Headline that lifts in word by word. Pure CSS — no hydration needed. */
function Headline() {
  const parts = [
    { t: "Building", em: false },
    { t: "your", em: false },
    { t: "dreams,", em: false },
    { t: "one", em: false },
    { t: "renovation", em: false },
    { t: "at", em: false },
    { t: "a", em: false },
    { t: "time.", em: true },
  ];
  return (
    <h1 className="display">
      {parts.map((p, i) => (
        <span key={`${p.t}-${i}`}>
          <span
            className="reveal-word"
            style={{ animationDelay: `${120 + i * 85}ms` }}
          >
            {p.em ? <em>{p.t}</em> : p.t}
          </span>{" "}
        </span>
      ))}
    </h1>
  );
}

const accessibility = services.find((s) => s.slug === "accessibility");

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="hero__bg" aria-hidden>
          <HeroGrid />
        </div>
        <div className="hero__glow hero__glow--a" aria-hidden />
        <div className="hero__glow hero__glow--b" aria-hidden />

        <div className="wrap hero__grid">
          <div>
            <span
              className="eyebrow reveal-word"
              style={{ animationDelay: "60ms" }}
            >
              Surrey, BC · Serving the Lower Mainland
            </span>
            <Headline />
            <p
              className="lede reveal-word"
              style={{ animationDelay: "700ms", marginTop: 28 }}
            >
              Your trusted renovation and construction partner in Surrey and the
              Lower Mainland — flooring and tiling, high-end custom homes,
              commercial tenant improvements, and accessibility modifications
              including WorkSafeBC-funded work.
            </p>
            <div
              className="hero__actions reveal-word"
              style={{ animationDelay: "830ms" }}
            >
              <Link href="/contact" className="btn btn--lg">
                Get a free quote <Arrow />
              </Link>
              <a href={site.phoneHref} className="btn btn--ghost btn--lg">
                <Phone /> {site.phone}
              </a>
            </div>
          </div>

          <aside
            className="hero__aside reveal-word"
            style={{ animationDelay: "950ms" }}
          >
            <figure className="hero__media">
              <img
                src="/img/1571459.webp"
                alt="Bright modern interior with a floating timber staircase, built by Genuss Renovation"
                fetchPriority="high"
              />
              <figcaption className="hero__caption">
                <div>
                  <span>Custom home</span>
                  <strong>Morgan Creek, Surrey</strong>
                </div>
              </figcaption>
            </figure>
            <div className="hero__badge" style={{ marginTop: 14 }}>
              <h4 className="h4">Licensed, insured, WCB-covered</h4>
              <p>
                Full liability coverage and active WorkSafeBC clearance on every
                site. A+ rated with the Better Business Bureau.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Stats />
      <Marquee />

      {/* ---------------- Services ---------------- */}
      <section className="section" id="services">
        <div className="wrap">
          <SectionHead
            eyebrow="What we build"
            title={
              <>
                Four disciplines. <span className="ital">One standard.</span>
              </>
            }
            aside="Most contractors do a little of everything. We run four focused divisions, each with its own crews and its own way of working — because a barrier-free bathroom and a 5,000 sq ft custom home are not the same job."
          />
          <ServiceCards />
        </div>
      </section>

      {/* ---------------- Accessibility band ---------------- */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="band r">
            <div className="band__glow" aria-hidden />
            <div className="band__inner">
              <div>
                <span className="eyebrow eyebrow--teal">
                  Accessibility division
                </span>
                <h2 className="h2">
                  WorkSafeBC modifications &amp; <span className="ital">aging in place</span>
                </h2>
                <p className="lede" style={{ marginTop: 20 }}>
                  When mobility changes, a familiar home can turn hostile
                  overnight — a shower curb, a narrow doorway, a set of front
                  steps. We carry out accessibility modifications for seniors
                  and for injured workers, with the finish standard of a
                  high-end renovation rather than a hospital retrofit.
                </p>
                <ul>
                  {accessibility.bullets.map((b) => (
                    <li className="check" key={b}>
                      <Check />
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/services/accessibility" className="btn btn--teal">
                    How WorkSafeBC work works <Arrow />
                  </Link>
                </div>
              </div>

              <div className="band__panel">
                <span className="eyebrow eyebrow--teal">
                  The WorkSafeBC path
                </span>
                <ol>
                  <li>
                    <div>
                      <strong>Accepted claim &amp; case manager</strong>
                      <span>
                        Your WorkSafeBC case manager authorizes an assessment of
                        your home.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>Occupational therapist assessment</strong>
                      <span>
                        An OT defines exactly which modifications are required
                        and why.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>We quote to that scope</strong>
                      <span>
                        Itemized pricing written against the OT report, sent
                        straight to your case manager.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>Approval &amp; build</strong>
                      <span>
                        We build around your daily routine and leave you a
                        usable home each night.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>Sign-off &amp; invoicing</strong>
                      <span>
                        OT walkthrough, documentation and invoicing handled by
                        us — not by you.
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Why us ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Why Genuss"
            title={
              <>
                The boring things, <span className="ital">done right.</span>
              </>
            }
            aside="Quality workmanship, clean execution, and respect for your space and your timeline. We understand the scope up front to prevent delays, communicate clearly, and follow through on what we committed to."
          />
          <WhyGrid />
        </div>
      </section>

      {/* ---------------- Featured review ---------------- */}
      <section className="section section--tight">
        <PullQuote quote={featuredQuote} />
      </section>

      {/* ---------------- Image band ---------------- */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="band-img r">
            <img
              src="/img/4756488.webp"
              alt="Interior stripped back to the studs during a full home gut renovation"
              loading="lazy"
            />
            <div className="band-img__copy">
              <span className="eyebrow">Site coordination</span>
              <h2 className="h2">
                We do the job <span className="ital">right the first time</span>
              </h2>
              <p>
                Proper site coordination, scheduling and trade sequencing — so
                every trade arrives to a site that&apos;s ready for them, and
                the job finishes efficiently and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            eyebrow="How it goes"
            title={
              <>
                Five steps, <span className="ital">no surprises.</span>
              </>
            }
            aside="You'll always know what's happening this week, what's happening next, and what we need from you."
          />
        </div>
        <Process />
      </section>

      {/* ---------------- Projects ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Selected work"
            title={
              <>
                Recent projects across <span className="ital">the Lower Mainland</span>
              </>
            }
            aside="A cross-section of what we've been building — residential finishes, ground-up custom homes, commercial fit-outs and barrier-free conversions."
          />
          <ProjectGrid limit={6} />
          <div style={{ marginTop: 34 }}>
            <Link href="/projects" className="tlink">
              See the full project list <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            eyebrow="In their words"
            title={
              <>
                What clients <span className="ital">actually say</span>
              </>
            }
          />
          <Quotes />
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Good questions"
            title={
              <>
                Before you <span className="ital">call us</span>
              </>
            }
            aside="The things people ask on the first phone call, answered up front."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section section--tight">
        <CTA />
      </section>
    </>
  );
}

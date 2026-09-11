import Link from "next/link";
import { site, services, faqs, featuredQuote } from "@/lib/site";
import { Arrow, Check, Phone, Shield } from "@/components/Icons";
import ServiceCards from "@/components/ServiceCards";
import Accordion from "@/components/Accordion";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import {
  CTA,
  Marquee,
  PhotoMarquee,
  Process,
  ProjectGrid,
  PullQuote,
  Quotes,
  SectionHead,
  WhyGrid,
} from "@/components/Blocks";

/** Headline that lifts in word by word. Pure CSS — no hydration needed. */
function Headline() {
  const parts = [
    "Building",
    "your",
    "dreams,",
    "one",
    "renovation",
    "at",
    "a",
    { t: "time.", em: true },
  ].map((p) => (typeof p === "string" ? { t: p, em: false } : p));

  return (
    <h1 className="display">
      {parts.map((p, i) => (
        <span key={`${p.t}-${i}`}>
          <span
            className="reveal-word"
            style={{ animationDelay: `${140 + i * 80}ms` }}
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
        <div className="hero__photo" aria-hidden>
          <img
            src="/img/1571459.webp"
            alt=""
            fetchPriority="high"
          />
        </div>

        <div className="wrap hero__inner">
          <span className="eyebrow reveal-word" style={{ animationDelay: "60ms" }}>
            Surrey, BC
          </span>
          <Headline />
          <p
            className="hero__lede reveal-up"
            style={{ animationDelay: "800ms" }}
          >
            Your trusted renovation and construction partner in Surrey and the
            Lower Mainland — flooring and tiling, high-end custom homes,
            commercial tenant improvements, and accessibility modifications
            including WorkSafeBC-funded work.
          </p>
          <div
            className="hero__actions reveal-up"
            style={{ animationDelay: "900ms" }}
          >
            <Link href="/contact" className="btn btn--lg">
              Get a free quote <Arrow />
            </Link>
            <a href={site.phoneHref} className="btn btn--ghost btn--lg">
              <Phone /> {site.phone}
            </a>
          </div>
          <div
            className="hero__trust reveal-up"
            style={{ animationDelay: "1000ms" }}
          >
            <span>
              <Shield size={16} /> Licensed &amp; insured
            </span>
            <span>
              <Shield size={16} /> WorkSafeBC covered
            </span>
            <span>
              <Shield size={16} /> A+ with the BBB
            </span>
          </div>
        </div>

        <div className="hero__tag" aria-hidden>
          Custom home
          <strong>Morgan Creek, Surrey</strong>
        </div>
      </section>

      <Stats />

      <section className="section section--tight">
        <Marquee />
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="section section--surface" id="services">
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

      {/* ---------------- Before / after ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Demolition to handover"
            title={
              <>
                Drag to see the <span className="ital">difference</span>
              </>
            }
            aside="Every project passes through the same two states. What matters is how organized the middle is — and how clean the finish is when we hand the keys back."
          />
          <div className="r">
            <BeforeAfter
              before="/img/4756488.webp"
              after="/img/19966810.webp"
              beforeAlt="Interior stripped back to the studs during a gut renovation"
              afterAlt="The same style of space finished, with light flooring and large windows"
              beforeLabel="Mid-renovation"
              afterLabel="Completed"
              start={45}
            />
          </div>
        </div>
      </section>

      {/* ---------------- Accessibility band ---------------- */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="band inverse r">
            <div className="band__glow" aria-hidden />
            <div className="band__inner">
              <div>
                <span className="eyebrow eyebrow--teal">
                  Accessibility division
                </span>
                <h2 className="h2">
                  WorkSafeBC modifications &amp;{" "}
                  <span className="ital">aging in place</span>
                </h2>
                <p className="lede" style={{ marginTop: 18 }}>
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
                <div style={{ marginTop: 30 }}>
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
      <section className="section section--surface">
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
              src="/img/18157534.webp"
              alt="Renovation in progress with a ladder and freshly finished drywall"
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
          <Process />
        </div>
      </section>

      {/* ---------------- Photo marquee ---------------- */}
      <section className="section section--tight section--surface">
        <div className="wrap">
          <SectionHead
            eyebrow="In the field"
            title={
              <>
                A look at <span className="ital">recent work</span>
              </>
            }
          />
        </div>
        <PhotoMarquee />
      </section>

      {/* ---------------- Projects ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Selected work"
            title={
              <>
                Projects across{" "}
                <span className="ital">the Lower Mainland</span>
              </>
            }
            aside="Residential finishes, ground-up custom homes, commercial fit-outs and barrier-free conversions."
          />
          <ProjectGrid limit={6} rail />
          <div style={{ marginTop: 28 }}>
            <Link href="/projects" className="tlink">
              See the full project list <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="section section--tight section--surface">
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
          <Accordion items={faqs.slice(0, 6)} />
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section section--tight">
        <CTA />
      </section>
    </>
  );
}

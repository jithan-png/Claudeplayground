import Link from "next/link";
import { site, costGuide, faqs } from "@/lib/site";
import { Arrow, Check, Phone } from "@/components/Icons";
import Accordion from "@/components/Accordion";
import { CTA, PageHero, Process, SectionHead } from "@/components/Blocks";

export const metadata = {
  title: "Renovation Cost Guide — Surrey & the Lower Mainland",
  description:
    "What renovations actually cost in Surrey and the Lower Mainland: bathroom, kitchen, basement, flooring, whole-home and accessibility work, and the specific things that move the number.",
};

export default function CostGuidePage() {
  return (
    <>
      <PageHero
        image="/img/10855211.webp"
        imageAlt="Renovated kitchen with pale cabinetry and a stone island"
        crumbs={[{ label: "Home", href: "/" }, { label: "Cost guide" }]}
        eyebrow="Planning your budget"
        title={
          <>
            What renovations actually{" "}
            <em className="ital">cost around here</em>
          </>
        }
        lede="Most contractors won't put a number on a page. We will — as long as you understand what these numbers are, and what they aren't."
      >
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
          <Link href="/contact" className="btn">
            Get a real quote <Arrow />
          </Link>
          <a href={site.phoneHref} className="btn btn--ghost">
            <Phone /> {site.phone}
          </a>
        </div>
      </PageHero>

      {/* What these numbers are */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="notice r">
            <h2 className="h3">These are planning ranges, not quotes.</h2>
            <p>
              They exist so you can tell whether a project is a $20,000
              conversation or a $200,000 one before you take a day off work for
              a site visit. No contractor can price your job from a web page —
              the number depends on your space, your selections and what turns
              up once a wall is open. When we quote, you get a written itemized
              scope against a fixed price, and we explain any genuine unknowns
              before we start rather than after.
            </p>
          </div>
        </div>
      </section>

      {/* The ranges */}
      <section className="section section--surface">
        <div className="wrap">
          <SectionHead
            eyebrow="Typical ranges"
            title={
              <>
                By project type, <span className="ital">and what moves it</span>
              </>
            }
            aside="Ranges reflect finished work in the Lower Mainland including labour and materials. The 'typical' figure is where most projects of that type land."
          />

          <nav className="jump r" aria-label="Jump to a project type">
            {costGuide.map((c) => (
              <a href={`#${c.slug}`} key={c.slug}>
                {c.name}
              </a>
            ))}
          </nav>

          <div className="costs" style={{ marginTop: 26 }}>
            {costGuide.map((c, i) => (
              <article
                className="cost r"
                key={c.slug}
                id={c.slug}
                style={{ "--d": `${i * 60}ms` }}
              >
                <div className="cost__art">
                  <img src={c.image} alt={c.alt} loading="lazy" />
                </div>
                <div className="cost__body">
                  <h3 className="h3">{c.name}</h3>
                  <div className="cost__figures">
                    <div>
                      <dt>Full range</dt>
                      <dd className="cost__range">{c.range}</dd>
                    </div>
                    <div>
                      <dt>Most land at</dt>
                      <dd>{c.typical}</dd>
                    </div>
                    <div>
                      <dt>On site</dt>
                      <dd>{c.duration}</dd>
                    </div>
                  </div>
                  <h4 className="h4" style={{ marginTop: 22 }}>
                    What moves the number
                  </h4>
                  <ul className="cost__drivers">
                    {c.drivers.map((d) => (
                      <li key={d}>
                        <Check />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why quotes differ */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Comparing quotes"
            title={
              <>
                Why three quotes come back{" "}
                <span className="ital">$40,000 apart</span>
              </>
            }
            aside="It's almost never because one contractor is greedy and another is generous. It's because they're pricing different jobs."
          />
          <div className="detail-grid rail">
            {[
              {
                h: "One of them priced allowances, not products",
                p: "An allowance is a placeholder. If the tile allowance is $6/sq ft and you pick $18 tile, the difference lands on you as a change order. We price to specified product wherever we can, so the number you approve is closer to the number you pay.",
              },
              {
                h: "One of them left out the substrate",
                p: "Self-levelling, moisture remediation, deflection correction — invisible work that has to happen before a floor goes down. A quote that omits it isn't cheaper; it's incomplete, and you'll meet the cost later.",
              },
              {
                h: "The scopes genuinely differ",
                p: "Does the price include permits? Disposal? Painting? Baseboard reinstatement? Two quotes can differ by 30% purely on inclusions. Ask each contractor for a written line-item scope and compare those, not the totals.",
              },
              {
                h: "One of them isn't carrying real coverage",
                p: "Liability insurance and active WorkSafeBC clearance cost money and get priced in. If a quote is far below the others, ask for certificates. If you hire an uncovered contractor and someone is injured on your property, that can become your problem.",
              },
            ].map((d, i) => (
              <div className="detail r" key={d.h} style={{ "--d": `${i * 70}ms` }}>
                <span className="detail__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{d.h}</h3>
                <p>{d.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--tight section--surface">
        <div className="wrap">
          <SectionHead
            eyebrow="How we price"
            title={
              <>
                From first call to{" "}
                <span className="ital">firm number</span>
              </>
            }
          />
          <Process />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Cost questions"
            title={
              <>
                The ones people <span className="ital">actually ask</span>
              </>
            }
          />
          <Accordion items={faqs.slice(1, 6)} />
        </div>
      </section>

      <section className="section section--tight">
        <CTA
          eyebrow="Your number"
          title={
            <>
              Get a price for <span className="ital">your</span> project
            </>
          }
          lede="A free consultation, a walk-through of your space, and a written itemized scope with a firm price. Then you'll know the real number instead of a range."
        />
      </section>
    </>
  );
}

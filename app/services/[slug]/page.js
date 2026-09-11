import Link from "next/link";
import { notFound } from "next/navigation";
import { services, site } from "@/lib/site";
import { Art } from "@/components/Patterns";
import { Arrow, Phone } from "@/components/Icons";
import Accordion from "@/components/Accordion";
import {
  CTA,
  PageHero,
  Process,
  ProjectGrid,
  SectionHead,
  SpecList,
} from "@/components/Blocks";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} — Surrey & Lower Mainland`,
    description: s.short,
    openGraph: { title: s.title, description: s.short },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const teal = service.accent === "teal";
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        accent={service.accent}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: service.title },
        ]}
        eyebrow={service.eyebrow}
        title={service.title}
        lede={service.hero}
      >
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link href="/contact" className={`btn${teal ? " btn--teal" : ""}`}>
            Request a quote <Arrow />
          </Link>
          <a href={site.phoneHref} className="btn btn--ghost">
            <Phone /> {site.phone}
          </a>
        </div>
      </PageHero>

      {/* Intro + what's included */}
      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div className="r">
              <span className={`eyebrow${teal ? " eyebrow--teal" : ""}`}>
                What&apos;s included
              </span>
              <h2 className="h2" style={{ marginTop: 18 }}>
                The full <span className="ital">scope</span>
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                {service.intro}
              </p>
              <div className="art-frame" style={{ marginTop: 30 }} aria-hidden>
                <Art pattern={service.pattern} accent={service.accent} />
              </div>
            </div>
            <div className="r" style={{ "--d": "120ms" }}>
              <SpecList items={service.bullets} teal={teal} />
              <div
                style={{
                  marginTop: 22,
                  border: "1px solid var(--line)",
                  borderRadius: 8,
                  padding: "26px 28px",
                  background: "var(--ink-850)",
                }}
              >
                <span className={`eyebrow${teal ? " eyebrow--teal" : ""}`}>
                  Service area
                </span>
                <p
                  className="body-dim"
                  style={{ marginTop: 14, fontSize: 14.5 }}
                >
                  {site.serviceAreas.join(" · ")} — and the wider Lower
                  Mainland. For larger projects we travel further; just ask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            teal={teal}
            eyebrow="How we do it"
            title={
              <>
                Where the <span className="ital">difference</span> is made
              </>
            }
            aside="The parts of this work that separate a job that lasts twenty years from one that needs attention in two."
          />
          <div className="detail-grid">
            {service.detail.map((d, i) => (
              <div className="detail r" key={d.h} style={{ "--d": `${i * 70}ms` }}>
                <span
                  className="detail__n"
                  style={teal ? { color: "var(--teal)" } : undefined}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h3">{d.h}</h3>
                <p>{d.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            teal={teal}
            eyebrow="Our process"
            title={
              <>
                Five steps, <span className="ital">no surprises</span>
              </>
            }
          />
        </div>
        <Process />
      </section>

      {/* FAQ */}
      {service.faq?.length ? (
        <section className="section">
          <div className="wrap">
            <SectionHead
              teal={teal}
              eyebrow="Questions"
              title={
                <>
                  About <span className="ital">this work</span>
                </>
              }
            />
            <Accordion items={service.faq} />
          </div>
        </section>
      ) : null}

      {/* Related projects */}
      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            teal={teal}
            eyebrow="Selected work"
            title={
              <>
                Recent <span className="ital">projects</span>
              </>
            }
          />
          <ProjectGrid limit={3} />
        </div>
      </section>

      {/* Other services */}
      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            teal={teal}
            eyebrow="Also from Genuss"
            title={
              <>
                Our other <span className="ital">divisions</span>
              </>
            }
          />
          <div className="why">
            {others.map((o, i) => (
              <Link
                href={`/services/${o.slug}`}
                className="why__cell r"
                key={o.slug}
                style={{ "--d": `${i * 70}ms` }}
              >
                <span className="eyebrow eyebrow--plain">{o.eyebrow}</span>
                <h3 className="h3">{o.title}</h3>
                <p>{o.short}</p>
                <span className="tlink" style={{ marginTop: 18 }}>
                  View service <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <CTA
          eyebrow="Next step"
          title={
            <>
              Ready to talk <span className="ital">{service.title.toLowerCase()}</span>?
            </>
          }
        />
      </section>
    </>
  );
}

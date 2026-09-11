import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, services, site, projects } from "@/lib/site";
import { Arrow, Check, Phone } from "@/components/Icons";
import {
  CTA,
  PageHero,
  Process,
  Quotes,
  SectionHead,
} from "@/components/Blocks";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: `Renovation Contractor in ${a.city}, BC`,
    description: `Genuss Renovation Ltd. serves ${a.city} with flooring and tiling, kitchen and bathroom remodels, basement renovations, commercial tenant improvements and WorkSafeBC accessibility modifications. Licensed, insured and A+ rated.`,
    alternates: { canonical: `/areas/${a.slug}` },
  };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const others = areas.filter((a) => a.slug !== slug);
  const local = projects.filter((p) => area.projects.includes(p.title));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: `${site.legal} — ${area.city}`,
    telephone: site.phone,
    email: site.email,
    areaServed: { "@type": "City", name: `${area.city}, BC` },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        image={area.image}
        imageAlt={area.alt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service areas", href: "/areas" },
          { label: area.city },
        ]}
        eyebrow={`${area.city}, British Columbia`}
        title={
          <>
            Renovation contractor in{" "}
            <em className="ital">{area.city}</em>
          </>
        }
        lede={area.blurb}
      >
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
          <Link href="/contact" className="btn">
            Get a free quote <Arrow />
          </Link>
          <a href={site.phoneHref} className="btn btn--ghost">
            <Phone /> {site.phone}
          </a>
        </div>
      </PageHero>

      {/* Local context + services */}
      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div className="r">
              <span className="eyebrow">Working in {area.city}</span>
              <h2 className="h2" style={{ marginTop: 16 }}>
                What we see <span className="ital">here</span>
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                {area.local}
              </p>
              <div
                className="info-card"
                style={{ marginTop: 26 }}
              >
                <span className="eyebrow">Areas we cover in {area.city}</span>
                <div className="areas">
                  {area.neighbourhoods.map((n) => (
                    <span className="tag" key={n}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="r" style={{ "--d": "120ms" }}>
              <span className="eyebrow">What we do in {area.city}</span>
              <div className="why" style={{ marginTop: 18 }}>
                {services.map((s) => (
                  <Link
                    href={`/services/${s.slug}`}
                    className="why__cell"
                    key={s.slug}
                  >
                    <span className="eyebrow eyebrow--plain">{s.eyebrow}</span>
                    <h3 className="h3">{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="tlink" style={{ marginTop: 12 }}>
                      View service <Arrow />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local projects */}
      {local.length ? (
        <section className="section section--tight section--surface">
          <div className="wrap">
            <SectionHead
              eyebrow="Nearby work"
              title={
                <>
                  Projects in and around{" "}
                  <span className="ital">{area.city}</span>
                </>
              }
            />
            <div className="proj-grid rail">
              {local.map((p, i) => (
                <article
                  className="proj r"
                  key={p.title}
                  style={{ "--d": `${i * 70}ms` }}
                >
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
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Why us, locally */}
      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            eyebrow={`Why ${area.city} calls us`}
            title={
              <>
                Local, licensed and{" "}
                <span className="ital">easy to reach</span>
              </>
            }
          />
          <ul className="spec-list">
            {[
              `Based in Surrey — ${area.city} is a short run, so scheduling stays tight`,
              "Fully licensed and insured, with active WorkSafeBC coverage",
              "A+ rated with the Better Business Bureau",
              "Written, itemized scopes with firm pricing — no vague allowances",
              "One project lead who answers the phone and knows your job",
              "Organized, clean sites and a final walkthrough before close-out",
            ].map((t) => (
              <li key={t}>
                <Check />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section section--tight section--surface">
        <div className="wrap">
          <SectionHead
            eyebrow="How it goes"
            title={
              <>
                Five steps, <span className="ital">no surprises</span>
              </>
            }
          />
          <Process />
        </div>
      </section>

      {/* Reviews */}
      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            eyebrow="In their words"
            title={
              <>
                What clients across the Lower Mainland{" "}
                <span className="ital">say</span>
              </>
            }
          />
          <Quotes />
        </div>
      </section>

      {/* Other areas */}
      <section className="section section--tight section--surface">
        <div className="wrap">
          <SectionHead
            eyebrow="Also serving"
            title={
              <>
                Across the <span className="ital">Lower Mainland</span>
              </>
            }
          />
          <div className="arealinks">
            {others.map((a) => (
              <Link href={`/areas/${a.slug}`} key={a.slug}>
                {a.city}
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <CTA
          eyebrow={`${area.city} projects`}
          title={
            <>
              Planning a renovation in{" "}
              <span className="ital">{area.city}</span>?
            </>
          }
        />
      </section>
    </>
  );
}

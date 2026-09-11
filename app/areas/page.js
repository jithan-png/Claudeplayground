import Link from "next/link";
import { areas, site } from "@/lib/site";
import { Arrow } from "@/components/Icons";
import { CTA, PageHero, SectionHead } from "@/components/Blocks";

export const metadata = {
  title: "Service Areas — Lower Mainland",
  description:
    "Genuss Renovation Ltd. serves Surrey, Vancouver, Burnaby, Langley, White Rock, Coquitlam, Richmond and Delta with renovation, flooring, commercial and accessibility work.",
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        image="/img/6585770.webp"
        imageAlt="High-end Lower Mainland interior with timber slat detailing"
        crumbs={[{ label: "Home", href: "/" }, { label: "Service areas" }]}
        eyebrow="Where we work"
        title={
          <>
            Renovating across the{" "}
            <em className="ital">Lower Mainland</em>
          </>
        }
        lede={`Based at ${site.address.street} in Surrey, and on site across eight cities. Pick yours to see the work we do there and the neighbourhoods we cover.`}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Eight cities"
            title={
              <>
                Choose <span className="ital">your city</span>
              </>
            }
            aside="Every area gets the same crews, the same written scopes and the same standard. What changes is the local knowledge — permits, housing stock and the problems each city tends to throw up."
          />
          <div className="proj-grid">
            {areas.map((a, i) => (
              <Link
                href={`/areas/${a.slug}`}
                className="proj r"
                key={a.slug}
                style={{ "--d": `${i * 60}ms` }}
              >
                <div className="proj__art">
                  <img src={a.image} alt={a.alt} loading="lazy" />
                  <span className="proj__type">{a.city}</span>
                </div>
                <div className="proj__body">
                  <h3 className="h3">{a.city}, BC</h3>
                  <p
                    className="body-dim"
                    style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6 }}
                  >
                    {a.blurb}
                  </p>
                  <span className="tlink" style={{ marginTop: 12 }}>
                    Renovation in {a.city} <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <CTA />
      </section>
    </>
  );
}

import Link from "next/link";
import { site, services } from "@/lib/site";
import { Arrow } from "@/components/Icons";
import Stats from "@/components/Stats";
import {
  CTA,
  PageHero,
  Process,
  SectionHead,
  WhyGrid,
} from "@/components/Blocks";

export const metadata = {
  title: "About",
  description:
    "Genuss Renovation Ltd. is a Surrey-based renovation and construction company serving the Lower Mainland — licensed, insured, WorkSafeBC covered and A+ rated with the Better Business Bureau.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/img/7937659.webp"
        imageAlt="Genuss Renovation team on site in hard hats"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Genuss"
        title={
          <>
            A trade company that grew into a{" "}
            <em className="ital">
              renovation partner
            </em>
          </>
        }
        lede="Genuss Renovation Ltd. started with flooring and tile — the two trades where sloppy work shows up fastest and hides the least. That origin still sets the standard for everything else we build."
      />

      <Stats />

      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div className="r">
              <span className="eyebrow">Our story</span>
              <h2 className="h2" style={{ marginTop: 18 }}>
                Started on our <span className="ital">knees</span>
              </h2>
            </div>
            <div className="r" style={{ "--d": "120ms" }}>
              <p className="lede">
                Genuss began as a flooring and tiling crew working out of
                Surrey. That&apos;s a trade with nowhere to hide: a floor is
                the first surface anyone walks on and the last thing anyone
                forgives. You learn quickly that the job is decided long before
                the first plank goes down — in the moisture test, in the laser
                check, in the twenty minutes spent snapping a centreline that a
                faster crew would skip.
              </p>
              <p className="lede" style={{ marginTop: 20 }}>
                Clients kept asking us to handle more. The bathroom around the
                tile. Then the whole floor of the house. Then the house. Today
                Genuss runs four divisions — flooring and finishing, high-end
                custom homes, commercial renovation and tenant improvement, and
                accessibility modifications including WorkSafeBC-funded work —
                and we still self-perform the core trades we started with.
              </p>
              <p className="lede" style={{ marginTop: 20 }}>
                We&apos;re based at {site.address.street} in{" "}
                {site.address.city} and work across the Lower Mainland. Fully
                licensed and insured, active WorkSafeBC coverage, and an A+
                rating with the Better Business Bureau.
              </p>
              <div style={{ marginTop: 30 }}>
                <Link href="/contact" className="btn">
                  Talk to us about your project <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            eyebrow="What we believe"
            title={
              <>
                Six things we <span className="ital">refuse to compromise</span>
              </>
            }
            aside="None of these are exciting. All of them are the reason projects finish on time and clients call us again."
          />
          <WhyGrid />
        </div>
      </section>

      <section className="section section--tight">
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

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Our divisions"
            title={
              <>
                Four focused <span className="ital">disciplines</span>
              </>
            }
          />
          <div className="why">
            {services.map((s, i) => (
              <Link
                href={`/services/${s.slug}`}
                className="why__cell r"
                key={s.slug}
                style={{ "--d": `${i * 70}ms` }}
              >
                <span
                  className={`eyebrow eyebrow--plain${
                    s.accent === "teal" ? " eyebrow--teal" : ""
                  }`}
                >
                  {s.eyebrow}
                </span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.short}</p>
                <span className="tlink" style={{ marginTop: 18 }}>
                  View service <Arrow />
                </span>
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

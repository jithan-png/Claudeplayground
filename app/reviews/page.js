import Link from "next/link";
import { site, testimonials, featuredQuote, moreReviews } from "@/lib/site";
import { Arrow, Instagram, Star } from "@/components/Icons";
import { CTA, PageHero, PullQuote, SectionHead } from "@/components/Blocks";

export const metadata = {
  title: "Client Reviews",
  description:
    "What homeowners across Surrey, Langley, White Rock, Burnaby and Vancouver say about working with Genuss Renovation Ltd.",
};

const all = [...testimonials, featuredQuote, ...moreReviews];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        image="/img/19889120.webp"
        imageAlt="Finished kitchen with island and pendant lighting"
        crumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        eyebrow="Client reviews"
        title={
          <>
            What clients say about{" "}
            <em className="ital">working with us</em>
          </>
        }
        lede="As local renovation contractors in Surrey, we're proud of the relationships we build. Here's what homeowners across Surrey, Langley, White Rock, Burnaby and Vancouver have experienced working with our team."
      />

      <section className="section">
        <div className="wrap">
          <div className="quotes reviews-grid">
            {all.map((t, i) => (
              <figure className="quote r" key={t.name} style={{ "--d": `${i * 60}ms` }}>
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
        </div>
      </section>

      {/* Where to leave one */}
      <section className="section section--tight section--surface">
        <div className="wrap">
          <SectionHead
            eyebrow="Worked with us?"
            title={
              <>
                Reviews help more than{" "}
                <span className="ital">you&apos;d think</span>
              </>
            }
            aside="A renovation is a large amount of money handed to people you've only just met. Honest reviews from people who've already done it are the single most useful thing a prospective client can read."
          />
          <div className="arealinks">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram /> See our work on Instagram
            </a>
            <a href={`mailto:${site.email}?subject=${encodeURIComponent("Review for Genuss Renovation")}`}>
              Email us a review <Arrow />
            </a>
            <Link href="/projects">
              Browse the project gallery <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <PullQuote quote={featuredQuote} />
      </section>

      <section className="section section--tight">
        <CTA
          eyebrow="Your project"
          title={
            <>
              Join them — <span className="ital">start with a quote</span>
            </>
          }
        />
      </section>
    </>
  );
}

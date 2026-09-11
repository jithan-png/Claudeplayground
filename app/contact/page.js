import { site, faqs } from "@/lib/site";
import { Clock, Instagram, Mail, Phone, Pin } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/Accordion";
import { PageHero, SectionHead } from "@/components/Blocks";

export const metadata = {
  title: "Contact & Free Quote",
  description:
    "Request a free renovation quote from Genuss Renovation Ltd. — Surrey, BC. Flooring and tiling, custom homes, commercial tenant improvements and WorkSafeBC accessibility modifications across the Lower Mainland.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Free consultation"
        title={
          <>
            Let&apos;s get your project{" "}
            <em style={{ fontStyle: "italic", color: "var(--brass-lite)" }}>
              priced properly
            </em>
          </>
        }
        lede="Tell us what you're planning and we'll come out, walk the space, and give you a written itemized scope with a firm price. No obligation, no pressure."
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div className="r">
            <span className="eyebrow">Request a quote</span>
            <h2 className="h2" style={{ marginTop: 16, marginBottom: 30 }}>
              Start here
            </h2>
            <ContactForm />
          </div>

          <aside className="r" style={{ "--d": "120ms" }}>
            <div className="info-card">
              <span className="eyebrow">Direct contact</span>
              <dl style={{ marginTop: 20 }}>
                <div className="info-row">
                  <Phone size={16} />
                  <div>
                    <dt>Phone</dt>
                    <dd>
                      <a href={site.phoneHref}>{site.phone}</a>
                    </dd>
                  </div>
                </div>
                <div className="info-row">
                  <Mail size={16} />
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </dd>
                  </div>
                </div>
                <div className="info-row">
                  <Pin size={16} />
                  <div>
                    <dt>Office</dt>
                    <dd>
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.region}{" "}
                      {site.address.postal}
                    </dd>
                  </div>
                </div>
                <div className="info-row">
                  <Clock size={16} />
                  <div>
                    <dt>Hours</dt>
                    <dd>{site.hours}</dd>
                  </div>
                </div>
                <div className="info-row">
                  <Instagram />
                  <div>
                    <dt>Instagram</dt>
                    <dd>
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @genuss_renovations
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="info-card">
              <span className="eyebrow eyebrow--teal">WorkSafeBC claims</span>
              <p
                className="body-dim"
                style={{ marginTop: 14, fontSize: 14.5, lineHeight: 1.62 }}
              >
                If you have an accepted claim and need home modifications, call
                us with your claim number and your case manager&apos;s name. We
                quote to the occupational therapist&apos;s scope and handle the
                documentation and invoicing directly — you shouldn&apos;t have
                to chase paperwork while you&apos;re recovering.
              </p>
              <a
                href={site.phoneHref}
                className="btn btn--teal"
                style={{ marginTop: 22 }}
              >
                <Phone /> Call {site.phone}
              </a>
            </div>

            <div className="info-card">
              <span className="eyebrow">Where we work</span>
              <div className="areas">
                {site.serviceAreas.map((a) => (
                  <span className="tag" key={a}>
                    {a}
                  </span>
                ))}
              </div>
              <p
                className="body-dim"
                style={{ marginTop: 18, fontSize: 13.5, lineHeight: 1.6 }}
              >
                Plus the wider Lower Mainland. For larger custom and commercial
                projects we travel further — just ask.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            eyebrow="Good questions"
            title={
              <>
                Answered <span className="ital">up front</span>
              </>
            }
          />
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}

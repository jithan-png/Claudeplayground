import Link from "next/link";
import { site, services } from "@/lib/site";
import { Instagram, Mail, Phone } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <div className="logo">
              <img
                className="logo__img"
                src="/img/logo.webp"
                alt=""
                width={44}
                height={44}
                style={{ width: 46, height: 46 }}
              />
              <span className="logo__text">
                <span className="logo__name" style={{ fontSize: 24 }}>
                  Genuss
                </span>
                <span className="logo__sub">Renovation Ltd.</span>
              </span>
            </div>
            <p className="footer__blurb">
              A Surrey-based renovation and construction partner serving the
              Lower Mainland. Flooring and tile, high-end custom homes,
              commercial tenant improvements, and accessibility modifications —
              including WorkSafeBC-funded work.
            </p>
            <div className="footer__social">
              <a
                href={site.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a href={site.phoneHref} aria-label="Call us">
                <Phone size={16} />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email us">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About Genuss</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Request a quote</Link>
              </li>
              <li>
                <Link href="/services/accessibility">WorkSafeBC modifications</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postal}
                </span>
              </li>
              <li>
                <span>{site.hoursShort}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          <span>
            © {new Date().getFullYear()} {site.legal}. Licensed &amp; insured.
            WorkSafeBC covered.
          </span>
          <span>
            Serving {site.serviceAreas.join(" · ")} &amp; the Lower Mainland
          </span>
        </div>

        <div className="footer__wordmark" aria-hidden>
          GENUSS
        </div>
      </div>
    </footer>
  );
}

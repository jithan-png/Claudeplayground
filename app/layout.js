import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://www.genussrenovation.ca"),
  title: {
    default:
      "Genuss Renovation Ltd. — Flooring, Custom Homes & Commercial Renovation | Surrey BC",
    template: "%s | Genuss Renovation Ltd.",
  },
  description:
    "Surrey-based renovation and construction partner serving the Lower Mainland. Flooring and tiling, high-end custom homes, commercial tenant improvements, and WorkSafeBC accessibility modifications. Licensed, insured, A+ BBB rated.",
  keywords: [
    "renovation Surrey BC",
    "flooring installation Surrey",
    "tiling contractor Lower Mainland",
    "custom home builder Surrey",
    "commercial tenant improvement Vancouver",
    "WorkSafeBC home modifications",
    "accessibility renovation BC",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Genuss Renovation Ltd.",
    title:
      "Genuss Renovation Ltd. — Flooring, Custom Homes & Commercial Renovation",
    description:
      "Built with precision. Finished with care. Renovation, flooring and accessibility modifications across Surrey and the Lower Mainland.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.legal,
  alternateName: site.name,
  description:
    "Renovation and construction company specializing in flooring and tiling, high-end custom homes, commercial tenant improvements and accessibility modifications including WorkSafeBC-funded work.",
  telephone: site.phone,
  email: site.email,
  url: "https://www.genussrenovation.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  areaServed: site.serviceAreas.map((a) => ({
    "@type": "City",
    name: `${a}, BC`,
  })),
  sameAs: [site.instagram],
  priceRange: "$$-$$$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}

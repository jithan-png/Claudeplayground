import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/Blocks";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="That page isn't here."
      lede="The link may be out of date, or the page may have moved. Head back to the homepage, or tell us what you were looking for."
    >
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
        <Link href="/" className="btn">
          Back to homepage <Arrow />
        </Link>
        <Link href="/contact" className="btn btn--ghost">
          Contact us <Arrow />
        </Link>
      </div>
    </PageHero>
  );
}

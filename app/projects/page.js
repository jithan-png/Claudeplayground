import { CTA, PageHero, ProjectGrid, Quotes, SectionHead } from "@/components/Blocks";

export const metadata = {
  title: "Projects",
  description:
    "Selected renovation, flooring, custom home, commercial and accessibility projects completed by Genuss Renovation Ltd. across Surrey, Vancouver, Burnaby, Langley and the Lower Mainland.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        eyebrow="Selected work"
        title={
          <>
            Work we&apos;re happy to <em style={{ fontStyle: "italic", color: "var(--brass-lite)" }}>put our name on</em>
          </>
        }
        lede="A cross-section of recent Genuss projects — residential finishes, ground-up custom homes, commercial fit-outs and barrier-free conversions across the Lower Mainland."
      />

      <section className="section">
        <div className="wrap">
          <ProjectGrid />
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <SectionHead
            eyebrow="In their words"
            title={
              <>
                What clients <span className="ital">actually say</span>
              </>
            }
          />
          <Quotes />
        </div>
      </section>

      <section className="section section--tight">
        <CTA
          eyebrow="Your project next"
          title={
            <>
              Tell us what you&apos;re <span className="ital">planning</span>
            </>
          }
        />
      </section>
    </>
  );
}

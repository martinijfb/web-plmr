import { SectionHeading, Highlight } from "@/components/section-heading";
import { AwardsCarousel } from "@/components/awards-carousel";
import styles from "./awards-section.module.css";

type AwardItem = {
  badge: string;
  description: string;
  year: string;
  title: string;
  image: string;
};

const AWARD_ITEMS: AwardItem[] = [
  {
    badge: "FINALIST",
    description: "Digital Professional of the Year",
    year: "2026",
    title: "PRCA Digital Awards 2026 - Digital Professional",
    image: "/awards-section/award-image-1.png",
  },
  {
    badge: "FINALIST",
    description: "Rising Star of the Year",
    year: "2026",
    title: "PRCA Digital Awards 2026 - Rising Star",
    image: "/awards-section/award-image-2.png",
  },
  {
    badge: "FINALIST",
    description: "Marketing & PR",
    year: "2026",
    title: "Care Sector Supplier Awards - Marketing & PR",
    image: "/awards-section/award-image-3.png",
  },
  {
    badge: "FINALIST",
    description: "Supplier of the Year (Advisory)",
    year: "2025",
    title: "National Care Awards - Supplier of the Year",
    image: "/awards-section/award-image-4.png",
  },
  {
    badge: "FINALIST",
    description: "HealthInvestor Power List 2025",
    year: "2025",
    title: "HealthInvestor Power List 2025",
    image: "/awards-section/award-image-5.png",
  },
  {
    badge: "WINNER",
    description: "Strategic Consultants of the Year",
    year: "2025",
    title: "Strategic Consultants of the Year 2025",
    image: "/awards-section/award-image-6.png",
  },
  {
    badge: "WINNER",
    description: "Young Achiever of the Year",
    year: "2024",
    title: "Young Achiever of the Year 2024",
    image: "/awards-section/award-image-7.png",
  },
];

export function AwardsSection() {
  return (
    <section className={styles.section} aria-label="Awards and recognition">
      <div className={styles.inner}>
        <SectionHeading className={styles.title}>
          IMPACTFUL{" "}
          <Highlight>AWARDS</Highlight>
        </SectionHeading>
      </div>

      <AwardsCarousel items={AWARD_ITEMS} />
    </section>
  );
}

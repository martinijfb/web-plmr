import Image from "next/image";
import { SectionCta } from "@/components/section-cta";
import { SectionHeading, Highlight } from "@/components/section-heading";
import { WorkCarousel } from "@/components/work-carousel";
import styles from "./work-section.module.css";

type WorkItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const FEATURED_IMAGE = "/work-section/top-banner-map.png";

const WORK_ITEMS: WorkItem[] = [
  {
    title: "Plain Packaging Cigarettes",
    description: "Bringing plain cigarette packaging to the UK",
    image: "/work-section/work-1.png",
    href: "#",
  },
  {
    title: "National Office of Animal Health",
    description: "Working to secure a right to rent with pets",
    image: "/work-section/work-2.png",
    href: "#",
  },
  {
    title: "Eat, Play, Love",
    description: "Putting sensory food education on the political agenda",
    image: "/work-section/work-3.png",
    href: "#",
  },
  {
    title: "The Big Issue",
    description: "Helping The Big Issue to fight mass homelessness",
    image: "/work-section/work-4.png",
    href: "#",
  },
  {
    title: "Stronger Together",
    description: "Celebrating five years of Young KGC's impact",
    image: "/work-section/work-6.png",
    href: "#",
  },
  {
    title: "Elexon",
    description: "Powering the electricity market of tomorrow",
    image: "/work-section/work-5.png",
    href: "#",
  },
];

export function WorkSection() {
  return (
    <section className={styles.section} aria-label="Our work">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>OUR WORK</p>
            <SectionHeading className={styles.title}>
              IMPACT THROUGH{" "}
              <Highlight>ACTION</Highlight>
            </SectionHeading>
          </div>
          <SectionCta label="OUR CASE STUDIES" href="#" />
        </div>

        <div className={styles.featured}>
          <Image
            src={FEATURED_IMAGE}
            alt="Kids Meal Map"
            fill
            sizes="(max-width: 860px) 100vw, 1400px"
            className={styles.featuredImage}
          />
        </div>

        <WorkCarousel items={WORK_ITEMS} />
      </div>
    </section>
  );
}

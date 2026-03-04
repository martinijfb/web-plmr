import Link from "next/link";
import { ChevronIcon } from "@/components/chevron-icon";
import { SectionHeading, Highlight } from "@/components/section-heading";
import { NewsCarousel } from "@/components/news-carousel";
import styles from "./news-section.module.css";

type NewsItem = {
  title: string;
  date: string;
  image: string;
  href: string;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    title: "The Employment Rights Act: What Businesses Need to Know",
    date: "26 Feb 2026",
    image: "/news-section/news-image-1.png",
    href: "#",
  },
  {
    title: "A Lesson in Drama: Managing your reputation",
    date: "26 Feb 2026",
    image: "/news-section/news-image-2.png",
    href: "#",
  },
  {
    title: "The sporting events that need \u2013 and deserve \u2013 more attention",
    date: "20 Feb 2026",
    image: "/news-section/news-image-3.png",
    href: "#",
  },
  {
    title: "PLMR bolsters senior team with appointment of Reform UK adviser",
    date: "19 Feb 2026",
    image: "/news-section/news-image-4.png",
    href: "#",
  },
  {
    title: "Why Every Brand Is Posting Video (and Why Most of It Isn\u2019t Working)",
    date: "18 Feb 2026",
    image: "/news-section/news-image-5.png",
    href: "#",
  },
  {
    title: "When sports-led regeneration only works on matchdays, it has already failed",
    date: "12 Feb 2026",
    image: "/news-section/news-image-6.png",
    href: "#",
  },
];

export function NewsSection() {
  return (
    <section className={styles.section} aria-label="News and insights">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.carouselArea}>
            <NewsCarousel items={NEWS_ITEMS} />
          </div>

          <div className={styles.sidebar}>
            <SectionHeading className={styles.title}>
              <Highlight>WORDS</Highlight>
              {" "}OF
              <br />
              IMPACT
            </SectionHeading>

            <Link href="#" className={styles.cta}>
              <ChevronIcon
                direction="left"
                className={styles.ctaChevron}
              />
              <span className={styles.ctaLabel}>OUR BLOG</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

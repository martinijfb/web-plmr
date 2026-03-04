import Link from "next/link";
import { NewsCarousel } from "@/components/news-carousel";

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
    title: "The sporting events that need – and deserve – more attention",
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
    title: "Why Every Brand Is Posting Video (and Why Most of It Isn't Working)",
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
    <section className="news-section" aria-label="News and insights">
      <div className="news-section__inner">
        <div className="news-section__layout">
          <div className="news-section__carousel-area">
            <NewsCarousel items={NEWS_ITEMS} />
          </div>

          <div className="news-section__sidebar">
            <h2 className="news-section__title">
              <span className="news-section__title-highlight">WORDS</span>
              {" "}OF
              <br />
              IMPACT
            </h2>

            <Link href="#" className="news-section__cta">
              <svg
                className="news-section__cta-chevron"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
              <span className="news-section__cta-label">OUR BLOG</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

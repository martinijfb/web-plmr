"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronIcon } from "@/components/chevron-icon";
import { useCarousel } from "@/hooks/use-carousel";
import carousel from "./carousel.module.css";
import styles from "./news-carousel.module.css";

type NewsItem = {
  title: string;
  date: string;
  image: string;
  href: string;
};

type NewsCarouselProps = {
  items: NewsItem[];
};

export function NewsCarousel({ items }: NewsCarouselProps) {
  const { trackRef, scroll, onMouseEnter, onMouseLeave, isDimmed } =
    useCarousel();

  return (
    <div className={styles.carousel}>
      <div
        className={`${carousel.track} ${styles.track}`}
        ref={trackRef}
      >
        {items.map((item, i) => (
          <Link
            key={item.title}
            href={item.href}
            className={`${carousel.slide}${isDimmed(i) ? ` ${carousel.slideDimmed}` : ""}`}
            onMouseEnter={() => onMouseEnter(i)}
            onMouseLeave={onMouseLeave}
          >
            <div className={carousel.slideImageWrap}>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                sizes="(max-width: 700px) 72vw, (max-width: 1024px) 40vw, 26vw"
                className={carousel.slideImage}
              />
            </div>
            <div className={`${carousel.slideInfo} ${styles.slideInfo}`}>
              <div>
                <h3 className={carousel.slideTitle}>{item.title}</h3>
              </div>
              <p className={styles.slideDate}>{item.date}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={carousel.nav}>
        <button
          className={carousel.chevronBtn}
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          <ChevronIcon direction="left" size="clamp(1.4rem, 2vw, 1.8rem)" />
        </button>
        <button
          className={carousel.chevronBtn}
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          <ChevronIcon direction="right" size="clamp(1.4rem, 2vw, 1.8rem)" />
        </button>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useAutoScroll } from "@/hooks/use-auto-scroll";
import carousel from "./carousel.module.css";
import styles from "./awards-carousel.module.css";

type AwardItem = {
  badge: string;
  title: string;
  description: string;
  year: string;
  image: string;
};

type AwardsCarouselProps = {
  items: AwardItem[];
};

export function AwardsCarousel({ items }: AwardsCarouselProps) {
  const { trackRef } = useAutoScroll(0.5);

  return (
    <div className={styles.carousel}>
      <div
        className={`${carousel.track} ${styles.track}`}
        ref={trackRef}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className={`${carousel.slide} ${styles.slide}`}
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
                <h3 className={styles.slideBadge}>{item.badge}</h3>
                <p className={`${carousel.slideDesc} ${styles.slideDesc}`}>
                  {item.description}
                </p>
              </div>
              <p className={styles.slideYear}>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

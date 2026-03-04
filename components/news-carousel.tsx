"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

type NewsItem = {
  title: string;
  date: string;
  image: string;
  href: string;
};

type NewsCarouselProps = {
  items: NewsItem[];
};

const SCROLL_AMOUNT = 400;

export function NewsCarousel({ items }: NewsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = useCallback((direction: 1 | -1) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: direction * SCROLL_AMOUNT,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="news-carousel">
      <div className="news-carousel__track" ref={trackRef}>
        {items.map((item, i) => (
          <Link
            key={item.title}
            href={item.href}
            className={`news-carousel__slide${hoveredIndex !== null && hoveredIndex !== i ? " news-carousel__slide--dimmed" : ""}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="news-carousel__slide-image">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                sizes="(max-width: 700px) 72vw, (max-width: 1024px) 40vw, 26vw"
                className="news-carousel__image"
              />
            </div>
            <div className="news-carousel__slide-info">
              <div>
                <h3 className="news-carousel__slide-title">{item.title}</h3>
              </div>
              <p className="news-carousel__slide-date">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="news-carousel__nav">
        <button
          className="news-carousel__chevron"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          className="news-carousel__chevron"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

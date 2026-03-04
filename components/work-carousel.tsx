"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

type WorkItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

type WorkCarouselProps = {
  items: WorkItem[];
};

const SCROLL_AMOUNT = 400;

export function WorkCarousel({ items }: WorkCarouselProps) {
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
    <div className="work-carousel">
      <button
        className="work-carousel__chevron work-carousel__chevron--left"
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>

      <div className="work-carousel__track" ref={trackRef}>
        {items.map((item, i) => (
          <Link
            key={item.title}
            href={item.href}
            className={`work-carousel__slide${hoveredIndex !== null && hoveredIndex !== i ? " work-carousel__slide--dimmed" : ""}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="work-carousel__slide-image">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                sizes="(max-width: 700px) 72vw, (max-width: 1024px) 40vw, 26vw"
                className="work-carousel__image"
              />
            </div>
            <div className="work-carousel__slide-info">
              <h3 className="work-carousel__slide-title">{item.title}</h3>
              <p className="work-carousel__slide-desc">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <button
        className="work-carousel__chevron work-carousel__chevron--right"
        onClick={() => scroll(1)}
        aria-label="Scroll right"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}

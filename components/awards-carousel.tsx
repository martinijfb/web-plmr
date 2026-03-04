"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

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

const SCROLL_SPEED = 0.5;

export function AwardsCarousel({ items }: AwardsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    let animId: number;

    const animate = () => {
      const track = trackRef.current;
      if (track && !pausedRef.current) {
        track.scrollLeft += SCROLL_SPEED;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
          track.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseEnter = (i: number) => {
    pausedRef.current = true;
    setHoveredIndex(i);
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
    setHoveredIndex(null);
  };

  return (
    <div className="awards-carousel">
      <div className="awards-carousel__track" ref={trackRef}>
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`awards-carousel__slide${hoveredIndex !== null && hoveredIndex !== i ? " awards-carousel__slide--dimmed" : ""}`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="awards-carousel__slide-image">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                sizes="(max-width: 700px) 72vw, (max-width: 1024px) 40vw, 26vw"
                className="awards-carousel__image"
              />
            </div>
            <div className="awards-carousel__slide-info">
              <div>
                <h3 className="awards-carousel__slide-badge">{item.badge}</h3>
                <p className="awards-carousel__slide-desc">{item.description}</p>
              </div>
              <p className="awards-carousel__slide-year">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

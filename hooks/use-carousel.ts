"use client";

import { useRef, useState, useCallback } from "react";

const SCROLL_AMOUNT = 400;

export function useCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = useCallback((direction: 1 | -1) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: direction * SCROLL_AMOUNT,
      behavior: "smooth",
    });
  }, []);

  const onMouseEnter = useCallback((i: number) => setHoveredIndex(i), []);
  const onMouseLeave = useCallback(() => setHoveredIndex(null), []);

  const isDimmed = useCallback(
    (i: number) => hoveredIndex !== null && hoveredIndex !== i,
    [hoveredIndex],
  );

  return { trackRef, scroll, onMouseEnter, onMouseLeave, isDimmed };
}

"use client";

import { useRef, useEffect } from "react";

export function useAutoScroll(speed = 0.5) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;

    const animate = () => {
      const track = trackRef.current;
      if (track) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
          track.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [speed]);

  return { trackRef };
}

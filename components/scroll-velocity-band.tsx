"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ScrollVelocityBandProps = {
  text: string;
  reverse?: boolean;
  className?: string;
  campaign?: boolean;
};

export function ScrollVelocityBand({
  text,
  reverse = false,
  className = "",
  campaign = false,
}: ScrollVelocityBandProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const segment = segmentRef.current;

    if (!track || !segment) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      track.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    let raf = 0;
    let x = 0;
    let boost = 0;
    let targetBoost = 0;

    let lastAnimTime = performance.now();
    let lastScrollTime = lastAnimTime;
    let lastScrollY = window.scrollY;

    const baseSpeed = 44;
    const maxBoost = 180;
    const boostFactor = 0.95;
    const direction = reverse ? 1 : -1;

    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max(now - lastScrollTime, 16);
      const scrollDelta = window.scrollY - lastScrollY;
      const velocity = Math.abs(scrollDelta / dt) * 1000;

      targetBoost = Math.min(maxBoost, velocity * boostFactor);
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    };

    const animate = (time: number) => {
      const dt = Math.min((time - lastAnimTime) / 1000, 0.05);
      lastAnimTime = time;

      boost += (targetBoost - boost) * 0.08;
      targetBoost *= 0.94;

      x += direction * (baseSpeed + boost) * dt;

      const segmentWidth = segment.offsetWidth;
      if (segmentWidth > 0) {
        while (x <= -segmentWidth) {
          x += segmentWidth;
        }
        while (x >= 0) {
          x -= segmentWidth;
        }
      }

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = window.requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(raf);
    };
  }, [reverse]);

  const items = Array.from({ length: 8 }, (_, i) => (
    <span
      key={`${text}-${i}`}
      className="mx-4 inline-flex items-center gap-4 whitespace-nowrap lg:mx-5"
    >
      <span className="text-base font-semibold tracking-[0.01em] text-white sm:text-lg lg:text-[2.1rem]">
        {text}
      </span>
      {campaign ? (
        <span className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2">
          <Image
            src="/logos/the-road-to-2029.svg"
            alt="The Road to 2029 logo"
            width={108}
            height={30}
            className="h-6 w-auto lg:h-7"
          />
          <span className="h-5 w-px bg-white/35" aria-hidden />
          <Image
            src="/logos/ec-logo.svg"
            alt="Electoral Calculus logo"
            width={152}
            height={30}
            className="h-5 w-auto lg:h-6"
          />
        </span>
      ) : null}
    </span>
  ));

  return (
    <section
      className={`overflow-hidden border-y border-blumine-700/35 bg-gradient-to-r from-curious-blue-500 via-blumine-500 to-curious-blue-500 text-white ${className}`}
    >
      <div className="w-full py-4 lg:py-5">
        <div ref={trackRef} className="flex w-max will-change-transform">
          <div ref={segmentRef} className="shrink-0">
            {items}
          </div>
          <div aria-hidden className="shrink-0">
            {items}
          </div>
        </div>
      </div>
    </section>
  );
}

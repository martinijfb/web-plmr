"use client";

import { useEffect, useRef } from "react";
import { SectionCta } from "@/components/section-cta";

export function PurposeSection() {
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lines = linesRef.current.filter(Boolean) as HTMLSpanElement[];

    if (prefersReducedMotion) {
      lines.forEach((line) => {
        line.style.setProperty("--reveal", "0");
      });
      return;
    }

    const onScroll = () => {
      const vh = window.innerHeight;

      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const lineCenter = rect.top + rect.height / 2;
        const triggerStart = vh * 0.6;
        const triggerEnd = vh * 0.4;
        const progress = Math.min(
          1,
          Math.max(0, (triggerStart - lineCenter) / (triggerStart - triggerEnd))
        );
        line.style.setProperty("--reveal", String(progress));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const setLineRef = (i: number) => (el: HTMLSpanElement | null) => {
    linesRef.current[i] = el;
  };

  return (
    <section
      className="bg-[#f3f4f6] px-4 pb-[clamp(5.2rem,12vw,11.5rem)] pt-[clamp(4.8rem,11vw,10.5rem)]"
      aria-label="PLMR purpose statement"
    >
      <div className="mx-auto max-w-[1400px] text-center">
        <p className="purpose-reveal m-0 text-[clamp(1.35rem,2.7vw,3.4rem)] font-medium leading-[1.24] tracking-[0.005em] text-blumine-500 uppercase">
          <span className="purpose-reveal__line" ref={setLineRef(0)}>
            &ldquo;OUR{" "}
            <span className="inline-block font-bold text-curious-blue-500 transition-all duration-300 ease-out will-change-transform hover:scale-110 hover:[text-shadow:0_0_12px_rgba(31,157,216,0.65),0_0_24px_rgba(32,80,129,0.45)]">
              PURPOSE
            </span>{" "}
            IS TO MAKE A
          </span>
          <span className="purpose-reveal__line" ref={setLineRef(1)}>
            <span className="inline-block font-bold text-curious-blue-500 transition-all duration-300 ease-out will-change-transform hover:scale-110 hover:[text-shadow:0_0_12px_rgba(31,157,216,0.65),0_0_24px_rgba(32,80,129,0.45)]">
              POSITIVE
            </span>{" "}
            AND SUSTAINABLE{" "}
            <span className="inline-block font-bold text-curious-blue-500 transition-all duration-300 ease-out will-change-transform hover:scale-110 hover:[text-shadow:0_0_12px_rgba(31,157,216,0.65),0_0_24px_rgba(32,80,129,0.45)]">
              IMPACT
            </span>
          </span>
          <span className="purpose-reveal__line" ref={setLineRef(2)}>
            FOR OUR CLIENTS, OUR PEOPLE AND SOCIETY&rdquo;
          </span>
        </p>

        <SectionCta
          label="WHO WE ARE"
          href="#"
          className="mt-[clamp(2.4rem,4.8vw,5rem)]"
        />
      </div>
    </section>
  );
}

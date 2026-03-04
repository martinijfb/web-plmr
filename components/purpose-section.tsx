"use client";

import { useEffect, useRef } from "react";
import { SectionCta } from "@/components/section-cta";
import styles from "./purpose-section.module.css";

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
      className={styles.section}
      aria-label="PLMR purpose statement"
    >
      <div className={styles.inner}>
        <p className={styles.quote}>
          <span className={styles.revealLine} ref={setLineRef(0)}>
            &ldquo;OUR{" "}
            <span className={styles.highlightWord}>PURPOSE</span>{" "}
            IS TO MAKE A
          </span>
          <span className={styles.revealLine} ref={setLineRef(1)}>
            <span className={styles.highlightWord}>POSITIVE</span>{" "}
            AND SUSTAINABLE{" "}
            <span className={styles.highlightWord}>IMPACT</span>
          </span>
          <span className={styles.revealLine} ref={setLineRef(2)}>
            FOR OUR{" "}
            <span className={styles.highlightWord}>CLIENTS</span>
            , OUR{" "}
            <span className={styles.highlightWord}>PEOPLE</span>{" "}
            AND{" "}
            <span className={styles.highlightWord}>SOCIETY</span>
            &rdquo;
          </span>
        </p>

        <SectionCta
          label="WHO WE ARE"
          href="#"
          className={styles.cta}
        />
      </div>
    </section>
  );
}

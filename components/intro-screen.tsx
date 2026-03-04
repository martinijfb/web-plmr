"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./intro-screen.module.css";

const INTRO_TOTAL_MS = 2600;

export function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, INTRO_TOTAL_MS);

    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={styles.screen}
      role="dialog"
      aria-label="PLMR intro logo"
    >
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.waves} aria-hidden="true">
        <div className={styles.waveCore} />
        <div className={styles.waveRing1} />
        <div className={styles.waveRing2} />
        <div className={styles.waveHalo} />
      </div>

      <div className={styles.content}>
        <Image
          src="/logos/plmr-logo.webp"
          alt="PLMR logo"
          width={460}
          height={120}
          priority
          className={styles.logo}
        />
        <p className={styles.tagline}>
          Communications + Impact
        </p>
      </div>
    </div>
  );
}

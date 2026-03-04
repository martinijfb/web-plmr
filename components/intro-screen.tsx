"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      className="intro-screen"
      role="dialog"
      aria-label="PLMR intro logo"
    >
      <div className="intro-screen__bg" aria-hidden="true" />

      <div className="intro-waves" aria-hidden="true">
        <div className="intro-wave intro-wave--core" />
        <div className="intro-wave intro-wave--ring-1" />
        <div className="intro-wave intro-wave--ring-2" />
        <div className="intro-wave intro-wave--halo" />
      </div>

      <div className="intro-screen__content">
        <Image
          src="/logos/plmr-logo.webp"
          alt="PLMR logo"
          width={460}
          height={120}
          priority
          className="intro-screen__logo"
        />
        <p className="intro-screen__tagline">
          Communications + Impact
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import styles from "./home-hero.module.css";

const HERO_VIDEO_PATH = "/hero-section/hero-section.mp4";
const HERO_EYEBROW = "WE ARE PLMR";
const HERO_HEADLINE = "COMMUNICATION + IMPACT";
const HERO_SUBHEADING = "Strategic communications and public affairs agency";

export function HomeHero() {
  return (
    <section className={styles.hero} aria-label="PLMR introduction">
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={HERO_VIDEO_PATH} type="video/mp4" />
      </video>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>{HERO_EYEBROW}</p>
        <h1 className={styles.headline}>{HERO_HEADLINE}</h1>
        <p className={styles.subheading}>{HERO_SUBHEADING}</p>
        <Link href="#" className={styles.button}>
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
}

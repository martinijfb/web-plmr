import Link from "next/link";

const HERO_VIDEO_PATH = "/hero-section/hero-section.mp4";
const HERO_EYEBROW = "WE ARE PLMR";
const HERO_HEADLINE = "COMMUNICATION + IMPACT";
const HERO_SUBHEADING = "Strategic communications and public affairs agency";

export function HomeHero() {
  return (
    <section className="home-hero" aria-label="PLMR introduction">
      <video
        className="home-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={HERO_VIDEO_PATH} type="video/mp4" />
      </video>

      <div className="home-hero__overlay" aria-hidden="true" />

      <div className="home-hero__content">
        <p className="home-hero__eyebrow">{HERO_EYEBROW}</p>
        <h1 className="home-hero__headline">{HERO_HEADLINE}</h1>
        <p className="home-hero__subheading">{HERO_SUBHEADING}</p>
        <Link href="#" className="home-hero__button">
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
}

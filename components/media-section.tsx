import { SectionCta } from "@/components/section-cta";

const MEDIA_VIDEO_PATH = "/media-appearences/media-apprearences.mp4";

export function MediaSection() {
  return (
    <section className="media-section" aria-label="PLMR media appearances">
      <video
        className="media-section__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={MEDIA_VIDEO_PATH} type="video/mp4" />
      </video>

      <div className="media-section__overlay" aria-hidden="true" />

      <div className="media-section__content">
        <h2 className="media-section__title">
          <span>IN THE </span>
          <span className="media-section__title-highlight">MEDIA</span>
        </h2>

        <SectionCta
          label="MEDIA APPEARANCES"
          href="#"
          className="media-section__cta"
        />
      </div>
    </section>
  );
}

import { SectionCta } from "@/components/section-cta";
import { SectionHeading, Highlight } from "@/components/section-heading";
import styles from "./media-section.module.css";

const MEDIA_VIDEO_PATH = "/media-appearences/media-apprearences.mp4";

export function MediaSection() {
  return (
    <section className={styles.section} aria-label="PLMR media appearances">
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={MEDIA_VIDEO_PATH} type="video/mp4" />
      </video>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <SectionHeading color="white" className={styles.title}>
          <span>IN THE </span>
          <Highlight>MEDIA</Highlight>
        </SectionHeading>

        <SectionCta
          label="MEDIA APPEARANCES"
          href="#"
          variant="light"
        />
      </div>
    </section>
  );
}

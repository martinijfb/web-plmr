import Image from "next/image";
import { SectionCta } from "@/components/section-cta";
import { SectionHeading, Highlight } from "@/components/section-heading";
import styles from "./initiatives-section.module.css";

export function InitiativesSection() {
  return (
    <section className={styles.section} aria-label="Positive impact initiatives">
      <div className={styles.band}>
        <div className={styles.inner}>
          <div className={styles.layout}>
            <div className={styles.content}>
              <SectionHeading color="white" className={styles.title}>
                POSITIVE IMPACT{" "}
                <Highlight>INITIATIVES</Highlight>
              </SectionHeading>
              <p className={styles.description}>
                Our social values guide how we work, support our communities, and
                create long term impact.
              </p>
              <SectionCta
                label="OUR VALUES"
                href="#"
                variant="light"
              />
            </div>

            <div className={styles.badge}>
              <Image
                src="/logos/b-corp-badge.png"
                alt="PLMR is proudly B Corp Certified"
                width={500}
                height={500}
                className={styles.badgeImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

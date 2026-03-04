import Image from "next/image";
import { SectionCta } from "@/components/section-cta";

export function InitiativesSection() {
  return (
    <section className="initiatives-section" aria-label="Positive impact initiatives">
      <div className="initiatives-section__band">
        <div className="initiatives-section__inner">
          <div className="initiatives-section__layout">
            <div className="initiatives-section__content">
              <h2 className="initiatives-section__title">
                POSITIVE IMPACT{" "}
                <span className="initiatives-section__title-highlight">
                  INITIATIVES
                </span>
              </h2>
              <p className="initiatives-section__description">
                Our social values guide how we work, support our communities, and
                create long term impact.
              </p>
              <SectionCta
                label="OUR VALUES"
                href="#"
                className="initiatives-section__cta"
              />
            </div>

            <div className="initiatives-section__badge">
              <Image
                src="/logos/b-corp-badge.png"
                alt="PLMR is proudly B Corp Certified"
                width={500}
                height={500}
                className="initiatives-section__badge-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

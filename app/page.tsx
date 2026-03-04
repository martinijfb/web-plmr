import { AwardsSection } from "@/components/awards-section";
import { HomeHero } from "@/components/home-hero";
import { InitiativesSection } from "@/components/initiatives-section";
import { MediaSection } from "@/components/media-section";
import { NewsSection } from "@/components/news-section";
import { PurposeSection } from "@/components/purpose-section";
import { ScrollVelocityBand } from "@/components/scroll-velocity-band";
import { ServicesSection } from "@/components/services-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ScrollVelocityBand
        text="Exclusive polling of EVERY seat in Britain until GE2029"
        campaign
      />
      <PurposeSection />
      <ServicesSection />
      <WorkSection />
      <MediaSection />
      <NewsSection />
      <InitiativesSection />
      <AwardsSection />
    </>
  );
}

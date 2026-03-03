import Link from "next/link";
import { BlueCapsuleMosaic } from "@/components/blue-capsule-mosaic";

type ServiceImage = {
  src: string;
  alt: string;
  href: string;
};

const SERVICE_IMAGES: ServiceImage[] = [
  { src: "/services-section/Digital-Marketing.png", alt: "Digital marketing", href: "#" },
  { src: "/services-section/Planning-Comms.png", alt: "Planning communications", href: "#" },
  { src: "/services-section/Public-Affairs.png", alt: "Public affairs", href: "#" },
  { src: "/services-section/SEO-UX.png", alt: "SEO and UX", href: "#" },
  { src: "/services-section/Video-Production.png", alt: "Video production", href: "#" },
  { src: "/services-section/Advocacy.png", alt: "Advocacy", href: "#" },
  { src: "/services-section/Graphic-Design.png", alt: "Graphic design", href: "#" },
  { src: "/services-section/Media-Training.png", alt: "Media training", href: "#" },
  { src: "/services-section/Email-Marketing.png", alt: "Email marketing", href: "#" },
  { src: "/services-section/Photography.png", alt: "Photography", href: "#" },
  { src: "/services-section/Web-Development.png", alt: "Web development", href: "#" },
  { src: "/services-section/Social-Media-Management.png", alt: "Social media management", href: "#" },
  { src: "/services-section/copywriting.png", alt: "Copywriting", href: "#" },
  { src: "/services-section/Crisis-Comms.png", alt: "Crisis communications", href: "#" },
  { src: "/services-section/Events-Management.png", alt: "Events management", href: "#" },
  { src: "/services-section/Podcast.png", alt: "Podcast", href: "#" },
  { src: "/services-section/Public%20relations.png", alt: "Public relations", href: "#" },
];

export function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#f3f4f6] py-[clamp(1.6rem,3vw,2.8rem)] md:min-h-[clamp(520px,50vw,780px)]"
      aria-label="PLMR services"
    >
      <div className="pointer-events-none relative z-10 mx-auto max-w-[1800px] px-4 sm:px-8 md:flex md:items-center md:min-h-[clamp(520px,50vw,780px)]">
        <div className="pointer-events-auto pt-[clamp(2rem,2.6vw,3.8rem)] md:w-[40%] md:pt-0 md:pl-[clamp(0.4rem,2.5vw,3rem)]">
          <h2 className="m-0 flex flex-col gap-[0.1em] text-[clamp(1.35rem,2.7vw,3.4rem)] font-semibold leading-[1.12] tracking-[0.005em] text-blumine-500 uppercase">
            <span>WE PROVIDE A RANGE</span>
            <span>OF COMMUNICATIONS</span>
            <span className="text-curious-blue-500">SERVICES</span>
          </h2>

          <Link
            href="#"
            className="mt-[clamp(2rem,4.2vw,3.8rem)] inline-flex items-center gap-[clamp(0.7rem,1.35vw,1.45rem)] text-curious-blue-500 no-underline focus-visible:rounded-md focus-visible:outline-[3px] focus-visible:outline-[#1f70ce] focus-visible:outline-offset-4"
          >
            <span className="inline-flex flex-col items-start text-[clamp(0.95rem,1.15vw,1.65rem)] leading-[1.06] font-medium">
              Learn more about
              <span className="mt-[0.12em] text-[0.65em] font-bold tracking-[0.035em]">
                SERVICES
              </span>
            </span>
            <span className="text-[clamp(1.4rem,2vw,2.4rem)] leading-[0.9] font-light text-blumine-500" aria-hidden>
              &#8250;
            </span>
          </Link>
        </div>
      </div>

      <BlueCapsuleMosaic
        images={SERVICE_IMAGES}
        className="mt-8 md:absolute md:right-0 md:top-1/2 md:mt-0 md:w-[60vw] md:-translate-y-1/2"
      />
    </section>
  );
}

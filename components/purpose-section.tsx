import Link from "next/link";

export function PurposeSection() {
  return (
    <section
      className="bg-[#f3f4f6] px-4 pb-[clamp(5.2rem,12vw,11.5rem)] pt-[clamp(4.8rem,11vw,10.5rem)]"
      aria-label="PLMR purpose statement"
    >
      <div className="mx-auto max-w-[1400px] text-center">
        <p className="m-0 text-[clamp(1.35rem,2.7vw,3.4rem)] font-medium leading-[1.24] tracking-[0.005em] text-blumine-500 uppercase">
          <span className="block">
            &ldquo;OUR{" "}
            <span className="inline-block font-bold text-curious-blue-500 transition-all duration-300 ease-out will-change-transform hover:scale-110 hover:[text-shadow:0_0_12px_rgba(31,157,216,0.65),0_0_24px_rgba(32,80,129,0.45)]">
              PURPOSE
            </span>{" "}
            IS TO MAKE A
          </span>
          <span className="block">
            <span className="inline-block font-bold text-curious-blue-500 transition-all duration-300 ease-out will-change-transform hover:scale-110 hover:[text-shadow:0_0_12px_rgba(31,157,216,0.65),0_0_24px_rgba(32,80,129,0.45)]">
              POSITIVE
            </span>{" "}
            AND SUSTAINABLE{" "}
            <span className="inline-block font-bold text-curious-blue-500 transition-all duration-300 ease-out will-change-transform hover:scale-110 hover:[text-shadow:0_0_12px_rgba(31,157,216,0.65),0_0_24px_rgba(32,80,129,0.45)]">
              IMPACT
            </span>
          </span>
          <span className="block">
            FOR OUR CLIENTS, OUR PEOPLE AND SOCIETY&rdquo;
          </span>
        </p>

        <Link
          href="#"
          className="group mt-[clamp(2.4rem,4.8vw,5rem)] inline-flex w-fit items-center gap-[clamp(0.8rem,1.4vw,1.6rem)] text-curious-blue-500 no-underline focus-visible:rounded-md focus-visible:outline-[3px] focus-visible:outline-[#1f70ce] focus-visible:outline-offset-4"
        >
          <span className="inline-flex flex-col items-start text-left text-[clamp(0.95rem,1.15vw,1.65rem)] leading-[1.06] font-medium">
            Learn more about
            <span className="mt-[0.18em] text-[0.7em] font-bold tracking-[0.03em]">
              WHO WE ARE
            </span>
          </span>
          <span
            className="text-[clamp(1.4rem,2vw,2.4rem)] leading-[0.9] font-light text-blumine-500 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden
          >
            &#8250;
          </span>
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";

type SectionCtaProps = {
  label: string;
  href: string;
  className?: string;
};

export function SectionCta({ label, href, className = "" }: SectionCtaProps) {
  return (
    <Link
      href={href}
      className={`section-cta group ${className}`}
    >
      <span className="section-cta__label">{label}</span>
      <svg
        className="section-cta__chevron"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

import Link from "next/link";
import { ChevronIcon } from "@/components/chevron-icon";
import styles from "./section-cta.module.css";

type SectionCtaProps = {
  label: string;
  href: string;
  variant?: "default" | "light";
  className?: string;
};

export function SectionCta({
  label,
  href,
  variant = "default",
  className = "",
}: SectionCtaProps) {
  return (
    <Link
      href={href}
      className={`${styles.cta}${variant === "light" ? ` ${styles.light}` : ""}${className ? ` ${className}` : ""}`}
    >
      <span className={styles.label}>{label}</span>
      <ChevronIcon className={styles.chevron} strokeWidth={3} />
    </Link>
  );
}

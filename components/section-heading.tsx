import styles from "./section-heading.module.css";

type SectionHeadingProps = {
  children: React.ReactNode;
  color?: "default" | "white";
  className?: string;
};

export function SectionHeading({
  children,
  color = "default",
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={`${styles.title}${className ? ` ${className}` : ""}`}
      data-color={color !== "default" ? color : undefined}
    >
      {children}
    </h2>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return <span className={styles.highlight}>{children}</span>;
}

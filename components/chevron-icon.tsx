type ChevronIconProps = {
  direction?: "left" | "right";
  size?: string;
  strokeWidth?: number;
  className?: string;
};

export function ChevronIcon({
  direction = "right",
  size = "1em",
  strokeWidth = 2.5,
  className,
}: ChevronIconProps) {
  const d = direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={className}
    >
      <path d={d} />
    </svg>
  );
}

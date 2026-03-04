import styles from "./site-footer.module.css";

export function SocialIcon({ label }: { label: string }) {
  const key = label.toLowerCase();

  if (key === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={styles.socialIcon}>
        <path d="M18.9 3h3.6l-7.9 9.1L24 21h-7.4l-5.8-7.6L4.2 21H.6l8.4-9.7L0 3h7.6l5.2 6.9L18.9 3Z" />
      </svg>
    );
  }

  if (key === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={styles.socialIcon}>
        <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21h-4V9Z" />
      </svg>
    );
  }

  if (key === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className={`${styles.socialIcon} ${styles.socialIconStroke}`}
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.4"
          cy="6.7"
          r="0.9"
          className={styles.socialIconDot}
        />
      </svg>
    );
  }

  if (key === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={styles.socialIcon}>
        <path d="M23 12s0-3.3-.4-4.8a2.6 2.6 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.4A2.6 2.6 0 0 0 1.4 7.2C1 8.7 1 12 1 12s0 3.3.4 4.8a2.6 2.6 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8ZM9.5 15.5v-7L16 12l-6.5 3.5Z" />
      </svg>
    );
  }

  if (key === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={styles.socialIcon}>
        <path d="M16.5 3c.3 1.9 1.4 3.2 3.2 3.6v3.1a7 7 0 0 1-3.2-.9v6.2a5.9 5.9 0 1 1-5.1-5.9v3.2a2.7 2.7 0 1 0 1.9 2.6V3h3.2Z" />
      </svg>
    );
  }

  return null;
}

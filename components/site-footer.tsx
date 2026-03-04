import Link from "next/link";

type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

type SocialLink = {
  label: string;
  href: string;
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "We are PLMR",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "#" },
      { label: "Locations", href: "#" },
      { label: "Events", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Awards", href: "#" },
      { label: "News", href: "#" },
      { label: "Media", href: "#" },
      { label: "Podcasts", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Social Values", href: "#" },
      { label: "The Policy Hub", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Grievance Policy", href: "#" },
      { label: "Italiano", href: "#" },
    ],
  },
  {
    title: "Sectors",
    links: [
      { label: "Local Government", href: "#" },
      { label: "Health and Care", href: "#" },
      { label: "Education", href: "#" },
      { label: "Built Environment", href: "#" },
      { label: "Charities and Third Sector", href: "#" },
      { label: "Transport and Infrastructure", href: "#" },
      { label: "Energy and Sustainability", href: "#" },
      { label: "Technology and Science", href: "#" },
      { label: "Professional Services", href: "#" },
      { label: "Consumer", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Public Affairs", href: "#" },
      { label: "Media and Communications", href: "#" },
      { label: "Crisis Communications", href: "#" },
      { label: "Strategic Communications", href: "#" },
      { label: "Public Consultation", href: "#" },
      { label: "Digital", href: "#" },
      { label: "Research and Insights", href: "#" },
      { label: "Integrated Campaigns", href: "#" },
      { label: "Media Training", href: "#" },
      { label: "Message Development and Narrative Building", href: "#" },
      { label: "Event Management", href: "#" },
      { label: "Political Monitoring", href: "#" },
      { label: "Content and Creative", href: "#" },
      { label: "SEO and Paid Search", href: "#" },
      { label: "International", href: "#" },
    ],
  },
  {
    title: "Group",
    links: [
      { label: "The PLMR Group", href: "#" },
      { label: "PLMR Advent", href: "#" },
      { label: "PLMR Genesis", href: "#" },
      { label: "PLMR Healthcomms", href: "#" },
      { label: "PLMR Mango", href: "#" },
      { label: "PLMR Snapdragon", href: "#" },
      { label: "PLMR East Midlands", href: "#" },
      { label: "PLMR East of England", href: "#" },
      { label: "PLMR South West", href: "#" },
      { label: "PLMR Scotland", href: "#" },
      { label: "PLMR North", href: "#" },
      { label: "Global Communications Alliance", href: "#" },
    ],
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
];

const CONTACT = {
  phone: "020 7622 9529",
  email: "info@plmr.co.uk",
  copyright: "\u00A9 2026 PLMR.",
};

function SocialIcon({ label }: { label: string }) {
  const key = label.toLowerCase();

  if (key === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="site-footer__social-icon">
        <path d="M18.9 3h3.6l-7.9 9.1L24 21h-7.4l-5.8-7.6L4.2 21H.6l8.4-9.7L0 3h7.6l5.2 6.9L18.9 3Z" />
      </svg>
    );
  }

  if (key === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="site-footer__social-icon">
        <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21h-4V9Z" />
      </svg>
    );
  }

  if (key === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="site-footer__social-icon site-footer__social-icon--stroke"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.4"
          cy="6.7"
          r="0.9"
          className="site-footer__social-icon-dot"
        />
      </svg>
    );
  }

  if (key === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="site-footer__social-icon">
        <path d="M23 12s0-3.3-.4-4.8a2.6 2.6 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.4A2.6 2.6 0 0 0 1.4 7.2C1 8.7 1 12 1 12s0 3.3.4 4.8a2.6 2.6 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8ZM9.5 15.5v-7L16 12l-6.5 3.5Z" />
      </svg>
    );
  }

  if (key === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="site-footer__social-icon">
        <path d="M16.5 3c.3 1.9 1.4 3.2 3.2 3.6v3.1a7 7 0 0 1-3.2-.9v6.2a5.9 5.9 0 1 1-5.1-5.9v3.2a2.7 2.7 0 1 0 1.9 2.6V3h3.2Z" />
      </svg>
    );
  }

  return null;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div
        aria-hidden
        className="site-footer__glow site-footer__glow--right"
      />
      <div
        aria-hidden
        className="site-footer__glow site-footer__glow--left"
      />
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__columns">
            {FOOTER_COLUMNS.map((column) => (
              <section key={column.title}>
                <h2 className="site-footer__column-title">{column.title}</h2>
                <ul className="site-footer__column-list">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="site-footer__link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="site-footer__contact">
            <div className="site-footer__contact-accent" aria-hidden="true" />
            <h2 className="site-footer__contact-title">Contact</h2>
            <p className="site-footer__phone">
              <a href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}>
                {CONTACT.phone}
              </a>
            </p>
            <p className="site-footer__email">
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>

            <div className="site-footer__social">
              <p className="site-footer__social-title">Social</p>
              <ul className="site-footer__social-list" aria-label="Social links">
                {SOCIAL_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="site-footer__social-link"
                      aria-label={item.label}
                    >
                      <SocialIcon label={item.label} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <p className="site-footer__copyright">{CONTACT.copyright}</p>
      </div>
    </footer>
  );
}

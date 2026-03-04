import Link from "next/link";
import { SocialIcon } from "@/components/social-icon";
import styles from "./site-footer.module.css";

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

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div
        aria-hidden
        className={styles.glowRight}
      />
      <div
        aria-hidden
        className={styles.glowLeft}
      />
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.columns}>
            {FOOTER_COLUMNS.map((column) => (
              <section key={column.title}>
                <h2 className={styles.columnTitle}>{column.title}</h2>
                <ul className={styles.columnList}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className={styles.contact}>
            <div className={styles.contactAccent} aria-hidden="true" />
            <h2 className={styles.contactTitle}>Contact</h2>
            <p className={styles.phone}>
              <a href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}>
                {CONTACT.phone}
              </a>
            </p>
            <p className={styles.email}>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>

            <div className={styles.social}>
              <p className={styles.socialTitle}>Social</p>
              <ul className={styles.socialList} aria-label="Social links">
                {SOCIAL_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={styles.socialLink}
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

        <p className={styles.copyright}>{CONTACT.copyright}</p>
      </div>
    </footer>
  );
}

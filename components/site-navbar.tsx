import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "ABOUT US", href: "#" },
  { label: "SERVICES", href: "#" },
  { label: "SECTORS", href: "#" },
  { label: "CASE STUDIES", href: "#" },
  { label: "NEWS", href: "#" },
  { label: "EVENTS", href: "#" },
  { label: "LOCATIONS", href: "#" },
  { label: "CAREERS", href: "#" },
];

export function SiteNavbar() {
  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <Link href="#" className="site-navbar__brand" aria-label="PLMR home">
          <Image
            src="/logos/plmr-logo.webp"
            alt="PLMR logo"
            width={230}
            height={64}
            priority
          />
        </Link>

        <nav className="site-navbar__menu" aria-label="Primary">
          <ul className="site-navbar__nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="site-navbar__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="#" className="site-navbar__cta">
          CONTACT US
        </Link>
      </div>
    </header>
  );
}

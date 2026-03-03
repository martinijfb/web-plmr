"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* Lock body scroll while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  /* Close mobile menu if viewport crosses the desktop breakpoint */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1181px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`site-navbar${menuOpen ? " site-navbar--menu-open" : ""}`}
    >
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

        <nav
          className={`site-navbar__menu${menuOpen ? " site-navbar__menu--open" : ""}`}
          aria-label="Primary"
        >
          <ul className="site-navbar__nav">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.label}
                style={{ "--nav-i": i } as React.CSSProperties}
              >
                <Link
                  href={item.href}
                  className="site-navbar__link"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA inside the dropdown (mobile only) */}
          <Link
            href="#"
            className="site-navbar__cta site-navbar__cta--mobile"
            onClick={closeMenu}
          >
            CONTACT US
          </Link>
        </nav>

        {/* CTA in the top bar (desktop only) */}
        <Link href="#" className="site-navbar__cta site-navbar__cta--desktop">
          CONTACT US
        </Link>

        <button
          className={`site-navbar__hamburger${menuOpen ? " site-navbar__hamburger--active" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="site-navbar__hamburger-line" />
          <span className="site-navbar__hamburger-line" />
          <span className="site-navbar__hamburger-line" />
        </button>
      </div>

      {/* Click-to-close backdrop */}
      <div
        className="site-navbar__backdrop"
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
}

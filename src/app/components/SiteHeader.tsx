"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Our philosophy" },
  { href: "#experiences", label: "Experiences" },
  { href: "#services", label: "The menu" },
  { href: "#contact", label: "Find us" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled || menuOpen ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}>
        <a className="header-brand" href="#top" onClick={() => setMenuOpen(false)} aria-label="S DIVA, return to the top">
          <Image src="/images/sdiva-emblem-transparent.webp" alt="" width={54} height={47} className="brand-mark" priority />
          <span className="brand-words"><strong>S DIVA</strong><small>PREMIUM SALON & SPA</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="header-call" href="tel:+918249000620"><span>BOOK YOUR VISIT</span><span aria-hidden="true">↗</span></a>
          <button type="button" className="nav-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
            <span className="toggle-lines"><i /><i /></span><span className="toggle-label">{menuOpen ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={`mobile-menu-panel ${menuOpen ? "visible" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <span className="overline">EXPLORE S DIVA / 01—04</span>
          <nav aria-label="Mobile navigation">
            {links.map((link, index) => <a key={link.href} href={link.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{link.label}<b aria-hidden="true">↗</b></a>)}
          </nav>
          <div className="mobile-menu-footer"><span>CHANDRASEKHARPUR · BHUBANESWAR</span><a tabIndex={menuOpen ? 0 : -1} href="tel:+918249000620">+91 82490 00620 ↗</a></div>
        </div>
      </div>
    </>
  );
}

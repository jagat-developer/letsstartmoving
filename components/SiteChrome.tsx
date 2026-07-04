"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { contact, navLinks, serviceGroups } from "@/lib/site-data";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="topbar">
          <a href={contact.primaryEmailHref}>
            <Mail size={15} aria-hidden="true" />
            {contact.primaryEmail}
          </a>
          <a href={contact.phoneHref}>
            <Phone size={15} aria-hidden="true" />
            {contact.phone}
          </a>
          <span>
            <MapPin size={15} aria-hidden="true" />
            {contact.address}
          </span>
        </div>

        <nav className="nav-shell" aria-label="Main navigation">
          <Link className="brand" href="/" aria-label="Let's Start Moving home" onClick={closeMenu}>
            <Image
              src="/brand-assets/lsm-ca-logo.png"
              alt="Let's Start Moving logo"
              width={147}
              height={99}
              priority
            />
          </Link>

          <div className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={pathname === link.href ? "active" : ""}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <a className="phone-link" href={contact.phoneHref}>
              <Phone size={18} aria-hidden="true" />
              Call now
            </a>
            <Link className="btn btn-primary nav-quote" href="/get-a-quote">
              Get a Quote
            </Link>
            <button
              className="icon-button menu-button"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
            <div className="mobile-services">
              <strong>Services</strong>
              {serviceGroups.map((group) => (
                <div key={group.title}>
                  <span>{group.title}</span>
                  {group.items.slice(0, 6).map((item) => (
                    <Link key={item.slug} href={`/${item.slug}`} onClick={closeMenu}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <Link className="btn btn-primary" href="/get-a-quote" onClick={closeMenu}>
              Request a Free Quote
            </Link>
          </div>
        ) : null}
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-brand">
          <Image
            src="/brand-assets/lsm-ca-logo.png"
            alt="Let's Start Moving logo"
            width={147}
            height={99}
          />
          <p>
            Your trusted partner for hassle-free relocations across Ottawa and
            surrounding areas. Professional, reliable, and budget-friendly.
          </p>
        </div>
        <div>
          <h2>Quick links</h2>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Services</h2>
          <Link href="/local-moving">Local moving</Link>
          <Link href="/long-distance-moving-ottawa">Long distance</Link>
          <Link href="/packing-services">Packing services</Link>
          <Link href="/commercial-services">Commercial moving</Link>
          <Link href="/residential-services">Residential moving</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.primaryEmailHref}>{contact.primaryEmail}</a>
          <a href={contact.secondaryEmailHref}>{contact.secondaryEmail}</a>
          <span>{contact.addressLong}</span>
          <span>{contact.hours}</span>
        </div>
      </footer>

      <a className="floating-call" href={contact.phoneHref} aria-label="Call Let's Start Moving">
        <Phone size={20} aria-hidden="true" />
      </a>
    </>
  );
}

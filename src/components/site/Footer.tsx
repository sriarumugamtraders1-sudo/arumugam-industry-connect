import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, User } from "lucide-react";

import { PRODUCTS } from "@/lib/catalog";
import { COMPANY, NAV_LINKS } from "@/lib/site";

import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="blueprint-grid bg-navy-deep text-navy-muted">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Industrial component supply and engineering job-work from Hosur, Tamil Nadu. We welcome
            RFQs and vendor registration enquiries from OEMs, plants and procurement teams.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-navy-foreground">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-navy-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/request-quote" className="transition-colors hover:text-navy-foreground">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-navy-foreground">
            Products
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to="/products" hash={p.slug} className="transition-colors hover:text-navy-foreground">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-navy-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-signal" />
              <span>
                {COMPANY.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <User className="size-4 shrink-0 text-signal" />
              {COMPANY.contactPerson}
            </li>
            <li>
              <a href={`tel:${COMPANY.mobileTel}`} className="flex gap-3 transition-colors hover:text-navy-foreground">
                <Phone className="size-4 shrink-0 text-signal" />
                {COMPANY.mobileDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex gap-3 break-all transition-colors hover:text-navy-foreground">
                <Mail className="size-4 shrink-0 text-signal" />
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-page flex flex-col gap-3 py-6 pr-20 text-xs sm:flex-row sm:pr-24 sm:items-center sm:justify-between">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <Link to="/privacy-policy" className="transition-colors hover:text-navy-foreground">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

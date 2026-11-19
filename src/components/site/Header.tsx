import { Link } from "@tanstack/react-router";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { COMPANY, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden bg-navy-deep text-navy-muted md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <span className="font-mono tracking-wider">GSTIN: {COMPANY.gstin}</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.mobileTel}`} className="flex items-center gap-1.5 transition-colors hover:text-navy-foreground">
              <Phone className="size-3.5" /> {COMPANY.mobileDisplay}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 transition-colors hover:text-navy-foreground">
              <Mail className="size-3.5" /> {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 border-b bg-background/95 backdrop-blur transition-shadow",
          scrolled ? "shadow-card" : "shadow-none",
        )}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="relative px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-navy data-[status=active]:text-navy after:absolute after:inset-x-3 after:-bottom-[1.05rem] after:h-0.5 after:scale-x-0 after:bg-signal after:transition-transform data-[status=active]:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="navy" size="lg">
              <Link to="/request-quote">Request a Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-sm border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t bg-background lg:hidden">
            <nav className="container-page flex flex-col py-3" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-base font-medium text-foreground/85 data-[status=active]:text-navy"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 grid gap-2 pb-2">
                <Button asChild variant="navy" size="xl">
                  <Link to="/request-quote" onClick={() => setOpen(false)}>
                    Request a Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <a href={`tel:${COMPANY.mobileTel}`}>
                    <Phone /> Call {COMPANY.mobileDisplay}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumb,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  crumb: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
      <img src={image} alt="" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-page-hero-overlay" />
      <div className="container-page py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-mono text-xs text-navy-muted">
          <Link to="/" className="hover:text-navy-foreground">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-navy-foreground">{crumb}</span>
        </nav>
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.08] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-muted md:text-lg">{description}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-navy md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import heroImage from "@/assets/svc-machining.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/catalog";

const TITLE = "Services | Job-Work, Fabrication, Machining & Component Supply – Sri Arumugam Traders";
const DESCRIPTION =
  "Engineering job-work, fabrication, machining, industrial component sourcing and supply, and custom component requirements from Hosur, Tamil Nadu.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const STEPS = [
  { n: "01", t: "Share your requirement", d: "Send your RFQ, drawing, sample details or component list." },
  { n: "02", t: "Technical review", d: "We review material, size, tolerance and quantity." },
  { n: "03", t: "Quotation", d: "You receive a clear quotation with scope and timelines." },
  { n: "04", t: "Execution & supply", d: "Work is carried out or items supplied as agreed." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our services"
        title="Engineering job-work and industrial supply services"
        description="From drawing-based job-work to sourcing hard-to-find components, we handle industrial requirements with a focus on specification and communication."
        image={heroImage}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-16 md:gap-24">
          {SERVICES.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid grid-cols-1 scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img src={s.image} alt={s.name} loading={i === 0 ? "eager" : "lazy"} className="aspect-[3/2] w-full rounded-md object-cover shadow-card" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-steel">Service {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-3xl font-bold text-navy">{s.name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-foreground/85">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-signal" /> {pt}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="navy" size="lg" className="mt-8 h-auto min-h-11 whitespace-normal py-3 text-left">
                  <Link to="/request-quote" search={{ product: s.name }}>
                    Enquire about {s.name.toLowerCase()} <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="steel-grid border-t bg-secondary py-20">
        <div className="container-page">
          <SectionHeading eyebrow="How we work" title="From enquiry to delivery" align="center" />
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-md border bg-card p-6 shadow-card">
                <span className="font-display text-3xl font-extrabold text-signal">{s.n}</span>
                <h3 className="mt-3 font-bold text-navy">{s.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

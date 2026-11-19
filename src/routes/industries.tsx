import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/ind-oilgas.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/catalog";

const TITLE = "Industries We Serve | Turbine, Power, Oil & Gas, Process – Sri Arumugam Traders";
const DESCRIPTION =
  "Industrial components and engineering job-work for turbine and turbo machinery, power generation, oil and gas, process, manufacturing and maintenance.";

export const Route = createFileRoute("/industries")({
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
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        crumb="Industries"
        eyebrow="Industries we serve"
        title="Components and job-work for industrial sectors"
        description="We work with buyers and engineering teams in sectors where dependable components and specification-led work matter."
        image={heroImage}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <article
              key={ind.slug}
              id={ind.slug}
              className="group flex scroll-mt-28 flex-col overflow-hidden rounded-md border bg-card shadow-card"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h2 className="text-2xl font-bold text-navy">{ind.name}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{ind.description}</p>
                <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">Typical requirements</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {ind.needs.map((n) => (
                    <li key={n} className="rounded-sm bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                      {n}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 md:mt-auto md:pt-6">
                  <Button asChild variant="link" className="px-0 text-navy">
                    <Link to="/request-quote">
                      Send an RFQ <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Don't see your industry listed?" description="We support a wide range of industrial applications. Share your requirement and we will let you know how we can help." />
    </>
  );
}

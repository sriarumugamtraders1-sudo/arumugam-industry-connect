import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle } from "lucide-react";

import heroImage from "@/assets/svc-supply.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/catalog";

const TITLE = "Products | Flanges, Valves, Pipe Fittings & Components – Sri Arumugam Traders";
const DESCRIPTION =
  "Product catalogue: industrial flanges, valves, pipes and fittings, sight flow indicators, non-return, globe and safety relief valves, and custom engineering components.";

export const Route = createFileRoute("/products")({
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
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="Products"
        eyebrow="Product catalogue"
        title="Industrial products for supply"
        description="Browse our product categories. Specifications are supplied as per your requirement — send us your RFQ even if your exact item is not listed."
        image={heroImage}
      />

      <div className="sticky top-[4.5rem] z-30 border-b bg-background/95 backdrop-blur">
        <div className="container-page flex gap-2 overflow-x-auto py-3">
          {PRODUCTS.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="shrink-0 rounded-sm border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-navy hover:text-navy"
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-8">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-36 overflow-hidden rounded-md border bg-card shadow-card md:grid-cols-[minmax(0,22rem)_1fr]"
            >
              <div className="aspect-square bg-muted md:aspect-auto">
                <img src={p.image} alt={p.name} loading={i < 2 ? "eager" : "lazy"} className="size-full object-cover" />
              </div>
              <div className="flex flex-col p-6 md:p-8">
                <p className="font-mono text-xs text-steel">Category {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-1 text-2xl font-bold text-navy">{p.name}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
                <dl className="mt-6 divide-y rounded-sm border text-sm">
                  {p.specs.map((s) => (
                    <div key={s.label} className="grid grid-cols-[9rem_1fr] gap-4 px-4 py-2.5 sm:grid-cols-[11rem_1fr]">
                      <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                      <dd className="font-medium text-foreground">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-3 md:mt-auto md:pt-6">
                  <Button asChild variant="navy" size="lg">
                    <Link to="/request-quote" search={{ product: p.name }}>
                      Request a Quote <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}

          <div className="grid gap-6 rounded-md border-2 border-dashed border-navy/25 bg-secondary p-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <HelpCircle className="size-10 text-navy" />
            <div>
              <h2 className="text-xl font-bold text-navy">Can't find your product or specification?</h2>
              <p className="mt-1 text-muted-foreground">
                Send us the item description, part number, drawing or sample details. We will check and
                respond even if it is not listed in this catalogue.
              </p>
            </div>
            <Button asChild variant="navy" size="xl">
              <Link to="/request-quote">Send an enquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

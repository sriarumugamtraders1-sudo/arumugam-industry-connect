import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Eye, HeartHandshake, ShieldCheck, Target } from "lucide-react";

import aboutImage from "@/assets/about-workshop.jpg";
import heroImage from "@/assets/svc-jobwork.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { SERVICES } from "@/lib/catalog";
import { COMPANY } from "@/lib/site";

const TITLE = "About Us | Sri Arumugam Traders, Hosur";
const DESCRIPTION =
  "Learn about Sri Arumugam Traders — an industrial component supply and engineering job-work business in Hosur, Tamil Nadu, focused on quality and customers.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About Sri Arumugam Traders"
        title="An industrial partner for components and engineering job-work"
        description="Based in Hosur, Tamil Nadu, we supply industrial components and undertake engineering job-work for industrial customers."
        image={heroImage}
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Company introduction" title="Who we are" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {COMPANY.name} is an industrial business located at Andhivadi, Hosur, in the Krishnagiri
                district of Tamil Nadu. We work with industrial customers on two fronts: the supply of
                industrial components, and engineering job-work carried out as per customer drawings
                and specifications.
              </p>
              <p>
                Our customers include engineering companies, OEMs, plant maintenance departments and
                purchase teams who need a dependable contact for flanges, valves, pipe fittings,
                industrial components and custom-made parts.
              </p>
              <p>
                We believe in understanding each requirement properly before we commit — reviewing the
                drawing, material, size and quantity — so that what we quote is what we deliver.
              </p>
            </div>
          </div>
          <img
            src={aboutImage}
            alt="Inspection of a machined industrial component"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-md object-cover shadow-card"
          />
        </div>
      </section>

      <section className="steel-grid border-y bg-secondary py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Business activities" title="Our areas of work" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.slug} className="rounded-md border bg-card p-6 shadow-card">
                <h3 className="font-bold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="rounded-md bg-navy p-8 text-navy-foreground md:p-10">
            <Target className="size-8 text-signal" />
            <h2 className="mt-5 text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-navy-muted">
              To support industrial customers with the right components and reliable engineering
              job-work — responding to every enquiry with clarity, honest commitments and attention to
              specification.
            </p>
          </div>
          <div className="rounded-md border-2 border-navy/15 bg-card p-8 md:p-10">
            <Eye className="size-8 text-signal" />
            <h2 className="mt-5 text-2xl font-bold text-navy">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To be a trusted industrial supply and job-work partner for OEMs, engineering companies and
              procurement teams — known for dependable service and long-term relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <ShieldCheck className="size-8 text-navy" />
            <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">Commitment to quality</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Requirements reviewed against drawings and specifications before quoting",
                "Material and dimensional details confirmed with the customer",
                "Checks on supplied and job-work items before dispatch",
                "Clear communication if a requirement is outside our scope",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-signal" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <HeartHandshake className="size-8 text-navy" />
            <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">Customer-focused approach</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Direct access to the contact person handling your enquiry",
                "Support for urgent maintenance and breakdown requirements",
                "Flexible quantities — single items to batch orders",
                "Confidential handling of drawings and commercial information",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-signal" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

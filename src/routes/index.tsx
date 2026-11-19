import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Cog,
  Factory,
  FileText,
  Flame,
  Handshake,
  MapPin,
  PackageSearch,
  Ruler,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

import heroImage from "@/assets/hero-industrial.jpg";
import aboutImage from "@/assets/about-workshop.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { INDUSTRIES, PRODUCTS } from "@/lib/catalog";
import { COMPANY } from "@/lib/site";

const TITLE = "Sri Arumugam Traders | Industrial Components & Engineering Job-Work, Hosur";
const DESCRIPTION =
  "Industrial component supply and engineering job-work in Hosur, Tamil Nadu — flanges, valves, pipe fittings, fabrication and machining. Send your RFQ today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: COMPANY.name,
          telephone: COMPANY.mobileTel,
          email: COMPANY.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ground Floor, 28, Thally Road, Opp. SEO Roofing, Andhivadi Check Post",
            addressLocality: "Hosur",
            addressRegion: "Tamil Nadu",
            postalCode: "635110",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const PILLARS = [
  { icon: Truck, title: "Industrial Component Supply", text: "Flanges, valves, pipes, fittings and components." },
  { icon: Wrench, title: "Engineering Job-Work", text: "Machining and fabrication to your drawings." },
  { icon: ClipboardList, title: "RFQs & Vendor Registration", text: "We welcome RFQs and approved-vendor enquiries." },
];

const ACTIVITIES = [
  { icon: Truck, title: "Industrial Component Supply" },
  { icon: Wrench, title: "Engineering Job-Work" },
  { icon: Flame, title: "Fabrication Work" },
  { icon: Cog, title: "Machining Work" },
  { icon: PackageSearch, title: "Industrial Products Trading" },
  { icon: Ruler, title: "Custom Engineering Components" },
];

const WHY = [
  {
    icon: Handshake,
    title: "Supply and job-work under one roof",
    text: "Procure standard components and get drawing-based job-work done through a single point of contact.",
  },
  {
    icon: FileText,
    title: "Drawing-based, specification-led",
    text: "Every requirement is reviewed against your drawing, material and quantity before we quote.",
  },
  {
    icon: Users,
    title: "Direct, responsive communication",
    text: "Speak directly with the person handling your enquiry — by phone, email or WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Based in Hosur's industrial belt",
    text: "Located at Andhivadi, Hosur — convenient for industries across Tamil Nadu and Karnataka.",
  },
  {
    icon: BadgeCheck,
    title: "GST-registered business",
    text: `Proper invoicing and documentation. GSTIN ${COMPANY.gstin}.`,
  },
  {
    icon: ShieldCheck,
    title: "Confidential handling of drawings",
    text: "Technical drawings and specifications you share are used only to evaluate your enquiry.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
        <img
          src={heroImage}
          alt="Precision engineering workshop with CNC machine, steel flanges and pipe fittings"
          className="absolute inset-0 -z-20 size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-page flex min-h-[38rem] flex-col justify-center py-20 md:min-h-[42rem]">
          <p className="eyebrow animate-fade-up">Hosur · Tamil Nadu · India</p>
          <h1 className="animate-fade-up animation-delay-1 mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Your Trusted Partner in Industrial Components &amp; Engineering Solutions
          </h1>
          <p className="animate-fade-up animation-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted">
            Delivering Industrial Component Supply and Engineering Job-Work Solutions for Industrial
            Applications.
          </p>
          <div className="animate-fade-up animation-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="signal" size="xl">
              <Link to="/services">
                Explore Our Services <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to="/request-quote">Request a Quotation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative z-10 -mt-14">
        <div className="container-page">
          <div className="grid overflow-hidden rounded-md border bg-card shadow-lift md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div key={p.title} className={`flex gap-4 p-6 md:p-7 ${i > 0 ? "border-t md:border-l md:border-t-0" : ""}`}>
                <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-navy text-navy-foreground">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <h2 className="text-base font-bold text-navy">{p.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Engineer inspecting a machined flange component with a vernier caliper"
              className="aspect-[4/3] w-full rounded-md object-cover shadow-card"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-2 hidden rounded-md bg-navy p-5 text-navy-foreground shadow-lift sm:block md:-right-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-navy-muted">Contact person</p>
              <p className="mt-1 font-display text-lg font-bold">{COMPANY.contactPerson}</p>
              <a href={`tel:${COMPANY.mobileTel}`} className="text-sm text-navy-muted hover:text-navy-foreground">
                {COMPANY.mobileDisplay}
              </a>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About the company"
              title="Industrial supply and engineering job-work from Hosur"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {COMPANY.name} is an industrial business based in Hosur, Krishnagiri district, engaged in
                the supply of industrial components and the execution of engineering job-work.
              </p>
              <p>
                We support OEMs, engineering companies, maintenance departments and purchase teams with
                flanges, valves, pipe fittings and custom components — and take up fabrication and
                machining work as per customer drawings.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-2">
              {[
                ["Business model", "Component supply & job-work"],
                ["Location", "Andhivadi, Hosur – 635110"],
                ["GSTIN", COMPANY.gstin],
                ["Enquiries", "RFQs & vendor registration"],
              ].map(([k, v]) => (
                <div key={k} className="bg-card p-4">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-semibold text-navy">{v}</dd>
                </div>
              ))}
            </dl>
            <Button asChild variant="link" className="mt-6 px-0 text-navy">
              <Link to="/about">
                More about us <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="steel-grid border-y bg-secondary py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our business activities"
            title="What we do"
            description="A focused set of industrial activities, handled with attention to specification and clear communication."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((a, i) => (
              <div
                key={a.title}
                className="group flex items-center gap-5 rounded-md border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-signal/50 hover:shadow-lift"
              >
                <span className="font-mono text-xs text-steel">0{i + 1}</span>
                <span className="grid size-12 place-items-center rounded-sm bg-accent text-navy transition-colors group-hover:bg-navy group-hover:text-navy-foreground">
                  <a.icon className="size-5" />
                </span>
                <h3 className="text-base font-bold text-navy">{a.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Products & services"
              title="Industrial products we supply"
              description="Standard and custom industrial products for production, project and maintenance requirements."
            />
            <Button asChild variant="outline" size="lg">
              <Link to="/products">
                View full catalogue <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.slice(0, 8).map((p) => (
              <Link
                key={p.slug}
                to="/products"
                hash={p.slug}
                className="group overflow-hidden rounded-md border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 grid gap-4 rounded-md border bg-secondary p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <h3 className="text-lg font-bold text-navy">Also offering engineering services</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Engineering job-work · Fabrication · Machining · Component sourcing · Custom requirements
              </p>
            </div>
            <Button asChild variant="navy" size="lg">
              <Link to="/services">
                Our services <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="blueprint-grid bg-navy-deep py-20 text-navy-foreground md:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Industries we serve</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Supporting industrial buyers across sectors
              </h2>
            </div>
            <Button asChild variant="onDark" size="lg">
              <Link to="/industries">
                All industries <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => (
              <Link
                key={ind.slug}
                to="/industries"
                hash={ind.slug}
                className={`group relative isolate flex min-h-60 items-end overflow-hidden rounded-md ${i === 0 ? "sm:col-span-2 lg:row-span-2 lg:min-h-full" : ""}`}
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                  className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-tile-overlay" />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{ind.name}</h3>
                  {i === 0 && <p className="mt-1 max-w-sm text-sm text-navy-muted">{ind.description}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why choose us"
            title="Why choose Sri Arumugam Traders?"
            description="What purchase managers and engineering teams can expect when they work with us."
            align="center"
          />
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="border-l-2 border-signal pl-6">
                <w.icon className="size-6 text-navy" />
                <h3 className="mt-4 text-lg font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENDOR REGISTRATION */}
      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <div className="grid gap-8 rounded-md border-2 border-navy/15 bg-card p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
            <span className="grid size-16 place-items-center rounded-sm bg-accent text-navy">
              <Factory className="size-8" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-navy">Vendor registration opportunities</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Procurement teams are welcome to add {COMPANY.name} to their vendor list. Email your
                vendor registration form or supplier onboarding requirements to{" "}
                <a href={`mailto:${COMPANY.email}?subject=Vendor%20Registration`} className="font-semibold text-navy underline underline-offset-2">
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>
            <Button asChild variant="navy" size="xl">
              <a href={`mailto:${COMPANY.email}?subject=Vendor%20Registration`}>Send vendor form</a>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

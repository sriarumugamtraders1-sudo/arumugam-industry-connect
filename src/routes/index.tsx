import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  FileLock2,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  ScrollText,
  Send,
  UserRound,
  Wrench,
  Package,
  Building2,
} from "lucide-react";

import heroImage from "@/assets/hero-industrial.jpg";
import storeImage from "@/assets/home-component-store.jpg";
import jobworkImage from "@/assets/home-jobwork-floor.jpg";
import deskImage from "@/assets/home-procurement-desk.jpg";
import { WhatsAppIcon } from "@/components/site/WhatsAppFloat";
import { SectionHeading } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ALLOWED_DRAWING_EXTENSIONS, MAX_DRAWING_BYTES } from "@/lib/enquiry-schema";
import { COMPANY, whatsappLink } from "@/lib/site";

const TITLE = "Sri Arumugam Traders | Industrial Components & Engineering Job-Work, Hosur";
const DESCRIPTION =
  "Industrial component supply and engineering job-work in Hosur, Tamil Nadu — flanges, valves, pipe fittings, fabrication and machining. Send your RFQ today.";

const VENDOR_MAIL = `mailto:${COMPANY.email}?subject=${encodeURIComponent("Vendor Registration – Sri Arumugam Traders")}`;
const MAX_MB = Math.round(MAX_DRAWING_BYTES / (1024 * 1024));

const FAQS = [
  {
    q: "Do you supply components and also take up job-work?",
    a: "Yes. We supply industrial components such as flanges, valves and pipe fittings, and we also undertake engineering job-work — fabrication and machining — as per customer drawings. You can send both kinds of requirements to the same contact.",
  },
  {
    q: "What should I include in an RFQ?",
    a: "The product or component name, material specification, size or dimensions, quantity and any technical requirements. Attaching a drawing, datasheet or photo helps us review your requirement accurately.",
  },
  {
    q: "Which drawing files can I upload with my RFQ?",
    a: `You can attach ${ALLOWED_DRAWING_EXTENSIONS.map((e) => e.toUpperCase()).join(", ")} files up to ${MAX_MB} MB. For larger or multiple files, mention it in your RFQ and we will share how to send them.`,
  },
  {
    q: "My component is not listed on the website. Can I still enquire?",
    a: "Yes. The product list shows our main categories only. Send your requirement with whatever details you have — we will review it and get back to you on sourcing or making it to your drawing.",
  },
  {
    q: "How do I register Sri Arumugam Traders as a vendor?",
    a: `Email your vendor registration form or supplier onboarding requirements to ${COMPANY.email}. We will complete it and return it with the company details you need.`,
  },
  {
    q: "Are my drawings kept confidential?",
    a: "Drawings uploaded through our RFQ form are stored privately and used only to evaluate and quote for your enquiry. They are not shared publicly.",
  },
];

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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TwoWays />
      <Assurances />
      <Procurement />
      <Faq />
      <DirectLine />
    </>
  );
}

/* ---------------------------------------------------------------- HERO */

const INTENTS = [
  {
    icon: Package,
    title: "I need industrial components",
    text: "Flanges, valves, pipe fittings and more",
    to: "/products" as const,
  },
  {
    icon: Wrench,
    title: "I need job-work done",
    text: "Fabrication & machining to your drawing",
    to: "/services" as const,
  },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
      <img
        src={heroImage}
        alt="Precision engineering workshop with CNC machine, steel flanges and pipe fittings"
        className="absolute inset-0 -z-20 size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:min-h-[40rem] lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow animate-fade-up">Hosur · Tamil Nadu · India</p>
          <h1 className="animate-fade-up animation-delay-1 mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl xl:text-6xl">
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

        <div className="animate-fade-up animation-delay-2 rounded-md border border-navy-foreground/15 bg-navy-deep/70 p-2 shadow-lift backdrop-blur-md">
          <p className="px-4 pb-2 pt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-navy-muted">
            How can we help you today?
          </p>
          <ul className="grid gap-1.5">
            {INTENTS.map((it) => (
              <li key={it.title}>
                <Link
                  to={it.to}
                  className="group flex items-center gap-4 rounded-sm bg-navy-foreground/5 p-4 transition-colors hover:bg-navy-foreground/10"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-signal text-signal-foreground">
                    <it.icon className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold">{it.title}</span>
                    <span className="block text-sm text-navy-muted">{it.text}</span>
                  </span>
                  <ArrowRight className="size-4 text-navy-muted transition-transform group-hover:translate-x-1 group-hover:text-navy-foreground" />
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#procurement"
                className="group flex items-center gap-4 rounded-sm bg-navy-foreground/5 p-4 transition-colors hover:bg-navy-foreground/10"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-signal text-signal-foreground">
                  <Building2 className="size-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-semibold">I want to add you as a vendor</span>
                  <span className="block text-sm text-navy-muted">Vendor registration for procurement teams</span>
                </span>
                <ArrowRight className="size-4 text-navy-muted transition-transform group-hover:translate-x-1 group-hover:text-navy-foreground" />
              </a>
            </li>
          </ul>
          <Link
            to="/request-quote"
            className="mt-2 flex items-center justify-between rounded-sm bg-navy-foreground px-4 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-steel-light"
          >
            <span className="flex items-center gap-2">
              <Send className="size-4" /> Have a drawing? Send your RFQ
            </span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ TWO WAYS */

const WAYS = [
  {
    tag: "01 · Component supply",
    title: "Buy industrial components",
    image: storeImage,
    alt: "Steel racks stocked with industrial valves, flanges and pipe fittings",
    send: ["Component list or BOM", "Material grade and pressure class", "Size and quantity"],
    get: ["Review of your list and specifications", "Quotation for the items you need", "Supply as agreed in the order"],
    links: [
      { label: "Flanges", hash: "industrial-flanges" },
      { label: "Valves", hash: "industrial-valves" },
      { label: "Pipes & fittings", hash: "pipes-and-pipe-fittings" },
      { label: "Sight flow indicators", hash: "sight-flow-indicators" },
      { label: "Safety relief valves", hash: "safety-relief-valves" },
    ],
    to: "/products" as const,
    cta: "See product range",
  },
  {
    tag: "02 · Engineering job-work",
    title: "Get parts made to your drawing",
    image: jobworkImage,
    alt: "Fabricator welding a flanged steel pipe spool in a workshop",
    send: ["Drawing, sketch or sample details", "Material and finish requirements", "Quantity and required date"],
    get: ["Technical review of the drawing", "Quotation with scope of work", "Fabrication or machining as agreed"],
    links: [
      { label: "Fabrication", hash: "fabrication" },
      { label: "Machining", hash: "machining" },
      { label: "Engineering job-work", hash: "engineering-job-work" },
      { label: "Custom components", hash: "custom-component-requirements" },
    ],
    to: "/services" as const,
    cta: "See job-work services",
  },
];

function TwoWays() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Two ways to work with us"
            title="Ready-made components or parts made to your drawing — one contact for both"
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Many buyers need both standard items and drawing-based parts for the same job. Send them together
            and deal with a single point of contact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {WAYS.map((w) => (
            <article key={w.tag} className="flex flex-col overflow-hidden rounded-md border bg-card shadow-card">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={w.image} alt={w.alt} width={1200} height={912} loading="lazy" className="size-full object-cover" />
                <span className="absolute left-4 top-4 rounded-sm bg-navy px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-navy-foreground">
                  {w.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="text-2xl font-bold text-navy">{w.title}</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">You send</p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                      {w.send.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-steel" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">We take care of</p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                      {w.get.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {w.links.map((l) => (
                    <Link
                      key={l.hash}
                      to={w.to}
                      hash={l.hash}
                      className="rounded-sm border bg-secondary px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:border-signal hover:bg-accent"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pt-8">
                  <Button asChild variant="outline" size="lg">
                    <Link to={w.to}>
                      {w.cta} <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- ASSURANCES */

const ASSURANCES = [
  { icon: ClipboardCheck, title: "Specification first", text: "Every RFQ is checked against your drawing, material and quantity before quoting." },
  { icon: FileLock2, title: "Private drawings", text: "Uploaded drawings are stored privately and used only for your enquiry." },
  { icon: UserRound, title: "One person to talk to", text: `${COMPANY.contactPerson} handles your enquiry directly — no call centres.` },
  { icon: ScrollText, title: "Clear paperwork", text: "Written quotations and proper documentation for your purchase team." },
];

function Assurances() {
  return (
    <section className="blueprint-grid bg-navy-deep text-navy-foreground">
      <div className="container-page grid gap-px py-4 sm:grid-cols-2 lg:grid-cols-4">
        {ASSURANCES.map((a) => (
          <div key={a.title} className="flex gap-4 px-2 py-8 lg:px-6">
            <a.icon className="mt-0.5 size-6 shrink-0 text-signal" />
            <div>
              <h3 className="font-bold">{a.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-muted">{a.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------- PROCUREMENT */

const VENDOR_STEPS = [
  { n: "1", t: "Send your vendor form", d: "Email your registration form or onboarding checklist." },
  { n: "2", t: "We complete it", d: "We fill in and return it with the company details you ask for." },
  { n: "3", t: "Include us in your RFQs", d: "Send enquiries whenever your team needs components or job-work." },
];

function Procurement() {
  return (
    <section id="procurement" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-last lg:order-first">
          <img
            src={deskImage}
            alt="Engineering drawing of a flange with a vernier caliper and a machined flange on a desk"
            width={1200}
            height={912}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-md object-cover shadow-card"
          />
          <div className="absolute -bottom-6 left-4 right-4 rounded-md border bg-card p-5 shadow-lift sm:left-auto sm:right-6 sm:max-w-xs">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">Send vendor forms to</p>
            <a href={VENDOR_MAIL} className="mt-1 block break-all font-semibold text-navy hover:text-signal">
              {COMPANY.email}
            </a>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="For procurement & purchase teams"
            title="Add Sri Arumugam Traders to your vendor list"
            description="If your company maintains an approved vendor list, we would be glad to register. Getting us onboarded takes three simple steps."
          />
          <ol className="mt-8 space-y-px overflow-hidden rounded-md border bg-border">
            {VENDOR_STEPS.map((s) => (
              <li key={s.n} className="flex gap-5 bg-card p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-navy font-display text-lg font-bold text-navy-foreground">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{s.t}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="navy" size="xl">
              <a href={VENDOR_MAIL}>
                <Mail /> Email vendor form
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a
                href={whatsappLink("Hello Sri Arumugam Traders, we would like to register you as a vendor.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4" /> Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ */

function Faq() {
  return (
    <section className="steel-grid border-y bg-secondary py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Before you send an RFQ"
            title="Common questions from buyers"
            description="Quick answers for purchase managers and engineers. Can't find yours? Ask us directly."
          />
          <Button asChild variant="link" className="mt-4 px-0 text-navy">
            <a href={whatsappLink("Hello Sri Arumugam Traders, I have a question:")} target="_blank" rel="noopener noreferrer">
              <MessagesSquare /> Ask a question on WhatsApp
            </a>
          </Button>
        </div>
        <Accordion type="single" collapsible defaultValue="faq-0" className="rounded-md border bg-card px-6 shadow-card">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-b-0">
              <AccordionTrigger className="py-5 text-base font-semibold text-navy hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- DIRECT LINE */

function DirectLine() {
  const channels = [
    {
      icon: Phone,
      label: "Call",
      value: COMPANY.mobileDisplay,
      href: `tel:${COMPANY.mobileTel}`,
      external: false,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: "Send a message or drawing photo",
      href: whatsappLink(),
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
      external: false,
    },
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-md bg-navy text-navy-foreground shadow-lift">
          <div className="blueprint-grid grid gap-10 p-5 sm:p-8 md:p-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <p className="eyebrow">Direct line</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Talk to {COMPANY.contactPerson} about your requirement
              </h2>
              <p className="mt-4 flex items-start gap-2 text-sm text-navy-muted">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {COMPANY.addressLines.slice(0, 3).join(", ")}
              </p>
              <Button asChild variant="signal" size="xl" className="mt-8">
                <Link to="/request-quote">
                  Request a Quotation <ArrowRight />
                </Link>
              </Button>
            </div>
            <ul className="grid gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-3 rounded-sm border border-navy-foreground/15 bg-navy-deep/40 p-4 sm:gap-4 sm:p-5 transition-colors hover:border-signal hover:bg-navy-deep/70"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-navy-foreground/10 sm:size-11">
                      <c.icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-navy-muted">{c.label}</span>
                      <span className="block text-sm font-semibold [overflow-wrap:anywhere] sm:text-base">{c.value}</span>
                    </span>
                    <ArrowUpRight className="hidden size-4 shrink-0 text-navy-muted transition-colors group-hover:text-navy-foreground sm:block" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

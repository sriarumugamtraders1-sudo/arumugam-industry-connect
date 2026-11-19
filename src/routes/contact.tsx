import { createFileRoute } from "@tanstack/react-router";
import { Clock, ExternalLink, Mail, MapPin, Phone, User } from "lucide-react";

import heroImage from "@/assets/ind-maintenance.jpg";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { COMPANY, mapEmbedUrl, mapLinkUrl, whatsappLink } from "@/lib/site";

const TITLE = "Contact Us | Sri Arumugam Traders, Andhivadi, Hosur";
const DESCRIPTION =
  "Contact Sri Arumugam Traders, Thally Road, Andhivadi Check Post, Hosur – 635110. Call +91 63611 77092, email or WhatsApp for industrial enquiries.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    {
      icon: MapPin,
      label: "Address",
      body: (
        <>
          {COMPANY.addressLines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </>
      ),
    },
    { icon: User, label: "Contact person", body: COMPANY.contactPerson },
    {
      icon: Phone,
      label: "Mobile",
      body: (
        <a href={`tel:${COMPANY.mobileTel}`} className="font-semibold text-navy hover:underline">
          {COMPANY.mobileDisplay}
        </a>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      body: (
        <a href={`mailto:${COMPANY.email}`} className="break-all font-semibold text-navy hover:underline">
          {COMPANY.email}
        </a>
      ),
    },
    { icon: Clock, label: "Working hours", body: COMPANY.workingHours },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact us"
        title="Get in touch with our team"
        description="Reach us for component supply, engineering job-work and RFQs."
        image={heroImage}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="signal" size="xl">
            <a href={`tel:${COMPANY.mobileTel}`}>
              <Phone /> Call {COMPANY.mobileDisplay}
            </a>
          </Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading eyebrow="Our office" title={COMPANY.name} />
            <ul className="mt-8 divide-y rounded-md border bg-card shadow-card">
              {cards.map((c) => (
                <li key={c.label} className="flex gap-4 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-accent text-navy">
                    <c.icon className="size-5" />
                  </span>
                  <div className="text-sm">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">{c.label}</p>
                    <div className="mt-1 text-foreground">{c.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Send a message" title="Contact enquiry form" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-md border shadow-card">
            <iframe
              title="Sri Arumugam Traders location on Google Maps"
              src={mapEmbedUrl}
              className="h-[26rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <Button asChild variant="link" className="mt-3 px-0 text-navy">
            <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps <ExternalLink />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}

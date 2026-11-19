import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { COMPANY, whatsappLink } from "@/lib/site";

import { WhatsAppIcon } from "./WhatsAppFloat";

export function CtaBand({
  title = "Have an RFQ or a drawing to share?",
  description = "Send us your component list, drawing or specification. We review every enquiry and respond with availability and a quotation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="blueprint-grid relative overflow-hidden bg-navy text-navy-foreground">
      <div className="container-page grid items-center gap-8 py-14 md:py-16 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="eyebrow">Enquiries welcome</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-navy-muted">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row lg:justify-end">
          <Button asChild variant="signal" size="xl">
            <Link to="/request-quote">
              Request a Quotation <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="onDark" size="xl">
            <a href={`tel:${COMPANY.mobileTel}`}>
              <Phone /> Call Now
            </a>
          </Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

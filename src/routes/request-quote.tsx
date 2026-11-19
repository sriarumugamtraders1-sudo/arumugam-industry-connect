import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Mail, Phone } from "lucide-react";

import heroImage from "@/assets/svc-jobwork.jpg";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppFloat";
import { COMPANY, whatsappLink } from "@/lib/site";

const TITLE = "Request a Quote | Send Your RFQ – Sri Arumugam Traders";
const DESCRIPTION =
  "Send an RFQ for industrial components, fabrication or machining job-work. Upload your drawing, PDF or image and receive a quotation from Sri Arumugam Traders.";

export const Route = createFileRoute("/request-quote")({
  validateSearch: (search: Record<string, unknown>): { product?: string } => {
    const product = typeof search['product'] === "string" ? search['product'].slice(0, 200) : undefined;
    return product ? { product } : {};
  },
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
  component: RequestQuotePage,
});

function RequestQuotePage() {
  const { product } = Route.useSearch();
  return (
    <>
      <PageHero
        crumb="Request a Quote"
        eyebrow="RFQ enquiry"
        title="Request a quotation"
        description="Tell us what you need. Attach a drawing, PDF or image if available — we review every enquiry and respond with a quotation."
        image={heroImage}
      />

      <section className="bg-secondary py-14 md:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_20rem] xl:grid-cols-[1fr_22rem]">
          <QuoteForm key={product ?? "none"} defaultProduct={product} />

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-md border bg-card p-6 shadow-card">
              <ClipboardCheck className="size-6 text-signal" />
              <h2 className="mt-3 font-bold text-navy">For a faster quotation, include</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Material grade and standard</li>
                <li>• Size, dimensions or pressure class</li>
                <li>• Quantity and required delivery date</li>
                <li>• Drawing, part number or sample photo</li>
                <li>• Testing or documentation needs</li>
              </ul>
            </div>
            <div className="rounded-md bg-navy p-6 text-navy-foreground shadow-card">
              <h2 className="font-bold">Prefer to talk?</h2>
              <p className="mt-1 text-sm text-navy-muted">Contact {COMPANY.contactPerson} directly.</p>
              <div className="mt-4 space-y-3 text-sm">
                <a href={`tel:${COMPANY.mobileTel}`} className="flex items-center gap-3 hover:text-signal">
                  <Phone className="size-4" /> {COMPANY.mobileDisplay}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 break-all hover:text-signal">
                  <Mail className="size-4 shrink-0" /> {COMPANY.email}
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-signal">
                  <WhatsAppIcon className="size-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

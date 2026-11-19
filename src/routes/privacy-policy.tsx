import { createFileRoute } from "@tanstack/react-router";

import { COMPANY } from "@/lib/site";

const TITLE = "Privacy Policy | Sri Arumugam Traders";
const DESCRIPTION =
  "How Sri Arumugam Traders collects, uses and protects the information and drawings you share through our website enquiry forms.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: November 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-foreground/85 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          <div>
            <h2>1. Who we are</h2>
            <p>
              This website is operated by {COMPANY.name}, {COMPANY.addressLines.join(", ")}. This policy explains how we handle information you share with us through
              this website.
            </p>
          </div>
          <div>
            <h2>2. Information we collect</h2>
            <p>When you submit a quotation request or contact form, we collect:</p>
            <ul>
              <li>Your name, company name, email address and mobile number</li>
              <li>Details of the products, components or services you are enquiring about</li>
              <li>Technical drawings, PDFs or images you choose to upload</li>
              <li>Any additional remarks you include in your message</li>
            </ul>
          </div>
          <div>
            <h2>3. How we use your information</h2>
            <ul>
              <li>To review your enquiry and prepare a quotation</li>
              <li>To contact you about your requirement by phone, email or WhatsApp</li>
              <li>To maintain records of enquiries and business communication</li>
            </ul>
            <p>We do not sell or rent your personal information to third parties.</p>
          </div>
          <div>
            <h2>4. Technical drawings and confidentiality</h2>
            <p>
              Drawings and technical documents you upload are stored in private storage and are used only
              to evaluate and respond to your enquiry. They are not shared publicly.
            </p>
          </div>
          <div>
            <h2>5. Data storage and security</h2>
            <p>
              Enquiries are stored securely with our hosting provider. We take reasonable measures to
              protect your information against unauthorised access, but no method of transmission over the
              internet is completely secure.
            </p>
          </div>
          <div>
            <h2>6. Third-party services</h2>
            <p>
              This website uses Google Maps to show our location and links to WhatsApp for chat. These
              services have their own privacy policies that apply when you use them.
            </p>
          </div>
          <div>
            <h2>7. Your choices</h2>
            <p>
              You may ask us to update or delete the information you have submitted by contacting us using
              the details below.
            </p>
          </div>
          <div>
            <h2>8. Contact</h2>
            <p>
              For any questions about this policy, contact {COMPANY.contactPerson} at{" "}
              <a href={`mailto:${COMPANY.email}`} className="font-semibold text-navy underline">
                {COMPANY.email}
              </a>{" "}
              or{" "}
              <a href={`tel:${COMPANY.mobileTel}`} className="font-semibold text-navy underline">
                {COMPANY.mobileDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

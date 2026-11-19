import type { QuoteInput } from "./enquiry-schema";
import { COMPANY } from "./site";

const MAX_FIELD = 400;

const clip = (v: string | undefined) => {
  const t = (v ?? "").trim();
  return t.length > MAX_FIELD ? `${t.slice(0, MAX_FIELD)}…` : t;
};

/**
 * Builds the pre-filled email a customer sends to the company after submitting the RFQ form.
 * Email links cannot attach files, so the body reminds the customer to attach their drawing.
 */
export function buildQuoteMailto(values: QuoteInput, reference: string, drawingName?: string | null): string {
  const rows: Array<[string, string | undefined]> = [
    ["Reference", reference],
    ["Customer Name", values.customerName],
    ["Company Name", values.companyName],
    ["Email", values.email],
    ["Mobile", values.mobile],
    ["Product / Component Required", values.productRequired],
    ["Material Specification", values.materialSpecification],
    ["Size / Dimension", values.sizeDimension],
    ["Quantity", values.quantity],
    ["Technical Requirements", values.technicalRequirements],
    ["Additional Remarks", values.additionalRemarks],
  ];
  const lines = rows.filter(([, v]) => clip(v).length > 0).map(([k, v]) => `${k}: ${clip(v)}`);
  if (drawingName) lines.push("", `Drawing: ${drawingName} (attached to this email)`);

  const subject = `RFQ ${reference} – ${clip(values.productRequired).slice(0, 80)}`;
  const body = ["Hello Sri Arumugam Traders,", "", "Please quote for the following requirement:", "", ...lines, "", "Regards,", values.customerName].join("\n");

  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

import { createServerFn } from "@tanstack/react-start";

import { contactSchema, quoteSchema, validateDrawing } from "./enquiry-schema";

const QUOTE_FIELDS = [
  "customerName",
  "companyName",
  "email",
  "mobile",
  "productRequired",
  "materialSpecification",
  "sizeDimension",
  "quantity",
  "technicalRequirements",
  "additionalRemarks",
] as const;

const emptyToNull = (v: string | undefined) => (v && v.length > 0 ? v : null);

/** Public RFQ submission: validates, stores the drawing privately, and saves the enquiry. */
export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    if (!(data instanceof FormData)) throw new Error("Invalid submission");
    return data;
  })
  .handler(async ({ data }) => {
    // Honeypot field — real visitors never fill it.
    if (String(data.get("website") ?? "").length > 0) {
      return { ok: true as const, reference: "RECEIVED" };
    }

    const raw: Record<string, string> = {};
    for (const key of QUOTE_FIELDS) raw[key] = String(data.get(key) ?? "");
    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      throw new Error(parsed.error.issues[0]?.message ?? "Please check the form and try again");
    }
    const input = parsed.data;

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const file = data.get("drawing");
    let drawingPath: string | null = null;
    let drawingName: string | null = null;

    if (file instanceof File && file.size > 0) {
      const fileError = validateDrawing(file);
      if (fileError) throw new Error(fileError);
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-120);
      const datePrefix = new Date().toISOString().slice(0, 10);
      drawingPath = `${datePrefix}/${crypto.randomUUID()}-${safeName}`;
      drawingName = file.name.slice(0, 255);
      const { error: uploadError } = await supabaseAdmin.storage
        .from("rfq-drawings")
        .upload(drawingPath, file, {
          contentType: file.type || "application/octet-stream",
          upsert: false,
        });
      if (uploadError) {
        console.error("RFQ drawing upload failed", uploadError.message);
        throw new Error("We could not upload your drawing. Please try again or email it to us.");
      }
    }

    const { data: row, error } = await supabaseAdmin
      .from("quote_requests")
      .insert({
        customer_name: input.customerName,
        company_name: input.companyName,
        email: input.email,
        mobile: input.mobile,
        product_required: input.productRequired,
        material_specification: emptyToNull(input.materialSpecification),
        size_dimension: emptyToNull(input.sizeDimension),
        quantity: emptyToNull(input.quantity),
        technical_requirements: emptyToNull(input.technicalRequirements),
        additional_remarks: emptyToNull(input.additionalRemarks),
        drawing_path: drawingPath,
        drawing_filename: drawingName,
      })
      .select("id")
      .single();

    if (error || !row) {
      console.error("RFQ insert failed", error?.message);
      throw new Error("We could not save your enquiry. Please try again or call us directly.");
    }

    return { ok: true as const, reference: `RFQ-${row.id.slice(0, 8).toUpperCase()}` };
  });

/** Public contact form submission. */
export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const d = (data ?? {}) as Record<string, unknown>;
    if (typeof d['website'] === "string" && d['website'].length > 0) return { spam: true as const };
    const parsed = contactSchema.safeParse(d);
    if (!parsed.success) {
      throw new Error(parsed.error.issues[0]?.message ?? "Please check the form and try again");
    }
    return { spam: false as const, input: parsed.data };
  })
  .handler(async ({ data }) => {
    if (data.spam) return { ok: true as const };
    const input = data.input;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: input.name,
      company_name: emptyToNull(input.companyName),
      email: input.email,
      mobile: emptyToNull(input.mobile),
      subject: emptyToNull(input.subject),
      message: input.message,
    });
    if (error) {
      console.error("Contact insert failed", error.message);
      throw new Error("We could not send your message. Please try again or call us directly.");
    }
    return { ok: true as const };
  });

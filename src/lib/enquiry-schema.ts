import { z } from "zod";

/** Shared validation for enquiry forms — used in the browser and on the server. */

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, { message: `Must be less than ${max} characters` })
    .optional()
    .or(z.literal(""));

export const mobileSchema = z
  .string()
  .trim()
  .regex(/^\+?[0-9][0-9\s-]{6,18}[0-9]$/, { message: "Enter a valid mobile number" });

export const quoteSchema = z.object({
  customerName: z.string().trim().min(2, { message: "Enter your name" }).max(100),
  companyName: z.string().trim().min(2, { message: "Enter your company name" }).max(150),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  mobile: mobileSchema,
  productRequired: z
    .string()
    .trim()
    .min(2, { message: "Tell us the product or component required" })
    .max(200),
  materialSpecification: optionalText(300),
  sizeDimension: optionalText(300),
  quantity: optionalText(100),
  technicalRequirements: optionalText(3000),
  additionalRemarks: optionalText(2000),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Enter your name" }).max(100),
  companyName: optionalText(150),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  mobile: mobileSchema.optional().or(z.literal("")),
  subject: optionalText(200),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message should be at least 10 characters" })
    .max(3000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const MAX_DRAWING_BYTES = 10 * 1024 * 1024;
export const ALLOWED_DRAWING_EXTENSIONS = [
  "pdf",
  "png",
  "jpg",
  "jpeg",
  "webp",
  "dwg",
  "dxf",
  "step",
  "stp",
  "zip",
] as const;

/** Returns an error message, or null when the drawing file is acceptable. */
export function validateDrawing(file: { name: string; size: number }): string | null {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!(ALLOWED_DRAWING_EXTENSIONS as readonly string[]).includes(ext)) {
    return "Upload a PDF, image (JPG/PNG/WEBP), DWG, DXF, STEP or ZIP file";
  }
  if (file.size <= 0) return "The selected file is empty";
  if (file.size > MAX_DRAWING_BYTES) return "File must be 10 MB or smaller";
  return null;
}

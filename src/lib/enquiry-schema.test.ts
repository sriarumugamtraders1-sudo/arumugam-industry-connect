import { describe, expect, it } from "vitest";

import { contactSchema, quoteSchema, validateDrawing } from "./enquiry-schema";

const validQuote = {
  customerName: "Ravi Kumar",
  companyName: "ABC Turbines Pvt Ltd",
  email: "ravi@abcturbines.in",
  mobile: "+91 98450 12345",
  productRequired: "Weld neck flange 4 inch",
};

describe("RFQ form rules", () => {
  it("accepts an enquiry with only the required fields", () => {
    expect(quoteSchema.safeParse(validQuote).success).toBe(true);
  });

  it("requires a company name", () => {
    expect(quoteSchema.safeParse({ ...validQuote, companyName: "" }).success).toBe(false);
  });

  it("rejects an invalid email address", () => {
    expect(quoteSchema.safeParse({ ...validQuote, email: "ravi-at-abc" }).success).toBe(false);
  });

  it("rejects a mobile number with letters", () => {
    expect(quoteSchema.safeParse({ ...validQuote, mobile: "98450abcde" }).success).toBe(false);
  });
});

describe("Drawing upload rules", () => {
  it("accepts a PDF drawing up to 10 MB", () => {
    expect(validateDrawing({ name: "flange.pdf", size: 10 * 1024 * 1024 })).toBeNull();
  });

  it("rejects files larger than 10 MB", () => {
    expect(validateDrawing({ name: "flange.pdf", size: 10 * 1024 * 1024 + 1 })).not.toBeNull();
  });

  it("rejects executable files", () => {
    expect(validateDrawing({ name: "setup.exe", size: 1000 })).not.toBeNull();
  });

  it("accepts DWG CAD files", () => {
    expect(validateDrawing({ name: "Part-01.DWG", size: 2048 })).toBeNull();
  });
});

describe("Contact form rules", () => {
  it("requires a message of at least 10 characters", () => {
    expect(
      contactSchema.safeParse({ name: "Ravi", email: "ravi@abc.in", message: "Hi" }).success,
    ).toBe(false);
  });
});

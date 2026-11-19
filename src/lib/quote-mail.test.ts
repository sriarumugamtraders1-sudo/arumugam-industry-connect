import { describe, expect, it } from "vitest";

import { buildQuoteMailto } from "./quote-mail";

const values = {
  customerName: "Ravi Kumar",
  companyName: "Test Turbines",
  email: "ravi@example.com",
  mobile: "9876543210",
  productRequired: "Weld neck flange",
  materialSpecification: "SS316",
  sizeDimension: "",
  quantity: "50 Nos",
  technicalRequirements: "",
  additionalRemarks: "",
};

const decode = (link: string) => decodeURIComponent(link);

describe("buildQuoteMailto", () => {
  it("addresses the email to the company Gmail", () => {
    expect(buildQuoteMailto(values, "RFQ-ABC12345").startsWith("mailto:sriarumugamtraders1@gmail.com?")).toBe(true);
  });

  it("puts the RFQ reference and product in the subject and details in the body", () => {
    const text = decode(buildQuoteMailto(values, "RFQ-ABC12345"));
    expect(text).toContain("subject=RFQ RFQ-ABC12345 – Weld neck flange");
    expect(text).toContain("Material Specification: SS316");
    expect(text).not.toContain("Size / Dimension:");
  });

  it("mentions the drawing file only when one was uploaded", () => {
    expect(decode(buildQuoteMailto(values, "RFQ-1", "pump.pdf"))).toContain("Drawing: pump.pdf");
    expect(decode(buildQuoteMailto(values, "RFQ-1"))).not.toContain("Drawing:");
  });
});

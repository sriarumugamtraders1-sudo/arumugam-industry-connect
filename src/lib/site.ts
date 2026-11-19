/**
 * Company details shown across the website.
 * Edit these values in one place to update the header, footer, contact page and forms.
 */
export const COMPANY = {
  name: "Sri Arumugam Traders",
  shortName: "SAT",
  tagline: "Industrial Components & Engineering Job-Work",
  contactPerson: "Bharath G.",
  mobileDisplay: "+91 63611 77092",
  mobileTel: "+916361177092",
  whatsappNumber: "916361177092",
  email: "sriarumugamtraders1@gmail.com",
  gstin: "33BZLPC7639E1ZE",
  addressLines: [
    "Ground Floor, 28, Thally Road",
    "Opp. SEO Roofing, Andhivadi Check Post",
    "Hosur, Krishnagiri",
    "Tamil Nadu – 635110, India",
  ],
  city: "Hosur, Tamil Nadu",
  mapQuery: "28 Thally Road, Andhivadi Check Post, Hosur, Krishnagiri, Tamil Nadu 635110",
  /** Placeholder — replace with the real working hours when available. */
  workingHours: "Monday – Saturday (please call to confirm timings)",
} as const;

export const whatsappLink = (message = "Hello Sri Arumugam Traders, I would like to enquire about") =>
  `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`;
export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.mapQuery)}`;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;

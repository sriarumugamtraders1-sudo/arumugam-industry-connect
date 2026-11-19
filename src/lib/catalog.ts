/**
 * Product, service and industry content.
 * Specifications are general, editable descriptions — update them as the
 * company confirms exact ranges, standards and materials it supplies.
 */
import flanges from "@/assets/prod-flanges.jpg";
import valves from "@/assets/prod-valves.jpg";
import pipes from "@/assets/prod-pipes.jpg";
import sightflow from "@/assets/prod-sightflow.jpg";
import nrv from "@/assets/prod-nrv.jpg";
import globe from "@/assets/prod-globe.jpg";
import safety from "@/assets/prod-safety.jpg";
import components from "@/assets/prod-components.jpg";
import custom from "@/assets/prod-custom.jpg";

import svcJobwork from "@/assets/svc-jobwork.jpg";
import svcFabrication from "@/assets/svc-fabrication.jpg";
import svcMachining from "@/assets/svc-machining.jpg";
import svcSupply from "@/assets/svc-supply.jpg";
import aboutWorkshop from "@/assets/about-workshop.jpg";

import indTurbine from "@/assets/ind-turbine.jpg";
import indPower from "@/assets/ind-power.jpg";
import indOilgas from "@/assets/ind-oilgas.jpg";
import indProcess from "@/assets/ind-process.jpg";
import indGeneral from "@/assets/ind-general.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indMaintenance from "@/assets/ind-maintenance.jpg";

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  image: string;
  summary: string;
  description: string;
  specs: Spec[];
};

const ON_REQUEST = "As per customer specification / drawing";

export const PRODUCTS: Product[] = [
  {
    slug: "industrial-flanges",
    name: "Industrial Flanges",
    image: flanges,
    summary: "Flanges for piping, equipment and pressure system connections.",
    description:
      "Supply of industrial flanges for pipeline, equipment and machinery connections. Share the flange type, size, pressure class, facing and material grade, and we will respond with availability and a quotation.",
    specs: [
      { label: "Types", value: "Weld Neck, Slip-On, Blind, Socket Weld, Threaded, Plate" },
      { label: "Material", value: "Carbon steel, stainless steel, alloy steel — on request" },
      { label: "Size / Class", value: ON_REQUEST },
      { label: "Standard", value: "As specified by the customer" },
    ],
  },
  {
    slug: "industrial-valves",
    name: "Industrial Valves",
    image: valves,
    summary: "Isolation and flow-control valves for industrial pipelines.",
    description:
      "Industrial valves for isolation and flow control in process, utility and plant piping. Tell us the valve type, size, pressure rating, end connection and service media for a matched quotation.",
    specs: [
      { label: "Types", value: "Gate, ball, butterfly and other valve types on request" },
      { label: "End connection", value: "Flanged, threaded, socket weld, butt weld" },
      { label: "Material", value: ON_REQUEST },
      { label: "Size / Rating", value: ON_REQUEST },
    ],
  },
  {
    slug: "pipes-and-pipe-fittings",
    name: "Pipes and Pipe Fittings",
    image: pipes,
    summary: "Pipes, elbows, tees, reducers and allied fittings.",
    description:
      "Pipes and pipe fittings for industrial piping systems, including elbows, tees, reducers, couplings, caps and nipples. Quantities from project lots to maintenance requirements can be enquired.",
    specs: [
      { label: "Fittings", value: "Elbows, tees, reducers, couplings, caps, nipples, unions" },
      { label: "Type", value: "Butt weld, socket weld, threaded" },
      { label: "Material", value: "Carbon steel, stainless steel, alloy steel — on request" },
      { label: "Size / Schedule", value: ON_REQUEST },
    ],
  },
  {
    slug: "sight-flow-indicators",
    name: "Sight Flow Indicators",
    image: sightflow,
    summary: "Visual flow monitoring for process lines.",
    description:
      "Sight flow indicators (sight glasses) that allow visual confirmation of flow, colour and clarity of media in pipelines. Share the line size, end connection, pressure and media for the right selection.",
    specs: [
      { label: "Styles", value: "Single window, double window, with flapper / rotor — on request" },
      { label: "End connection", value: "Flanged, threaded" },
      { label: "Body material", value: ON_REQUEST },
      { label: "Size", value: ON_REQUEST },
    ],
  },
  {
    slug: "non-return-valves",
    name: "Non-Return Valves",
    image: nrv,
    summary: "Check valves to prevent reverse flow.",
    description:
      "Non-return (check) valves that allow flow in one direction and prevent back-flow, protecting pumps and equipment. Available types and ratings can be confirmed against your requirement.",
    specs: [
      { label: "Types", value: "Swing check, lift check, dual plate — on request" },
      { label: "End connection", value: "Flanged, threaded, wafer" },
      { label: "Material", value: ON_REQUEST },
      { label: "Size / Rating", value: ON_REQUEST },
    ],
  },
  {
    slug: "globe-valves",
    name: "Globe Valves",
    image: globe,
    summary: "Valves for throttling and regulating flow.",
    description:
      "Globe valves used for throttling and regulating flow in steam, water, oil and process lines. Provide size, pressure class, body material and trim details for a quotation.",
    specs: [
      { label: "Pattern", value: "Straight, angle — on request" },
      { label: "End connection", value: "Flanged, threaded, socket weld" },
      { label: "Material", value: ON_REQUEST },
      { label: "Size / Rating", value: ON_REQUEST },
    ],
  },
  {
    slug: "safety-relief-valves",
    name: "Safety Relief Valves",
    image: safety,
    summary: "Overpressure protection for vessels and systems.",
    description:
      "Safety and relief valves for overpressure protection of boilers, vessels, compressors and piping. Share the set pressure, media, inlet/outlet size and connection for selection support.",
    specs: [
      { label: "Type", value: "Spring loaded, with / without lifting lever — on request" },
      { label: "Set pressure", value: "As specified by the customer" },
      { label: "Connection", value: "Flanged, threaded" },
      { label: "Material", value: ON_REQUEST },
    ],
  },
  {
    slug: "industrial-components",
    name: "Industrial Components",
    image: components,
    summary: "Bushings, couplings, fasteners, gaskets and allied items.",
    description:
      "General industrial components for production and maintenance needs — bushings, couplings, spacers, studs, nuts, gaskets and similar items. Send a list or part numbers and we will review and quote.",
    specs: [
      { label: "Items", value: "Bushings, couplings, spacers, fasteners, gaskets, seals" },
      { label: "Material", value: ON_REQUEST },
      { label: "Quantity", value: "Single items to batch requirements" },
      { label: "Reference", value: "Part number, sample or drawing" },
    ],
  },
  {
    slug: "custom-engineering-components",
    name: "Custom Engineering Components",
    image: custom,
    summary: "Components made to your drawing and specification.",
    description:
      "Custom components produced against customer drawings and specifications. Upload your drawing with material, quantity and tolerance requirements, and we will review feasibility before quoting.",
    specs: [
      { label: "Basis", value: "Customer drawing, sample or specification" },
      { label: "Material", value: ON_REQUEST },
      { label: "Tolerance / Finish", value: "As per drawing — subject to technical review" },
      { label: "Quantity", value: "Prototype, small batch or repeat orders" },
    ],
  },
];

export type Service = {
  slug: string;
  name: string;
  image: string;
  summary: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "engineering-job-work",
    name: "Engineering Job-Work",
    image: svcJobwork,
    summary: "Drawing-based job-work for industrial parts and assemblies.",
    description:
      "We undertake engineering job-work against customer drawings and specifications. Each enquiry is reviewed for material, dimensions, tolerances and quantity before we confirm what we can take up and quote.",
    points: [
      "Work carried out as per customer drawings and specifications",
      "Technical review of every enquiry before quotation",
      "Suitable for one-off, batch and repeat requirements",
      "Clear communication on scope, timelines and pricing",
    ],
  },
  {
    slug: "fabrication",
    name: "Fabrication",
    image: svcFabrication,
    summary: "Fabricated steel parts, frames and structures to drawing.",
    description:
      "Fabrication work for industrial requirements such as frames, brackets, supports and fabricated assemblies. Share your drawing and material details and we will assess the scope of work.",
    points: [
      "Cutting, fit-up and welding as per drawing",
      "Frames, brackets, supports and fabricated assemblies",
      "Material and finish as specified by the customer",
      "Scope confirmed after drawing review",
    ],
  },
  {
    slug: "machining",
    name: "Machining",
    image: svcMachining,
    summary: "Machining of components to customer drawings.",
    description:
      "Machining job-work for industrial components — such as turning, facing, drilling and boring — taken up after review of the component size, material and required tolerances.",
    points: [
      "Machining as per customer drawings",
      "Feasibility check on size, material and tolerance",
      "Prototype and batch quantities",
      "Dimensional checks before dispatch",
    ],
  },
  {
    slug: "industrial-component-sourcing",
    name: "Industrial Component Sourcing",
    image: aboutWorkshop,
    summary: "Help locating specific or hard-to-find components.",
    description:
      "Share your bill of materials or component list and we will source the required items, giving procurement teams a single point of contact for multiple industrial requirements.",
    points: [
      "Sourcing against BOMs, part lists or samples",
      "Single point of contact for multiple items",
      "Specification matching before quotation",
      "Support for maintenance and project requirements",
    ],
  },
  {
    slug: "industrial-component-supply",
    name: "Industrial Component Supply",
    image: svcSupply,
    summary: "Supply of flanges, valves, fittings and components.",
    description:
      "Supply of industrial products including flanges, valves, pipes, fittings, sight flow indicators and general components for OEMs, plants and maintenance departments.",
    points: [
      "Flanges, valves, pipes, fittings and allied products",
      "Supply for production, project and maintenance needs",
      "Quotations against your RFQ or purchase enquiry",
      "GST-registered business with proper invoicing",
    ],
  },
  {
    slug: "custom-component-requirements",
    name: "Custom Component Requirements",
    image: custom,
    summary: "Special components made or sourced to your specification.",
    description:
      "For non-standard parts, send us your drawing, sample or technical specification. We will review the requirement and advise whether it can be manufactured, sourced or supplied.",
    points: [
      "Drawing, sample or specification based",
      "Upload technical drawings with your RFQ",
      "Feasibility advice before commitment",
      "Confidential handling of customer drawings",
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  image: string;
  description: string;
  needs: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "turbine-turbo-machinery",
    name: "Turbine & Turbo Machinery",
    image: indTurbine,
    description:
      "Components, fittings and drawing-based job-work for turbine and turbo machinery manufacturers and their supply chains.",
    needs: ["Machined components to drawing", "Flanges and pipe fittings", "Custom engineering parts"],
  },
  {
    slug: "power-generation",
    name: "Power Generation",
    image: indPower,
    description:
      "Valves, flanges and piping components for power plant utilities, maintenance and project requirements.",
    needs: ["Globe and non-return valves", "Safety relief valves", "Pipes and fittings"],
  },
  {
    slug: "oil-and-gas",
    name: "Oil & Gas",
    image: indOilgas,
    description:
      "Supply of flow-control and piping products for oil and gas related installations, as per customer specification.",
    needs: ["Industrial valves", "Flanges", "Pipes and pipe fittings"],
  },
  {
    slug: "process-industries",
    name: "Process Industries",
    image: indProcess,
    description:
      "Products for chemical, pharmaceutical, food and other process plants where flow monitoring and control matter.",
    needs: ["Sight flow indicators", "Valves and fittings", "Gaskets and components"],
  },
  {
    slug: "general-engineering",
    name: "General Engineering",
    image: indGeneral,
    description:
      "Job-work, fabrication and component supply for general engineering companies and workshops.",
    needs: ["Machining job-work", "Fabrication", "Industrial components"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing Industries",
    image: indManufacturing,
    description:
      "Support for production lines and OEMs with components, consumable engineering items and custom parts.",
    needs: ["Custom components", "Component sourcing", "Repeat supply"],
  },
  {
    slug: "industrial-maintenance",
    name: "Industrial Maintenance",
    image: indMaintenance,
    description:
      "Quick-response sourcing and supply for plant maintenance, shutdown and breakdown requirements.",
    needs: ["Replacement valves and flanges", "Spares sourcing", "Fasteners and gaskets"],
  },
];

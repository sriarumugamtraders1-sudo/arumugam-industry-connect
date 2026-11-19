import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, FileUp, Loader2, Send, X } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitQuoteRequest } from "@/lib/enquiries.functions";
import { quoteSchema, validateDrawing, type QuoteInput } from "@/lib/enquiry-schema";
import { COMPANY } from "@/lib/site";

import { Field, inputClass } from "./Field";

export function QuoteForm({ defaultProduct }: { defaultProduct?: string | undefined }) {
  const submit = useServerFn(submitQuoteRequest);
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { productRequired: defaultProduct ?? "" },
  });

  const onFile = (f: File | null) => {
    if (!f) {
      setFile(null);
      setFileError(null);
      return;
    }
    const err = validateDrawing(f);
    setFileError(err);
    setFile(err ? null : f);
    if (err && fileRef.current) fileRef.current.value = "";
  };

  const onSubmit = async (values: QuoteInput) => {
    const fd = new FormData();
    Object.entries(values).forEach(([k, v]) => fd.append(k, v ?? ""));
    const honeypot = (document.getElementById("rfq-website") as HTMLInputElement | null)?.value ?? "";
    fd.append("website", honeypot);
    if (file) fd.append("drawing", file);
    try {
      const res = await submit({ data: fd });
      setReference(res.reference);
      reset({ productRequired: "" });
      onFile(null);
      if (fileRef.current) fileRef.current.value = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  if (reference) {
    return (
      <div className="rounded-md border bg-card p-8 text-center shadow-card md:p-12">
        <CheckCircle2 className="mx-auto size-12 text-success" />
        <h2 className="mt-5 text-2xl font-bold text-navy">Enquiry received</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Thank you. Your enquiry has been recorded with reference{" "}
          <span className="font-mono font-semibold text-foreground">{reference}</span>. Our team will review
          it and get back to you. For urgent requirements, call {COMPANY.contactPerson} on{" "}
          <a className="font-semibold text-navy underline" href={`tel:${COMPANY.mobileTel}`}>
            {COMPANY.mobileDisplay}
          </a>
          .
        </p>
        <Button variant="outline" size="lg" className="mt-8" onClick={() => setReference(null)}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative rounded-md border bg-card p-6 shadow-card md:p-8"
      aria-label="Request for quotation form"
    >
      <h3 className="mb-5 font-display text-lg font-bold text-navy">Your details</h3>
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="customerName" label="Customer Name" required error={errors.customerName?.message}>
          <Input id="customerName" autoComplete="name" className={inputClass} {...register("customerName")} />
        </Field>
        <Field id="companyName" label="Company Name" required error={errors.companyName?.message}>
          <Input id="companyName" autoComplete="organization" className={inputClass} {...register("companyName")} />
        </Field>
        <Field id="email" label="Email Address" required error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" className={inputClass} {...register("email")} />
        </Field>
        <Field id="mobile" label="Mobile Number" required error={errors.mobile?.message}>
          <Input id="mobile" type="tel" autoComplete="tel" placeholder="+91" className={inputClass} {...register("mobile")} />
        </Field>
      </div>

      <h3 className="mt-8 mb-5 border-t pt-8 font-display text-lg font-bold text-navy">Requirement</h3>
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          id="productRequired"
          label="Product / Component Required"
          required
          error={errors.productRequired?.message}
          className="md:col-span-2"
        >
          <Input
            id="productRequired"
            placeholder="e.g. Weld neck flange, globe valve, machined bush"
            className={inputClass}
            {...register("productRequired")}
          />
        </Field>
        <Field id="materialSpecification" label="Material Specification" error={errors.materialSpecification?.message}>
          <Input id="materialSpecification" placeholder="e.g. SS316, A105, EN8" className={inputClass} {...register("materialSpecification")} />
        </Field>
        <Field id="sizeDimension" label="Size / Dimension" error={errors.sizeDimension?.message}>
          <Input id="sizeDimension" placeholder="e.g. 4 inch, Class 150 / OD 120 mm" className={inputClass} {...register("sizeDimension")} />
        </Field>
        <Field id="quantity" label="Quantity" error={errors.quantity?.message}>
          <Input id="quantity" placeholder="e.g. 50 Nos" className={inputClass} {...register("quantity")} />
        </Field>
        <div className="hidden md:block" />
        <Field
          id="technicalRequirements"
          label="Technical Requirements"
          error={errors.technicalRequirements?.message}
          className="md:col-span-2"
        >
          <Textarea
            id="technicalRequirements"
            rows={4}
            placeholder="Standards, pressure rating, tolerances, finish, testing or documentation needs"
            className="bg-card"
            {...register("technicalRequirements")}
          />
        </Field>

        <div className="md:col-span-2">
          <p className="text-[0.82rem] font-semibold text-foreground/90">Upload Drawing / PDF / Image</p>
          <label
            htmlFor="drawing"
            className="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-input bg-muted/60 px-4 py-7 text-center transition-colors hover:border-signal hover:bg-accent"
          >
            <FileUp className="size-7 text-signal" />
            <span className="text-sm font-medium text-foreground">
              {file ? file.name : "Click to choose a file"}
            </span>
            <span className="text-xs text-muted-foreground">PDF, JPG, PNG, WEBP, DWG, DXF, STEP or ZIP · up to 10 MB</span>
          </label>
          <input
            ref={fileRef}
            id="drawing"
            type="file"
            className="sr-only"
            accept=".pdf,.png,.jpg,.jpeg,.webp,.dwg,.dxf,.step,.stp,.zip"
            onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          />
          {file && (
            <button
              type="button"
              onClick={() => {
                onFile(null);
                if (fileRef.current) fileRef.current.value = "";
              }}
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-destructive"
            >
              <X className="size-3.5" /> Remove file
            </button>
          )}
          {fileError && (
            <p className="mt-1.5 text-xs font-medium text-destructive" role="alert">
              {fileError}
            </p>
          )}
        </div>

        <Field
          id="additionalRemarks"
          label="Additional Remarks"
          error={errors.additionalRemarks?.message}
          className="md:col-span-2"
        >
          <Textarea id="additionalRemarks" rows={3} className="bg-card" {...register("additionalRemarks")} />
        </Field>
      </div>

      {/* Honeypot: hidden from people, catches automated spam */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="rfq-website">Website</label>
        <input id="rfq-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Fields marked <span className="text-destructive">*</span> are required. Your drawings are kept
          confidential.
        </p>
        <Button type="submit" variant="navy" size="xl" disabled={isSubmitting} className="sm:min-w-52">
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
          {isSubmitting ? "Submitting…" : "Submit Enquiry"}
        </Button>
      </div>
    </form>
  );
}

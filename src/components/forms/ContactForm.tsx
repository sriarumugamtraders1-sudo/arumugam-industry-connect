import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactMessage } from "@/lib/enquiries.functions";
import { contactSchema, type ContactInput } from "@/lib/enquiry-schema";

import { Field, inputClass } from "./Field";

export function ContactForm() {
  const submit = useServerFn(submitContactMessage);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactInput) => {
    const website = (document.getElementById("contact-website") as HTMLInputElement | null)?.value ?? "";
    try {
      await submit({ data: { ...values, website } });
      setSent(true);
      reset();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  if (sent) {
    return (
      <div className="rounded-md border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-11 text-success" />
        <h3 className="mt-4 text-xl font-bold text-navy">Message received</h3>
        <p className="mt-2 text-sm text-muted-foreground">Thank you for contacting us. We will get back to you shortly.</p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative grid gap-5 rounded-md border bg-card p-6 shadow-card md:grid-cols-2 md:p-8" aria-label="Contact form">
      <Field id="c-name" label="Name" required error={errors.name?.message}>
        <Input id="c-name" autoComplete="name" className={inputClass} {...register("name")} />
      </Field>
      <Field id="c-company" label="Company Name" error={errors.companyName?.message}>
        <Input id="c-company" autoComplete="organization" className={inputClass} {...register("companyName")} />
      </Field>
      <Field id="c-email" label="Email Address" required error={errors.email?.message}>
        <Input id="c-email" type="email" autoComplete="email" className={inputClass} {...register("email")} />
      </Field>
      <Field id="c-mobile" label="Mobile Number" error={errors.mobile?.message}>
        <Input id="c-mobile" type="tel" autoComplete="tel" placeholder="+91" className={inputClass} {...register("mobile")} />
      </Field>
      <Field id="c-subject" label="Subject" error={errors.subject?.message} className="md:col-span-2">
        <Input id="c-subject" placeholder="e.g. Job-work enquiry, component supply" className={inputClass} {...register("subject")} />
      </Field>
      <Field id="c-message" label="Message" required error={errors.message?.message} className="md:col-span-2">
        <Textarea id="c-message" rows={5} className="bg-card" {...register("message")} />
      </Field>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" variant="navy" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
          {isSubmitting ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

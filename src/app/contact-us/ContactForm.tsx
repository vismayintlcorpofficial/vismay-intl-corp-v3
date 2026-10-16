"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { isEmailConfigured, sendEmail } from "@/lib/emailjs";
import { cn } from "@/lib/cn";

/** Field names match the current EmailJS template, so existing email routing keeps working. */
type FieldName = "fullname" | "email" | "phone" | "company" | "website" | "inquiry";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const fields: {
  name: FieldName;
  label: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
  placeholder: string;
  inputMode?: "text" | "email" | "tel" | "url";
  wide?: boolean;
}[] = [
  { name: "fullname", label: "Full name", type: "text", autoComplete: "name", placeholder: "Juan M. Luna" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@company.com", inputMode: "email" },
  { name: "phone", label: "Mobile number", type: "tel", autoComplete: "tel", placeholder: "0917 123 4567", inputMode: "tel" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization", placeholder: "Your company" },
  { name: "website", label: "Website", type: "text", autoComplete: "url", placeholder: "platinumkaraoke.com", inputMode: "url", wide: true },
];

const empty: Values = { fullname: "", email: "", phone: "", company: "", website: "", inquiry: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.fullname.trim()) e.fullname = "Enter your full name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter an email address like name@company.com.";
  if (!v.phone.trim()) e.phone = "Enter your mobile number.";
  else if (!/^\+?[\d\s()-]{7,20}$/.test(v.phone.trim())) e.phone = "Use digits only, for example 0917 123 4567 or +63 917 123 4567.";
  if (!v.company.trim()) e.company = "Enter your company name.";
  if (!v.website.trim()) e.website = "Enter your company website.";
  else if (!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(v.website.trim()))
    e.website = "Enter a website like platinumkaraoke.com.";
  if (!v.inquiry.trim()) e.inquiry = "Tell us what your inquiry is about.";
  else if (v.inquiry.trim().length < 10) e.inquiry = "Add a little more detail so we can route your inquiry.";
  return e;
}

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const update = (name: FieldName, value: string) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
  };

  const blur = (name: FieldName) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot: real visitors never fill this hidden field.
    if ((form.elements.namedItem("company_url") as HTMLInputElement | null)?.value) return;

    const found = validate(values);
    setErrors(found);
    setTouched({ fullname: true, email: true, phone: true, company: true, website: true, inquiry: true });
    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    if (!isEmailConfigured()) {
      setStatus({
        kind: "error",
        message: "The inquiry form isn’t connected yet. Please reach us on Facebook or LinkedIn in the meantime.",
      });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const trimmed = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]));
      await sendEmail(trimmed);
      setStatus({ kind: "sent" });
      setValues(empty);
      setTouched({});
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus({
        kind: "error",
        message: "Your inquiry didn’t go through. Check your connection and select Send inquiry again.",
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col items-start rounded-[var(--radius-media)] border border-line bg-white p-8 sm:p-12"
      >
        <CircleCheck aria-hidden className="size-10 text-ocean-600" />
        <h2 className="mt-6 text-h3 font-extrabold text-navy">Inquiry sent</h2>
        <p className="mt-3 max-w-md leading-relaxed text-slate">
          Thank you for reaching out to Vismay International Corporation. Our team will review your inquiry and reply
          to the email address you provided.
        </p>
        <Button variant="secondary" className="mt-8" onClick={() => setStatus({ kind: "idle" })}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  const errorList = Object.entries(errors).filter(([, msg]) => Boolean(msg)) as [FieldName, string][];

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-describedby={`${id}-note`}
      className="relative rounded-[var(--radius-media)] border border-line bg-white p-6 sm:p-10"
    >
      <h2 className="text-h3 font-extrabold text-navy">Send us an inquiry</h2>
      <p id={`${id}-note`} className="mt-2 text-[0.9375rem] text-slate">
        All fields are required.
      </p>

      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-[var(--radius-card)] border border-red-200 bg-red-50 p-5 text-red-900"
        >
          <p className="flex items-center gap-2 font-semibold">
            <CircleAlert aria-hidden className="size-5" />
            {errorList.length === 1 ? "One field needs attention" : `${errorList.length} fields need attention`}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-7 text-sm">
            {errorList.map(([name, msg]) => (
              <li key={name}>
                <a href={`#${id}-${name}`} className="underline underline-offset-2">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2">
        {fields.map((f) => {
          const err = touched[f.name] ? errors[f.name] : undefined;
          const inputId = `${id}-${f.name}`;
          return (
            <div key={f.name} className={cn(f.wide && "sm:col-span-2")}>
              <label htmlFor={inputId} className="block text-sm font-semibold text-navy">
                {f.label}
              </label>
              <input
                id={inputId}
                name={f.name}
                type={f.type}
                inputMode={f.inputMode}
                autoComplete={f.autoComplete}
                placeholder={f.placeholder}
                required
                aria-required="true"
                aria-invalid={err ? true : undefined}
                aria-describedby={err ? `${inputId}-error` : undefined}
                value={values[f.name]}
                onChange={(e) => update(f.name, e.target.value)}
                onBlur={() => blur(f.name)}
                className={cn(
                  "mt-2 block h-12 w-full rounded-xl border bg-white px-4 text-base text-ink placeholder:text-slate/75 transition-colors focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-0",
                  err ? "border-red-500 focus-visible:outline-red-500/40" : "border-line hover:border-ocean-300 focus-visible:border-ocean-600 focus-visible:outline-ocean-500/30",
                )}
              />
              {err && (
                <p id={`${inputId}-error`} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-red-700">
                  <CircleAlert aria-hidden className="mt-0.5 size-4 flex-none" />
                  {err}
                </p>
              )}
            </div>
          );
        })}

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-inquiry`} className="block text-sm font-semibold text-navy">
            Inquiry
          </label>
          <textarea
            id={`${id}-inquiry`}
            name="inquiry"
            rows={6}
            required
            aria-required="true"
            placeholder="Tell us about your inquiry, partnership idea or business opportunity"
            aria-invalid={touched.inquiry && errors.inquiry ? true : undefined}
            aria-describedby={touched.inquiry && errors.inquiry ? `${id}-inquiry-error` : undefined}
            value={values.inquiry}
            onChange={(e) => update("inquiry", e.target.value)}
            onBlur={() => blur("inquiry")}
            className={cn(
              "mt-2 block w-full resize-y rounded-xl border bg-white px-4 py-3 text-base leading-relaxed text-ink placeholder:text-slate/75 transition-colors focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-0",
              touched.inquiry && errors.inquiry
                ? "border-red-500 focus-visible:outline-red-500/40"
                : "border-line hover:border-ocean-300 focus-visible:border-ocean-600 focus-visible:outline-ocean-500/30",
            )}
          />
          {touched.inquiry && errors.inquiry && (
            <p id={`${id}-inquiry-error`} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-red-700">
              <CircleAlert aria-hidden className="mt-0.5 size-4 flex-none" />
              {errors.inquiry}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot (hidden from people and assistive tech). */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-company_url`}>Leave this field empty</label>
        <input id={`${id}-company_url`} name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status.kind === "error" && (
        <p role="alert" className="mt-6 flex items-start gap-2 rounded-[var(--radius-card)] bg-red-50 p-4 text-sm font-medium text-red-900">
          <CircleAlert aria-hidden className="mt-0.5 size-4 flex-none" />
          {status.message}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm leading-relaxed text-slate">
          We use your details only to respond to your inquiry, as described in our{" "}
          <Link href="/privacy-policy/" className="font-semibold text-ocean-600 underline-offset-2 hover:underline">
            data privacy statement
          </Link>
          .
        </p>
        <Button type="submit" size="lg" disabled={status.kind === "sending"} className="shrink-0">
          {status.kind === "sending" ? (
            <>
              <LoaderCircle aria-hidden className="size-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send inquiry
              <Send aria-hidden className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

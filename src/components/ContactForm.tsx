"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "sonner";
import {
  LIMITS,
  validateContact,
  type ContactErrors,
  type ContactInput,
} from "@/lib/validation";

const inputClass =
  "w-full rounded-lg border bg-bg px-4 py-3 text-fg placeholder:text-muted/70 transition focus:border-accent";

type Field = keyof ContactInput;

export default function ContactForm() {
  const [values, setValues] = useState<ContactInput>({ name: "", email: "", message: "" });
  const [website, setWebsite] = useState(""); // honeypot, real visitors leave it empty
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sending, setSending] = useState(false);

  // Update one field and clear its error while the person types
  function update(field: Field, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // 1. Validate in the browser first
    const result = validateContact(values);
    if (!result.ok) {
      setErrors(result.errors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    // 2. Send to our API route
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, website }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setValues({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        if (data.errors) setErrors(data.errors);
        toast.error(data.error ?? "Could not send your message. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <FormField id="name" label="Name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          maxLength={LIMITS.nameMax}
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${inputClass} ${errors.name ? "border-red-400" : "border-border"}`}
        />
      </FormField>

      <FormField id="email" label="Email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          maxLength={LIMITS.emailMax}
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputClass} ${errors.email ? "border-red-400" : "border-border"}`}
        />
      </FormField>

      <FormField id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can I help?"
          maxLength={LIMITS.messageMax}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-y ${errors.message ? "border-red-400" : "border-border"}`}
        />
      </FormField>

      {/* Honeypot field: hidden from people, bots tend to fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-fg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <FaPaperPlane aria-hidden="true" />
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

// Label + input wrapper that also shows the error message under the field
function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

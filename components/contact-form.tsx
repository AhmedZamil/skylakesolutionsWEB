"use client";

import { FormEvent, useState } from "react";
import { serviceOptions, site } from "@/lib/site";

const field =
  "h-12 w-full border border-line-strong bg-transparent px-3 text-base text-ink outline-none placeholder:text-faint focus:border-cyan";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nNeed: ${service}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="border border-cyan bg-card px-6 py-12 sm:px-10">
        <h2 className="font-display text-3xl italic">Your mail app should be open.</h2>
        <p className="mt-3 max-w-md text-muted">
          If it did not, write to us directly at {site.email}. We reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 h-11 border border-line-strong px-5 text-sm font-semibold hover:border-cyan hover:text-cyan"
        >
          Edit the message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 border border-line bg-card p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Full name
          <input required name="name" autoComplete="name" placeholder="Your name" className={`${field} mt-2`} />
        </label>
        <label className="block text-sm font-semibold">
          Work email
          <input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className={`${field} mt-2`} />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Company
          <input name="company" autoComplete="organization" placeholder="Company name" className={`${field} mt-2`} />
        </label>
        <label className="block text-sm font-semibold">
          What do you need?
          <select name="service" className={`${field} mt-2`} defaultValue={serviceOptions[0]}>
            {serviceOptions.map((option) => (
              <option key={option} className="bg-bg">
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm font-semibold">
        Project details
        <textarea
          name="message"
          required
          placeholder="Goals, timeline, and anything we should know."
          className={`${field} mt-2 h-40 py-3`}
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="h-12 bg-blue px-7 text-sm font-semibold text-white hover:bg-[#3c86f5]">
          Send message
        </button>
        <p className="text-sm text-faint">Opens an email to {site.email}. Nothing is stored on this site.</p>
      </div>
    </form>
  );
}

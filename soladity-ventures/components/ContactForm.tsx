"use client";
import { useState } from "react";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { services, site } from "@/lib/content";

const budgets = ["Not sure yet", "Under ₹25k", "₹25k – ₹1L", "₹1L – ₹5L", "₹5L+"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function buildMessage(form: HTMLFormElement) {
    const d = new FormData(form);
    const interests = d.getAll("interest").join(", ") || "—";
    return [
      `Hi ${site.name}! 👋`,
      ``,
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || "—"}`,
      `Interested in: ${interests}`,
      `Budget: ${d.get("budget")}`,
      ``,
      `${d.get("message")}`,
    ].join("\n");
  }

  function send(form: HTMLFormElement, via: "email" | "whatsapp") {
    if (!form.reportValidity()) return;
    const msg = buildMessage(form);
    const url =
      via === "whatsapp"
        ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`
        : `mailto:${site.email}?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(msg)}`;
    window.open(url, via === "whatsapp" ? "_blank" : "_self");
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-white/30 outline-none transition focus:border-sun/60 focus:bg-white/[0.06]";

  if (sent) {
    return (
      <div className="glass flex flex-col items-center rounded-3xl px-6 py-16 text-center">
        <CheckCircle2 className="h-14 w-14 text-sun" />
        <h3 className="mt-5 text-2xl font-bold text-white">Thanks — we&apos;ll be in touch!</h3>
        <p className="mt-3 max-w-sm text-white/60">Your message app should have opened with everything filled in. Just hit send and we&apos;ll reply within 24 hours.</p>
        <button type="button" onClick={() => setSent(false)} className="btn-ghost mt-8">Send another message</button>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={(e) => { e.preventDefault(); send(e.currentTarget, "email"); }} className="glass space-y-5 rounded-3xl p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/70">Your name *</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Jane Doe" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/70">Email *</span>
          <input name="email" type="email" required autoComplete="email" inputMode="email" className={field} placeholder="you@company.com" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/70">Phone</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} placeholder="+91 …" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/70">Budget</span>
          <select name="budget" className={`${field} appearance-none`} defaultValue={budgets[0]}>
            {budgets.map((b) => <option key={b} className="bg-ink-2">{b}</option>)}
          </select>
        </label>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-white/70">I&apos;m interested in</legend>
        <div className="flex flex-wrap gap-2">
          {["Campus Comfort", ...services.map((s) => s.title)].map((t) => (
            <label key={t} className="cursor-pointer">
              <input type="checkbox" name="interest" value={t} className="peer sr-only" />
              <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 transition peer-checked:border-sun/60 peer-checked:bg-sun/15 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-sun">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white/70">Tell us about your project *</span>
        <textarea name="message" required rows={5} className={`${field} resize-y`} placeholder="What are you looking to build?" />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-primary flex-1">
          <Send className="h-4 w-4" /> Send via Email
        </button>
        <button
          type="button"
          className="btn-ghost flex-1"
          onClick={(e) => e.currentTarget.form && send(e.currentTarget.form, "whatsapp")}
        >
          <MessageCircle className="h-4 w-4" /> Send via WhatsApp
        </button>
      </div>
    </form>
  );
}

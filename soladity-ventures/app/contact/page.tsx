import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Social from "@/components/Social";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Project",
  description: `Get in touch with ${site.name} for web development, app development, design and Campus Comfort.`,
};

export default function ContactPage() {
  const items = [
    { I: Mail, t: "Email", v: site.email, href: `mailto:${site.email}` },
    { I: Phone, t: "Phone", v: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { I: MapPin, t: "Location", v: site.location },
    { I: Clock, t: "Response time", v: "Within 24 hours" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s build something <span className="text-gradient">great</span></>}
        text="Tell us a little about your idea. We'll get back with next steps, a timeline and an honest quote — usually within a day."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="space-y-4">
          {items.map(({ I, t, v, href }) => {
            const inner = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sun to-flare text-ink"><I className="h-5 w-5" /></span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-white/40">{t}</span>
                  <span className="block break-words font-semibold text-white">{v}</span>
                </span>
              </>
            );
            return href ? (
              <a key={t} href={href} className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:border-sun/40">{inner}</a>
            ) : (
              <div key={t} className="glass flex items-center gap-4 rounded-2xl p-5">{inner}</div>
            );
          })}
          <div className="glass rounded-2xl p-5">
            <p className="mb-4 text-xs uppercase tracking-widest text-white/40">Follow us</p>
            <Social />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}

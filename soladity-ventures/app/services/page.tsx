import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Web, App, Design, Software & AI",
  description: "Web development, app development, UI/UX & branding, custom software, AI automation, e-commerce, cloud and digital marketing by Soladity Ventures.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Digital services that <span className="text-gradient">move the needle</span></>}
        text="Whatever you're building — a website, a mobile app, an internal tool or an AI assistant — we design, develop and grow it with you."
      />

      {/* quick jump chips — horizontally scrollable on phones */}
      <nav aria-label="Jump to service" className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 hover:border-sun/50 hover:text-white">
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-7xl space-y-6 px-4 py-16 sm:px-6">
        {services.map((s, i) => (
          <Reveal key={s.slug}>
            <article id={s.slug} className="glow-card glass scroll-mt-28 grid gap-8 rounded-3xl p-6 sm:p-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sun to-flare text-ink">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </div>
                  <span className="font-display text-sm font-semibold text-white/30">/ 0{i + 1}</span>
                </div>
                <h2 className="mt-6 text-2xl font-bold text-white sm:text-4xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-white/60">{s.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/5 bg-ink/40 p-6">
                <ul className="space-y-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white/80">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sun/15"><Check className="h-3.5 w-3.5 text-sun" /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact/" className="btn-ghost self-start">
                  Get a quote <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <CtaBanner />
    </>
  );
}

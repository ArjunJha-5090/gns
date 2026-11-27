import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bell } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PhoneMockup from "@/components/PhoneMockup";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import { product } from "@/lib/content";

export const metadata: Metadata = {
  title: "Campus Comfort — Comfortable Campus Living for Students",
  description: product.description,
};

export default function CampusComfortPage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sun">A Soladity Ventures product</span>
            <h1 className="mt-4 text-5xl font-bold leading-[1.02] text-white sm:text-7xl">
              Campus <span className="text-gradient">Comfort</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">{product.tagline}</p>
            <p className="mt-4 max-w-lg leading-relaxed text-white/50">{product.description}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="btn-primary"><Bell className="h-4 w-4" /> Get early access</Link>
              <Link href="/contact/" className="btn-ghost">Partner with us <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}><PhoneMockup /></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading center eyebrow="Features" title={<>Everything for <span className="text-gradient">student life</span>, in one place</>} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.07}>
              <div className="glow-card glass h-full rounded-3xl p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sun to-flare text-ink">
                  <Icon name={f.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading center eyebrow="How it works" title={<>Settle in, in <span className="text-gradient">three steps</span></>} />
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {product.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="h-full rounded-3xl border border-white/5 bg-white/[0.02] p-7">
                <span className="font-display text-5xl font-bold text-gradient">{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/55">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { t: "For students", d: "Find stays, food, essentials and your people — without endless calls and WhatsApp forwards." },
            { t: "For property owners & vendors", d: "List your hostel, PG, mess or service and reach thousands of verified students near you." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.08}>
              <div className="glass h-full rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white">{b.t}</h3>
                <p className="mt-3 text-white/60">{b.d}</p>
                <Link href="/contact/" className="mt-6 inline-flex items-center gap-2 font-semibold text-sun">
                  Get in touch <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Rocket, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import HeroVisual from "@/components/HeroVisual";
import RotatingWord from "@/components/RotatingWord";
import Marquee from "@/components/Marquee";
import PhoneMockup from "@/components/PhoneMockup";
import Icon from "@/components/Icon";
import Counter from "@/components/Counter";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import { process, product, services, stats, values } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:min-h-[100svh] lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 text-xs font-medium text-white/70 sm:text-sm">
              <span className="rounded-full bg-gradient-to-r from-sun to-flare px-2.5 py-0.5 text-[11px] font-bold text-ink">NEW</span>
              Campus Comfort is launching
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              We build the future of
              <br />
              <RotatingWord words={["campus life", "your website", "your app", "your brand", "your business"]} />
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Soladity Ventures is a product &amp; technology startup. We create our own products like{" "}
              <span className="font-semibold text-white">Campus Comfort</span> — and help ambitious businesses launch
              world-class websites, apps and software.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="btn-primary">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/products/campus-comfort/" className="btn-ghost">
                Explore Campus Comfort <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="mt-10 grid grid-cols-1 gap-3 text-sm text-white/55 sm:grid-cols-3">
              {["Free consultation", "Fixed, honest quotes", "Mobile-first by default"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-sun" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.2} y={40}>
          <HeroVisual />
        </Reveal>
      </section>

      <Marquee />

      {/* ───────── TWO PILLARS ───────── */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title={<>One venture. <span className="text-gradient">Two engines.</span></>}
          text="We build products of our own and we build for others — so every client gets founder-level thinking, and every product gets agency-level craft."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <Link href="/products/campus-comfort/" className="glow-card glass group block h-full rounded-3xl p-7 sm:p-10">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sun to-flare text-ink">
                <Rocket className="h-7 w-7" />
              </div>
              <h3 className="mt-7 text-2xl font-bold text-white sm:text-3xl">Products</h3>
              <p className="mt-3 text-white/60">
                Our own ventures, solving real everyday problems. First up: <b className="text-white">Campus Comfort</b> — a
                student-first platform for comfortable campus living.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-sun">
                See our products <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services/" className="glow-card glass group block h-full rounded-3xl p-7 sm:p-10">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-nova to-sky text-white">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="mt-7 text-2xl font-bold text-white sm:text-3xl">Services</h3>
              <p className="mt-3 text-white/60">
                End-to-end digital services — web &amp; app development, UI/UX, custom software, AI, e-commerce, cloud and
                marketing.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-sun">
                Explore services <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────── PRODUCT SPOTLIGHT ───────── */}
      <section className="relative py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={product.badge}
              title={<>Meet <span className="text-gradient">{product.name}</span></>}
              text={product.description}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {product.features.slice(0, 4).map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                    <Icon name={f.icon} className="h-6 w-6 shrink-0 text-sun" />
                    <div>
                      <h4 className="font-semibold text-white">{f.title}</h4>
                      <p className="mt-1 text-sm text-white/55">{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Link href="/products/campus-comfort/" className="btn-primary mt-10">
                Discover Campus Comfort <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <PhoneMockup />
          </Reveal>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title={<>Everything you need to <span className="text-gradient">go digital</span></>}
            text="One team for design, development and growth — no juggling five agencies."
          />
          <Reveal>
            <Link href="/services/" className="btn-ghost shrink-0">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <Link href={`/services/#${s.slug}`} className="glow-card glass group flex h-full flex-col rounded-3xl p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-sun transition group-hover:bg-sun group-hover:text-ink">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{s.short}</p>
                <ArrowUpRight className="mt-6 h-5 w-5 text-white/30 transition group-hover:text-sun" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── STATS ───────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink/40 px-5 py-8 text-center sm:py-10">
                <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs text-white/55 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ───────── PROCESS ───────── */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading
          center
          eyebrow="How we work"
          title={<>From idea to launch in <span className="text-gradient">4 clear steps</span></>}
        />
        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          {process.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-white/5 bg-white/[0.02] p-6">
                <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-ink-2 font-display text-2xl font-bold text-gradient">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── WHY US ───────── */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Why Soladity"
            title={<>Built like founders. <span className="text-gradient">Delivered like pros.</span></>}
            text="We're a young, hungry team that treats your project like our own product — because building products is what we do."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="glass h-full rounded-3xl p-6">
                  <Icon name={v.icon} className="h-7 w-7 text-sun" />
                  <h3 className="mt-5 text-lg font-bold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <SectionHeading center eyebrow="FAQ" title={<>Questions? <span className="text-gradient">Answered.</span></>} />
        <Reveal className="mt-12">
          <Faq />
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

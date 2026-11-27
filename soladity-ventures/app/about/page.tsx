import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import { site, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — a product and technology startup building Campus Comfort and digital solutions for businesses.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Solid ideas. <span className="text-gradient">Bright futures.</span></>}
        text={`${site.name} was founded with a simple belief: great technology should make everyday life easier. We build our own products and partner with businesses to bring their ideas to life.`}
      />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-3xl p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sun">Our mission</span>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              To build simple, reliable products and digital experiences that solve real problems for real people.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass h-full rounded-3xl p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sun">Our vision</span>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              To become a home for products that people love — starting with students, and growing to every community we serve.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Our story" title={<>Why we started <span className="text-gradient">Soladity</span></>} />
          <Reveal className="space-y-5 text-white/60 leading-relaxed">
            {/* TODO: personalise this story */}
            <p>
              Soladity Ventures began as a small team of builders who kept seeing the same thing: students struggling to find
              comfortable, trustworthy living options near campus, and small businesses struggling to find a tech partner who
              truly cared about their growth.
            </p>
            <p>
              So we decided to tackle both. <b className="text-white">Campus Comfort</b> is our answer for students, and our
              services arm brings the same product mindset to every website, app and system we build for clients.
            </p>
            <p>The name says it all — <i>Sol</i> for the energy we bring, <i>Solidity</i> for the trust we build.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <SectionHeading center eyebrow="Our values" title={<>What we <span className="text-gradient">stand for</span></>} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="glow-card glass h-full rounded-3xl p-6">
                <Icon name={v.icon} className="h-7 w-7 text-sun" />
                <h3 className="mt-5 text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

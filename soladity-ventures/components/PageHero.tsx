import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 pt-36 sm:px-6 sm:pt-44">
      <Reveal className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sun">{eyebrow}</span>
        <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-white sm:text-6xl">{title}</h1>
        <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">{text}</p>
      </Reveal>
    </section>
  );
}

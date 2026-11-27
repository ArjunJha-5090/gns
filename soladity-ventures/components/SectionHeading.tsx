import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow, title, text, center = false,
}: { eyebrow: string; title: React.ReactNode; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sun">
        <span className="h-1.5 w-1.5 rounded-full bg-sun animate-pulse-glow" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{text}</p>}
    </Reveal>
  );
}

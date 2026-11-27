import { techMarquee } from "@/lib/content";

export default function Marquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <span key={i} aria-hidden={i >= techMarquee.length}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/60">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

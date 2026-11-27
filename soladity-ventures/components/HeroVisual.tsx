import { LogoMark } from "./Logo";
import Icon from "./Icon";
import type { IconName } from "@/lib/content";

const orbit: { icon: IconName; label: string }[] = [
  { icon: "code", label: "Web" },
  { icon: "phone", label: "Apps" },
  { icon: "palette", label: "Design" },
  { icon: "brain", label: "AI" },
  { icon: "cloud", label: "Cloud" },
  { icon: "bed", label: "Campus" },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(440px,86vw)]" aria-hidden>
      <div className="absolute inset-[14%] rounded-full bg-gradient-to-br from-sun/30 via-flare/20 to-nova/30 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-[36%] rounded-full border border-white/10 bg-ink-2/80 backdrop-blur-md grid place-items-center shadow-[0_0_80px_-10px_rgb(251_146_60/0.5)]">
        <LogoMark className="h-1/2 w-1/2" />
      </div>
      {/* rotating ring of icons */}
      <div className="absolute inset-0 animate-spin-slow">
        {orbit.map((o, i) => {
          const a = (i / orbit.length) * Math.PI * 2;
          const x = 50 + 50 * Math.cos(a);
          const y = 50 + 50 * Math.sin(a);
          return (
            <div key={o.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
              <div className="animate-[spin_18s_linear_infinite_reverse]">
                <div className="glass flex items-center gap-2 rounded-2xl px-2.5 py-2 sm:px-3 sm:py-2.5">
                  <Icon name={o.icon} className="h-4 w-4 text-sun sm:h-5 sm:w-5" />
                  <span className="hidden text-xs font-semibold text-white/80 sm:inline">{o.label}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { BedDouble, Utensils, BookOpen, Wifi, Star, MapPin, Search } from "lucide-react";

/** Illustrative Campus Comfort app screen, built in pure CSS (no images needed). */
export default function PhoneMockup() {
  const cats = [
    { I: BedDouble, t: "Stays" },
    { I: Utensils, t: "Food" },
    { I: BookOpen, t: "Study" },
    { I: Wifi, t: "Services" },
  ];
  return (
    <div className="relative mx-auto w-[min(290px,78vw)] animate-float" aria-hidden>
      <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-sun/25 via-flare/15 to-nova/25 blur-3xl" />
      <div className="relative rounded-[2.6rem] border border-white/15 bg-ink-2 p-2.5 shadow-2xl shadow-black/60">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-ink-3 to-ink">
          <div className="mx-auto mt-2.5 h-5 w-24 rounded-full bg-black" />
          <div className="px-4 pb-5 pt-4">
            <p className="text-[11px] text-white/50">Good evening 👋</p>
            <p className="font-display text-lg font-bold text-white">Find your comfort</p>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-[11px] text-white/40">
              <Search className="h-3.5 w-3.5" /> Search near your campus
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {cats.map(({ I, t }, i) => (
                <div key={t} className={`flex flex-col items-center gap-1 rounded-xl py-2.5 ${i === 0 ? "bg-gradient-to-br from-sun to-flare text-ink" : "bg-white/5 text-white/70"}`}>
                  <I className="h-4 w-4" />
                  <span className="text-[9px] font-semibold">{t}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-white/40">Popular near you</p>
            {[
              { n: "Sunrise Residency", p: "₹6,500", r: "4.8", d: "0.4 km" },
              { n: "Scholars' Nest PG", p: "₹5,200", r: "4.6", d: "0.9 km" },
            ].map((c, i) => (
              <div key={c.n} className="mt-2.5 flex gap-3 rounded-2xl border border-white/5 bg-white/[0.04] p-2.5">
                <div className={`h-14 w-14 shrink-0 rounded-xl ${i ? "bg-gradient-to-br from-nova/60 to-sky/40" : "bg-gradient-to-br from-sun/70 to-flare/50"}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-white">{c.n}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-[10px] text-white/45"><MapPin className="h-3 w-3" />{c.d} from campus</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xs font-bold text-sun">{c.p}<span className="text-[9px] font-normal text-white/40">/mo</span></span>
                    <span className="flex items-center gap-0.5 text-[10px] text-white/70"><Star className="h-3 w-3 fill-sun text-sun" />{c.r}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 rounded-xl bg-gradient-to-r from-sun to-flare py-2.5 text-center text-xs font-bold text-ink">Explore Campus Comfort</div>
          </div>
        </div>
      </div>
    </div>
  );
}

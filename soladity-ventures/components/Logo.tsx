import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="lg-sv" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset=".5" stopColor="#fb7185" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="#0b0d14" stroke="url(#lg-sv)" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="6.5" fill="url(#lg-sv)" />
      <path d="M20 6v4M20 30v4M6 20h4M30 20h4M10.1 10.1l2.8 2.8M27.1 27.1l2.8 2.8M10.1 29.9l2.8-2.8M27.1 12.9l2.8-2.8"
        stroke="url(#lg-sv)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Soladity Ventures home">
      <LogoMark />
      <span className="font-display text-lg font-bold leading-none tracking-tight text-white">
        Soladity<span className="block text-[10px] font-medium uppercase tracking-[0.32em] text-white/50">Ventures</span>
      </span>
    </Link>
  );
}

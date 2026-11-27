import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import Social from "./Social";
import { nav, services, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-ink-2/60 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-white/55">{site.tagline} Products and services crafted with care in {site.location}.</p>
          <Social />
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="text-white/70 hover:text-sun">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link href={`/services/#${s.slug}`} className="text-white/70 hover:text-sun">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">Get in touch</h3>
          <ul className="mt-4 space-y-4 text-sm text-white/70">
            <li><a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-sun"><Mail className="h-4 w-4 shrink-0 text-sun" />{site.email}</a></li>
            <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-sun"><Phone className="h-4 w-4 shrink-0 text-sun" />{site.phone}</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-sun" />{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed & built by {site.name}.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6">
        <nav
          className={`flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
            scrolled || open ? "border border-white/10 bg-ink/85 backdrop-blur-xl shadow-2xl shadow-black/40" : "border border-transparent"
          }`}
          aria-label="Main"
        >
          <Logo />
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive(n.href) ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive(n.href) && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10" />
                  )}
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link href="/contact/" className="btn-primary hidden !min-h-10 !px-5 text-sm sm:inline-flex">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[calc(5.5rem+env(safe-area-inset-top))] z-40 overflow-y-auto bg-ink/95 px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden"
          >
            <ul className="mt-4 space-y-2">
              {nav.map((n, i) => (
                <motion.li
                  key={n.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl border px-5 py-4 font-display text-2xl font-semibold ${
                      isActive(n.href) ? "border-sun/40 bg-sun/10 text-white" : "border-white/5 bg-white/[0.03] text-white/80"
                    }`}
                  >
                    {n.label}
                    <ArrowUpRight className="h-5 w-5 opacity-60" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link href="/contact/" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={`mailto:${site.email}`} className="mt-6 block text-center text-sm text-white/50">{site.email}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

type NavChild = { name: string; href: string; desc?: string };
type NavItem = { name: string; href: string; children?: NavChild[] };

const leftLinks: NavItem[] = [
  {
    name: 'About Us',
    href: '/about',
    children: [
      { name: 'Our Story', href: '/about', desc: 'Legacy since 1986' },
      { name: 'Vision & Mission', href: '/vision', desc: 'What we stand for' },
      { name: 'Desk Messages', href: '/desk-messages', desc: 'From our leadership' },
      { name: 'Student Council', href: '/council', desc: 'Student leadership' },
      { name: 'Our Faculty', href: '/faculty', desc: 'The people who teach' },
    ],
  },
  {
    name: 'Academics',
    href: '/academics',
    children: [
      { name: 'Academic Programmes', href: '/academics', desc: 'Nursery to Class XII' },
      { name: 'Academic Calendar', href: '/calendar', desc: 'Key dates this session' },
    ],
  },
  { name: 'Admissions', href: '/admissions' },
];

const rightLinks: NavItem[] = [
  {
    name: 'Campus Life',
    href: '/facilities',
    children: [
      { name: 'Facilities', href: '/facilities', desc: 'Classrooms, labs, sports' },
      { name: 'Activities', href: '/activities', desc: 'Clubs & co-curriculars' },
      { name: 'Hostel Life', href: '/hostel-life', desc: 'Std. I to XII' },
      { name: 'Gallery', href: '/gallery', desc: 'Moments from campus' },
      { name: 'Alumni', href: '/alumni', desc: 'GYANOBA network' },
    ],
  },
  { name: 'News & Events', href: '/news-events' },
  { name: 'Contact Us', href: '/contact' },
];

const topBarLinks = [
  { name: 'Mandatory Disclosure', href: '/mandatory-disclosure', external: false },
  { name: 'Pay Fees', href: 'https://student.schoolcanvas.com/', external: true },
  { name: 'ERP Login', href: 'https://student.schoolcanvas.com/', external: true },
  { name: 'Careers', href: '/careers', external: false },
];

const linkBase =
  "relative inline-flex items-center gap-1 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-red after:transition-all after:duration-300";

function DesktopItem({ item, pathname, align = 'left' }: { item: NavItem; pathname: string; align?: 'left' | 'right' }) {
  const isActive =
    pathname === item.href || (item.children?.some((c) => pathname === c.href) ?? false);
  const cls = `${linkBase} ${
    isActive ? 'text-red after:w-full' : 'text-dark hover:text-red after:w-0 hover:after:w-full'
  }`;

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className={cls} aria-current={pathname === item.href ? 'page' : undefined}>
          {item.name}
        </Link>
      </li>
    );
  }

  return (
    <li className="group relative">
      <Link href={item.href} className={cls} aria-haspopup="true">
        {item.name}
        <ChevronDown
          size={13}
          strokeWidth={3}
          className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </Link>
      <div className={`invisible absolute top-full z-50 w-64 translate-y-2 pt-4 ${align === 'left' ? '-left-4' : '-right-4'} opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
        <ul className="overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-[0_24px_60px_-12px_rgba(15,23,42,0.28)]">
          {item.children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className={`flex flex-col rounded-xl px-4 py-3 transition-colors hover:bg-red/5 ${
                  pathname === c.href ? 'bg-red/5' : ''
                }`}
              >
                <span className="text-[13px] font-bold text-navy">{c.name}</span>
                {c.desc && <span className="text-[11.5px] text-gray-500">{c.desc}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    const t = setTimeout(() => {
      setMobileOpen(false);
      setOpenGroup(null);
    }, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  // Lock body scroll + Esc to close while drawer is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex flex-col">
      {/* Top utility bar */}
      <div
        className={`hidden md:block w-full overflow-hidden bg-navy text-[10.5px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 ${
          scrolled ? 'h-0' : 'h-[36px]'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6">
          <span className="hidden text-white/60 md:block">Gyan Niketan School · Patna · Est. 1986</span>
          <ul className="ml-auto flex items-center gap-6 md:gap-7">
            {topBarLinks.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-1 transition-colors hover:text-gold"
                >
                  {l.name}
                  {l.external && <ArrowUpRight size={11} strokeWidth={3} />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main bar */}
      <nav
        aria-label="Primary"
        className={`w-full border-b border-black/5 transition-all duration-300 ${
          scrolled ? 'bg-white py-1 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.25)]' : 'bg-white/95 py-3 backdrop-blur-md'
        }`}
      >
        <div className="relative mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-6 lg:justify-center">
          <button
            className="-ml-2 p-2 text-dark lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={28} />
          </button>

          <ul className="absolute left-6 hidden items-center gap-9 lg:flex xl:gap-11">
            {leftLinks.map((l) => (
              <DesktopItem key={l.name} item={l} pathname={pathname} />
            ))}
          </ul>

          <Link
            href="/"
            aria-label="Gyan Niketan School — home"
            className={`z-50 flex origin-center items-center justify-center transition-transform duration-500 ${
              scrolled ? 'scale-[0.82]' : 'scale-100'
            }`}
          >
            <Image
              src="/logo.png"
              alt="Gyan Niketan School logo"
              width={84}
              height={84}
              priority
              className="rounded-full border border-gray-100 bg-white object-contain p-1 shadow-md"
            />
          </Link>

          <ul className="absolute right-6 hidden items-center gap-9 lg:flex xl:gap-11">
            {rightLinks.map((l) => (
              <DesktopItem key={l.name} item={l} pathname={pathname} align="right" />
            ))}
          </ul>

          <div className="w-10 lg:hidden" />
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[100] bg-navy/70 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 top-0 z-[110] flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 p-5">
                <Image src="/logo.png" alt="Gyan Niketan School" width={52} height={52} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2 text-gray-500 hover:text-red"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col py-2">
                {[...leftLinks, ...rightLinks].map((item) =>
                  item.children ? (
                    <div key={item.name} className="border-b border-gray-100">
                      <button
                        onClick={() => setOpenGroup(openGroup === item.name ? null : item.name)}
                        aria-expanded={openGroup === item.name}
                        className="flex w-full items-center justify-between px-6 py-4 text-left text-[13px] font-extrabold uppercase tracking-wider text-dark"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`text-gray-400 transition-transform ${openGroup === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {openGroup === item.name && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-gray-50"
                          >
                            {item.children.map((c) => (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  className={`block px-10 py-3 text-sm font-semibold hover:text-red ${
                                    pathname === c.href ? 'text-red' : 'text-gray-700'
                                  }`}
                                >
                                  {c.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`border-b border-gray-100 px-6 py-4 text-[13px] font-extrabold uppercase tracking-wider hover:text-red ${
                        pathname === item.href ? 'text-red' : 'text-dark'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              <div className="mt-auto flex flex-col gap-4 bg-navy p-6 text-white">
                {topBarLinks.map((l) => (
                  <Link
                    key={l.name}
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-gold"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

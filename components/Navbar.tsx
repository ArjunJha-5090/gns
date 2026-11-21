'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, UserRound, CreditCard, Phone, Mail, MapPin } from 'lucide-react';
import Shape, { type ShapeName } from '@/components/Shape';
import { school } from '@/lib/site-data';

type NavChild = { name: string; href: string };
type NavGroup = { name: string; href: string; shape: ShapeName; color: string; children: NavChild[] };

const groups: NavGroup[] = [
  {
    name: 'About Us',
    href: '/about',
    shape: 'bowtie',
    color: 'text-blue',
    children: [
      { name: 'Our Story', href: '/about' },
      { name: 'Vision & Mission', href: '/vision' },
      { name: 'Desk Messages', href: '/desk-messages' },
      { name: 'Student Council', href: '/council' },
      { name: 'Our Faculty', href: '/faculty' },
    ],
  },
  {
    name: 'Academics',
    href: '/academics',
    shape: 'book',
    color: 'text-green',
    children: [
      { name: 'Academic Programmes', href: '/academics' },
      { name: 'Senior Secondary Streams', href: '/academics#curriculum' },
      { name: 'Academic Calendar', href: '/calendar' },
      { name: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
    ],
  },
  {
    name: 'Admissions',
    href: '/admissions',
    shape: 'chevrons',
    color: 'text-pink',
    children: [
      { name: 'Admissions 2026–27', href: '/admissions' },
      { name: 'Visit the Campus', href: '/contact' },
      { name: 'Careers at GNS', href: '/careers' },
    ],
  },
  {
    name: 'Campus Life',
    href: '/facilities',
    shape: 'pyramid',
    color: 'text-yellow',
    children: [
      { name: 'Facilities', href: '/facilities' },
      { name: 'Activities', href: '/activities' },
      { name: 'Hostel Life', href: '/hostel-life' },
      { name: 'Gallery', href: '/gallery' },
    ],
  },
  {
    name: 'Community',
    href: '/news-events',
    shape: 'clover',
    color: 'text-coral',
    children: [
      { name: 'News & Events', href: '/news-events' },
      { name: 'Alumni (GYANOBA)', href: '/alumni' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
];

const utility = [
  { name: 'ERP Login', href: 'https://student.schoolcanvas.com/', icon: UserRound },
  { name: 'Pay Fees', href: 'https://student.schoolcanvas.com/', icon: CreditCard },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`flex items-stretch justify-between transition-all duration-500 ${
          scrolled ? 'bg-white shadow-[0_10px_40px_-18px_rgba(0,39,99,0.45)]' : 'bg-transparent md:px-[15px] md:pt-[15px]'
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Gyan Niketan School — home"
          className={`flex items-center gap-3 px-5 transition-all duration-500 sm:gap-4 md:px-8 ${scrolled ? 'py-2.5' : 'py-5 md:py-7'}`}
        >
          <Image
            src="/logo.png"
            alt=""
            width={64}
            height={64}
            priority
            className={`rounded-full bg-white object-contain p-1 shadow-md transition-all duration-500 ${
              scrolled ? 'h-11 w-11' : 'h-12 w-12 md:h-16 md:w-16'
            }`}
          />
          <span
            className={`font-semibold leading-[1.15] transition-colors duration-500 ${
              scrolled ? 'text-navy' : 'text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]'
            } text-[15px] md:text-[19px]`}
          >
            Gyan Niketan
            <br />
            School, Patna
          </span>
        </Link>

        {/* Utility box */}
        <div
          className={`flex items-center gap-1 bg-white px-3 transition-all duration-500 sm:px-5 md:gap-2 md:px-8 ${
            scrolled ? '' : 'md:h-[92px] md:self-start'
          }`}
        >
          {utility.map((u) => (
            <span key={u.name} className="hidden items-center lg:flex">
              <a
                href={u.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-blue"
              >
                <u.icon size={17} strokeWidth={1.8} />
                {u.name}
              </a>
              <span aria-hidden className="mx-2 h-5 w-px bg-ink/30" />
            </span>
          ))}
          <a
            href={school.phoneHref}
            aria-label={`Call ${school.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink transition-colors hover:bg-blue hover:text-white lg:hidden"
          >
            <Phone size={16} />
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="group inline-flex items-center gap-3 px-3 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-blue"
          >
            <span className="flex w-[22px] flex-col gap-[5px]" aria-hidden>
              <span className="h-[2px] w-full bg-current" />
              <span className="h-[2px] w-full bg-current transition-all group-hover:w-2/3" />
              <span className="h-[2px] w-full bg-current" />
            </span>
            Menu
          </button>
        </div>
      </div>

      {/* Full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[120] overflow-y-auto bg-navy text-white"
          >
            {/* decorative shapes */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <Shape name="quarters" className="absolute -bottom-24 -right-24 h-[380px] w-[380px] text-blue/60" />
              <Shape name="chevrons" className="absolute bottom-20 right-[340px] hidden h-24 w-24 text-yellow lg:block" />
              <Shape name="ring" className="absolute -bottom-20 -left-20 h-48 w-48 text-purple/50" />
            </div>

            <div className="relative mx-auto flex min-h-full max-w-[1400px] flex-col px-6 pb-14 md:px-12">
              <div className="flex items-center justify-between py-6 md:py-8">
                <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
                  <Image src="/logo.png" alt="" width={56} height={56} className="h-14 w-14 rounded-full bg-white p-1" />
                  <span className="text-lg font-semibold leading-tight">
                    Gyan Niketan
                    <br />
                    School, Patna
                  </span>
                </Link>
                <button
                  ref={closeRef}
                  onClick={() => setOpen(false)}
                  className="group inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/80 hover:text-yellow"
                >
                  Close
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-yellow">
                    <X size={20} />
                  </span>
                </button>
              </div>

              <div className="grid flex-1 gap-12 pt-6 lg:grid-cols-[1fr_320px] lg:gap-20 lg:pt-12">
                <nav aria-label="Primary" className="grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                  {groups.map((g, gi) => (
                    <motion.div
                      key={g.name}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + gi * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link href={g.href} className="group mb-5 inline-flex items-center gap-3">
                        <Shape name={g.shape} className={`h-7 w-7 ${g.color}`} />
                        <span className="text-[28px] font-medium leading-none tracking-tight transition-colors group-hover:text-yellow md:text-[34px]">
                          {g.name}
                        </span>
                      </Link>
                      <ul className="space-y-2.5 border-l border-white/15 pl-10">
                        {g.children.map((c) => (
                          <li key={c.href + c.name}>
                            <Link
                              href={c.href}
                              className={`text-[15px] transition-colors hover:text-yellow ${
                                pathname === c.href ? 'text-yellow' : 'text-white/75'
                              }`}
                            >
                              {c.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </nav>

                <motion.aside
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="space-y-8 border-t border-white/15 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
                >
                  <div className="flex flex-wrap gap-3">
                    <Link href="/admissions" className="btn-primary">Apply Now</Link>
                  </div>
                  <ul className="space-y-3">
                    {utility.map((u) => (
                      <li key={u.name}>
                        <a
                          href={u.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/85 hover:text-yellow"
                        >
                          <u.icon size={16} /> {u.name} <ArrowUpRight size={13} />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4 text-[15px] text-white/75">
                    <li className="flex gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-yellow" />
                      <span>{school.address}</span>
                    </li>
                    <li className="flex gap-3">
                      <Phone size={18} className="shrink-0 text-yellow" />
                      <a href={school.phoneHref} className="hover:text-white">{school.phone}</a>
                    </li>
                    <li className="flex gap-3">
                      <Mail size={18} className="shrink-0 text-yellow" />
                      <a href={`mailto:${school.email}`} className="hover:text-white">{school.email}</a>
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    {(
                      [
                        ['facebook-f', school.social.facebook, 'Facebook'],
                        ['instagram', school.social.instagram, 'Instagram'],
                        ['youtube', school.social.youtube, 'YouTube'],
                      ] as const
                    ).map(([icon, href, label]) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-yellow hover:bg-yellow hover:text-navy"
                      >
                        <i className={`fa-brands fa-${icon}`} />
                      </a>
                    ))}
                  </div>
                </motion.aside>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

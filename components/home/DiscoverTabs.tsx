'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Shape, { type ShapeName } from '@/components/Shape';

type Item = { key: string; shape: ShapeName; color: string; bg: string; title: string; sub: string; text: string; img: string; href: string; cta: string };

const items: Item[] = [
  {
    key: 'Academics',
    shape: 'drop',
    color: 'text-coral',
    bg: 'bg-coral',
    title: 'Academics',
    sub: 'CBSE · Nursery to Class XII',
    text: 'A rigorous CBSE curriculum from play-based learning in Kindergarten to stream-specific depth in Classes XI–XII, with integrated JEE and NEET preparation, career guidance and competent, caring faculty.',
    img: '/books.webp',
    href: '/academics',
    cta: 'Explore academics',
  },
  {
    key: 'Smart Learning',
    shape: 'clover',
    color: 'text-green',
    bg: 'bg-green',
    title: 'Smart Learning',
    sub: 'Smart classrooms · STEM lab',
    text: 'Interactive digital boards and multimedia projectors in classrooms, separate Physics, Chemistry and Biology labs, and a Robotics & STEM lab with coding workstations and AI tools.',
    img: '/smart.webp',
    href: '/facilities',
    cta: 'See our facilities',
  },
  {
    key: 'Sports',
    shape: 'bars',
    color: 'text-purple',
    bg: 'bg-purple',
    title: 'Sports',
    sub: 'Play · Fitness · Teamwork',
    text: 'A spacious multi-discipline playground for cricket, football, basketball, volleyball and athletics, with an inter-house sports meet that brings the whole school together every year.',
    img: '/gy.webp',
    href: '/activities',
    cta: 'Discover activities',
  },
  {
    key: 'Arts',
    shape: 'wedge',
    color: 'text-pink',
    bg: 'bg-pink',
    title: 'Arts & Culture',
    sub: 'Music · Dance · Visual arts',
    text: 'Dedicated art and music studios, cultural celebrations and our grand Annual Day give every child a stage to discover and express their creative talents.',
    img: '/art.webp',
    href: '/activities',
    cta: 'Discover activities',
  },
  {
    key: 'Hostel Life',
    shape: 'arch',
    color: 'text-blue',
    bg: 'bg-blue',
    title: 'Hostel Life',
    sub: 'A home away from home · Std. I–XII',
    text: 'Comfortable, well-ventilated dormitories, nutritious vegetarian meals, supervised study hours with resident teachers, 24/7 medical care and round-the-clock CCTV security.',
    img: '/aryan-class.webp',
    href: '/hostel-life',
    cta: 'Visit hostel life',
  },
  {
    key: 'Library',
    shape: 'pyramid',
    color: 'text-yellow',
    bg: 'bg-yellow',
    title: 'Library',
    sub: '10,000+ books · Digital resources',
    text: 'More than ten thousand books, digital resources and quiet study zones that foster a lifelong love of reading, research and independent enquiry.',
    img: '/3.webp',
    href: '/facilities',
    cta: 'See our facilities',
  },
];

export default function DiscoverTabs() {
  const [i, setI] = useState(0);
  const it = items[i];

  return (
    <div>
      <div role="tablist" aria-label="Discover life at Gyan Niketan" className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-7">
        {items.map((x, k) => (
          <button
            key={x.key}
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            className="group inline-flex items-center gap-3"
          >
            <Shape name={x.shape} className={`h-7 w-7 shrink-0 transition-transform duration-300 group-hover:rotate-12 sm:h-9 sm:w-9 ${x.color}`} />
            <span
              className={`px-1.5 text-[1.6rem] leading-[1.25] tracking-tight transition-colors sm:text-[2.3rem] ${
                k === i ? 'bg-ink text-white' : 'text-ink hover:text-navy'
              }`}
            >
              {x.key}
            </span>
          </button>
        ))}
      </div>

      <div className="relative mt-16 grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={it.key + '-img'}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className={`absolute -bottom-5 -left-5 h-2/3 w-2/3 ${it.bg}`} aria-hidden />
            <div className="relative aspect-[16/11] overflow-hidden shadow-[0_50px_80px_-40px_rgba(0,39,99,0.55)]">
              <Image src={it.img} alt={it.title} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={it.key + '-txt'}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-live="polite"
          >
            <h3 className="text-[2.6rem] font-semibold leading-none tracking-[-0.03em] text-navy sm:text-[3.4rem]">{it.title}</h3>
            <p className="mt-6 flex items-center gap-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy">
              <span className={`h-[3px] w-10 ${it.bg}`} /> {it.sub}
            </p>
            <p className="mt-7 text-[16px] leading-[1.85] text-ink">{it.text}</p>
            <Link href={it.href} className="btn-outline mt-9">{it.cta}</Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

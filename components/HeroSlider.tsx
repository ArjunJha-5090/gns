'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Shape, { type ShapeName } from '@/components/Shape';
import SplitText from '@/components/fx/SplitText';
import Magnetic from '@/components/fx/Magnetic';

const slides = [
  { src: '/3.webp', alt: 'A smart classroom at Gyan Niketan School', title: ['Global Minds,', 'Indian Hearts'], wipe: 'bg-yellow' },
  { src: '/gy.webp', alt: 'Gyan Niketan students on parade', title: ['To Be the Best in', 'Everything We Do'], wipe: 'bg-pink' },
  { src: '/smart.webp', alt: 'Students learning with interactive technology', title: ['Wisdom Matters', 'More Than Knowledge'], wipe: 'bg-green' },
  { src: '/aryan-class.webp', alt: 'Students engaged in a classroom session', title: ['Nursery to Class XII,', 'Since 1986'], wipe: 'bg-purple' },
];

const tiles = [
  { href: '/gallery', label: ['Explore', 'Our Campus'], bg: 'bg-blue', shape: 'chevrons' as const, shapeColor: 'text-yellow' },
  { href: '/news-events', label: ['Latest News', '& Events'], bg: 'bg-purple', shape: 'quarters' as const, shapeColor: 'text-pink' },
  { href: '/admissions', label: ['Admissions', '2026–27 Open'], bg: 'bg-green', shape: 'leaf' as const, shapeColor: 'text-yellow' },
];

const floaters: { name: ShapeName; color: string; cls: string; depth: number; spin: number }[] = [
  { name: 'ring', color: 'text-yellow', cls: 'right-[12%] top-[20%] h-20 w-20 md:h-28 md:w-28', depth: 40, spin: 40 },
  { name: 'triangle', color: 'text-pink', cls: 'right-[34%] top-[12%] h-10 w-10 md:h-14 md:w-14', depth: 70, spin: -60 },
  { name: 'clover', color: 'text-green', cls: 'left-[46%] top-[34%] hidden h-12 w-12 md:block', depth: 25, spin: 90 },
  { name: 'bowtie', color: 'text-coral', cls: 'right-[22%] top-[46%] hidden h-9 w-9 md:block', depth: 90, spin: -120 },
];

const DELAY = 7000;

function Floater({ f, mx, my, scroll }: { f: (typeof floaters)[number]; mx: MotionValue<number>; my: MotionValue<number>; scroll: MotionValue<number> }) {
  const x = useTransform(mx, (v) => v * f.depth);
  const y = useTransform([my, scroll] as MotionValue<number>[], ([v, s]: number[]) => v * f.depth - s * f.depth * 6);
  const rotate = useTransform(scroll, [0, 1], [0, f.spin * 4]);
  return (
    <motion.div style={{ x, y, rotate }} className={`pointer-events-none absolute z-[2] ${f.cls}`}>
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4 + f.depth / 30, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Shape name={f.name} className={`h-full w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] ${f.color}`} />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const section = useRef<HTMLElement>(null);

  const go = useCallback((d: number) => setIndex((i) => (i + d + slides.length) % slides.length), []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      const t = setTimeout(() => setPlaying(false), 0);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go(1), DELAY);
    return () => clearTimeout(t);
  }, [index, playing, go]);

  // Scroll: the whole hero shrinks into a rounded card and the photo drifts.
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const radius = useTransform(scrollYProgress, [0, 0.6], [0, 56]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  // Pointer parallax for the floating shapes.
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 60, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 60, damping: 18 });

  const s = slides[index];

  return (
    <section
      ref={section}
      aria-roledescription="carousel"
      aria-label="Welcome to Gyan Niketan School"
      className="frame md:pt-[15px]"
    >
      <motion.div
        style={{ scale, borderRadius: radius }}
        className="grid origin-top overflow-hidden md:grid-cols-[1fr_24%] md:grid-rows-[minmax(640px,calc(100svh-15px))]"
      >
        {/* Slider */}
        <div
          className="relative h-[88svh] min-h-[560px] overflow-hidden bg-navy md:h-auto"
          data-cursor="Drag"
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mxRaw.set(((e.clientX - r.left) / r.width - 0.5) * 2);
            myRaw.set(((e.clientY - r.top) / r.height - 0.5) * 2);
          }}
          onPointerLeave={() => {
            mxRaw.set(0);
            myRaw.set(0);
          }}
          onPointerDown={(e) => {
            const startX = e.clientX;
            const up = (ev: PointerEvent) => {
              const dx = ev.clientX - startX;
              if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
              window.removeEventListener('pointerup', up);
            };
            window.addEventListener('pointerup', up);
          }}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={s.src}
              initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              exit={{ opacity: 1, transition: { duration: 1.3 } }}
              transition={{ duration: 1.25, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-0"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <motion.div style={{ y: imgY }} className="absolute -inset-y-[10%] inset-x-0">
                <motion.div
                  initial={{ scale: 1.35 }}
                  animate={{ scale: playing ? 1.12 : 1.05 }}
                  transition={{ duration: playing ? 8 : 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image src={s.src} alt={s.alt} fill priority={index === 0} sizes="(min-width: 768px) 76vw, 100vw" className="object-cover" draggable={false} />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* coloured wipe bar leading each new slide */}
          <AnimatePresence initial={false}>
            <motion.div
              key={`wipe-${index}`}
              initial={{ left: '100%', width: '0%' }}
              animate={{ left: ['100%', '0%', '0%'], width: ['0%', '18%', '0%'] }}
              transition={{ duration: 1.25, ease: [0.77, 0, 0.175, 1], times: [0, 0.85, 1] }}
              className={`pointer-events-none absolute inset-y-0 z-[1] ${s.wipe}`}
            />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-navy/55 via-navy/10 to-navy/80" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-navy/50 to-transparent" />

          {floaters.map((f) => (
            <Floater key={f.name} f={f} mx={mx} my={my} scroll={scrollYProgress} />
          ))}

          <motion.div
            style={{ y: titleY, opacity: fade }}
            className="absolute inset-x-0 bottom-0 z-[3] flex flex-col gap-8 p-6 pb-10 sm:p-10 md:flex-row md:items-end md:justify-between md:p-12 lg:p-14"
          >
            <div className="max-w-4xl">
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
                className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:text-yellow"
              >
                <svg viewBox="0 0 44 44" className="absolute inset-0 -rotate-90" aria-hidden>
                  <circle cx="22" cy="22" r="20" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
                  <motion.circle
                    key={`${index}-${playing}`}
                    cx="22"
                    cy="22"
                    r="20"
                    fill="none"
                    stroke="#ffc548"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: playing ? 1 : 0 }}
                    transition={{ duration: playing ? DELAY / 1000 : 0, ease: 'linear' }}
                  />
                </svg>
                {playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
              </button>
              <p className="mb-5 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-white/80">
                <span className="tabular-nums text-yellow">{String(index + 1).padStart(2, '0')}</span>
                <span className="h-px w-10 bg-white/50" />
                <span className="tabular-nums">{String(slides.length).padStart(2, '0')}</span>
              </p>
              <h1 key={index} className="text-[2.6rem] font-medium leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-[5.6rem]">
                <SplitText text={s.title[0]} delay={0.35} />
                <br />
                <SplitText text={s.title[1]} delay={0.35 + s.title[0].length * 0.028} />
              </h1>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              {[
                { d: -1, label: 'Previous slide', Icon: ChevronLeft },
                { d: 1, label: 'Next slide', Icon: ChevronRight },
              ].map(({ d, label, Icon }) => (
                <Magnetic key={label}>
                  <button
                    onClick={() => go(d)}
                    aria-label={label}
                    className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/80 text-white transition-colors duration-300 hover:border-yellow hover:bg-yellow hover:text-navy"
                  >
                    <Icon size={20} />
                  </button>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Colour tiles */}
        <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-3">
          {tiles.map((t, i) => (
            <motion.div
              key={t.href}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden"
            >
              <Link
                href={t.href}
                className={`group relative isolate flex h-full min-h-[120px] flex-col justify-end overflow-hidden ${t.bg} p-4 text-white sm:p-6 lg:p-9`}
              >
                <span className={`absolute right-0 top-0 -z-10 ${i === 0 ? 'md:top-[77px]' : ''}`}>
                  <Shape
                    name={t.shape}
                    className={`h-10 w-14 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:rotate-[-12deg] group-hover:scale-125 sm:h-24 sm:w-32 lg:h-36 lg:w-44 ${t.shapeColor}`}
                  />
                </span>
                {/* hover flood */}
                <span className="absolute inset-0 -z-20 origin-bottom scale-y-0 bg-navy transition-transform duration-500 ease-[cubic-bezier(.77,0,.175,1)] group-hover:scale-y-100" />
                <span className="flex items-end justify-between gap-3">
                  <span className="text-[13px] font-normal leading-[1.25] sm:text-lg lg:text-[26px]">
                    {t.label[0]}
                    <br />
                    {t.label[1]}
                  </span>
                  <ArrowRight className="hidden shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 sm:block" size={30} strokeWidth={1.5} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

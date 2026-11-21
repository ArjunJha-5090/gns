'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Shape from '@/components/Shape';

const slides = [
  { src: '/3.webp', alt: 'A smart classroom at Gyan Niketan School', title: ['Global Minds,', 'Indian Hearts'] },
  { src: '/gy.webp', alt: 'Gyan Niketan students on parade', title: ['To Be the Best in', 'Everything We Do'] },
  { src: '/smart.webp', alt: 'Students learning with interactive technology', title: ['Wisdom Matters', 'More Than Knowledge'] },
  { src: '/aryan-class.webp', alt: 'Students engaged in a classroom session', title: ['Nursery to Class XII,', 'Since 1986'] },
];

const tiles = [
  { href: '/gallery', label: ['Explore', 'Our Campus'], bg: 'bg-blue', shape: 'chevrons' as const, shapeColor: 'text-yellow' },
  { href: '/news-events', label: ['Latest News', '& Events'], bg: 'bg-purple', shape: 'quarters' as const, shapeColor: 'text-pink' },
  { href: '/admissions', label: ['Admissions', '2026–27 Open'], bg: 'bg-green', shape: 'leaf' as const, shapeColor: 'text-yellow' },
];

const DELAY = 7000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

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

  const s = slides[index];

  return (
    <section aria-roledescription="carousel" aria-label="Welcome to Gyan Niketan School" className="frame md:pt-[15px]">
      <div className="grid md:grid-cols-[1fr_24%] md:grid-rows-[minmax(640px,calc(100svh-15px))]">
        {/* Slider */}
        <div className="relative h-[88svh] min-h-[560px] overflow-hidden bg-navy md:h-auto">
          <AnimatePresence initial={false}>
            <motion.div
              key={s.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="absolute inset-0"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 768px) 76vw, 100vw"
                className={`object-cover ${playing ? 'kb-active' : ''}`}
              />
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/10 to-navy/75" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/45 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-8 p-6 pb-10 sm:p-10 md:flex-row md:items-end md:justify-between md:p-12 lg:p-14">
            <div className="max-w-4xl">
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
                className="mb-8 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-navy"
              >
                {playing ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />}
              </button>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[2.6rem] font-medium leading-[1.06] tracking-[-0.025em] text-white sm:text-6xl lg:text-[5.4rem]"
                >
                  {s.title[0]}
                  <br />
                  {s.title[1]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:bg-white hover:text-navy"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next slide"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:bg-white hover:text-navy"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* progress */}
          <div className="absolute bottom-0 left-0 h-[4px] w-full bg-white/15">
            <motion.div
              key={`${index}-${playing}`}
              initial={{ width: '0%' }}
              animate={{ width: playing ? '100%' : '0%' }}
              transition={{ duration: playing ? DELAY / 1000 : 0, ease: 'linear' }}
              className="h-full bg-yellow"
            />
          </div>
        </div>

        {/* Colour tiles */}
        <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-3">
          {tiles.map((t, i) => (
            <Link
              key={t.href}
              href={t.href}
              className={`group relative isolate flex min-h-[120px] flex-col justify-end overflow-hidden ${t.bg} p-4 text-white sm:p-6 lg:p-9`}
            >
              <motion.span
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute right-0 top-0 -z-10 ${i === 0 ? 'md:top-[77px]' : ''}`}
              >
                <Shape
                  name={t.shape}
                  className={`h-10 w-14 transition-transform duration-700 group-hover:scale-110 sm:h-24 sm:w-32 lg:h-36 lg:w-44 ${t.shapeColor}`}
                />
              </motion.span>
              <span className="absolute inset-0 -z-20 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/15" />
              <span className="flex items-end justify-between gap-3">
                <span className="text-[13px] font-normal leading-[1.25] sm:text-lg lg:text-[26px]">
                  {t.label[0]}
                  <br />
                  {t.label[1]}
                </span>
                <ArrowRight className="hidden shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 sm:block" size={30} strokeWidth={1.5} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

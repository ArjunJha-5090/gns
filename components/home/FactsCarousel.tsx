'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { animate, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Shape, { type ShapeName } from '@/components/Shape';

type Fact = { value: number; prefix?: string; suffix?: string; label: string; bg: string; fg: string; shape: ShapeName; shapeColor: string; raw?: boolean };

const years = new Date().getFullYear() - 1986;

const facts: Fact[] = [
  { value: 1986, label: 'Year of founding', bg: 'bg-purple', fg: 'text-white', shape: 'chevronUp', shapeColor: 'text-yellow', raw: true },
  { value: years, suffix: '+', label: 'Years of legacy', bg: 'bg-green', fg: 'text-navy', shape: 'ring', shapeColor: 'text-yellow' },
  { value: 5000, suffix: '+', label: 'GYANOBA alumni worldwide', bg: 'bg-pink', fg: 'text-navy', shape: 'steps', shapeColor: 'text-purple' },
  { value: 15, label: 'Grades, Nursery to Class XII', bg: 'bg-blue', fg: 'text-white', shape: 'quarters', shapeColor: 'text-yellow' },
  { value: 10000, suffix: '+', label: 'Books in our library', bg: 'bg-yellow', fg: 'text-navy', shape: 'book', shapeColor: 'text-coral' },
  { value: 4, label: 'Senior Secondary streams', bg: 'bg-coral', fg: 'text-white', shape: 'clover', shapeColor: 'text-yellow' },
  { value: 1990, label: 'First CBSE board batch', bg: 'bg-navy', fg: 'text-white', shape: 'chevrons', shapeColor: 'text-green', raw: true },
  { value: 3, label: 'Languages taught — English, Hindi, Sanskrit', bg: 'bg-green', fg: 'text-white', shape: 'bowtie', shapeColor: 'text-blue' },
];

function Counter({ value, raw, suffix }: { value: number; raw?: boolean; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(raw ? value : 0);

  useEffect(() => {
    if (!inView || raw) return;
    const c = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, raw, value]);

  return (
    <span ref={ref}>
      {raw ? value : n.toLocaleString('en-IN')}
      {suffix && <span className="align-top text-[0.45em] font-normal">{suffix}</span>}
    </span>
  );
}

export default function FactsCarousel() {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (d: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li');
    const w = card ? card.getBoundingClientRect().width + 16 : 360;
    el.scrollBy({ left: d * w, behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="facts-heading" className="overflow-hidden py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[32%_1fr] lg:gap-0">
        <div className="px-6 sm:px-12 lg:pl-[max(3rem,calc((100vw-1400px)/2+3rem))] lg:pr-12 lg:pt-10">
          <p className="eyebrow mb-6 !text-ink">Facts &amp; Figures</p>
          <h2 id="facts-heading" className="text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.03em] text-navy sm:text-[3.4rem]">
            By the
            <br />
            Numbers
          </h2>
          <p className="mt-8 max-w-sm text-[16px] leading-[1.85] text-ink">
            Four decades of learning, character and achievement in the heart of Patna — and a family that now spans the globe.
          </p>
        </div>

        <div className="min-w-0">
          <ul
            ref={track}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 sm:px-12 lg:px-0"
            aria-label="School facts"
          >
            {facts.map((f) => (
              <li
                key={f.label}
                className={`group relative flex aspect-[3/4] w-[78vw] max-w-[360px] shrink-0 snap-start flex-col justify-end overflow-hidden p-8 sm:w-[340px] md:p-10 ${f.bg} ${f.fg}`}
              >
                <Shape
                  name={f.shape}
                  className={`absolute right-0 top-0 h-36 w-36 transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-6 md:h-44 md:w-44 ${f.shapeColor}`}
                />
                <p className="text-[4.6rem] font-light leading-none tracking-[-0.04em] md:text-[5.6rem]">
                  <Counter value={f.value} raw={f.raw} suffix={f.suffix} />
                </p>
                <p className="mt-5 text-[1.35rem] leading-snug">{f.label}</p>
              </li>
            ))}
            <li aria-hidden className="w-6 shrink-0 sm:w-12" />
          </ul>

          <div className="mt-10 flex items-center justify-between gap-6 px-6 sm:px-12 lg:pl-0 lg:pr-[max(3rem,calc((100vw-1400px)/2+3rem))]">
            <Link href="/about" className="btn-outline">Discover our story</Link>
            <div className="flex gap-3">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous facts"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-navy text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next facts"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-navy text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

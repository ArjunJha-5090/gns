'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Shape, { type ShapeName } from '@/components/Shape';

const stages: { n: string; title: string; grades: string; text: string; img: string; href: string; bg: string; fg: string; shape: ShapeName; shapeColor: string }[] = [
  { n: '01', title: 'Kindergarten', grades: 'Nursery – UKG', text: 'Play-based learning, language development, motor skills and social interaction.', img: '/art.webp', href: '/academics#preschool', bg: 'bg-yellow', fg: 'text-navy', shape: 'circle', shapeColor: 'text-pink' },
  { n: '02', title: 'Primary School', grades: 'Class I – V', text: 'Core literacy, numeracy, EVS and the arts through activity-based, experiential learning.', img: '/smart.webp', href: '/academics#primary', bg: 'bg-pink', fg: 'text-navy', shape: 'steps', shapeColor: 'text-purple' },
  { n: '03', title: 'Middle School', grades: 'Class VI – VIII', text: 'Subject specialisation, STEM lab work, critical thinking and leadership activities.', img: '/3.webp', href: '/academics#middle', bg: 'bg-green', fg: 'text-white', shape: 'chevronUp', shapeColor: 'text-yellow' },
  { n: '04', title: 'Secondary', grades: 'Class IX – X', text: 'CBSE board preparation, comprehensive coverage and exam-readiness training.', img: '/books.webp', href: '/academics#secondary', bg: 'bg-coral', fg: 'text-white', shape: 'ring', shapeColor: 'text-yellow' },
  { n: '05', title: 'Senior Secondary', grades: 'Class XI – XII', text: 'Science, Commerce, Humanities and Vocational streams, competitive exam coaching and career guidance.', img: '/aryan-class.webp', href: '/academics#senior', bg: 'bg-purple', fg: 'text-white', shape: 'quarters', shapeColor: 'text-pink' },
];

function Card({ s }: { s: (typeof stages)[number] }) {
  return (
    <Link
      href={s.href}
      data-cursor="Explore"
      className="group relative flex h-full w-[82vw] shrink-0 snap-start flex-col overflow-hidden bg-white sm:w-[420px] lg:w-[34vw] lg:max-w-[520px]"
    >
      <div className={`relative flex items-start justify-between overflow-hidden p-7 lg:p-9 ${s.bg} ${s.fg}`}>
        <span className="text-[4.5rem] font-light leading-none tracking-[-0.05em] lg:text-[6rem]">{s.n}</span>
        <Shape
          name={s.shape}
          className={`h-20 w-20 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-[25deg] group-hover:scale-125 lg:h-24 lg:w-24 ${s.shapeColor}`}
        />
      </div>
      <div className="relative min-h-[180px] flex-1 overflow-hidden">
        <Image
          src={s.img}
          alt=""
          fill
          sizes="(min-width:1024px) 34vw, 82vw"
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110"
        />
        <span className={`absolute inset-0 origin-left scale-x-0 opacity-60 mix-blend-multiply transition-transform duration-700 ease-[cubic-bezier(.77,0,.175,1)] group-hover:scale-x-100 ${s.bg}`} />
      </div>
      <div className="p-7 lg:p-9">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-blue">{s.grades}</p>
        <h3 className="mt-2 flex items-center justify-between text-[1.9rem] font-semibold tracking-tight text-navy">
          {s.title}
          <ArrowRight size={28} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-2" />
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink">{s.text}</p>
      </div>
    </Link>
  );
}

export default function JourneyScroller() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [pin, setPin] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const lg = window.matchMedia('(min-width: 1024px)').matches;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setPin(lg && !reduce);
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const bar = useTransform(smooth, [0, 1], ['0%', '100%']);
  const spin = useTransform(smooth, [0, 1], [0, 360]);

  return (
    <section
      ref={section}
      aria-labelledby="journey-heading"
      className="frame"
      style={pin ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={`relative overflow-hidden bg-blue ${pin ? 'sticky top-0 h-screen' : 'py-20'}`}>
        <motion.div style={{ rotate: spin }} className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] text-white/10" aria-hidden>
          <Shape name="quarters" className="h-full w-full" />
        </motion.div>

        <div className={pin ? 'flex h-full items-center' : ''}>
          <motion.div
            ref={track}
            style={pin ? { x } : undefined}
            className={`flex gap-5 px-6 sm:px-12 lg:h-[78vh] lg:pl-[6vw] lg:pr-[10vw] ${
              pin ? 'w-max' : 'no-scrollbar snap-x snap-mandatory overflow-x-auto'
            }`}
          >
            {/* intro panel */}
            <div className="flex w-[82vw] shrink-0 snap-start flex-col justify-center text-white sm:w-[420px] lg:w-[36vw] lg:pr-[4vw]">
              <p className="eyebrow eyebrow--light mb-6">From Nursery to Class XII</p>
              <h2 id="journey-heading" className="text-[3rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[4.8vw]">
                Our Learning Journey
              </h2>
              <p className="mt-8 max-w-md text-[17px] leading-[1.8] text-white/85">
                Five stages, one continuous story — a CBSE education that grows with every child, from their first day in
                Nursery to the day they graduate.
              </p>
              {pin && (
                <p className="mt-10 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-yellow">
                  Keep scrolling <ArrowRight size={18} />
                </p>
              )}
            </div>

            {stages.map((s) => (
              <Card key={s.n} s={s} />
            ))}

            {/* outro panel */}
            <div className="flex w-[82vw] shrink-0 snap-start flex-col items-start justify-center gap-8 text-white sm:w-[380px] lg:w-[28vw]">
              <Shape name="chevrons" className="h-24 w-24 text-yellow" />
              <p className="text-[2.2rem] font-semibold leading-tight tracking-tight lg:text-[2.8rem]">
                Ready to see the full programme?
              </p>
              <Link href="/academics" className="btn-primary hover:!border-white hover:!bg-white hover:!text-navy">
                Academics at Gyan Niketan
              </Link>
            </div>
          </motion.div>
        </div>

        {pin && (
          <div className="absolute inset-x-[6vw] bottom-8 h-[3px] bg-white/20" aria-hidden>
            <motion.div style={{ width: bar }} className="h-full bg-yellow" />
          </div>
        )}
      </div>
    </section>
  );
}

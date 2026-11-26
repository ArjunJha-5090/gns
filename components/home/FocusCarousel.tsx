'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Shape, { type ShapeName } from '@/components/Shape';

type Pillar = { title: string; text: string; color: string; accent: string; shape: ShapeName; img: string };

const pillars: Pillar[] = [
  {
    title: 'Holistic Growth',
    text: 'We nurture every dimension of a child — academic, physical, emotional and social — so that each student discovers and explores their full potential.',
    color: 'bg-green',
    accent: 'text-yellow',
    shape: 'leaf',
    img: '/aryan-class.webp',
  },
  {
    title: 'Rooted in Values',
    text: 'Our education is grounded in Indian culture and moral values. We shape responsible, compassionate citizens who carry their heritage with pride.',
    color: 'bg-blue',
    accent: 'text-yellow',
    shape: 'chevronUp',
    img: '/gy.webp',
  },
  {
    title: 'Academic Excellence',
    text: 'A result-oriented CBSE curriculum taught by competent faculty, with Science, Commerce, Humanities and Vocational streams at Senior Secondary.',
    color: 'bg-purple',
    accent: 'text-pink',
    shape: 'quarters',
    img: '/books.webp',
  },
  {
    title: 'Future-Ready Skills',
    text: 'Smart classrooms and a dedicated STEM lab with robotics, coding and AI build the confidence and creativity the 21st century demands.',
    color: 'bg-coral',
    accent: 'text-yellow',
    shape: 'ring',
    img: '/smart.webp',
  },
];

export default function FocusCarousel() {
  const [i, setI] = useState(0);
  const p = pillars[i];
  const go = (d: number) => setI((v) => (v + d + pillars.length) % pillars.length);

  return (
    <section aria-labelledby="values-heading" className="frame pt-24 md:pt-32">
      <div className="grid lg:grid-cols-[48%_1fr]">
        {/* Colour panel */}
        <div className={`relative min-h-[420px] overflow-hidden transition-colors duration-700 lg:min-h-full ${p.color}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={p.img}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-y-[18%] left-[14%] right-0"
            >
              <Image src={p.img} alt="" fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
              <div className={`absolute inset-0 mix-blend-multiply opacity-25 ${p.color}`} />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={p.shape}
              initial={{ opacity: 0, y: -30, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[8%] top-[8%]"
            >
              <Shape name={p.shape} className={`h-28 w-28 md:h-36 md:w-36 ${p.accent}`} />
            </motion.div>
          </AnimatePresence>
          <Shape name="chevronUp" className="absolute bottom-[6%] right-[8%] h-20 w-20 text-white/25 md:h-28 md:w-28" />
        </div>

        {/* Copy */}
        <div className="bg-mist px-6 py-16 sm:px-12 md:py-24 lg:px-[12%]">
          <p className="eyebrow mb-6 !text-ink">Learning at Gyan Niketan</p>
          <h2 id="values-heading" className="text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.2rem]">
            An Education Rooted in Values
          </h2>
          <p className="mt-10 max-w-xl text-[16px] leading-[1.85] text-ink lg:ml-14">
            Gyan Niketan — the &lsquo;Abode of Knowledge&rsquo; — was founded in 1986 by Padma Shree Acharya Kishore Kunal and
            Mrs. Anita Kunal under the M.V.V. Nyas. Modern infrastructure, smart classrooms and dedicated teachers prepare our
            students for global challenges while keeping them grounded in their heritage.
          </p>
          <a
            href="#pillars"
            className="group mt-10 inline-flex items-center gap-4 text-[15px] font-semibold uppercase tracking-[0.18em] text-ink lg:ml-14"
          >
            Our four pillars
            <ArrowDown size={26} strokeWidth={1.5} className="transition-transform group-hover:translate-y-1" />
          </a>

          <div id="pillars" className="scroll-mt-32 pt-20">
            <p className="eyebrow mb-4 !text-ink">What guides us</p>
            <h3 className="text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-[3.4rem]">
              Four Pillars
              <br />
              of Learning
            </h3>

            <div className="mt-10 min-h-[220px]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-5">
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-tr-[28px] text-white ${p.color}`}>
                      <span className="text-2xl font-semibold">{i + 1}</span>
                    </span>
                    <h4 className="text-[1.9rem] font-semibold tracking-tight text-navy">{p.title}</h4>
                  </div>
                  <p className="mt-7 max-w-lg text-[16px] leading-[1.85] text-navy/85 lg:ml-[76px]">{p.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between gap-6">
              <div className="flex items-center" role="tablist" aria-label="Pillars">
                {pillars.map((pl, k) => (
                  <span key={pl.title} className="flex items-center">
                    {k > 0 && <span className="h-[2px] w-8 bg-navy sm:w-12" />}
                    <button
                      role="tab"
                      aria-selected={k === i}
                      aria-label={pl.title}
                      onClick={() => setI(k)}
                      className={`h-4 w-4 rounded-full border-2 transition-all ${
                        k === i ? 'scale-110 border-purple bg-purple' : 'border-navy bg-transparent hover:bg-navy/20'
                      }`}
                    />
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous pillar"
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-navy text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next pillar"
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-navy text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

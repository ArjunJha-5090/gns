'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Shape from '@/components/Shape';

const stories = [
  {
    tab: 'Principal',
    name: 'From the Principal',
    role: "Principal's desk",
    quote:
      'Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations. We provide an atmosphere where children are encouraged to channelise their potential in the pursuit of excellence.',
    img: '/aryan-class.webp',
    href: '/desk-messages',
  },
  {
    tab: 'Administration',
    name: 'From the Management',
    role: "Administrator's desk",
    quote:
      'A school is a place where students begin to learn lessons of life. Our constant endeavour is to create a climate of continuous improvement and excellence, in a safe and nurturing environment.',
    img: '/gy.webp',
    href: '/desk-messages',
  },
  {
    tab: 'Alumni',
    name: 'GYANOBA',
    role: 'Alumni network',
    quote:
      'Since 1990 our alumni have gone on to excel in engineering, medicine, civil services, business and the arts — and they stay connected, mentoring the students who walk the same corridors today.',
    img: '/toppers.jpeg',
    href: '/alumni',
  },
];

const RING_TEXT = 'READ STORY · READ STORY · READ STORY · ';

export default function StoriesTabs() {
  const [i, setI] = useState(0);
  const s = stories[i];

  return (
    <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
      <div>
        <p className="eyebrow eyebrow--light mb-6">Community Voices</p>
        <h2 className="text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.2rem]">
          Stories That
          <br />
          Connect Us
        </h2>
        <div role="tablist" aria-label="Story categories" className="mt-10 flex flex-wrap gap-2">
          {stories.map((st, k) => (
            <button
              key={st.tab}
              role="tab"
              aria-selected={k === i}
              onClick={() => setI(k)}
              className={`rounded-full border-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                k === i ? 'border-white text-white' : 'border-transparent text-white/75 hover:text-white'
              }`}
            >
              {st.tab}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 max-w-xl text-[16px] leading-[1.85] text-white/90"
          >
            &ldquo;{s.quote}&rdquo;
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="relative mx-auto w-full max-w-[600px] pb-24 lg:pb-16">
        {/* Pink quarter-arch with photo */}
        <div className="relative ml-auto aspect-[1/1.02] w-[88%] overflow-hidden rounded-tr-[100%] bg-pink">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.img}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image src={s.img} alt="" fill sizes="(min-width:1024px) 40vw, 85vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-pink/30" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Name card */}
        <Link
          href={s.href}
          className="group absolute bottom-0 left-0 flex w-[86%] max-w-[460px] items-center gap-5 bg-[#0043b3] p-7 shadow-[0_40px_60px_-30px_rgba(0,0,0,0.6)] sm:p-10"
        >
          <Shape name="chevrons" className="h-9 w-9 shrink-0 text-green" />
          <span>
            <span className="block text-[1.7rem] font-normal leading-tight text-white sm:text-[2.1rem]">{s.name}</span>
            <span className="mt-3 flex items-center gap-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
              <span className="h-[2px] w-10 bg-white" /> {s.role}
            </span>
          </span>
          {/* rotating ring */}
          <span className="absolute -right-12 -top-24 hidden h-32 w-32 sm:block">
            <svg viewBox="0 0 100 100" className="spin-slow h-full w-full text-white" aria-hidden>
              <defs>
                <path id="ring-path" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
              </defs>
              <text fontSize="9.2" fontWeight="600" letterSpacing="2" fill="currentColor">
                <textPath href="#ring-path">{RING_TEXT}</textPath>
              </text>
            </svg>
            <Plus size={44} strokeWidth={2.5} className="absolute inset-0 m-auto text-white transition-transform duration-500 group-hover:rotate-90" />
          </span>
        </Link>
      </div>
    </div>
  );
}

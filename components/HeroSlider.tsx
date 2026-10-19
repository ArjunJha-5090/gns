'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, A11y } from 'swiper/modules';
import { ArrowRight, ChevronDown } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    src: '/3.webp',
    alt: 'A smart classroom at Gyan Niketan School',
    eyebrow: 'Gyan Niketan School · Patna',
    title: (
      <>
        Global Minds, <em>Indian Hearts.</em>
      </>
    ),
    body: 'A school where culture is built through happiness, and children are moulded into independent individuals.',
  },
  {
    src: '/smart.webp',
    alt: 'Students learning with interactive technology',
    eyebrow: 'What We Believe',
    title: (
      <>
        Wisdom matters more than <em>knowledge.</em>
      </>
    ),
    body: 'We nurture curious, thoughtful learners who know how to think — not only what to think.',
  },
  {
    src: '/gy.webp',
    alt: 'Gyan Niketan students on parade',
    eyebrow: 'Our Aspiration',
    title: (
      <>
        To be the best in <em>everything we do.</em>
      </>
    ),
    body: 'Discipline, character and excellence — in academics, in sport, and in the way we treat one another.',
  },
];

const container: Variants = {
  hide: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};
const item: Variants = {
  hide: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full bg-navy" aria-roledescription="carousel" aria-label="Welcome to Gyan Niketan School">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        autoplay={{ delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        rewind
        onSlideChange={(s) => setActive(s.realIndex)}
        className="hero-swiper h-[100svh] min-h-[640px] w-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.src} className="relative h-full w-full overflow-hidden">
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className={`object-cover ${active === i ? 'kenburns' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/45 to-navy/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-[1400px] px-6 pt-[120px] md:px-10">
                <motion.div
                  variants={container}
                  initial="hide"
                  animate={active === i ? 'show' : 'hide'}
                  className="max-w-3xl"
                >
                  <motion.span variants={item} className="eyebrow eyebrow--light mb-6">
                    {s.eyebrow}
                  </motion.span>
                  {i === 0 ? (
                    <motion.h1
                      variants={item}
                      className="display-heading !text-white text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl [&_em]:!text-gold"
                    >
                      {s.title}
                    </motion.h1>
                  ) : (
                    <motion.h2
                      variants={item}
                      className="display-heading !text-white text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl [&_em]:!text-gold"
                    >
                      {s.title}
                    </motion.h2>
                  )}
                  <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                    {s.body}
                  </motion.p>
                  <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
                    <Link
                      href="/admissions"
                      className="group inline-flex items-center gap-3 rounded-full bg-red px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white shadow-lg shadow-red/30 transition-all hover:-translate-y-0.5 hover:bg-red-dark"
                    >
                      Apply for Admission
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="#explore"
                      className="inline-flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-navy"
                    >
                      Explore Campus
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <a
        href="#welcome"
        aria-label="Scroll to content"
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ChevronDown size={18} />
        </motion.span>
      </a>
    </section>
  );
}

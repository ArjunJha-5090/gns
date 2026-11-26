'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, animate, motion } from 'framer-motion';
import Shape, { type ShapeName } from '@/components/Shape';

const KEY = 'gns-intro-seen';

const panels = ['bg-navy', 'bg-blue', 'bg-purple', 'bg-pink', 'bg-yellow'];
const shapes: { name: ShapeName; color: string }[] = [
  { name: 'chevrons', color: 'text-yellow' },
  { name: 'quarters', color: 'text-pink' },
  { name: 'ring', color: 'text-green' },
  { name: 'bowtie', color: 'text-blue' },
  { name: 'clover', color: 'text-coral' },
];

/**
 * First-visit intro: a counter runs to 100 while the brand shapes pop in,
 * then five colour panels sweep up to reveal the page. Skipped on later
 * visits in the same session and for reduced-motion users.
 */
export default function Preloader() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === '1';
      sessionStorage.setItem(KEY, '1');
    } catch {}
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduce) {
      const t = setTimeout(() => setShow(false), 0);
      return () => clearTimeout(t);
    }
    document.documentElement.style.overflow = 'hidden';
    const c = animate(0, 100, {
      duration: 1.6,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setTimeout(() => setShow(false), 180),
    });
    return () => {
      c.stop();
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = '';
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div key="intro" className="fixed inset-0 z-[9999]" aria-hidden exit={{ transition: { duration: 1.3 } }}>
          {/* colour panels that sweep away on exit */}
          <div className="absolute inset-0 flex">
            {panels.map((bg, i) => (
              <motion.div
                key={bg}
                className={`h-full flex-1 ${bg}`}
                initial={{ y: 0 }}
                exit={{ y: '-100%', transition: { duration: 0.85, delay: i * 0.07, ease: [0.76, 0, 0.24, 1] } }}
              />
            ))}
          </div>

          {/* content layer sits on a navy sheet that leaves first */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-navy text-white"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <div className="flex items-center gap-3 md:gap-5">
              {shapes.map((s, i) => (
                <motion.span
                  key={s.name}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1 + i * 0.12, type: 'spring', stiffness: 260, damping: 16 }}
                >
                  <Shape name={s.name} className={`h-10 w-10 md:h-16 md:w-16 ${s.color}`} />
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-10 text-center text-xl font-semibold tracking-tight md:text-3xl"
            >
              Gyan Niketan School
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.7 }}
              className="mt-2 text-[12px] font-semibold uppercase tracking-[0.3em]"
            >
              Global Minds · Indian Hearts
            </motion.p>
            <span className="absolute bottom-6 right-8 text-[18vw] font-light leading-none tracking-[-0.05em] text-white/10 md:text-[11rem]">
              {count}
            </span>
            <div className="absolute bottom-0 left-0 h-[4px] bg-yellow" style={{ width: `${count}%` }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

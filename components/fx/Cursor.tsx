'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom cursor: a precise dot plus a lagging ring that swells over links and
 * shows a label over elements marked data-cursor="Label". Desktop pointers only.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState('');
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    const t = setTimeout(() => setEnabled(true), 0);
    document.documentElement.classList.add('has-cursor');

    const SEL = 'a, button, [role="tab"], [data-cursor], input, select, textarea, label';
    let last: { x: number; y: number } | null = null;
    const inspect = (px: number, py: number) => {
      const el = document.elementFromPoint(px, py)?.closest(SEL) ?? null;
      setHover(!!el && !el.matches('[data-cursor]:not(a):not(button)'));
      setLabel(el?.closest('[data-cursor]')?.getAttribute('data-cursor') ?? '');
    };
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      last = { x: e.clientX, y: e.clientY };
      setHidden(false);
      inspect(e.clientX, e.clientY);
    };
    let ticking = false;
    const onScroll = () => {
      if (!last || ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (last) inspect(last.x, last.y);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const leave = () => setHidden(true);
    const d = () => setDown(true);
    const u = () => setDown(false);
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', d);
    window.addEventListener('pointerup', u);
    return () => {
      clearTimeout(t);
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', d);
      window.removeEventListener('pointerup', u);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 96 : hover ? 64 : 34;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[10000]">
      <motion.div
        style={{ x: rx, y: ry }}
        animate={{ width: size, height: size, opacity: hidden ? 0 : 1, scale: down ? 0.8 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={`absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${
          label ? 'bg-yellow' : 'border-[1.5px] border-blue mix-blend-difference [border-color:#ffc548]'
        }`}
      >
        {label && <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">{label}</span>}
      </motion.div>
      <motion.div
        style={{ x, y }}
        animate={{ opacity: hidden || label ? 0 : 1, scale: hover ? 0 : 1 }}
        className="absolute left-0 top-0 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral"
      />
    </div>
  );
}

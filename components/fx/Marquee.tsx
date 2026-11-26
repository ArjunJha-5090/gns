'use client';

import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';
import Shape, { type ShapeName } from '@/components/Shape';

type Item = { text: string; shape: ShapeName; color: string };

/**
 * Infinite marquee whose speed and direction follow the visitor's scroll
 * velocity, and which skews slightly while moving fast.
 */
export default function Marquee({ items, baseVelocity = -2, className = '' }: { items: Item[]; baseVelocity?: number; className?: string }) {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const skew = useTransform(smooth, [-3000, 0, 3000], [8, 0, -8]);
  const x = useTransform(base, (v) => `${wrap(-25, -50, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    base.set(base.get() + move);
  });

  const row = (
    <>
      {items.map((it, k) => (
        <span key={k} className="flex shrink-0 items-center gap-[0.35em] pr-[0.35em]">
          <span>{it.text}</span>
          <Shape name={it.shape} className={`h-[0.7em] w-[0.7em] shrink-0 ${it.color}`} />
        </span>
      ))}
    </>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden>
      <motion.div style={{ x, skewX: skew }} className="flex w-max">
        {row}
        {row}
        {row}
        {row}
      </motion.div>
    </div>
  );
}

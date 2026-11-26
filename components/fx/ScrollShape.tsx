'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Shape, { type ShapeName } from '@/components/Shape';

/** A brand shape that rotates and drifts as its section scrolls past. */
export default function ScrollShape({
  name,
  className,
  rotate = 180,
  y = 120,
  scale = [0.8, 1.15],
}: {
  name: ShapeName;
  className: string;
  rotate?: number;
  y?: number;
  scale?: [number, number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const r = useTransform(scrollYProgress, [0, 1], [0, rotate]);
  const ty = useTransform(scrollYProgress, [0, 1], [y, -y]);
  const s = useTransform(scrollYProgress, [0, 0.5, 1], [scale[0], scale[1], scale[0]]);
  return (
    <motion.div ref={ref} aria-hidden style={{ rotate: r, y: ty, scale: s }} className={`pointer-events-none ${className}`}>
      <Shape name={name} className="h-full w-full" />
    </motion.div>
  );
}

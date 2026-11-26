'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

export type Token = string | ReactNode;

function Word({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children}
    </motion.span>
  );
}

/** Each word (or inline element) lights up in turn as the block scrolls through the viewport. */
export default function ScrollWords({ tokens, className, label }: { tokens: Token[]; className?: string; label: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const n = tokens.length;
  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{label}</span>
      {tokens.map((t, i) => (
        <span key={i} aria-hidden>
          <Word progress={scrollYProgress} range={[i / n, (i + 1) / n]}>
            {t}
          </Word>{' '}
        </span>
      ))}
    </p>
  );
}

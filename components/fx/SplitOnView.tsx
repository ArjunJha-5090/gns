'use client';

import { motion } from 'framer-motion';

/** Word-by-word masked rise, triggered when the heading scrolls into view. */
export default function SplitOnView({ text, stagger = 0.07, className }: { text: string; stagger?: number; className?: string }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hide"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ staggerChildren: stagger }}
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              className="inline-block"
              variants={{ hide: { y: '115%', rotate: 6 }, show: { y: '0%', rotate: 0 } }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}

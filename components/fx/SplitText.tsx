'use client';

import { motion } from 'framer-motion';

type Props = { text: string; className?: string; delay?: number; stagger?: number; as?: 'span' | 'div' };

/** Letters rise out of a mask one by one. Words never break mid-word. */
export default function SplitText({ text, className, delay = 0, stagger = 0.028 }: Props) {
  let i = 0;
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {text.split(' ').map((word, w) => (
        <span key={w} aria-hidden="true" className="inline-block whitespace-nowrap">
          {word.split('').map((ch) => {
            const d = delay + i++ * stagger;
            return (
              <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%', rotate: 8 }}
                  animate={{ y: '0%', rotate: 0 }}
                  transition={{ duration: 0.9, delay: d, ease: [0.16, 1, 0.3, 1] }}
                >
                  {ch}
                </motion.span>
              </span>
            );
          })}
          {w < text.split(' ').length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

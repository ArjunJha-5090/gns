'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

/** Wipes its content into view with a clip-path when scrolled into the viewport. */
export default function ClipReveal({
  children,
  className,
  from = 'bottom',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  from?: 'bottom' | 'left' | 'right' | 'top';
  delay?: number;
}) {
  const start = {
    bottom: 'inset(100% 0% 0% 0%)',
    top: 'inset(0% 0% 100% 0%)',
    left: 'inset(0% 100% 0% 0%)',
    right: 'inset(0% 0% 0% 100%)',
  }[from];
  return (
    <motion.div
      className={className}
      initial={{ clipPath: start }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 1.2, delay, ease: [0.77, 0, 0.175, 1] }}
    >
      {children}
    </motion.div>
  );
}

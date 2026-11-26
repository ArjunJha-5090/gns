'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin multi-colour reading-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[4px] origin-left bg-[linear-gradient(90deg,#0064ec,#861fce,#fe76b4,#ff3d37,#ffc548,#00b273)]"
    />
  );
}

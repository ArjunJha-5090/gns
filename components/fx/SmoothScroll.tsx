'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/** Inertial smooth scrolling on desktop. Off for touch devices and reduced-motion users. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, anchors: { offset: -90 } });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Pause while a modal (e.g. the site menu) locks the body.
    const mo = new MutationObserver(() => {
      if (document.body.style.overflow === 'hidden') lenis.stop();
      else lenis.start();
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ['style'] });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}

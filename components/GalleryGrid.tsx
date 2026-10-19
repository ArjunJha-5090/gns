'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export type GalleryItem = { src: string; title: string; category: string };

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, step]);

  const current = open !== null ? items[open] : null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`Open photo: ${item.title}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-left text-white">
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{item.category}</span>
                  <span className="mt-1 block font-[family-name:var(--font-display)] text-lg font-bold">{item.title}</span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-red">
                  <Maximize2 size={15} />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-red"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-red md:left-8"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-red md:right-8"
          >
            <ChevronRight size={24} />
          </button>

          <figure className="relative flex max-h-full w-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] w-full">
              <Image src={current.src} alt={current.title} fill sizes="100vw" className="object-contain" priority />
            </div>
            <figcaption className="mt-4 text-center text-white">
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{current.category}</span>
              <span className="mt-1 block font-[family-name:var(--font-display)] text-xl font-bold">{current.title}</span>
              <span className="mt-1 block text-xs text-white/60">{(open ?? 0) + 1} / {items.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

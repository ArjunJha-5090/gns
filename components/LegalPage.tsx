import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = { title: string; intro: string; updated: string; children: ReactNode };

export default function LegalPage({ title, intro, updated, children }: Props) {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes">
          <div className="hero-shape"></div>
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{title}</span>
          </div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </div>
      <section className="bg-white px-6 py-20 md:py-28">
        <article className="mx-auto max-w-3xl space-y-8 text-[17px] leading-relaxed text-gray-600 [&_h2]:mb-3 [&_h2]:font-[family-name:var(--font-display)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_a]:text-red [&_a]:underline [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5">
          {children}
          <p className="border-t border-gray-100 pt-6 text-sm text-gray-500">Last updated: {updated}</p>
        </article>
      </section>
    </>
  );
}

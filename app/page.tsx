import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';

import HeroSlider from '@/components/HeroSlider';
import Reveal from '@/components/Reveal';
import Shape, { type ShapeName } from '@/components/Shape';
import FocusCarousel from '@/components/home/FocusCarousel';
import StoriesTabs from '@/components/home/StoriesTabs';
import FactsCarousel from '@/components/home/FactsCarousel';
import DiscoverTabs from '@/components/home/DiscoverTabs';
import { events, school } from '@/lib/site-data';

const journey = [
  { title: 'Kindergarten', grades: 'Nursery – UKG', img: '/art.webp', href: '/academics#preschool' },
  { title: 'Primary School', grades: 'Class I – V', img: '/smart.webp', href: '/academics#primary' },
  { title: 'Middle School', grades: 'Class VI – VIII', img: '/3.webp', href: '/academics#middle' },
  { title: 'Secondary', grades: 'Class IX – X', img: '/books.webp', href: '/academics#secondary' },
  { title: 'Senior Secondary', grades: 'Class XI – XII', img: '/aryan-class.webp', href: '/academics#senior' },
];

const typeStyle: Record<string, { bg: string; fg: string; shape: ShapeName }> = {
  Event: { bg: 'bg-purple', fg: 'text-white', shape: 'quarters' },
  Academic: { bg: 'bg-green', fg: 'text-white', shape: 'book' },
  Sports: { bg: 'bg-coral', fg: 'text-white', shape: 'bars' },
  Notice: { bg: 'bg-yellow', fg: 'text-navy', shape: 'chevrons' },
};

function Inline({ name, className }: { name: ShapeName; className: string }) {
  return <Shape name={name} className={`mx-1 inline-block h-[0.82em] w-[0.82em] -translate-y-[0.06em] align-middle ${className}`} />;
}

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSlider />

      {/* Intro statement */}
      <section aria-label="Who we are" className="mx-auto max-w-[1400px] px-6 pt-24 sm:px-12 md:pt-32 lg:px-[8%]">
        <Reveal>
          <p className="max-w-[1050px] text-[1.75rem] font-normal leading-[1.45] tracking-[-0.01em] text-ink sm:text-[2.2rem] lg:text-[2.6rem]">
            We are a CBSE-affiliated, English-medium school <Inline name="bowtie" className="text-blue" /> in Patna{' '}
            <Inline name="circle" className="text-pink" /> for students <Inline name="triangle" className="text-coral" /> from
            Nursery to Class XII <Inline name="steps" className="text-purple" /> offering a holistic, value-based{' '}
            <Inline name="book" className="text-green" /> education to young minds <Inline name="arch" className="text-yellow" /> since
            1986.
          </p>
        </Reveal>
      </section>

      <FocusCarousel />

      {/* Learning journey + stories */}
      <section aria-labelledby="journey-heading" className="pt-24 md:pt-32">
        <Reveal className="mx-auto mb-14 max-w-3xl px-6 text-center">
          <p className="eyebrow mb-5">From Nursery to Class XII</p>
          <h2 id="journey-heading" className="text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-6xl lg:text-[4.2rem]">
            Our Learning Journey
          </h2>
        </Reveal>

        <div className="frame">
          <div className="relative isolate overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 top-[110px] -z-10 bg-blue" aria-hidden />

            <ul className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 px-6 sm:px-12 lg:grid-cols-5 lg:px-[45px]">
              {journey.map((j, k) => (
                <li key={j.title} className={k === 4 ? 'col-span-2 lg:col-span-1' : ''}>
                  <Reveal delay={k * 0.07}>
                    <Link href={j.href} className={`group relative block overflow-hidden lg:aspect-[3/4.4] ${k === 4 ? 'aspect-[16/9]' : 'aspect-[3/4]'}`}>
                      <Image
                        src={j.img}
                        alt=""
                        fill
                        sizes="(min-width:1024px) 20vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/25 to-[#1a3147]/95" />
                      <div className="absolute inset-0 bg-blue/0 transition-colors duration-500 group-hover:bg-blue/35" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                        <h3 className="text-[1.1rem] font-normal leading-tight sm:text-[1.45rem]">{j.title}</h3>
                        <p className="mt-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.16em] sm:mt-3 sm:text-[12px] sm:tracking-[0.2em]">
                          {j.grades}
                          <ArrowRight size={22} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>

            <div className="mt-14 text-center">
              <Link href="/academics" className="btn-primary hover:!border-white hover:!bg-white hover:!text-navy">
                Academics at Gyan Niketan
              </Link>
            </div>

            <div className="mx-auto max-w-[1400px] px-6 pb-40 pt-28 sm:px-12 md:pb-48 lg:px-[8%]">
              <StoriesTabs />
              <div className="mt-20 text-center">
                <Link href="/desk-messages" className="btn-primary hover:!border-white hover:!bg-white hover:!text-navy">
                  More from our community
                </Link>
              </div>
            </div>

            {/* quarter-circle cut-outs */}
            <div aria-hidden className="absolute bottom-0 left-0 grid grid-cols-2 text-white">
              <Shape name="quarters" className="h-[120px] w-[120px] -translate-x-[60px] translate-y-[60px] md:h-[180px] md:w-[180px] md:-translate-x-[90px] md:translate-y-[90px]" />
            </div>
          </div>
        </div>
      </section>

      <FactsCarousel />

      {/* Discover & Experience */}
      <section aria-labelledby="discover-heading" className="frame">
        <div className="relative overflow-hidden bg-mist px-6 py-24 sm:px-12 md:py-32 lg:px-[8%]">
          <Shape name="checker" className="absolute right-0 top-0 h-28 w-28 text-coral md:h-48 md:w-48" />
          <Reveal>
            <p className="eyebrow mb-5">Life at Gyan Niketan</p>
            <h2 id="discover-heading" className="mb-12 text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-6xl lg:text-[4.2rem]">
              Discover &amp; Experience
            </h2>
          </Reveal>
          <DiscoverTabs />
        </div>
      </section>

      {/* News & events */}
      <section aria-labelledby="news-heading" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-12 md:py-32">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">Stay up to date</p>
            <h2 id="news-heading" className="text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-6xl lg:text-[4.2rem]">
              News &amp; Events
            </h2>
          </div>
          <Link href="/news-events" className="btn-outline">All news &amp; events</Link>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, k) => {
            const d = new Date(e.date);
            const st = typeStyle[e.type] ?? typeStyle.Event;
            return (
              <li key={e.title}>
                <Reveal delay={k * 0.08} className="h-full">
                  <Link
                    href="/news-events"
                    className="group flex h-full flex-col border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_40px_60px_-30px_rgba(0,39,99,0.45)]"
                  >
                    <div className={`relative flex h-44 items-end justify-between overflow-hidden p-6 ${st.bg} ${st.fg}`}>
                      <Shape name={st.shape} className="absolute -right-4 -top-4 h-28 w-28 opacity-30 transition-transform duration-700 group-hover:rotate-12" />
                      <p className="leading-none">
                        <span className="block text-[4rem] font-light tracking-[-0.04em]">{String(d.getDate()).padStart(2, '0')}</span>
                        <span className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.2em]">
                          {d.toLocaleString('en', { month: 'long' })} {d.getFullYear()}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue">{e.type}</p>
                      <h3 className="mt-3 text-[1.3rem] font-semibold leading-snug text-navy">{e.title}</h3>
                      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink">{e.desc}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                        Read more <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Admissions band */}
      <section aria-labelledby="cta-heading" className="frame">
        <div className="relative isolate overflow-hidden bg-yellow px-6 py-24 sm:px-12 md:py-28 lg:px-[8%]">
          <Shape name="quarters" className="absolute -right-16 -top-16 -z-10 h-64 w-64 text-pink md:h-96 md:w-96" />
          <Shape name="chevrons" className="absolute bottom-10 right-[30%] -z-10 hidden h-20 w-20 text-blue lg:block" />
          <Shape name="ring" className="absolute -bottom-20 left-[45%] -z-10 h-44 w-44 text-coral/80" />
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-6">Admissions 2026–27</p>
            <h2 id="cta-heading" className="text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.03em] text-navy sm:text-6xl lg:text-[4.4rem]">
              Begin Your Child&rsquo;s Journey With Us
            </h2>
            <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-navy/80">
              Speak to our admissions team, visit the campus, and see why families have trusted Gyan Niketan for four decades.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/admissions" className="btn-primary !border-navy !bg-navy !text-white hover:!border-blue hover:!bg-blue">
                Apply now
              </Link>
              <a href={school.phoneHref} className="btn-outline !border-navy">
                <Phone size={15} /> {school.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

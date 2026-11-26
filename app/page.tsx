import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';

import HeroSlider from '@/components/HeroSlider';
import Reveal from '@/components/Reveal';
import Shape, { type ShapeName } from '@/components/Shape';
import FocusCarousel from '@/components/home/FocusCarousel';
import StoriesTabs from '@/components/home/StoriesTabs';
import FactsCarousel from '@/components/home/FactsCarousel';
import DiscoverTabs from '@/components/home/DiscoverTabs';
import JourneyScroller from '@/components/home/JourneyScroller';
import Marquee from '@/components/fx/Marquee';
import ScrollWords, { type Token } from '@/components/fx/ScrollWords';
import ScrollShape from '@/components/fx/ScrollShape';
import Magnetic from '@/components/fx/Magnetic';
import TiltCard from '@/components/fx/TiltCard';
import SplitOnView from '@/components/fx/SplitOnView';
import { events, school } from '@/lib/site-data';

const typeStyle: Record<string, { bg: string; fg: string; shape: ShapeName }> = {
  Event: { bg: 'bg-purple', fg: 'text-white', shape: 'quarters' },
  Academic: { bg: 'bg-green', fg: 'text-white', shape: 'book' },
  Sports: { bg: 'bg-coral', fg: 'text-white', shape: 'bars' },
  Notice: { bg: 'bg-yellow', fg: 'text-navy', shape: 'chevrons' },
};

function Inline({ name, className }: { name: ShapeName; className: string }) {
  return <Shape name={name} className={`inline-block h-[0.82em] w-[0.82em] -translate-y-[0.06em] align-middle ${className}`} />;
}

const intro: Token[] = [
  'We', 'are', 'a', 'CBSE-affiliated,', 'English-medium', 'school',
  <Inline key="a" name="bowtie" className="text-blue" />,
  'in', 'Patna', <Inline key="b" name="circle" className="text-pink" />,
  'for', 'students', <Inline key="c" name="triangle" className="text-coral" />,
  'from', 'Nursery', 'to', 'Class', 'XII', <Inline key="d" name="steps" className="text-purple" />,
  'offering', 'a', 'holistic,', 'value-based', <Inline key="e" name="book" className="text-green" />,
  'education', 'to', 'young', 'minds', <Inline key="f" name="arch" className="text-yellow" />, 'since', '1986.',
];

const marqueeA = [
  { text: 'Global Minds', shape: 'chevrons' as const, color: 'text-yellow' },
  { text: 'Indian Hearts', shape: 'quarters' as const, color: 'text-pink' },
  { text: 'Since 1986', shape: 'ring' as const, color: 'text-green' },
  { text: 'Nursery to XII', shape: 'clover' as const, color: 'text-coral' },
];

const marqueeB = [
  { text: 'Learn', shape: 'triangle' as const, color: 'text-coral' },
  { text: 'Lead', shape: 'bowtie' as const, color: 'text-blue' },
  { text: 'Inspire', shape: 'circle' as const, color: 'text-pink' },
  { text: 'Excel', shape: 'pyramid' as const, color: 'text-yellow' },
  { text: 'Belong', shape: 'leaf' as const, color: 'text-green' },
];

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSlider />

      {/* Giant velocity marquee */}
      <section aria-label="Our motto" className="pt-16 md:pt-24">
        <Marquee
          items={marqueeA}
          baseVelocity={-3}
          className="text-[15vw] font-semibold leading-[1.05] tracking-[-0.05em] text-navy md:text-[10vw]"
        />
      </section>

      {/* Intro statement — words light up as you scroll */}
      <section aria-label="Who we are" className="relative mx-auto max-w-[1400px] px-6 pb-8 pt-16 sm:px-12 md:pt-24 lg:px-[8%]">
        <ScrollShape name="ring" className="absolute -right-10 top-0 hidden h-40 w-40 text-yellow/70 lg:block" rotate={0} y={160} />
        <ScrollWords
          label="We are a CBSE-affiliated, English-medium school in Patna for students from Nursery to Class XII offering a holistic, value-based education to young minds since 1986."
          tokens={intro}
          className="max-w-[1100px] text-[1.8rem] font-normal leading-[1.4] tracking-[-0.015em] text-ink sm:text-[2.4rem] lg:text-[3rem]"
        />
      </section>

      <FocusCarousel />

      <div className="h-24 md:h-32" />
      <JourneyScroller />

      {/* Community stories */}
      <section aria-label="Community stories" className="frame">
        <div className="relative isolate overflow-hidden bg-navy">
          <ScrollShape name="chevrons" className="absolute right-[6%] top-16 -z-10 h-28 w-28 text-green/80" rotate={90} />
          <ScrollShape name="clover" className="absolute bottom-24 left-[42%] -z-10 hidden h-20 w-20 text-coral/80 lg:block" rotate={-180} />
          <div className="mx-auto max-w-[1400px] px-6 pb-40 pt-28 sm:px-12 md:pb-48 lg:px-[8%]">
            <StoriesTabs />
            <div className="mt-20 text-center">
              <Magnetic>
                <Link href="/desk-messages" className="btn-primary hover:!border-white hover:!bg-white hover:!text-navy">
                  More from our community
                </Link>
              </Magnetic>
            </div>
          </div>
          <div aria-hidden className="absolute bottom-0 left-0 text-white">
            <Shape name="quarters" className="h-[120px] w-[120px] -translate-x-[60px] translate-y-[60px] md:h-[180px] md:w-[180px] md:-translate-x-[90px] md:translate-y-[90px]" />
          </div>
        </div>
      </section>

      <FactsCarousel />

      {/* Outline marquee, reverse direction */}
      <section aria-hidden className="pb-20 md:pb-28">
        <Marquee
          items={marqueeB}
          baseVelocity={2.5}
          className="text-outline text-[18vw] font-semibold uppercase leading-none tracking-[-0.04em] md:text-[12vw]"
        />
      </section>

      {/* Discover & Experience */}
      <section aria-labelledby="discover-heading" className="frame">
        <div className="relative overflow-hidden bg-mist px-6 py-24 sm:px-12 md:py-32 lg:px-[8%]">
          <ScrollShape name="checker" className="absolute right-0 top-0 h-28 w-28 text-coral md:h-48 md:w-48" rotate={90} y={40} scale={[1, 1]} />
          <p className="eyebrow mb-5">Life at Gyan Niketan</p>
          <h2 id="discover-heading" className="mb-12 text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-6xl lg:text-[4.6rem]">
            <SplitOnView text="Discover & Experience" />
          </h2>
          <DiscoverTabs />
        </div>
      </section>

      {/* News & events */}
      <section aria-labelledby="news-heading" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-12 md:py-32">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">Stay up to date</p>
            <h2 id="news-heading" className="text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-6xl lg:text-[4.6rem]">
              <SplitOnView text="News & Events" />
            </h2>
          </div>
          <Magnetic>
            <Link href="/news-events" className="btn-outline">All news &amp; events</Link>
          </Magnetic>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, k) => {
            const d = new Date(e.date);
            const st = typeStyle[e.type] ?? typeStyle.Event;
            return (
              <li key={e.title}>
                <Reveal delay={k * 0.1} y={60} className="h-full">
                  <TiltCard className="group h-full">
                    <Link
                      href="/news-events"
                      data-cursor="Read"
                      className="flex h-full flex-col border border-navy/10 bg-white transition-shadow duration-300 hover:shadow-[0_50px_70px_-35px_rgba(0,39,99,0.55)]"
                    >
                      <div className={`relative flex h-48 items-end justify-between overflow-hidden p-6 ${st.bg} ${st.fg}`}>
                        <Shape
                          name={st.shape}
                          className="absolute -right-6 -top-6 h-36 w-36 opacity-30 transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:rotate-[30deg] group-hover:opacity-60"
                        />
                        <p className="leading-none [transform:translateZ(40px)]">
                          <span className="block text-[4.4rem] font-light tracking-[-0.05em]">{String(d.getDate()).padStart(2, '0')}</span>
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
                  </TiltCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Admissions band */}
      <section aria-labelledby="cta-heading" className="frame">
        <div className="relative isolate overflow-hidden bg-yellow px-6 py-28 sm:px-12 md:py-36 lg:px-[8%]">
          <ScrollShape name="quarters" className="absolute -right-24 -top-24 -z-10 h-72 w-72 text-pink md:h-[460px] md:w-[460px]" rotate={180} y={60} />
          <ScrollShape name="chevrons" className="absolute bottom-16 right-[32%] -z-10 hidden h-24 w-24 text-blue lg:block" rotate={0} y={140} />
          <ScrollShape name="ring" className="absolute -bottom-24 left-[46%] -z-10 h-52 w-52 text-coral/80" rotate={-240} y={80} />
          <ScrollShape name="triangle" className="absolute right-[14%] top-[58%] -z-10 hidden h-16 w-16 text-green md:block" rotate={360} y={200} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Admissions 2026–27</p>
            <h2 id="cta-heading" className="text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.035em] text-navy sm:text-6xl lg:text-[5rem]">
              <SplitOnView text="Begin Your Child’s Journey With Us" />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-navy/80">
                Speak to our admissions team, visit the campus, and see why families have trusted Gyan Niketan for four decades.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link href="/admissions" className="btn-primary !border-navy !bg-navy !text-white hover:!border-blue hover:!bg-blue">
                    Apply now
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a href={school.phoneHref} className="btn-outline !border-navy">
                    <Phone size={15} /> {school.phone}
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

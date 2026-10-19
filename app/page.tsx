import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, Building2, Trophy, GraduationCap, Globe2, Languages, Cpu, MonitorPlay, Phone, CalendarDays, Landmark, Users, BedDouble } from 'lucide-react';

import HeroSlider from '@/components/HeroSlider';
import Reveal from '@/components/Reveal';
import { events, school } from '@/lib/site-data';

const facts = [
  { icon: Landmark, value: '1986', label: 'Established' },
  { icon: BookOpen, value: 'CBSE', label: 'Affiliated, New Delhi' },
  { icon: Users, value: 'Nursery – XII', label: 'Classes offered' },
  { icon: BedDouble, value: 'Std. I – XII', label: 'Hostel facilities' },
];

const pillars = [
  { title: 'Academics', href: '/academics', icon: BookOpen, text: 'Rigorous CBSE curriculum, Nursery to Class XII.' },
  { title: 'Facilities', href: '/facilities', icon: Building2, text: 'Smart classrooms, library, sports and more.' },
  { title: 'Activities', href: '/activities', icon: Trophy, text: 'Sport, arts and clubs that build character.' },
  { title: 'Alumni', href: '/alumni', icon: GraduationCap, text: 'GYANOBA — a lifelong Gyan Niketan family.' },
];

const outlook = [
  { icon: Languages, title: 'English-medium learning', text: 'An English-medium school whose language department teaches English, Hindi and Sanskrit.' },
  { icon: Cpu, title: 'Future-ready skills', text: 'A dedicated STEM lab with robotics, coding and AI programmes for 21st-century skills.' },
  { icon: MonitorPlay, title: 'Smart classrooms', text: 'Interactive digital boards and multimedia projectors in classrooms for engaging lessons.' },
  { icon: Globe2, title: 'A worldwide family', text: 'GYANOBA, our alumni association, connects Gyan Niketan graduates across the globe.' },
];

const explore = [
  { title: 'Campus Gallery', href: '/gallery', img: '/gy.webp', text: 'Moments from school life' },
  { title: 'Facilities', href: '/facilities', img: '/smart.webp', text: 'Where learning happens' },
  { title: 'Hostel Life', href: '/hostel-life', img: '/books.webp', text: 'A home away from home' },
  { title: 'Activities', href: '/activities', img: '/art.webp', text: 'Beyond the classroom' },
];

export default function Home() {
  const [featured, ...rest] = events;

  return (
    <div className="bg-white">
      <HeroSlider />

      {/* Quick facts — overlaps hero */}
      <section aria-label="School at a glance" className="relative z-10 mx-auto -mt-10 max-w-[1200px] px-4 sm:px-6 md:-mt-14">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-20px_rgba(15,23,42,0.35)] lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} y={20}>
              <div className="flex h-full items-center gap-3 border-b border-r border-gray-100 p-4 last:border-r-0 sm:gap-4 sm:p-6 lg:border-b-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red sm:h-12 sm:w-12">
                  <f.icon size={20} />
                </span>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-lg font-bold leading-tight text-navy sm:text-xl">{f.value}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 sm:text-xs">{f.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Welcome */}
      <section id="welcome" className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal x={-40} y={0}>
            <span className="eyebrow mb-5">About Us</span>
            <h2 className="display-heading text-4xl md:text-5xl lg:text-[3.4rem]">
              Welcome to <em>Gyan Niketan</em> School
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                Gyan Niketan, meaning &lsquo;Abode of Knowledge&rsquo;, is an English medium school established in 1986 by Manaviya
                Vibhava Vikas (M.V.V.) Nyas. We believe in holistic education rooted in Indian culture and moral values.
              </p>
              <p>
                Modern infrastructure, smart classrooms and a dedicated faculty ensure our students are prepared for global
                challenges while remaining grounded in their heritage.
              </p>
            </div>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:bg-red"
            >
              Our Story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal x={40} y={0} delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-2xl">
                <Image src="/aryan-class.webp" alt="Students in a classroom session" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] hover:scale-105" />
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-red px-7 py-5 text-white shadow-xl md:-left-8">
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold leading-none">{new Date().getFullYear() - 1986}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">Years of legacy</p>
              </div>
              <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[28px] border-2 border-gold md:-right-5 md:-top-5" />
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Link
                href={p.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_30px_60px_-20px_rgba(15,23,42,0.3)]"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white transition-colors group-hover:bg-red">
                  <p.icon size={26} />
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{p.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-red">
                  Learn more <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Global outlook */}
      <section aria-labelledby="outlook-heading" className="relative isolate overflow-hidden bg-navy py-24 md:py-28">
        <div className="absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-red/20 blur-[110px]" />
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <span className="eyebrow eyebrow--light eyebrow--center mb-5">Our Approach</span>
            <h2 id="outlook-heading" className="display-heading !text-white text-4xl md:text-5xl [&_em]:!text-gold">
              A global outlook, <em>rooted in India</em>
            </h2>
            <p className="mt-5 text-lg text-white/70">Global minds, Indian hearts — preparing students for the world while keeping them grounded in their heritage.</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outlook.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.09}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:bg-white/[0.07]">
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                    <o.icon size={26} />
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">{o.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore campus */}
      <section id="explore" className="scroll-mt-24 bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow eyebrow--center mb-5">Discover</span>
            <h2 className="display-heading text-4xl md:text-5xl">
              Explore our <em>campus</em>
            </h2>
            <p className="mt-5 text-lg text-gray-600">See how learning, sport, creativity and community come together every day.</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.09}>
                <Link href={e.href} className="group relative block aspect-[3/4] overflow-hidden rounded-3xl">
                  <Image src={e.img} alt={e.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent transition-opacity group-hover:from-red/80" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">{e.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{e.text}</p>
                    <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-all group-hover:bg-white group-hover:text-red">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Blackboard */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow mb-5">Updates</span>
            <h2 className="display-heading text-4xl md:text-5xl">
              The <em>Blackboard</em>
            </h2>
          </div>
          <Link href="/news-events" className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-navy transition-colors hover:text-red">
            View all news <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Link href="/news-events" className="group relative block h-[420px] overflow-hidden rounded-3xl">
              <Image src="/smart.webp" alt={featured.title} fill sizes="(min-width:1024px) 66vw, 100vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                <span className="mb-4 inline-block rounded-full bg-red px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-white">{featured.type}</span>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">{featured.title}</h3>
                <p className="mt-3 max-w-xl text-white/80">{featured.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold"><CalendarDays size={16} /> {featured.date}</p>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-ivory p-8">
              <h3 className="mb-6 border-b border-gray-200 pb-4 font-[family-name:var(--font-display)] text-2xl font-bold text-navy">Recent notices</h3>
              <ul className="flex-1 space-y-5">
                {rest.map((n) => {
                  const d = new Date(n.date);
                  return (
                    <li key={n.title}>
                      <Link href="/news-events" className="group flex gap-4">
                        <span className="flex min-w-[62px] flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-2 text-center shadow-sm transition-colors group-hover:border-red group-hover:bg-red">
                          <span className="text-xl font-black leading-none text-navy group-hover:text-white">{String(d.getDate()).padStart(2, '0')}</span>
                          <span className="text-[10px] font-bold uppercase text-gray-500 group-hover:text-white/85">{d.toLocaleString('en', { month: 'short' })}</span>
                        </span>
                        <span className="pt-0.5">
                          <span className="block text-sm font-bold leading-snug text-navy transition-colors group-hover:text-red">{n.title}</span>
                          <span className="mt-0.5 block text-xs text-gray-500">{n.type}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="relative isolate overflow-hidden bg-navy py-24">
        <div className="absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-red/30 blur-[110px]" />
        <div className="absolute -bottom-32 -right-24 -z-10 h-96 w-96 rounded-full bg-gold/25 blur-[110px]" />
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow--light eyebrow--center mb-5">Admissions</span>
          <h2 className="display-heading !text-white text-4xl md:text-6xl [&_em]:!text-gold">
            Begin your child&rsquo;s <em>journey</em> with us
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            Speak to our admissions team, visit the campus, and see why families trust Gyan Niketan.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/admissions" className="group inline-flex items-center gap-3 rounded-full bg-red px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:bg-red-dark">
              Apply now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={school.phoneHref} className="inline-flex items-center gap-3 rounded-full border border-white/35 px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition-all hover:bg-white hover:text-navy">
              <Phone size={16} /> {school.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

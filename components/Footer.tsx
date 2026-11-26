import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Home, Smartphone, Map, Mail, MapPin, PenSquare, UserRound } from 'lucide-react';
import Shape from '@/components/Shape';
import NewsletterForm from '@/components/NewsletterForm';
import { school } from '@/lib/site-data';

const useful = [
  { name: 'Admissions 2026–27', href: '/admissions' },
  { name: 'Academic Calendar', href: '/calendar' },
  { name: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
  { name: 'Current Openings', href: '/careers' },
  { name: 'Alumni (GYANOBA)', href: '/alumni' },
];

const explore = [
  { name: 'Our Story', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Hostel Life', href: '/hostel-life' },
  { name: 'Gallery', href: '/gallery' },
];

const RING = 'BACK TO TOP · BACK TO TOP · BACK TO TOP · ';

export default function Footer() {
  return (
    <footer className="frame mt-0 pb-[15px]">
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#003a85] via-navy to-navy-deep text-white">
        {/* green arcs */}
        <div aria-hidden className="absolute left-0 top-0 -z-10 hidden h-full w-[16%] flex-col md:flex">
          <div className="flex-1 rounded-tr-[100%] bg-green" />
          <div className="mt-3 flex-1 rounded-tr-[100%] bg-green" />
        </div>

        <div className="mx-auto max-w-[1340px] px-6 pb-16 pt-20 sm:px-12 md:pl-[19%] md:pr-12 lg:pl-[17%]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <Link href="/" className="flex items-center gap-5">
              <Image src="/logo.png" alt="" width={84} height={84} className="h-20 w-20 rounded-full bg-white p-1.5" />
              <span className="text-[1.9rem] font-semibold leading-[1.1] md:text-[2.2rem]">
                Gyan Niketan
                <br />
                School, Patna
              </span>
            </Link>

            {/* back to top */}
            <a href="#main" aria-label="Back to top" className="group relative hidden h-32 w-32 shrink-0 lg:block">
              <svg viewBox="0 0 100 100" className="spin-slow h-full w-full" aria-hidden>
                <defs>
                  <path id="ft-ring" d="M50 50 m-40 0 a40 40 0 1 1 80 0 a40 40 0 1 1 -80 0" />
                </defs>
                <text fontSize="8.6" fontWeight="600" letterSpacing="2.4" fill="currentColor">
                  <textPath href="#ft-ring">{RING}</textPath>
                </text>
              </svg>
              <ArrowUp size={40} strokeWidth={1.8} className="absolute inset-0 m-auto transition-transform duration-300 group-hover:-translate-y-1.5" />
            </a>
          </div>

          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1.05fr_0.85fr_1.3fr] lg:gap-10">
            <div>
              <h2 className="mb-7 text-[13px] font-semibold uppercase tracking-[0.2em]">Contact details</h2>
              <ul className="space-y-5 text-[15px] text-white/90">
                <li className="flex gap-4">
                  <Home size={19} className="mt-0.5 shrink-0 text-yellow" strokeWidth={1.6} />
                  <span className="leading-relaxed">{school.address}</span>
                </li>
                <li className="flex gap-4">
                  <Smartphone size={19} className="shrink-0 text-yellow" strokeWidth={1.6} />
                  <a href={school.phoneHref} className="border-b border-white/60 hover:border-yellow hover:text-yellow">{school.phone}</a>
                </li>
                <li className="flex gap-4">
                  <Mail size={19} className="shrink-0 text-yellow" strokeWidth={1.6} />
                  <a href={`mailto:${school.email}`} className="break-words hover:text-yellow">{school.email}</a>
                </li>
                <li className="flex gap-4">
                  <Map size={19} className="shrink-0 text-yellow" strokeWidth={1.6} />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Gyan+Niketan+School+Patna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow"
                  >
                    Find us on Google Maps
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-7 text-[13px] font-semibold uppercase tracking-[0.2em]">Useful links</h2>
              <ul className="space-y-3.5 text-[15px] text-white/90">
                {useful.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="transition-colors hover:text-yellow">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-7 text-[13px] font-semibold uppercase tracking-[0.2em]">Explore</h2>
              <ul className="space-y-3.5 text-[15px] text-white/90">
                {explore.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="transition-colors hover:text-yellow">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="mb-9 space-y-4">
                {[
                  { name: 'Visit', href: '/contact', icon: MapPin },
                  { name: 'Apply', href: '/admissions', icon: PenSquare },
                  { name: 'ERP Login', href: 'https://student.schoolcanvas.com/', icon: UserRound, ext: true },
                ].map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      {...(l.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.2em] hover:text-yellow"
                    >
                      <l.icon size={22} strokeWidth={1.6} className="text-yellow" /> {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mb-3 text-[13px] text-white/70">Subscribe to our newsletter</p>
              <NewsletterForm />
            </div>
          </div>

          {/* shape row */}
          <div aria-hidden className="mt-6 flex flex-wrap items-center gap-4 md:justify-end">
            <Shape name="bars" className="h-10 w-10 text-purple" />
            <Shape name="steps" className="h-10 w-10 text-pink" />
            <Shape name="bowtie" className="h-10 w-10 text-blue" />
            <Shape name="pyramid" className="h-10 w-10 text-yellow" />
            <Shape name="chevrons" className="h-10 w-10 text-green" />
            <Shape name="clover" className="h-10 w-10 text-coral" />
          </div>
        </div>

        {/* bottom bar */}
        <div className="bg-navy-deep/80">
          <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-6 px-6 py-7 text-center md:flex-row md:text-left">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-semibold uppercase tracking-[0.18em]">
              <li><Link href="/sitemap.xml" className="hover:text-yellow">Site map</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-yellow">Privacy policy</Link></li>
              <li><Link href="/terms" className="hover:text-yellow">Terms of service</Link></li>
              <li className="font-normal normal-case tracking-normal text-white/60">© {new Date().getFullYear()} Gyan Niketan School</li>
            </ul>
            <div className="flex items-center gap-6 text-lg">
              <a href={school.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href={school.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href={school.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-yellow">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

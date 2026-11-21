import Link from 'next/link';

/** Fixed vertical quick-action tabs on the right edge (desktop). */
export default function SideTabs() {
  return (
    <nav
      aria-label="Quick actions"
      className="pointer-events-none fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-[3px] md:flex"
    >
      <Link
        href="/contact"
        className="side-tab pointer-events-auto flex items-center justify-center bg-navy px-3.5 py-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:pr-6 hover:bg-blue"
      >
        Visit
      </Link>
      <Link
        href="/admissions"
        className="side-tab pointer-events-auto flex items-center justify-center bg-pink px-3.5 py-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-navy transition-all duration-300 hover:pr-6 hover:bg-yellow"
      >
        Apply
      </Link>
    </nav>
  );
}

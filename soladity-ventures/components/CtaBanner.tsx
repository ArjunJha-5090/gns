import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-3 via-ink-2 to-ink-3 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="absolute -top-24 left-1/2 h-72 w-[38rem] max-w-[140%] -translate-x-1/2 rounded-full bg-gradient-to-r from-sun/30 via-flare/25 to-nova/30 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl">
              Have an idea? <span className="text-gradient">Let&apos;s build it together.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Tell us about your project and get a free consultation and a clear, honest quote within 24 hours.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/contact/" className="btn-primary">Start your project <ArrowUpRight className="h-4 w-4" /></Link>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

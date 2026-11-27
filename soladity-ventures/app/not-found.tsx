import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-xl flex-col items-center justify-center px-4 pt-28 text-center">
      <p className="font-display text-8xl font-bold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">This page drifted out of orbit.</h1>
      <p className="mt-3 text-white/60">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  );
}

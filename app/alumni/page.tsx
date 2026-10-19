import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alumni (GYANOBA) — Gyan Niketan School',
  description: 'Connect with GYANOBA, the Gyan Niketan Old Boys Association. Our alumni network spans the globe.',
};

export default function AlumniPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Alumni (GYANOBA)</span>
          </div>
          <h1>Gyan Niketan Alumni</h1>
          <p>Connecting past, present, and future — The Gyan Niketan Old Boys Association (GYANOBA).</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <span className="section-tag">GYANOBA</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>A Legacy of Excellence</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20 }}>
                The Gyan Niketan Old Boys Association (GYANOBA) is a vibrant and active network of alumni who have 
                passed through the gates of our institution since 1990. Our alumni are distinguished professionals 
                in various fields across the globe — from engineering and medicine to civil services, business, and the arts.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 24 }}>
                GYANOBA members stay actively connected with their alma mater, participating in mentorship programs, 
                career counseling sessions, and contributing to the school&apos;s development initiatives.
              </p>
              <Link href="/contact" className="btn-primary">Join the Alumni Network</Link>
            </div>
            <div style={{ background: 'var(--light)', padding: 48, borderRadius: 20, textAlign: 'center' }}>
              <i className="fas fa-users" style={{ fontSize: '4rem', color: 'var(--red)', marginBottom: 24 }}></i>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 12 }}>5,000+ Strong</h3>
              <p style={{ color: 'var(--gray)' }}>
                Join a global network of professionals who share the Gyan Niketan values of excellence and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

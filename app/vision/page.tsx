import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vision & Mission — Gyan Niketan School',
  description: 'Our vision is to provide quality education in a nurturing environment to shape responsible, compassionate citizens.',
};

export default function VisionPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Vision & Mission</span>
          </div>
          <h1>Vision & Mission</h1>
          <p>Shaping the leaders of tomorrow through holistic education and moral values.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="section-tag">Our Vision</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>A Vision for Excellence</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20 }}>
                At Gyan Niketan, our vision is to create a dynamic learning environment that empowers students 
                to become lifelong learners, critical thinkers, and productive members of an ever-changing global society.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8 }}>
                We envision a school where every child&apos;s potential is recognized and nurtured, where character 
                building goes hand in hand with academic excellence, and where traditional values meet modern educational practices.
              </p>
            </div>
            <div style={{ background: 'var(--light)', padding: 48, borderRadius: 20, borderLeft: '4px solid var(--red)' }}>
              <i className="fas fa-eye" style={{ fontSize: '3rem', color: 'var(--red)', marginBottom: 20 }}></i>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 16 }}>Core Principles</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Academic Excellence through innovative teaching',
                  'Character Development and moral integrity',
                  'Social Responsibility and global awareness',
                  'Holistic Growth encompassing mind, body, and spirit',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--gray)' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--red)', marginTop: 4 }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--light)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div style={{ background: '#fff', padding: 48, borderRadius: 20, borderLeft: '4px solid var(--gold)', boxShadow: '0 12px 32px rgba(0,0,0,0.05)' }}>
              <i className="fas fa-bullseye" style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: 20 }}></i>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 16 }}>Our Mission</h3>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8 }}>
                To provide a stimulating learning environment with a technological orientation, which maximizes 
                individual potential and ensures that students of all ability levels are well equipped to meet 
                the challenges of education, work and life.
              </p>
            </div>
            <div>
              <span className="section-tag">Our Mission</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Empowering Future Leaders</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20 }}>
                We are committed to delivering high-quality education that balances academic rigor with co-curricular 
                excellence. Our mission is to instill a passion for learning and a strong sense of moral responsibility.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <Link href="/about" className="btn-primary">Our Story</Link>
                <Link href="/academics" className="btn-secondary" style={{ background: '#e5e7eb', color: 'var(--dark)' }}>Academics</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

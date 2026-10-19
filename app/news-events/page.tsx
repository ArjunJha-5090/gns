import type { Metadata } from 'next';
import Link from 'next/link';
import { events } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'News & Events — Gyan Niketan School',
  description: 'Stay updated with the latest news, announcements, and events at Gyan Niketan School.',
};


export default function NewsEventsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>News & Events</span>
          </div>
          <h1>News & Events</h1>
          <p>Stay connected with the vibrant life and happenings at Gyan Niketan.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Updates</span>
            <h2 className="section-title">Latest Announcements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((evt, i) => (
              <div key={i} style={{ background: 'var(--light)', borderRadius: 16, padding: 32, border: '1px solid #f0f0f0', display: 'flex', gap: 24, transition: 'transform 0.3s', cursor: 'pointer' }} className="hover-lift">
                <div style={{ width: 80, height: 80, background: '#fff', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--red)', fontWeight: 700, textTransform: 'uppercase' }}>{evt.date.split(' ')[0]}</span>
                  <span style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--dark)' }}>{evt.date.split(' ')[1].replace(',', '')}</span>
                </div>
                <div>
                  <span style={{ display: 'inline-block', padding: '4px 10px', background: 'rgba(225,29,46,0.1)', color: '#b01220', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, marginBottom: 12 }}>{evt.type}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: 8 }}>{evt.title}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.6 }}>{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
      `}</style>
    </>
  );
}

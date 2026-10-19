import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Student Council — Gyan Niketan School',
  description: 'Meet the Student Council leaders of Gyan Niketan School.',
};

// Set to true once real house-captain names are filled in below.
const SHOW_HOUSE_CAPTAINS = false;

export default function CouncilPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Student Council</span>
          </div>
          <h1>Student Council</h1>
          <p>Fostering leadership, responsibility, and discipline among students.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Student Representatives</h2>
            <p className="section-desc">The Student Council plays a vital role in maintaining discipline and representing the student body.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { role: 'Head Boy', name: 'Mayank Kumar', house: 'Senior Secondary' },
              // Add names below as they are confirmed — entries without a name stay hidden.
              { role: 'Head Girl', name: '', house: 'Senior Secondary' },
              { role: 'Sports Captain', name: '', house: 'Sports Team' },
              { role: 'Cultural Secretary', name: '', house: 'Cultural Club' },
            ].filter((l) => l.name).map((leader, i) => (
              <div key={i} style={{ background: 'var(--light)', padding: 32, borderRadius: 16, textAlign: 'center', border: '1px solid #f0f0f0' }}>
                <div style={{ width: 80, height: 80, background: '#fff', borderRadius: '50%', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)', fontSize: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: 4 }}>{leader.name}</h3>
                <span style={{ display: 'block', color: 'var(--red)', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>{leader.role}</span>
                <span style={{ color: 'var(--gray)', fontSize: '0.8rem' }}>{leader.house}</span>
              </div>
            ))}
          </div>

          {SHOW_HOUSE_CAPTAINS && (
          <div style={{ marginTop: 80 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', textAlign: 'center', marginBottom: 32 }}>House Captains</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { house: 'Red House', color: '#fee2e2', textColor: '#ef4444', captain: '' },
                { house: 'Blue House', color: '#dbeafe', textColor: '#3b82f6', captain: '' },
                { house: 'Green House', color: '#d1fae5', textColor: '#10b981', captain: '' },
                { house: 'Yellow House', color: '#fef3c7', textColor: '#f59e0b', captain: '' },
              ].filter((h) => h.captain).map((h, i) => (
                <div key={i} style={{ background: h.color, padding: 24, borderRadius: 12, textAlign: 'center', border: `1px solid ${h.textColor}30` }}>
                  <h4 style={{ color: h.textColor, fontWeight: 700, marginBottom: 8 }}>{h.house}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#374151' }}>Captain: <br/><strong>{h.captain}</strong></p>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </section>
    </>
  );
}

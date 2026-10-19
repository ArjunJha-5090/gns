'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Job Application – ${form.position || 'General'} – ${form.name}`);
    const body = encodeURIComponent(
      `Full Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPosition: ${form.position}\n\nCover Letter / Details:\n${form.details}`
    );
    window.location.href = `mailto:gnspatna@rediffmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Careers</span>
          </div>
          <h1>Careers</h1>
          <p>Join our team of dedicated educators and professionals.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="section-tag">Work With Us</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Build Your Career at Gyan Niketan</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 24 }}>
                We are always looking for passionate, qualified, and dedicated individuals to join our academic and administrative staff. If you have a commitment to educational excellence and student development, we invite you to apply.
              </p>
              
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: 16 }}>Current Openings</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { title: 'PGT - Physics', exp: 'Min. 3 years exp. | M.Sc, B.Ed' },
                  { title: 'TGT - English', exp: 'Min. 2 years exp. | M.A., B.Ed' },
                  { title: 'Primary Teachers (PRT)', exp: 'Min. 1 year exp. | B.A./B.Sc, B.Ed/D.El.Ed' },
                  { title: 'Sports Coach', exp: 'B.P.Ed / M.P.Ed' },
                ].map((job, i) => (
                  <li key={i} style={{ background: 'var(--light)', padding: 20, borderRadius: 12, borderLeft: '4px solid var(--red)' }}>
                    <h4 style={{ fontWeight: 700, marginBottom: 4 }}>{job.title}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>{job.exp}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div style={{ background: '#fff', padding: 40, borderRadius: 20, boxShadow: '0 12px 40px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 8 }}>Apply Online</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray)', marginBottom: 24 }}>
                  Submitting will open your email client with your application pre-filled.
                </p>
                
                {submitted && (
                  <div style={{ background: '#d1fae5', color: '#065f46', padding: 16, borderRadius: 8, marginBottom: 20 }}>
                    <i className="fas fa-check-circle" style={{ marginRight: 8 }}></i>
                    Your email client should have opened with your application! If not, email us at{' '}
                    <a href="mailto:gnspatna@rediffmail.com" style={{ fontWeight: 700 }}>gnspatna@rediffmail.com</a>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label htmlFor="career-1" style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>Full Name *</label>
                    <input id="career-1" type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required placeholder="Your full name" style={{ width: '100%', padding: '10px 16px', borderRadius: 8, border: '1px solid #e5e7eb', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="career-2" style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>Email *</label>
                      <input id="career-2" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required placeholder="your@email.com" style={{ width: '100%', padding: '10px 16px', borderRadius: 8, border: '1px solid #e5e7eb', outline: 'none', fontFamily: 'inherit' }} />
                    </div>
                    <div>
                      <label htmlFor="career-3" style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>Phone *</label>
                      <input id="career-3" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required placeholder="+91 00000 00000" style={{ width: '100%', padding: '10px 16px', borderRadius: 8, border: '1px solid #e5e7eb', outline: 'none', fontFamily: 'inherit' }} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="career-4" style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>Position Applied For *</label>
                    <input id="career-4" type="text" value={form.position} onChange={e => setForm({...form, position: e.target.value})} required placeholder="e.g. PGT Physics" style={{ width: '100%', padding: '10px 16px', borderRadius: 8, border: '1px solid #e5e7eb', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                  <div>
                    <label htmlFor="career-5" style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>Cover Letter / Details *</label>
                    <textarea id="career-5" value={form.details} onChange={e => setForm({...form, details: e.target.value})} required rows={4} placeholder="Briefly describe your experience..." style={{ width: '100%', padding: '10px 16px', borderRadius: 8, border: '1px solid #e5e7eb', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                    <i className="fas fa-paper-plane"></i> Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

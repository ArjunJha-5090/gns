'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry${form.topic ? ` – ${form.topic}` : ''} from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic || 'General'}\n\nMessage:\n${form.message}`
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
            <span>Contact</span>
          </div>
          <h1>Contact Us</h1>
          <p>Get in touch with Gyan Niketan School. We&apos;re here to help!</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div>
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>We&apos;d Love to Hear From You</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 32 }}>
                Whether you have questions about admissions, fees, facilities, or anything else — our team is
                ready to assist you. Reach out through any of the channels below.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
                {[
                  { icon: 'fa-map-marker-alt', title: 'Address', info: 'Vitthal Complex, Ranjan Path, Gola Road (Danapur Cantt.), Patna – 801503', href: 'https://maps.google.com/?q=Gyan+Niketan+School+Patna' },
                  { icon: 'fa-phone', title: 'Phone', info: '06115 – 235117, 235525', href: 'tel:06115235117' },
                  { icon: 'fa-envelope', title: 'Email', info: 'gnspatna@rediffmail.com', href: 'mailto:gnspatna@rediffmail.com' },
                  { icon: 'fa-clock', title: 'Office Hours', info: 'Mon–Fri: 8 AM – 4 PM | Sat: 8 AM – 12:30 PM', href: null },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 48, height: 48, background: 'rgba(225,29,46,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)', fontSize: '1rem', flexShrink: 0 }}>
                      <i className={`fas ${c.icon}`}></i>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, marginBottom: 4, fontSize: '0.9rem' }}>{c.title}</h3>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{ color: 'var(--gray)', fontSize: '0.88rem' }}>{c.info}</a>
                      ) : (
                        <p style={{ color: 'var(--gray)', fontSize: '0.88rem' }}>{c.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                <iframe
                  title="Gyan Niketan School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.3964065906!2d85.0478316!3d25.6198848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58e0b63b79b9%3A0x4b6157ec94db80ef!2sGyan+Niketan+School!5e0!3m2!1sen!2sin!4v1699999999999"
                  width="100%"
                  height="250"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div style={{ background: 'var(--light)', borderRadius: 20, padding: 40 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>Send Us a Message</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray)', marginBottom: 24 }}>This will open your email client with a pre-filled message.</p>

                {submitted && (
                  <div style={{ background: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: 12, padding: 16, marginBottom: 20, color: '#065f46', fontSize: '0.9rem' }}>
                    <i className="fas fa-check-circle" style={{ marginRight: 8 }}></i>
                    Your email client should have opened. If not, please email us directly at{' '}
                    <a href="mailto:gnspatna@rediffmail.com" style={{ fontWeight: 700 }}>gnspatna@rediffmail.com</a>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label htmlFor="contact-1" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: 6 }}>Full Name *</label>
                    <input id="contact-1"
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="Your full name"
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 10, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-2" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: 6 }}>Email Address *</label>
                    <input id="contact-2"
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 10, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-3" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: 6 }}>Regarding</label>
                    <select id="contact-3"
                      value={form.topic}
                      onChange={e => setForm({ ...form, topic: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 10, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', background: '#fff' }}
                    >
                      <option value="">Select a topic</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Fees">Fee Structure</option>
                      <option value="Facilities">Facilities</option>
                      <option value="Transport">Transport</option>
                      <option value="General">General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-4" style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: 6 }}>Message *</label>
                    <textarea id="contact-4"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      placeholder="Write your message here..."
                      rows={5}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 10, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <i className="fas fa-paper-plane"></i> Send Message
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

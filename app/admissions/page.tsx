import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admissions 2026-27 — Gyan Niketan School, Patna',
  description: 'Apply for admissions at Gyan Niketan School Patna for session 2026-27. Classes LKG to Class XII. CBSE affiliated. Online application available.',
};

export default function AdmissionsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Admissions</span>
          </div>
          <h1>Admissions 2026-27</h1>
          <p>Join Gyan Niketan School — where every student&apos;s potential is nurtured and celebrated.</p>
        </div>
      </div>

      {/* Admission Notice */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #fff5f5, #fff)', border: '2px solid rgba(225,29,46,0.2)', borderRadius: 20, padding: 40, marginBottom: 60, textAlign: 'center' }}>
            <div style={{ display: 'inline-block', background: 'var(--red)', color: '#fff', padding: '6px 20px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
              <i className="fas fa-door-open" style={{ marginRight: 8 }}></i>Now Open
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, marginBottom: 12 }}>Admissions for 2026-27 are Open!</h2>
            <p style={{ color: 'var(--gray)', fontSize: '1.05rem', marginBottom: 24 }}>Classes available: LKG to Class 9 and Class 11. Apply online or visit our office.</p>
            <a href="https://app.schoolcanvas.com/Admission/gnss.patna" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex' }}>
              <i className="fas fa-external-link-alt"></i> Apply Online Now
            </a>
          </div>

          {/* Fee Structure */}
          <div className="section-header">
            <span className="section-tag">Fee Structure</span>
            <h2 className="section-title">Annual Fee Structure 2026-27</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-15">
            {[
              { class: 'Nursery – KG', fee: '₹45,000', color: '#fee2e2', icon: 'fa-baby' },
              { class: 'Primary (I–V)', fee: '₹55,000', color: '#dbeafe', icon: 'fa-child' },
              { class: 'Middle (VI–VIII)', fee: '₹65,000', color: '#d1fae5', icon: 'fa-user-graduate' },
              { class: 'Senior Sec. (IX–XII)', fee: '₹75,000', color: '#fef3c7', icon: 'fa-graduation-cap' },
            ].map((f, i) => (
              <div key={i} style={{ background: f.color, borderRadius: 16, padding: 28, textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>
                  <i className={`fas ${f.icon}`} style={{ color: 'var(--dark)' }}></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>{f.class}</h3>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--dark)' }}>{f.fee}<span style={{ fontSize: '0.8rem', color: '#4b5563', fontWeight: 500 }}>/year</span></div>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--gray)', textAlign: 'center', fontSize: '0.88rem', marginBottom: 60 }}>
            * Hostel fees are separate. Bus transport: ₹15,000/year. Contact school office for full details.
          </p>

          {/* Documents Required */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.3rem', marginBottom: 20 }}>Documents Required</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Birth Certificate',
                  'Previous Academic Report Cards',
                  'Address Proof (Aadhar Card)',
                  'Passport-size Photographs (4)',
                  'Transfer Certificate (if applicable)',
                  'Character Certificate (for higher classes)',
                ].map((doc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--gray)', fontSize: '0.92rem' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--red)', fontSize: '1rem' }}></i> {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.3rem', marginBottom: 20 }}>Admission Process</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { step: '01', title: 'Online Enquiry', desc: 'Submit the online enquiry form or visit the school office.' },
                  { step: '02', title: 'Document Submission', desc: 'Bring required documents to the school office.' },
                  { step: '03', title: 'Assessment', desc: 'Students appear for a simple aptitude assessment.' },
                  { step: '04', title: 'Confirmation', desc: 'Fee payment and admission confirmation.' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--red)', color: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{s.step}</div>
                    <div>
                      <h4 style={{ fontWeight: 700, marginBottom: 4 }}>{s.title}</h4>
                      <p style={{ color: 'var(--gray)', fontSize: '0.88rem' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section style={{ padding: '80px 0', background: 'var(--light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Need Help with Admissions?</h2>
          <p className="section-desc">Our admissions team is here to assist you. Reach out to us!</p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            <a href="tel:061152351117" className="btn-primary"><i className="fas fa-phone"></i> 06115-235117</a>
            <a href="mailto:gnspatna@rediffmail.com" className="btn-secondary" style={{ background: '#f0f0f0', color: 'var(--dark)' }}><i className="fas fa-envelope"></i> Email Us</a>
            <a href="https://wa.me/916115235117" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ background: '#0f7a4a', color: '#fff' }}><i className="fab fa-whatsapp"></i> WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

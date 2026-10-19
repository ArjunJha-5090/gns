import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hostel Life — Gyan Niketan School',
  description: 'Experience a home away from home at Gyan Niketan School\'s boarding facilities.',
};

export default function HostelLifePage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Hostel Life</span>
          </div>
          <h1>Hostel Life</h1>
          <p>A safe, nurturing, and disciplined home away from home.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Boarding</span>
            <h2 className="section-title">A Home Away From Home</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div style={{ background: 'var(--light)', padding: 48, borderRadius: 20 }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 20 }}>Hostel Facilities</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: 'fa-bed', text: 'Comfortable and well-ventilated dormitories' },
                  { icon: 'fa-utensils', text: 'Nutritious, hygienic, and purely vegetarian meals' },
                  { icon: 'fa-book-reader', text: 'Supervised study hours by resident teachers' },
                  { icon: 'fa-heartbeat', text: '24/7 medical assistance and regular health checkups' },
                  { icon: 'fa-shield-alt', text: 'Round-the-clock security with CCTV surveillance' },
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', color: 'var(--gray)' }}>
                    <div style={{ width: 40, height: 40, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20 }}>
                Gyan Niketan provides excellent hostel facilities for students from Classes I to XII. Our boarding 
                program is designed to foster independence, discipline, and a sense of community among students.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 24 }}>
                Under the careful guidance of experienced wardens and resident staff, students follow a structured 
                daily routine that balances academics, sports, and recreation. The hostel becomes a vibrant 
                community where students from diverse backgrounds live and learn together.
              </p>
              <Link href="/contact" className="btn-primary">Inquire About Hostel Admissions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Facilities — Gyan Niketan School, Patna',
  description: 'Explore world-class facilities at Gyan Niketan School Patna — smart classrooms, science labs, robotics, library, sports complex, hostel, and more.',
};

const facilities = [
  { icon: 'fa-desktop', title: 'Smart Classrooms', desc: 'Interactive digital boards and multimedia projectors in all classrooms for an engaging learning experience.', img: '/smart.webp', color: '#dbeafe' },
  { icon: 'fa-flask', title: 'Science Labs', desc: 'Separate fully-equipped Physics, Chemistry, Biology labs with modern instruments for practical learning.', img: '/3.webp', color: '#d1fae5' },
  { icon: 'fa-robot', title: 'Robotics & STEM Lab', desc: 'Cutting-edge robotics kits, coding workstations, and AI tools for 21st-century skill development.', img: '/3.webp', color: '#ede9fe' },
  { icon: 'fa-book', title: 'Digital Library', desc: '10,000+ books, digital resources, and quiet study zones to foster a love of reading and research.', img: '/books.webp', color: '#fef3c7' },
  { icon: 'fa-palette', title: 'Art & Music Studios', desc: 'Dedicated spaces for visual arts, music, and cultural activities to nurture creative expression.', img: '/art.webp', color: '#fee2e2' },
  { icon: 'fa-running', title: 'Sports Complex', desc: 'Multi-sport facilities for cricket, football, basketball, volleyball, and athletics on spacious grounds.', img: '/gy.webp', color: '#d1fae5' },
  { icon: 'fa-bed', title: 'Hostel Facilities', desc: 'Comfortable, secure hostel for Classes I–XII with supervised study hours, nutritious meals, and 24/7 security.', img: '/aryan-class.webp', color: '#fef3c7' },
  { icon: 'fa-bus', title: 'GPS School Buses', desc: 'AC buses with GPS tracking cover major Patna routes — Bailey Road, Boring Road, Danapur, and more.', img: '/smart.webp', color: '#dbeafe' },
  { icon: 'fa-utensils', title: 'Cafeteria', desc: 'Nutritious, hygienic meals served daily. A balanced diet for healthy, growing students.', img: '/books.webp', color: '#d1fae5' },
];

export default function FacilitiesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Facilities</span>
          </div>
          <h1>World-Class Facilities</h1>
          <p>State-of-the-art infrastructure designed to support holistic development and academic excellence.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Infrastructure</span>
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-desc">Every facility at Gyan Niketan is designed to inspire, motivate, and enable students to reach their full potential.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0', transition: 'all 0.3s' }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image src={f.img} alt={f.title} width={400} height={225} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ width: 48, height: 48, background: f.color, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: 'var(--dark)', marginBottom: 14 }}>
                    <i className={`fas ${f.icon}`}></i>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.88rem', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Experience It in Person</h2>
          <p>Schedule a campus visit and see our world-class facilities for yourself.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary"><i className="fas fa-calendar-check"></i> Book a Visit</Link>
            <Link href="/admissions" className="btn-secondary"><i className="fas fa-pen-nib"></i> Apply Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}

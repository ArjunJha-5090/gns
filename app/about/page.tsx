import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Story — Gyan Niketan School, Patna',
  description: 'Discover the legacy of Gyan Niketan School Patna, founded in 1986 by Padma Shree Acharya Kishore Kunal under M.V.V. Nyas. CBSE affiliated, excellence in education.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="hero-shapes">
          <div className="hero-shape"></div>
          <div className="hero-shape"></div>
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>About Us</span>
          </div>
          <h1>Our Story</h1>
          <p>Building dreams and shaping futures since 1986 — the Gyan Niketan journey.</p>
        </div>
      </div>

      {/* About Content */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            <div>
              <span className="section-tag">Our Legacy</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                About <span style={{ color: 'var(--red)' }}>Gyan Niketan</span>
              </h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 16 }}>
                Gyan Niketan, established in 1986 by Padma Shree Acharya Kishore Kunal, IPS, and Mrs. Anita
                Kunal under the M.V.V. Nyas, was built on the vision of providing quality education in a nurturing
                environment to shape responsible, compassionate citizens.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 16 }}>
                Affiliated to CBSE, New Delhi, its first batch appeared in 1990, earning recognition at the
                national level. Over the years, it has grown into a reputed, result-oriented institution with
                hostel facilities for students from Std. I to XII, a spacious multi-discipline playground, and
                an auditorium that encourages excellence through diverse curricular and co-curricular activities.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 24 }}>
                The school offers a well-equipped Senior Secondary section with a wide range of subjects in
                Science, Commerce, Humanities, and Vocational streams, guided by competent faculty. Gyan Niketan
                promotes holistic growth — academic, physical, emotional, and social — ensuring students explore
                their full potential. Its alumni association, GYANOBA, remains actively connected.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/admissions" className="btn-primary">Apply Now</Link>
                <Link href="/contact" className="btn-secondary" style={{ background: '#f5f5f5', color: 'var(--dark)' }}>Contact Us</Link>
              </div>
            </div>
            <div>
              <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.12)', aspectRatio: '4/3' }}>
                <Image src="/gy.webp" alt="Gyan Niketan School Campus" width={600} height={450} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div className="bg-light rounded-[20px] p-6 lg:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" style={{ background: 'var(--light)' }}>
            {[
              { number: '1986', label: 'Year Founded', icon: 'fa-calendar' },
              { number: '1990', label: 'First CBSE Batch', icon: 'fa-graduation-cap' },
              { number: 'CBSE', label: 'Affiliated Board', icon: 'fa-certificate' },
              { number: 'I – XII', label: 'Hostel Facilities', icon: 'fa-bed' },
            ].map((fact, i) => (
              <div key={i}>
                <div style={{ width: 60, height: 60, background: 'rgba(225,29,46,0.1)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: 'var(--red)', margin: '0 auto 16px' }}>
                  <i className={`fas ${fact.icon}`}></i>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--dark)', marginBottom: 4 }}>{fact.number}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section style={{ padding: '100px 0', background: 'var(--light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Founder</span>
            <h2 className="section-title">Padma Shree Acharya Kishore Kunal</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-center max-w-[1000px] mx-auto">
            <div>
              <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.12)', aspectRatio: '3/4', maxWidth: 300, margin: '0 auto' }}>
                <div
                  role="img"
                  aria-label="Founder Padma Shree Acharya Kishore Kunal"
                  style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(160deg, var(--navy), #1e293b)', color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '4.5rem', fontWeight: 700, letterSpacing: '0.04em' }}
                >
                  KK
                </div>
              </div>
            </div>
            <div>
              <p style={{ color: 'var(--red)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Founder, Gyan Niketan School</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 500, marginBottom: 20 }}>A visionary educator who transformed Patna&apos;s education landscape</h3>
              <blockquote style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--gray)', lineHeight: 1.8, borderLeft: '4px solid var(--red)', paddingLeft: 24, marginBottom: 20 }}>
                &ldquo;Education is not just about acquiring knowledge; it&apos;s about transforming lives and building
                character. At Gyan Niketan, we believe in nurturing not just academic excellence, but also moral values,
                leadership qualities, and social responsibility.&rdquo;
              </blockquote>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8 }}>
                Padma Shree Acharya Kishore Kunal, IPS, is a distinguished Indian Police Service officer, author, and
                religious leader who has dedicated his life to education and social service. His vision of combining
                academic excellence with moral values has made Gyan Niketan one of Patna&apos;s most respected institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">School Management</h2>
            <p className="section-desc">Our experienced leadership team is committed to academic excellence and holistic development.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Mrs. Anita Kunal', role: 'Co-Founder & Director', img: '/toppers.jpeg', desc: 'Co-founder with Padma Shree Kishore Kunal, Mrs. Anita Kunal has been the driving force behind the school\'s holistic education mission.' },
              { name: 'Principal', role: 'School Principal', img: '/principal.jpg', desc: 'Our principal leads the school with a focus on academic excellence, character development, and preparing students for the future.' },
              { name: 'Vice Principal', role: 'Academic Head', img: '/books.webp', desc: 'Overseeing academics, curriculum development, and faculty training to ensure the highest standards of education.' },
            ].map((member, i) => (
              <div key={i} style={{ background: 'var(--light)', borderRadius: 16, padding: '28px', textAlign: 'center', border: '1px solid #eee' }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px', border: '3px solid var(--red)' }}>
                  <Image src={member.img} alt={member.name} width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>{member.name}</h3>
                <p style={{ color: 'var(--red)', fontWeight: 600, fontSize: '0.85rem', marginBottom: 12 }}>{member.role}</p>
                <p style={{ color: 'var(--gray)', fontSize: '0.88rem', lineHeight: 1.7 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Be a Part of Our Story</h2>
          <p>Join the Gyan Niketan family and experience education that goes beyond textbooks.</p>
          <div className="cta-buttons">
            <Link href="/admissions" className="btn-primary"><i className="fas fa-pen-nib"></i> Apply Now</Link>
            <Link href="/contact" className="btn-secondary"><i className="fas fa-phone"></i> Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Academics — Gyan Niketan School, Patna',
  description: 'Explore academic programs at Gyan Niketan School. CBSE curriculum from Kindergarten to Class XII with Science, Commerce, Humanities and Vocational streams.',
};

const streams = [
  { name: 'Science (PCM)', icon: 'fa-flask', color: '#dbeafe', textColor: '#1d4ed8', desc: 'Physics, Chemistry, Mathematics for engineering & technology aspirants. JEE preparation integrated.' },
  { name: 'Science (PCB)', icon: 'fa-dna', color: '#d1fae5', textColor: '#065f46', desc: 'Physics, Chemistry, Biology for medical aspirants. NEET preparation integrated.' },
  { name: 'Commerce', icon: 'fa-chart-line', color: '#fef3c7', textColor: '#92400e', desc: 'Accountancy, Business Studies, Economics for future business leaders and CAs.' },
  { name: 'Humanities', icon: 'fa-landmark', color: '#ede9fe', textColor: '#5b21b6', desc: 'History, Geography, Political Science, Economics for UPSC, civil services, and social sciences.' },
];

const programs = [
  { level: 'Kindergarten', classes: 'Nursery – LKG – UKG', focus: 'Play-based learning, language development, motor skills, and social interaction.', img: '/gy.webp' },
  { level: 'Primary School', classes: 'Classes I – V', focus: 'Core literacy, numeracy, EVS, and arts through activity-based, experiential learning.', img: '/smart.webp' },
  { level: 'Middle School', classes: 'Classes VI – VIII', focus: 'Subject specialization, STEM lab work, critical thinking, and leadership activities.', img: '/3.webp' },
  { level: 'Secondary', classes: 'Classes IX – X', focus: 'CBSE board preparation, comprehensive coverage, and exam-readiness training.', img: '/books.webp' },
  { level: 'Senior Secondary', classes: 'Classes XI – XII', focus: 'Stream-specific depth, competitive exam coaching, and career guidance.', img: '/aryan-class.webp' },
];

export default function AcademicsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Academics</span>
          </div>
          <h1>Academics</h1>
          <p>World-class CBSE education from Kindergarten to Senior Secondary — shaping minds and futures.</p>
        </div>
      </div>

      {/* Programs */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Programs</span>
            <h2 className="section-title">Academic Programs</h2>
            <p className="section-desc">Comprehensive education tailored to each stage of a child&apos;s development.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {programs.map((prog, i) => (
              <div key={i} id={['preschool', 'primary', 'middle', 'secondary', 'senior'][i]} className={`grid grid-cols-1 ${i % 2 === 0 ? 'lg:grid-cols-[1fr_1.5fr]' : 'lg:grid-cols-[1.5fr_1fr]'} gap-8 lg:gap-12 items-center`}>
                {i % 2 !== 0 && (
                  <div>
                    <span className="section-tag">{prog.level}</span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', marginBottom: 8 }}>{prog.classes}</h3>
                    <p style={{ color: 'var(--gray)', lineHeight: 1.8 }}>{prog.focus}</p>
                  </div>
                )}
                <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.12)', aspectRatio: '16/9' }}>
                  <Image src={prog.img} alt={prog.level} width={600} height={337} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {i % 2 === 0 && (
                  <div>
                    <span className="section-tag">{prog.level}</span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', marginBottom: 8 }}>{prog.classes}</h3>
                    <p style={{ color: 'var(--gray)', lineHeight: 1.8 }}>{prog.focus}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streams */}
      <section id="curriculum" style={{ padding: '100px 0', background: 'var(--light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Senior Secondary</span>
            <h2 className="section-title">Streams Available (XI – XII)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {streams.map((s, i) => (
              <div key={i} style={{ background: s.color, borderRadius: 16, padding: 28, border: `1px solid ${s.textColor}20` }}>
                <div style={{ width: 52, height: 52, background: '#fff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', color: s.textColor, marginBottom: 16 }}>
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: s.textColor, marginBottom: 8 }}>{s.name}</h3>
                <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Excellence</span>
            <h2 className="section-title">Academic Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-star', title: '98% Board Results', desc: 'Consistently outstanding CBSE board exam performance with multiple distinction holders each year.' },
              { icon: 'fa-robot', title: 'STEM & Robotics', desc: 'Dedicated STEM lab with robotics, coding, and AI programs to build 21st-century skills.' },
              { icon: 'fa-book-open', title: 'Rich Library', desc: '10,000+ books, journals, and digital resources for research and self-directed learning.' },
              { icon: 'fa-medal', title: 'Bihar State Toppers', desc: 'Our students consistently rank among the top scorers in Bihar CBSE board examinations.' },
              { icon: 'fa-chalkboard-teacher', title: 'Expert Faculty', desc: '120+ qualified educators including Ph.D. holders and NET-qualified professionals.' },
              { icon: 'fa-flask', title: 'Science Labs', desc: 'Separate fully-equipped Physics, Chemistry, Biology, and Computer labs for hands-on learning.' },
            ].map((h, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon"><i className={`fas ${h.icon}`}></i></div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Academic Journey?</h2>
          <p>Join Gyan Niketan and experience education that transforms lives.</p>
          <div className="cta-buttons">
            <Link href="/admissions" className="btn-primary"><i className="fas fa-pen-nib"></i> Apply Now</Link>
            <Link href="/contact" className="btn-secondary"><i className="fas fa-question-circle"></i> Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
  );
}

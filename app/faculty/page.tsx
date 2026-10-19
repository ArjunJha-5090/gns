import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Faculty — Gyan Niketan School',
  description: 'Meet our dedicated team of experienced and qualified educators at Gyan Niketan School.',
};

export default function FacultyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Faculty</span>
          </div>
          <h1>Our Faculty</h1>
          <p>Dedicated educators committed to nurturing minds and inspiring excellence.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Educators</span>
            <h2 className="section-title">A Team of Experts</h2>
            <p className="section-desc">Our teachers are more than educators; they are mentors and guides who are deeply invested in the success of every student.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { dept: 'Science Department', count: '25+ Teachers', desc: 'Expert faculty for Physics, Chemistry, Biology, and Computer Science with focus on practical learning.' },
              { dept: 'Mathematics Department', count: '18+ Teachers', desc: 'Dedicated to building strong foundational concepts and advanced problem-solving skills.' },
              { dept: 'Humanities & Commerce', count: '20+ Teachers', desc: 'Experienced professionals guiding students in Economics, Business Studies, History, and more.' },
              { dept: 'Language Department', count: '22+ Teachers', desc: 'Proficient in English, Hindi, and Sanskrit, focusing on communication and literary appreciation.' },
              { dept: 'Sports & Physical Ed.', count: '8+ Coaches', desc: 'Specialized coaches for various sports, promoting physical fitness and teamwork.' },
              { dept: 'Arts & Co-curricular', count: '12+ Instructors', desc: 'Nurturing creativity through music, dance, fine arts, and robotics.' },
            ].map((d, i) => (
              <div key={i} style={{ background: 'var(--light)', borderRadius: 16, padding: 32, border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: 8, color: 'var(--red)' }}>{d.dept}</h3>
                <span style={{ display: 'inline-block', background: '#fff', padding: '4px 12px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 600, color: 'var(--dark)', marginBottom: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>{d.count}</span>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

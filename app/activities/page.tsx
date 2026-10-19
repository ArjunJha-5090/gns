import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Co-Curricular Activities — Gyan Niketan School',
  description: 'Explore the vibrant co-curricular and extracurricular activities at Gyan Niketan School.',
};

export default function ActivitiesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Activities</span>
          </div>
          <h1>Co-Curricular Activities</h1>
          <p>Fostering creativity, physical fitness, and holistic development beyond the classroom.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'fa-running', name: 'Sports' },
                { icon: 'fa-palette', name: 'Fine Arts' },
                { icon: 'fa-music', name: 'Music & Dance' },
                { icon: 'fa-robot', name: 'Robotics Club' },
              ].map((act, i) => (
                <div key={i} style={{ background: 'var(--light)', padding: 32, borderRadius: 16, textAlign: 'center' }}>
                  <i className={`fas ${act.icon}`} style={{ fontSize: '2.5rem', color: 'var(--red)', marginBottom: 16 }}></i>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700 }}>{act.name}</p>
                </div>
              ))}
            </div>
            <div>
              <span className="section-tag">Beyond Academics</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>A Balanced Approach to Education</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20 }}>
                At Gyan Niketan, we believe that education extends far beyond the four walls of a classroom. 
                Our extensive co-curricular programs are designed to discover and hone the hidden talents of our students.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8 }}>
                From our sprawling multi-discipline sports playground to our dedicated art and music studios, students 
                are encouraged to participate in inter-house competitions, debates, quizzes, and cultural events. 
                This ensures comprehensive physical, emotional, and social growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Desk Messages — Gyan Niketan School',
  description: 'Messages from the leadership and administration of Gyan Niketan School.',
};

export default function DeskMessagesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Desk Messages</span>
          </div>
          <h1>Desk Messages</h1>
          <p>Words of wisdom and vision from our leadership.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          
          <div style={{ marginBottom: 80 }}>
            <span className="section-tag">Principal&apos;s Desk</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Message from the Principal</h2>
            <div style={{ background: 'var(--light)', padding: 40, borderRadius: 20, borderLeft: '4px solid var(--red)' }}>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20, fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic' }}>
                &ldquo;Welcome to Gyan Niketan. Education is a shared commitment between dedicated teachers, 
                motivated students and enthusiastic parents with high expectations. Today, the role of a school 
                is not only to pursue academic excellence but also to motivate and empower its students to be 
                lifelong learners, critical thinkers, and productive members of an ever-changing global society.&rdquo;
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20, fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic' }}>
                &ldquo;At Gyan Niketan, we provide an atmosphere to our students for multifaceted development, where 
                children are encouraged to channelize their potential in the pursuit of excellence. This can only 
                be possible in a holistic, student-centric environment.&rdquo;
              </p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Principal</h3>
              <p style={{ color: 'var(--red)', fontSize: '0.85rem', fontWeight: 600 }}>Gyan Niketan School</p>
            </div>
          </div>
          
          <div>
            <span className="section-tag">Administrator&apos;s Desk</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Message from the Administration</h2>
            <div style={{ background: '#fff', padding: 40, borderRadius: 20, border: '1px solid #f0f0f0', borderLeft: '4px solid var(--gold)', boxShadow: '0 12px 32px rgba(0,0,0,0.05)' }}>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20, fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic' }}>
                &ldquo;The management of Gyan Niketan is committed to providing state-of-the-art infrastructure and 
                a safe, nurturing environment for all our students. We believe that a school is a place where 
                students begin to learn lessons of life.&rdquo;
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20, fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic' }}>
                &ldquo;Our constant endeavor is to create a climate of continuous improvement and excellence. We 
                warmly invite you to explore our website and learn more about what Gyan Niketan has to offer.&rdquo;
              </p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Administrator</h3>
              <p style={{ color: '#8a6a00', fontSize: '0.85rem', fontWeight: 600 }}>Gyan Niketan School</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

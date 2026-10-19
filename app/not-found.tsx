import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px', background: '#fff', marginTop: 108 }}>
      <div>
        <div style={{ fontSize: '6rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--red)', lineHeight: 1 }}>404</div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, margin: '16px 0 8px' }}>Page Not Found</h1>
        <p style={{ color: 'var(--gray)', fontSize: '1rem', marginBottom: 32, maxWidth: 400, margin: '0 auto 32px' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary"><i className="fas fa-home"></i> Go Home</Link>
          <Link href="/contact" className="btn-secondary" style={{ background: '#f5f5f5', color: 'var(--dark)' }}><i className="fas fa-envelope"></i> Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

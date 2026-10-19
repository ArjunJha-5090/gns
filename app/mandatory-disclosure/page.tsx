import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mandatory Public Disclosure — Gyan Niketan School',
  description: 'CBSE Mandatory Public Disclosure details for Gyan Niketan School, Patna.',
};

export default function MandatoryDisclosurePage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Mandatory Disclosure</span>
          </div>
          <h1>Mandatory Public Disclosure</h1>
          <p>In compliance with CBSE guidelines and regulations.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ background: 'var(--light)', padding: 48, borderRadius: 20, border: '1px solid #e5e7eb' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 24, borderBottom: '2px solid var(--red)', paddingBottom: 12, display: 'inline-block' }}>General Information</h2>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
              <tbody>
                {[
                  { label: 'Name of the School', value: 'Gyan Niketan School' },
                  { label: 'Affiliation No.', value: '330018' },
                  { label: 'School Code', value: '65016' },
                  { label: 'Complete Address', value: 'Vitthal Complex, Ranjan Path, Gola Road (Danapur Cantt.), Patna – 801503' },
                  { label: 'Principal Name & Qualification', value: 'Available on request' },
                  { label: 'School Email ID', value: 'gnspatna@rediffmail.com' },
                  { label: 'Contact Details', value: '06115 – 235117, 235525' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '16px 0', fontWeight: 600, color: 'var(--dark)', width: '40%' }}>{row.label}</td>
                    <td style={{ padding: '16px 0', color: 'var(--gray)' }}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: 48, padding: 24, background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', textAlign: 'center' }}>
              <i className="fas fa-file-pdf" style={{ fontSize: '2.5rem', color: 'var(--red)', marginBottom: 16 }}></i>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: 8 }}>Documents & Certificates</h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: 20 }}>
                Copies of Affiliation/Upgradation Letter, Trust Deed, NOC, Recognition Certificate, 
                Building Safety Certificate, Fire Safety Certificate, and Water/Health Certificates are 
                maintained in the school office and are available for inspection.
              </p>
              <button className="btn-secondary" style={{ background: '#f5f5f5', color: 'var(--dark)' }}>Download Full Disclosure PDF</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

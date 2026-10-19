import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Academic Calendar — Gyan Niketan School',
  description: 'View the academic calendar for the upcoming session at Gyan Niketan School.',
};

export default function CalendarPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Academic Calendar</span>
          </div>
          <h1>Academic Calendar</h1>
          <p>Important dates, holidays, and examination schedules for the academic year 2026-27.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ background: 'var(--light)', borderRadius: 20, padding: 40, border: '1px solid #f0f0f0' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 24, textAlign: 'center' }}>Term 1 (April - September)</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { date: 'April 05', event: 'New Session Begins' },
                { date: 'May 15 - Jun 20', event: 'Summer Vacation' },
                { date: 'July 10', event: 'Periodic Assessment I' },
                { date: 'August 15', event: 'Independence Day Celebration' },
                { date: 'September 15', event: 'Half-Yearly Examinations' },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #e5e7eb' }}>
                  <span style={{ fontWeight: 700, color: 'var(--red)' }}>{item.date}</span>
                  <span style={{ color: 'var(--dark)', fontWeight: 500 }}>{item.event}</span>
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', margin: '48px 0 24px', textAlign: 'center' }}>Term 2 (October - March)</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { date: 'October', event: 'Dussehra / Diwali Holidays' },
                { date: 'December 10', event: 'Periodic Assessment II' },
                { date: 'Dec 25 - Jan 02', event: 'Winter Vacation' },
                { date: 'January 26', event: 'Republic Day Celebration' },
                { date: 'February', event: 'Pre-Board Examinations (Classes X & XII)' },
                { date: 'March', event: 'Annual Examinations' },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: i === 5 ? 'none' : '1px solid #e5e7eb' }}>
                  <span style={{ fontWeight: 700, color: 'var(--red)' }}>{item.date}</span>
                  <span style={{ color: 'var(--dark)', fontWeight: 500 }}>{item.event}</span>
                </li>
              ))}
            </ul>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--gray)', fontSize: '0.9rem', marginTop: 32 }}>
            * Dates are tentative and subject to change. Official circulars will be sent for confirmation.
          </p>
        </div>
      </section>
    </>
  );
}

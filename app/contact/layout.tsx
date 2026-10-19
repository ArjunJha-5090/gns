import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Gyan Niketan School, Patna',
  description: 'Contact Gyan Niketan School, Patna for admissions, fees, facilities and general enquiries. Find our address, phone, email and office hours.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

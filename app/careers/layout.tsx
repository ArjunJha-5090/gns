import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers — Gyan Niketan School, Patna',
  description: 'Join the teaching and administrative team at Gyan Niketan School, Patna. See current openings and apply online.',
  alternates: { canonical: '/careers' },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { school } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Terms of Service — Gyan Niketan School, Patna',
  description: 'Terms of use for the Gyan Niketan School website.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" intro="The terms that apply when you use this website." updated="October 2026">
      <div>
        <h2>Use of this website</h2>
        <p>
          This website provides information about Gyan Niketan School, Patna. By using it you agree to use it lawfully and not to
          misuse its forms, chat assistant or other features.
        </p>
      </div>
      <div>
        <h2>Accuracy of information</h2>
        <p>
          We work to keep content accurate, but fees, dates, admission criteria and events may change. Please confirm important
          details with the school office before acting on them. Submitting an enquiry or application does not guarantee admission
          or employment.
        </p>
      </div>
      <div>
        <h2>AI assistant</h2>
        <p>
          The chat assistant offers general information and may make mistakes. It is not an official statement of school policy.
        </p>
      </div>
      <div>
        <h2>Intellectual property</h2>
        <p>
          The school name, logo, text and photographs on this website belong to Gyan Niketan School or are used with permission,
          and may not be reproduced without written consent.
        </p>
      </div>
      <div>
        <h2>External links</h2>
        <p>We are not responsible for the content or practices of external websites linked from this site.</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>
          Questions about these terms: <a href={`mailto:${school.email}`}>{school.email}</a> or <a href={school.phoneHref}>{school.phone}</a>.
        </p>
      </div>
    </LegalPage>
  );
}

import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { school } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Privacy Policy — Gyan Niketan School, Patna',
  description: 'How Gyan Niketan School collects, uses and protects personal information shared through this website.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" intro="How we handle the information you share with us through this website." updated="October 2026">
      <div>
        <h2>Information we collect</h2>
        <p>We collect only what you choose to submit through this website:</p>
        <ul>
          <li>Contact and admission enquiry forms: name, email address, phone number and your message.</li>
          <li>Career applications: your contact details and the application information you provide.</li>
          <li>Newsletter: your email address.</li>
          <li>AI assistant: the messages you type into the chat widget.</li>
        </ul>
      </div>
      <div>
        <h2>How we use it</h2>
        <p>
          We use your information to respond to enquiries, process admission and job applications, and send school updates if you
          subscribed. We do not sell your personal information.
        </p>
      </div>
      <div>
        <h2>AI assistant</h2>
        <p>
          Messages sent to the chat assistant are processed by a third-party AI service to generate replies. Please do not share
          sensitive personal information in the chat.
        </p>
      </div>
      <div>
        <h2>Third-party services</h2>
        <p>
          Fee payment and the ERP login link to an external school-management platform with its own privacy practices. This
          website also embeds Google Maps on the contact page.
        </p>
      </div>
      <div>
        <h2>Your choices</h2>
        <p>
          You may ask us to access, correct or delete the information you have submitted, or unsubscribe from updates at any time,
          by writing to <a href={`mailto:${school.email}`}>{school.email}</a>.
        </p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>
          {school.address}. Phone: <a href={school.phoneHref}>{school.phone}</a>.
        </p>
      </div>
    </LegalPage>
  );
}

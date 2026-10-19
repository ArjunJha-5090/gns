'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Open mailto — no backend required
    window.location.href = `mailto:gnspatna@rediffmail.com?subject=Newsletter%20Subscription&body=Please%20subscribe%20me%20to%20the%20Gyan%20Niketan%20newsletter.%0A%0AEmail%3A%20${encodeURIComponent(email)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mb-8 flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-5 py-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
          <Check size={14} strokeWidth={3} />
        </span>
        <p className="text-sm font-semibold text-gold">Your email client will open shortly — thank you!</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mb-8" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1 transition-colors focus-within:border-gold">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          autoComplete="email"
          className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red text-white transition-colors hover:bg-gold"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}

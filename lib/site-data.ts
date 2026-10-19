export type SchoolEvent = {
  date: string;
  title: string;
  desc: string;
  type: 'Event' | 'Academic' | 'Sports' | 'Notice';
};

/** Single source of truth for homepage "Blackboard" and /news-events. */
export const events: SchoolEvent[] = [
  { date: 'March 20, 2026', title: 'Annual Day Celebration', desc: 'Join us for our grand Annual Day celebration featuring cultural performances by students across all grades.', type: 'Event' },
  { date: 'April 10, 2026', title: 'Science Exhibition', desc: 'Students showcase their innovative projects and experiments in our annual Science & Technology Exhibition.', type: 'Academic' },
  { date: 'May 05, 2026', title: 'Sports Meet', desc: 'The inter-house sports competition focusing on track, field, and team sports.', type: 'Sports' },
  { date: 'June 15, 2026', title: 'New Academic Session Begins', desc: 'Welcoming students for the 2026-27 academic year with an orientation program.', type: 'Notice' },
];

export const school = {
  phone: '06115-235117',
  phoneHref: 'tel:06115235117',
  email: 'gnspatna@rediffmail.com',
  address: 'Vitthal Vihar Complex, Ranjan Path, Gola Road (Danapur Cantt.), Patna, Bihar 801503',
  social: {
    facebook: 'https://www.facebook.com/gyanniketanpatna/',
    instagram: 'https://www.instagram.com/apna_gyan_niketan/',
    youtube: 'https://www.youtube.com/@gyanniketanonline6940/featured',
  },
};

/** Public site URL. Override with NEXT_PUBLIC_SITE_URL in production if the domain differs. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://gyanniketan.in').replace(/\/$/, '');

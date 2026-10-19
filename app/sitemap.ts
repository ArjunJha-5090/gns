import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const pages = [
    '/', '/about', '/academics', '/admissions', '/alumni', '/contact',
    '/vision', '/news-events', '/calendar', '/facilities', '/faculty',
    '/desk-messages', '/gallery', '/careers', '/council', '/activities',
    '/hostel-life', '/mandatory-disclosure', '/privacy-policy', '/terms',
  ];

  return pages.map(page => ({
    url: `${base}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: page === '/' ? 1 : 0.8,
  }));
}

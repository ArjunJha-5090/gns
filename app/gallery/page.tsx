import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery — Gyan Niketan School, Patna',
  description: 'Explore the photo gallery of Gyan Niketan School Patna — campus photos, events, activities, and student life.',
};

const allImages = [
  { src: '/smart.webp', title: 'Smart Classrooms', category: 'Campus' },
  { src: '/aryan-class.webp', title: 'Holistic Education', category: 'Academic' },
  { src: '/3.webp', title: 'STEM & Robotics Lab', category: 'Labs' },
  { src: '/books.webp', title: 'School Library', category: 'Campus' },
  { src: '/art.webp', title: 'Art & Creative Spaces', category: 'Activities' },
  { src: '/gy.webp', title: 'School Campus', category: 'Campus' },
  { src: '/toppers.jpeg', title: 'Bihar State Topper', category: 'Achievement' },
  { src: '/smart.webp', title: 'Interactive Learning', category: 'Academic' },
  { src: '/3.webp', title: 'Science Lab', category: 'Labs' },
  { src: '/books.webp', title: 'Library & Research', category: 'Campus' },
  { src: '/art.webp', title: 'Cultural Activities', category: 'Activities' },
  { src: '/aryan-class.webp', title: 'Classroom Sessions', category: 'Academic' },
];

// Each photo is shown once — the source list repeated the same six files.
const galleryImages = allImages.filter((img, i, arr) => arr.findIndex((x) => x.src === img.src) === i);

export default function GalleryPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-shapes"><div className="hero-shape"></div></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Gallery</span>
          </div>
          <h1>Photo Gallery</h1>
          <p>A glimpse into life at Gyan Niketan — campus, academics, events, and achievements.</p>
        </div>
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Campus Life</span>
            <h2 className="section-title">Our World Through the Lens</h2>
          </div>
          <GalleryGrid items={galleryImages} />
        </div>
      </section>
    </>
  );
}

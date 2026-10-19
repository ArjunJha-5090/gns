import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';
import { school } from '@/lib/site-data';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Tour', href: '/#tour' },
    { name: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const academicLinks = [
    { name: 'Preschool', href: '/academics#preschool' },
    { name: 'Primary School', href: '/academics#primary' },
    { name: 'Middle School', href: '/academics#middle' },
    { name: 'Secondary School', href: '/academics#secondary' },
    { name: 'Senior Secondary', href: '/academics#senior' },
    { name: 'Curriculum', href: '/academics#curriculum' }
  ];

  return (
    <footer className="bg-navy pt-20 pb-10 border-t-4 border-red font-sans relative">
      
      {/* Scroll to Top Button */}
      <a href="#main" aria-label="Back to top" className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-gold hover:-translate-y-2 transition-all shadow-lg border-4 border-white">
        <ArrowUp size={20} strokeWidth={3} />
      </a>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand & Contact Info */}
          <div>
            <div className="bg-white inline-block p-2 rounded-lg mb-6 shadow-sm">
              <Image src="/logo.png" alt="Gyan Niketan" width={100} height={100} className="object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Global Minds Indian Hearts. Gyan Niketan School provides world-class education rooted in traditional values.
            </p>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-red shrink-0" size={18} />
                <span>Vitthal Vihar Complex, Ranjan Path, Gola Road (Danapur Cantt.), Patna, Bihar 801503</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-red shrink-0" size={18} />
                <a href="tel:06115235117" className="hover:text-gold transition-colors">06115-235117</a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-red shrink-0" size={18} />
                <a href="mailto:gnspatna@rediffmail.com" className="hover:text-gold transition-colors">gnspatna@rediffmail.com</a>
              </li>
            </ul>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6 font-poppins relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-red">Quick Links</h2>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-gold hover:translate-x-1 transition-all inline-flex items-center gap-2 before:content-['›'] before:text-red before:font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academics */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6 font-poppins relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-red">Academics</h2>
            <ul className="space-y-3">
              {academicLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-gold hover:translate-x-1 transition-all inline-flex items-center gap-2 before:content-['›'] before:text-red before:font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Social */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6 font-poppins relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-red">Connect With Us</h2>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <NewsletterForm />
            
            <div className="flex gap-4">
              <a href={school.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#2a2c2e] text-white flex items-center justify-center hover:bg-[#1877f2] transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href={school.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#2a2c2e] text-white flex items-center justify-center hover:bg-[#e4405f] transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={school.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-[#2a2c2e] text-white flex items-center justify-center hover:bg-[#ff0000] transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-xs tracking-wider">
            © {new Date().getFullYear()} Gyan Niketan School. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-xs tracking-wider">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

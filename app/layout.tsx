import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";
import "@fontsource/great-vibes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import Preloader from "@/components/Preloader";
import Providers from "@/components/Providers";
import { siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gyan Niketan School, Patna | Best CBSE School in Patna | Admissions 2026-27",
    template: "%s",
  },
  description:
    "Gyan Niketan School Patna offers world-class education from Kindergarten to Senior Secondary. Holistic learning, smart classrooms, and future-ready skills. Admissions open 2026-27.",
  keywords: "Gyan Niketan School, Patna, CBSE School, Best School in Patna, Admissions, Education",
  authors: [{ name: "Gyan Niketan School, Patna" }],
  openGraph: {
    type: "website",
    siteName: "Gyan Niketan School, Patna",
    locale: "en_IN",
    url: "/",
    title: "Gyan Niketan School, Patna | Best CBSE School in Patna | Admissions 2026-27",
    description:
      "Gyan Niketan School Patna offers world-class education from Kindergarten to Senior Secondary. Holistic learning, smart classrooms, and future-ready skills. Admissions open 2026-27.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Gyan Niketan School Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyan Niketan School, Patna | Best CBSE School in Patna | Admissions 2026-27",
    description:
      "Gyan Niketan School Patna offers world-class education from Kindergarten to Senior Secondary.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Patna, Bihar" />
        <meta name="geo.position" content="25.6198848;85.0500403" />
        <meta name="ICBM" content="25.6198848, 85.0500403" />
        {/* Performance: DNS prefetch for external services */}
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        {/* School Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "Gyan Niketan School",
              alternateName: "Gyan Niketan, Patna",
              url: "https://gyanniketan.in/",
              logo: "https://gyanniketan.in/logo.png",
              description:
                "Gyan Niketan School, Patna is a leading CBSE-affiliated senior secondary school offering holistic, value-based education from Kindergarten to Class XII.",
              foundingDate: "1986",
              telephone: "+91-6115-235117",
              email: "gnspatna@rediffmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vitthal Vihar Complex, Ranjan Path, Gola Road (Danapur Cantt.)",
                addressLocality: "Patna",
                addressRegion: "Bihar",
                postalCode: "801503",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.6198848,
                longitude: 85.0500403,
              },
              sameAs: [
                "https://www.facebook.com/gyanniketanpatna/",
                "https://www.instagram.com/apna_gyan_niketan/",
                "https://www.youtube.com/@gyanniketanonline6940/featured",
              ],
            }),
          }}
        />
      </head>

      <body>
        <Providers>
          <a href="#main" className="skip-link">Skip to content</a>
          <Preloader />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <aside aria-label="Chat assistant">
            <ChatbotWidget />
          </aside>
        </Providers>
      </body>
    </html>
  );
}

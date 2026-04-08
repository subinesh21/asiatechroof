import type { Metadata } from 'next';
import { Bebas_Neue, Montserrat, Inter } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asiatechroof.sg'),
  title: {
    default: 'Asia Tech Roofing — Singapore\'s Trusted Roofing Specialist',
    template: '%s | Asia Tech Roofing',
  },
  description:
    'Expert roofing, waterproofing & leak repair for residential, commercial, and industrial properties across Singapore. 20+ years of experience. Free site inspection.',
  keywords: ['roofing Singapore', 'roof repair', 'leak repair', 'waterproofing', 'structural works', 'Asia Tech Roofing', 'roof contractor'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Asia Tech Roofing — Singapore\'s Trusted Roofing Specialist',
    description: 'Expert roofing, waterproofing & leak repair across Singapore. Free inspection.',
    url: 'https://www.asiatechroof.sg',
    siteName: 'Asia Tech Roofing',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&q=80&fit=crop', // Provide an actual OG image
        width: 1200,
        height: 630,
        alt: 'Asia Tech Roofing Services',
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asia Tech Roofing — Singapore\'s Trusted Roofing Specialist',
    description: 'Expert roofing, waterproofing & leak repair across Singapore. Free inspection.',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&q=80&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Asia Tech Roofing",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&q=80&fit=crop",
    "@id": "https://www.asiatechroof.sg",
    "url": "https://www.asiatechroof.sg",
    "telephone": "+6590545431",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Singapore",
      "addressCountry": "SG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 1.3521,
      "longitude": 103.8198
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/asiatechroofing/"
    ],
    "priceRange": "$$" 
  };

  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
        className="bg-[#0D0F12] text-[#F0EDE6] overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}

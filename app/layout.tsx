import type { Metadata } from 'next';
import { Bebas_Neue, Montserrat, Inter } from 'next/font/google';
import './globals.css';
import FloatingCTA from '@/components/FloatingCTA';

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
  metadataBase: new URL('https://asiatechroof.sg'),
  title: {
    default: 'Asia Tech Roofing | #1 Roofing Specialist Singapore Since 2004',
    template: '%s | Asia Tech Roofing Singapore'
  },
  description: 'Singapore\'s trusted roofing contractor since 2004. Expert roof repair, waterproofing, leak repair & structural works for HDB, landed homes, commercial & industrial. Free inspection. Call now.',

  keywords: [
    // Core Keywords
    'roofing contractor Singapore',
    'roof repair Singapore',
    'roof leak repair Singapore',
    'waterproofing Singapore',
    'roof waterproofing Singapore',
    'leak repair Singapore',
    'best roofing contractor Singapore',
    'roofing specialist Singapore',
    'emergency roof repair Singapore',
    '24 hour roof repair Singapore',

    // Cost / Intent Keywords
    'roof repair cost Singapore',
    'roof waterproofing cost Singapore',
    'roof leak repair price Singapore',
    'cheap roofing contractor Singapore',
    'affordable roof repair Singapore',
    'roof replacement cost Singapore',
    'ceiling leak repair cost Singapore',

    // Residential / HDB
    'HDB roof repair Singapore',
    'HDB ceiling leak repair',
    'landed property roof repair Singapore',
    'home roofing services Singapore',
    'house roof repair Singapore',
    'residential roofing Singapore',

    // Commercial / Industrial
    'commercial roofing Singapore',
    'industrial roofing Singapore',
    'factory roof repair Singapore',
    'warehouse roofing Singapore',
    'commercial roof waterproofing Singapore',
    'industrial roof leak repair',

    // Services
    'roof inspection Singapore',
    'roof maintenance Singapore',
    'roof replacement Singapore',
    'ceiling leakage repair Singapore',
    'gutter repair Singapore',
    'gutter waterproofing Singapore',
    'metal roof repair Singapore',
    'tile roof repair Singapore',
    'flat roof repair Singapore',
    'concrete roof waterproofing Singapore',

    // Problem-Based Keywords
    'fix roof leak Singapore',
    'roof leaking during rain Singapore',
    'water leaking from ceiling Singapore',
    'how to fix roof leakage Singapore',
    'roof crack repair Singapore',
    'roof damage repair Singapore',

    // Emergency / Urgent
    'urgent roof repair Singapore',
    'same day roof repair Singapore',
    'fast roofing service Singapore',
    '24/7 roofing Singapore',

    // Local Area Keywords (Major SG Areas)
    'roof repair Jurong',
    'roof repair Tampines',
    'roof repair Woodlands',
    'roof repair Bedok',
    'roof repair Yishun',
    'roof repair Ang Mo Kio',
    'roof repair Toa Payoh',
    'roof repair Sengkang',
    'roof repair Punggol',
    'roof repair Hougang',
    'roof repair Bukit Batok',
    'roof repair Choa Chu Kang',
    'roof repair Clementi',
    'roof repair Pasir Ris',

    // Roofing Types
    'flat roof waterproofing Singapore',
    'pitched roof repair Singapore',
    'RC roof waterproofing Singapore',
    'balcony waterproofing Singapore',
    'toilet waterproofing Singapore',
    'roof slab waterproofing Singapore',

    // Materials / Techniques
    'torch on waterproofing Singapore',
    'PU waterproofing Singapore',
    'membrane waterproofing Singapore',
    'liquid waterproofing Singapore',
    'bitumen waterproofing Singapore',

    // Trust / Branding Keywords
    'top roofing company Singapore',
    'trusted roofing contractor Singapore',
    'licensed roofing contractor Singapore',
    'experienced roof repair Singapore',
    'professional roofing services Singapore',

    // Niche / Extra Coverage
    'skylight leak repair Singapore',
    'roof flashing repair Singapore',
    'roof drainage repair Singapore',
    'roof sealing Singapore',
    'roof coating Singapore',
    'roof restoration Singapore',
    'roof renovation Singapore',
    'roof insulation Singapore',
    'heat proofing roof Singapore',
    'water seepage repair Singapore',
    'ceiling water damage repair Singapore'
  ],

  authors: [{ name: 'Asia Tech Roofing Specialist' }],
  creator: 'Asia Tech Roofing Specialist',
  publisher: 'Asia Tech Roofing Specialist',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },

  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://asiatechroof.sg',
    siteName: 'Asia Tech Roofing Specialist',
    title: 'Asia Tech Roofing | #1 Roofing Specialist Singapore',
    description: 'Expert roofing, waterproofing & leak repair across Singapore since 2004. Free site inspection. 24hr emergency response.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Asia Tech Roofing Singapore'
    }]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Asia Tech Roofing | Singapore Roofing Specialist',
    description: 'Expert roofing, waterproofing & leak repair across Singapore since 2004.',
    images: ['/og-image.jpg']
  },

  alternates: {
    canonical: 'https://asiatechroof.sg'
  },

  verification: {
    google: 'yEReuorzubCdyP6M4S-vGUtYglTcMg2rMr7u1HGlJdM'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Asia Tech Roofing Specialist",
    "url": "https://asiatechroof.sg",
    "logo": "https://asiatechroof.sg/logo.png",
    "image": "https://asiatechroof.sg/og-image.jpg",
    "description": "Singapore's trusted roofing, waterproofing & leak repair specialists since 2004. Serving residential, commercial, and industrial properties island-wide.",
    "telephone": "+6590545431",
    "email": "sales@asiatechroof.sg",
    "foundingDate": "2004",
    "priceRange": "$$",
    "currenciesAccepted": "SGD",
    "paymentAccepted": "Cash, Bank Transfer, PayNow",
    "areaServed": {
      "@type": "City",
      "name": "Singapore"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SG",
      "addressLocality": "Singapore"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 1.3521,
      "longitude": 103.8198
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair Singapore" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Leak Repair Singapore" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Waterproofing Singapore" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Roofing Works Singapore" }}
      ]
    },
    "sameAs": [
      "https://www.facebook.com/asiatechroof",
      "https://g.page/asiatechroof"
    ]
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
        className="bg-[#FFFFFF] text-[#111827] overflow-x-hidden"
      >
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}

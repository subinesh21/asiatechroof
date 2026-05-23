import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Repair Singapore — Re-Roofing & Maintenance | Asia Tech Roofing',
  description: 'Expert roof repair, maintenance, and full roof replacements for residential, commercial, and industrial properties in Singapore.',
  alternates: { canonical: '/services/roof-repair' },
  openGraph: {
    title: 'Roof Repair Singapore — Re-Roofing & Maintenance | Asia Tech Roofing',
    description: 'Expert roof repair, maintenance, and full roof replacements in Singapore.',
    url: '/services/roof-repair',
  },
};


const services = [
  { num: '01', label: 'Roof Repair', href: '/services/roof-repair', active: true },
  { num: '02', label: 'Leak Repair', href: '/services/leak-repair', active: false },
  { num: '03', label: 'Waterproofing', href: '/services/waterproofing', active: false },
  { num: '04', label: 'Structural Works', href: '/services/structural-works', active: false },
];

const bullets = [
  'Metal roof panel replacement & re-roofing',
  'Concrete & tile roof repair and re-bedding',
  'Ridge capping and flashing works',
  'Skylight repair and replacement',
  'Emergency storm damage repairs',
  'Full roof condition assessment',
  'Gutter replacement and maintenance',
];

export default function RoofRepairPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Asia Tech Roofing Specialist",
      "image": "https://asiatechroof.sg/og-image.jpg"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Minor Leak Repair"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Services / Roof Repair"
        title={<>ROOF<br />REPAIR</>}
        subtitle="Professional roof repair for all roof types — metal, concrete, tile, and membrane. From minor patches to full replacements."
        bgImage="/service/roof-service.webp"
      />

      {/* Service Nav */}
      <div className="bg-[#F9FAFB] border-b border-[rgba(201,168,76,0.2)]">
        <div className="flex px-6 md:px-[60px]">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`px-6 py-4 text-[11px] tracking-[2px] uppercase font-semibold no-underline transition-all duration-200 border-b-[2px] ${
                s.active
                  ? 'border-[#C9A84C] text-[#C9A84C]'
                  : 'border-transparent text-[#111827] hover:text-[#C9A84C] hover:border-[#C9A84C]'
              }`}
              style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {/* MAIN DETAIL */}
      <section className="bg-[#FFFFFF] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="grid grid-cols-2 gap-20 items-center">
          <Reveal>
            <div
              className="h-[560px] bg-cover bg-center relative"
              style={{ backgroundImage: "url('/service/roof-service.webp')" }}
            >
              <div className="absolute bottom-0 left-0 bg-[#C9A84C] text-[#111827] px-5 py-2.5 text-[10px] font-bold tracking-[2px] uppercase">
                Roof Repair Specialists
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="leading-none mb-[-12px]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '96px', color: 'rgba(201,168,76,0.12)' }}>01</div>
            <div className="text-[#111827] mb-5" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}>ROOF REPAIR</div>
            <p className="text-[15px] text-[#111827] leading-[1.9] mb-8">
              From minor patch repairs to complete roof replacements, our certified team handles all roof types with precision and care. We assess every job thoroughly before recommending the most cost-effective, long-lasting solution.
            </p>
            <p className="text-[15px] text-[#111827] leading-[1.9] mb-8">
              Whether you're dealing with storm damage, aging materials, or routine wear, we have the expertise and equipment to restore your roof to full performance — quickly and affordably.
            </p>
            <ul className="list-none mb-9">
              {bullets.map((b, i) => (
                <li key={i} className="text-[13px] text-[#111827] py-2.5 border-b border-[rgba(201,168,76,0.2)] flex gap-3 items-start">
                  <span className="text-[#C9A84C] flex-shrink-0">→</span>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="bg-[#C9A84C] text-[#111827] border-2 border-[#C9A84C] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] no-underline inline-block"
              style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
            >
              Get Free Inspection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#F9FAFB] py-16 md:py-[100px] px-6 md:px-[60px]">
        <Reveal>
          <h2 className="leading-none text-[#111827] mb-[60px]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}>
            Why Choose Us<br />For Roof Repair
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {[
            { icon: '🔍', title: 'Thorough Assessment', desc: 'Every job starts with a comprehensive roof inspection to identify all issues — visible and hidden.' },
            { icon: '⚡', title: '24-Hour Emergency', desc: 'Urgent roof damage? We mobilise fast to contain the situation and prevent further damage.' },
            { icon: '🏆', title: 'All Roof Types', desc: 'Metal, IBR, concrete tile, flat membrane — our team is trained on every major roofing system.' },
            { icon: '✅', title: 'Workmanship Warranty', desc: 'All completed repairs come with a written workmanship warranty for your peace of mind.' },
            { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden costs. We give you a clear, itemised quote before any work begins.' },
            { icon: '🛡️', title: 'Fully Certified', desc: 'BCA licensed and fully insured. You are protected at every stage of the job.' },
          ].map((card, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <div className="bg-[#F3F4F6] p-[36px_32px]">
                <div className="text-[32px] mb-4">{card.icon}</div>
                <div className="font-bold text-[16px] text-[#111827] mb-3" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>{card.title}</div>
                <p className="text-[13px] text-[#111827] leading-[1.7]">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner
        label="Book Now"
        title={<>GET YOUR ROOF<br /><span className="text-[#C9A84C]">INSPECTED FREE</span></>}
        description="Our team will assess your roof and provide an honest evaluation and transparent quote — at no cost."
      />

      <Footer />
    </>
  );
}

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HDB Roof Repair Singapore | Expert Ceiling Leak Fix (No-Hacking)',
  description: 'Singapore\'s HDB roof repair specialist. Reliable waterproofing for top floor units and ceiling leak repairs. Approved PUB & HDB-grade materials. 24-hr response.',
  alternates: { canonical: '/hdb-roof-repair' },
  openGraph: {
    title: 'HDB Roof & Ceiling Leak Repair | Asia Tech Roofing',
    description: 'Expert HDB roofing solutions. We fix ceiling leaks using modern PU injection methods. No hacking required.',
    url: '/hdb-roof-repair',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is responsible for HDB ceiling leaks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For inter-floor leaks, the responsibility is typically shared 50/50 between the upper and lower floor owners. If the leak is from the main HDB roof (top floor), it is usually the responsibility of the Town Council."
      }
    },
    {
      "@type": "Question",
      "name": "Can a ceiling leak be fixed without hacking tiles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Asia Tech Roofing specializes in PU Chemical Injection Grouting. This involves injecting a water-reactive polymer into the concrete slab to seal leaks from the inside without removing any tiles."
      }
    }
  ]
};

export default function HDBRoofRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-[180px] pb-[100px] px-6 md:px-[60px] bg-[#0D0F12] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?w=1600&q=80"
            alt="HDB Roof Repair Singapore"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1000px]">
          <Reveal>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-6 block">Residiential Excellence</span>
            <h1 
              className="text-[#F0EDE6] leading-[0.95] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(56px, 10vw, 110px)' }}
            >
              HDB <span className="text-[#C9A84C]">ROOF & CEILING</span> <br />
              LEAK REPAIR
            </h1>
            <p className="text-[18px] text-[#8A8F9E] leading-[1.7] max-w-[600px] mb-12">
              The leading choice for HDB residents across Singapore. We resolve top-floor roofing issues and inter-floor ceiling leaks with minimal disruption and certified waterproofing standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/6590545431" 
                className="bg-[#25D366] text-white px-10 py-5 text-[14px] font-bold tracking-[2px] uppercase hover:bg-white hover:text-[#0D0F12] transition-all text-center no-underline flex items-center justify-center gap-2"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                Get HDB Assessment
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPREHENSIVE HDB CONTENT */}
      <section className="py-20 px-6 md:px-[60px] bg-[#141820]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 
              className="text-[#F0EDE6] leading-none mb-10"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}
            >
              Expert Fixes for <br />
              <span className="text-[#C9A84C]">HDB Ceiling Leaks</span>
            </h2>
            <div className="pr-4 space-y-6 text-[#8A8F9E] text-[16px] leading-relaxed">
              <p>
                Dealing with an HDB roof leak or ceiling leakage requires a specific understanding of HDB's building regulations and slab structures. At Asia Tech Roofing, we provide <strong>HDB-approved waterproofing solutions</strong> that are fast, effective, and clean.
              </p>
              <h3 className="text-[#F0EDE6] text-[22px] font-bold mt-8" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>Our HDB Leak Repair Process:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Thermal Imaging Diagnosis:</strong> We locate the water source behind the concrete slab without destructive testing.</li>
                <li><strong>PU Injection Grouting:</strong> We address the leak from the underside of the slab, sealing cracks deep within the concrete.</li>
                <li><strong>Town Council Liaison:</strong> We provide technical reports if the leak is caused by external roofing components managed by the Town Council.</li>
              </ol>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="bg-[#1C2130] p-12 border border-[rgba(201,168,76,0.1)]">
               <h4 className="text-[#C9A84C] text-[11px] tracking-[4px] uppercase mb-6 font-bold">Client Benefits</h4>
               <ul className="space-y-6 list-none p-0">
                 {[
                   { t: "No-Hacking Required", d: "Save thousands by avoiding tile replacement in your toilet or kitchen." },
                   { t: "24-Hour Emergency Response", d: "Our teams are available for urgent repairs across all HDB estates." },
                   { t: "100% Certified Workmanship", d: "We use only industrial-grade, PUB-compliant waterproofing chemicals." }
                 ].map((item, i) => (
                   <li key={i}>
                     <div className="text-[#F0EDE6] font-bold mb-1">{item.t}</div>
                     <div className="text-[#8A8F9E] text-[13px]">{item.d}</div>
                   </li>
                 ))}
               </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner 
        label="HDB Approved"
        title={<>FIX YOUR <span className="text-[#C9A84C]">HDB LEAK</span> <br />TODAY</>}
        description="Don't wait for the Town Council or neighbors. Get a private assessment and professional fix from Singapore's top HDB roofing specialists."
      />
      <Footer />
    </>
  );
}

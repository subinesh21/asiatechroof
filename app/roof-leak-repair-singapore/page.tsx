import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roof Leak Repair Singapore | Emergency 24hr Fix Since 2004',
  description: 'Urgent roof leak repair in Singapore. We stop ceiling drips, fix broken tiles, and seal metal roof cracks instantly. No-hacking methods. Free moisture inspection. Call +65 9054 5431.',
  alternates: { canonical: '/roof-leak-repair-singapore' },
  openGraph: {
    title: 'Emergency Roof Leak Repair | Singapore Specialist',
    description: 'Stop your roof leak today. 24-hour response team for HDB and landed homes across Singapore.',
    url: '/roof-leak-repair-singapore',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is my roof leaking only during heavy rain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Singapore's heavy rain creates 'ponding' and high-pressure water flow that finds tiny cracks in sealant or flashing that might not leak during light drizzles. These require professional pressure sealing."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you fix a roof leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For emergencies, Asia Tech Roofing offers same-day attendance to provide a temporary seal. Permanent repairs are usually completed within 24 to 48 hours for standard residential leaks."
      }
    }
  ]
};

export default function RoofLeakRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-[180px] pb-[100px] px-6 md:px-[60px] bg-[#0D0F12] overflow-hidden">
        <div className="absolute inset-0 z-0 text-center">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80"
            alt="Emergency Roof Leak Repair Singapore"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto text-center">
          <Reveal>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-6 block">24/7 Emergency Service</span>
            <h1 
              className="text-[#F0EDE6] leading-[0.95] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(56px, 10vw, 110px)' }}
            >
              FAST <span className="text-[#C9A84C]">ROOF LEAK</span> <br />
              REPAIR SINGAPORE
            </h1>
            <p className="text-[18px] text-[#8A8F9E] leading-[1.7] max-w-[700px] mx-auto mb-12">
              Water leaking into your living room? Ceiling paint peeling? Don't wait for structural damage. Call Singapore's most responsive leak repair specialists now for an instant fix.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="tel:+6590545431" 
                className="bg-[#C9A84C] text-[#0D0F12] px-10 py-5 text-[14px] font-bold tracking-[2px] uppercase hover:bg-white transition-all text-center no-underline"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                Call: +65 9054 5431
              </a>
              <a 
                href="https://wa.me/6590545431" 
                className="bg-[#25D366] text-white px-10 py-5 text-[14px] font-bold tracking-[2px] uppercase hover:bg-white hover:text-[#0D0F12] transition-all text-center no-underline flex items-center justify-center gap-2"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                WhatsApp Emergency
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PAIN POINT CENTERED CONTENT */}
      <section className="py-20 px-6 md:px-[60px] bg-[#141820]">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Ceiling Water Stains", d: "Yellowish brown patches on your ceiling are the first sign of an ongoing leak. We stop the source before your ceiling collapses." },
              { t: "Rusted Metal Roof", d: "Pinholes in metal roofing can let in massive amounts of water. We provide specialized patching and anti-corrosion coating." },
              { t: "Failed Joint Sealants", d: "Old silicon and joint fillers dry out in Singapore's heat. We re-seal all vulnerable joints with commercial-grade polymer." }
            ].map((card, i) => (
              <Reveal key={i} delay={i as 0 | 1 | 2}>
                 <div className="bg-[#1C2130] p-10 h-full border-b-2 border-[#C9A84C]">
                   <h3 className="text-[#F0EDE6] text-[24px] mb-4" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{card.t}</h3>
                   <p className="text-[#8A8F9E] text-[14px] leading-relaxed">{card.d}</p>
                 </div>
              </Reveal>
            ))}
         </div>
      </section>

      <section className="py-20 px-6 md:px-[60px] bg-[#0D0F12]">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
               <h2 className="text-[#F0EDE6] leading-tight mb-8" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}>
                 Stop the Drip, <br /><span className="text-[#C9A84C]">Protect Your Value</span>
               </h2>
               <div className="prose prose-invert text-[#8A8F9E] text-[16px] leading-[1.8]">
                 <p className="mb-6">
                   Every hour a leak is ignored, the humidity inside your concrete slabs and roof tiles increases. This leads to <strong>concrete spalling</strong>, <strong>mold growth</strong>, and <strong>electrical hazards</strong>.
                 </p>
                 <p>
                   As a specialist in <strong>roof leak repair Singapore</strong>, we don't just "apply glue." We provide a comprehensive service:
                 </p>
                 <ul className="list-disc pl-6 space-y-2 mt-4">
                   <li>Moisture content analysis of affected areas</li>
                   <li>Clearing of debris and water-trapping blockages</li>
                   <li>High-grade PU injection for slab leaks</li>
                   <li>Replacement of cracked tiles or loose flashing</li>
                   <li>Warranty-backed waterproofing overlays</li>
                 </ul>
               </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="relative aspect-video shadow-2xl">
                 <Image 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" 
                  alt="Professional Leak Fix Singapore" 
                  fill 
                  className="object-cover border border-[rgba(201,168,76,0.2)]"
                 />
              </div>
            </Reveal>
         </div>
      </section>

      <CTABanner 
        label="24hr Response"
        title={<>GET A <span className="text-[#C9A84C]">SAME-DAY</span> <br />LEAK INSPECTION</>}
        description="Our emergency teams are active across Singapore right now. Secure your property before the next storm hits."
      />
      <Footer />
    </>
  );
}

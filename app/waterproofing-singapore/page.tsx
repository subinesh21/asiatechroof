import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Waterproofing Singapore | #1 Specialist for Roofs & Concrete Slabs',
  description: 'Top-rated waterproofing contractor in Singapore. Expert solutions for RC flat roofs, balconies, toilets, and industrial floors. Torch-on membrane & PU injection. 10-year warranty available.',
  alternates: { canonical: '/waterproofing-singapore' },
  openGraph: {
    title: 'Waterproofing Specialist Singapore | Asia Tech Roofing',
    description: 'Stop leaks forever with our advanced waterproofing systems. Torch-on, PU, and liquid membrane specialists.',
    url: '/waterproofing-singapore',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best waterproofing method for flat roofs in Singapore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For flat RC roofs in Singapore, Torch-on Membrane and PU (Polyurethane) Coating are the most durable methods due to their ability to withstand ponding water and high UV exposure."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a waterproofing warranty last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At Asia Tech Roofing, we provide warranties ranging from 3 to 10 years depending on the system and material used. We stand by our craftsmanship."
      }
    }
  ]
};

export default function WaterproofingSingaporePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-[180px] pb-[100px] px-6 md:px-[60px] bg-[#FFFFFF] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80"
            alt="Waterproofing Singapore"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1000px]">
          <Reveal>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-6 block">Premium Leak Protection</span>
            <h1 
              className="text-[#111827] leading-[0.95] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(56px, 10vw, 110px)' }}
            >
              ADVANCED <br />
              <span className="text-[#C9A84C]">WATERPROOFING</span> <br />
              SINGAPORE
            </h1>
            <p className="text-[18px] text-[#111827] leading-[1.7] max-w-[600px] mb-12">
              Advanced membrane technology and professional PU injection for permanent leak protection. Singapore's climate requires waterproofing built to withstand extreme heat and tropical rain.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/6590545431" 
                className="bg-[#25D366] text-[#111827] px-10 py-5 text-[14px] font-bold tracking-[2px] uppercase hover:bg-white hover:text-[#111827] transition-all text-center no-underline flex items-center justify-center gap-2"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                WhatsApp Quote
              </a>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-[rgba(201,168,76,0.3)] text-[#111827] px-10 py-5 text-[14px] font-bold tracking-[2px] uppercase hover:border-[#C9A84C] transition-all text-center no-underline inline-block"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                View Case Studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DETAILED WATERPROOFING CONTENT */}
      <section className="py-20 px-6 md:px-[60px] bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 
              className="text-[#111827] leading-none mb-10 text-center"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '64px' }}
            >
              The Science of <span className="text-[#C9A84C]">Dry Buildings</span>
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Reveal delay={1}>
              <div className="bg-[#F3F4F6] p-10 h-full border-t-2 border-[#C9A84C]">
                <h3 className="text-[#111827] text-[24px] mb-6" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>Torch-On Membranes</h3>
                <p className="text-[#111827] text-[15px] leading-relaxed">
                  Ideal for flat RC roofs and industrial slabs. We use high-quality APP or SBS modified bitumen membranes heat-welded for a 100% seamless watertight seal. This is the industry gold standard for long-term protection.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="bg-[#F3F4F6] p-10 h-full border-t-2 border-[#C9A84C]">
                <h3 className="text-[#111827] text-[24px] mb-6" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>Liquid PU Coatings</h3>
                <p className="text-[#111827] text-[15px] leading-relaxed">
                  A multi-layered liquid waterproofing system that cures into a flexible, rubber-like skin. Perfect for balconies, terraces, and roofing with complex geometries where membranes might fail.
                </p>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="bg-[#F3F4F6] p-10 h-full border-t-2 border-[#C9A84C]">
                <h3 className="text-[#111827] text-[24px] mb-6" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>PU Injection Grouting</h3>
                <p className="text-[#111827] text-[15px] leading-relaxed">
                  An advanced "no hacking" solution for concrete cracks. We inject high-pressure Polyurethane grout that expands upon contact with moisture to seal leaks from the inside out instantly.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AREA TARGETING */}
      <section className="py-20 px-6 md:px-[60px] bg-[#FFFFFF]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 
              className="text-[#111827] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '48px' }}
            >
              Waterproofing <br />
              <span className="text-[#C9A84C]">Anywhere in Singapore</span>
            </h2>
            <div className="space-y-6 text-[#111827] text-[16px] leading-relaxed">
              <p>
                From <strong>West Coast Jurong</strong> to <strong>East Coast Pasir Ris</strong>, we serve residential, commercial, and industrial clients island-wide.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-none p-0">
                <li className="flex items-center gap-2"><span className="text-[#C9A84C]">✓</span> Tampines</li>
                <li className="flex items-center gap-2"><span className="text-[#C9A84C]">✓</span> Woodlands</li>
                <li className="flex items-center gap-2"><span className="text-[#C9A84C]">✓</span> Bedok</li>
                <li className="flex items-center gap-2"><span className="text-[#C9A84C]">✓</span> Bukit Timah</li>
                <li className="flex items-center gap-2"><span className="text-[#C9A84C]">✓</span> Serangoon</li>
                <li className="flex items-center gap-2"><span className="text-[#C9A84C]">✓</span> Orchard</li>
              </ul>
              <p className="mt-8">
                Searching for <strong>"waterproofing near me"</strong>? Our teams are stationed in multiple zones to ensure we can reach your property within hours for a free site inspection.
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
             <div className="relative aspect-square">
               <Image 
                src="https://images.unsplash.com/photo-1541888941295-1e3ff2ca51cb?w=800&q=80" 
                alt="Singapore Waterproofing Specialist"
                fill
                className="object-cover"
               />
             </div>
          </Reveal>
        </div>
      </section>

      <CTABanner 
        label="10-Year Warranty"
        title={<>STOP THE LEAK <br />FOR <span className="text-[#C9A84C]">GOOD</span></>}
        description="Don't settle for temporary patches. Get a permanent waterproofing solution with Asia Tech Roofing's certified systems."
      />
      <Footer />
    </>
  );
}

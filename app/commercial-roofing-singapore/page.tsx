import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial & Industrial Roofing Singapore | Asia Tech Roofing',
  description: 'Singapore\'s leading commercial roofing contractor. Expert metal roof repair, warehouse waterproofing, and factory roofing maintenance. Certified to work on high-rise and large-scale industrial sites.',
  alternates: { canonical: '/commercial-roofing-singapore' },
  openGraph: {
    title: 'Industrial & Commercial Roofing Specialist | Singapore',
    description: 'Expert roofing solutions for businesses. We specialize in metal roofs, industrial waterproofing, and structural repairs for factories and warehouses.',
    url: '/commercial-roofing-singapore',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you provide roofing maintenance contracts for factories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer annual and bi-annual maintenance contracts for industrial facilities, including gutter cleaning, rust treatment, and proactive leak detection to ensure business continuity."
      }
    },
    {
      "@type": "Question",
      "name": "Are your workers certified for high-altitude roofing work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All Asia Tech Roofing technicians are Work-at-Height (WAH) certified and strictly follow MOM safety regulations for high-rise and complex industrial projects."
      }
    }
  ]
};

export default function CommercialRoofingPage() {
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
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="Commercial Roofing Singapore"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1000px]">
          <Reveal>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-6 block">Industrial Heavyweight</span>
            <h1 
              className="text-[#111827] leading-[0.95] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(56px, 10vw, 110px)' }}
            >
              COMMERCIAL & <br />
              <span className="text-[#C9A84C]">INDUSTRIAL</span> <br />
              ROOFING
            </h1>
            <p className="text-[18px] text-[#111827] leading-[1.7] max-w-[600px] mb-12">
              Powering Singapore's industry. We provide specialized roofing and waterproofing for warehouses, factories, office buildings, and shopping malls with zero disruption to your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                href="/contact" 
                className="bg-[#C9A84C] text-[#111827] px-10 py-5 text-[14px] font-bold tracking-[2px] uppercase hover:bg-white transition-all text-center no-underline inline-block"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                Request Corporate Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMMERCIAL CONTENT */}
      <section className="py-20 px-6 md:px-[60px] bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
           <Reveal>
            <h2 className="text-[#111827] leading-tight mb-8" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}>
              Built for <br /><span className="text-[#C9A84C]">Singapore's Industry</span>
            </h2>
            <div className="prose prose-invert text-[#111827] text-[16px] leading-[1.8]">
               <p className="mb-6">
                 Commercial roofing requires a level of scale and precision that standard residential roofing cannot provide. At Asia Tech, we specialize in the unique challenges of <strong>industrial metal roofing</strong> and <strong>large-scale waterproofing</strong> for the Singapore business landscape.
               </p>
               <p className="mb-6">
                 We understand that a roof leak in a warehouse can result in millions of dollars in stock damage or equipment failure. That's why our industrial team utilizes the latest in infrared technology to preemptively find weak spots before they become catastrophic failures.
               </p>
               <h3 className="text-[#111827] text-[24px] mb-4 mt-8" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>Our Corporate Services include:</h3>
               <ul className="list-disc pl-6 space-y-2 mb-10">
                 <li>Metal Roof Sheet Replacement & Overlays</li>
                 <li>Industrial-Grade Torch-On Membrane Systems</li>
                 <li>Corrosion Treatment & Protective Coatings</li>
                 <li>Box Gutter Restoration and Cleaning</li>
                 <li>Roof Ventilation & Exhaust Installation</li>
                 <li>Factory Skylight Repair & Replacement</li>
               </ul>
            </div>
           </Reveal>
           <Reveal delay={2}>
              <div className="space-y-4">
                 <div className="relative h-[300px]">
                   <Image 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" 
                    alt="Factory Roofing Singapore" 
                    fill 
                    className="object-cover rounded-sm"
                   />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F3F4F6] p-6 text-center border-t-2 border-[#C9A84C]">
                       <div className="text-[36px] text-[#111827]" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>500+</div>
                       <div className="text-[10px] text-[#111827] uppercase tracking-[1px]">Industrial Projects</div>
                    </div>
                    <div className="bg-[#F3F4F6] p-6 text-center border-t-2 border-[#C9A84C]">
                       <div className="text-[36px] text-[#111827]" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>20+</div>
                       <div className="text-[10px] text-[#111827] uppercase tracking-[1px]">Years Expertise</div>
                    </div>
                 </div>
              </div>
           </Reveal>
        </div>
      </section>

      {/* AREA FOCUS (TRUST SIGNALS) */}
      <section className="py-20 px-6 md:px-[60px] bg-[#FFFFFF]">
         <div className="max-w-[1000px] mx-auto text-center">
            <Reveal>
               <h2 className="text-[#111827] mb-8" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}>
                 Supporting Business Clusters <br /><span className="text-[#C9A84C]">Across Singapore</span>
               </h2>
               <p className="text-[#111827] leading-[1.8] mb-12">
                 We are the preferred roofing contractor for factories in <strong>Tuas Industrial Estate</strong>, <strong>Jurong Port</strong>, <strong>Sungei Kadut</strong>, and <strong>Tampines LogisPark</strong>. Our crews are fully equipped with the necessary equipment and safety certifications to work on large industrial complexes island-wide.
               </p>
            </Reveal>
         </div>
      </section>

      <CTABanner 
        label="Corporate Clients"
        title={<>GET AN <span className="text-[#C9A84C]">INDUSTRIAL-GRADE</span> <br />ROOF INSPECTION</>}
        description="Schedule a comprehensive roof audit for your factory or commercial building today. Free site survey with technical reporting."
      />
      <Footer />
    </>
  );
}

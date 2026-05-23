import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import RelatedLinks from '@/components/RelatedLinks';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Roof Repair Singapore | #1 Specialist Since 2004',
  description: 'Expert roof repair services in Singapore. We fix leaking roofs, metal roofing, concrete tiles, and industrial roofs. 100% certified workers. Get a free quote today!',
  alternates: { canonical: '/roof-repair-singapore' },
  openGraph: {
    title: 'Professional Roof Repair Singapore | Asia Tech Roofing',
    description: 'Singapore\'s trusted roof repair specialists. Fast response, certified technicians, and long-lasting repairs.',
    url: '/roof-repair-singapore',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does roof repair cost in Singapore in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Roof repair costs in Singapore vary depending on material type, accessibility, and the extent of the damage. Asia Tech Roofing offers free on-site inspections for accurate quoting without hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fix a roof leak during heavy rain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While permanent repairs are best done in dry conditions, Asia Tech provides emergency temporary sealing during storms to prevent further water damage to your property interior."
      }
    },
    {
      "@type": "Question",
      "name": "How long do roof repairs last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When properly executed with high-grade materials like we use at Asia Tech, professional roof repairs can last 5 to 15 years or more, depending on the roofing material and maintenance schedule."
      }
    }
  ]
};

export default function RoofRepairSingaporePage() {
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
            src="https://images.unsplash.com/photo-1632759162403-0558a41366f6?w=1600&q=80"
            alt="Roof Repair Singapore"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1000px]">
          <Reveal>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-6 block">Singapore's Trusted Specialists</span>
            <h1 
              className="text-[#111827] leading-[0.95] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(56px, 10vw, 110px)' }}
            >
              PROFESSIONAL <br />
              <span className="text-[#C9A84C]">ROOF REPAIR</span> <br />
              SINGAPORE
            </h1>
            <p className="text-[18px] text-[#111827] leading-[1.7] max-w-[600px] mb-12">
              Don't let a minor leak become a major structural disaster. Asia Tech Roofing provides rapid, certified, and long-lasting roof repair solutions for HDB, landed, and industrial properties across Singapore.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="tel:+6590545431" 
                className="bg-[#C9A84C] text-[#111827] px-10 py-5 text-[14px] font-bold tracking-[2px] uppercase hover:bg-[#111827] transition-all text-center no-underline"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                Call Today: +65 9054 5431
              </a>
              <a 
                href="#enquire" 
                className="bg-transparent border-2 border-[rgba(201,168,76,0.3)] text-[#111827] px-10 py-5 text-[14px] font-bold tracking-[2px] uppercase hover:border-[#C9A84C] transition-all text-center no-underline"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                Get a Free Quote
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPREHENSIVE CONTENT SECTION 1 */}
      <section className="py-20 px-6 md:px-[60px] bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Reveal>
            <h2 
              className="text-[#111827] leading-none mb-10"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}
            >
              Why Your Singapore Property <br />
              <span className="text-[#C9A84C]">Needs Professional Care</span>
            </h2>
            <div className="prose prose-invert max-w-none text-[#111827] leading-[1.8] text-[16px]">
              <p className="mb-6">
                Singapore's tropical climate is notoriously harsh on roofing systems. With intense UV radiation during the day and sudden, heavy torrential rainstorms in the afternoon, roof materials undergo constant thermal expansion and contraction. Over time, this results in cracks, sealant failure, and eventual water ingress.
              </p>
              <p className="mb-6">
                At Asia Tech Roofing, we understand that "roof repair Singapore" isn't just about patching a hole—it's about structural integrity. Whether you are dealing with a <strong>leaking concrete roof</strong>, <strong>rusted metal sheets</strong>, or <strong>failed waterproofing membranes</strong>, our team utilizes forensic thermal imaging and moisture meters to find the root cause, not just the symptom.
              </p>
              <h3 className="text-[#111827] text-[24px] font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>Common Issues We Fix:</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Loose or damaged roof tiles (Concrete & Clay)</li>
                <li>Corroded metal roof sheets and flashing</li>
                <li>Cracked RC slabs and flat roof surfaces</li>
                <li>Blockages and leaks in gutter systems</li>
                <li>Deteriorated roof ridge capping and pointing</li>
                <li>Skylight seal failures and frame leaks</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="relative h-full min-h-[400px]">
              <Image 
                src="https://images.unsplash.com/photo-1541888941295-1e3ff2ca51cb?w=800&q=80" 
                alt="Expert Roof Inspection Singapore"
                fill
                className="object-cover border-l-4 border-[#C9A84C]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE PILLARS (Internal Linking / Content) */}
      <section className="py-20 px-6 md:px-[60px] bg-[#FFFFFF]">
        <Reveal>
          <div className="text-center mb-16">
            <h2 
              className="text-[#111827] leading-none mb-6"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '64px' }}
            >
              Specialized <span className="text-[#C9A84C]">Roofing Services</span>
            </h2>
            <p className="text-[#111827] max-w-[700px] mx-auto">
              We cover every residential, commercial, and industrial roofing need across the island.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              title: "Landed Property", 
              desc: "Specialized care for bungalows, semi-d, and terrace houses. We handle complex tile and pitched roof systems.",
              link: "/roof-repair-singapore" 
            },
            { 
              title: "Industrial & Warehouse", 
              desc: "Heavy-duty metal roof repairs, structural reinforcement, and large-scale secondary roofing solutions.",
              link: "/commercial-roofing-singapore" 
            },
            { 
              title: "HDB Ceiling Leaks", 
              desc: "Fast diagnosis and upper-floor waterproofing fixes for HDB residential units across Singapore.",
              link: "/hdb-roof-repair" 
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2}>
              <div className="bg-[#F3F4F6] p-10 border-b-2 border-transparent hover:border-[#C9A84C] transition-all">
                <h3 className="text-[#111827] text-[28px] mb-4" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{item.title}</h3>
                <p className="text-[#111827] text-[14px] leading-relaxed mb-8">{item.desc}</p>
                <Link href={item.link} className="text-[#C9A84C] uppercase text-[12px] tracking-[2px] font-bold no-underline">
                  Learn More →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DEEP SEO CONTENT SECTION 2 (Keyword Density / Area Coverage) */}
      <section className="py-20 px-6 md:px-[60px] bg-[#F9FAFB]">
        <div className="max-w-[1000px] mx-auto text-center">
          <Reveal>
            <h2 
              className="text-[#111827] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}
            >
              Serving Every District in <span className="text-[#C9A84C]">Singapore</span>
            </h2>
            <p className="text-[#111827] leading-[1.8] mb-12">
              Our rapid-response teams are strategically positioned across the island. Whether you need a <strong>roof repair in Jurong</strong>, <strong>waterproofing in Tampines</strong>, or <strong>leak detection in Woodlands</strong>, Asia Tech Roofing is never more than 30 minutes away. We serve major hubs including Ang Mo Kio, Bedok, Bukit Timah, Clementi, Hougang, Punggol, Sengkang, Tow Payoh, and Yishun.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Fast Response', 'Certified Workers', 'Quality Materials', '20+ Yrs Experience'].map((feat, i) => (
                <div key={i} className="bg-[#F3F4F6] py-6 rounded border border-[rgba(201,168,76,0.1)]">
                  <div className="text-[#C9A84C] text-[11px] tracking-[2px] uppercase font-bold">{feat}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 md:px-[60px] bg-[#FFFFFF]">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <h2 
              className="text-[#111827] text-center mb-16"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}
            >
              Frequently Asked <span className="text-[#C9A84C]">Questions</span>
            </h2>
            <div className="space-y-8">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="border-b border-[rgba(201,168,76,0.2)] pb-8">
                  <h4 className="text-[#111827] text-[18px] font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>{faq.name}</h4>
                  <p className="text-[#111827] leading-relaxed text-[15px]">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner 
        label="Emergency Response"
        title={<>URGENT <span className="text-[#C9A84C]">ROOF LEAK?</span></>}
        description="Our technicians are available for emergency inspections across Singapore. Stop the water before it stops your business."
      />
      <RelatedLinks />
      <Footer />
    </>
  );
}

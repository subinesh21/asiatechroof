import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';
import Hero from '@/components/Hero';
import HomeProjects from '@/components/HomeProjects';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Repair & Waterproofing Singapore | Asia Tech Roofing',
  description:
    'Expert roofing, waterproofing & leak repair for residential, commercial, and industrial properties across Singapore. 20+ years of experience.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Roof Repair & Waterproofing Singapore | Asia Tech Roofing',
    description: 'Expert roofing, waterproofing & leak repair for residential, commercial, and industrial properties.',
    url: '/',
  },
};

const tickerItems = [
  'Roof Repair', 'Leak Repair', 'Waterproofing', 'Structural Works',
  'Free Site Inspection', '20+ Years Experience', '500+ Projects Completed', 'Certified Workers',
  'Roof Repair', 'Leak Repair', 'Waterproofing', 'Structural Works',
  'Free Site Inspection', '20+ Years Experience', '500+ Projects Completed', 'Certified Workers',
];

const services = [
  {
    num: '01',
    name: 'Roof Repair',
    desc: 'From minor patch repairs to complete roof replacements, our certified team handles all roof types with precision and care. We assess every job thoroughly before recommending the most cost-effective, long-lasting solution.',
    bullets: [
      'Metal roof panel replacement & re-roofing',
      'Concrete & tile roof repair and re-bedding',
      'Ridge capping and flashing works',
      'Skylight repair and replacement',
      'Emergency storm damage repairs',
    ],
    img: '/service/roof-service.webp',
    href: '/services/roof-repair',
  },
  {
    num: '02',
    name: 'Leak Repair',
    desc: 'Water leaks can escalate quickly if left unaddressed. Our team provides rapid response, accurate diagnosis using moisture detection tools, and durable repairs that stop leaks from returning.',
    bullets: [
      'Moisture detection & leak tracing',
      'Roof joint and seam sealing',
      'Parapet wall & gutter leak repair',
      'Expansion joint waterproofing',
      '24-hour emergency response available',
    ],
    img: '/service/leak-service.webp',
    href: '/services/leak-repair',
  },
  {
    num: '03',
    name: 'Waterproofing',
    desc: "Singapore's tropical rainfall demands robust waterproofing. We apply proven membrane systems and liquid coatings that create an impenetrable barrier against moisture ingress — for flat roofs, terraces, RC slabs, and more.",
    bullets: [
      'Torch-on bituminous membrane application',
      'Liquid polyurethane & acrylic coatings',
      'Crystalline waterproofing for RC slabs',
      'Terrace and balcony waterproofing',
      'Basement & wet area protection',
    ],
    img: '/service/waterproof-service.webp',
    href: '/services/waterproofing',
  },
  {
    num: '04',
    name: 'Structural Works',
    desc: "Beyond surface repairs, we address the structural integrity of your roof framework. Our team carries out reinforcement and restoration work that extends the lifespan of your building's roofing system.",
    bullets: [
      'RC beam and slab repair & strengthening',
      'Brick and masonry repointing',
      'Roof truss inspection and repair',
      'Expansion joint installation',
      'Anti-carbonation coating for concrete',
    ],
    img: '/service/structural-service.webp',
    href: '/services/structural-works',
  },
];

const servePanels = [
  {
    tag: '01 · Industrial',
    title: 'FACTORY &\nWAREHOUSES',
    desc: 'Large-span industrial roofing solutions for factories, warehouses, and manufacturing facilities.',
    bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    tag: '02 · Commercial',
    title: 'OFFICES &\nRETAIL',
    desc: 'Minimal-disruption roofing services for commercial properties keeping business continuity in mind.',
    bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    tag: '03 · Residential',
    title: 'PRIVATE\nHOMES',
    desc: 'Precision roofing care for landed homes, bungalows, and condominiums across Singapore.',
    bg: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
  },
];

const features = [
  {
    title: 'Free Site Inspection & Consultation',
    desc: "We assess your roof on-site at no cost — giving you an honest evaluation and clear quote before any work begins.",
  },
  {
    title: 'Certified & Experienced Workers',
    desc: 'Every technician is fully trained, certified, and backed by 20+ years of combined field experience.',
  },
  {
    title: 'Fast Emergency Response',
    desc: "Roof emergencies can't wait. Our team responds within 24 hours to minimise damage and downtime.",
  },
  {
    title: 'Proven Materials & Methods',
    desc: "We use only industry-grade materials with proven performance in Singapore's tropical climate.",
  },
];



export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does roof repair cost in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roof repair costs in Singapore vary depending on the size and type of damage. Asia Tech Roofing offers free on-site inspections to provide an accurate quote with no obligation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a roof waterproofing job take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most waterproofing jobs take 1–3 days depending on the area size. Our certified team works efficiently to minimize disruption to your property."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve all areas in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Asia Tech Roofing serves all areas across Singapore including HDB estates, landed properties, commercial buildings, and industrial facilities."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to an emergency roof leak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 24-hour emergency response for roof leaks across Singapore to minimize water damage to your property."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <Hero />

      {/* TICKER */}
      <div className="bg-[#C9A84C] overflow-hidden py-3.5 whitespace-nowrap">
        <div className="inline-flex gap-[60px] ticker-animate">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 font-bold text-[11px] tracking-[3px] uppercase text-[#FFFFFF] after:content-['✦'] after:opacity-50"
              style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="bg-[#F9FAFB] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-12 lg:gap-16">
          
          {/* TEXT COLUMN */}
          <div className="xl:w-[400px] 2xl:w-[480px] shrink-0 xl:pt-16">
            <div className="sticky top-32 xl:top-48">
              <Reveal><span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Our Expertise</span></Reveal>
              <Reveal delay={1}>
                <h2
                  className="leading-none text-[#111827] mb-6"
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}
                >
                  Complete Roofing<br />Solutions
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-[16px] text-[#6B7280] leading-[1.7] mb-10 max-w-[520px]">
                  Comprehensive protection for every structure — delivered with precision, quality materials, and decades of proven expertise.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <Link
                  href="/services"
                  className="bg-transparent text-[#111827] border-2 border-[#E5E7EB] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] no-underline inline-block"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  View All Services
                </Link>
              </Reveal>
            </div>
          </div>

          {/* CARDS COLUMN */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
              {services.map((svc, i) => (
                <Reveal key={i} delay={i as 0 | 1 | 2 | 3} className="h-full w-full">
              <div className="relative w-full h-[420px] bg-white rounded-xl flex items-center justify-center overflow-hidden [perspective:1000px] shadow-sm transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.05] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] group cursor-pointer border border-[#F3F4F6]">
                
                {/* FRONT */}
                <div className="absolute inset-0 flex flex-col transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-0 group-hover:opacity-0 origin-center">
                  <div className="relative h-[220px] w-full shrink-0">
                    <Image
                      src={svc.img}
                      alt={svc.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div
                      className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 font-bold text-xs uppercase text-[#C9A84C] tracking-[2px] rounded"
                      style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                    >
                      {svc.num}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center p-6 text-center bg-white">
                    <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-2 font-semibold">
                      0{svc.num} · Service
                    </span>
                    <div
                      className="font-bold text-[22px] text-[#111827]"
                      style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                    >
                      {svc.name}
                    </div>
                  </div>
                </div>

                {/* BACK (Content) */}
                <div className="absolute top-0 left-0 w-full h-full p-6 md:p-8 box-border bg-[#F9FAFB] origin-bottom [transform:rotateX(-90deg)] transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[transform:rotateX(0deg)] flex flex-col z-10">
                  <div
                    className="font-bold text-[20px] text-[#111827] mb-2"
                    style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                  >
                    {svc.name}
                  </div>
                  <p className="text-[14px] text-[#6B7280] leading-[1.6] mb-3 flex-grow-0">
                    {svc.desc}
                  </p>
                  <div className="border-t border-[rgba(201,168,76,0.15)] pt-3 space-y-2 mb-4 flex-grow">
                    {svc.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#374151] leading-tight">
                        <span className="text-[#C9A84C] font-bold">→</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 mt-auto text-[12px] tracking-[2px] uppercase text-[#C9A84C] font-bold no-underline hover:text-[#111827] transition-colors"
                  >
                    Full Service Details <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-[#FFFFFF] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="mb-12">
          <Reveal><span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Who We Serve</span></Reveal>
          <Reveal delay={1}>
            <h2
              className="leading-none text-[#111827]"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}
            >
              Every Structure,<br />Every Scale
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
          {servePanels.map((panel, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2} direction="from-right">
              <div className="relative h-[480px] overflow-hidden cursor-pointer group">
                <Image
                  src={panel.bg}
                  alt={panel.title.replace('\n', ' ')}
                  width={800}
                  height={480}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-9 pt-0">
                  <span className="text-[9px] tracking-[3px] uppercase text-[#C9A84C] mb-2.5 block">{panel.tag}</span>
                  <div
                    className="text-[36px] text-white mb-3 whitespace-pre-line"
                    style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
                  >
                    {panel.title}
                  </div>
                  <p className="text-[13px] text-gray-300 leading-[1.6]">{panel.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-5 text-[11px] tracking-[2px] uppercase text-[#C9A84C] font-semibold no-underline">
                    Explore →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#F9FAFB] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <blockquote
              className="leading-[1.05] text-[#111827] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(48px, 5vw, 68px)' }}
            >
              &quot;Built on <em className="text-[#C9A84C] not-italic">trust.</em><br />Proven by<br /><em className="text-[#C9A84C] not-italic">results.</em>&quot;
            </blockquote>
            <p className="text-[15px] text-[#6B7280] leading-[1.8]">
              For over 20 years, Asia Tech Roofing has delivered quality craftsmanship and lasting protection to hundreds of properties across Singapore. Our certified team brings unparalleled expertise to every project — big or small.
            </p>
          </Reveal>

          <div className="flex flex-col">
            {features.map((feature, i) => (
              <Reveal key={i} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                <div
                  className={`flex items-start gap-5 py-7 border-b border-[rgba(201,168,76,0.2)] ${i === 0 ? 'border-t' : ''}`}
                >
                  <div className="w-7 h-7 min-w-[28px] border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] text-sm mt-0.5">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-[15px] text-[#111827] mb-1">{feature.title}</div>
                    <p className="text-[13px] text-[#6B7280] leading-[1.6]">{feature.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <HomeProjects />

      {/* CTA BANNER */}
      <CTABanner
        label="Get In Touch"
        title={<>READY TO PROTECT<br /><span className="text-[#C9A84C]">YOUR PROPERTY?</span></>}
        description="Get a free on-site inspection from Singapore's most trusted roofing specialists. No obligation, just expert advice."
      />

      {/* SEO CONTENT SECTION */}
      <section className="bg-[#FFFFFF] py-16 px-6 md:px-[60px] border-t border-[rgba(201,168,76,0.1)]">
        <div className="max-w-[1000px] mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-[20px] font-bold text-[#111827] mb-4" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>
              Singapore&apos;s Most Trusted Roofing Contractor Since 2004
            </h2>
            <p className="text-[14px] text-[#6B7280] leading-[1.8]">
              With over 20 years of dedicated service, Asia Tech Roofing has established itself as the leading expert in the industry. Our fully certified team has successfully completed 500+ projects, delivering unparalleled craftsmanship and long-lasting protection for properties of all sizes.
            </p>
          </div>
          <div>
            <h2 className="text-[20px] font-bold text-[#111827] mb-4" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>
              Roofing Services Across All of Singapore
            </h2>
            <p className="text-[14px] text-[#6B7280] leading-[1.8]">
              We proudly offer comprehensive coverage spanning Jurong, Tampines, Bukit Timah, Orchard, Tuas, Woodlands, Sentosa, and the CBD. Whether you reside in an HDB estate, a sprawling landed property, or manage a commercial space, our rapid response team is always nearby.
            </p>
          </div>
          <div>
            <h2 className="text-[20px] font-bold text-[#111827] mb-4" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>
              Why Choose Asia Tech Roofing?
            </h2>
            <p className="text-[14px] text-[#6B7280] leading-[1.8]">
              We provide free, no-obligation on-site inspections combined with a 24-hour emergency response. Through the use of certified workers and proven, high-grade materials, we ensure every repair is durable and meticulously executed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

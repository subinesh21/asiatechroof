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
      <section className="bg-[#F9FAFB] py-12 md:py-[100px] px-4 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-8">
          
          {/* HEADER ROW */}
          <div className="flex flex-row justify-between items-end gap-4 w-full">
            <div>
              <Reveal><span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-2 md:mb-4 block">Our Expertise</span></Reveal>
              <Reveal delay={1}>
                <h2
                  className="leading-none text-[#111827]"
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(26px, 5vw, 64px)' }}
                >
                  Complete Roofing<br />Solutions
                </h2>
              </Reveal>
            </div>
            <Reveal delay={3} className="shrink-0 mb-1 sm:mb-2">
              <Link
                href="/services"
                className="bg-transparent text-[#C9A84C] border-2 border-[#C9A84C] px-3.5 py-2 sm:px-6 sm:py-3.5 md:px-8 md:py-[15px] font-bold text-[9px] sm:text-[11px] md:text-[12px] tracking-[1.5px] sm:tracking-[2px] uppercase transition-all duration-200 hover:bg-[#C9A84C] hover:text-[#FFFFFF] no-underline inline-block"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                View All<span className="inline max-[400px]:hidden"> Services</span>
              </Link>
            </Reveal>
          </div>

          {/* Description */}
          <div className="max-w-[700px] w-full">
            <Reveal delay={2}>
              <p className="text-[13px] md:text-[16px] text-[#6B7280] leading-[1.6] md:leading-[1.7]">
                Comprehensive protection for every structure — delivered with precision, quality materials, and decades of proven expertise.
              </p>
            </Reveal>
          </div>
 
          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8 mt-4">
            {services.map((svc, i) => (
              <Reveal key={i} delay={i as 0 | 1 | 2 | 3} className="h-full w-full">
                {/* MOBILE VIEW CARD (Static) */}
                <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#F3F4F6] h-full group md:hidden">
                  {/* Image Container */}
                  <div className="relative h-[160px] sm:h-[220px] w-full overflow-hidden shrink-0">
                    <Image
                      src={svc.img}
                      alt={svc.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div
                      className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 font-bold text-[10px] sm:text-xs uppercase text-[#C9A84C] tracking-[2px] rounded"
                      style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                    >
                      {svc.num}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[8px] sm:text-[9px] tracking-[3px] uppercase text-[#C9A84C] mb-1.5 block font-semibold">
                        0{svc.num} · Service
                      </span>
                      <h3
                        className="font-bold text-[16px] sm:text-[20px] text-[#111827] mb-2 group-hover:text-[#C9A84C] transition-colors"
                        style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                      >
                        {svc.name}
                      </h3>
                      <p className="text-[11px] sm:text-[13px] text-[#6B7280] leading-[1.6]">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-auto">
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-[2px] uppercase text-[#C9A84C] font-bold no-underline hover:text-[#111827] transition-colors"
                      >
                        Full Service Details <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* DESKTOP VIEW CARD (Uiverse Flip Card) */}
                <div className="relative w-full h-[380px] bg-white rounded-xl flex items-center justify-center overflow-hidden [perspective:1000px] shadow-sm transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.05] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] group cursor-pointer border border-[#F3F4F6] hidden md:flex">
                  {/* FRONT */}
                  <div className="absolute inset-0 flex flex-col transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-0 group-hover:opacity-0 origin-center">
                    <div className="relative h-[240px] w-full shrink-0">
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
                    <div className="flex-1 flex flex-col justify-center items-center p-4 text-center bg-white">
                      <span className="text-[9px] tracking-[3px] uppercase text-[#C9A84C] mb-1 font-semibold">
                        0{svc.num} · Service
                      </span>
                      <div
                        className="font-bold text-[16px] md:text-[18px] text-[#111827] leading-tight"
                        style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                      >
                        {svc.name}
                      </div>
                    </div>
                  </div>

                  {/* BACK (Content) */}
                  <div className="absolute top-0 left-0 w-full h-full p-4 box-border bg-[#F9FAFB] rounded-xl overflow-hidden origin-bottom [transform:rotateX(-90deg)] transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[transform:rotateX(0deg)] flex flex-col z-10 text-left">
                    <div
                      className="font-bold text-[14px] md:text-[16px] text-[#111827] mb-1"
                      style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                    >
                      {svc.name}
                    </div>
                    <p className="text-[11px] md:text-[12px] text-[#6B7280] leading-normal mb-1.5 flex-grow-0">
                      {svc.desc}
                    </p>
                    <div className="border-t border-[rgba(201,168,76,0.15)] pt-1.5 space-y-0.5 mb-1.5 flex-grow">
                      {svc.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[10px] md:text-[11px] text-[#374151] leading-tight">
                          <span className="text-[#C9A84C] font-bold">→</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-2 mt-auto text-[10px] md:text-[11px] tracking-[2px] uppercase text-[#C9A84C] font-bold no-underline hover:text-[#111827] transition-colors"
                    >
                      Full Service Details <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
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
              <div className="relative h-[320px] sm:h-[480px] overflow-hidden cursor-pointer group">
                <Image
                  src={panel.bg}
                  alt={panel.title.replace('\n', ' ')}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9 pt-0">
                  <span className="text-[9px] tracking-[3px] uppercase text-[#C9A84C] mb-2 block">{panel.tag}</span>
                  <div
                    className="text-[26px] sm:text-[36px] text-white mb-2 sm:mb-3 whitespace-pre-line leading-[1.1]"
                    style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
                  >
                    {panel.title}
                  </div>
                  <p className="text-[12px] sm:text-[13px] text-gray-300 leading-[1.6]">{panel.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-4 sm:mt-5 text-[11px] tracking-[2px] uppercase text-[#C9A84C] font-semibold no-underline">
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
              className="leading-[1.05] text-[#111827] mb-6 sm:mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(36px, 5vw, 68px)' }}
            >
              &quot;Built on <em className="text-[#C9A84C] not-italic">trust.</em><br />Proven by<br /><em className="text-[#C9A84C] not-italic">results.</em>&quot;
            </blockquote>
            <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-[1.8]">
              For over 20 years, Asia Tech Roofing has delivered quality craftsmanship and lasting protection to hundreds of properties across Singapore. Our certified team brings unparalleled expertise to every project — big or small.
            </p>
          </Reveal>

          <div className="flex flex-col">
            {features.map((feature, i) => (
              <Reveal key={i} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                <div
                  className={`flex items-start gap-4 sm:gap-5 py-4 sm:py-7 border-b border-[rgba(201,168,76,0.2)] ${i === 0 ? 'border-t' : ''}`}
                >
                  <div className="w-6 h-6 min-w-[24px] border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] text-xs sm:w-7 sm:h-7 sm:min-w-[28px] sm:text-sm mt-0.5">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-[13px] sm:text-[15px] text-[#111827] mb-1">{feature.title}</div>
                    <p className="text-[11px] sm:text-[13px] text-[#6B7280] leading-[1.6]">{feature.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <HomeProjects />

      {/* SEO CONTENT SECTION */}
      <section className="bg-[#FFFFFF] py-10 md:py-20 px-6 md:px-[30px] border-t border-[rgba(201,168,76,0.1)] overflow-hidden">
        <div className="max-w-[1200px] mx-auto space-y-12 md:space-y-24">
          
          {/* SECTION HEADER */}
          <div className="text-center max-w-[800px] mx-auto space-y-3 sm:space-y-4">
            <Reveal>
              <span className="text-[9px] sm:text-[10px] tracking-[4px] uppercase text-[#C9A84C] font-semibold block">
                OUR CREDENTIALS
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 
                className="text-[#111827] leading-[1.1]" 
                style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 6vw, 72px)' }}
              >
                Singapore&apos;s Professional<br />
                <span className="text-[#C9A84C]">Roofing Standard</span>
              </h2>
            </Reveal>
          </div>
          
          {/* ROW 1: Trusted Contractor - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <Reveal>
                <span className="text-[9px] sm:text-[10px] tracking-[4px] uppercase text-[#C9A84C] font-semibold block">
                  01 · ESTABLISHED TRUST
                </span>
              </Reveal>
              <Reveal delay={1}>
                <h2 
                  className="text-[#111827] leading-[1.1] mb-3 sm:mb-4" 
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(28px, 5vw, 56px)' }}
                >
                  Singapore&apos;s Most Trusted<br />
                  <span className="text-[#C9A84C]">Roofing Contractor Since 2004</span>
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-[1.8] max-w-[620px]">
                  With over 20 years of dedicated service, Asia Tech Roofing has established itself as the leading expert in the industry. Our fully certified team has successfully completed 500+ projects, delivering unparalleled craftsmanship and long-lasting protection for properties of all sizes.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 sm:px-5 sm:py-3 rounded-lg flex items-center gap-2.5 sm:gap-3">
                    <span className="text-[16px] sm:text-[20px] font-bold text-[#C9A84C]" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>20+</span>
                    <span className="text-[9px] sm:text-[11px] font-bold text-[#111827] uppercase tracking-[1px]" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>Years Service</span>
                  </div>
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 sm:px-5 sm:py-3 rounded-lg flex items-center gap-2.5 sm:gap-3">
                    <span className="text-[16px] sm:text-[20px] font-bold text-[#C9A84C]" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>500+</span>
                    <span className="text-[9px] sm:text-[11px] font-bold text-[#111827] uppercase tracking-[1px]" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>Projects Done</span>
                  </div>
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 sm:px-5 sm:py-3 rounded-lg flex items-center gap-2.5 sm:gap-3">
                    <span className="text-[16px] sm:text-[20px] font-bold text-[#C9A84C]" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>100%</span>
                    <span className="text-[9px] sm:text-[11px] font-bold text-[#111827] uppercase tracking-[1px]" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>Certified Crew</span>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal direction="from-right">
                <div className="relative h-[220px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg group border border-[#F3F4F6]">
                  <Image
                    src="/service/trusted-contractor.png"
                    alt="Singapore's Most Trusted Roofing Contractor Since 2004"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>
          </div>

          {/* ROW 2: Singapore Coverage - Text Right, Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-7 lg:order-last space-y-4 sm:space-y-6">
              <Reveal>
                <span className="text-[9px] sm:text-[10px] tracking-[4px] uppercase text-[#C9A84C] font-semibold block">
                  02 · ISLANDWIDE SERVICE
                </span>
              </Reveal>
              <Reveal delay={1}>
                <h2 
                  className="text-[#111827] leading-[1.1] mb-3 sm:mb-4" 
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(28px, 5vw, 56px)' }}
                >
                  Roofing Services Across<br />
                  <span className="text-[#C9A84C]">All of Singapore</span>
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-[1.8] max-w-[620px]">
                  We proudly offer comprehensive coverage spanning Jurong, Tampines, Bukit Timah, Orchard, Tuas, Woodlands, Sentosa, and the CBD. Whether you reside in an HDB estate, a sprawling landed property, or manage a commercial space, our rapid response team is always nearby.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div>
                  <span className="text-[9px] sm:text-[10px] tracking-[2px] uppercase text-[#374151] font-bold mb-2.5 block" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>Areas We Serve:</span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Jurong', 'Tampines', 'Bukit Timah', 'Orchard', 'Tuas', 'Woodlands', 'Sentosa', 'CBD'].map((area, idx) => (
                      <span 
                        key={idx} 
                        className="bg-white border border-[#E5E7EB] text-[#374151] text-[10px] sm:text-[12px] px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full font-medium transition-all hover:border-[#C9A84C] hover:text-[#C9A84C]"
                      >
                        📍 {area}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:order-first">
              <Reveal>
                <div className="relative h-[220px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg group border border-[#F3F4F6]">
                  <Image
                    src="/service/singapore-coverage.png"
                    alt="Roofing Services Across All of Singapore"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>
          </div>

          {/* ROW 3: Why Choose Us - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <Reveal>
                <span className="text-[9px] sm:text-[10px] tracking-[4px] uppercase text-[#C9A84C] font-semibold block">
                  03 · QUALITY GUARANTEED
                </span>
              </Reveal>
              <Reveal delay={1}>
                <h2 
                  className="text-[#111827] leading-[1.1] mb-3 sm:mb-4" 
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(28px, 5vw, 56px)' }}
                >
                  Why Choose<br />
                  <span className="text-[#C9A84C]">Asia Tech Roofing?</span>
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-[1.8] max-w-[620px]">
                  We provide free, no-obligation on-site inspections combined with a 24-hour emergency response. Through the use of certified workers and proven, high-grade materials, we ensure every repair is durable and meticulously executed.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 min-w-[20px] rounded-full bg-[rgba(201,168,76,0.1)] text-[#C9A84C] flex items-center justify-center text-[10px] font-bold mt-0.5">✓</div>
                    <div>
                      <h4 className="text-[12px] sm:text-[14px] font-bold text-[#111827]">Free Site Inspection</h4>
                      <p className="text-[11px] sm:text-[12px] text-[#6B7280]">No obligation detailed roof assessment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 min-w-[20px] rounded-full bg-[rgba(201,168,76,0.1)] text-[#C9A84C] flex items-center justify-center text-[10px] font-bold mt-0.5">✓</div>
                    <div>
                      <h4 className="text-[12px] sm:text-[14px] font-bold text-[#111827]">24h Emergency Response</h4>
                      <p className="text-[11px] sm:text-[12px] text-[#6B7280]">Rapid response team nearby for urgent leaks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 min-w-[20px] rounded-full bg-[rgba(201,168,76,0.1)] text-[#C9A84C] flex items-center justify-center text-[10px] font-bold mt-0.5">✓</div>
                    <div>
                      <h4 className="text-[12px] sm:text-[14px] font-bold text-[#111827]">Fully Certified Workers</h4>
                      <p className="text-[11px] sm:text-[12px] text-[#6B7280]">Highly trained technicians and safe practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 min-w-[20px] rounded-full bg-[rgba(201,168,76,0.1)] text-[#C9A84C] flex items-center justify-center text-[10px] font-bold mt-0.5">✓</div>
                    <div>
                      <h4 className="text-[12px] sm:text-[14px] font-bold text-[#111827]">High-Grade Materials</h4>
                      <p className="text-[11px] sm:text-[12px] text-[#6B7280]">Proven materials fit for Singapore&apos;s climate.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal direction="from-right">
                <div className="relative h-[220px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg group border border-[#F3F4F6]">
                  <Image
                    src="/service/why-choose.png"
                    alt="Why Choose Asia Tech Roofing?"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* CTA BANNER - REORDERED */}
      <CTABanner
        label="Get In Touch"
        title={<>READY TO PROTECT<br /><span className="text-[#C9A84C]">YOUR PROPERTY?</span></>}
        description="Get a free on-site inspection from Singapore's most trusted roofing specialists. No obligation, just expert advice."
      />

      <Footer />
    </>
  );
}

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';
import Hero from '@/components/Hero';
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
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-[#C9A84C]" fill="none" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    name: 'Roof Repair',
    desc: 'From minor patch-ups to full roof replacements. We handle metal, concrete, tile, and membrane roofing systems.',
    href: '/services/roof-repair',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-[#C9A84C]" fill="none" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
        <path d="M22 2L12 12" />
      </svg>
    ),
    name: 'Leak Repair',
    desc: 'Fast diagnosis and lasting repair of roof leaks — protecting your property from water damage and structural deterioration.',
    href: '/services/leak-repair',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-[#C9A84C]" fill="none" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    name: 'Waterproofing',
    desc: 'Advanced waterproofing membranes and coatings for flat roofs, terraces, basements, and wet areas.',
    href: '/services/waterproofing',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-[#C9A84C]" fill="none" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    name: 'Structural Works',
    desc: 'Reinforcement, repointing, and structural restoration to extend the lifespan of your building\'s roof framework.',
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

const projects = [
  {
    img: '/Works/Fast and Reliable Roof Leak Repair in Singapore/IMG-20250413-WA0049.webp',
    type: 'Leak Repair',
    name: 'Fast & Reliable Roof Leak Repair',
    spanClasses: 'lg:col-span-2 lg:row-span-2',
  },
  {
    img: '/Works/The Best Roofing Service in Singapore_ Why Choose Asia Tech_/IMG-20221215-WA0047.webp',
    type: 'Roofing Service',
    name: 'Best Roofing Service in Singapore',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
  },
  {
    img: '/Projects/IMG-20250413-WA0006.webp',
    type: 'Roofing Works',
    name: 'Roofing Project 2025',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
  },
  {
    img: '/Projects/IMG-20221215-WA0041.webp',
    type: 'Membrane Repair',
    name: 'Membrane Repair Project',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
  },
  {
    img: '/Projects/IMG-20231115-WA0012.webp',
    type: 'Waterproofing',
    name: 'Waterproofing Works 2023',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
  },
  {
    img: '/Projects/IMG-20250413-WA0016.webp',
    type: 'Structural Works',
    name: 'Structural Roofing Works',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
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
        <div className="flex justify-between items-end mb-[60px] flex-wrap gap-6">
          <div>
            <Reveal><span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Our Expertise</span></Reveal>
            <Reveal delay={1}>
              <h2
                className="leading-none text-[#111827] mb-4"
                style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}
              >
                Complete Roofing<br />Solutions
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-[16px] text-[#6B7280] max-w-[520px] leading-[1.7]">
                Comprehensive protection for every structure — delivered with precision, quality materials, and decades of proven expertise.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <Link
              href="/services"
              className="bg-transparent text-[#111827] border-2 border-[rgba(240,237,230,0.3)] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] no-underline inline-block"
              style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
            >
              View All Services
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {services.map((svc, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2 | 3} className="h-full">
              <div className="h-full bg-[#F3F4F6] p-[44px_32px] border-t-[3px] border-transparent transition-all duration-300 cursor-pointer relative overflow-hidden group hover:border-[#C9A84C] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,168,76,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="absolute top-4 right-6 leading-none text-[#C9A84C]"
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '64px', opacity: 0.08 }}
                >
                  {svc.num}
                </div>
                <div className="w-[52px] h-[52px] mb-7 flex items-center justify-center">
                  {svc.icon}
                </div>
                <div
                  className="font-bold text-[18px] text-[#111827] mb-3"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  {svc.name}
                </div>
                <p className="text-[13px] text-[#6B7280] leading-[1.7]">{svc.desc}</p>
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 mt-6 text-[11px] tracking-[2px] uppercase text-[#C9A84C] font-semibold no-underline"
                >
                  Learn More →
                </Link>
              </div>
            </Reveal>
          ))}
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
            <Reveal key={i} delay={i as 0 | 1 | 2}>
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

          <Reveal delay={2}>
            <div className="flex flex-col">
              {features.map((feature, i) => (
                <div
                  key={i}
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
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-[#FFFFFF] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
          <div>
            <Reveal><span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Featured Projects</span></Reveal>
            <Reveal delay={1}>
              <h2
                className="leading-none text-[#111827]"
                style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}
              >
                Our Work Speaks<br />For Itself
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <div className="flex flex-wrap gap-2 md:gap-1">
              {['All', 'Membrane Repair', 'Metal Roof', 'Waterproofing'].map((tab, i) => (
                <button
                  key={i}
                  className={`px-5 py-2.5 text-[11px] tracking-[2px] uppercase font-semibold border transition-all duration-200 ${
                    i === 0
                      ? 'bg-[#C9A84C] text-[#FFFFFF] border-[#C9A84C]'
                      : 'bg-transparent border-[rgba(201,168,76,0.2)] text-[#6B7280] hover:bg-[#C9A84C] hover:text-[#FFFFFF] hover:border-[#C9A84C]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px] auto-rows-[240px]">
          {projects.map((proj, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2} className={`h-full ${proj.spanClasses}`}>
              <div className={`relative overflow-hidden cursor-pointer bg-[#F3F4F6] group h-full`}>
                <Image
                  src={proj.img}
                  alt={proj.name}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.05]"
                />
                 <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-7"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}
                >
                  <div>
                    <div className="text-[9px] tracking-[3px] uppercase text-[#C9A84C] mb-1.5">{proj.type}</div>
                    <div
                      className="font-bold text-[16px] text-white"
                      style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                    >
                      {proj.name}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Reveal>
            <Link
              href="/projects"
              className="bg-transparent text-[#111827] border-2 border-[rgba(240,237,230,0.3)] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] no-underline inline-block"
              style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
            >
              View All Projects
            </Link>
          </Reveal>
        </div>
      </section>

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

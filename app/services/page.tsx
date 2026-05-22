'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import Image from 'next/image';



const overviewCards = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-[#C9A84C]" fill="none" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    name: 'Roof Repair',
    desc: 'Full repairs for all roof types — metal, concrete, tile, and membrane systems.',
    href: '/services/roof-repair',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-[#C9A84C]" fill="none" strokeWidth="1.5">
        <path d="M12 2v6M12 22v-4M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-4M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
      </svg>
    ),
    name: 'Leak Repair',
    desc: 'Fast, lasting leak diagnosis and repair to prevent water damage and deterioration.',
    href: '/services/leak-repair',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-[#C9A84C]" fill="none" strokeWidth="1.5">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    name: 'Waterproofing',
    desc: 'Advanced membrane and coating systems for flat roofs, terraces, and basements.',
    href: '/services/waterproofing',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-[#C9A84C]" fill="none" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    name: 'Structural Works',
    desc: 'Structural reinforcement, repointing, and framework restoration for lasting integrity.',
    href: '/services/structural-works',
  },
];

const serviceDetails = [
  {
    num: '01',
    title: 'ROOF REPAIR',
    img: '/service/roof-service.webp',
    tag: 'Roof Repair',
    text: "From minor patch repairs to complete roof replacements, our certified team handles all roof types with precision and care. We assess every job thoroughly before recommending the most cost-effective, long-lasting solution.",
    bullets: [
      'Metal roof panel replacement & re-roofing',
      'Concrete & tile roof repair and re-bedding',
      'Ridge capping and flashing works',
      'Skylight repair and replacement',
      'Emergency storm damage repairs',
    ],
    href: '/services/roof-repair',
  },
  {
    num: '02',
    title: 'LEAK REPAIR',
    img: '/service/leak-service.webp',
    tag: 'Leak Repair',
    text: 'Water leaks can escalate quickly if left unaddressed. Our team provides rapid response, accurate diagnosis using moisture detection tools, and durable repairs that stop leaks from returning.',
    bullets: [
      'Moisture detection & leak tracing',
      'Roof joint and seam sealing',
      'Parapet wall & gutter leak repair',
      'Expansion joint waterproofing',
      '24-hour emergency response available',
    ],
    href: '/services/leak-repair',
  },
  {
    num: '03',
    title: 'WATERPROOFING',
    img: '/service/waterproof-service.webp',
    tag: 'Waterproofing',
    text: "Singapore's tropical rainfall demands robust waterproofing. We apply proven membrane systems and liquid coatings that create an impenetrable barrier against moisture ingress — for flat roofs, terraces, RC slabs, and more.",
    bullets: [
      'Torch-on bituminous membrane application',
      'Liquid polyurethane & acrylic coatings',
      'Crystalline waterproofing for RC slabs',
      'Terrace and balcony waterproofing',
      'Basement & wet area protection',
    ],
    href: '/services/waterproofing',
  },
  {
    num: '04',
    title: 'STRUCTURAL WORKS',
    img: '/service/structural-service.webp',
    tag: 'Structural Works',
    text: "Beyond surface repairs, we address the structural integrity of your roof framework. Our team carries out reinforcement and restoration work that extends the lifespan of your building's roofing system.",
    bullets: [
      'RC beam and slab repair & strengthening',
      'Brick and masonry repointing',
      'Roof truss inspection and repair',
      'Expansion joint installation',
      'Anti-carbonation coating for concrete',
    ],
    href: '/services/structural-works',
  },
];

const faqs = [
  {
    q: 'Do you provide free inspections?',
    a: 'Yes — we provide free on-site inspections and quotations with no obligation. Our team will assess your roof and give you an honest, detailed recommendation before any work begins.',
  },
  {
    q: 'How quickly can you respond to emergencies?',
    a: 'We offer a 24-hour emergency response service. For urgent leaks or storm damage, call us directly and our team will mobilise as quickly as possible to assess and contain the damage.',
  },
  {
    q: 'What types of properties do you serve?',
    a: "We serve all property types across Singapore — private residential homes (landed, bungalows), commercial offices and retail spaces, and large industrial facilities including factories and warehouses.",
  },
  {
    q: 'How long does a typical roof repair take?',
    a: 'It depends on the scope of work. Minor repairs can be completed in a single day, while larger projects such as full re-roofing or waterproofing applications typically take 3–7 working days.',
  },
  {
    q: 'Do you provide a warranty on your work?',
    a: 'Yes, we provide workmanship warranties on all completed jobs. The warranty period varies by service type — ask our team for specific details when you receive your quotation.',
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <PageHero
        breadcrumb="Services"
        title={<>OUR<br />SERVICES</>}
        subtitle="Comprehensive roofing solutions for every type of property — delivered with precision, quality, and two decades of expertise."
        minHeight="100vh"
      />

      {/* SERVICES OVERVIEW */}
      <section className="bg-[#F9FAFB] py-12 md:py-[100px] px-4 md:px-[60px]">
        <Reveal><span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-3 md:mb-4 block">What We Do</span></Reveal>
        <Reveal delay={1}>
          <h2 className="leading-none text-[#111827] mb-8 md:mb-[60px]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 5vw, 64px)' }}>
            Complete Roofing<br />Solutions
          </h2>
        </Reveal>
        {/* MOBILE VIEW (Standard Static Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {overviewCards.map((card, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2 | 3}>
              <Link
                href={card.href}
                className="relative bg-white p-6 sm:p-8 block border border-[#F3F4F6] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 no-underline group"
              >
                <span
                  className="absolute top-3 right-5 leading-none"
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(36px, 8vw, 56px)', color: 'rgba(201,168,76,0.07)' }}
                >
                  {card.num}
                </span>
                <div className="mb-4">{card.icon}</div>
                <div className="font-bold text-[16px] sm:text-[18px] text-[#111827] mb-2.5 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>{card.name}</div>
                <p className="text-[12px] text-[#6B7280] leading-[1.7] mb-4">{card.desc}</p>
                <span className="text-[10px] tracking-[2px] uppercase text-[#C9A84C] font-semibold">Explore →</span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* DESKTOP VIEW (Uiverse Flip Cards) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8">
          {overviewCards.map((card, i) => {
            const detail = serviceDetails[i] || {};
            return (
              <Reveal key={i} delay={i as 0 | 1 | 2 | 3}>
                <div className="relative w-full h-[380px] bg-white rounded-xl flex items-center justify-center overflow-hidden [perspective:1000px] shadow-sm transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.05] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] group cursor-pointer border border-[#F3F4F6]">
                  {/* FRONT */}
                  <div className="absolute inset-0 flex flex-col transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-0 group-hover:opacity-0 origin-center">
                    <div className="relative h-[240px] w-full shrink-0">
                      <Image
                        src={detail.img || '/service/roof-service.webp'}
                        alt={card.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div
                        className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 font-bold text-xs uppercase text-[#C9A84C] tracking-[2px] rounded"
                        style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                      >
                        {card.num}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center p-4 text-center bg-white">
                      <span className="text-[9px] tracking-[3px] uppercase text-[#C9A84C] mb-1 font-semibold">
                        0{card.num} · Service
                      </span>
                      <div
                        className="font-bold text-[16px] md:text-[18px] text-[#111827] leading-tight"
                        style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                      >
                        {card.name}
                      </div>
                    </div>
                  </div>

                  {/* BACK (Content) */}
                  <div className="absolute top-0 left-0 w-full h-full p-4 box-border bg-[#F9FAFB] rounded-xl overflow-hidden origin-bottom [transform:rotateX(-90deg)] transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[transform:rotateX(0deg)] flex flex-col z-10 text-left">
                    <div
                      className="font-bold text-[14px] md:text-[16px] text-[#111827] mb-1"
                      style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                    >
                      {card.name}
                    </div>
                    <p className="text-[11px] md:text-[12px] text-[#6B7280] leading-normal mb-1.5 flex-grow-0">
                      {detail.text || card.desc}
                    </p>
                    <div className="border-t border-[rgba(201,168,76,0.15)] pt-1.5 space-y-0.5 mb-1.5 flex-grow">
                      {(detail.bullets || []).map((bullet: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-[10px] md:text-[11px] text-[#374151] leading-tight">
                          <span className="text-[#C9A84C] font-bold">→</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 mt-auto text-[10px] md:text-[11px] tracking-[2px] uppercase text-[#C9A84C] font-bold no-underline hover:text-[#111827] transition-colors"
                    >
                      Full Service Details <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SERVICE DETAIL SECTIONS */}
      {serviceDetails.map((svc, i) => (
        <section
          key={i}
          className={`py-12 md:py-[100px] px-4 md:px-[60px] ${i % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F9FAFB]'}`}
        >
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center ${i % 2 !== 0 ? 'direction-rtl' : ''}`}
            style={i % 2 !== 0 ? { direction: 'rtl' } : {}}>
            <Reveal>
              <div
                className="h-[200px] sm:h-[320px] md:h-[520px] bg-cover bg-center relative"
                style={{ backgroundImage: `url('${svc.img}')`, direction: 'ltr' }}
              >
                <div className="absolute bottom-0 left-0 bg-[#C9A84C] text-[#111827] px-4 py-2 md:px-5 md:py-2.5 text-[9px] md:text-[10px] font-bold tracking-[2px] uppercase">
                  {svc.tag}
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div style={{ direction: 'ltr' }}>
                <div
                  className="leading-none mb-[-12px]"
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(48px, 12vw, 96px)', color: 'rgba(201,168,76,0.12)' }}
                >
                  {svc.num}
                </div>
                <div
                  className="text-[#111827] mb-4 md:mb-5"
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(28px, 8vw, 56px)' }}
                >
                  {svc.title}
                </div>
                <p className="text-[13px] md:text-[15px] text-[#6B7280] leading-[1.7] md:leading-[1.9] mb-6 md:mb-8">{svc.text}</p>
                <ul className="list-none mb-7 md:mb-9">
                  {svc.bullets.map((b, j) => (
                    <li key={j} className="text-[12px] sm:text-[13px] text-[#6B7280] py-2 md:py-2.5 border-b border-[rgba(201,168,76,0.2)] flex gap-2.5 sm:gap-3 items-start">
                      <span className="text-[#C9A84C] flex-shrink-0">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={svc.href}
                  className="bg-[#C9A84C] text-[#FFFFFF] border-2 border-[#C9A84C] px-5 py-3 md:px-8 md:py-[15px] font-bold text-[11px] md:text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] no-underline inline-block"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  Full Service Details
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="bg-[#FFFFFF] py-12 md:py-[100px] px-4 md:px-[60px]">
        <div className="mb-8 md:mb-[60px]">
          <Reveal><span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-3 md:mb-4 block">FAQ</span></Reveal>
          <Reveal delay={1}>
            <h2 className="leading-none text-[#111827]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 5vw, 64px)' }}>
              Common Questions
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="max-w-[800px]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[rgba(201,168,76,0.2)]">
                <button
                  className="w-full text-left bg-none border-none py-4 md:py-6 flex justify-between items-center cursor-pointer text-[#111827] font-semibold text-[13px] sm:text-[15px]"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)', background: 'none' }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span
                    className="text-[#C9A84C] text-lg sm:text-xl transition-transform duration-300"
                    style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none' }}
                  >
                    +
                  </span>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <p className="pb-4 md:pb-6 text-[12px] sm:text-[14px] text-[#6B7280] leading-[1.8] max-w-[680px]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CTABanner
        label="Get Started"
        title={<>NEED A ROOFING<br /><span className="text-[#C9A84C]">SPECIALIST?</span></>}
        description="Contact our team for a free site inspection and expert consultation — no commitment required."
        primaryHref="/contact"
        primaryText="Book Free Inspection"
      />

      <Footer />
    </>
  );
}

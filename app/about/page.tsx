'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/* ── static data ─────────────────────────────────────── */
const mvvCards = [
  {
    label: 'Mission',
    letter: 'M',
    title: 'Delivering Trusted Solutions',
    text: "To deliver trusted roofing solutions with lasting impact — protecting every property through expert craftsmanship, quality materials, and reliable service that stands the test of Singapore's climate.",
  },
  {
    label: 'Vision',
    letter: 'V',
    title: 'Leading With Quality',
    text: "To lead Singapore's roofing industry through quality excellence — setting the benchmark for professional standards, innovation in methods, and enduring client trust across every project we undertake.",
  },
  {
    label: 'Values',
    letter: 'V',
    title: 'Integrity & Excellence',
    text: 'Dedicated to quality roofing and lasting customer satisfaction. We operate with full transparency, honest pricing, and a commitment to doing the job right — every time, without compromise.',
  },
];

const timeline = [
  { year: '2004', sublabel: 'The Beginning', title: 'Founded in Singapore', desc: "Asia Tech Roofing was established with a vision to raise the standard of roofing services across Singapore's residential sector.", side: 'left' },
  { year: '2009', sublabel: 'Expansion', title: 'Commercial & Industrial Expansion', desc: 'Expanded services to cover commercial offices and industrial factories, doubling the team and introducing waterproofing specialisations.', side: 'right' },
  { year: '2013', sublabel: '100 Projects', title: '100th Project Milestone', desc: "Celebrated the completion of our 100th project — a major industrial roofing overhaul in Jurong West — cementing our reputation for large-scale work.", side: 'left' },
  { year: '2019', sublabel: 'Certification', title: 'Full Team Certification Achieved', desc: 'All field technicians completed advanced certification programmes, bringing every worker up to the highest industry standards in Singapore.', side: 'right' },
  { year: '2024', sublabel: 'Today', title: '500+ Projects Completed', desc: "A landmark moment — over 500 projects completed across Singapore's residential, commercial, and industrial properties with zero major callbacks.", side: 'left' },
];

const certs = [
  { icon: '✓', name: 'BCA Licensed', body: 'Building & Construction Authority' },
  { icon: '★', name: 'bizSAFE Level 3', body: 'Workplace Safety Certified' },
  { icon: '◈', name: 'ISO Compliant', body: 'Quality Management Standards' },
  { icon: '⬡', name: 'MOM Registered', body: 'Ministry of Manpower' },
];

/* ── component ───────────────────────────────────────── */
export default function AboutPage() {
  const roofSectionRef = useRef<HTMLDivElement>(null);
  const [roofProgress, setRoofProgress] = useState(0); // 0 → 1 as roof section enters viewport

  useEffect(() => {
    const handleScroll = () => {
      const section = roofSectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section bottom is at viewport bottom → 1 when section top reaches viewport top
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / vh));
      setRoofProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* ─────────────────────────────────────────────────────────
          LAYER 1 — HERO (truly fixed, never moves)
          z-index 1 so everything else can slide over it
      ───────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          zIndex: 1,
        }}
      >
        <section
          className="flex items-end px-4 md:px-[60px] py-12 md:py-[80px] pt-24 md:pt-[100px] relative overflow-hidden"
          style={{ height: '100vh' }}
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(13,15,18,0.96) 40%, rgba(13,15,18,0.7) 100%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80') center/cover`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 60%, #0D0F12 100%)' }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-[700px]">
            <div className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] mb-4 md:mb-5 flex items-center gap-2.5">
              Home <span className="text-[#8A8F9E]">/ About Us</span>
            </div>
            <h1
              className="text-[clamp(36px,9vw,120px)] mb-4 md:mb-5 leading-none text-[#F0EDE6]"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
            >
              ABOUT<br />ASIA TECH
            </h1>
            <p className="text-[14px] md:text-[18px] text-[#8A8F9E] max-w-[520px] leading-[1.7]">
              Two decades of trusted roofing expertise, built on quality craftsmanship and lasting client relationships.
            </p>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8A8F9E] opacity-60">
            <span className="text-[9px] tracking-[3px] uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-[#C9A84C] animate-bounce" />
          </div>
        </section>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SPACER — pushes scrollable content below the fixed hero
      ───────────────────────────────────────────────────────── */}
      <div style={{ height: '100vh' }} aria-hidden="true" />

      {/* ─────────────────────────────────────────────────────────
          LAYER 2 — ROOF IMAGE REVEAL
          Scrolls naturally over the fixed hero.
          The roof image is sticky so it fills the screen while
          the section scrolls, then normal content pushes it up.
      ───────────────────────────────────────────────────────── */}
      <div
        ref={roofSectionRef}
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100vh',      
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <div className="absolute inset-0">
            <Image
              src="/assets/about-roof.png"
              alt="Asia Tech Roofing — quality craftsmanship"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          LAYER 3 — NORMAL PAGE CONTENT
          z-index 3, solid background so it fully covers the roof
      ───────────────────────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 3, backgroundColor: '#F9FAFB' }}>

        {/* MVV */}
        <section className="bg-[#F9FAFB] py-12 md:py-[100px] px-4 md:px-[60px]">
          <Reveal><span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-2 md:mb-4 block">Our Foundation</span></Reveal>
          <Reveal delay={1}>
            <h2
              className="leading-none text-[#111827] mb-8 md:mb-[60px]"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              What Drives Us
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
            {mvvCards.map((card, i) => (
              <Reveal key={i} delay={i as 0 | 1 | 2}>
                <div
                  className="bg-[#F3F4F6] p-8 md:p-[48px_36px] border-t-[3px] border-[#C9A84C] relative overflow-hidden"
                  data-label={card.letter}
                >
                  <div
                    className="absolute top-4 right-6 leading-none pointer-events-none select-none"
                    style={{
                      fontFamily: 'var(--font-bebas, sans-serif)',
                      fontSize: '80px',
                      color: 'rgba(201,168,76,0.06)',
                    }}
                  >
                    {card.letter}
                  </div>
                  <span className="text-[8px] md:text-[9px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-3 md:mb-4 block">{card.label}</span>
                  <div
                    className="text-[26px] md:text-[36px] text-[#111827] mb-3 md:mb-4"
                    style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
                  >
                    {card.title}
                  </div>
                  <p className="text-[13px] md:text-[14px] text-[#111827] leading-[1.7] md:leading-[1.8]">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section className="bg-[#FFFFFF] py-12 md:py-[100px] px-4 md:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px] items-center">
            <Reveal>
              <div className="relative h-[180px] sm:h-[280px] md:h-[520px] bg-gray-50 border border-gray-100 flex items-center justify-center p-4 sm:p-8 md:p-12">
                <div className="relative w-full h-full">
                  <Image
                    src="/asialogo.png"
                    alt="Asia Tech Roofing Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute bottom-[-8px] right-[-8px] sm:bottom-[-16px] sm:right-[-16px] md:bottom-[-24px] md:right-[-24px] bg-[#C9A84C] text-[#111827] w-[80px] h-[80px] sm:w-28 sm:h-28 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-lg z-10">
                  <div className="leading-none text-[22px] sm:text-[32px] md:text-[56px]" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>20+</div>
                  <div className="text-[6px] sm:text-[8px] md:text-[9px] font-bold tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] uppercase mt-0.5 md:mt-1">Years of<br />Excellence</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[2.5px] sm:tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-2 md:mb-4 block font-semibold">Our Story</span>
              <h2
                className="leading-none text-[#111827] mb-4 md:mb-6"
                style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(24px, 4vw, 52px)' }}
              >
                Built on<br />Trust &<br />Expertise
              </h2>
              <p className="text-[13px] sm:text-[14px] md:text-[16px] text-[#111827] leading-[1.7] md:leading-[1.8] mb-3 md:mb-4">
                Asia Tech Roofing was founded with a single purpose: to provide Singapore's properties with roofing solutions they can trust.
              </p>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#111827] leading-[1.7] md:leading-[1.8] mb-3 md:mb-4">
                Over two decades, we've completed more than 500 projects across Singapore's residential, commercial, and industrial sectors.
              </p>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#111827] leading-[1.7] md:leading-[1.8]">
                Our team of certified workers brings not just technical skill, but genuine care for every client's property. We treat each roof as if it were our own.
              </p>
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[rgba(201,168,76,0.2)]">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[2.5px] sm:tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-3 block font-bold">Our Track Record</span>
                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10">
                  {[{ num: '500+', label: 'Projects Done' }, { num: '100%', label: 'Certified Team' }, { num: '24hr', label: 'Response' }].map((s, i) => (
                    <div key={i}>
                      <div className="text-[26px] sm:text-[34px] md:text-[44px] text-[#C9A84C] leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{s.num}</div>
                      <div className="text-[8px] sm:text-[9px] md:text-[11px] text-[#111827] tracking-[1px] md:tracking-[1.5px] uppercase mt-0.5 md:mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="bg-[#F9FAFB] py-12 md:py-[100px] px-4 md:px-[60px]">
          <div className="mb-12 md:mb-[72px]">
            <Reveal><span className="text-[8px] md:text-[9px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-2 md:mb-4 block">Our Journey</span></Reveal>
            <Reveal delay={1}>
              <h2 className="leading-none text-[#111827]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(20px, 4vw, 36px)' }}>
                Milestones That<br />Define Us
              </h2>
            </Reveal>
          </div>

          <div className="relative max-w-[860px] mx-auto py-2">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[rgba(201,168,76,0.15)] md:transform md:-translate-x-1/2" />
            {timeline.map((item, i) => (
              <Reveal key={i}>
                <div className="relative pl-8 md:pl-0 mb-10 md:mb-[60px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[60px]">
                  {item.side === 'left' ? (
                    <>
                      <div className="text-left md:text-right pr-0 md:pr-10 order-2 md:order-1">
                        <div className="font-bold text-[12px] md:text-[15px] text-[#111827] mb-1 md:mb-2">{item.title}</div>
                        <p className="text-[11px] md:text-[12px] text-[#111827] leading-[1.6] md:leading-[1.7]">{item.desc}</p>
                      </div>
                      <div className="text-left pl-0 md:pl-10 order-1 md:order-2">
                        <div className="text-[26px] md:text-[36px] text-[#C9A84C] leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{item.year}</div>
                        <div className="text-[8px] md:text-[9px] tracking-[2px] uppercase text-[#111827]">{item.sublabel}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-left md:text-right pr-0 md:pr-10 order-1">
                        <div className="text-[26px] md:text-[36px] text-[#C9A84C] leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{item.year}</div>
                        <div className="text-[8px] md:text-[9px] tracking-[2px] uppercase text-[#111827]">{item.sublabel}</div>
                      </div>
                      <div className="text-left pl-0 md:pl-10 order-2">
                        <div className="font-bold text-[12px] md:text-[15px] text-[#111827] mb-1 md:mb-2">{item.title}</div>
                        <p className="text-[11px] md:text-[12px] text-[#111827] leading-[1.6] md:leading-[1.7]">{item.desc}</p>
                      </div>
                    </>
                  )}
                  <div className="absolute left-[8px] top-[6px] md:left-1/2 md:top-2 w-3.5 h-3.5 bg-[#C9A84C] border-[3px] border-[#F9FAFB] rounded-full md:transform md:-translate-x-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="bg-[#FFFFFF] py-12 md:py-[80px] px-4 md:px-[60px]">
          <Reveal><span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-2 md:mb-4 block">Accreditations</span></Reveal>
          <Reveal delay={1}>
            <h2 className="leading-none text-[#111827] mb-8 md:mb-12" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 5vw, 64px)' }}>
              Certified &<br />Recognised
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
            {certs.map((cert, i) => (
              <Reveal key={i} delay={i as 0 | 1 | 2 | 3} className="h-full">
                <div className="h-full bg-[#F3F4F6] p-[36px_28px] flex flex-col xl:flex-row xl:items-center gap-5 border border-[rgba(201,168,76,0.2)] transition-all duration-200 hover:border-[#C9A84C]">
                  <div className="w-11 h-11 min-w-[44px] border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] text-lg">
                    {cert.icon}
                  </div>
                  <div>
                    <div className="font-bold text-[13px] text-[#111827]">{cert.name}</div>
                    <div className="text-[11px] text-[#111827] mt-0.5">{cert.body}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CTABanner
          label="Work With Us"
          title={<>READY TO GET<br /><span className="text-[#C9A84C]">STARTED?</span></>}
          description="Talk to our experts and get a free, no-obligation site inspection for your property."
          primaryHref="/contact"
          primaryText="Book Free Inspection"
        />

        <Footer />
      </div>
    </>
  );
}

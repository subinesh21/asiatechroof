'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import Image from 'next/image';


const stats = [
  { num: '500+', label: 'Projects Completed' },
  { num: '20+', label: 'Years Experience' },
  { num: '3', label: 'Property Sectors' },
  { num: '4', label: 'Service Types' },
];

const filterTabs = ['All Projects', 'Membrane Repair', 'Metal Roof', 'Waterproofing'];

interface ProjectItem {
  category: string;
  img: string;
  label?: string;
  type: string;
  name: string;
  location: string;
  featured?: boolean;
  tall?: boolean;
  minH?: string;
}

const portfolioItems: ProjectItem[] = [
  // Membrane Repair
  {
    category: 'Membrane Repair',
    img: '/Projects/Membrane Repair/IMG-20221215-WA0063.webp',
    label: 'Featured',
    type: 'Membrane Repair',
    name: 'Membrane Repair Works',
    location: 'Singapore',
    featured: true,
    tall: false,
    minH: 'min-h-[500px]',
  },
  {
    category: 'Membrane Repair',
    img: '/Projects/Membrane Repair/IMG-20221215-WA0064.webp',
    label: undefined,
    type: 'Membrane Repair',
    name: 'Membrane Repair Project',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  {
    category: 'Membrane Repair',
    img: '/Projects/Membrane Repair/IMG-20221215-WA0065.webp',
    label: undefined,
    type: 'Membrane Repair',
    name: 'Membrane Repair Works',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  {
    category: 'Membrane Repair',
    img: '/Projects/Membrane Repair/IMG-20221215-WA0067.webp',
    label: undefined,
    type: 'Membrane Repair',
    name: 'Membrane Repair Project',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  {
    category: 'Membrane Repair',
    img: '/Projects/Membrane Repair/IMG-20221215-WA0068.webp',
    label: undefined,
    type: 'Membrane Repair',
    name: 'Membrane Repair Works',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  // Metal Roof
  {
    category: 'Metal Roof',
    img: '/Projects/Metal roof/image-1.webp',
    label: 'Featured',
    type: 'Metal Roof',
    name: 'Metal Roof Installation',
    location: 'Singapore',
    featured: true,
    tall: false,
    minH: 'min-h-[500px]',
  },
  {
    category: 'Metal Roof',
    img: '/Projects/Metal roof/IMG-20221215-WA0127.webp',
    label: undefined,
    type: 'Metal Roof',
    name: 'Metal Roof Works',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  {
    category: 'Metal Roof',
    img: '/Projects/Metal roof/IMG-20221215-WA0129.webp',
    label: undefined,
    type: 'Metal Roof',
    name: 'Metal Roof Repair',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  {
    category: 'Metal Roof',
    img: '/Projects/Metal roof/IMG-20221215-WA0130.webp',
    label: undefined,
    type: 'Metal Roof',
    name: 'Metal Roof Project',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  // Waterproofing
  {
    category: 'Waterproofing',
    img: '/Projects/Waterproofing/image-2.webp',
    label: 'Featured',
    type: 'Waterproofing',
    name: 'Waterproofing Works',
    location: 'Singapore',
    featured: true,
    tall: false,
    minH: 'min-h-[500px]',
  },
  {
    category: 'Waterproofing',
    img: '/Projects/Waterproofing/image-3.webp',
    label: undefined,
    type: 'Waterproofing',
    name: 'Waterproofing Project',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  {
    category: 'Waterproofing',
    img: '/Projects/Waterproofing/image-4.webp',
    label: undefined,
    type: 'Waterproofing',
    name: 'Waterproofing Works',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  {
    category: 'Waterproofing',
    img: '/Projects/Waterproofing/image-5.webp',
    label: undefined,
    type: 'Waterproofing',
    name: 'Waterproofing Project',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
  {
    category: 'Waterproofing',
    img: '/Projects/Waterproofing/image-6.webp',
    label: undefined,
    type: 'Waterproofing',
    name: 'Waterproofing Works',
    location: 'Singapore',
    featured: false,
    tall: false,
    minH: 'min-h-[280px]',
  },
];

const allProjectImages: ProjectItem[] = [
  { img: '/Projects/image-1.webp', category: 'All Projects', type: 'Roofing Project', name: 'Premium Roofing Project', location: 'Singapore', featured: true },
  { img: '/Projects/image-2.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Waterproofing', location: 'Singapore' },
  { img: '/Projects/image-3.webp', category: 'All Projects', type: 'Roofing Project', name: 'Leak Prevention', location: 'Singapore' },
  { img: '/Projects/image-4.webp', category: 'All Projects', type: 'Roofing Project', name: 'Commercial Roofing', location: 'Singapore' },
  { img: '/Projects/image-5.webp', category: 'All Projects', type: 'Roofing Project', name: 'Industrial Waterproofing', location: 'Singapore' },
  { img: '/Projects/image-6.webp', category: 'All Projects', type: 'Roofing Project', name: 'Residential Re-Roofing', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0041.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roofing Repair Works', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0047.webp', category: 'All Projects', type: 'Roofing Project', name: 'Asia Tech Roofing Service', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0062.webp', category: 'All Projects', type: 'Roofing Project', name: 'Metal Roof Installation', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0063.webp', category: 'All Projects', type: 'Roofing Project', name: 'Membrane Repair Works', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0064.webp', category: 'All Projects', type: 'Roofing Project', name: 'Premium Membrane Repair', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0065.webp', category: 'All Projects', type: 'Roofing Project', name: 'Membrane Waterproofing', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0067.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Restoration', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0068.webp', category: 'All Projects', type: 'Roofing Project', name: 'Flat Roof Repair', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0070.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Leak Repair', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0075.webp', category: 'All Projects', type: 'Roofing Project', name: 'Structural Reinforcement', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0127.webp', category: 'All Projects', type: 'Roofing Project', name: 'Metal Roof Works', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0129.webp', category: 'All Projects', type: 'Roofing Project', name: 'Cladding & Flashing', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0130.webp', category: 'All Projects', type: 'Roofing Project', name: 'Metal Roof Refurbishment', location: 'Singapore' },
  { img: '/Projects/IMG-20221215-WA0267.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Re-Coating', location: 'Singapore' },
  { img: '/Projects/IMG-20231115-WA0009.webp', category: 'All Projects', type: 'Roofing Project', name: 'Waterproofing Application', location: 'Singapore' },
  { img: '/Projects/IMG-20231115-WA0012.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Sealant Works', location: 'Singapore' },
  { img: '/Projects/IMG-20231115-WA0013.webp', category: 'All Projects', type: 'Roofing Project', name: 'Leak Assessment Project', location: 'Singapore' },
  { img: '/Projects/IMG-20231115-WA0014.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Gutter Repair', location: 'Singapore' },
  { img: '/Projects/IMG-20231115-WA0017.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roofing Inspection', location: 'Singapore' },
  { img: '/Projects/IMG-20231115-WA0019.webp', category: 'All Projects', type: 'Roofing Project', name: 'Commercial Waterproofing', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0001.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Repair Singapore', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0006.webp', category: 'All Projects', type: 'Roofing Project', name: 'Asia Tech Roofing Project', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0009.webp', category: 'All Projects', type: 'Roofing Project', name: 'High-rise Waterproofing', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0010.webp', category: 'All Projects', type: 'Roofing Project', name: 'Professional Leak Repair', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0014.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Overlay Installation', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0016.webp', category: 'All Projects', type: 'Roofing Project', name: 'Structural Roofing Works', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0020.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Maintenance Services', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0021.webp', category: 'All Projects', type: 'Roofing Project', name: 'Singapore Roof Contractor', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0023.webp', category: 'All Projects', type: 'Roofing Project', name: 'Quality Roofing Solutions', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0029.webp', category: 'All Projects', type: 'Roofing Project', name: 'Expert Roof Waterproofing', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0031.webp', category: 'All Projects', type: 'Roofing Project', name: 'Flat Roof Membrane Work', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0037.webp', category: 'All Projects', type: 'Roofing Project', name: 'Residential Waterproofing', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0043.webp', category: 'All Projects', type: 'Roofing Project', name: 'Industrial Re-roofing', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0049.webp', category: 'All Projects', type: 'Roofing Project', name: 'Fast Roof Leak Repair', location: 'Singapore' },
  { img: '/Projects/IMG-20250413-WA0058.webp', category: 'All Projects', type: 'Roofing Project', name: 'Roof Cladding Replacement', location: 'Singapore' },
  { img: '/Projects/WhatsAppImage2023-11-15at02.41.58_545f064e.webp', category: 'All Projects', type: 'Roofing Project', name: 'Asia Tech Complete Service', location: 'Singapore' },
  { img: '/Projects/WhatsAppImage2023-11-15at02.41.58_9b0ed2e8.webp', category: 'All Projects', type: 'Roofing Project', name: 'Singapore Premium Roofing', location: 'Singapore' }
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);
  const activeCategory = filterTabs[activeTab];
  const visibleItems = activeCategory === 'All Projects'
    ? allProjectImages.slice(0, visibleCount)
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setVisibleCount(8);
  };


  return (
    <>
      <Navbar />

      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '100vh', zIndex: 1 }}>
        <PageHero
          breadcrumb="Projects"
          title={<>OUR<br />PORTFOLIO</>}
          subtitle="500+ completed projects across Singapore's residential, commercial, and industrial sectors. Work that stands the test of time."
          minHeight="100vh"
        />
      </div>

      {/* Spacer */}
      <div style={{ height: '100vh' }} aria-hidden="true" />

      {/* Reveal Image */}
      <div style={{ position: 'relative', zIndex: 2, height: '100vh' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          <Image
            src="/assets/project-roof.png"
            alt="Asia Tech Roofing — Projects"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 3, backgroundColor: '#F9FAFB' }}>
        {/* PORTFOLIO */}
      <section className="bg-[#FFFFFF] py-12 md:py-20 px-4 md:px-[60px] pb-[60px] md:pb-[100px]">
        <div className="flex overflow-x-auto whitespace-nowrap gap-1.5 md:gap-1 pb-4 md:pb-0 mb-8 md:mb-12 scrollbar-none w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filterTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleTabChange(i)}
              className={`px-3.5 py-2 md:px-5 md:py-2.5 text-[9px] md:text-[11px] tracking-[1.5px] md:tracking-[2px] uppercase font-semibold border transition-all duration-200 cursor-pointer shrink-0 ${
                activeTab === i
                  ? 'bg-[#C9A84C] text-[#111827] border-[#C9A84C]'
                  : 'bg-transparent border-[rgba(201,168,76,0.2)] text-[#111827] hover:bg-[#C9A84C] hover:text-[#111827] hover:border-[#C9A84C]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-1 auto-rows-[280px] grid-flow-row-dense">
            {visibleItems.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden cursor-pointer bg-[#F3F4F6] group ${item.featured ? 'md:col-span-2' : ''} ${item.tall ? 'md:row-span-2' : ''}`}
              >
                {item.label && (
                  <div className="absolute top-5 left-5 z-10 bg-[#C9A84C] text-[#111827] text-[9px] font-bold tracking-[2px] uppercase px-3 py-1.5">
                    {item.label}
                  </div>
                )}
                <div
                  className={`w-full h-full bg-cover bg-center transition-transform duration-[600ms] group-hover:scale-[1.05]`}
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-7"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}
                >
                  <div>
                    <div className="text-[9px] tracking-[3px] uppercase text-[#C9A84C] mb-1.5">{item.type}</div>
                    <div className="font-bold text-[16px] text-white mb-1" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>{item.name}</div>
                    <div className="text-[12px] text-gray-300">{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {activeCategory === 'All Projects' && (visibleCount > 8 || visibleCount < allProjectImages.length) && (
          <Reveal>
            <div className="flex justify-center gap-4 mt-12">
              {visibleCount > 8 && (
                <button
                  onClick={() => setVisibleCount(8)}
                  className="bg-transparent border-2 border-[rgba(201,168,76,0.2)] text-[#111827] hover:border-[#C9A84C] hover:text-[#C9A84C] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 cursor-pointer"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  Show Less
                </button>
              )}
              {visibleCount < allProjectImages.length && (
                <button
                  onClick={() => setVisibleCount(prev => prev + 8)}
                  className="bg-transparent border-2 border-[#C9A84C] text-[#111827] hover:bg-[#C9A84C] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 cursor-pointer"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  Show More
                </button>
              )}
            </div>
          </Reveal>
        )}
      </section>

      {/* STATS BAR */}
      <section className="bg-[#F9FAFB] py-12 md:py-20 px-4 md:px-[60px] border-b border-[rgba(201,168,76,0.2)]">
        <div className="text-center mb-10 md:mb-14">
          <Reveal><span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-2 md:mb-3 block font-semibold">Our Impact</span></Reveal>
          <Reveal delay={1}>
            <h2 className="leading-none text-[#111827]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 5vw, 64px)' }}>
              By The Numbers
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 justify-around">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2 | 3}>
              <div className={`text-center md:px-10 ${i % 2 === 0 ? 'border-r border-[rgba(201,168,76,0.2)]' : 'border-r-0'} ${i < stats.length - 1 ? 'md:border-r md:border-[rgba(201,168,76,0.2)]' : 'md:border-r-0'}`}>
                <div className="text-[40px] md:text-[52px] text-[#C9A84C] leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{stat.num}</div>
                <div className="text-[9px] md:text-[11px] text-[#111827] tracking-[1.5px] md:tracking-[2px] uppercase mt-1">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="bg-[#F9FAFB] py-12 md:py-20 px-4 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <Reveal>
            <div
              className="h-[300px] sm:h-[450px] md:h-[520px] relative"
              style={{ backgroundImage: "url('/Projects/IMG-20250413-WA0049.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <span className="text-[8px] md:text-[9px] tracking-[2.5px] md:tracking-[3px] uppercase text-[#C9A84C] mb-1.5 block">Case Study · Industrial</span>
                <div className="text-[26px] md:text-[32px] text-white" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>
                  JURONG INDUSTRIAL<br />COMPLEX
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-2 md:mb-4 block font-semibold">Featured Project</span>
            <h2 className="leading-none text-[#111827] mb-4 md:mb-5" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 5vw, 64px)' }}>
              Complete Industrial<br />Roof Overhaul
            </h2>
            <p className="text-[13px] md:text-[15px] text-[#111827] leading-[1.8] md:leading-[1.9] mb-4 md:mb-6">
              A major full roof replacement and waterproofing project for a 12,000 sqm industrial facility in Jurong West. The existing IBR metal roof had deteriorated severely after 18 years, with multiple active leaks disrupting factory operations.
            </p>
            <p className="text-[13px] md:text-[15px] text-[#111827] leading-[1.8] md:leading-[1.9] mb-6 md:mb-8">
              Our team completed the full re-roofing with minimal disruption to the client&apos;s production schedule — working in phases over 3 weeks with zero safety incidents.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                { label: 'Project Type', value: 'Full Re-Roofing' },
                { label: 'Area', value: '12,000 sqm' },
                { label: 'Duration', value: '3 Weeks' },
                { label: 'Location', value: 'Jurong West' },
              ].map((d, i) => (
                <div key={i} className="bg-[#F3F4F6] p-3 md:p-4 px-4 md:px-5">
                  <div className="text-[8px] md:text-[9px] tracking-[1.5px] md:tracking-[2px] uppercase text-[#C9A84C] mb-1 md:mb-1.5">{d.label}</div>
                  <div className="text-[12px] md:text-[14px] text-[#111827] font-semibold">{d.value}</div>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-[#C9A84C] text-[#111827] border-2 border-[#C9A84C] px-5 py-3 md:px-8 md:py-[15px] font-bold text-[10px] md:text-[12px] tracking-[1.5px] md:tracking-[2px] uppercase transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] no-underline inline-block"
              style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
            >
              Start Your Project
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABanner
        label="Next Project"
        title={<>YOUR PROPERTY<br /><span className="text-[#C9A84C]">COULD BE NEXT</span></>}
        description="Contact our team for a free site inspection and quotation — no commitment required."
      />

      <Footer />
      </div>
    </>
  );
}

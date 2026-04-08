'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';


const stats = [
  { num: '500+', label: 'Projects Completed' },
  { num: '20+', label: 'Years Experience' },
  { num: '3', label: 'Property Sectors' },
  { num: '4', label: 'Service Types' },
];

const filterTabs = ['All Projects', 'Membrane Repair', 'Metal Roof', 'Waterproofing', 'Structural Works', 'Industrial', 'Commercial', 'Residential'];

const portfolioItems = [
  {
    featured: true,
    tall: false,
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80',
    label: 'Featured',
    type: 'Industrial · Metal Roof',
    name: 'Jurong Industrial Complex — Full Roof Overhaul',
    location: 'Jurong West, Singapore',
    minH: 'min-h-[500px]',
  },
  {
    featured: false,
    tall: false,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    label: undefined,
    type: 'Commercial · Waterproofing',
    name: 'Orchard Office Tower',
    location: 'Orchard, Singapore',
    minH: 'min-h-[280px]',
  },
  {
    featured: false,
    tall: true,
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    label: undefined,
    type: 'Residential · Leak Repair',
    name: 'Bukit Timah Bungalow',
    location: 'Bukit Timah, Singapore',
    minH: 'min-h-[564px]',
  },
  {
    featured: false,
    tall: false,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    label: undefined,
    type: 'Residential · Membrane',
    name: 'Sentosa Cove Terrace',
    location: 'Sentosa, Singapore',
    minH: 'min-h-[280px]',
  },
  {
    featured: false,
    tall: false,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    label: undefined,
    type: 'Residential · Roof Repair',
    name: 'Holland Road Landed Home',
    location: 'Holland Village, Singapore',
    minH: 'min-h-[280px]',
  },
  {
    featured: false,
    tall: false,
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    label: undefined,
    type: 'Industrial · Structural Works',
    name: 'Tuas Warehouse Complex',
    location: 'Tuas, Singapore',
    minH: 'min-h-[280px]',
  },
  {
    featured: false,
    tall: false,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    label: undefined,
    type: 'Commercial · Waterproofing',
    name: 'Raffles Place Office Block',
    location: 'CBD, Singapore',
    minH: 'min-h-[280px]',
  },
  {
    featured: false,
    tall: false,
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    label: undefined,
    type: 'Residential · Full Re-Roof',
    name: 'Nassim Road Bungalow',
    location: 'Nassim Road, Singapore',
    minH: 'min-h-[280px]',
  },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Navbar />
      <PageHero
        breadcrumb="Projects"
        title={<>OUR<br />PORTFOLIO</>}
        subtitle="500+ completed projects across Singapore's residential, commercial, and industrial sectors. Work that stands the test of time."
      />

      {/* STATS BAR */}
      <div className="bg-[#141820] py-12 px-6 md:px-[60px] border-b border-[rgba(201,168,76,0.2)]">
        <div className="flex justify-around">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2 | 3}>
              <div className={`text-center px-10 ${i < stats.length - 1 ? 'border-r border-[rgba(201,168,76,0.2)]' : ''}`}>
                <div className="text-[52px] text-[#C9A84C] leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{stat.num}</div>
                <div className="text-[11px] text-[#8A8F9E] tracking-[2px] uppercase mt-1">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* PORTFOLIO */}
      <section className="bg-[#0D0F12] py-20 px-6 md:px-[60px] pb-[100px]">
        <div className="flex gap-1 mb-12 flex-wrap">
          {filterTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 text-[11px] tracking-[2px] uppercase font-semibold border transition-all duration-200 ${
                activeTab === i
                  ? 'bg-[#C9A84C] text-[#0D0F12] border-[#C9A84C]'
                  : 'bg-transparent border-[rgba(201,168,76,0.2)] text-[#8A8F9E] hover:bg-[#C9A84C] hover:text-[#0D0F12] hover:border-[#C9A84C]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <Reveal>
          <div className="grid grid-cols-3 gap-1 auto-rows-[280px] grid-flow-row-dense">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden cursor-pointer bg-[#1C2130] group ${item.featured ? 'col-span-2' : ''} ${item.tall ? 'row-span-2' : ''}`}
              >
                {item.label && (
                  <div className="absolute top-5 left-5 z-10 bg-[#C9A84C] text-[#0D0F12] text-[9px] font-bold tracking-[2px] uppercase px-3 py-1.5">
                    {item.label}
                  </div>
                )}
                <div
                  className={`w-full h-full bg-cover bg-center transition-transform duration-[600ms] group-hover:scale-[1.05]`}
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-7"
                  style={{ background: 'linear-gradient(to top, rgba(13,15,18,0.95) 0%, transparent 60%)' }}
                >
                  <div>
                    <div className="text-[9px] tracking-[3px] uppercase text-[#C9A84C] mb-1.5">{item.type}</div>
                    <div className="font-bold text-[16px] text-[#F0EDE6] mb-1" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>{item.name}</div>
                    <div className="text-[12px] text-[#8A8F9E]">{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="bg-[#141820] py-20 px-6 md:px-[60px]">
        <div className="grid grid-cols-2 gap-20 items-center">
          <Reveal>
            <div
              className="h-[520px] relative"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-[rgba(13,15,18,0.5)]" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-[9px] tracking-[3px] uppercase text-[#C9A84C] mb-2 block">Case Study · Industrial</span>
                <div className="text-[32px] text-[#F0EDE6]" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>
                  JURONG INDUSTRIAL<br />COMPLEX
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Featured Project</span>
            <h2 className="leading-none text-[#F0EDE6] mb-5" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}>
              Complete Industrial<br />Roof Overhaul
            </h2>
            <p className="text-[15px] text-[#8A8F9E] leading-[1.9] mb-6">
              A major full roof replacement and waterproofing project for a 12,000 sqm industrial facility in Jurong West. The existing IBR metal roof had deteriorated severely after 18 years, with multiple active leaks disrupting factory operations.
            </p>
            <p className="text-[15px] text-[#8A8F9E] leading-[1.9] mb-8">
              Our team completed the full re-roofing with minimal disruption to the client&apos;s production schedule — working in phases over 3 weeks with zero safety incidents.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Project Type', value: 'Full Re-Roofing' },
                { label: 'Area', value: '12,000 sqm' },
                { label: 'Duration', value: '3 Weeks' },
                { label: 'Location', value: 'Jurong West' },
              ].map((d, i) => (
                <div key={i} className="bg-[#1C2130] p-4 px-5">
                  <div className="text-[9px] tracking-[2px] uppercase text-[#C9A84C] mb-1.5">{d.label}</div>
                  <div className="text-[14px] text-[#F0EDE6] font-semibold">{d.value}</div>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-[#C9A84C] text-[#0D0F12] border-2 border-[#C9A84C] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] no-underline inline-block"
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
    </>
  );
}

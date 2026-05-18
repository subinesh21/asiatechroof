'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

interface Project {
  img: string;
  type: string;
  name: string;
  spanClasses: string;
  category: string;
}

const projects: Project[] = [
  {
    img: '/Works/Fast and Reliable Roof Leak Repair in Singapore/IMG-20250413-WA0049.webp',
    type: 'Leak Repair',
    name: 'Fast & Reliable Roof Leak Repair',
    spanClasses: 'lg:col-span-2 lg:row-span-2',
    category: 'Waterproofing',
  },
  {
    img: '/Works/The Best Roofing Service in Singapore_ Why Choose Asia Tech_/IMG-20221215-WA0047.webp',
    type: 'Roofing Service',
    name: 'Best Roofing Service in Singapore',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
    category: 'Metal Roof',
  },
  {
    img: '/Projects/IMG-20250413-WA0006.webp',
    type: 'Roofing Works',
    name: 'Roofing Project 2025',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
    category: 'Metal Roof',
  },
  {
    img: '/Projects/IMG-20221215-WA0041.webp',
    type: 'Membrane Repair',
    name: 'Membrane Repair Project',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
    category: 'Membrane Repair',
  },
  {
    img: '/Projects/IMG-20231115-WA0012.webp',
    type: 'Waterproofing',
    name: 'Waterproofing Works 2023',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
    category: 'Waterproofing',
  },
  {
    img: '/Projects/IMG-20250413-WA0016.webp',
    type: 'Structural Works',
    name: 'Structural Roofing Works',
    spanClasses: 'lg:col-span-1 lg:row-span-1',
    category: 'Metal Roof',
  },
];

const filterTabs = ['All', 'Membrane Repair', 'Metal Roof', 'Waterproofing'];

export default function HomeProjects() {
  const [activeTab, setActiveTab] = useState(0);

  const filteredProjects = activeTab === 0
    ? projects
    : projects.filter(proj => proj.category === filterTabs[activeTab]);

  return (
    <section className="bg-[#FFFFFF] py-16 md:py-[100px] px-6 md:px-[60px]">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
        <div>
          <Reveal>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">
              Featured Projects
            </span>
          </Reveal>
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
            {filterTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 text-[11px] tracking-[2px] uppercase font-semibold border transition-all duration-200 cursor-pointer ${
                  activeTab === i
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
        {filteredProjects.map((proj, i) => (
          <Reveal key={proj.name} delay={(i % 3) as 0 | 1 | 2} className={`h-full ${proj.spanClasses}`}>
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
  );
}

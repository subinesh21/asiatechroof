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
  // Membrane Repair
  { img: '/Projects/Membrane Repair/IMG-20221215-WA0063.webp', type: 'Membrane Repair', name: 'Membrane Repair Project 1', spanClasses: 'lg:col-span-2 lg:row-span-2', category: 'Membrane Repair' },
  { img: '/Projects/Membrane Repair/IMG-20221215-WA0064.webp', type: 'Membrane Repair', name: 'Membrane Repair Project 2', spanClasses: 'lg:col-span-1 lg:row-span-1', category: 'Membrane Repair' },
  { img: '/Projects/Membrane Repair/IMG-20221215-WA0065.webp', type: 'Membrane Repair', name: 'Membrane Repair Project 3', spanClasses: 'lg:col-span-1 lg:row-span-1', category: 'Membrane Repair' },

  // Metal Roof
  { img: '/Projects/Metal roof/image-1.webp', type: 'Metal Roof', name: 'Metal Roof Project 1', spanClasses: 'lg:col-span-2 lg:row-span-2', category: 'Metal Roof' },
  { img: '/Projects/Metal roof/IMG-20221215-WA0127.webp', type: 'Metal Roof', name: 'Metal Roof Project 2', spanClasses: 'lg:col-span-1 lg:row-span-1', category: 'Metal Roof' },
  { img: '/Projects/Metal roof/IMG-20221215-WA0129.webp', type: 'Metal Roof', name: 'Metal Roof Project 3', spanClasses: 'lg:col-span-1 lg:row-span-1', category: 'Metal Roof' },

  // Waterproofing
  { img: '/Projects/Waterproofing/image-2.webp', type: 'Waterproofing', name: 'Waterproofing Project 1', spanClasses: 'lg:col-span-2 lg:row-span-2', category: 'Waterproofing' },
  { img: '/Projects/Waterproofing/image-3.webp', type: 'Waterproofing', name: 'Waterproofing Project 2', spanClasses: 'lg:col-span-1 lg:row-span-1', category: 'Waterproofing' },
  { img: '/Projects/Waterproofing/image-4.webp', type: 'Waterproofing', name: 'Waterproofing Project 3', spanClasses: 'lg:col-span-1 lg:row-span-1', category: 'Waterproofing' },
];

const filterTabs = ['All', 'Membrane Repair', 'Metal Roof', 'Waterproofing'];

export default function HomeProjects() {
  const [activeTab, setActiveTab] = useState(0);

  const filteredProjects = activeTab === 0
    ? [projects[0], projects[4], projects[8]]
    : projects.filter(proj => proj.category === filterTabs[activeTab]);

  return (
    <section className="bg-[#FFFFFF] py-12 md:py-[100px] px-4 md:px-[60px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-5 md:gap-6 w-full">
        <div>
          <Reveal>
            <span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-2 md:mb-4 block">
              Featured Projects
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="leading-none text-[#111827]"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              Our Work Speaks<br />For Itself
            </h2>
          </Reveal>
        </div>
        <Reveal className="w-full md:w-auto">
          <div className="flex overflow-x-auto whitespace-nowrap gap-1.5 md:gap-1 pb-2 md:pb-0 scrollbar-none w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filterTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-3.5 py-2 md:px-5 md:py-2.5 text-[9px] md:text-[11px] tracking-[1.5px] md:tracking-[2px] uppercase font-semibold border transition-all duration-200 cursor-pointer shrink-0 ${activeTab === i
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px] auto-rows-[180px] md:auto-rows-[240px] md:grid-flow-dense">
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
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 md:p-7"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}
              >
                <div>
                  <div className="text-[8px] md:text-[9px] tracking-[2px] md:tracking-[3px] uppercase text-[#C9A84C] mb-1">{proj.type}</div>
                  <div
                    className="font-bold text-[14px] md:text-[16px] text-white"
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

      <div className="text-center mt-10 md:mt-12">
        <Reveal>
          <Link
            href="/projects"
            className="bg-transparent text-[#111827] border-2 border-[rgba(240,237,230,0.3)] px-6 py-3.5 md:px-8 md:py-[15px] font-bold text-[11px] md:text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] no-underline inline-block"
            style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
          >
            View All Projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

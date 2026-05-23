'use client';

import Reveal from '@/components/Reveal';

const hours = [
  { day: 'Monday – Friday', time: '8:00am – 6:00pm' },
  { day: 'Saturday', time: '8:00am – 4:00pm' },
  { day: 'Sunday', time: 'Closed (Emergency only)', closed: true },
  { day: 'Public Holidays', time: 'Emergency only', closed: true },
];

export default function MapSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 md:py-[100px] px-4 md:px-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-center">
        <Reveal>
          <div className="h-[240px] sm:h-[300px] md:h-[360px] bg-[#F3F4F6] border border-[rgba(201,168,76,0.2)] flex flex-col items-center justify-center gap-4 relative overflow-hidden">
            <iframe 
              src="https://maps.google.com/maps?q=5%20Ang%20Mo%20Kio%20Industrial%20Park%202A,%20Singapore%20567760&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-3 md:mb-4 block font-semibold">Operating Hours</span>
          <h3
            className="text-[#111827] mb-3 md:mb-4 leading-none"
            style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(28px, 5vw, 48px)' }}
          >
            We Cover<br />All of Singapore
          </h3>
          <p className="text-[12px] md:text-[14px] text-[#111827] leading-[1.7] md:leading-[1.8] mb-5 md:mb-7">
            From Jurong to Changi, we provide island-wide roofing services for residential, commercial, and industrial properties.
          </p>
          <div className="grid grid-cols-2 gap-[1px] bg-[rgba(201,168,76,0.2)]">
            {hours.map((h, i) => (
              <div key={i} className="bg-[#F3F4F6] p-3 px-4 md:p-3.5 md:px-5">
                <div className="text-[11px] md:text-[12px] font-semibold text-[#111827] mb-0.5">{h.day}</div>
                <div className={`text-[11px] md:text-[12px] ${h.closed ? 'text-[#111827] opacity-50' : 'text-[#111827]'}`}>{h.time}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

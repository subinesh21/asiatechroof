import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.2)] pt-16 md:pt-[72px] px-6 md:px-[60px] pb-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 md:gap-[60px] mb-12 md:mb-[60px]">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 no-underline mb-5 inline-flex">
            <Image 
              src="/asialogo.png" 
              alt="Asia Tech Roofing Logo" 
              width={180} 
              height={48} 
              className="h-[48px] object-contain"
              style={{ width: 'auto' }}
            />
          </Link>
          <p className="text-[13px] text-[#111827] leading-[1.7] max-w-[260px] mb-7 mt-4">
            Trusted roofing, waterproofing &amp; leak repair specialists serving residential, commercial, and industrial properties across Singapore since 2004.
          </p>
          <div className="flex gap-3">
            {['f', '▶', '✉'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-[38px] h-[38px] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#111827] text-[13px] cursor-pointer transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] no-underline"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] mb-5">Company</h4>
          <ul className="list-none">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Our Projects', href: '/projects' },
              { label: 'Ratings', href: '/ratings' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <li key={item.href} className="mb-3">
                <Link href={item.href} className="text-[13px] text-[#111827] no-underline transition-colors duration-200 hover:text-[#111827]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] mb-5">Services</h4>
          <ul className="list-none">
            {[
              { label: 'Roof Repair', href: '/services/roof-repair' },
              { label: 'Leak Repair', href: '/services/leak-repair' },
              { label: 'Waterproofing', href: '/services/waterproofing' },
              { label: 'Structural Works', href: '/services/structural-works' },
            ].map((item) => (
              <li key={item.href} className="mb-3">
                <Link href={item.href} className="text-[13px] text-[#111827] no-underline transition-colors duration-200 hover:text-[#111827]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] mb-5">Contact</h4>
          <div className="flex flex-col mb-4">
            <span className="text-[9px] tracking-[2px] uppercase text-[#C9A84C] mb-1">Phone (Thenu)</span>
            <a href="tel:+6590545431" className="text-[13px] text-[#111827] no-underline">+65 9054 5431</a>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-[9px] tracking-[2px] uppercase text-[#C9A84C] mb-1">Phone (Palani)</span>
            <a href="tel:+6598927202" className="text-[13px] text-[#111827] no-underline">+65 9892 7202</a>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-[9px] tracking-[2px] uppercase text-[#C9A84C] mb-1">Email</span>
            <a href="mailto:sales@asiatechroof.sg" className="text-[13px] text-[#111827] no-underline">sales@asiatechroof.sg</a>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(201,168,76,0.2)] pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-[#111827] tracking-[0.5px] text-center md:text-left">© 2024 Asia Tech Roofing. All rights reserved. Singapore.</p>
        <div className="flex gap-7">
          <a href="#" className="text-[11px] text-[#111827] no-underline tracking-[0.5px] hover:text-[#C9A84C]">Privacy Policy</a>
          <a href="#" className="text-[11px] text-[#111827] no-underline tracking-[0.5px] hover:text-[#C9A84C]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

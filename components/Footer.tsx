import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#080A0D] border-t border-[rgba(201,168,76,0.2)] pt-[72px] px-[60px] pb-9">
      <div className="grid gap-[60px] mb-[60px]" style={{ gridTemplateColumns: '2fr 1fr 1fr 1.5fr' }}>
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 no-underline mb-5 inline-flex">
            <div
              className="logo-mark w-10 h-10 bg-[#C9A84C] flex items-center justify-center text-[#0D0F12] text-lg"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
            >
              AT
            </div>
            <div className="flex flex-col">
              <span
                className="text-[22px] text-[#F0EDE6] tracking-[2px]"
                style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
              >
                ASIA TECH
              </span>
              <span className="text-[9px] text-[#C9A84C] tracking-[3px] uppercase">ROOFING SPECIALIST</span>
            </div>
          </Link>
          <p className="text-[13px] text-[#8A8F9E] leading-[1.7] max-w-[260px] mb-7 mt-4">
            Trusted roofing, waterproofing &amp; leak repair specialists serving residential, commercial, and industrial properties across Singapore since 2004.
          </p>
          <div className="flex gap-3">
            {['f', '▶', '✉'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-[38px] h-[38px] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#8A8F9E] text-[13px] cursor-pointer transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] no-underline"
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
                <Link href={item.href} className="text-[13px] text-[#8A8F9E] no-underline transition-colors duration-200 hover:text-[#F0EDE6]">
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
                <Link href={item.href} className="text-[13px] text-[#8A8F9E] no-underline transition-colors duration-200 hover:text-[#F0EDE6]">
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
            <a href="tel:+6590545431" className="text-[13px] text-[#8A8F9E] no-underline">+65 9054 5431</a>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-[9px] tracking-[2px] uppercase text-[#C9A84C] mb-1">Phone (Palani)</span>
            <a href="tel:+6598927202" className="text-[13px] text-[#8A8F9E] no-underline">+65 9892 7202</a>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-[9px] tracking-[2px] uppercase text-[#C9A84C] mb-1">Email</span>
            <a href="mailto:sales@asiatechroof.sg" className="text-[13px] text-[#8A8F9E] no-underline">sales@asiatechroof.sg</a>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(201,168,76,0.2)] pt-7 flex justify-between items-center flex-wrap gap-3">
        <p className="text-[11px] text-[#8A8F9E] tracking-[0.5px]">© 2024 Asia Tech Roofing. All rights reserved. Singapore.</p>
        <div className="flex gap-7">
          <a href="#" className="text-[11px] text-[#8A8F9E] no-underline tracking-[0.5px] hover:text-[#C9A84C]">Privacy Policy</a>
          <a href="#" className="text-[11px] text-[#8A8F9E] no-underline tracking-[0.5px] hover:text-[#C9A84C]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

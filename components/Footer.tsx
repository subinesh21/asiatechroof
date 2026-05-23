import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.2)] pt-16 md:pt-[72px] px-6 md:px-[60px] pb-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 md:gap-[60px] mb-12 md:mb-[60px] pl-12 md:pl-22">
        {/* Brand */}
        <div className="pl-50">
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
          <p className="text-[15px] text-[#111827] leading-[1.7] max-w-[260px] mb-7 mt-4">
            Trusted roofing, waterproofing &amp; leak repair specialists serving residential, commercial, and industrial properties across Singapore since 2004.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/people/Asiatech-Roofing-and-Waterproofing/100089446721413/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-[38px] h-[38px] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#111827] cursor-pointer transition-all duration-200 hover:border-[#0051d4] hover:text-[#0051d4] no-underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@AsiatechRoofingnWaterproofing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-[38px] h-[38px] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#111827] cursor-pointer transition-all duration-200 hover:border-[#f61515] hover:text-[#f61515] no-underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6598927202"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-[38px] h-[38px] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#111827] cursor-pointer transition-all duration-200 hover:border-[#3ef615] hover:text-[#] no-underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[12px] tracking-[3px] uppercase text-[#C9A84C] mb-5">Company</h4>
          <ul className="list-none">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Our Projects', href: '/projects' },
              { label: 'Ratings', href: '/ratings' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <li key={item.href} className="mb-3">
                <Link href={item.href} className="text-[15px] text-[#111827] no-underline transition-colors duration-200 hover:text-[#111827]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[12px] tracking-[3px] uppercase text-[#C9A84C] mb-5">Services</h4>
          <ul className="list-none">
            {[
              { label: 'Roof Repair', href: '/services/roof-repair' },
              { label: 'Leak Repair', href: '/services/leak-repair' },
              { label: 'Waterproofing', href: '/services/waterproofing' },
              { label: 'Structural Works', href: '/services/structural-works' },
            ].map((item) => (
              <li key={item.href} className="mb-3">
                <Link href={item.href} className="text-[15px] text-[#111827] no-underline transition-colors duration-200 hover:text-[#111827]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[12px] tracking-[3px] uppercase text-[#C9A84C] mb-5">Contact</h4>
          <div className="flex flex-col mb-4">
            <span className="text-[11px] tracking-[2px] uppercase text-[#C9A84C] mb-1">Phone (Thenu)</span>
            <a href="tel:+6590545431" className="text-[15px] text-[#111827] no-underline">+65 9054 5431</a>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-[11px] tracking-[2px] uppercase text-[#C9A84C] mb-1">Phone (Palani)</span>
            <a href="tel:+6598927202" className="text-[15px] text-[#111827] no-underline">+65 9892 7202</a>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-[11px] tracking-[2px] uppercase text-[#C9A84C] mb-1">Email</span>
            <a href="mailto:sales@asiatechroof.sg" className="text-[15px] text-[#111827] no-underline">sales@asiatechroof.sg</a>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(201,168,76,0.2)] pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[13px] text-[#111827] tracking-[0.5px] text-center md:text-left">© 2024 Asia Tech Roofing. All rights reserved. Singapore.</p>
        <div className="flex gap-7">
          <a href="#" className="text-[13px] text-[#111827] no-underline tracking-[0.5px] hover:text-[#C9A84C]">Privacy Policy</a>
          <a href="#" className="text-[13px] text-[#111827] no-underline tracking-[0.5px] hover:text-[#C9A84C]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

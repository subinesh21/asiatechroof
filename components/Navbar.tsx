'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/ratings', label: 'Ratings' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-6 md:px-[60px] h-[76px] bg-[rgba(13,15,18,0.92)] backdrop-blur-[14px] border-b border-[rgba(201,168,76,0.2)]">
        <Link href="/" className="flex items-center gap-3 no-underline relative z-[110]" onClick={() => setIsOpen(false)}>
          <Image 
            src="/asialogo.png" 
            alt="Asia Tech Roofing Logo" 
            width={180} 
            height={48} 
            className="h-[40px] md:h-[48px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`no-underline text-[12px] tracking-[1.5px] uppercase font-medium transition-colors duration-200 ${
                  pathname === link.href ? 'text-[#C9A84C]' : 'text-[#8A8F9E] hover:text-[#C9A84C]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#C9A84C] text-[#0D0F12] border-none px-6 py-[11px] font-bold text-[11px] tracking-[1.5px] uppercase cursor-pointer transition-colors duration-200 hover:bg-[#E2C06A] no-underline"
          style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
        >
          Free Inspection
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#C9A84C] p-2 relative z-[110] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-[#0D0F12] flex flex-col justify-center items-center pt-16 px-6 md:hidden">
          <ul className="flex flex-col items-center gap-8 list-none p-0 w-full mb-10">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full py-2 no-underline text-[16px] tracking-[2px] uppercase font-bold transition-colors duration-200 ${
                    pathname === link.href ? 'text-[#C9A84C]' : 'text-[#F0EDE6] hover:text-[#C9A84C]'
                  }`}
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-[280px] text-center bg-[#C9A84C] text-[#0D0F12] border-none px-6 py-[15px] font-bold text-[13px] tracking-[1.5px] uppercase cursor-pointer transition-colors duration-200 hover:bg-[#E2C06A] no-underline block"
            style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
          >
            Free Inspection
          </Link>
        </div>
      )}
    </>
  );
}

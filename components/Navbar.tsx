'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/ratings', label: 'Ratings' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[60px] h-[76px] bg-[rgba(13,15,18,0.92)] backdrop-blur-[14px] border-b border-[rgba(201,168,76,0.2)]">
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div
          className="logo-mark w-10 h-10 bg-[#C9A84C] flex items-center justify-content-center font-bold text-[#0D0F12] text-lg"
          style={{ fontFamily: 'var(--font-bebas, sans-serif)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
          <span className="text-[9px] text-[#C9A84C] tracking-[3px] uppercase">
            ROOFING SPECIALIST
          </span>
        </div>
      </Link>

      <ul className="flex items-center gap-9 list-none">
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

      <Link
        href="/contact"
        className="bg-[#C9A84C] text-[#0D0F12] border-none px-6 py-[11px] font-bold text-[11px] tracking-[1.5px] uppercase cursor-pointer transition-colors duration-200 hover:bg-[#E2C06A] no-underline inline-block"
        style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
      >
        Free Inspection
      </Link>
    </nav>
  );
}

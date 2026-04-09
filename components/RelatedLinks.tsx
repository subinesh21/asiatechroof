import Link from 'next/link';

export default function RelatedLinks() {
  const landingPages = [
    { title: 'Roof Repair Singapore', href: '/roof-repair-singapore' },
    { title: 'Waterproofing Specialist', href: '/waterproofing-singapore' },
    { title: 'Emergency Leak Repair', href: '/roof-leak-repair-singapore' },
    { title: 'HDB Ceiling Leaks', href: '/hdb-roof-repair' },
    { title: 'Industrial Roofing', href: '/commercial-roofing-singapore' },
  ];

  return (
    <div className="bg-[#1C2130] p-12 border-t-4 border-[#C9A84C] mt-20">
      <h3 className="text-[#F0EDE6] text-[32px] mb-8" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>
        Our <span className="text-[#C9A84C]">Expertise</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-10">
        {landingPages.map((page) => (
          <Link 
            key={page.href} 
            href={page.href}
            className="text-[#8A8F9E] hover:text-[#C9A84C] transition-colors text-[14px] no-underline flex items-center gap-2"
          >
            <span className="text-[#C9A84C]">→</span> {page.title}
          </Link>
        ))}
        <Link href="/blog" className="text-[#8A8F9E] hover:text-[#C9A84C] transition-colors text-[14px] no-underline flex items-center gap-2">
          <span className="text-[#C9A84C]">→</span> Expert Resource Blog
        </Link>
        <Link href="/" className="text-[#8A8F9E] hover:text-[#C9A84C] transition-colors text-[14px] no-underline flex items-center gap-2">
          <span className="text-[#C9A84C]">→</span> Home
        </Link>
      </div>
    </div>
  );
}

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Leak Repair Singapore — Fast & Reliable | Asia Tech Roofing',
  description: 'Fast, reliable diagnosis and lasting repair of roof leaks in Singapore. Protect your property from water damage. 24/7 Response.',
  alternates: { canonical: '/services/leak-repair' },
  openGraph: {
    title: 'Roof Leak Repair Singapore — Fast & Reliable | Asia Tech Roofing',
    description: 'Fast, reliable diagnosis and lasting repair of roof leaks in Singapore.',
    url: '/services/leak-repair',
  },
};

const services = [
  { label: 'Roof Repair', href: '/services/roof-repair', active: false },
  { label: 'Leak Repair', href: '/services/leak-repair', active: true },
  { label: 'Waterproofing', href: '/services/waterproofing', active: false },
  { label: 'Structural Works', href: '/services/structural-works', active: false },
];

const bullets = [
  'Moisture detection & leak tracing',
  'Roof joint and seam sealing',
  'Parapet wall & gutter leak repair',
  'Expansion joint waterproofing',
  '24-hour emergency response available',
  'Flat roof and RC slab leak repair',
  'Post-repair water-tightness testing',
];

export default function LeakRepairPage() {
  return (
    <>
      <Navbar />
      <PageHero
        breadcrumb="Services / Leak Repair"
        title={<>LEAK<br />REPAIR</>}
        subtitle="Fast, accurate leak diagnosis and durable repairs — protecting your property from water damage and further deterioration."
      />

      <div className="bg-[#F9FAFB] border-b border-[rgba(201,168,76,0.2)]">
        <div className="flex px-6 md:px-[60px]">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className={`px-6 py-4 text-[11px] tracking-[2px] uppercase font-semibold no-underline transition-all duration-200 border-b-[2px] ${s.active ? 'border-[#C9A84C] text-[#C9A84C]' : 'border-transparent text-[#111827] hover:text-[#C9A84C] hover:border-[#C9A84C]'}`} style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>{s.label}</Link>
          ))}
        </div>
      </div>

      <section className="bg-[#FFFFFF] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="grid grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="h-[560px] bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80')" }}>
              <div className="absolute bottom-0 left-0 bg-[#C9A84C] text-[#111827] px-5 py-2.5 text-[10px] font-bold tracking-[2px] uppercase">Leak Repair Experts</div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="leading-none mb-[-12px]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '96px', color: 'rgba(201,168,76,0.12)' }}>02</div>
            <div className="text-[#111827] mb-5" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}>LEAK REPAIR</div>
            <p className="text-[15px] text-[#111827] leading-[1.9] mb-8">Water leaks can escalate quickly if left unaddressed. Our team provides rapid response, accurate diagnosis using moisture detection tools, and durable repairs that stop leaks from returning.</p>
            <p className="text-[15px] text-[#111827] leading-[1.9] mb-8">We trace leaks to their source — not just the visible symptoms — ensuring the repair addresses the actual problem and delivers lasting protection.</p>
            <ul className="list-none mb-9">
              {bullets.map((b, i) => (
                <li key={i} className="text-[13px] text-[#111827] py-2.5 border-b border-[rgba(201,168,76,0.2)] flex gap-3 items-start"><span className="text-[#C9A84C] flex-shrink-0">→</span>{b}</li>
              ))}
            </ul>
            <Link href="/contact" className="bg-[#C9A84C] text-[#111827] border-2 border-[#C9A84C] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] no-underline inline-block" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>Get Free Inspection</Link>
          </Reveal>
        </div>
      </section>

      <CTABanner label="Emergency?" title={<>ROOF LEAKING?<br /><span className="text-[#C9A84C]">CALL US NOW</span></>} description="We offer 24-hour emergency leak response across Singapore. Don't let water damage escalate." primaryText="Call +65 9054 5431" primaryHref="tel:+6590545431" />
      <Footer />
    </>
  );
}

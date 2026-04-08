import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Structural Works & Roof Truss Reinforcement | Asia Tech Roofing',
  description: 'Professional reinforcement, repointing, and structural restoration to extend the lifespan of your building\'s roof framework.',
  alternates: { canonical: '/services/structural-works' },
  openGraph: {
    title: 'Structural Works & Roof Truss Reinforcement | Asia Tech Roofing',
    description: 'Professional reinforcement, repointing, and structural restoration for your roof framework.',
    url: '/services/structural-works',
  },
};

const services = [
  { label: 'Roof Repair', href: '/services/roof-repair', active: false },
  { label: 'Leak Repair', href: '/services/leak-repair', active: false },
  { label: 'Waterproofing', href: '/services/waterproofing', active: false },
  { label: 'Structural Works', href: '/services/structural-works', active: true },
];

const bullets = [
  'RC beam and slab repair & strengthening',
  'Brick and masonry repointing',
  'Roof truss inspection and repair',
  'Expansion joint installation',
  'Anti-carbonation coating for concrete',
  'Spalling concrete repair',
  'Structural condition assessment reports',
];

export default function StructuralWorksPage() {
  return (
    <>
      <Navbar />
      <PageHero breadcrumb="Services / Structural Works" title={<>STRUCTURAL<br />WORKS</>} subtitle="Beyond surface repairs — we address the structural integrity of your roof framework for long-lasting protection." />
      <div className="bg-[#141820] border-b border-[rgba(201,168,76,0.2)]">
        <div className="flex px-6 md:px-[60px]">
          {services.map((s) => (<Link key={s.href} href={s.href} className={`px-6 py-4 text-[11px] tracking-[2px] uppercase font-semibold no-underline transition-all duration-200 border-b-[2px] ${s.active ? 'border-[#C9A84C] text-[#C9A84C]' : 'border-transparent text-[#8A8F9E] hover:text-[#C9A84C] hover:border-[#C9A84C]'}`} style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>{s.label}</Link>))}
        </div>
      </div>
      <section className="bg-[#0D0F12] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="grid grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="h-[560px] bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80')" }}>
              <div className="absolute bottom-0 left-0 bg-[#C9A84C] text-[#0D0F12] px-5 py-2.5 text-[10px] font-bold tracking-[2px] uppercase">Structural Works</div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="leading-none mb-[-12px]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '96px', color: 'rgba(201,168,76,0.12)' }}>04</div>
            <div className="text-[#F0EDE6] mb-5" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}>STRUCTURAL WORKS</div>
            <p className="text-[15px] text-[#8A8F9E] leading-[1.9] mb-8">Beyond surface repairs, we address the structural integrity of your roof framework. Our team carries out reinforcement and restoration work that extends the lifespan of your building's roofing system.</p>
            <ul className="list-none mb-9">
              {bullets.map((b, i) => (<li key={i} className="text-[13px] text-[#8A8F9E] py-2.5 border-b border-[rgba(201,168,76,0.2)] flex gap-3 items-start"><span className="text-[#C9A84C] flex-shrink-0">→</span>{b}</li>))}
            </ul>
            <Link href="/contact" className="bg-[#C9A84C] text-[#0D0F12] border-2 border-[#C9A84C] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] no-underline inline-block" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>Get Free Inspection</Link>
          </Reveal>
        </div>
      </section>
      <CTABanner label="Assessment" title={<>STRENGTHEN YOUR<br /><span className="text-[#C9A84C]">STRUCTURE</span></>} description="Get a structural assessment from our certified team and protect your building's long-term integrity." />
      <Footer />
    </>
  );
}

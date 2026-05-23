import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Waterproofing Singapore | Asia Tech Roofing',
  description: 'Advanced waterproofing membranes and PU coatings for flat roofs, terraces, basements, and wet areas in Singapore.',
  alternates: { canonical: '/services/waterproofing' },
  openGraph: {
    title: 'Roof Waterproofing Singapore | Asia Tech Roofing',
    description: 'Advanced waterproofing membranes and PU coatings for flat roofs and terraces in Singapore.',
    url: '/services/waterproofing',
  },
};

const services = [
  { label: 'Roof Repair', href: '/services/roof-repair', active: false },
  { label: 'Leak Repair', href: '/services/leak-repair', active: false },
  { label: 'Waterproofing', href: '/services/waterproofing', active: true },
  { label: 'Structural Works', href: '/services/structural-works', active: false },
];

const bullets = [
  'Torch-on bituminous membrane application',
  'Liquid polyurethane & acrylic coatings',
  'Crystalline waterproofing for RC slabs',
  'Terrace and balcony waterproofing',
  'Basement & wet area protection',
  'Flat roof and car park deck waterproofing',
  'Guarantee against leaks post-application',
];

export default function WaterproofingPage() {
  return (
    <>
      <Navbar />
      <PageHero breadcrumb="Services / Waterproofing" title={<>WATER<br />PROOFING</>} subtitle="Advanced waterproofing solutions that shield your property from Singapore's intense tropical rainfall." />
      <div className="bg-[#F9FAFB] border-b border-[rgba(201,168,76,0.2)]">
        <div className="flex px-6 md:px-[60px]">
          {services.map((s) => (<Link key={s.href} href={s.href} className={`px-6 py-4 text-[11px] tracking-[2px] uppercase font-semibold no-underline transition-all duration-200 border-b-[2px] ${s.active ? 'border-[#C9A84C] text-[#C9A84C]' : 'border-transparent text-[#111827] hover:text-[#C9A84C] hover:border-[#C9A84C]'}`} style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>{s.label}</Link>))}
        </div>
      </div>
      <section className="bg-[#FFFFFF] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="grid grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="h-[560px] bg-cover bg-center relative" style={{ backgroundImage: "url('/service/waterproof-service.webp')" }}>
              <div className="absolute bottom-0 left-0 bg-[#C9A84C] text-[#111827] px-5 py-2.5 text-[10px] font-bold tracking-[2px] uppercase">Waterproofing Specialists</div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="leading-none mb-[-12px]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '96px', color: 'rgba(201,168,76,0.12)' }}>03</div>
            <div className="text-[#111827] mb-5" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}>WATERPROOFING</div>
            <p className="text-[15px] text-[#111827] leading-[1.9] mb-8">Singapore's tropical rainfall demands robust waterproofing. We apply proven membrane systems and liquid coatings that create an impenetrable barrier against moisture ingress — for flat roofs, terraces, RC slabs, and more.</p>
            <ul className="list-none mb-9">
              {bullets.map((b, i) => (<li key={i} className="text-[13px] text-[#111827] py-2.5 border-b border-[rgba(201,168,76,0.2)] flex gap-3 items-start"><span className="text-[#C9A84C] flex-shrink-0">→</span>{b}</li>))}
            </ul>
            <Link href="/contact" className="bg-[#C9A84C] text-[#111827] border-2 border-[#C9A84C] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] no-underline inline-block" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>Get Free Inspection</Link>
          </Reveal>
        </div>
      </section>
      <CTABanner label="Get Started" title={<>PROTECT YOUR<br /><span className="text-[#C9A84C]">PROPERTY TODAY</span></>} description="Get a free waterproofing assessment and transparent quote from Singapore's trusted specialists." />
      <Footer />
    </>
  );
}

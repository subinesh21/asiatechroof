import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Asia Tech Roofing',
  description: 'Two decades of trusted roofing expertise, built on quality craftsmanship and lasting client relationships.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us — Asia Tech Roofing',
    description: 'Two decades of trusted roofing expertise, built on quality craftsmanship.',
    url: '/about',
  },
};

const mvvCards = [
  {
    label: 'Mission',
    letter: 'M',
    title: 'Delivering Trusted Solutions',
    text: "To deliver trusted roofing solutions with lasting impact — protecting every property through expert craftsmanship, quality materials, and reliable service that stands the test of Singapore's climate.",
  },
  {
    label: 'Vision',
    letter: 'V',
    title: 'Leading With Quality',
    text: "To lead Singapore's roofing industry through quality excellence — setting the benchmark for professional standards, innovation in methods, and enduring client trust across every project we undertake.",
  },
  {
    label: 'Values',
    letter: 'V',
    title: 'Integrity & Excellence',
    text: 'Dedicated to quality roofing and lasting customer satisfaction. We operate with full transparency, honest pricing, and a commitment to doing the job right — every time, without compromise.',
  },
];

const timeline = [
  { year: '2004', sublabel: 'The Beginning', title: 'Founded in Singapore', desc: "Asia Tech Roofing was established with a vision to raise the standard of roofing services across Singapore's residential sector.", side: 'left' },
  { year: '2009', sublabel: 'Expansion', title: 'Commercial & Industrial Expansion', desc: 'Expanded services to cover commercial offices and industrial factories, doubling the team and introducing waterproofing specialisations.', side: 'right' },
  { year: '2013', sublabel: '100 Projects', title: '100th Project Milestone', desc: "Celebrated the completion of our 100th project — a major industrial roofing overhaul in Jurong West — cementing our reputation for large-scale work.", side: 'left' },
  { year: '2019', sublabel: 'Certification', title: 'Full Team Certification Achieved', desc: 'All field technicians completed advanced certification programmes, bringing every worker up to the highest industry standards in Singapore.', side: 'right' },
  { year: '2024', sublabel: 'Today', title: '500+ Projects Completed', desc: "A landmark moment — over 500 projects completed across Singapore's residential, commercial, and industrial properties with zero major callbacks.", side: 'left' },
];

const certs = [
  { icon: '✓', name: 'BCA Licensed', body: 'Building & Construction Authority' },
  { icon: '★', name: 'bizSAFE Level 3', body: 'Workplace Safety Certified' },
  { icon: '◈', name: 'ISO Compliant', body: 'Quality Management Standards' },
  { icon: '⬡', name: 'MOM Registered', body: 'Ministry of Manpower' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        breadcrumb="About Us"
        title={<>ABOUT<br />ASIA TECH</>}
        subtitle="Two decades of trusted roofing expertise, built on quality craftsmanship and lasting client relationships."
        minHeight="60vh"
      />

      {/* MVV */}
      <section className="bg-[#141820] py-16 md:py-[100px] px-6 md:px-[60px]">
        <Reveal><span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Our Foundation</span></Reveal>
        <Reveal delay={1}>
          <h2
            className="leading-none text-[#F0EDE6] mb-[60px]"
            style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}
          >
            What Drives Us
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {mvvCards.map((card, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2}>
              <div
                className="bg-[#1C2130] p-[48px_36px] border-t-[3px] border-[#C9A84C] relative overflow-hidden"
                data-label={card.letter}
              >
                <div
                  className="absolute top-4 right-6 leading-none pointer-events-none select-none"
                  style={{
                    fontFamily: 'var(--font-bebas, sans-serif)',
                    fontSize: '80px',
                    color: 'rgba(201,168,76,0.06)',
                  }}
                >
                  {card.letter}
                </div>
                <span className="text-[9px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">{card.label}</span>
                <div
                  className="text-[36px] text-[#F0EDE6] mb-4"
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
                >
                  {card.title}
                </div>
                <p className="text-[14px] text-[#8A8F9E] leading-[1.8]">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#0D0F12] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[100px] items-center">
          <Reveal>
            <div className="relative h-[560px]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80')" }}
              />
              <div className="absolute bottom-[-24px] right-[-24px] bg-[#C9A84C] text-[#0D0F12] w-40 h-40 flex flex-col items-center justify-center text-center">
                <div className="leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '56px' }}>20+</div>
                <div className="text-[9px] font-bold tracking-[2px] uppercase mt-1">Years of<br />Excellence</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Our Story</span>
            <h2
              className="leading-none text-[#F0EDE6] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}
            >
              Built on<br />Trust &<br />Expertise
            </h2>
            <p className="text-[17px] text-[#F0EDE6] leading-[1.9] mb-5">
              Asia Tech Roofing was founded with a single purpose: to provide Singapore's properties with roofing solutions they can trust.
            </p>
            <p className="text-[15px] text-[#8A8F9E] leading-[1.9] mb-5">
              Over two decades, we've completed more than 500 projects across Singapore's residential, commercial, and industrial sectors.
            </p>
            <p className="text-[15px] text-[#8A8F9E] leading-[1.9]">
              Our team of certified workers brings not just technical skill, but genuine care for every client's property. We treat each roof as if it were our own.
            </p>
            <div className="flex flex-wrap gap-8 md:gap-10 mt-10 pt-10 border-t border-[rgba(201,168,76,0.2)]">
              {[{ num: '500+', label: 'Projects Done' }, { num: '100%', label: 'Certified Team' }, { num: '24hr', label: 'Response' }].map((s, i) => (
                <div key={i}>
                  <div className="text-[44px] text-[#C9A84C] leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{s.num}</div>
                  <div className="text-[11px] text-[#8A8F9E] tracking-[1.5px] uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[#141820] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="mb-[72px]">
          <Reveal><span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Our Journey</span></Reveal>
          <Reveal delay={1}>
            <h2 className="leading-none text-[#F0EDE6]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}>
              Milestones That<br />Define Us
            </h2>
          </Reveal>
        </div>

        <div className="relative max-w-[860px] mx-auto timeline-line">
          {timeline.map((item, i) => (
            <Reveal key={i}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] mb-[60px] relative">
                {item.side === 'left' ? (
                  <>
                    <div className="text-right pr-10">
                      <div className="font-bold text-[17px] text-[#F0EDE6] mb-2">{item.title}</div>
                      <p className="text-[13px] text-[#8A8F9E] leading-[1.7]">{item.desc}</p>
                    </div>
                    <div className="pl-10">
                      <div className="text-[48px] text-[#C9A84C] leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{item.year}</div>
                      <div className="text-[10px] tracking-[2px] uppercase text-[#8A8F9E]">{item.sublabel}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-right pr-10">
                      <div className="text-[48px] text-[#C9A84C] leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{item.year}</div>
                      <div className="text-[10px] tracking-[2px] uppercase text-[#8A8F9E]">{item.sublabel}</div>
                    </div>
                    <div className="pl-10">
                      <div className="font-bold text-[17px] text-[#F0EDE6] mb-2">{item.title}</div>
                      <p className="text-[13px] text-[#8A8F9E] leading-[1.7]">{item.desc}</p>
                    </div>
                  </>
                )}
                <div className="absolute left-1/2 top-2 w-3.5 h-3.5 bg-[#C9A84C] border-[3px] border-[#141820] rounded-full transform -translate-x-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-[#0D0F12] py-12 md:py-[80px] px-6 md:px-[60px]">
        <Reveal><span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Accreditations</span></Reveal>
        <Reveal delay={1}>
          <h2 className="leading-none text-[#F0EDE6] mb-12" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}>
            Certified &<br />Recognised
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {certs.map((cert, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2 | 3} className="h-full">
              <div className="h-full bg-[#1C2130] p-[36px_28px] flex flex-col xl:flex-row xl:items-center gap-5 border border-[rgba(201,168,76,0.2)] transition-all duration-200 hover:border-[#C9A84C]">
                <div className="w-11 h-11 min-w-[44px] border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] text-lg">
                  {cert.icon}
                </div>
                <div>
                  <div className="font-bold text-[13px] text-[#F0EDE6]">{cert.name}</div>
                  <div className="text-[11px] text-[#8A8F9E] mt-0.5">{cert.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner
        label="Work With Us"
        title={<>READY TO GET<br /><span className="text-[#C9A84C]">STARTED?</span></>}
        description="Talk to our experts and get a free, no-obligation site inspection for your property."
        primaryHref="/contact"
        primaryText="Book Free Inspection"
      />

      <Footer />
    </>
  );
}

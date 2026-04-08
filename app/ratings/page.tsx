import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Ratings & Reviews — Asia Tech Roofing',
  description: "Don't just take our word for it. Read what hundreds of satisfied clients across Singapore say about our work.",
  alternates: { canonical: '/ratings' },
  openGraph: {
    title: 'Client Ratings & Reviews — Asia Tech Roofing',
    description: "Read what hundreds of satisfied clients across Singapore say about our work.",
    url: '/ratings',
  },
};

const ratingBars = [
  { star: '5 ★', width: '92%', count: 138 },
  { star: '4 ★', width: '6%', count: 9 },
  { star: '3 ★', width: '2%', count: 3 },
  { star: '2 ★', width: '0%', count: 0 },
  { star: '1 ★', width: '0%', count: 0 },
];

const platforms = [
  { name: 'Google', rating: '4.9', stars: '★★★★★', count: '80+ Reviews', color: '#EA4335' },
  { name: 'Facebook', rating: '5.0', stars: '★★★★★', count: '40+ Reviews', color: '#1877F2' },
  { name: 'Carousell', rating: '4.8', stars: '★★★★★', count: '30+ Reviews', color: '#C9A84C' },
];

const reviews = [
  { stars: '★★★★★', text: 'Very professional team. They arrived on time, explained everything clearly, and completed the waterproofing works on schedule. No mess left behind. Will definitely use them again.', avatar: 'S', name: 'Sarah Lim', meta: 'Landed homeowner', platform: 'Google' },
  { stars: '★★★★★', text: 'Called them for an emergency roof leak during a storm. They responded within 2 hours and fixed the issue the same day. Incredible responsiveness — saved our warehouse from serious damage.', avatar: 'R', name: 'Rajan Kumar', meta: 'Warehouse Manager', platform: 'Google' },
  { stars: '★★★★★', text: "Had a tricky leak around my skylight that others couldn't fix. Asia Tech's team traced it properly and applied the right sealant system. Dry ceiling for 8 months and counting!", avatar: 'J', name: 'Jennifer Wong', meta: 'Bungalow owner', platform: 'Facebook' },
  { stars: '★★★★★', text: 'Engaged Asia Tech for a full roof replacement on our commercial unit. Competitive quote, quality materials, and the team was professional from start to finish. No disruption to our tenants.', avatar: 'D', name: 'David Chia', meta: 'Property owner', platform: 'Google' },
  { stars: '★★★★★', text: 'Thenu was very knowledgeable and gave honest advice on what needed to be done vs. what was unnecessary. I appreciated the transparency — no upselling. Great work and fair pricing.', avatar: 'A', name: 'Amanda Sng', meta: 'Homeowner', platform: 'Google' },
  { stars: '★★★★★', text: "The waterproofing on our factory rooftop has now been holding for over 2 years with zero issues. We've had heavy rainstorms and not a single drip inside. Money well spent.", avatar: 'K', name: 'Kevin Loh', meta: 'Factory owner, Tuas', platform: 'Facebook' },
];

export default function RatingsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        breadcrumb="Ratings"
        title={<>CLIENT<br />REVIEWS</>}
        subtitle="Don't just take our word for it. Read what hundreds of satisfied clients across Singapore say about our work."
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80"
      />

      {/* RATING SUMMARY */}
      <section className="bg-[#141820] py-20 px-[60px]">
        <div className="grid gap-20 items-center" style={{ gridTemplateColumns: 'auto 1fr' }}>
          <Reveal>
            <div className="text-center px-[60px] py-12 border border-[rgba(201,168,76,0.2)]">
              <div className="leading-none text-[#C9A84C]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '96px' }}>4.9</div>
              <div className="text-[#C9A84C] text-[24px] tracking-[4px] my-2">★★★★★</div>
              <div className="text-[12px] text-[#8A8F9E] tracking-[1px]">Based on 150+ reviews</div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Overall Rating</span>
            <h2 className="leading-none text-[#F0EDE6] mb-8" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}>
              Trusted by<br />Hundreds
            </h2>
            <div>
              {ratingBars.map((bar, i) => (
                <div key={i} className="flex items-center gap-4 mb-4">
                  <span className="text-[12px] text-[#8A8F9E] min-w-[40px]">{bar.star}</span>
                  <div className="flex-1 h-1.5 bg-[rgba(201,168,76,0.15)] overflow-hidden">
                    <div className="h-full bg-[#C9A84C]" style={{ width: bar.width }} />
                  </div>
                  <span className="text-[12px] text-[#8A8F9E] min-w-[32px] text-right">{bar.count}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-[#0D0F12] py-20 px-[60px]">
        <Reveal><span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Platforms</span></Reveal>
        <Reveal delay={1}>
          <h2 className="leading-none text-[#F0EDE6] mb-12" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}>
            Find Us On
          </h2>
        </Reveal>
        <div className="grid grid-cols-3 gap-[2px]">
          {platforms.map((p, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2}>
              <a
                href="#"
                className="bg-[#1C2130] p-[44px_36px] text-center block border-t-[3px] border-transparent transition-all duration-300 hover:border-[#C9A84C] no-underline cursor-pointer"
              >
                <div
                  className="text-[36px] mb-3"
                  style={{ fontFamily: 'var(--font-bebas, sans-serif)', color: p.color }}
                >
                  {p.name}
                </div>
                <div className="text-[56px] text-[#C9A84C] leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>{p.rating}</div>
                <div className="text-[#C9A84C] text-[18px] tracking-[3px] my-1.5">{p.stars}</div>
                <div className="text-[12px] text-[#8A8F9E] mb-4">{p.count}</div>
                <div className="text-[11px] tracking-[2px] uppercase text-[#C9A84C] font-semibold">Read Reviews →</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED REVIEW */}
      <section className="bg-[#0D0F12] py-20 px-[60px]">
        <Reveal>
          <div className="max-w-[800px] mx-auto text-center">
            <div className="text-[#C9A84C] text-[48px] mb-6" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>❝</div>
            <div
              className="text-[#F0EDE6] leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Asia Tech Roofing resolved a <em className="text-[#C9A84C] not-italic">persistent leak</em> that three other contractors couldn&apos;t fix. They diagnosed the root cause accurately and the repair has held through multiple heavy rainstorms. <em className="text-[#C9A84C] not-italic">Exceptional service.</em>
            </div>
            <div className="text-[#C9A84C] text-[18px] tracking-[3px] mb-8">★★★★★</div>
            <div className="inline-flex items-center gap-4">
              <div
                className="w-[52px] h-[52px] rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0D0F12] text-[22px]"
                style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
              >
                M
              </div>
              <div className="text-left">
                <strong className="text-[15px] text-[#F0EDE6] block">Michael Tan</strong>
                <span className="text-[12px] text-[#8A8F9E]">Factory Owner, Jurong West · Google Review</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* REVIEWS GRID */}
      <section className="bg-[#141820] py-[100px] px-[60px]">
        <Reveal><span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">What Clients Say</span></Reveal>
        <Reveal delay={1}>
          <h2 className="leading-none text-[#F0EDE6] mb-[60px]" style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 6vw, 72px)' }}>
            Recent Reviews
          </h2>
        </Reveal>
        <div className="grid grid-cols-3 gap-[2px]">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <div className="bg-[#1C2130] p-[36px_32px]">
                <div className="text-[#C9A84C] text-[14px] tracking-[2px] mb-4">{review.stars}</div>
                <div className="text-[32px] leading-[0.5] text-[#C9A84C] block mb-2" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>&quot;</div>
                <p className="text-[14px] text-[#8A8F9E] leading-[1.8] mb-6 italic">{review.text}</p>
                <div className="flex items-center gap-3.5 border-t border-[rgba(201,168,76,0.2)] pt-5">
                  <div
                    className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0D0F12] text-[18px]"
                    style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-[#F0EDE6]">{review.name}</div>
                    <div className="text-[11px] text-[#8A8F9E] mt-0.5">
                      {review.meta} · <span className="text-[10px] text-[#C9A84C] tracking-[1px] uppercase">{review.platform}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner
        label="Join Our Clients"
        title={<>EXPERIENCE THE<br /><span className="text-[#C9A84C]">DIFFERENCE</span></>}
        description="Join 500+ satisfied clients. Get a free inspection and see why Singapore trusts Asia Tech Roofing."
      />

      <Footer />
    </>
  );
}

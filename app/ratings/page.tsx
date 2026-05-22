import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';
import ReviewsGrid from '@/components/ReviewsGrid';
import ReviewsSkeleton from '@/components/ReviewsSkeleton';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Client Ratings & Reviews — Asia Tech Roofing',
  description: "Read what hundreds of satisfied clients across Singapore say about our work. 100% genuine Google reviews.",
  alternates: { canonical: '/ratings' },
};

async function GoogleReviewsContent() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const placeId = process.env.GOOGLE_PLACE_ID || 'PLACE_ID_HERE';
  
  let reviews: any[] = [];
  let rating = 0;
  let totalReviews = 0;

  try {
    const res = await fetch(`${baseUrl}/api/reviews`, { next: { revalidate: 86400 } });
    if (res.ok) {
      const data = await res.json();
      if (data && !data.error) {
        reviews = data.reviews || [];
        rating = data.rating || 0;
        totalReviews = data.user_ratings_total || 0;
      }
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }

  if (reviews.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:px-6 md:py-20 text-center border border-[#C9A84C]/10 bg-[#16181D]">
        <h3 className="text-[#FFFFFF] text-[20px] md:text-[24px] mb-3 md:mb-4" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>No Reviews Found</h3>
        <p className="text-[#F3F4F6]/80 text-[13px] md:text-[15px] mb-6 md:mb-8">We couldn&apos;t load any reviews at this time. Please check back later or visit us directly on Google.</p>
        <a 
          href={`https://search.google.com/local/writereview?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C9A84C] font-bold text-[12px] md:text-[14px] uppercase tracking-[2px] hover:underline"
        >
          Write a review on Google →
        </a>
      </div>
    );
  }


  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6">
      {/* TOP SUMMARY SECTION */}
      <div className="bg-[#16181D] border border-[#C9A84C]/20 p-6 md:p-16 mb-12 md:mb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.36-2.08 4.48-1.28 1.28-3.12 2.24-5.76 2.24-4.48 0-8.08-3.6-8.08-8.08s3.6-8.08 8.08-8.08c2.44 0 4.24.96 5.56 2.24l2.32-2.32C18.4 2.64 15.84 1.2 12.48 1.2 6.48 1.2 1.6 6.08 1.6 12.08s4.88 10.88 10.88 10.88c3.28 0 5.76-1.08 7.84-3.28 2.08-2.08 2.8-4.96 2.8-7.28 0-.72-.08-1.44-.16-2.08h-10.48z"/></svg>
        </div>
        
        <Reveal>
          <div className="flex flex-col items-center">
            <div className="text-[#4285F4] mb-4 md:mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.36-2.08 4.48-1.28 1.28-3.12 2.24-5.76 2.24-4.48 0-8.08-3.6-8.08-8.08s3.6-8.08 8.08-8.08c2.44 0 4.24.96 5.56 2.24l2.32-2.32C18.4 2.64 15.84 1.2 12.48 1.2 6.48 1.2 1.6 6.08 1.6 12.08s4.88 10.88 10.88 10.88c3.28 0 5.76-1.08 7.84-3.28 2.08-2.08 2.8-4.96 2.8-7.28 0-.72-.08-1.44-.16-2.08h-10.48z"/>
              </svg>
            </div>
            <h2 className="text-[#FFFFFF] text-[32px] sm:text-[48px] md:text-[64px] mb-3 md:mb-4 leading-none" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>
              OVERALL RATING: <span className="text-[#C9A84C]">{rating}</span>
            </h2>
            <div className="flex gap-1.5 text-[18px] md:text-[24px] text-[#C9A84C] mb-3 md:mb-4">
              {'★'.repeat(5)}
            </div>
            <p className="text-[#F3F4F6]/80 text-[12px] md:text-[16px] mb-6 md:mb-10 font-bold uppercase tracking-[2px]">
              Based on {totalReviews} Genuine Google Reviews
            </p>
            <a 
              href={`https://search.google.com/local/writereview?placeid=${placeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A84C] text-[#111827] px-6 py-3.5 md:px-12 md:py-5 text-[12px] md:text-[14px] font-bold tracking-[2px] uppercase hover:bg-white transition-all transform hover:scale-105"
              style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
            >
              Leave Us a Review on Google
            </a>
          </div>
        </Reveal>
      </div>

      {/* REVIEWS GRID */}
      <Reveal delay={1}>
        <ReviewsGrid reviews={reviews} />
      </Reveal>
    </div>
  );
}

export default function RatingsPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Navbar />
      
      <section className="pt-[140px] md:pt-[180px] pb-[40px] md:pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <Reveal>
            <span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-4 md:mb-6 block font-bold">Client Success Stories</span>
            <h1 
              className="text-[#111827] leading-none mb-6 md:mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              WHAT OUR <span className="text-[#C9A84C]">CLIENTS SAY</span>
            </h1>
            <p className="text-[#111827] max-w-[700px] mx-auto text-[14px] md:text-[18px] leading-relaxed mb-8 md:mb-16">
              With over 20 years of experience, we have built a reputation for excellence, reliability, and superior craftsmanship in Singapore.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <Suspense fallback={<div className="max-w-[1200px] mx-auto px-4 md:px-6"><ReviewsSkeleton /></div>}>
          <GoogleReviewsContent />
        </Suspense>
      </section>

      <CTABanner 
        label="Trusted Expertise"
        title={<>EXPERIENCE THE <span className="text-[#C9A84C]">ASIA TECH</span> QUALITY</>}
        description="Join our long list of satisfied residential and industrial clients. Schedule your free roof health check-up today."
      />
      
      <Footer />
    </div>
  );
}


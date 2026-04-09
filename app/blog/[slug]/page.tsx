import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Asia Tech Roofing Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const faqSchema = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar />
      
      <article className="bg-[#0D0F12] pt-[150px] pb-20 px-6 md:px-[60px]">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-6 font-bold">
              {post.category} · {post.date}
            </div>
            <h1 
              className="text-[#F0EDE6] leading-[1.1] mb-10"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(44px, 7vw, 76px)' }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 border-y border-[rgba(201,168,76,0.15)] py-6 mb-12">
               <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0D0F12] font-bold">
                 {post.author.charAt(0)}
               </div>
               <div>
                  <div className="text-[#F0EDE6] text-[14px] font-bold">{post.author}</div>
                  <div className="text-[#8A8F9E] text-[12px]">Specialist Contributor</div>
               </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative aspect-video mb-16">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div 
              className="blog-content prose prose-invert max-w-none text-[#F0EDE6]/80 leading-[1.8] text-[17px]
                prose-headings:text-[#F0EDE6] prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-12
                prose-h2:text-[36px] prose-h2:border-l-4 prose-h2:border-[#C9A84C] prose-h2:pl-6
                prose-strong:text-[#C9A84C] prose-a:text-[#C9A84C] prose-a:no-underline hover:prose-a:underline
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>

          {post.faqs && (
            <Reveal delay={3}>
              <div className="mt-20 border-t border-[rgba(201,168,76,0.2)] pt-20">
                <h2 className="text-[#F0EDE6] text-[44px] mb-12" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>Common Questions</h2>
                <div className="space-y-10">
                  {post.faqs.map((faq, i) => (
                    <div key={i}>
                      <h4 className="text-[#F0EDE6] text-[19px] font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>{faq.q}</h4>
                      <p className="text-[#8A8F9E] text-[16px] leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <div className="mt-20 p-10 bg-[#1C2130] border-l-4 border-[#C9A84C]">
            <h3 className="text-[#F0EDE6] text-[24px] mb-4" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>Need Expert Advice?</h3>
            <p className="text-[#8A8F9E] text-[15px] mb-8">
              Every roof is unique. If you're seeing signs of damage or leaks, don't wait for the next storm. Contact Singapore's leading roofing specialists for a free, no-obligation inspection today.
            </p>
            <div className="flex gap-4">
              <a href="tel:+6590545431" className="bg-[#C9A84C] text-[#0D0F12] px-6 py-3 font-bold uppercase text-[12px] tracking-[1px] no-underline">Call Us</a>
              <a href="https://wa.me/6590545431" className="bg-[#25D366] text-white px-6 py-3 font-bold uppercase text-[12px] tracking-[1px] no-underline">WhatsApp</a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}

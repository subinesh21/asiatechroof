import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing & Waterproofing Blog — Asia Tech Roofing',
  description: 'Expert advice, cost guides, and maintenance tips for Singaporean property owners. Learn how to protect your roof from tropical weather.',
  alternates: { canonical: '/blog' },
};

export default function BlogListingPage() {
  return (
    <>
      <Navbar />
      <PageHero 
        breadcrumb="Resources"
        title={<>EXPERT<br /><span className="text-[#C9A84C]">INSIGHTS</span></>}
        subtitle="Your complete guide to roofing and waterproofing in Singapore. Practical tips from 20+ years in the industry."
        bgImage="https://images.unsplash.com/photo-1541888941295-1e3ff2ca51cb?w=1400&q=80"
      />

      <section className="bg-[#141820] py-20 px-6 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) as 0 | 1 | 2}>
              <Link href={`/blog/${post.slug}`} className="group no-underline block h-full flex flex-col bg-[#1C2130]">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#C9A84C] text-[#0D0F12] px-3 py-1 text-[10px] uppercase font-bold tracking-[1px]">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-[12px] text-[#8A8F9E] mb-3">{post.date}</div>
                  <h3 className="text-[#F0EDE6] text-[24px] mb-4 leading-tight group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}>
                    {post.title}
                  </h3>
                  <p className="text-[#8A8F9E] text-[14px] leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto text-[#C9A84C] uppercase text-[11px] font-bold tracking-[2px]">
                    Read Article →
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

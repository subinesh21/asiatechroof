import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { blogPosts } from '@/lib/blog';

const featured = blogPosts.slice(0, 3);

export default function HomeBlog() {
  return (
    <section className="bg-[#F9FAFB] py-16 md:py-[100px] px-6 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <Reveal>
            <span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-2 md:mb-4 block">
              From Our Blog
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="leading-none text-[#111827] mb-6 md:mb-8"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(26px, 5vw, 64px)' }}
            >
              Roofing Tips &amp; Latest Updates
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <Link
              href="/blog"
              className="bg-transparent text-[#C9A84C] border-2 border-[#C9A84C] px-6 py-3 md:px-8 md:py-[15px] font-bold text-[10px] sm:text-[11px] md:text-[12px] tracking-[2px] uppercase transition-all duration-200 hover:bg-[#C9A84C] hover:text-[#FFFFFF] no-underline inline-block"
              style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
            >
              View All Posts
            </Link>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i as 0 | 1 | 2}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-[#F3F4F6] hover:border-[rgba(201,168,76,0.4)] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 no-underline h-full"
              >
                {/* Image */}
                <div className="relative h-[200px] sm:h-[220px] w-full overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 bg-[#C9A84C] text-white text-[9px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded"
                    style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <p className="text-[11px] text-[#9CA3AF] mb-2 tracking-[0.5px]">{post.date}</p>
                  <h3
                    className="font-bold text-[16px] sm:text-[18px] text-[#111827] leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-[#6B7280] leading-[1.65] flex-1 mb-5">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-[2px] uppercase text-[#C9A84C] font-bold transition-colors group-hover:text-[#111827]">
                    Read Article <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

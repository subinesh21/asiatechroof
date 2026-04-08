import Link from 'next/link';

interface CTABannerProps {
  label?: string;
  title: React.ReactNode;
  description: string;
  primaryHref?: string;
  primaryText?: string;
  showWhatsApp?: boolean;
}

export default function CTABanner({
  label = 'Get In Touch',
  title,
  description,
  primaryHref = '/contact',
  primaryText = 'Book Free Inspection',
  showWhatsApp = true,
}: CTABannerProps) {
  return (
    <section className="bg-[#141820] relative overflow-hidden py-[100px] px-[60px] text-center">
      <div className="cta-radial absolute inset-0" />
      <div className="relative z-10 max-w-[680px] mx-auto">
        <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">
          {label}
        </span>
        <h2
          className="text-[clamp(48px,6vw,80px)] mb-5 leading-none"
          style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
        >
          {title}
        </h2>
        <p className="text-[16px] text-[#8A8F9E] mb-11 leading-[1.7]">{description}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href={primaryHref}
            className="bg-[#C9A84C] text-[#0D0F12] border-2 border-[#C9A84C] px-8 py-[15px] font-bold text-[12px] tracking-[2px] uppercase cursor-pointer transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] no-underline inline-block"
            style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
          >
            {primaryText}
          </Link>
          {showWhatsApp && (
            <a
              href="https://wa.link/zekbfi"
              className="inline-flex items-center gap-2.5 bg-transparent text-[#F0EDE6] border-2 border-[rgba(240,237,230,0.2)] px-7 py-[15px] font-bold text-[12px] tracking-[2px] uppercase cursor-pointer transition-all duration-200 hover:border-[#25D366] hover:text-[#25D366] no-underline"
              style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
            >
              <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full" />
              WhatsApp Us Now
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

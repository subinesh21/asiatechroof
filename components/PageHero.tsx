interface PageHeroProps {
  breadcrumb: string;
  title: React.ReactNode;
  subtitle: string;
  bgImage?: string;
  minHeight?: string;
}

export default function PageHero({
  breadcrumb,
  title,
  subtitle,
  bgImage = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80',
  minHeight = '55vh',
}: PageHeroProps) {
  return (
    <section
      className="flex items-end px-4 md:px-[60px] py-12 md:py-[80px] pt-24 md:pt-[100px] relative overflow-hidden"
      style={{ minHeight }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13,15,18,0.8) 0%, rgba(13,15,18,0.4) 100%), url('${bgImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(to bottom, transparent 60%, #0D0F12 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[700px]">
        <div className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] mb-4 md:mb-5 flex items-center gap-2.5">
          Home <span className="text-[#8A8F9E]">/ {breadcrumb}</span>
        </div>
        <h1
          className="text-[clamp(36px,9vw,120px)] mb-4 md:mb-5 leading-none text-[#F0EDE6]"
          style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
        >
          {title}
        </h1>
        <p className="text-[14px] md:text-[18px] text-[#8A8F9E] max-w-[520px] leading-[1.7]">{subtitle}</p>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import { gsap } from "gsap";
import { ImageGallery } from "@/components/ui/image-gallery";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // Entry animations
      gsap.from(".hero-word", { y: 80, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.2 });
      gsap.from(".hero-cta", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", delay: 1 });

      // Continuous slide up animation for the background grid
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          y: "-30%",
          duration: 60,
          ease: "none",
          repeat: -1,
        });
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Sliding Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={gridRef} className="flex w-full gap-0 md:gap-8 px-0 md:px-4">
          <ImageGallery className="w-full flex-shrink-0" />
          <ImageGallery className="w-full flex-shrink-0 mt-32" />
        </div>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="container relative z-20 mx-auto flex h-full flex-col justify-center items-center px-4 lg:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="font-display text-6xl font-semibold leading-[1] text-white md:text-8xl lg:text-[110px]">
            <span className="hero-word inline-block [text-shadow:0_4px_16px_rgba(0,0,0,0.95),_0_2px_4px_rgba(0,0,0,0.9)] md:[text-shadow:none]">ROOFING BUILT TO LAST.</span>
          </h1>

          <p className="hero-cta mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.95)] md:[text-shadow:none] md:text-xl font-medium">
            Singapore&apos;s premier roofing specialist.<br />
            From complex structural works to precision leak repairs, we protect what matters most with decades of expertise.
          </p>

          <div className="hero-cta mt-12 flex flex-wrap gap-5 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-10 py-5 text-base font-bold tracking-wide shadow-xl transition-all hover:bg-[#b8963e]"
            >
              Get Free Inspection <ArrowUpRight className="h-5 w-5" />
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 border-2 border-white bg-white/10 px-10 py-5 text-white backdrop-blur-md transition-all hover:bg-white/20 font-bold"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-20 hidden flex-col items-end lg:flex">
        <div className="mt-2 h-16 w-px bg-[#C9A84C] shadow-lg" />
      </div>
    </section>
  );
}

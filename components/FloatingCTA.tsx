'use client';

import { useState, useEffect } from 'react';
import { Phone, ChevronUp } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-3 right-3 md:bottom-5 md:right-5 z-50 flex flex-col gap-1.5 md:gap-2 items-end">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`w-8 h-8 md:w-9 md:h-9 bg-[#F3F4F6] text-[#C9A84C] border border-[rgba(201,168,76,0.2)] flex items-center justify-center transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#111827] rounded-none ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        title="Scroll to Top"
      >
        <ChevronUp className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" />
      </button>

      {/* Phone Call */}
      <a
        href="tel:+6590545431"
        className="w-9 h-9 md:w-10 md:h-10 bg-[#C9A84C] text-[#111827] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 rounded-full"
        title="Call Now"
      >
        <Phone className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" />
      </a>
    </div>
  );
}


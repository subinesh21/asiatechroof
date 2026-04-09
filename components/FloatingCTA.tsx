'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-[#1C2130] text-[#C9A84C] border border-[rgba(201,168,76,0.2)] flex items-center justify-center transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#0D0F12] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp size={24} />
      </button>

      {/* Phone Call */}
      <a
        href="tel:+6590545431"
        className="w-14 h-14 bg-[#C9A84C] text-[#0D0F12] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
        title="Call Now"
      >
        <Phone size={28} />
      </a>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/6590545431?text=Hi%20Asia%20Tech%20Roofing,%20I'd%20like%20to%20enquire%20about..."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
        title="WhatsApp Us"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
}

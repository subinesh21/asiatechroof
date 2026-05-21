'use client';

import { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  style?: React.CSSProperties;
  direction?: 'up' | 'from-right';
}

export default function Reveal({ children, className = '', delay = 0, style, direction = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';
  const baseClass = direction === 'from-right' ? 'reveal-from-right' : 'reveal';

  return (
    <div ref={ref} className={`${baseClass} ${delayClass} ${className}`} style={style}>
      {children}
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | 20+ Years Roofing Experience in Singapore',
  description: 'Two decades of trusted roofing expertise, built on quality craftsmanship and lasting client relationships.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | 20+ Years Roofing Experience in Singapore',
    description: 'Two decades of trusted roofing expertise, built on quality craftsmanship.',
    url: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

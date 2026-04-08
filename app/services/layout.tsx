import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Services — Asia Tech Roofing',
  description: "Comprehensive roofing solutions for every type of property in Singapore.",
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Roofing Services — Asia Tech Roofing',
    description: "Comprehensive roofing solutions for every type of property in Singapore.",
    url: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

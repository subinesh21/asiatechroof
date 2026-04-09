import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Services Singapore | Repair, Waterproofing & More',
  description: "Comprehensive roofing solutions for every type of property in Singapore.",
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Roofing Services Singapore | Repair, Waterproofing & More',
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

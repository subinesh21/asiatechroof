import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Free Roof Inspection Singapore',
  description: "Free on-site inspections, expert advice, and transparent pricing. Contact our team today.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Free Roof Inspection Singapore',
    description: "Free on-site inspections, expert advice, and transparent pricing. Contact our team today.",
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

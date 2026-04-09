import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Projects Portfolio | Asia Tech Roofing Singapore',
  description: "500+ completed projects across Singapore's residential, commercial, and industrial sectors.",
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Roofing Projects Portfolio | Asia Tech Roofing Singapore',
    description: "500+ completed projects across Singapore's residential, commercial, and industrial sectors.",
    url: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

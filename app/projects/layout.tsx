import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects — Asia Tech Roofing',
  description: "500+ completed projects across Singapore's residential, commercial, and industrial sectors.",
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Our Projects — Asia Tech Roofing',
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

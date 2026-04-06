import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — MaxxingPeptides',
  description:
    'Get in touch with questions about peptide protocols, stack advice, or anything else. Our AI Protocol Advisor handles most questions instantly. We respond to everything else within 24–48 hours.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

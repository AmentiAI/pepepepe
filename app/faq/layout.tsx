import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peptide FAQ — Common Questions About BPC-157, GLP-1s, Reconstitution & More',
  description:
    'Answers to the 15 most common peptide questions: how to reconstitute, what bacteriostatic water is, BPC-157 vs TB-500, semaglutide vs tirzepatide, injection technique, storage, and how to start.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';
import { ProductsClient } from './ProductsClient';

export const metadata: Metadata = {
  title: 'All Peptides | PeptideProtocols',
  description:
    'Browse all 20 premium peptides — complete dosing protocols, synergy maps, and ordering from Apollo Peptide Sciences.',
};

export default function ProductsPage() {
  return <ProductsClient />;
}

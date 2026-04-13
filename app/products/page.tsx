import type { Metadata } from 'next';
import { ProductsClient } from './ProductsClient';

export const metadata: Metadata = {
  title: 'All Peptides | MaxxingPeptides',
  description:
    'Browse 139 research-grade peptides — complete dosing protocols, synergy maps, and COA-verified ordering. BPC-157, Semaglutide, Semax, Selank, FOXO4-DRI, MOTS-c, and more.',
};

export default function ProductsPage() {
  return <ProductsClient />;
}

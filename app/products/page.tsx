import type { Metadata } from 'next';
import { ProductsClient } from './ProductsClient';
import { allProducts, salePrice } from '@/lib/products';

export const metadata: Metadata = {
  title: 'All Peptides | MaxxingPeptides',
  description:
    'Browse 139 research-grade peptides — complete dosing protocols, synergy maps, and COA-verified ordering. BPC-157, Semaglutide, Semax, Selank, FOXO4-DRI, MOTS-c, and more.',
  alternates: {
    canonical: 'https://maxxingpeptide.com/products',
  },
  openGraph: {
    title: 'All Peptides — 139 Research-Grade Protocols | MaxxingPeptides',
    description:
      'Complete peptide catalog with dosing protocols, synergy maps, and COA-verified sourcing.',
    url: 'https://maxxingpeptide.com/products',
    siteName: 'MaxxingPeptides',
    type: 'website',
  },
};

export default function ProductsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'All Peptides — MaxxingPeptides Catalog',
    description:
      'Complete catalog of research-grade peptides with dosing protocols and COA-verified sourcing.',
    numberOfItems: allProducts.length,
    itemListElement: allProducts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://maxxingpeptide.com/products/${p.slug}`,
      name: p.name,
      item: {
        '@type': 'Product',
        name: p.name,
        url: `https://maxxingpeptide.com/products/${p.slug}`,
        image: p.image.startsWith('http')
          ? p.image
          : `https://maxxingpeptide.com${p.image}`,
        description: p.shortDescription,
        sku: p.slug,
        brand: { '@type': 'Brand', name: 'MaxxingPeptides' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: String(salePrice(p.price)),
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://maxxingpeptide.com' },
      { '@type': 'ListItem', position: 2, name: 'All Peptides', item: 'https://maxxingpeptide.com/products' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductsClient />
    </>
  );
}

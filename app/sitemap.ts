import { MetadataRoute } from 'next';
import { allProducts } from '@/lib/products';
import { allStacks } from '@/lib/stacks';

const BASE = 'https://maxxingpeptides.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE}/products`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE}/stacks`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE}/guide`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/contact`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${BASE}/compare`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/healing`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE}/fat-loss`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE}/performance`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE}/anti-aging`, priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  const productPages = allProducts.map(p => ({
    url: `${BASE}/products/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const stackPages = allStacks.map(s => ({
    url: `${BASE}/stacks/${s.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  const lastModified = new Date('2025-01-15');

  return [...staticPages, ...productPages, ...stackPages].map(page => ({
    ...page,
    lastModified,
  }));
}

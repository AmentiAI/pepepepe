import { MetadataRoute } from 'next';
import { allProducts } from '@/lib/products';
import { allStacks } from '@/lib/stacks';

const BASE = 'https://maxxingpeptides.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE,                                      lastModified: new Date('2026-04-06'), changeFrequency: 'daily'   as const, priority: 1.0 },
    { url: `${BASE}/products`,                        lastModified: new Date('2026-04-06'), changeFrequency: 'daily'   as const, priority: 0.9 },
    { url: `${BASE}/stacks`,                          lastModified: new Date('2026-04-05'), changeFrequency: 'weekly'  as const, priority: 0.9 },
    { url: `${BASE}/compare`,                         lastModified: new Date('2026-04-04'), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE}/healing`,                         lastModified: new Date('2026-04-03'), changeFrequency: 'weekly'  as const, priority: 0.8 },
    { url: `${BASE}/fat-loss`,                        lastModified: new Date('2026-04-03'), changeFrequency: 'weekly'  as const, priority: 0.8 },
    { url: `${BASE}/performance`,                     lastModified: new Date('2026-04-03'), changeFrequency: 'weekly'  as const, priority: 0.8 },
    { url: `${BASE}/anti-aging`,                      lastModified: new Date('2026-04-03'), changeFrequency: 'weekly'  as const, priority: 0.8 },
    { url: `${BASE}/what-are-peptides`,               lastModified: new Date('2026-04-02'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/semaglutide-protocol`,            lastModified: new Date('2026-04-02'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/peptide-injection-guide`,         lastModified: new Date('2026-04-02'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/muscle-building-peptides`,        lastModified: new Date('2026-04-02'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/longevity-peptides`,              lastModified: new Date('2026-04-02'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/growth-hormone-peptides`,         lastModified: new Date('2026-04-02'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/guide`,                           lastModified: new Date('2026-04-01'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/faq`,                             lastModified: new Date('2026-04-01'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/contact`,                         lastModified: new Date('2026-03-20'), changeFrequency: 'yearly'  as const, priority: 0.5 },
  ];

  const productPages = allProducts.map(p => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: new Date('2026-04-05'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const stackPages = allStacks.map(s => ({
    url: `${BASE}/stacks/${s.slug}`,
    lastModified: new Date('2026-04-04'),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...productPages, ...stackPages];
}

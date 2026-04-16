import { MetadataRoute } from 'next';
import { allProducts } from '@/lib/products';
import { allStacks } from '@/lib/stacks';

const BASE = 'https://maxxingpeptide.com';
const TODAY = new Date('2026-04-12');
const LAST_WEEK = new Date('2026-04-06');
const LAST_MONTH = new Date('2026-04-01');
const SITE_LAUNCH = new Date('2026-03-21');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // ── Core ──────────────────────────────────────────────────────────────
    { url: BASE,                                      lastModified: TODAY,      changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE}/products`,                        lastModified: TODAY,      changeFrequency: 'daily',   priority: 0.95 },
    { url: `${BASE}/stacks`,                          lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/compare`,                         lastModified: LAST_WEEK,  changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/guide`,                           lastModified: LAST_WEEK,  changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`,                             lastModified: LAST_MONTH, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,                         lastModified: LAST_MONTH, changeFrequency: 'yearly',  priority: 0.5 },

    // ── Goal categories ───────────────────────────────────────────────────
    { url: `${BASE}/healing`,                         lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE}/fat-loss`,                        lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE}/performance`,                     lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE}/anti-aging`,                      lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE}/cognitive`,                       lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.85 },

    // ── Looks ─────────────────────────────────────────────────────────────
    { url: `${BASE}/looks-maxxing`,                   lastModified: TODAY,      changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE}/looksmaxxing-face`,               lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/skin`,                            lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/hair`,                            lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/tanning`,                         lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/skin-collagen-guide`,             lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.8 },

    // ── Deep-dive guides (existing) ───────────────────────────────────────
    { url: `${BASE}/what-are-peptides`,               lastModified: LAST_WEEK,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/peptide-injection-guide`,         lastModified: LAST_WEEK,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/muscle-building-peptides`,        lastModified: LAST_WEEK,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/longevity-peptides`,              lastModified: LAST_WEEK,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/growth-hormone-peptides`,         lastModified: LAST_WEEK,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/semaglutide-protocol`,            lastModified: LAST_WEEK,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/peptides-for-weight-loss`,        lastModified: LAST_WEEK,  changeFrequency: 'weekly',  priority: 0.8 },

    // ── New guide pages ───────────────────────────────────────────────────
    { url: `${BASE}/bpc-157-guide`,                   lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/peptides-for-sleep`,              lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gym-stack`,                       lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/body-recomposition-guide`,        lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/peptides-for-testosterone`,       lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/peptide-beginner-guide`,          lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/tirzepatide-guide`,               lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/ipamorelin-cjc-guide`,            lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/peptide-anti-aging`,              lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cognitive-peptides-guide`,        lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.8 },

    // ── Blog ──────────────────────────────────────────────────────────────
    { url: `${BASE}/blog`,                            lastModified: TODAY,      changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/blog/peptides-vs-sarms`,          lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/are-peptides-safe`,          lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/how-long-until-peptides-work`, lastModified: TODAY,    changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/peptides-for-men-over-40`,   lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/glp1-vs-tirzepatide-vs-retatrutide`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog/peptide-stacking-101`,       lastModified: TODAY,      changeFrequency: 'monthly', priority: 0.75 },
  ];

  const productPages = allProducts.map(p => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: SITE_LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const stackPages = allStacks.map(s => ({
    url: `${BASE}/stacks/${s.slug}`,
    lastModified: LAST_WEEK,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...productPages, ...stackPages];
}

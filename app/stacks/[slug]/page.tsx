import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Clock, CheckCircle2 } from 'lucide-react';
import { allStacks, getStackBySlug } from '@/lib/stacks';
import { allProducts, salePrice, saleCost } from '@/lib/products';
import { AnimateIn } from '@/components/AnimateIn';
import { RelatedLinks } from '@/components/RelatedLinks';

export async function generateStaticParams() {
  return allStacks.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stack = getStackBySlug(slug);
  if (!stack) return {};
  return {
    title: stack.seoTitle,
    description: stack.tagline,
    alternates: {
      canonical: `https://maxxingpeptide.com/stacks/${slug}`,
    },
    openGraph: {
      title: stack.seoTitle,
      description: stack.tagline,
      url: `https://maxxingpeptide.com/stacks/${slug}`,
    },
  };
}

const difficultyColor = {
  Beginner: 'text-green-400 bg-green-500/10 border-green-500/20',
  Intermediate: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  Advanced: 'text-red-400 bg-red-500/10 border-red-500/20',
};

const goalColor: Record<string, string> = {
  healing: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'fat-loss': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  performance: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  'anti-aging': 'text-purple-400 bg-purple-500/10 border-purple-500/20',
};

export default async function StackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stack = getStackBySlug(slug);
  if (!stack) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://maxxingpeptide.com' },
      { '@type': 'ListItem', position: 2, name: 'Protocol Stacks', item: 'https://maxxingpeptide.com/stacks' },
      { '@type': 'ListItem', position: 3, name: stack.name, item: `https://maxxingpeptide.com/stacks/${stack.slug}` },
    ],
  };

  const stackProducts = stack.products
    .map(s => allProducts.find(p => p.slug === s))
    .filter(Boolean) as typeof allProducts;

  const gc = goalColor[stack.goal] ?? 'text-brand-400 bg-brand-500/10 border-brand-500/20';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Link
        href="/stacks"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        All Stacks
      </Link>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* ── Main ──────────────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-8">
          <AnimateIn>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-medium border rounded-full px-2.5 py-0.5 ${difficultyColor[stack.difficulty]}`}>
                  {stack.difficulty}
                </span>
                <span className={`text-xs font-medium border rounded-full px-2.5 py-0.5 capitalize ${gc}`}>
                  {stack.goal.replace('-', ' ')}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">{stack.name}</h1>
              <p className="text-xl text-gray-400">{stack.tagline}</p>
              <div className="flex flex-wrap gap-2 pt-4">
                {stack.highlights.map(h => (
                  <span key={h} className="text-sm text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-lg px-3 py-1.5">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Product images strip */}
          <AnimateIn delay={0.05}>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Peptides in This Stack</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stackProducts.map(p => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group flex flex-col items-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <div className="relative w-16 h-16 shrink-0">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-gray-400 group-hover:text-white transition-colors text-center leading-tight line-clamp-2">
                      {p.name}
                    </p>
                    <span className="text-xs font-bold text-brand-400">${salePrice(p.price)}</span>
                  </Link>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Description */}
          <AnimateIn delay={0.1}>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-5">About This Stack</h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                {stack.description}
              </div>
            </div>
          </AnimateIn>

          {/* Protocol */}
          <AnimateIn delay={0.15}>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-400" />
                Complete Protocol & Dosing
              </h2>
              <div className="font-mono text-sm text-gray-300 leading-loose whitespace-pre-line bg-black/30 rounded-xl p-5">
                {stack.protocol}
              </div>
            </div>
          </AnimateIn>


          {/* Individual product detail cards */}
          <AnimateIn delay={0.25}>
            <div>
              <h2 className="text-xl font-bold text-white mb-5">Peptide Breakdown</h2>
              <div className="space-y-4">
                {stackProducts.map(p => (
                  <div key={p.slug} className="bg-[#111] border border-white/5 hover:border-brand-500/20 rounded-2xl p-5 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#0d0d0d]">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-bold text-white">{p.name}</h3>
                          <div className="flex items-baseline gap-1.5 shrink-0">
                            <span className="text-lg font-black text-brand-400">${salePrice(p.price)}</span>
                            <span className="text-xs line-through text-gray-600">${p.price}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{p.shortDescription}</p>
                        <div className="flex gap-2">
                          <Link
                            href={`/products/${p.slug}`}
                            className="text-xs text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-lg px-3 py-1.5 transition-colors"
                          >
                            Full Guide
                          </Link>
                          <a
                            href={p.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="flex items-center gap-1 text-xs font-semibold bg-brand-500/20 hover:bg-brand-500/30 text-brand-300 border border-brand-500/30 rounded-lg px-3 py-1.5 transition-colors"
                          >
                            Buy Now
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* ── Sidebar ───────────────────────────────────────────────── */}
        <div className="space-y-6">
          <AnimateIn direction="left">
            <div className="bg-[#111] border border-brand-500/20 rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold text-white mb-4">Stack Summary</h3>
              <div className="space-y-3 mb-6">
                {[
                  ['Difficulty', stack.difficulty],
                  ['Goal', stack.goal.replace('-', ' ')],
                  ['Timeframe', stack.timeframe],
                  ['Peptides', `${stackProducts.length} compounds`],
                  ['Monthly cost', `$${saleCost(stack.cost).toFixed(2)}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm">
                    <span className="text-gray-500">{k}</span>
                    <span className="text-gray-300 capitalize text-right max-w-[55%]">{v}</span>
                  </div>
                ))}
              </div>

              {/* Product thumbnails in sidebar */}
              <div className="flex gap-2 flex-wrap mb-5">
                {stackProducts.map(p => (
                  <div key={p.slug} className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#0d0d0d] border border-white/10">
                    <img src={p.image} alt={p.name} className="w-full h-full object-contain p-1" />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {stackProducts.map(p => (
                  <a
                    key={p.slug}
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full flex items-center justify-between py-2.5 px-3 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/20 rounded-xl text-xs font-medium text-brand-300 transition-colors"
                  >
                    Buy {p.name.split(' ').slice(0, 3).join(' ')}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-600 text-center mt-4">
                Affiliate links — we earn a commission at no extra cost to you.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>

      <RelatedLinks pageKey={stack.slug} />
    </div>
  );
}

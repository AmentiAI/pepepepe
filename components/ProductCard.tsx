import Link from 'next/link';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

const categoryColor: Record<string, string> = {
  healing: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'fat-loss': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  performance: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  'anti-aging': 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  supplies: 'text-gray-400 bg-gray-500/10 border-gray-500/20',
};

const categoryGlow: Record<string, string> = {
  healing: 'from-emerald-950/40 to-[#0d0d0d]',
  'fat-loss': 'from-blue-950/40 to-[#0d0d0d]',
  performance: 'from-amber-950/40 to-[#0d0d0d]',
  'anti-aging': 'from-purple-950/40 to-[#0d0d0d]',
  supplies: 'from-gray-900/40 to-[#0d0d0d]',
};

export function ProductCard({ product }: ProductCardProps) {
  const catStyle = categoryColor[product.category] ?? 'text-brand-400 bg-brand-500/10 border-brand-500/20';
  const glow = categoryGlow[product.category] ?? 'from-[#0d0d0d] to-[#1a1a1a]';

  return (
    <div className="group relative bg-[#111] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden card-hover flex flex-col">
      {/* Product Image */}
      <div className={`relative h-80 bg-gradient-to-br ${glow} overflow-hidden shrink-0 flex items-center justify-center`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Popularity badge */}
        {product.popularityRank <= 6 && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-brand-500/20 border border-brand-500/30 rounded-full px-3 py-1.5">
            <TrendingUp className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-semibold text-brand-300">Popular</span>
          </div>
        )}
        {/* Category pill */}
        <div className="absolute bottom-3 left-3">
          <span className={`inline-block text-sm font-semibold border rounded-full px-3 py-1.5 capitalize ${catStyle}`}>
            {product.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        {/* Name */}
        <h3 className="font-bold text-white text-2xl leading-tight mb-3 group-hover:text-brand-300 transition-colors">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="text-base text-gray-400 leading-relaxed mb-5 line-clamp-2 flex-1">
          {product.tagline}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < product.researchRating ? 'text-brand-400 fill-brand-400' : 'text-gray-700'}`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">Quality Rating</span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.highlights.slice(0, 2).map((h) => (
            <span key={h} className="text-sm text-gray-300 bg-white/5 rounded-lg px-3 py-1.5">
              {h}
            </span>
          ))}
        </div>

        {/* Price + Actions */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-4xl font-black text-brand-400">${product.price}</span>
            <span className="text-sm text-gray-500 font-medium">Apollo Peptides</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 text-center py-3.5 text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
            >
              Full Guide
            </Link>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-1 flex items-center justify-center gap-1.5 py-3.5 text-base font-bold bg-brand-500 hover:bg-brand-400 text-black rounded-xl transition-colors"
            >
              Buy Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

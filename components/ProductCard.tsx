'use client';

import Link from 'next/link';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  large?: boolean;
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

export function ProductCard({ product, large = false }: ProductCardProps) {
  const catStyle = categoryColor[product.category] ?? 'text-brand-400 bg-brand-500/10 border-brand-500/20';
  const glow = categoryGlow[product.category] ?? 'from-[#0d0d0d] to-[#1a1a1a]';
  const imgH = large ? 'h-72 sm:h-96' : 'h-64 sm:h-80';
  const padContent = large ? 'p-5 sm:p-8' : 'p-4 sm:p-6';
  const nameSize = large ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl';
  const priceSize = large ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl';

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative bg-[#111] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden card-hover flex flex-col"
    >
      {/* Product Image */}
      <div className={`relative ${imgH} bg-gradient-to-br ${glow} overflow-hidden shrink-0 flex items-center justify-center`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Popularity badge */}
        {product.popularityRank <= 6 && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-brand-500/20 border border-brand-500/30 rounded-full px-2.5 py-1">
            <TrendingUp className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-xs font-semibold text-brand-300">Popular</span>
          </div>
        )}
        {/* Category pill */}
        <div className="absolute bottom-3 left-3">
          <span className={`inline-block text-xs font-semibold border rounded-full px-2.5 py-1 capitalize ${catStyle}`}>
            {product.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`${padContent} flex flex-col flex-1`}>
        {/* Name */}
        <h3 className={`font-bold text-white ${nameSize} leading-tight mb-2 group-hover:text-brand-300 transition-colors`}>
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.tagline}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < product.researchRating ? 'text-brand-400 fill-brand-400' : 'text-gray-700'}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">Quality Rating</span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.highlights.slice(0, 2).map((h) => (
            <span key={h} className="text-xs text-gray-300 bg-white/5 rounded-lg px-2.5 py-1">
              {h}
            </span>
          ))}
        </div>

        {/* Price + Actions */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className={`${priceSize} font-black text-brand-400`}>${product.price}</span>
            <span className="text-xs text-gray-500 font-medium">COA-Verified</span>
          </div>
          <div className="flex flex-col gap-2" onClick={(e) => e.preventDefault()}>
            <a
              href={`/go/${product.slug}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={(e) => e.stopPropagation()}
              className="w-full flex items-center justify-center gap-1.5 py-3 text-sm font-black bg-brand-500 hover:bg-brand-400 text-black rounded-xl transition-colors"
            >
              Buy Now
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="w-full text-center py-2.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
              Protocol Guide
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

'use client';

import { useState } from 'react';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';

const categories = [
  { id: 'all', label: 'All Peptides' },
  { id: 'healing', label: 'Healing' },
  { id: 'fat-loss', label: 'Fat Loss' },
  { id: 'performance', label: 'Performance' },
  { id: 'anti-aging', label: 'Anti-Aging' },
];

export function ProductsClient() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === active || p.tags.includes(active));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimateIn>
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            All <span className="gradient-text">Peptides</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            20 premium peptides — every mechanism explained, every protocol sourced, every synergy mapped.
          </p>
        </div>
      </AnimateIn>

      {/* Filter tabs */}
      <AnimateIn delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                active === cat.id
                  ? 'bg-brand-500 text-black'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </AnimateIn>

      {/* Count */}
      <p className="text-base text-gray-500 mb-6">{filtered.length} peptides</p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.04}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}

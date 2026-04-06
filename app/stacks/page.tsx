import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Layers } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';
import { allStacks } from '@/lib/stacks';
import { allProducts } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Peptide Protocol Stacks — Complete Multi-Compound Guides | MaxxingPeptides',
  description:
    'Six expert-designed peptide stacks for healing, fat loss, performance, and anti-aging. Each protocol includes synergy rationale, dosing schedules, reconstitution instructions, and Phiogen sourcing.',
};

const difficultyColor = {
  Beginner: 'text-green-400 bg-green-500/10 border-green-500/20',
  Intermediate: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  Advanced: 'text-red-400 bg-red-500/10 border-red-500/20',
};

const goalAccent: Record<string, { border: string; glow: string; label: string }> = {
  healing: { border: 'hover:border-emerald-500/30', glow: 'text-emerald-400', label: 'Healing & Recovery' },
  'fat-loss': { border: 'hover:border-blue-500/30', glow: 'text-blue-400', label: 'Fat Loss' },
  performance: { border: 'hover:border-amber-500/30', glow: 'text-amber-400', label: 'Performance' },
  'anti-aging': { border: 'hover:border-purple-500/30', glow: 'text-purple-400', label: 'Anti-Aging' },
};

export default function StacksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimateIn>
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-2 mb-6">
            <Layers className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-semibold text-brand-300">6 complete protocols</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
            Peptide Protocol <span className="gradient-text">Stacks</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Multi-compound peptide protocols engineered around synergistic mechanisms. Each stack covers the complete picture — what to take, how much, when, and why the combination outperforms any single compound.
          </p>
        </div>
      </AnimateIn>

      <div className="grid md:grid-cols-2 gap-8">
        {allStacks.map((stack, i) => {
          const stackProducts = stack.products
            .map(s => allProducts.find(p => p.slug === s))
            .filter(Boolean) as typeof allProducts;

          const acc = goalAccent[stack.goal] ?? goalAccent['healing'];

          return (
            <AnimateIn key={stack.slug} delay={i * 0.08}>
              <div className={`bg-[#111] border border-white/5 ${acc.border} rounded-2xl overflow-hidden card-hover flex flex-col h-full transition-colors`}>

                {/* Product image strip */}
                <div className="flex items-center gap-0 bg-[#0a0a0a] border-b border-white/5 px-6 py-4">
                  {stackProducts.slice(0, 5).map((p, idx) => (
                    <div
                      key={p.slug}
                      className="w-16 h-16 rounded-xl overflow-hidden bg-[#111] border border-white/5 flex items-center justify-center flex-shrink-0 -ml-3 first:ml-0"
                      style={{ zIndex: stackProducts.length - idx }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                  ))}
                  {stackProducts.length > 5 && (
                    <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-gray-500 font-bold -ml-3 flex-shrink-0">
                      +{stackProducts.length - 5}
                    </div>
                  )}
                  <div className="ml-auto text-right flex-shrink-0">
                    <p className="text-2xl sm:text-3xl font-black text-brand-400">${stack.cost.toFixed(0)}</p>
                    <p className="text-xs text-gray-600">/ protocol</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${difficultyColor[stack.difficulty]}`}>
                      {stack.difficulty}
                    </span>
                    <span className={`text-xs font-medium ${acc.glow}`}>
                      {acc.label}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-white mb-2">{stack.name}</h2>
                  <p className="text-base text-gray-400 mb-5 leading-relaxed">{stack.tagline}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {stack.highlights.map(h => (
                      <span key={h} className="text-sm text-brand-300 bg-brand-500/10 border border-brand-500/10 rounded-lg px-3 py-1.5">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Product name list */}
                  <div className="mb-6 space-y-2">
                    {stackProducts.map(p => (
                      <div key={p.slug} className="flex items-center justify-between px-4 py-2.5 bg-white/3 rounded-xl">
                        <span className="text-base font-medium text-gray-200">{p.name}</span>
                        <span className="text-sm text-gray-500 capitalize">${p.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Timeframe */}
                  <div className="flex items-center gap-2 text-base text-gray-400 mb-6">
                    <Clock className="w-4 h-4" />
                    <span>{stack.timeframe}</span>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href={`/stacks/${stack.slug}`}
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 hover:bg-brand-500/20 border border-white/10 hover:border-brand-500/30 text-white hover:text-brand-300 font-bold rounded-xl text-base transition-all"
                    >
                      View Full Protocol
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </div>
  );
}

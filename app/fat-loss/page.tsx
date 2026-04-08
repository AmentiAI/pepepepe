import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { RelatedLinks } from '@/components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Semaglutide, Tirzepatide & Retatrutide — GLP-1 Peptides for Fat Loss',
  description:
    'The complete GLP-1 class comparison: semaglutide vs tirzepatide vs retatrutide vs cagrisema. Clinical weight loss data, titration protocols, and dosing guides. Available from Apollo.',
};

const compounds = [
  {
    name: 'Semaglutide',
    mechanism: 'GLP-1 receptor agonist',
    receptors: '1',
    trialWL: '14.9%',
    halfLife: '~7 days',
    startDose: '0.25mg/wk',
    brand: 'Ozempic / Wegovy',
    level: 'Beginner',
    levelColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    bar: 'w-[60%]',
    color: 'bg-blue-400',
  },
  {
    name: 'Tirzepatide',
    mechanism: 'GLP-1 + GIP dual agonist',
    receptors: '2',
    trialWL: '22.5%',
    halfLife: '~5 days',
    startDose: '2.5mg/wk',
    brand: 'Mounjaro / Zepbound',
    level: 'Intermediate',
    levelColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    bar: 'w-[80%]',
    color: 'bg-blue-500',
  },
  {
    name: 'Retatrutide',
    mechanism: 'GLP-1 + GIP + Glucagon triple agonist',
    receptors: '3',
    trialWL: '24.2%',
    halfLife: '~6 days',
    startDose: '1mg/wk',
    brand: 'Pipeline — Eli Lilly',
    level: 'Advanced',
    levelColor: 'text-red-400 bg-red-500/10 border-red-500/20',
    bar: 'w-[90%]',
    color: 'bg-blue-600',
  },
  {
    name: 'CagriSema',
    mechanism: 'GLP-1 + Amylin dual pathway',
    receptors: '2',
    trialWL: '22.7%',
    halfLife: '~7 days',
    startDose: '0.25mg/wk',
    brand: 'Pipeline — Novo Nordisk',
    level: 'Advanced',
    levelColor: 'text-red-400 bg-red-500/10 border-red-500/20',
    bar: 'w-[82%]',
    color: 'bg-cyan-500',
  },
];

const glpMechanisms = [
  {
    signal: 'Hypothalamic GLP-1R activation',
    effect: 'Reduces appetite, food-seeking behavior, and meal size by 20–40%',
  },
  {
    signal: 'Gastric emptying delay',
    effect: 'Food moves through the stomach 30–50% slower — extending satiety windows significantly',
  },
  {
    signal: 'GIP receptor activation (Tirze/Reta)',
    effect: 'Directly targets adipose tissue and amplifies fat oxidation beyond GLP-1 signaling alone',
  },
  {
    signal: 'Glucagon receptor (Retatrutide only)',
    effect: 'Raises basal metabolic rate by 5–8% — attacks fat loss from the energy expenditure side',
  },
  {
    signal: 'Amylin pathway (CagriSema only)',
    effect: 'Separate satiety signal via calcitonin receptor — additive to GLP-1, distinct mechanism',
  },
  {
    signal: 'Insulin sensitization (all)',
    effect: 'Improves insulin sensitivity, fasting glucose, and lipid panels as secondary benefits',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Semaglutide, Tirzepatide & Retatrutide — GLP-1 Peptides for Fat Loss',
  description: 'The complete GLP-1 class comparison: semaglutide vs tirzepatide vs retatrutide vs cagrisema. Clinical weight loss data, titration protocols, and dosing guides.',
  url: 'https://maxxingpeptides.com/fat-loss',
  publisher: { '@type': 'Organization', name: 'MaxxingPeptides', url: 'https://maxxingpeptides.com' },
};

export default function FatLossPage() {
  const products = allProducts.filter(p => p.category === 'fat-loss' || p.tags.includes('fat-loss'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <AnimateIn>
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 font-bold text-sm">GLP-1 Class Peptides</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            The Clinical Weight Loss<br />
            <span className="gradient-text">Revolution, Explained.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            GLP-1 receptor agonists have produced more clinically significant fat loss than any compound in the history of obesity medicine. This is the complete guide — mechanism, compound selection, titration, and protocol design.
          </p>
        </div>
      </AnimateIn>

      {/* Compound comparison cards */}
      <AnimateIn delay={0.05}>
        <div className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">GLP-1 Class Compound Comparison</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {compounds.map(c => (
              <div key={c.name} className="bg-[#111] border border-blue-500/10 hover:border-blue-500/25 rounded-2xl p-6 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-black text-white">{c.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{c.mechanism}</p>
                  </div>
                  <span className={`text-xs font-semibold border rounded-full px-2.5 py-1 ${c.levelColor}`}>{c.level}</span>
                </div>
                {/* Weight loss bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Clinical weight loss</span>
                    <span className="text-blue-300 font-bold text-sm">{c.trialWL}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${c.bar} ${c.color}`} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/5 rounded-lg p-2.5">
                    <p className="text-gray-600 mb-0.5">Receptors</p>
                    <p className="text-white font-bold">{c.receptors}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2.5">
                    <p className="text-gray-600 mb-0.5">Half-life</p>
                    <p className="text-white font-bold">{c.halfLife}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2.5">
                    <p className="text-gray-600 mb-0.5">Start dose</p>
                    <p className="text-white font-bold">{c.startDose}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2.5">
                    <p className="text-gray-600 mb-0.5">Brand equiv.</p>
                    <p className="text-white font-bold text-xs">{c.brand}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Mechanism breakdown */}
      <AnimateIn delay={0.08}>
        <div className="bg-[#111] border border-blue-500/20 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-2">How Incretin Peptides Drive Fat Loss</h2>
          <p className="text-gray-500 text-sm mb-6">Six distinct biological signals — each targeting a different element of the fat loss equation.</p>
          <div className="space-y-4">
            {glpMechanisms.map(m => (
              <div key={m.signal} className="flex gap-4 py-3 border-b border-white/5 last:border-0">
                <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-blue-300 mb-1">{m.signal}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{m.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Titration rule */}
      <AnimateIn delay={0.1}>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-3">The Iron Rule of GLP-1 Titration</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Every GI side effect (nausea, vomiting, delayed gastric emptying discomfort) from GLP-1 class peptides is <strong className="text-white">dose-dependent and preventable</strong> with correct titration. Slow titration is not optional — it is the protocol.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { rule: 'Never skip dose steps', detail: 'Each step conditions GI receptors before you move up' },
              { rule: 'Stay at each dose 4 weeks', detail: 'Tolerance develops over 3–4 weeks at each level' },
              { rule: 'Side effects = go back down', detail: 'If nausea is persistent, return to the previous dose for 2 more weeks' },
            ].map(r => (
              <div key={r.rule} className="bg-white/5 rounded-xl p-4">
                <p className="text-blue-300 font-bold text-sm mb-1">{r.rule}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-500 text-lg">{products.length} GLP-1 class fat loss peptides</p>
          <p className="text-gray-600 text-sm mt-1">From starter semaglutide to advanced triple-agonist retatrutide</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>

      <RelatedLinks pageKey="fat-loss" />
    </div>
  );
}

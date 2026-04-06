import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { RelatedLinks } from '@/components/RelatedLinks';

export const metadata: Metadata = {
  title: 'CJC-1295, Ipamorelin & IGF-1 LR3 — GH Secretagogue Performance Peptides',
  description:
    'Growth hormone secretagogues for muscle building, body recomposition, and athletic recovery. CJC-1295/Ipamorelin amplifies natural GH pulses. IGF-1 LR3 drives muscle hyperplasia. No HPTA suppression. No PCT.',
};

const axisSteps = [
  {
    step: '01',
    molecule: 'CJC-1295',
    target: 'Hypothalamus',
    action: 'GHRH analog — binds GHRH receptors in the hypothalamus, triggering GnRH release',
    color: 'text-amber-400 border-amber-500/30',
  },
  {
    step: '02',
    molecule: 'Ipamorelin',
    target: 'Pituitary',
    action: 'Ghrelin mimetic — amplifies the GH pulse at the pituitary without cortisol or prolactin release',
    color: 'text-amber-300 border-amber-400/30',
  },
  {
    step: '03',
    molecule: 'Growth Hormone',
    target: 'Bloodstream',
    action: 'Natural pulsatile GH release — 200–300% above baseline at peak, preserving circadian rhythm',
    color: 'text-yellow-400 border-yellow-500/30',
  },
  {
    step: '04',
    molecule: 'IGF-1 (liver)',
    target: 'Liver → Muscle',
    action: 'GH drives hepatic IGF-1 production — primary downstream anabolic signal to muscle tissue',
    color: 'text-brand-400 border-brand-500/30',
  },
  {
    step: '05',
    molecule: 'IGF-1 LR3',
    target: 'Muscle Tissue',
    action: 'Modified IGF-1 with 13× longer half-life — amplifies satellite cell activation and muscle hyperplasia directly',
    color: 'text-emerald-400 border-emerald-500/30',
  },
];

const vsAnabolics = [
  { metric: 'HPTA suppression', gh: 'None', anabolic: 'Severe' },
  { metric: 'Post-cycle therapy', gh: 'Not required', anabolic: 'Mandatory' },
  { metric: 'Estrogen conversion', gh: 'None', anabolic: 'Common' },
  { metric: 'Liver strain', gh: 'None', anabolic: 'Oral anabolics only' },
  { metric: 'Blood pressure impact', gh: 'Minimal', anabolic: 'Elevated' },
  { metric: 'Natural GH maintained', gh: 'Yes (pulsatile)', anabolic: 'Often suppressed' },
];

const timingProtocol = [
  { time: 'Pre-sleep (11pm)', action: 'CJC-1295 + Ipamorelin injection', reason: 'Aligns with natural GH pulse amplitude peak during slow-wave sleep' },
  { time: 'Upon waking (fasted)', action: 'IGF-1 LR3 injection (cycle days)', reason: 'Maximum satellite cell sensitivity when insulin is low and GH still elevated' },
  { time: 'Post-workout', action: 'IGF-1 LR3 alternative timing', reason: 'Elevated nutrient partitioning — IGF-1 directs amino acids to muscle, not fat' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CJC-1295, Ipamorelin & IGF-1 LR3 — GH Secretagogue Performance Peptides',
  description: 'Growth hormone secretagogues for muscle building, body recomposition, and athletic recovery. CJC-1295/Ipamorelin amplifies natural GH pulses. IGF-1 LR3 drives muscle hyperplasia.',
  url: 'https://maxxingpeptides.com/performance',
  publisher: { '@type': 'Organization', name: 'MaxxingPeptides', url: 'https://maxxingpeptides.com' },
};

export default function PerformancePage() {
  const products = allProducts.filter(p => p.category === 'performance' || p.tags.includes('performance'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <AnimateIn>
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 font-bold text-sm">GH Secretagogue Peptides</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Stimulate Your Own<br />
            <span className="gradient-text">Growth Hormone Axis.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            CJC-1295 and Ipamorelin trigger natural, pulsatile GH release from your own pituitary — no synthetic hormones, no suppression, no post-cycle therapy. IGF-1 LR3 amplifies the downstream anabolic signal directly in muscle tissue.
          </p>
        </div>
      </AnimateIn>

      {/* GH Axis diagram */}
      <AnimateIn delay={0.05}>
        <div className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">The Complete GH/IGF-1 Axis — Step by Step</h2>
          <div className="relative space-y-3">
            {axisSteps.map((step, i) => (
              <div key={i} className={`flex gap-5 bg-[#111] border rounded-2xl p-5 ${step.color.split(' ')[1]}`}>
                <div className={`text-2xl sm:text-3xl font-black shrink-0 ${step.color.split(' ')[0]} opacity-30 w-10`}>{step.step}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className={`font-black text-lg ${step.color.split(' ')[0]}`}>{step.molecule}</span>
                    <span className="text-xs text-gray-600 bg-white/5 rounded-lg px-2 py-0.5">{step.target}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* vs anabolics */}
      <AnimateIn delay={0.08}>
        <div className="bg-[#111] border border-amber-500/20 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-2">GH Peptides vs. Anabolic Steroids</h2>
          <p className="text-gray-400 text-base mb-5">Why performance athletes favor secretagogues for sustainable long-term gains.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-gray-400 font-medium text-left pr-8">Factor</th>
                  <th className="pb-3 text-amber-400 font-bold text-left pr-8">GH Peptides</th>
                  <th className="pb-3 text-gray-500 font-medium text-left">Anabolic Steroids</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {vsAnabolics.map(row => (
                  <tr key={row.metric}>
                    <td className="py-3 pr-8 text-gray-300">{row.metric}</td>
                    <td className="py-3 pr-8 text-emerald-400 font-semibold">{row.gh}</td>
                    <td className="py-3 text-red-400">{row.anabolic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimateIn>

      {/* Timing protocol */}
      <AnimateIn delay={0.1}>
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-5">Injection Timing Protocol</h2>
          <div className="space-y-4">
            {timingProtocol.map(t => (
              <div key={t.time} className="flex gap-4 p-4 bg-white/5 rounded-xl">
                <div className="shrink-0">
                  <p className="text-amber-400 font-bold text-sm">{t.time}</p>
                </div>
                <div className="flex-1 border-l border-white/10 pl-4">
                  <p className="text-white font-semibold text-sm mb-1">{t.action}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.reason}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-4">
            Cycle structure: 12–16 weeks CJC-1295/Ipa on → 4 weeks off. IGF-1 LR3: 4–6 weeks on → 4 weeks off. No PCT required for either compound.
          </p>
        </div>
      </AnimateIn>

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-500 text-lg">{products.length} performance peptides</p>
          <p className="text-gray-600 text-sm mt-1">GH secretagogues and IGF-1 axis amplifiers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>

      <RelatedLinks pageKey="performance" />
    </div>
  );
}

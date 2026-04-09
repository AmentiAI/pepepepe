import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { RelatedLinks } from '@/components/RelatedLinks';
import { CheckCircle2, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cognitive & Nootropic Peptides — Semax, Selank & DSIP Protocol Guide',
  description:
    'The complete guide to cognitive peptides. N-Acetyl Semax upregulates BDNF for neuroplasticity. Selank reduces anxiety without sedation. DSIP promotes deep slow-wave sleep. Research-based protocols inside.',
};

const mechanisms = [
  {
    title: 'BDNF Upregulation',
    peptide: 'N-Acetyl Semax',
    color: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
    description: 'Brain-derived neurotrophic factor is the master regulator of synaptic plasticity, memory consolidation, and neuronal survival. Semax produces rapid BDNF upregulation in the prefrontal cortex and hippocampus — the same mechanism behind the cognitive benefits of exercise, but without requiring physical exertion.',
  },
  {
    title: 'GABAergic Anxiolysis',
    peptide: 'NA-Selank',
    color: 'border-violet-500/30 bg-violet-500/5 text-violet-400',
    description: 'Selank reduces anxiety through GABA-A modulation and enkephalinase inhibition — allowing endogenous enkephalins to persist longer in limbic circuits. Unlike benzodiazepines, this mechanism reduces anxiety without sedation, cognitive impairment, or dependence, and simultaneously improves memory consolidation.',
  },
  {
    title: 'Delta Sleep Architecture',
    peptide: 'DSIP',
    color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
    description: 'Delta (slow-wave) sleep is the most physically and cognitively restorative sleep stage — and the stage during which 70% of daily GH is secreted. DSIP specifically promotes slow-wave sleep without the architectural disruption of pharmaceutical sleep aids, while simultaneously amplifying nocturnal GH pulses.',
  },
  {
    title: 'Mitochondrial Electron Transport',
    peptide: 'Methylene Blue',
    color: 'border-amber-500/30 bg-amber-500/5 text-amber-400',
    description: 'Neurons are particularly dependent on oxidative phosphorylation. Methylene blue acts as an alternative electron carrier in the mitochondrial ETC, bypassing damaged complexes to restore ATP production and reduce ROS — improving cognitive energy metabolism through direct mitochondrial action.',
  },
];

const cognitiveProducts = allProducts.filter(p =>
  p.category === 'cognitive' || p.tags.includes('cognitive') || p.tags.includes('nootropic')
);

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cognitive & Nootropic Peptides — Semax, Selank & DSIP',
  description: 'Research-based guide to cognitive peptides covering BDNF, GABAergic anxiolysis, sleep architecture, and mitochondrial mechanisms.',
  url: 'https://maxxingpeptide.com/cognitive',
  publisher: { '@type': 'Organization', name: 'MaxxingPeptides', url: 'https://maxxingpeptide.com' },
};

export default function CognitivePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-bold text-sm">Cognitive & Nootropic Peptides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Optimize Your Brain.<br />
            <span className="gradient-text">With Peptide Science.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Cognitive peptides work through neurological mechanisms unavailable to conventional nootropics — directly upregulating BDNF, modulating GABAergic anxiety circuits without sedation, restoring slow-wave sleep architecture, and enhancing mitochondrial energy metabolism in neurons.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.04}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { value: 'BDNF', label: 'Primary neurotrophic factor upregulated by Semax', color: 'text-blue-400' },
            { value: '0', label: 'Dependence potential for Selank anxiolysis', color: 'text-brand-400' },
            { value: '70%', label: 'Daily GH secreted during DSIP-enhanced delta sleep', color: 'text-emerald-400' },
            { value: '130yr', label: 'Methylene blue clinical history', color: 'text-amber-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-center">
              <div className={`text-2xl sm:text-3xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.06}>
        <div className="mb-14">
          <h2 className="text-2xl font-black text-white mb-3">4 Mechanisms of Cognitive Peptide Action</h2>
          <p className="text-gray-400 text-lg mb-8">Each mechanism addresses a distinct aspect of cognitive performance — combining them creates comprehensive brain optimization.</p>
          <div className="space-y-5">
            {mechanisms.map((m, i) => (
              <AnimateIn key={m.title} delay={i * 0.04}>
                <div className={`border rounded-2xl p-7 ${m.color}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white">{m.title}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300 font-medium">{m.peptide}</span>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed">{m.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Why Cognitive Peptides Differ From Conventional Nootropics</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Semax upregulates BDNF — the same mechanism behind exercise-induced neuroplasticity, but without requiring physical exertion',
              'Selank produces anxiolysis without benzodiazepine receptor binding — no sedation, memory impairment, or dependence risk',
              'DSIP improves sleep architecture rather than forcing sedation — restorative sleep quality, not just sedation duration',
              'Methylene blue enhances brain energy production at the mitochondrial level — addressing the energy deficit underlying cognitive fatigue',
              'Cognitive peptides stack with physical performance peptides — DSIP + CJC-1295/Ipa for sleep optimization + GH enhancement',
              'No cardiovascular stimulant mechanism — cognitive enhancement through neurotrophin and neuropeptide pathways, not catecholamines',
            ].map(point => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white">Cognitive & Nootropic Peptides</h2>
          <p className="text-gray-500 text-sm mt-1">{cognitiveProducts.length} peptides for cognitive optimization — sourced from Apollo</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cognitiveProducts.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>

      <RelatedLinks pageKey="cognitive" />
    </div>
  );
}

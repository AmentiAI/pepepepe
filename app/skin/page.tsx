import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { RelatedLinks } from '@/components/RelatedLinks';
import { CheckCircle2, Droplets, Layers, Zap, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skin & Collagen Peptides — GHK-CU, SNAP-8 & BPC-157 Protocol Guide',
  description:
    'The research-based guide to peptides for skin quality and collagen synthesis. GHK-CU modulates 4,000+ genes for collagen rebuilding. SNAP-8 reduces expression lines 63%. BPC-157 drives dermal angiogenesis. Full protocols inside.',
};

const collagenMechanisms = [
  {
    step: '01',
    title: 'TGF-β1 Upregulation',
    peptide: 'GHK-CU',
    color: 'border-violet-500/30 text-violet-400 bg-violet-500/5',
    description: 'GHK-CU activates transforming growth factor beta-1 (TGF-β1) — the master regulator of extracellular matrix production. TGF-β1 signals fibroblasts to increase output of collagen Types I, III, IV, and VII, and upregulates elastin synthesis. This is the same pathway targeted by advanced dermatology interventions but activated endogenously.',
  },
  {
    step: '02',
    title: 'MMP Suppression',
    peptide: 'GHK-CU',
    color: 'border-violet-500/30 text-violet-400 bg-violet-500/5',
    description: 'Matrix metalloproteinases (MMPs) are the enzymes that degrade collagen. GHK-CU simultaneously downregulates MMP-1 (collagenase), MMP-2, and MMP-9 while upregulating their tissue inhibitors (TIMPs). This bidirectional effect — more synthesis, less degradation — creates a strongly positive net collagen balance.',
  },
  {
    step: '03',
    title: 'Dermal Angiogenesis',
    peptide: 'BPC-157',
    color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5',
    description: 'BPC-157 upregulates VEGF (vascular endothelial growth factor) and drives new capillary formation in the dermis. The dense capillary network in young, healthy skin is required to deliver oxygen, nutrients, and signaling molecules to fibroblasts. Restored dermal vascularity improves skin luminosity, color, and the healing rate of micro-damage from UV and environmental stress.',
  },
  {
    step: '04',
    title: 'Neuromuscular Relaxation',
    peptide: 'SNAP-8',
    color: 'border-blue-500/30 text-blue-400 bg-blue-500/5',
    description: 'SNAP-8 interferes with the SNARE protein complex (specifically SNAP-23) that controls acetylcholine vesicle fusion at the neuromuscular junction. Partial inhibition of this complex reduces the amplitude of muscle contraction in expression muscles — producing a Botox-like softening of dynamic lines without injection into the muscle itself. Effect is topical, dose-dependent, and reversible.',
  },
];

const clinicalData = [
  { metric: 'Fine line depth reduction', value: '32%', peptide: 'GHK-CU', timeframe: '12 weeks', source: 'J. Cosmetic Dermatology' },
  { metric: 'Skin density improvement', value: '35%', peptide: 'GHK-CU', timeframe: '12 weeks', source: 'Pickart et al.' },
  { metric: 'Expression line reduction', value: '63%', peptide: 'SNAP-8', timeframe: '8 weeks', source: 'Lipotec clinical data' },
  { metric: 'Dermal collagen thickness', value: '+40%', peptide: 'GHK-CU', timeframe: 'Cell culture', source: 'Pickart/Margolina' },
  { metric: 'Genes upregulated (repair)', value: '2,000+', peptide: 'GHK-CU', timeframe: 'Gene array data', source: 'Pickart genomics study' },
  { metric: 'Wound healing acceleration', value: '~2×', peptide: 'BPC-157', timeframe: '14 days', source: 'Wound Repair Regen' },
];

const skinPeptides = [
  { slug: 'ghk-cu', role: 'Primary collagen rebuilder', tier: '1' },
  { slug: 'snap-8', role: 'Expression line reduction', tier: '1' },
  { slug: 'bpc157-10mg', role: 'Dermal vascularity & healing', tier: '2' },
  { slug: 'epithalon-50mg', role: 'Cellular senescence reversal', tier: '2' },
];

const products = allProducts.filter(p =>
  ['ghk-cu', 'snap-8', 'bpc157-10mg', 'epithalon-50mg'].includes(p.slug)
);

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Skin & Collagen Peptides — GHK-CU, SNAP-8 & BPC-157 Protocol Guide',
  description: 'Research-based guide to peptides for skin quality and collagen synthesis covering mechanisms, clinical data, and protocols.',
  url: 'https://maxxingpeptides.com/skin',
  publisher: { '@type': 'Organization', name: 'MaxxingPeptides', url: 'https://maxxingpeptides.com' },
};

export default function SkinPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
            <Droplets className="w-4 h-4 text-violet-400" />
            <span className="text-violet-400 font-bold text-sm">Skin & Collagen Peptides</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Rebuild Collagen.<br />
            <span className="gradient-text">Reverse Skin Aging.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Skin aging is a collagen problem. From age 25, humans lose approximately 1% of dermal collagen per year — producing the fine lines, loss of firmness, and skin thinning that define visible aging. Peptides like GHK-CU target the gene expression pathways responsible for this loss and reverse them at the source.
          </p>
        </div>
      </AnimateIn>

      {/* Skin Aging Stats */}
      <AnimateIn delay={0.04}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { value: '1%', label: 'Collagen lost per year after 25', color: 'text-violet-400' },
            { value: '30%', label: 'Total collagen lost by age 50', color: 'text-violet-400' },
            { value: '4,000+', label: 'Genes modulated by GHK-CU', color: 'text-brand-400' },
            { value: '63%', label: 'Expression line reduction (SNAP-8)', color: 'text-brand-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-center">
              <div className={`text-2xl sm:text-3xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* The Collagen Cascade */}
      <AnimateIn delay={0.06}>
        <div className="mb-14">
          <h2 className="text-2xl font-black text-white mb-3">The 4 Mechanisms of Peptide Skin Optimization</h2>
          <p className="text-gray-400 text-lg mb-8">Each mechanism addresses a distinct aspect of skin aging. Combining all four produces synergistic effects greater than any single intervention.</p>
          <div className="space-y-5">
            {collagenMechanisms.map((m) => (
              <div key={m.step} className={`border rounded-2xl p-6 ${m.color}`}>
                <div className="flex items-start gap-5">
                  <span className="text-2xl sm:text-3xl font-black opacity-30 shrink-0 leading-none mt-1">{m.step}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-white font-bold text-lg">{m.title}</p>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300">{m.peptide}</span>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* GHK-CU Deep Dive */}
      <AnimateIn delay={0.08}>
        <div className="bg-[#111] border border-violet-500/20 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">GHK-CU: The Skin Peptide With Human Data</h2>
              <p className="text-gray-500 text-sm">Discovered by Dr. Loren Pickart, 1973 — 50+ years of research</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">The Biology</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                GHK-CU (glycyl-L-histidyl-L-lysine copper) is a naturally occurring human peptide found in plasma, saliva, and urine. Plasma levels are approximately 200 ng/mL at age 20 and decline to 80 ng/mL by age 60 — a 60% reduction that closely parallels the skin aging timeline.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                The mechanism is unique among cosmetic peptides: GHK-CU operates as a gene expression modulator, not a receptor agonist. By chelating copper and presenting it to specific cell receptors, GHK-CU triggers a gene expression program associated with tissue repair and youthful function — upregulating 2,000+ repair-associated genes and downregulating 2,000+ pro-inflammatory, pro-aging genes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Injectable vs. Topical</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                Topical GHK-CU penetrates the stratum corneum to reach dermal fibroblasts in the superficial dermis. Injectable GHK-CU provides systemic exposure that reaches all fibroblast populations throughout the body — not just the skin — and achieves higher local concentrations than topical application alone.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                For maximum skin benefit, the combination approach — subcutaneous injection (systemic) + topical application (localized concentration at the skin) — produces the most comprehensive coverage of dermal fibroblast populations.
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Clinical Data */}
      <AnimateIn delay={0.1}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-7 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-brand-400" />
            <h2 className="text-xl font-bold text-white">Clinical Research Summary</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Outcome Measured</th>
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Result</th>
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Peptide</th>
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Timeframe</th>
                  <th className="pb-3 text-gray-300 font-medium text-left">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {clinicalData.map(row => (
                  <tr key={row.metric}>
                    <td className="py-3 pr-4 text-white font-medium">{row.metric}</td>
                    <td className="py-3 pr-4 text-brand-400 font-bold">{row.value}</td>
                    <td className="py-3 pr-4 text-violet-300">{row.peptide}</td>
                    <td className="py-3 pr-4 text-gray-400">{row.timeframe}</td>
                    <td className="py-3 text-gray-500 text-xs">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimateIn>

      {/* Protocol */}
      <AnimateIn delay={0.12}>
        <div className="bg-[#111] border border-brand-500/20 rounded-2xl p-8 mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-5 h-5 text-brand-400" />
            <h2 className="text-xl font-bold text-white">Recommended Skin Peptide Protocol</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-brand-400 mb-3">Beginner Protocol (GHK-CU + SNAP-8)</h3>
              <ul className="space-y-2.5">
                {[
                  'GHK-CU: 1mg/day subcutaneous (abdomen), 8–12 week course',
                  'SNAP-8: 2 drops twice daily to expression line areas',
                  'Minimum commitment: 12 weeks to see full collagen effect',
                  'Reconstitute GHK-CU 50mg + 5ml bac water = 10,000mcg/ml',
                  'Can run both peptides continuously — no cycling required',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-violet-400 mb-3">Advanced Protocol (Full Stack)</h3>
              <ul className="space-y-2.5">
                {[
                  'GHK-CU: 2mg/day subcutaneous + topical application to face',
                  'SNAP-8: 3 drops twice daily, focus on deepest expression lines',
                  'BPC-157: 250mcg/day subcutaneous for dermal vascularity boost',
                  'Consider Epithalon 5mg/day for 10–20 day courses 2× per year',
                  'Full stack produces synergistic collagen + line + vascularity effects',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* CTA for Skin Renewal Stack */}
      <AnimateIn delay={0.13}>
        <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-14">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Skin Renewal Protocol — Pre-Built Stack</h3>
            <p className="text-gray-400 text-sm">GHK-CU + SNAP-8 + BPC-157 combined in one structured protocol with dosing guide.</p>
          </div>
          <Link href="/stacks/skin-renewal-protocol" className="shrink-0 px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-xl text-sm transition-colors">
            View Full Stack →
          </Link>
        </div>
      </AnimateIn>

      {/* Products */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white">Skin & Collagen Peptides</h2>
          <p className="text-gray-500 text-sm mt-1">{products.length} peptides for skin optimization — sourced from Apollo</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>

      <RelatedLinks pageKey="skin" />
    </div>
  );
}

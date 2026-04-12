import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { RelatedLinks } from '@/components/RelatedLinks';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'BPC-157, TB-500 & GHK-CU — Peptides for Injury Repair & Tissue Healing',
  description:
    'The complete guide to healing peptides. BPC-157 repairs tendons, gut, and nerves. TB-500 mobilizes stem cells systemically. GHK-CU modulates 4,000+ genes for collagen remodeling. Full protocols inside.',
};

const repairStages = [
  {
    phase: 'Phase 1 — Inflammation (Days 1–5)',
    color: 'border-red-500/30 text-red-400',
    bg: 'bg-red-500/5',
    peptide: 'BPC-157',
    action: 'Counteracts inflammatory cytokine cascade while maintaining blood clot integrity. Begins angiogenesis (new blood vessel formation) at the injury site.',
  },
  {
    phase: 'Phase 2 — Proliferation (Days 5–21)',
    color: 'border-amber-500/30 text-amber-400',
    bg: 'bg-amber-500/5',
    peptide: 'TB-500 + BPC-157',
    action: 'TB-500 recruits systemic stem cells and fibroblasts to the injury site. BPC-157 upregulates growth hormone receptors in fibroblasts, accelerating collagen deposition and matrix formation.',
  },
  {
    phase: 'Phase 3 — Remodeling (Weeks 3–12)',
    color: 'border-emerald-500/30 text-emerald-400',
    bg: 'bg-emerald-500/5',
    peptide: 'GHK-CU + TB-500',
    action: 'GHK-CU modulates 4,000+ genes to drive collagen cross-linking, matrix metalloproteinase balance, and scar tissue remodeling into functional tissue. TB-500 maintains flexibility and anti-inflammatory state.',
  },
];

const conditions = [
  { condition: 'Tendon & ligament tears', peptides: 'BPC-157 + TB-500', evidence: 'Highly Effective' },
  { condition: 'Muscle strains & tears', peptides: 'TB-500 + BPC-157', evidence: 'Highly Effective' },
  { condition: 'Bone stress fractures', peptides: 'BPC-157', evidence: 'Effective' },
  { condition: 'Leaky gut / IBD', peptides: 'BPC-157 (oral)', evidence: 'Highly Effective' },
  { condition: 'NSAID-induced gastric damage', peptides: 'BPC-157 (oral)', evidence: 'Highly Effective' },
  { condition: 'Nerve injury & neuropathy', peptides: 'BPC-157 + GHK-CU', evidence: 'Effective' },
  { condition: 'Skin wounds & collagen loss', peptides: 'GHK-CU (topical + SC)', evidence: 'Clinically Proven' },
  { condition: 'Joint inflammation', peptides: 'BPC-157 + TB-500', evidence: 'Effective' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'BPC-157, TB-500 & GHK-CU — Peptides for Injury Repair & Tissue Healing',
  description: 'The complete guide to healing peptides. BPC-157 repairs tendons, gut, and nerves. TB-500 mobilizes stem cells systemically. GHK-CU modulates 4,000+ genes for collagen remodeling.',
  url: 'https://maxxingpeptide.com/healing',
  publisher: { '@type': 'Organization', name: 'MaxxingPeptides', url: 'https://maxxingpeptide.com' },
};

export default function HealingPage() {
  const products = allProducts.filter(p => p.category === 'healing' || p.tags.includes('healing'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <AnimateIn>
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 font-bold text-sm">Healing & Recovery Peptides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Accelerate Recovery.<br />
            <span className="gradient-text">Repair at the Cellular Level.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            BPC-157, TB-500, and GHK-CU are the three most powerful tissue repair peptides available. Together they cover every phase of the wound healing cascade — from initial inflammation control through final collagen remodeling.
          </p>
        </div>
      </AnimateIn>

      {/* Repair cascade */}
      <AnimateIn delay={0.05}>
        <div className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">The Three Phases of Tissue Repair</h2>
          <div className="space-y-4">
            {repairStages.map((stage, i) => (
              <div key={i} className={`border rounded-2xl p-6 ${stage.bg} ${stage.color.split(' ')[0]}`}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <p className={`text-base font-bold mb-1 ${stage.color.split(' ')[1]}`}>{stage.phase}</p>
                    <p className="text-white font-semibold text-lg mb-2">Peptide: {stage.peptide}</p>
                    <p className="text-gray-400 text-base leading-relaxed">{stage.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Conditions table */}
      <AnimateIn delay={0.08}>
        <div className="bg-[#111] border border-emerald-500/20 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-5">Conditions & Recommended Peptides</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-base">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-gray-300 font-medium text-left pr-6">Condition</th>
                  <th className="pb-3 text-gray-300 font-medium text-left pr-6">Best Peptides</th>
                  <th className="pb-3 text-gray-300 font-medium text-left">Effectiveness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {conditions.map(row => (
                  <tr key={row.condition}>
                    <td className="py-3 pr-6 text-white font-medium">{row.condition}</td>
                    <td className="py-3 pr-6 text-emerald-300">{row.peptides}</td>
                    <td className="py-3 text-gray-400">{row.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimateIn>

      {/* What makes healing peptides different */}
      <AnimateIn delay={0.1}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-5">Why Healing Peptides Work Where Nothing Else Does</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'No hormonal suppression — safe to combine with any other protocol',
              'Target the body\'s own repair mechanisms for natural, lasting healing',
              'BPC-157: 100+ published studies, outstanding safety profile',
              'Oral route available for gut conditions — no injection required',
              'Anti-inflammatory without suppressing the healing response itself',
              'Can be injected directly near injury site for maximum localized effect',
            ].map(point => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-500 text-lg">{products.length} healing & recovery peptides</p>
          <p className="text-gray-600 text-sm mt-1">Sourced from Phiogen</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>

      <RelatedLinks pageKey="healing" />
    </div>
  );
}

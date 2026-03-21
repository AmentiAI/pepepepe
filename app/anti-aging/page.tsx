import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { RelatedLinks } from '@/components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Epithalon, GHK-CU & NAD+ — Longevity Peptides Targeting the Hallmarks of Aging',
  description:
    'Longevity peptides mapped to the molecular biology of aging. Epithalon activates telomerase. GHK-CU resets gene expression. NAD+ restores mitochondrial function. SNAP-8 blocks expression-line formation.',
};

const hallmarks = [
  {
    hallmark: 'Telomere Shortening',
    biology: 'Chromosomal caps erode with each cell division — when critical length is reached, cells enter senescence or die.',
    peptide: 'Epithalon',
    mechanism: 'Activates telomerase (TERT expression) to rebuild telomere length in lymphocytes and somatic cells.',
    data: '+24% lifespan extension demonstrated (Khavinson, 2003)',
    color: 'text-purple-400 border-purple-500/30 bg-purple-500/5',
  },
  {
    hallmark: 'Epigenetic Drift',
    biology: 'Accumulated errors in gene methylation patterns cause youthful genes to silence and inflammatory genes to activate.',
    peptide: 'GHK-CU',
    mechanism: 'Modulates 4,000+ genes — upregulating collagen, anti-inflammatory, and DNA repair genes while downregulating inflammatory pathways.',
    data: '12 pro-inflammatory cytokines downregulated; collagen synthesis +300% in fibroblasts',
    color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5',
  },
  {
    hallmark: 'NAD+ Depletion',
    biology: 'NAD+ levels drop ~50% from age 20 to 60 — deactivating sirtuins and PARP enzymes that maintain mitochondrial and genomic integrity.',
    peptide: 'NAD+',
    mechanism: 'Direct precursor replenishment restores sirtuin activity (SIRT1–7), fuels PARP-1 DNA repair, and drives mitochondrial biogenesis via PGC-1α.',
    data: 'SIRT1 activation shown to extend healthspan in multiple mammalian models',
    color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5',
  },
  {
    hallmark: 'Cellular Senescence (Skin)',
    biology: 'Repetitive facial muscle contractions degrade acetylcholine release efficiency — deepening expression lines at the neuromuscular junction.',
    peptide: 'SNAP-8',
    mechanism: 'Octapeptide mimic of SNAP-25 blocks SNARE complex vesicle docking — reducing micro-contraction frequency and expression line depth.',
    data: 'Up to 63% reduction in expression line depth in clinical application studies',
    color: 'text-rose-400 border-rose-500/30 bg-rose-500/5',
  },
];

const courseSchedule = [
  { peptide: 'Epithalon', frequency: '10–20 days, 1–2× per year', dose: '5–10mg/day IM or SC', note: 'Spring & autumn courses — short intensive burst for maximum telomerase activation' },
  { peptide: 'GHK-CU', frequency: '8–12 weeks on, 4 weeks off', dose: '1–2mg SC daily', note: 'Topical GHK-CU cream can run continuously alongside SC protocol' },
  { peptide: 'NAD+', frequency: 'Ongoing — 2–3× weekly or daily micro-dose', dose: '100–500mg SC or IV', note: 'Circadian alignment: AM fasted injection matches peak NAD+ biosynthesis window' },
  { peptide: 'SNAP-8', frequency: 'Daily topical — ongoing', dose: '2–3 drops per application', note: 'Apply to forehead, crow\'s feet, and lip lines after cleansing' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Epithalon, GHK-CU & NAD+ — Longevity Peptides Targeting the Hallmarks of Aging',
  description: 'Longevity peptides mapped to the molecular biology of aging. Epithalon activates telomerase. GHK-CU resets gene expression. NAD+ restores mitochondrial function.',
  url: 'https://peptideprotocols.com/anti-aging',
  publisher: { '@type': 'Organization', name: 'PeptideProtocols', url: 'https://peptideprotocols.com' },
};

export default function AntiAgingPage() {
  const products = allProducts.filter(p => p.category === 'anti-aging' || p.tags.includes('anti-aging'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <AnimateIn>
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-400 font-bold text-sm">Longevity & Anti-Aging Peptides</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Target the Molecular<br />
            <span className="gradient-text">Roots of Aging.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Aging is not one process — it is the accumulation of specific, identifiable molecular failures. These four peptides each address a distinct biological hallmark: telomere erosion, epigenetic drift, NAD+ depletion, and neuromuscular skin aging.
          </p>
        </div>
      </AnimateIn>

      {/* Hallmarks breakdown */}
      <AnimateIn delay={0.05}>
        <div className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">Four Hallmarks. Four Targeted Interventions.</h2>
          <div className="space-y-5">
            {hallmarks.map((h, i) => (
              <div key={i} className={`border rounded-2xl p-6 ${h.color.split(' ')[2]} ${h.color.split(' ')[1]}`}>
                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${h.color.split(' ')[0]}`}>The Problem</p>
                    <p className="text-white font-black text-lg mb-2">{h.hallmark}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{h.biology}</p>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${h.color.split(' ')[0]}`}>The Peptide</p>
                    <p className="text-white font-black text-lg mb-2">{h.peptide}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{h.mechanism}</p>
                  </div>
                  <div>
                    <p className={`text-sm font-bold uppercase tracking-wide mb-1 ${h.color.split(' ')[0]}`}>Proven Results</p>
                    <p className="text-gray-300 text-base leading-relaxed mt-2">{h.data}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Protocol schedule */}
      <AnimateIn delay={0.08}>
        <div className="bg-[#111] border border-purple-500/20 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-2">Longevity Stack — Annual Protocol Schedule</h2>
          <p className="text-gray-400 text-base mb-6">Anti-aging peptides are run in structured courses, not continuous daily use — matching the clinical protocols that produced proven results.</p>
          <div className="space-y-3">
            {courseSchedule.map(row => (
              <div key={row.peptide} className="grid sm:grid-cols-4 gap-3 p-4 bg-white/5 rounded-xl items-start">
                <div>
                  <p className="text-purple-300 font-bold">{row.peptide}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{row.dose}</p>
                </div>
                <div className="sm:col-span-1">
                  <p className="text-xs text-gray-500 mb-0.5">Frequency</p>
                  <p className="text-sm text-gray-200 font-medium">{row.frequency}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs text-gray-500 mb-0.5">Protocol note</p>
                  <p className="text-sm text-gray-400">{row.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Why courses not continuous */}
      <AnimateIn delay={0.1}>
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-3">Why Course-Based Protocols Outperform Continuous Use</h2>
          <p className="text-gray-400 leading-relaxed text-base mb-4">
            The clinical work behind Epithalon — specifically Khavinson's work from the St. Petersburg Institute of Bioregulation — used short, intensive courses rather than chronic daily administration. This mirrors the biology: telomerase activation is a signaling event, not a continuous metabolic requirement. Short courses trigger lasting downstream changes in gene expression that persist beyond the dosing window.
          </p>
          <p className="text-gray-400 leading-relaxed text-base">
            GHK-CU follows a similar pattern: 8–12 weeks of administration produces measurable changes in collagen density and gene expression that persist for months after cessation. This makes course-based dosing more cost-effective and avoids the receptor desensitization risk of chronic daily peptide use.
          </p>
        </div>
      </AnimateIn>

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-500 text-lg">{products.length} longevity & anti-aging peptides</p>
          <p className="text-gray-600 text-sm mt-1">Targeting telomere biology, gene expression, mitochondrial function, and skin aging</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>

      <RelatedLinks pageKey="anti-aging" />
    </div>
  );
}

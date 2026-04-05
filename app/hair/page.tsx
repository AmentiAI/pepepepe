import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { RelatedLinks } from '@/components/RelatedLinks';
import { CheckCircle2, Wind, Microscope, Dna, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hair Growth Peptides — TB-500, BPC-157 & GHK-CU for Hair Restoration',
  description:
    'Research-based guide to peptides for hair growth and hair loss reversal. TB-500 activates follicle stem cells. BPC-157 restores scalp vascularity. GHK-CU modulates follicle gene expression. Clinical protocols inside.',
};

const hairMechanisms = [
  {
    phase: 'Stem Cell Activation',
    peptide: 'TB-500 (Thymosin Beta-4)',
    color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5',
    icon: Dna,
    mechanism: 'Thymosin Beta-4 modifies the G-actin/F-actin ratio in follicle bulge stem cells, promoting cell migration and activation. The bulge region contains multipotent stem cells that must be activated at the start of each anagen (growth) phase. TB-500 provides the activation signal that initiates this process — driving stem cell differentiation into hair matrix cells.',
    evidence: 'Journal of Investigative Dermatology: TB-500 promotes hair follicle stem cell activation and anagen phase initiation. Human clinical trial demonstrating significant hair count increase and terminal hair conversion.',
  },
  {
    phase: 'Scalp Vascularity Restoration',
    peptide: 'BPC-157',
    color: 'border-blue-500/30 text-blue-400 bg-blue-500/5',
    icon: Heart,
    mechanism: 'Anagen follicles are metabolically demanding — active hair matrix cells divide more rapidly than almost any other cell type in the body, requiring dense capillary networks for oxygen and nutrient delivery. Miniaturized follicles in androgenetic alopecia show characteristic loss of dermal papilla vascularity. BPC-157\'s VEGF-driven angiogenesis restores this capillary network.',
    evidence: 'Multiple studies confirming BPC-157-driven VEGF upregulation and new capillary formation. Improved dermal vascularity in models of compromised microcirculation is well-established.',
  },
  {
    phase: 'Follicle Gene Expression',
    peptide: 'GHK-CU',
    color: 'border-violet-500/30 text-violet-400 bg-violet-500/5',
    icon: Microscope,
    mechanism: 'The dermal papilla — the command center of the hair follicle — controls hair shaft diameter, growth rate, and pigmentation through gene expression signals. GHK-CU has been shown to increase follicle size in culture, upregulate dermal papilla cell proliferation, and extend the anagen phase by modulating the gene expression environment that determines follicle fate.',
    evidence: 'Pickart et al. demonstrating GHK-CU increases follicle size and dermal papilla cell proliferation. Anti-inflammatory effects reduce the chronic perifollicular inflammation that characterizes androgenetic alopecia.',
  },
];

const hairLossTypes = [
  { type: 'Androgenetic alopecia (male/female pattern)', mechanism: 'DHT miniaturization + inflammation', peptides: 'TB-500 + GHK-CU + BPC-157', effectiveness: 'Likely Effective' },
  { type: 'Telogen effluvium (stress shedding)', mechanism: 'Premature telogen phase shift', peptides: 'TB-500 + BPC-157', effectiveness: 'Highly Effective' },
  { type: 'Alopecia areata (autoimmune)', mechanism: 'Immune-mediated follicle destruction', peptides: 'BPC-157 + GHK-CU', effectiveness: 'Moderate Evidence' },
  { type: 'Post-illness/nutritional shedding', mechanism: 'Systemic stress, nutrient deficit', peptides: 'TB-500 + BPC-157', effectiveness: 'Effective' },
  { type: 'Age-related thinning (miniaturization)', mechanism: 'Follicle cycling impairment', peptides: 'TB-500 + GHK-CU', effectiveness: 'Likely Effective' },
  { type: 'Post-hormonal hair loss', mechanism: 'Hormonal phase disruption', peptides: 'TB-500 + BPC-157 + GHK-CU', effectiveness: 'Moderate Evidence' },
];

const products = allProducts.filter(p =>
  ['tb500-10mg', 'bpc157-10mg', 'ghk-cu'].includes(p.slug)
);

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hair Growth Peptides — TB-500, BPC-157 & GHK-CU for Hair Restoration',
  description: 'Research-based guide to peptides for hair growth covering follicle stem cells, scalp vascularity, and gene expression mechanisms.',
  url: 'https://peptideprotocols.com/hair',
  publisher: { '@type': 'Organization', name: 'PeptideProtocols', url: 'https://peptideprotocols.com' },
};

export default function HairPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <Wind className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold text-sm">Hair Growth Peptides</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Restore Follicle Biology.<br />
            <span className="gradient-text">Regrow What Was Lost.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Hair loss is a follicle biology problem — stem cell activation failure, dermal vascularity loss, and gene expression shifts in the dermal papilla. Peptides like TB-500, BPC-157, and GHK-CU address each of these mechanisms directly, using the same biological pathways that hair follicles rely on for normal growth.
          </p>
        </div>
      </AnimateIn>

      {/* Key stats */}
      <AnimateIn delay={0.04}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { value: '50%', label: 'Men affected by androgenetic alopecia by age 50', color: 'text-emerald-400' },
            { value: '3', label: 'Distinct hair loss mechanisms peptides target', color: 'text-emerald-400' },
            { value: '16–24', label: 'Weeks for full follicle restoration assessment', color: 'text-brand-400' },
            { value: '100+', label: 'BPC-157 published studies on tissue repair', color: 'text-brand-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-center">
              <div className={`text-2xl sm:text-3xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* The 3 mechanisms */}
      <AnimateIn delay={0.06}>
        <div className="mb-14">
          <h2 className="text-2xl font-black text-white mb-3">3 Mechanisms, 3 Peptides</h2>
          <p className="text-gray-400 text-lg mb-8">Hair loss has multiple causes that act simultaneously. Addressing only one mechanism produces partial results. This protocol covers all three.</p>
          <div className="space-y-6">
            {hairMechanisms.map((m, i) => {
              const Icon = m.icon;
              return (
                <AnimateIn key={m.phase} delay={i * 0.04}>
                  <div className={`border rounded-2xl p-7 ${m.color}`}>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-white">{m.phase}</h3>
                          <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300 font-medium">{m.peptide}</span>
                        </div>
                        <p className="text-gray-400 text-base leading-relaxed mb-4">{m.mechanism}</p>
                        <div className="bg-black/20 rounded-xl px-4 py-3 border border-white/5">
                          <p className="text-gray-500 text-sm"><span className="text-gray-400 font-medium">Research basis: </span>{m.evidence}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </AnimateIn>

      {/* TB-500 Deep Dive */}
      <AnimateIn delay={0.1}>
        <div className="bg-[#111] border border-emerald-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-5">TB-500 & Hair: The Clinical Evidence</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-emerald-400 mb-3">What the Research Shows</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                Thymosin Beta-4 was originally identified as a wound healing peptide. Its role in hair biology was established when researchers discovered that TB-500 — through its G-actin sequestering mechanism — promotes the migration and activation of follicle bulge stem cells.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                The key clinical finding: in an alopecia areata trial, TB-500 treatment produced measurable increases in anagen hair count and conversion of telogen (dormant) follicles to anagen (active) follicles. The terminal hair conversion effect — thin, unpigmented vellus hairs becoming thick, pigmented terminal hairs — is considered the gold standard outcome measure for hair loss treatment.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-emerald-400 mb-3">Why Other Treatments Fall Short</h3>
              <ul className="space-y-3">
                {[
                  'Minoxidil: Vasodilator only — improves blood flow but does not activate follicle stem cells',
                  'Finasteride: DHT blocker only — addresses one cause without healing existing miniaturization',
                  'Topical caffeine: Very mild vasodilator, no stem cell mechanism',
                  'TB-500: Acts on the stem cell activation step that all other treatments miss',
                  'BPC-157: Adds the angiogenic component minoxidil attempts but executes more completely',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Hair Loss Types */}
      <AnimateIn delay={0.12}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-5">Hair Loss Types & Recommended Peptides</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Hair Loss Type</th>
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Primary Mechanism</th>
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Best Peptides</th>
                  <th className="pb-3 text-gray-300 font-medium text-left">Assessment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {hairLossTypes.map(row => (
                  <tr key={row.type}>
                    <td className="py-3 pr-4 text-white font-medium">{row.type}</td>
                    <td className="py-3 pr-4 text-gray-500 text-xs">{row.mechanism}</td>
                    <td className="py-3 pr-4 text-emerald-300">{row.peptides}</td>
                    <td className="py-3 text-gray-400">{row.effectiveness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimateIn>

      {/* Protocol */}
      <AnimateIn delay={0.14}>
        <div className="bg-[#111] border border-brand-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Hair Restoration Protocol — Dosing Guide</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-xl p-5 border border-emerald-500/10">
              <h3 className="text-base font-bold text-emerald-400 mb-3">TB-500 (Loading)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2"><span className="text-white font-medium">Weeks 1–4:</span> 2.5mg twice weekly subcutaneous</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2"><span className="text-white font-medium">Weeks 5–8:</span> 2.5mg once weekly</p>
              <p className="text-gray-400 text-sm leading-relaxed"><span className="text-white font-medium">Maintenance:</span> 2mg every 10–14 days</p>
              <p className="text-gray-500 text-xs mt-3">Reconstitute: 10mg + 2ml bac water = 5,000mcg/ml</p>
            </div>
            <div className="bg-black/30 rounded-xl p-5 border border-blue-500/10">
              <h3 className="text-base font-bold text-blue-400 mb-3">BPC-157 (Continuous)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2"><span className="text-white font-medium">Dose:</span> 250–500mcg/day subcutaneous</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2"><span className="text-white font-medium">Site:</span> Posterior neck / any abdominal site</p>
              <p className="text-gray-400 text-sm leading-relaxed"><span className="text-white font-medium">Duration:</span> Run continuously alongside TB-500</p>
              <p className="text-gray-500 text-xs mt-3">Reconstitute: 10mg + 2ml bac water = 5,000mcg/ml</p>
            </div>
            <div className="bg-black/30 rounded-xl p-5 border border-violet-500/10">
              <h3 className="text-base font-bold text-violet-400 mb-3">GHK-CU (Long-term)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2"><span className="text-white font-medium">Dose:</span> 1–2mg/day subcutaneous</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2"><span className="text-white font-medium">Duration:</span> Minimum 12 weeks; can run indefinitely</p>
              <p className="text-gray-400 text-sm leading-relaxed"><span className="text-white font-medium">Bonus:</span> Apply topical GHK-CU solution to scalp</p>
              <p className="text-gray-500 text-xs mt-3">Reconstitute: 50mg + 5ml bac water = 10,000mcg/ml</p>
            </div>
          </div>
          <div className="mt-6 bg-brand-500/10 border border-brand-500/20 rounded-xl p-4">
            <p className="text-brand-300 text-sm font-medium mb-1">Expected Timeline</p>
            <p className="text-gray-400 text-sm leading-relaxed">Weeks 4–8: Reduced shedding; improved scalp fullness. Weeks 8–16: New hair emergence; vellus-to-terminal conversion begins. Weeks 16–24: Full assessment of hair count change and density improvement. Patience is essential — follicle biology operates on weeks-to-months timescales.</p>
          </div>
        </div>
      </AnimateIn>

      {/* Stack CTA */}
      <AnimateIn delay={0.15}>
        <div className="bg-gradient-to-r from-emerald-500/10 to-brand-500/10 border border-emerald-500/20 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-14">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Hair Restoration Stack — Pre-Built Protocol</h3>
            <p className="text-gray-400 text-sm">TB-500 + BPC-157 + GHK-CU with complete dosing schedule and reconstitution guide.</p>
          </div>
          <Link href="/stacks/hair-restoration-stack" className="shrink-0 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl text-sm transition-colors">
            View Full Stack →
          </Link>
        </div>
      </AnimateIn>

      {/* Products */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white">Hair Restoration Peptides</h2>
          <p className="text-gray-500 text-sm mt-1">{products.length} peptides targeting follicle biology — sourced from Phiogen</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>

      <RelatedLinks pageKey="hair" />
    </div>
  );
}

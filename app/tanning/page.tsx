import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { RelatedLinks } from '@/components/RelatedLinks';
import { CheckCircle2, Sun, AlertTriangle, FlaskConical, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tanning Peptides — Melanotan II & PT-141 Protocol Guide | Melanocortin Science',
  description:
    'The complete research guide to tanning peptides. Melanotan II drives eumelanin synthesis via MC1R activation. PT-141 offers better tolerability with milder tanning. University of Arizona clinical data. Full protocols inside.',
};

const comparisonData = [
  { property: 'Primary receptor targets', mt2: 'MC1R, MC3R, MC4R, MC5R', pt141: 'MC3R, MC4R (primary)', winner: 'MT-II' },
  { property: 'Tanning potency', mt2: 'High — strong MC1R agonism', pt141: 'Moderate — lower MC1R affinity', winner: 'MT-II' },
  { property: 'Nausea profile', mt2: 'Moderate–High (dose dependent)', pt141: 'Mild–Moderate (significantly less)', winner: 'PT-141' },
  { property: 'Half-life', mt2: '~1 hour (frequent redosing)', pt141: '~2.7 hours (more sustained)', winner: 'PT-141' },
  { property: 'FDA evaluation', mt2: 'Phase I/II only (University of Arizona)', pt141: 'Phase III (approved as Vyleesi)', winner: 'PT-141' },
  { property: 'Appetite suppression', mt2: 'Yes — MC4R activation', pt141: 'Yes — MC4R activation', winner: 'Both' },
  { property: 'Best for beginners', mt2: 'No (stronger side effects)', pt141: 'Yes (better tolerated)', winner: 'PT-141' },
  { property: 'Maximum tanning depth', mt2: 'Higher ceiling dose', pt141: 'Lower ceiling', winner: 'MT-II' },
];

const receptors = [
  {
    receptor: 'MC1R',
    location: 'Melanocytes (skin)',
    effect: 'Melanin synthesis — drives eumelanin (dark) over pheomelanin (red)',
    relevance: 'Primary tanning mechanism',
    color: 'text-amber-400 border-amber-500/30 bg-amber-500/5',
  },
  {
    receptor: 'MC3R',
    location: 'Brain, adipose tissue',
    effect: 'Energy homeostasis, appetite regulation, anti-inflammatory',
    relevance: 'Secondary — fat loss synergy',
    color: 'text-blue-400 border-blue-500/30 bg-blue-500/5',
  },
  {
    receptor: 'MC4R',
    location: 'Central nervous system',
    effect: 'Satiety, libido, pro-erectile effects (males), mood regulation',
    relevance: 'Secondary — libido and appetite effects',
    color: 'text-violet-400 border-violet-500/30 bg-violet-500/5',
  },
  {
    receptor: 'MC5R',
    location: 'Exocrine glands, skeletal muscle',
    effect: 'Sebaceous gland secretion, some immune modulation',
    relevance: 'Tertiary — minor relevance',
    color: 'text-gray-400 border-gray-500/30 bg-gray-500/5',
  },
];

const tanningProducts = allProducts.filter(p =>
  p.tags.includes('tanning') || p.category === 'looks'
);

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tanning Peptides — Melanotan II & PT-141 Protocol Guide',
  description: 'Complete guide to melanocortin tanning peptides covering MC receptor biology, clinical evidence, and protocols.',
  url: 'https://maxxingpeptide.com/tanning',
  publisher: { '@type': 'Organization', name: 'MaxxingPeptides', url: 'https://maxxingpeptide.com' },
};

export default function TanningPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Sun className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold text-sm">Tanning Peptides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Activate Your Melanin.<br />
            <span className="gradient-text">Deep. Even. Natural.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Tanning peptides work by mimicking alpha-melanocyte stimulating hormone (α-MSH) — the body's own tanning signal. By binding melanocortin receptors directly, Melanotan II and PT-141 drive eumelanin synthesis in melanocytes without requiring UV radiation as the primary trigger.
          </p>
        </div>
      </AnimateIn>

      {/* Stats */}
      <AnimateIn delay={0.04}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { value: 'MC1R', label: 'Primary receptor driving eumelanin synthesis', color: 'text-amber-400' },
            { value: '4', label: 'Injections to produce visible tanning (clinical)', color: 'text-amber-400' },
            { value: '2.7h', label: 'PT-141 half-life — longer-lasting effect', color: 'text-brand-400' },
            { value: 'Phase III', label: 'PT-141 (bremelanotide) FDA clinical pathway', color: 'text-brand-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-center">
              <div className={`text-2xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* How it works */}
      <AnimateIn delay={0.06}>
        <div className="bg-[#111] border border-amber-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-5">How Melanocortin Tanning Peptides Work</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-amber-400 mb-3">Natural Tanning vs. Peptide Tanning</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                Natural UV tanning begins when UVB radiation damages DNA in melanocytes, triggering a stress response that upregulates α-MSH. This α-MSH then activates MC1R, driving melanin synthesis. The problem: you need the UV damage first. And the initial melanin response under UV stimulation initially favors pheomelanin (reddish, less protective) before converting to eumelanin.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Melanocortin peptides like Melanotan II skip the UV damage step entirely. They bind MC1R directly, activating melanin synthesis without the prerequisite cellular stress — and they preferentially drive eumelanin (the dark, photoprotective melanin) production from the start.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-amber-400 mb-3">The University of Arizona Research</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                Melanotan II emerged from a University of Arizona research program led by Drs. Mac Hadley and Victor Hruby, initially developed as a potential skin cancer prevention agent. The rationale: if melanin provides natural photoprotection, could controlled melanin upregulation without UV damage reduce skin cancer risk?
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Phase I clinical trials (Levine et al., 1991; Hadley et al., 1998) demonstrated dose-dependent tanning in fair-skinned volunteers, establishing the safety and efficacy profile that forms the clinical basis for current use. Subsequent Phase I/II work confirmed the receptor mechanism and dose-response relationship.
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Receptor Table */}
      <AnimateIn delay={0.08}>
        <div className="mb-12">
          <h2 className="text-2xl font-black text-white mb-3">Melanocortin Receptor Biology</h2>
          <p className="text-gray-400 text-lg mb-8">Understanding which receptor drives which effect explains both the tanning benefits and the side effects of melanocortin peptides.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {receptors.map(r => (
              <div key={r.receptor} className={`border rounded-2xl p-6 ${r.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-black opacity-60">{r.receptor}</span>
                  <span className="text-xs text-gray-500 bg-white/5 px-2.5 py-1 rounded-full">{r.location}</span>
                </div>
                <p className="text-white font-medium text-sm mb-1">{r.effect}</p>
                <p className="text-gray-500 text-xs">{r.relevance}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* MT-II vs PT-141 Comparison */}
      <AnimateIn delay={0.1}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-7 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-5 h-5 text-brand-400" />
            <h2 className="text-xl font-bold text-white">Melanotan II vs. PT-141 — Side-by-Side Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Property</th>
                  <th className="pb-3 text-amber-400 font-semibold text-left pr-4">Melanotan II</th>
                  <th className="pb-3 text-blue-400 font-semibold text-left pr-4">PT-141</th>
                  <th className="pb-3 text-gray-300 font-medium text-left">Edge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map(row => (
                  <tr key={row.property}>
                    <td className="py-3 pr-4 text-white font-medium">{row.property}</td>
                    <td className="py-3 pr-4 text-amber-300 text-sm">{row.mt2}</td>
                    <td className="py-3 pr-4 text-blue-300 text-sm">{row.pt141}</td>
                    <td className="py-3 text-gray-400 text-sm">{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            <strong className="text-gray-400">Verdict:</strong> Choose Melanotan II for maximum tanning depth and pigmentation speed. Choose PT-141 for a gentler introduction to melanocortin peptides with fewer side effects and longer effect duration.
          </p>
        </div>
      </AnimateIn>

      {/* Side Effect Management */}
      <AnimateIn delay={0.12}>
        <div className="bg-[#111] border border-amber-500/10 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-3 mb-5">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <h2 className="text-xl font-bold text-white">Side Effect Management</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-amber-400 mb-3">Common Side Effects & Causes</h3>
              <ul className="space-y-3">
                {[
                  { effect: 'Nausea', cause: 'MC3R/MC4R activation in brainstem and GI tract', mgmt: 'Start low (0.25mg), administer in evening, titrate slowly' },
                  { effect: 'Facial flushing', cause: 'Peripheral vasodilation via MC5R and MC3R', mgmt: 'Dose-dependent; reduces with tolerance. Evening dosing minimizes social impact' },
                  { effect: 'Yawning/fatigue', cause: 'Central MC4R effects', mgmt: 'Evening administration; typically resolves as tolerance develops' },
                  { effect: 'Spontaneous erections (males)', cause: 'MC4R central effects on erectile tissue', mgmt: 'Dose reduction; effect diminishes with continued use as receptor adaptation occurs' },
                ].map(item => (
                  <li key={item.effect} className="bg-black/20 rounded-xl p-4 border border-white/5">
                    <p className="text-white font-medium text-sm mb-1">{item.effect}</p>
                    <p className="text-gray-500 text-xs mb-1.5"><span className="text-gray-400">Cause: </span>{item.cause}</p>
                    <p className="text-gray-400 text-xs"><span className="text-brand-400">Management: </span>{item.mgmt}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-amber-400 mb-3">Key Safety Principles</h3>
              <ul className="space-y-2.5">
                {[
                  'Always start at the lowest dose (0.25mg MT-II; 0.5mg PT-141) and titrate based on tolerance',
                  'Evening administration allows you to sleep through the peak nausea window',
                  'Do not exceed 2mg per injection — higher doses produce diminishing returns and greater side effects',
                  'Contraindicated with: certain medications affecting melanocortin signaling, cardiovascular conditions',
                  'Monitor any moles or skin pigmentation changes — report unusual changes to a dermatologist',
                  'UV exposure dramatically accelerates tanning response — even 15–20 minutes per day is sufficient',
                  'Avoid excessive sun exposure without SPF in non-targeted areas during loading phase',
                ].map(point => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Protocol */}
      <AnimateIn delay={0.14}>
        <div className="bg-[#111] border border-brand-500/20 rounded-2xl p-8 mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-5 h-5 text-brand-400" />
            <h2 className="text-xl font-bold text-white">Tanning Peptide Protocol Guide</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-amber-400 mb-3">Melanotan II Protocol</h3>
              <div className="space-y-3">
                <div className="bg-black/30 rounded-xl p-4 border border-amber-500/10">
                  <p className="text-white text-sm font-medium mb-1">Reconstitution</p>
                  <p className="text-gray-400 text-sm">10mg + 2ml bac water = 5,000mcg/ml</p>
                  <p className="text-gray-500 text-xs mt-1">0.05ml = 0.25mg | 0.1ml = 0.5mg | 0.2ml = 1mg</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-amber-500/10">
                  <p className="text-white text-sm font-medium mb-1">Loading (Weeks 1–3)</p>
                  <p className="text-gray-400 text-sm">0.25–0.5mg nightly subcutaneous</p>
                  <p className="text-gray-500 text-xs mt-1">Combine with 15–20 min daily UV for best results</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-amber-500/10">
                  <p className="text-white text-sm font-medium mb-1">Maintenance (Week 4+)</p>
                  <p className="text-gray-400 text-sm">0.5–1mg, 1–2× weekly</p>
                  <p className="text-gray-500 text-xs mt-1">Reduce UV requirement once pigmentation established</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-blue-400 mb-3">PT-141 Protocol</h3>
              <div className="space-y-3">
                <div className="bg-black/30 rounded-xl p-4 border border-blue-500/10">
                  <p className="text-white text-sm font-medium mb-1">Reconstitution</p>
                  <p className="text-gray-400 text-sm">10mg + 2ml bac water = 5,000mcg/ml</p>
                  <p className="text-gray-500 text-xs mt-1">0.1ml = 0.5mg | 0.2ml = 1mg | 0.4ml = 2mg</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-blue-500/10">
                  <p className="text-white text-sm font-medium mb-1">Tanning Protocol</p>
                  <p className="text-gray-400 text-sm">1–2mg, 2–3× weekly subcutaneous</p>
                  <p className="text-gray-500 text-xs mt-1">Longer half-life allows less frequent dosing</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-blue-500/10">
                  <p className="text-white text-sm font-medium mb-1">Beginner Recommendation</p>
                  <p className="text-gray-400 text-sm">Start at 0.5–1mg; assess tolerance before advancing</p>
                  <p className="text-gray-500 text-xs mt-1">Better first choice if MT-II nausea was problematic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Products */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white">Tanning Peptides</h2>
          <p className="text-gray-500 text-sm mt-1">{tanningProducts.length} melanocortin peptides — sourced from Apollo</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tanningProducts.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>

      <RelatedLinks pageKey="tanning" />
    </div>
  );
}

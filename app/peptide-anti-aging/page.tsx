import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { Clock, Dna, Zap, Activity, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anti-Aging Peptides — Epithalon, NAD+, GHK-CU Longevity Protocol | MaxxingPeptides',
  description:
    'The real anti-aging peptide protocol. Epithalon extends telomeres. NAD+ rebuilds mitochondria. GHK-CU resets the gene expression patterns that determine how your cells age. Science and protocols inside.',
};

const agingHallmarks = [
  { hallmark: 'Telomere shortening', effect: 'Cells lose the ability to divide correctly', peptide: 'Epithalon', color: 'text-purple-400' },
  { hallmark: 'Mitochondrial dysfunction', effect: 'Less ATP per cell, more oxidative stress', peptide: 'NAD+ · SS-31 · MOTS-c', color: 'text-amber-400' },
  { hallmark: 'Epigenetic drift', effect: 'Gene expression patterns shift toward disease', peptide: 'GHK-CU · Epithalon', color: 'text-emerald-400' },
  { hallmark: 'Senescent cell accumulation', effect: 'Zombie cells that inflame but don\'t function', peptide: 'GHK-CU · FOXO4-DRI', color: 'text-blue-400' },
  { hallmark: 'Stem cell exhaustion', effect: 'Tissue repair capacity declines with age', peptide: 'TB-500 · BPC-157', color: 'text-rose-400' },
  { hallmark: 'Chronic inflammation (inflammaging)', effect: 'Low-grade systemic inflammation that drives all aging diseases', peptide: 'BPC-157 · GHK-CU · Selank', color: 'text-orange-400' },
];

const compounds = [
  {
    icon: Dna,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    name: 'Epithalon',
    mechanism: 'Telomerase Activation',
    story: 'Vladimir Khavinson started studying this tetrapeptide in the Soviet Union in the 1980s. The research that followed — 40+ years, including a 15-year human study — produced something extraordinary: measurable lifespan extension, improved immune function, and hormonal normalization in aging subjects. Epithalon activates telomerase, which rebuilds the telomere caps on chromosomes that shorten every time a cell divides. Short telomeres = aging cells. Epithalon gives them the signal to rebuild.',
    dose: '5–10 mg SC nightly for 10 days, repeated 2× yearly',
    expect: 'Sleep improvement (week 1–2), energy and cognitive clarity (weeks 3–4), skin and hormonal markers over months',
  },
  {
    icon: Zap,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    name: 'NAD+',
    mechanism: 'Mitochondrial Fuel',
    story: 'NAD+ is the cofactor for hundreds of metabolic reactions. Every cell needs it to produce ATP. Sirtuins — the "longevity genes" — depend on NAD+ to function. By age 50, NAD+ levels have dropped by half. Supplemental NAD+ isn\'t just an energy boost — it\'s restoring the operating conditions that every repair and maintenance system in the body requires. David Sinclair\'s research at Harvard has made this one of the best-evidenced longevity interventions available.',
    dose: '500 mg IV or subcutaneous (for maximum bioavailability), 2–3× weekly',
    expect: 'Energy and mental clarity within days. Metabolic and cellular repair benefits build over 2–3 months.',
  },
  {
    icon: Activity,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    name: 'GHK-CU',
    mechanism: 'Epigenetic Reset',
    story: 'What Loren Pickart discovered when he investigated why young plasma rejuvenated old liver cells turned into 40 years of research that revealed a peptide governing the expression of over 4,000 genes — many of them directly involved in tissue repair, inflammation resolution, and cellular regeneration. The "plasma factor" was GHK-CU. As we age, plasma GHK-CU declines. Restoring it doesn\'t just address one aging pathway — it resets dozens simultaneously at the gene expression level.',
    dose: '1–2 mg SC daily, or 2mg topical serum 2× daily',
    expect: 'Skin density and wound healing: 4–8 weeks. Systemic gene expression effects accumulate over months.',
  },
  {
    icon: TrendingUp,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    name: 'MOTS-c',
    mechanism: 'Mitochondrial Derived Peptide',
    story: 'MOTS-c was discovered in 2015 — a peptide encoded not in nuclear DNA, but in mitochondrial DNA. It activates AMPK and modulates the folate cycle, which controls epigenetic methylation patterns. Exercise raises MOTS-c. Aging reduces it. Supplementing it mimics what consistent exercise does at the metabolic level — improved insulin sensitivity, enhanced fat oxidation, better cellular energy efficiency. For longevity, this is the metabolic foundation everything else builds on.',
    dose: '5–10 mg SC, 2–3× weekly',
    expect: 'Metabolic and energy improvements within 2–4 weeks. Cardiovascular markers at 8+ weeks.',
  },
];

const longevityCalendar = [
  { period: 'Q1 (Jan–Mar)', protocol: 'Epithalon course (10 nights) + NAD+ 3×/week + GHK-CU daily' },
  { period: 'Q2 (Apr–Jun)', protocol: 'GHK-CU daily + MOTS-c 3×/week + CJC-1295/Ipa sleep' },
  { period: 'Q3 (Jul–Sep)', protocol: 'Epithalon second course + NAD+ 3×/week + GHK-CU daily' },
  { period: 'Q4 (Oct–Dec)', protocol: 'GHK-CU daily + MOTS-c 3×/week + Selank as needed for seasonal stress' },
];

export default function PeptideAntiAgingPage() {
  const products = allProducts.filter(p =>
    ['epithalon-50mg', 'nad', 'ghk-cu', 'mots-c-10mg'].includes(p.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-bold text-sm">Longevity Protocols</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Aging Is Biology.<br />
            <span className="gradient-text">Biology Can Be Addressed.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Anti-aging isn't about reversing time. It's about addressing the specific biological mechanisms
            that accelerate the degradation. Telomeres. Mitochondria. Gene expression drift. NAD+ depletion.
            These aren't abstract concepts — they're measurable processes with measurable interventions.
          </p>
        </div>
      </AnimateIn>

      {/* Aging hallmarks */}
      <AnimateIn delay={0.05}>
        <h2 className="text-3xl font-black text-white mb-6">The 6 Hallmarks of Aging — Addressed</h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Aging Hallmark</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">What It Does</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-purple-400">Peptide Intervention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {agingHallmarks.map((row) => (
                <tr key={row.hallmark} className="hover:bg-white/2 transition-colors">
                  <td className={`py-4 px-4 font-semibold text-sm ${row.color}`}>{row.hallmark}</td>
                  <td className="py-4 px-4 text-gray-400 text-sm">{row.effect}</td>
                  <td className="py-4 px-4 text-white font-medium text-sm">{row.peptide}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* Compound deep dives */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-8">The Core Four — Explained</h2>
        <div className="space-y-5 mb-16">
          {compounds.map((c) => (
            <div key={c.name} className="p-7 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${c.color}`}>
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{c.name}</h3>
                  <p className="text-sm text-gray-500">{c.mechanism}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-5">{c.story}</p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Protocol</p>
                  <p className="text-white font-medium text-sm">{c.dose}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">What to Expect</p>
                  <p className="text-brand-300 text-sm">{c.expect}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Yearly calendar */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-6">The Annual Longevity Calendar</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl">Longevity peptides aren't a one-time purchase — they're a protocol you build into your year. Here's how serious longevity users structure their quarterly cycles:</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {longevityCalendar.map((q) => (
            <div key={q.period} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <p className="text-purple-400 font-black text-lg mb-2">{q.period}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{q.protocol}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-8">Longevity Peptides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

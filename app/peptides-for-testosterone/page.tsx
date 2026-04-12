import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { Activity, TrendingUp, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peptides for Testosterone — Natural Test Support Stack | MaxxingPeptides',
  description:
    'How peptides support testosterone without suppression. CJC-1295, Epithalon, MOTS-c, and Kisspeptin-10 work with your HPG axis — not against it. The natural optimization stack.',
};

const testPeptides = [
  {
    icon: TrendingUp,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    name: 'CJC-1295 / Ipamorelin',
    mechanism: 'GH → IGF-1 → Testicular Leydig Cell Support',
    explanation: 'Growth hormone and testosterone work synergistically through LH and IGF-1 signaling. Elevating GH output with CJC-1295/Ipamorelin improves Leydig cell function — the cells in the testes that produce testosterone. Studies show GH administration increases testicular IGF-1, which directly supports testosterone biosynthesis. This is why high-GH athletes tend to have excellent testosterone levels without exogenous support.',
    effect: 'Indirect but meaningful support of the testosterone production axis',
    dose: '100 mcg each SC, pre-sleep',
  },
  {
    icon: Activity,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    name: 'Epithalon',
    mechanism: 'Pineal → Melatonin → LH Optimization',
    explanation: 'The pineal gland doesn\'t just control sleep — it modulates the entire HPG (hypothalamic-pituitary-gonadal) axis via its circadian influence. Declining pineal function with age is directly correlated with declining testosterone. Epithalon restores pineal output, which normalizes the circadian LH pulsatility that drives testicular testosterone production. Khavinson\'s 15-year studies showed significant hormone normalization in aging subjects — testosterone was part of that profile.',
    effect: 'HPG axis normalization, LH pulse restoration, age-related decline reversal',
    dose: '5–10 mg SC nightly for 10 days, 2× per year',
  },
  {
    icon: Zap,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    name: 'MOTS-c',
    mechanism: 'Metabolic Optimization → Hormonal Environment',
    explanation: 'Insulin resistance and poor metabolic health are direct suppressors of testosterone. The relationship is causal — HOMA-IR (insulin resistance score) inversely predicts total testosterone in men. MOTS-c activates AMPK and dramatically improves insulin sensitivity, creating the metabolic environment where testosterone naturally rises. You\'re not stimulating testosterone production — you\'re removing the suppressive load.',
    effect: 'Improved testosterone via metabolic health improvement',
    dose: '5–10 mg SC, 2–3× weekly',
  },
  {
    icon: Shield,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    name: 'PT-141 (Bremelanotide)',
    mechanism: 'Central CNS → Libido & Sexual Function',
    explanation: 'PT-141 acts centrally via melanocortin receptors in the brain — specifically MC4R — to drive sexual arousal and function independent of circulating testosterone levels. While not directly raising testosterone, it addresses the functional symptoms of low testosterone (libido, ED) through a completely different pathway. Important: it works on the CNS, not the vascular system like PDE5 inhibitors. It\'s particularly valuable when low libido exists despite normal-ish testosterone numbers.',
    effect: 'Sexual function restoration via CNS melanocortin pathway',
    dose: '1–2 mg SC or intranasal, 30–60 min before desired effect',
  },
];

const testKillers = [
  { factor: 'Poor sleep (< 7 hrs)', impact: '−15% testosterone per night', fix: 'DSIP + Selank + Pinealon' },
  { factor: 'High cortisol / chronic stress', impact: '−20–40% testosterone', fix: 'Selank + BPC-157 (gut stress)' },
  { factor: 'Insulin resistance', impact: 'Direct inverse correlation', fix: 'MOTS-c + tirzepatide' },
  { factor: 'Declining GH output (age)', impact: 'IGF-1 drop → Leydig cell decline', fix: 'CJC-1295 / Ipamorelin' },
  { factor: 'Pineal/circadian dysregulation', impact: 'LH pulsatility disruption', fix: 'Epithalon + Pinealon' },
  { factor: 'Low body weight or extreme deficit', impact: 'Survival mode hormonal suppression', fix: 'GLP-1 for fat loss, not starvation' },
];

export default function PeptidesTestosteronePage() {
  const products = allProducts.filter(p =>
    ['cjc1295-ipamorelin', 'epithalon-50mg', 'mots-c-10mg', 'nad'].includes(p.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Activity className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold text-sm">Hormonal Optimization</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Optimize Testosterone<br />
            <span className="gradient-text">Without Suppressing It</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Exogenous testosterone works — but it shuts down your own production. Peptides take the other path:
            fixing the upstream reasons your testosterone is suppressed in the first place. Better sleep, better
            insulin sensitivity, better GH output. The result is your own testosterone rising, not a replacement.
          </p>
        </div>
      </AnimateIn>

      {/* The honest truth */}
      <AnimateIn delay={0.05}>
        <div className="mb-16 p-8 bg-[#111] border border-amber-500/20 rounded-3xl">
          <h2 className="text-2xl font-black text-white mb-4">What Peptides Can and Cannot Do</h2>
          <div className="space-y-3 text-gray-400 text-lg leading-relaxed">
            <p>Peptides are not a replacement for TRT if your testosterone is clinically low and symptomatic. If you have hypogonadism requiring medical treatment, that's what TRT is for.</p>
            <p>What peptides are exceptional at: fixing the <em className="text-white">reasons</em> testosterone is low in the first place. Poor sleep reduces testosterone by 15% per night. Insulin resistance inversely correlates with testosterone directly. Declining GH output weakens Leydig cell function. These are addressable.</p>
            <p className="text-white font-semibold">Most men in their 30s and 40s with "low" testosterone have lifestyle-suppressed testosterone, not a broken HPG axis. Peptides fix the suppression.</p>
          </div>
        </div>
      </AnimateIn>

      {/* Test killers table */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-6">What's Suppressing Your Testosterone</h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Suppressant</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Impact</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-amber-400">Peptide Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {testKillers.map((row) => (
                <tr key={row.factor} className="hover:bg-white/2 transition-colors">
                  <td className="py-4 px-4 text-white font-semibold text-sm">{row.factor}</td>
                  <td className="py-4 px-4 text-red-400 text-sm">{row.impact}</td>
                  <td className="py-4 px-4 text-amber-300 text-sm font-medium">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* Peptide breakdown */}
      <AnimateIn delay={0.15}>
        <h2 className="text-3xl font-black text-white mb-8">The Stack, Explained</h2>
        <div className="space-y-5 mb-16">
          {testPeptides.map((p) => (
            <div key={p.name} className="p-7 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${p.color}`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.mechanism}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{p.explanation}</p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Effect</p>
                  <p className="text-brand-300 font-medium text-sm">{p.effect}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Dose</p>
                  <p className="text-white font-medium text-sm">{p.dose}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-8">Testosterone Support Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

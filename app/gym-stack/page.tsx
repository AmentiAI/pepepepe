import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { Dumbbell, Zap, TrendingUp, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gym Peptide Stack — IGF-1, CJC-1295, BPC-157 Performance Guide | MaxxingPeptides',
  description:
    'The complete gym peptide stack guide. IGF-1 LR3 for muscle cell hyperplasia, CJC-1295/Ipamorelin for GH pulses, BPC-157 for injury prevention. Real protocols for real training.',
};

const gymPeptides = [
  {
    icon: TrendingUp,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    name: 'CJC-1295 / Ipamorelin',
    role: 'The GH Pulse',
    why: 'This is the stack backbone. CJC-1295 extends your natural GH pulse duration. Ipamorelin adds a clean GH release without the cortisol and prolactin spike you get from GHRP-6 or hexarelin. Together they amplify the pre-sleep GH pulse that drives fat metabolism and muscle protein synthesis through the night. After 8 weeks, your body composition at the same bodyweight looks different — more muscle, less fat. That\'s what consistent GH elevation does.',
    protocol: '100 mcg each, subcutaneous, 30–60 min before sleep',
    cycle: '12 weeks on, 4 weeks off',
  },
  {
    icon: Zap,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    name: 'IGF-1 LR3',
    role: 'The Hyperplasia Driver',
    why: 'IGF-1 LR3 is the most direct anabolic peptide available. It binds IGF-1 receptors with higher affinity than native IGF-1 and its modified structure prevents it from binding to IGF binding proteins — meaning more of it stays active and available. The most impressive effect: it drives satellite cell proliferation, which is the mechanism behind true muscle cell hyperplasia (new cells, not just bigger cells). Inject it locally post-workout into the trained muscle for maximal regional effect.',
    protocol: '40–100 mcg post-workout, local or systemic SC injection',
    cycle: '4–6 weeks on, 4 weeks off (receptor sensitivity)',
  },
  {
    icon: Shield,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    name: 'BPC-157',
    role: 'The Insurance Policy',
    why: 'High training volume creates micro-damage faster than the body can repair under normal conditions. BPC-157 runs continuously in the background, accelerating tendon and ligament recovery, protecting the gut from NSAIDs and training-induced inflammation, and keeping joints functional. Serious trainers don\'t wait for injuries. They run BPC-157 so the injuries don\'t accumulate into something that ends training for months.',
    protocol: '250–500 mcg daily, SC near the area of heaviest stress',
    cycle: 'Can run continuously or 12 weeks on/off',
  },
  {
    icon: Dumbbell,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    name: 'MOTS-c',
    role: 'The Mitochondrial Amplifier',
    why: 'MOTS-c is a mitochondrial-derived peptide that dramatically improves metabolic flexibility and exercise-induced glucose uptake. It activates AMPK — the same pathway targeted by metformin — which drives fat oxidation and improves the energy efficiency of every training session. Athletes running MOTS-c report better endurance at higher intensities and faster aerobic adaptation. The recovery between sessions improves because mitochondrial output is higher.',
    protocol: '5–10 mg SC, 2–3× per week, pre-training or morning',
    cycle: '8–12 weeks, can run alongside CJC/Ipa',
  },
];

const weekByWeek = [
  { week: '1–2', focus: 'Foundation', what: 'CJC-1295/Ipa pre-sleep + BPC-157 daily. Adjust sleep schedule to maximize the GH pulse window. Let the baseline establish.', gains: 'Improved sleep quality, joint comfort' },
  { week: '3–4', focus: 'Add IGF-1', what: 'Introduce IGF-1 LR3 post-workout on training days. Keep dose conservative (40 mcg) and inject local to main training muscles.', gains: 'Noticeable pump increase, faster recovery' },
  { week: '5–8', focus: 'Full Stack', what: 'All compounds running. Optimize training volume — this is when you can handle more. Add MOTS-c if endurance work is part of the program.', gains: 'Visible body composition shift, strength increases' },
  { week: '9–12', focus: 'Maximize', what: 'IGF-1 LR3 cycle ends at week 6, reintroduce at week 10 if desired. CJC/Ipa continues. BPC-157 continues. Evaluate and adjust.', gains: 'Consolidated gains, maintained recovery speed' },
];

const comparisonData = [
  { metric: 'Muscle growth mechanism', natural: 'Hypertrophy (cell size)', withPeptides: 'Hypertrophy + Hyperplasia (cell size + cell count)' },
  { metric: 'Recovery speed', natural: '48–72 hrs heavy session', withPeptides: '24–48 hrs with BPC-157 + GH peptides' },
  { metric: 'Sleep quality', natural: 'Baseline GH pulse', withPeptides: '2–3× amplified GH pulse via CJC/Ipa' },
  { metric: 'Joint tolerance', natural: 'Degrades with volume', withPeptides: 'Maintained with BPC-157 running' },
  { metric: 'Fat oxidation', natural: 'Training-dependent', withPeptides: 'MOTS-c drives AMPK continuously' },
];

export default function GymStackPage() {
  const products = allProducts.filter(p =>
    ['cjc1295-ipamorelin', 'igf-1lr3', 'bpc157-10mg', 'mots-c-10mg', 'tb500-10mg'].includes(p.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Dumbbell className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold text-sm">Gym Performance</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            The Gym Peptide<br />
            <span className="gradient-text">Stack That Actually Works</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Not more testosterone. Not more stimulants. Peptides work with your body's existing hormonal
            architecture — amplifying GH pulses, driving satellite cell recruitment, and keeping your
            joints and tendons functional enough to actually train at the volume this requires.
          </p>
        </div>
      </AnimateIn>

      {/* The philosophy */}
      <AnimateIn delay={0.05}>
        <div className="mb-16 p-8 bg-[#111] border border-amber-500/20 rounded-3xl">
          <h2 className="text-2xl font-black text-white mb-4">How Peptides Fit Into a Training Protocol</h2>
          <div className="space-y-3 text-gray-400 text-lg leading-relaxed">
            <p>Testosterone and steroids work by flooding androgen receptors. That's effective but comes with the full endocrine disruption package. Peptides take a different path — they amplify signals your body already sends, rather than overriding them.</p>
            <p>CJC-1295/Ipamorelin doesn't give you synthetic GH. It extends and amplifies your existing pre-sleep GH pulse — the one that drives recovery during slow-wave sleep. IGF-1 LR3 doesn't replace testosterone — it drives satellite cell proliferation that testosterone can't do alone. BPC-157 doesn't suppress pain — it actually fixes the tissue.</p>
            <p className="text-white font-semibold">The result: better recovery, better composition, maintained joints. Without suppressing your natural hormone production.</p>
          </div>
        </div>
      </AnimateIn>

      {/* Peptide breakdown */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-8">The Stack, Compound by Compound</h2>
        <div className="space-y-5 mb-16">
          {gymPeptides.map((p) => (
            <div key={p.name} className="p-7 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${p.color}`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{p.name}</h3>
                  <p className="text-brand-400 font-semibold text-sm">{p.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-5">{p.why}</p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Protocol</p>
                  <p className="text-white font-medium text-sm">{p.protocol}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Cycle</p>
                  <p className="text-gray-300 text-sm">{p.cycle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Week by week */}
      <AnimateIn delay={0.15}>
        <h2 className="text-3xl font-black text-white mb-8">12-Week Protocol Timeline</h2>
        <div className="space-y-4 mb-16">
          {weekByWeek.map((w) => (
            <div key={w.week} className="flex gap-5 p-6 bg-[#111] border border-white/5 rounded-2xl items-start">
              <div className="shrink-0 text-center">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Week</div>
                <div className="text-3xl font-black text-amber-400">{w.week}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-black text-white mb-1">{w.focus}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{w.what}</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                  <span className="text-xs text-brand-300 font-medium">{w.gains}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Comparison table */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-8">Training With vs. Without Peptides</h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Metric</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Training Alone</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-amber-400">With Peptide Stack</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonData.map((row) => (
                <tr key={row.metric} className="hover:bg-white/2 transition-colors">
                  <td className="py-4 px-4 text-white font-semibold text-sm">{row.metric}</td>
                  <td className="py-4 px-4 text-gray-500 text-sm">{row.natural}</td>
                  <td className="py-4 px-4 text-amber-300 text-sm font-medium">{row.withPeptides}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-8">Build Your Gym Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

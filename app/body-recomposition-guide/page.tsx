import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { TrendingUp, TrendingDown, Scale, Flame, Dumbbell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Body Recomposition with Peptides — Lose Fat & Build Muscle Simultaneously',
  description:
    'The peptide protocol for body recomposition. Semaglutide or tirzepatide for fat loss while CJC-1295/Ipamorelin preserves lean muscle. The science and the stack explained.',
};

const recompMechanisms = [
  {
    icon: TrendingDown,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    title: 'Fat Loss Arm',
    peptides: 'Semaglutide / Tirzepatide / Retatrutide',
    how: 'GLP-1 receptor agonists suppress appetite and drive fat oxidation through multiple pathways: reduced caloric intake, slowed gastric emptying, improved insulin sensitivity, and direct hepatic fat oxidation (especially retatrutide via glucagon agonism). The fat loss is real and measurable — not water weight, not lean mass. Clinical trials consistently show 15–24% body weight reduction with the majority from fat tissue.',
  },
  {
    icon: TrendingUp,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'Muscle Preservation Arm',
    peptides: 'CJC-1295 / Ipamorelin + IGF-1 LR3',
    how: 'The primary risk during aggressive fat loss is lean mass loss. In caloric deficit, your body breaks down muscle tissue for fuel. CJC-1295/Ipamorelin maintains elevated GH signaling that preferentially drives fat oxidation and preserves muscle protein. IGF-1 LR3 further amplifies muscle protein synthesis and satellite cell recruitment — you\'re actively building while simultaneously losing fat. This is the mechanism that makes true recomp possible.',
  },
  {
    icon: Flame,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    title: 'Metabolic Amplification',
    peptides: 'MOTS-c + SS-31',
    how: 'Mitochondrial peptides are the overlooked layer. MOTS-c activates AMPK, improving metabolic flexibility — your ability to switch between fuel sources. SS-31 targets mitochondrial function directly, increasing ATP output per session and reducing oxidative stress from the elevated training volume that recomp requires. Better mitochondria = more fat burned per hour, and better recovery between sessions.',
  },
];

const recompStack = [
  {
    tier: 'Core',
    color: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
    compounds: [
      { name: 'Semaglutide or Tirzepatide', dose: 'Titrated per standard GLP-1 protocol', role: 'Primary fat loss driver' },
      { name: 'CJC-1295 / Ipamorelin', dose: '100 mcg each, pre-sleep SC', role: 'Lean mass preservation + GH pulse' },
    ],
  },
  {
    tier: 'Advanced',
    color: 'border-amber-500/30 bg-amber-500/5 text-amber-400',
    compounds: [
      { name: 'IGF-1 LR3', dose: '40–100 mcg post-workout', role: 'Active muscle building during deficit' },
      { name: 'MOTS-c', dose: '10 mg SC, 3× weekly', role: 'Mitochondrial fat oxidation' },
    ],
  },
  {
    tier: 'Recovery',
    color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
    compounds: [
      { name: 'BPC-157', dose: '250 mcg daily SC', role: 'Joint and tissue protection during high volume' },
      { name: 'TB-500', dose: '2–5 mg SC twice weekly', role: 'Systemic injury prevention' },
    ],
  },
];

const monthByMonth = [
  {
    month: 'Month 1',
    fat: '−3 to 5 lbs fat',
    muscle: 'Neutral to slight gain',
    focus: 'Establish GLP-1 baseline, begin CJC/Ipa sleep protocol. Body adjusts to the new appetite and hormonal environment. Don\'t rush the GLP-1 titration.',
  },
  {
    month: 'Month 2',
    fat: '−4 to 6 lbs fat',
    muscle: '+1 to 2 lbs lean',
    focus: 'Full recomp effect becomes visible. The simultaneous fat loss and muscle preservation starts showing in measurements — scale might not move dramatically but body composition is shifting clearly.',
  },
  {
    month: 'Month 3',
    fat: '−4 to 6 lbs fat',
    muscle: '+1 to 2 lbs lean',
    focus: 'Compound the results. Adjust GLP-1 dose if stalled. Add IGF-1 LR3 cycle if aggressive muscle building is the priority. Optimize training split for peptide timing.',
  },
  {
    month: 'Month 4–6',
    fat: '−3 to 5 lbs fat/month',
    muscle: 'Maintained + incremental gain',
    focus: 'Long-term protocol maintenance. Most users at this point have achieved the composition they were targeting and shift to lower maintenance doses of the GLP-1 while continuing the GH peptide stack.',
  },
];

export default function BodyRecompositionPage() {
  const products = allProducts.filter(p =>
    ['glp-1s-5mg', 'glp-2t-15mg', 'cjc1295-ipamorelin', 'igf-1lr3', 'bpc157-10mg'].includes(p.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-bold text-sm">Body Recomposition</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Lose Fat.<br />
            <span className="gradient-text">Build Muscle. At Once.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            "You can't build muscle in a deficit" is mostly true for natural training without hormonal support.
            With the right peptide combination, you can genuinely do both — not through magic, but because
            GH peptides preserve lean mass while GLP-1s drive fat oxidation from a completely different pathway.
          </p>
        </div>
      </AnimateIn>

      {/* Why recomp is now possible */}
      <AnimateIn delay={0.05}>
        <div className="mb-16 p-8 bg-blue-500/5 border border-blue-500/20 rounded-3xl">
          <h2 className="text-2xl font-black text-white mb-4">Why This Wasn't Possible Before GLP-1s</h2>
          <div className="space-y-3 text-gray-400 text-lg leading-relaxed">
            <p>Traditional recomping required either a very small caloric deficit (so muscle loss was minimal) or a very small surplus (so fat gain was minimal). Either way, the pace was glacial — real body composition change took years.</p>
            <p>GLP-1 receptor agonists change this because they drive fat loss through appetite suppression and metabolic mechanisms, not just caloric restriction. Your body isn't starving — it's just preferentially burning fat. That changes the muscle/fat trade-off completely.</p>
            <p>Add GH peptides to maintain the anabolic signaling that would normally require a caloric surplus, and you have both processes running simultaneously. The results in clinical trials back this up — tirzepatide subjects maintained lean mass at rates far higher than predicted by the deficit alone.</p>
          </div>
        </div>
      </AnimateIn>

      {/* Mechanism breakdown */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-8">The Three Mechanisms</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {recompMechanisms.map((m) => (
            <div key={m.title} className="p-6 bg-[#111] border border-white/5 rounded-2xl flex flex-col">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-semibold mb-4 self-start ${m.color}`}>
                <m.icon className="w-4 h-4" />
                {m.title}
              </div>
              <p className="text-xs text-gray-500 font-medium mb-3">{m.peptides}</p>
              <p className="text-gray-300 leading-relaxed text-sm flex-1">{m.how}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Stack tiers */}
      <AnimateIn delay={0.15}>
        <h2 className="text-3xl font-black text-white mb-8">The Recomp Stack</h2>
        <div className="space-y-4 mb-16">
          {recompStack.map((tier) => (
            <div key={tier.tier} className={`p-6 rounded-2xl border ${tier.color}`}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-sm font-black px-3 py-1 rounded-full border ${tier.color}`}>{tier.tier}</span>
              </div>
              <div className="space-y-4">
                {tier.compounds.map((c) => (
                  <div key={c.name} className="flex flex-wrap items-start gap-4 p-4 bg-black/20 rounded-xl">
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold">{c.name}</p>
                      <p className="text-gray-400 text-sm">{c.dose}</p>
                    </div>
                    <span className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1.5 rounded-xl shrink-0">{c.role}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Month by month */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-8">What to Expect, Month by Month</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {monthByMonth.map((m) => (
            <div key={m.month} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <h3 className="text-xl font-black text-white mb-3">{m.month}</h3>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                  <div className="text-blue-400 font-black text-lg">{m.fat}</div>
                  <div className="text-xs text-gray-500">Fat</div>
                </div>
                <div className="flex-1 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-center">
                  <div className="text-amber-400 font-black text-lg">{m.muscle}</div>
                  <div className="text-xs text-gray-500">Lean Mass</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{m.focus}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-8">Recomp Stack Peptides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

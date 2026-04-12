import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { Scale, TrendingDown, Zap, CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tirzepatide Guide — GIP/GLP-1 Dual Agonist Dosing & Protocol | MaxxingPeptides',
  description:
    'The complete tirzepatide guide. Why the dual GIP/GLP-1 agonist outperforms semaglutide, how to titrate correctly, what side effects to expect, and how to stack it for maximum body recomposition.',
};

const trialData = [
  { trial: 'SURMOUNT-1 (5mg)', loss: '15.0%', duration: '72 weeks', lean: 'Mostly fat mass' },
  { trial: 'SURMOUNT-1 (10mg)', loss: '19.5%', duration: '72 weeks', lean: 'Mostly fat mass' },
  { trial: 'SURMOUNT-1 (15mg)', loss: '20.9%', duration: '72 weeks', lean: 'Mostly fat mass' },
  { trial: 'vs Semaglutide 2.4mg', loss: '+3–5% more than sema', duration: 'SURMOUNT-5', lean: 'Superior fat selectivity' },
];

const mechs = [
  {
    color: 'text-blue-400',
    receptor: 'GLP-1 Receptor',
    effect: 'Appetite suppression, gastric emptying reduction, insulin secretion enhancement, direct hepatic fat oxidation. This is the mechanism semaglutide also uses — tirzepatide adds the second pathway on top of it.',
  },
  {
    color: 'text-purple-400',
    receptor: 'GIP Receptor (unique to tirzepatide)',
    effect: 'GIP is glucose-dependent insulinotropic polypeptide. It enhances GLP-1\'s effects, improves adipose tissue metabolism, and — critically — does not cause nausea at the same rate as GLP-1 alone. This is why tirzepatide users report better tolerability than semaglutide despite greater fat loss.',
  },
];

const titration = [
  { week: '1–4', dose: '2.5 mg', frequency: 'Once weekly', note: 'Mandatory starting dose. Don\'t skip this phase — GI tolerance is built here.' },
  { week: '5–8', dose: '5 mg', frequency: 'Once weekly', note: 'First real fat loss acceleration. Most people feel the appetite suppression clearly here.' },
  { week: '9–12', dose: '7.5 mg', frequency: 'Once weekly', note: 'Continue if tolerating 5mg well. Side effects should have stabilized.' },
  { week: '13–16', dose: '10 mg', frequency: 'Once weekly', note: 'Strong therapeutic range. Many people find their optimal dose here.' },
  { week: '17–20', dose: '12.5 mg', frequency: 'Once weekly', note: 'Advanced. Only if 10mg is well-tolerated and results have plateaued.' },
  { week: '21+', dose: '15 mg', frequency: 'Once weekly', note: 'Maximum clinical dose. SURMOUNT trial ceiling. Diminishing returns above this.' },
];

const sideEffects = [
  { effect: 'Nausea', severity: 'Common', when: 'First few weeks of each dose increase', fix: 'Take before bed, eat small low-fat meals. Improve by week 3.' },
  { effect: 'Constipation', severity: 'Common', when: 'Ongoing', fix: 'Increase fiber, magnesium, water. Slowed gastric transit is the mechanism.' },
  { effect: 'Muscle loss concern', severity: 'Preventable', when: 'In caloric deficit', fix: 'CJC-1295/Ipamorelin pre-sleep, resistance training, adequate protein (1g/lb bodyweight).' },
  { effect: 'Fatigue (initial)', severity: 'Mild', when: 'First 1–2 weeks', fix: 'Normal adaptation. Electrolytes help. Passes quickly.' },
  { effect: 'Injection site reactions', severity: 'Rare', when: 'Site-specific', fix: 'Rotate injection sites, warm vial to room temp.' },
];

export default function TirzepatideGuidePage() {
  const products = allProducts.filter(p =>
    ['glp-2t-15mg', 'glp-2t-30mg', 'cjc1295-ipamorelin', 'bacteriostatic-water-30ml'].includes(p.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-bold text-sm">GIP/GLP-1 Dual Agonist</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Tirzepatide:<br />
            <span className="gradient-text">The Fat Loss Upgrade</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Semaglutide opened the door. Tirzepatide walked through it. The addition of GIP agonism to
            the GLP-1 pathway produced average weight loss of 20.9% in clinical trials — numbers that
            hadn't been seen outside of bariatric surgery.
          </p>
        </div>
      </AnimateIn>

      {/* Clinical data */}
      <AnimateIn delay={0.05}>
        <h2 className="text-3xl font-black text-white mb-6">The Clinical Trial Numbers</h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Trial / Dose</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Average Weight Loss</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Duration</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {trialData.map((row) => (
                <tr key={row.trial} className="hover:bg-white/2 transition-colors">
                  <td className="py-4 px-4 text-white font-semibold">{row.trial}</td>
                  <td className="py-4 px-4 text-blue-400 font-black text-lg">{row.loss}</td>
                  <td className="py-4 px-4 text-gray-400">{row.duration}</td>
                  <td className="py-4 px-4 text-gray-500 text-sm">{row.lean}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* The mechanism */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-6">Why It Works Better Than Semaglutide</h2>
        <p className="text-gray-400 text-lg mb-6 max-w-3xl">Tirzepatide hits two receptors. Semaglutide hits one. That's not a marketing claim — it's the mechanistic reason for the superior outcomes.</p>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {mechs.map((m) => (
            <div key={m.receptor} className="p-7 bg-[#111] border border-white/5 rounded-2xl">
              <h3 className={`text-lg font-black mb-3 ${m.color}`}>{m.receptor}</h3>
              <p className="text-gray-300 leading-relaxed">{m.effect}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Titration */}
      <AnimateIn delay={0.15}>
        <h2 className="text-3xl font-black text-white mb-4">Titration Protocol</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl">The titration schedule exists for a reason. Your GI system needs time to adapt. Rushing it causes unnecessary side effects and dropout. Don't be impatient — the fat loss accelerates as you go up in dose.</p>
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Weeks</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Dose</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Frequency</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {titration.map((row) => (
                <tr key={row.week} className="hover:bg-white/2 transition-colors">
                  <td className="py-4 px-4 text-white font-semibold">{row.week}</td>
                  <td className="py-4 px-4 text-blue-400 font-black">{row.dose}</td>
                  <td className="py-4 px-4 text-gray-400">{row.frequency}</td>
                  <td className="py-4 px-4 text-gray-500 text-sm">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* Side effects */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-8">Side Effects — What's Normal, What to Fix</h2>
        <div className="space-y-3 mb-16">
          {sideEffects.map((s) => (
            <div key={s.effect} className="flex gap-4 p-5 bg-[#111] border border-white/5 rounded-2xl">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <p className="text-white font-bold">{s.effect}</p>
                  <span className="text-xs text-gray-500 bg-white/5 px-2.5 py-1 rounded-full">{s.severity} · {s.when}</span>
                </div>
                <p className="text-gray-400 text-sm">{s.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* The lean mass warning + stack */}
      <AnimateIn delay={0.25}>
        <div className="mb-16 p-8 bg-[#111] border border-brand-500/20 rounded-3xl">
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-brand-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-black text-white mb-4">Protect Your Muscle</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Tirzepatide is excellent at driving fat loss. It is not selective — in the absence of resistance training and adequate protein, it will also drive muscle loss. The clinical trial subjects who maintained the best lean mass ratios were those who lifted and ate protein.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                The peptide solution: add CJC-1295/Ipamorelin pre-sleep. The GH pulse maintains muscle protein synthesis and preferentially drives fat as the fuel source. This is the difference between looking like you lost weight and looking like you transformed your body composition.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span className="text-brand-300 font-semibold text-sm">Add CJC-1295/Ipamorelin 100 mcg each, pre-sleep, throughout your tirzepatide protocol</span>
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.3}>
        <h2 className="text-3xl font-black text-white mb-8">Start Your Tirzepatide Protocol</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

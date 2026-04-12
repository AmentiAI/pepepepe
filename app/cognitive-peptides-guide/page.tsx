import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { Brain, Zap, Shield, Moon, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cognitive Peptides Guide — Semax, Selank, Adamax & Nootropic Protocols',
  description:
    'The best peptides for focus, memory, anxiety, and brain health. Semax raises BDNF. Selank drops cortisol without sedation. Adamax crushes anxiety. The nootropic peptide stack explained.',
};

const cognitiveTargets = [
  { target: 'BDNF (Brain-Derived Neurotrophic Factor)', effect: 'Neuroplasticity, memory formation, neuron survival', peptide: 'Semax', color: 'text-blue-400' },
  { target: 'GABA / Noradrenaline balance', effect: 'Anxiety, rumination, stress response', peptide: 'Selank · Adamax', color: 'text-violet-400' },
  { target: 'Acetylcholine synthesis', effect: 'Focus, working memory, cognitive processing speed', peptide: 'Semax · N-Acetyl Semax', color: 'text-amber-400' },
  { target: 'Dopamine system', effect: 'Motivation, reward, executive function', peptide: 'Semax · PE-22-28', color: 'text-emerald-400' },
  { target: 'Serotonin regulation', effect: 'Mood stability, sleep, emotional resilience', peptide: 'Selank · Pinealon', color: 'text-pink-400' },
  { target: 'Neuroinflammation', effect: 'Cognitive fog, brain aging, depression', peptide: 'BPC-157 · GHK-CU', color: 'text-rose-400' },
];

const peptides = [
  {
    icon: Zap,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    name: 'Semax / N-Acetyl Semax Amidate',
    tldr: 'The focus peptide. Like caffeine but instead of stimulation, it\'s clarity.',
    story: 'Semax was developed in Russia as a stroke and neurodegeneration treatment. What they discovered in the process: it dramatically elevates BDNF — the protein responsible for growing and maintaining neurons, forming new memories, and maintaining synaptic plasticity. Users describe the cognitive effect not as stimulation but as precision — words come faster, thinking is sharper, focus doesn\'t require effort. N-Acetyl Semax Amidate is the enhanced version — more potent, longer duration, crosses the blood-brain barrier more effectively.',
    dose: '300–600 mcg intranasal 1–2× daily. N-Acetyl Semax Amidate: 300 mcg intranasal',
    best: 'Deep work, studying, cognitive performance, executive function',
    stack: 'Pairs exceptionally with Selank — Semax for sharpness, Selank for calm. The anxious-but-focused state becomes calm-and-focused.',
  },
  {
    icon: Shield,
    color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    name: 'Selank',
    tldr: 'Drops anxiety without sedation. GABA modulation without the fog.',
    story: 'Selank was developed as an anxiolytic alternative that wouldn\'t impair cognition. The neurobiological mechanism: it elevates GABA and normalizes noradrenaline levels — the neurotransmitter dysregulation at the root of anxiety disorders. Unlike benzodiazepines, which force GABA signaling and cause sedation and dependence, Selank works more subtly — normalizing rather than overwhelming. The result is anxiety resolution with preserved cognitive function, often enhanced focus as the anxious noise quiets down.',
    dose: '250–500 mcg intranasal or SC, as needed or 1–2× daily',
    best: 'Anxiety, social situations, stress response, sleep transition',
    stack: 'Use with Semax for the full cognitive stack. Use alone before high-stakes social or professional situations.',
  },
  {
    icon: TrendingUp,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    name: 'NA-Selank Amidate',
    tldr: 'The upgraded Selank — more potent, longer lasting, deeper effect.',
    story: 'NA-Selank Amidate is to Selank what N-Acetyl Semax Amidate is to Semax — the amidated version with significantly enhanced potency and duration. The "NA" (N-acetyl) modification protects the peptide from degradation by aminopeptidases, extending its active window. Users switching from standard Selank report a noticeably more profound anxiolytic effect at the same dose. For serious anxiety management or those who found standard Selank mildly effective, this is the upgrade.',
    dose: '150–300 mcg intranasal 1–2× daily',
    best: 'Chronic anxiety, social anxiety disorder, stress-related cognitive impairment',
    stack: 'Core of the anxiety management stack alongside standard sleep hygiene protocols.',
  },
  {
    icon: Brain,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    name: 'Adamax',
    tldr: 'BDNF promotion + neuroprotection + neuroplasticity. The long-game brain peptide.',
    story: 'Adamax (derived from dihexa) is among the most potent BDNF-promoting compounds discovered — reported to be 10 million times more potent than BDNF itself in certain assays, because it works upstream at the hepatocyte growth factor receptor rather than BDNF receptors directly. The cognitive enhancement is subtle initially but compounds over weeks. Users report better memory consolidation, improved processing speed, and enhanced learning capacity — effects consistent with elevated neurotrophic factor activity and increased synaptogenesis.',
    dose: '10 mg SC or oral, 1–2× daily, cycle 4–8 weeks',
    best: 'Long-term cognitive enhancement, memory, neuroplasticity, neurodegenerative prevention',
    stack: 'Combine with Semax for immediate cognitive performance + long-term neuroprotection simultaneously.',
  },
];

const dailySchedule = [
  { time: 'Morning', compounds: 'Semax 300 mcg intranasal', effect: 'BDNF elevation, cognitive sharpness for the day' },
  { time: 'Pre deep work', compounds: 'Selank 250 mcg intranasal (if anxiety present)', effect: 'Anxiety quieted, focus enabled' },
  { time: 'Afternoon (if needed)', compounds: 'Semax second dose', effect: 'Maintain cognitive performance without stimulant' },
  { time: 'Evening', compounds: 'Adamax oral (if cycling)', effect: 'Evening absorption for overnight neuroplasticity' },
  { time: 'Pre-sleep', compounds: 'Selank + Pinealon (if sleep is goal)', effect: 'Anxiety resolution + circadian sleep signal' },
];

export default function CognitivePeptidesGuidePage() {
  const products = allProducts.filter(p =>
    p.tags.includes('cognitive') || p.tags.includes('nootropic') ||
    ['selank-10mg', 'na-selank-amidate-10mg', 'n-acetyl-semax-amidate-30mg', 'adamax-10mg', 'dsip-5mg'].includes(p.slug)
  ).slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-bold text-sm">Cognitive Optimization</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Your Brain Is<br />
            <span className="gradient-text">Also Biology.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Cognitive decline, anxiety, brain fog — these aren't personality traits or attitude problems.
            They're BDNF levels. GABA balance. Noradrenaline. Neuroinflammation. All of these have
            specific peptide interventions with decades of research behind them.
          </p>
        </div>
      </AnimateIn>

      {/* Cognitive targets */}
      <AnimateIn delay={0.05}>
        <h2 className="text-3xl font-black text-white mb-6">The Neurotransmitter Map</h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Target System</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">What It Controls</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-blue-400">Peptide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {cognitiveTargets.map((row) => (
                <tr key={row.target} className="hover:bg-white/2 transition-colors">
                  <td className={`py-4 px-4 font-semibold text-sm ${row.color}`}>{row.target}</td>
                  <td className="py-4 px-4 text-gray-400 text-sm">{row.effect}</td>
                  <td className="py-4 px-4 text-white font-medium text-sm">{row.peptide}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* Peptide deep dives */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-8">The Cognitive Peptides</h2>
        <div className="space-y-5 mb-16">
          {peptides.map((p) => (
            <div key={p.name} className="p-7 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${p.color}`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{p.name}</h3>
                  <p className="text-brand-300 font-semibold italic text-sm">{p.tldr}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-5">{p.story}</p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Dose</p>
                  <p className="text-white font-medium text-sm">{p.dose}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Best For</p>
                  <p className="text-gray-300 text-sm">{p.best}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Stack With</p>
                  <p className="text-gray-400 text-sm">{p.stack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Daily schedule */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-8">Sample Daily Protocol</h2>
        <div className="space-y-3 mb-16">
          {dailySchedule.map((s) => (
            <div key={s.time} className="flex gap-5 p-5 bg-[#111] border border-white/5 rounded-2xl items-center">
              <div className="w-28 shrink-0">
                <p className="text-blue-400 font-bold text-sm">{s.time}</p>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{s.compounds}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.effect}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-8">Cognitive Peptides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

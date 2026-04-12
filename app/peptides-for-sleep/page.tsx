import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { Moon, Brain, Activity, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peptides for Sleep — DSIP, Selank & Pinealon Deep Sleep Protocols',
  description:
    'The best peptides for deeper sleep, faster recovery, and waking up actually rested. DSIP, Selank, Pinealon, and Epitalon explained with real dosing protocols.',
};

const sleepPeptides = [
  {
    name: 'DSIP',
    full: 'Delta Sleep-Inducing Peptide',
    icon: Moon,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    tagline: 'The original sleep peptide — isolated from rabbit brain in 1977.',
    how: 'DSIP was literally named after what it does. It promotes delta wave activity — the deep, slow-wave sleep where growth hormone is released and tissue is repaired. It doesn\'t knock you out like a sedative. It pulls you into the architecture of sleep that actually restores you.',
    dose: '100–300 mcg subcutaneous, 30–60 min before bed',
    best: 'Chronic insomnia, poor sleep quality, low GH output',
  },
  {
    name: 'Selank',
    full: 'Anxiolytic Nootropic Peptide',
    icon: Brain,
    color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    tagline: 'When your mind won\'t shut off at 11pm — this is the answer.',
    how: 'Selank is a synthetic analogue of tuftsin, an immunomodulatory peptide. It elevates GABA, reduces excess noradrenaline, and normalizes serotonin — the exact neurotransmitter pattern that makes anxious, wired-at-night brains finally quiet down. It also improves BDNF, which means better memory consolidation during sleep.',
    dose: '250–500 mcg subcutaneous or intranasal, evening',
    best: 'Anxiety-driven insomnia, racing thoughts, stress-disrupted sleep',
  },
  {
    name: 'Pinealon',
    full: 'Pineal Gland Peptide Bioregulator',
    icon: Clock,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    tagline: 'Restore your circadian clock at the cellular level.',
    how: 'The pineal gland produces melatonin. Pinealon is a tripeptide bioregulator that restores pineal gland function — not by flooding you with exogenous melatonin (which desensitizes receptors over time), but by rebuilding the gland\'s own production capacity. Night shift workers, frequent travelers, and anyone whose circadian rhythm has been disrupted notice this profoundly.',
    dose: '5–10 mg oral or subcutaneous, 30 min before target sleep time',
    best: 'Circadian dysregulation, jet lag, shift work, age-related melatonin decline',
  },
  {
    name: 'Epitalon',
    full: 'Pineal Longevity Peptide',
    icon: Activity,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    tagline: 'The longevity peptide that also rebuilds deep sleep cycles.',
    how: 'Epitalon activates telomerase and resets the pineal clock. As we age, pineal output declines — which is why sleep quality degrades in your 30s and 40s before you ever feel "old." Epitalon restores the pineal gland\'s output capacity. The deep sleep improvement is a direct result of better melatonin rhythm, not sedation.',
    dose: '5–10 mg per night, 10-night course, 2× yearly',
    best: 'Age-related sleep decline, longevity protocols, recovery quality',
  },
];

const sleepArchitecture = [
  { stage: 'Stage 1 — Light Sleep', duration: '5–10 min', value: 'Transition. Easy to wake.', peptide: '—' },
  { stage: 'Stage 2 — Light Sleep', duration: '20 min', value: 'Heart rate slows, body temp drops. Memory consolidation begins.', peptide: 'Selank' },
  { stage: 'Stage 3 — Deep Sleep (SWS)', duration: '20–40 min', value: 'Growth hormone release. Tissue repair. Immune strengthening.', peptide: 'DSIP' },
  { stage: 'REM Sleep', duration: '90 min cycles', value: 'Emotional processing. Motor skill consolidation. Neuroplasticity.', peptide: 'Selank + DSIP' },
  { stage: 'Circadian Reset', duration: 'Ongoing', value: 'Melatonin rhythm governs overall architecture quality.', peptide: 'Pinealon / Epitalon' },
];

const stackOptions = [
  {
    name: 'The Anxiety Stack',
    for: 'Mind won\'t stop → body won\'t sleep',
    peptides: 'Selank 300 mcg + DSIP 200 mcg',
    timing: '45 min before bed',
    note: 'Selank quiets the anxious loop. DSIP pulls the architecture deeper.',
  },
  {
    name: 'The Recovery Stack',
    for: 'Athletes, high training volume',
    peptides: 'DSIP 300 mcg + CJC-1295/Ipa (pre-sleep)',
    timing: '60 min before bed',
    note: 'DSIP deepens SWS where GH is released. CJC/Ipa amplifies that GH pulse.',
  },
  {
    name: 'The Longevity Stack',
    for: 'Age-related sleep degradation',
    peptides: 'Epitalon 10 mg + Pinealon 5 mg',
    timing: '30 min before target sleep time',
    note: '10-night course, run twice a year. Rebuilds pineal function rather than masking decline.',
  },
];

export default function PeptidesForSleepPage() {
  const products = allProducts.filter(p =>
    p.tags.includes('sleep') || ['epithalon-50mg', 'selank-10mg', 'dsip-5mg', 'dsip-10mg', 'pinealon-10mg', 'cjc1295-ipamorelin'].includes(p.slug)
  ).slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
            <Moon className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-400 font-bold text-sm">Sleep Optimization</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Sleep Deeper.<br />
            <span className="gradient-text">Recover Faster.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Bad sleep doesn't just make you tired — it halts muscle repair, spikes cortisol, tanks testosterone,
            and accelerates aging. These peptides fix the architecture of sleep, not just the surface symptoms.
          </p>
        </div>
      </AnimateIn>

      {/* The real problem section */}
      <AnimateIn delay={0.05}>
        <div className="mb-16 grid sm:grid-cols-3 gap-5">
          {[
            { label: '−70%', desc: 'testosterone drop from one week of poor sleep', color: 'text-red-400' },
            { label: '+37%', desc: 'injury risk increase with less than 8hrs sleep', color: 'text-amber-400' },
            { label: '×2', desc: 'cortisol increase from chronic sleep deprivation', color: 'text-orange-400' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 bg-[#111] border border-white/5 rounded-2xl text-center">
              <div className={`text-5xl font-black mb-2 ${stat.color}`}>{stat.label}</div>
              <p className="text-gray-400 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Sleep Architecture Table */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-6">Understanding Sleep Architecture</h2>
        <p className="text-gray-400 text-lg mb-6 max-w-3xl">
          Most sleep aids just knock you out — they don't improve the structure of sleep. Peptides work by targeting
          specific stages where the real recovery happens.
        </p>
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Stage</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Duration</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">What Happens</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Target Peptide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {sleepArchitecture.map((row) => (
                <tr key={row.stage} className="hover:bg-white/2 transition-colors">
                  <td className="py-4 px-4 text-white font-semibold">{row.stage}</td>
                  <td className="py-4 px-4 text-indigo-400 font-medium">{row.duration}</td>
                  <td className="py-4 px-4 text-gray-300 text-sm">{row.value}</td>
                  <td className="py-4 px-4 text-brand-400 font-medium text-sm">{row.peptide}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* Peptide breakdowns */}
      <AnimateIn delay={0.15}>
        <h2 className="text-3xl font-black text-white mb-8">The Sleep Peptides, Explained</h2>
        <div className="space-y-6 mb-16">
          {sleepPeptides.map((p) => (
            <div key={p.name} className="p-7 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${p.color}`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.full}</p>
                </div>
              </div>
              <p className="text-brand-300 font-semibold italic mb-3">{p.tagline}</p>
              <p className="text-gray-400 leading-relaxed mb-4">{p.how}</p>
              <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Dose</p>
                  <p className="text-white font-medium text-sm">{p.dose}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Best For</p>
                  <p className="text-gray-300 text-sm">{p.best}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Stack options */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-8">Stack Protocols by Goal</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {stackOptions.map((s) => (
            <div key={s.name} className="p-6 bg-[#111] border border-white/5 rounded-2xl flex flex-col">
              <h3 className="text-lg font-black text-white mb-1">{s.name}</h3>
              <p className="text-sm text-gray-500 italic mb-4">{s.for}</p>
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Peptides</p>
                  <p className="text-brand-400 font-semibold text-sm">{s.peptides}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Timing</p>
                  <p className="text-white text-sm">{s.timing}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Why It Works</p>
                  <p className="text-gray-400 text-sm">{s.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-8">Sleep Peptides from Phiogen</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

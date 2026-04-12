import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { Moon, TrendingUp, Dumbbell, Zap, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CJC-1295 / Ipamorelin Guide — GH Peptide Stack Protocol | MaxxingPeptides',
  description:
    'The complete guide to the CJC-1295 and Ipamorelin stack. How the combination amplifies your natural GH pulse, dosing timing, what results to expect, and why it\'s the go-to GH secretagogue blend.',
};

const whyCombine = [
  {
    icon: TrendingUp,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'CJC-1295 — The Duration',
    body: 'CJC-1295 (without DAC) is a GHRH analogue — it mimics growth hormone releasing hormone and extends the natural GH pulse your pituitary already produces. Instead of a short burst, you get an extended, sustained elevation. The half-life without DAC is around 30 minutes, which syncs perfectly with the pre-sleep window.',
  },
  {
    icon: Zap,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    title: 'Ipamorelin — The Amplitude',
    body: 'Ipamorelin is a GHRP (growth hormone releasing peptide) that amplifies the size of the GH pulse. What makes it unique: it\'s GH-selective. Unlike GHRP-2 or GHRP-6 which also spike cortisol and prolactin, Ipamorelin only drives GH release. The selectivity is why it\'s the preferred GHRP for long-term protocols — you don\'t get the side effects that make the other GHRPs harder to run consistently.',
  },
  {
    icon: Moon,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    title: 'Together — The Amplified Pulse',
    body: 'GHRH + GHRP is synergistic — the combination produces 3–5× the GH release of either compound alone. CJC-1295 opens the window, Ipamorelin fills it. Injected 30–60 minutes before sleep, this amplified pulse rides into your slow-wave sleep phase where GH-driven recovery, fat oxidation, and muscle protein synthesis all happen.',
  },
];

const benefitsByGoal = [
  {
    goal: 'Body Composition',
    icon: Dumbbell,
    timeline: '6–8 weeks to notice, 12 weeks for full effect',
    what: [
      'Fat loss preferentially from visceral and subcutaneous fat',
      'Muscle protein synthesis increases overnight',
      'Body weight often stays similar — composition shifts',
      'Midsection fat responds particularly well',
    ],
  },
  {
    goal: 'Recovery',
    icon: TrendingUp,
    timeline: '2–4 weeks',
    what: [
      'Faster clearance of soreness between sessions',
      'Connective tissue and joint recovery improvement',
      'Better tolerance for higher training frequency',
      'Deeper sleep drives more physical repair',
    ],
  },
  {
    goal: 'Anti-Aging',
    icon: Clock,
    timeline: '8–12 weeks',
    what: [
      'Skin thickness and collagen density improvement',
      'Increased energy and mental clarity (GH\'s cognitive effects)',
      'Improved insulin sensitivity',
      'Reduction in age-related body fat accumulation',
    ],
  },
];

const timeline = [
  { period: 'Week 1–2', status: 'baseline', title: 'Adaptation', desc: 'Sleep quality improvements are usually the first thing people notice. Deeper sleep, more vivid dreams. Nothing dramatic yet — the GH pulse is establishing.' },
  { period: 'Week 3–4', status: 'building', title: 'First Signs', desc: 'Recovery between sessions is noticeably faster. Energy is slightly higher. Some users notice their physique looking "harder" — less soft — even without diet changes.' },
  { period: 'Week 5–8', status: 'active', title: 'Body Composition Shift', desc: 'This is the main window. Fat in the midsection visibly reduces. Muscle fullness increases. The scale may not move dramatically but measurements do. This is the period people run photos to confirm what they\'re seeing.' },
  { period: 'Week 9–12', status: 'peak', title: 'Peak Effect', desc: 'Full protocol impact. The compound effect of 3 months of improved GH signaling overnight shows clearly in body composition, skin quality, and strength numbers.' },
  { period: 'Week 13–16', status: 'off', title: 'Off Period', desc: 'Take 4 weeks off before the next cycle. GH axis sensitivity restores. Results are maintained — the composition changes from the cycle are real and don\'t reverse immediately.' },
];

const dosDonts = [
  { type: 'do', text: 'Inject 30–60 minutes before sleep — this is when the GH pulse naturally occurs' },
  { type: 'do', text: 'Fast for 2–3 hours before injection — insulin blunts GH release, so avoid carbs/fat beforehand' },
  { type: 'do', text: 'Run at minimum 12 weeks — body composition changes require time, don\'t judge at 4 weeks' },
  { type: 'do', text: 'Keep protein high (1g per lb bodyweight) to give the GH-driven protein synthesis something to work with' },
  { type: 'dont', text: 'Inject with food in your stomach — reduces GH response by up to 50%' },
  { type: 'dont', text: 'Stop and start repeatedly — consistency is how this compound works' },
  { type: 'dont', text: 'Expect steroid-like effects — this is subtle biology, not pharmacological force' },
  { type: 'dont', text: 'Use GHRP-6 thinking it\'s equivalent — it spikes cortisol and prolactin, Ipamorelin doesn\'t' },
];

export default function IpamorelinCJCGuidePage() {
  const products = allProducts.filter(p =>
    ['cjc1295-ipamorelin', 'igf-1lr3', 'bpc157-10mg', 'mots-c-10mg'].includes(p.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Moon className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold text-sm">GH Secretagogue Stack</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            CJC-1295 + Ipamorelin:<br />
            <span className="gradient-text">The GH Pulse You're Missing</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Growth hormone doesn't peak at 20 and stay there. It declines roughly 15% per decade after 30.
            That GH pulse during slow-wave sleep — the one driving fat metabolism, collagen synthesis, and
            muscle repair — gets quieter every year. This combination amplifies it back.
          </p>
        </div>
      </AnimateIn>

      {/* Stats */}
      <AnimateIn delay={0.05}>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {[
            { num: '3–5×', label: 'GH release vs either compound alone', color: 'text-amber-400' },
            { num: '15%/decade', label: 'natural GH decline after age 30', color: 'text-red-400' },
            { num: '8 weeks', label: 'before measurable body composition changes appear', color: 'text-brand-400' },
          ].map((s) => (
            <div key={s.num} className="p-6 bg-[#111] border border-white/5 rounded-2xl text-center">
              <div className={`text-4xl font-black mb-2 ${s.color}`}>{s.num}</div>
              <p className="text-gray-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Why combine */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-8">Why You Use Both</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {whyCombine.map((w) => (
            <div key={w.title} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-semibold mb-4 ${w.color}`}>
                <w.icon className="w-4 h-4" />
                {w.title}
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">{w.body}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Benefits by goal */}
      <AnimateIn delay={0.15}>
        <h2 className="text-3xl font-black text-white mb-8">What to Expect by Goal</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {benefitsByGoal.map((b) => (
            <div key={b.goal} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <b.icon className="w-6 h-6 text-brand-400 mb-3" />
              <h3 className="text-lg font-black text-white mb-1">{b.goal}</h3>
              <p className="text-xs text-gray-500 mb-4">{b.timeline}</p>
              <ul className="space-y-2">
                {b.what.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Timeline */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-8">The 16-Week Protocol Timeline</h2>
        <div className="space-y-3 mb-16">
          {timeline.map((t) => (
            <div key={t.period} className="flex gap-5 p-6 bg-[#111] border border-white/5 rounded-2xl items-start">
              <div className="shrink-0 w-20 text-center">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Period</div>
                <div className="text-amber-400 font-black text-sm">{t.period}</div>
              </div>
              <div>
                <p className="text-white font-black mb-1">{t.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Dos and don'ts */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-8">Do's and Don'ts</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-16">
          {dosDonts.map((item, i) => (
            <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border ${item.type === 'do' ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
              <span className={`font-black text-sm shrink-0 mt-0.5 ${item.type === 'do' ? 'text-emerald-400' : 'text-red-400'}`}>{item.type === 'do' ? 'DO' : 'DON\'T'}</span>
              <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.3}>
        <h2 className="text-3xl font-black text-white mb-8">Build Your GH Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

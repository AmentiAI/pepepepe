import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { RelatedLinks } from '@/components/RelatedLinks';
import { CheckCircle2, TrendingDown, Scale, Zap, FlaskConical, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peptides for Weight Loss — GLP-1, AOD9604 & Metabolic Peptide Guide 2026',
  description:
    'The complete guide to peptides for weight loss. Compare semaglutide, tirzepatide, and retatrutide clinical data. AOD9604, 5-Amino-1MQ, and combination protocols. Evidence-based dosing and results timelines.',
};

const glp1Comparison = [
  {
    name: 'Semaglutide',
    mechanism: 'GLP-1 agonist',
    weightLoss: '14.9%',
    trial: 'STEP-1 (68 weeks)',
    halfLife: '~7 days',
    dose: '0.25–2.4mg/week',
    color: 'text-blue-400',
  },
  {
    name: 'Tirzepatide',
    mechanism: 'GLP-1 + GIP dual agonist',
    weightLoss: '22.5%',
    trial: 'SURMOUNT-1 (72 weeks)',
    halfLife: '~5 days',
    dose: '2.5–15mg/week',
    color: 'text-violet-400',
  },
  {
    name: 'Retatrutide',
    mechanism: 'GLP-1 + GIP + Glucagon triple agonist',
    weightLoss: '24.2%',
    trial: 'Phase 2 TRIUMPH (48 weeks)',
    halfLife: '~6 days',
    dose: '1–12mg/week',
    color: 'text-brand-400',
  },
  {
    name: 'CagriSema',
    mechanism: 'GLP-1 + Amylin dual agonist',
    weightLoss: '22.7%',
    trial: 'REDEFINE-1 Phase 3',
    halfLife: 'GLP-1: 7d / Amylin: 7d',
    dose: '2.4mg sema + 2.4mg cagri',
    color: 'text-emerald-400',
  },
];

const mechanismCards = [
  {
    icon: Scale,
    title: 'Appetite Suppression (GLP-1 Receptor)',
    color: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
    description: 'GLP-1 receptors in the hypothalamus reduce the hedonic drive to eat — the reward-seeking overeating that drives most caloric excess. Unlike willpower-based restriction, GLP-1 agonism chemically reduces food reward signals, making eating less rather than eating poorly the natural outcome. Users describe eating less not because they\'re trying to, but because they genuinely want less food.',
  },
  {
    icon: Zap,
    title: 'Gastric Emptying Delay (GLP-1)',
    color: 'border-violet-500/30 bg-violet-500/5 text-violet-400',
    description: 'GLP-1 receptors in the stomach slow gastric emptying — the rate at which food moves from the stomach to the small intestine. Slower emptying means sustained satiety between meals, reduced postprandial glucose spikes, and extended feelings of fullness from each meal. This is the mechanism responsible for the portion reduction GLP-1 users experience.',
  },
  {
    icon: TrendingDown,
    title: 'Thermogenesis (Glucagon Receptor)',
    color: 'border-amber-500/30 bg-amber-500/5 text-amber-400',
    description: 'Retatrutide adds glucagon receptor agonism — a mechanism absent from semaglutide and tirzepatide. Glucagon activates brown adipose tissue (BAT) thermogenesis, increasing the body\'s heat production from fat stores independently of caloric intake. This adds an energy expenditure component to the appetite suppression mechanism, explaining retatrutide\'s superior weight loss at equivalent doses.',
  },
  {
    icon: FlaskConical,
    title: 'Lipolysis (AOD9604 / 5-Amino-1MQ)',
    color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
    description: 'AOD9604 directly activates beta-3 adrenergic receptors in adipocytes, triggering hormone-sensitive lipase to hydrolyze stored triglycerides into free fatty acids. 5-Amino-1MQ works upstream via NNMT inhibition to increase intracellular NAD+ and shift adipocyte gene expression toward lipolysis. Both work independently of the appetite suppression axis, making them genuinely additive with GLP-1 compounds.',
  },
];

const faq = [
  {
    q: 'Which weight loss peptide should I start with?',
    a: 'For most beginners, semaglutide at the lowest dose (0.25mg/week, titrating to 0.5–1mg) is the recommended starting point. It has the longest clinical track record, the most predictable side effect profile, and the most well-characterized titration schedule. Tirzepatide produces greater weight loss but requires more careful titration. Retatrutide is the most potent but least studied in long-term settings.',
  },
  {
    q: 'How quickly do weight loss peptides work?',
    a: 'Most users experience reduced appetite within the first 1–2 weeks of GLP-1 therapy. Meaningful scale weight loss typically begins at weeks 3–6 as the dietary reduction produces a caloric deficit. Clinical trials measuring total weight loss outcomes are run at 48–72 weeks — the full weight loss potential takes months, not days, to manifest. Patience and consistent weekly dosing are essential.',
  },
  {
    q: 'Do I need to diet while on peptides for weight loss?',
    a: 'The appetite suppression from GLP-1 peptides creates an automatic caloric deficit in most users without explicit dieting. However, optimizing protein intake (minimum 1.6g/kg lean body mass) is critical — GLP-1-driven weight loss without adequate protein intake accelerates muscle loss alongside fat loss. GLP-1 agonists reduce appetite non-specifically; protecting lean mass requires intentional protein prioritization.',
  },
  {
    q: 'Can I combine multiple weight loss peptides?',
    a: 'AOD9604 and 5-Amino-1MQ can be added to GLP-1 protocols without mechanism overlap. AOD9604 adds direct adipocyte lipolysis; 5-Amino-1MQ adds NNMT inhibition and NAD+ sparing — neither interferes with GLP-1 receptor signaling. Combining two full-dose GLP-1 agonists simultaneously is not generally recommended due to additive nausea risk without proportional benefit increase.',
  },
  {
    q: 'What happens when you stop weight loss peptides?',
    a: 'The SURMOUNT-4 withdrawal trial demonstrated that tirzepatide cessation results in approximately 50% weight regain within 1 year. GLP-1 compounds suppress appetite pharmacologically — when the compound is removed, appetite returns to baseline. Long-term use, dietary habit change during the protocol, and transition to maintenance dosing (lower than therapeutic dose) are strategies to sustain results.',
  },
  {
    q: 'Are weight loss peptides safe long-term?',
    a: 'Semaglutide has the longest track record — the SUSTAIN and SELECT cardiovascular outcome trials run 4+ years showed no significant safety concerns and demonstrated cardiovascular benefit (SELECT trial: 20% reduction in MACE events). Tirzepatide has 3+ year data from SURMOUNT extension studies. Long-term retatrutide data is still accumulating from Phase 3 trials currently underway.',
  },
];

const weightLossProducts = allProducts.filter(p =>
  p.category === 'fat-loss' || p.tags.some(t => ['fat-loss', 'triple-agonist', 'glp-1', 'lipolysis'].includes(t))
).slice(0, 6);

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptides for Weight Loss — Complete GLP-1 and Metabolic Peptide Guide',
  description: 'Evidence-based guide comparing semaglutide, tirzepatide, retatrutide, AOD9604, and other weight loss peptides with clinical data.',
  url: 'https://maxxingpeptide.com/peptides-for-weight-loss',
  publisher: { '@type': 'Organization', name: 'MaxxingPeptides', url: 'https://maxxingpeptide.com' },
};

export default function PeptidesForWeightLossPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <TrendingDown className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-bold text-sm">Peptides for Weight Loss</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            The Science of<br />
            <span className="gradient-text">Peptide-Driven Fat Loss.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed mb-6">
            GLP-1 receptor agonists represent the most significant advance in weight management pharmacology since the discovery of leptin. Semaglutide, tirzepatide, and retatrutide produce weight loss averaging 15–24% of body weight in clinical trials — results that exceed bariatric surgery outcomes in head-to-head comparisons and dwarf anything achievable with conventional diet and exercise interventions alone.
          </p>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            This guide covers every major class of weight loss peptide — the mechanisms, the clinical data, the dosing protocols, and how to combine them for maximum effect.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/fat-loss" className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-300 font-semibold rounded-xl text-sm transition-colors">
              Fat Loss Category →
            </Link>
            <Link href="/stacks/beginner-fat-loss-protocol" className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-black font-semibold rounded-xl text-sm transition-colors">
              Beginner Protocol →
            </Link>
          </div>
        </div>
      </AnimateIn>

      {/* Stats */}
      <AnimateIn delay={0.04}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { value: '24.2%', label: 'Maximum weight loss — retatrutide Phase 2', color: 'text-brand-400' },
            { value: '72wks', label: 'SURMOUNT-1 trial duration for tirzepatide', color: 'text-violet-400' },
            { value: '20%', label: 'MACE reduction — semaglutide SELECT trial', color: 'text-blue-400' },
            { value: '4', label: 'Distinct weight loss mechanisms available', color: 'text-emerald-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-center">
              <div className={`text-2xl sm:text-3xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* How weight loss peptides work */}
      <AnimateIn delay={0.06}>
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">How Weight Loss Peptides Work</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl">Unlike stimulants or diuretics, peptide-based weight loss works through the same biological pathways that regulate hunger, satiety, and energy expenditure — just activated more potently than natural levels allow.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {mechanismCards.map(card => {
              const Icon = card.icon;
              return (
                <div key={card.title} className={`border rounded-2xl p-7 ${card.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimateIn>

      {/* GLP-1 Deep Dive */}
      <AnimateIn delay={0.08}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-8 mb-14">
          <h2 className="text-2xl font-bold text-white mb-5">The GLP-1 Class: From Ozempic to Retatrutide</h2>
          <div className="prose-dark max-w-none space-y-4 text-gray-400 text-base leading-relaxed">
            <p>GLP-1 (glucagon-like peptide-1) is a naturally occurring incretin hormone secreted by L-cells in the distal small intestine in response to food intake. Its physiological role is to signal the pancreas to release insulin, inhibit glucagon (preventing postprandial glucose spikes), slow gastric emptying, and send satiety signals to the hypothalamus via the vagus nerve. In the context of weight loss, it's the hypothalamic action that matters most.</p>
            <p>The native GLP-1 peptide has a plasma half-life of approximately 2 minutes — degraded almost instantly by the enzyme dipeptidyl peptidase-4 (DPP-4). Pharmaceutical development has produced synthetic GLP-1 analogues with modified amino acid sequences that resist DPP-4 degradation, extending half-life to days rather than minutes. Semaglutide achieves a 7-day half-life through additional albumin-binding modifications — enabling once-weekly dosing that maintains continuous GLP-1 receptor activation throughout the week.</p>
            <p>The weight loss effect of sustained GLP-1 receptor activation is qualitatively different from hunger suppression via stimulants. GLP-1 agonism reduces what researchers describe as "hedonic eating" — the food reward signals driven by dopaminergic circuits in the nucleus accumbens that drive us to eat beyond caloric need. Users consistently describe the sensation not as feeling restricted but as genuinely wanting less food. The psychological experience of eating under GLP-1 therapy is a reduction in food's motivational pull, not a willful suppression of hunger.</p>
            <p>Tirzepatide added GIP (glucose-dependent insulinotropic polypeptide) receptor agonism to the GLP-1 mechanism. GIP receptors, when activated, enhance fat oxidation in adipose tissue and improve insulin sensitivity beyond what GLP-1 alone achieves. The SURMOUNT-1 trial demonstrated that this dual mechanism produces 22.5% weight loss — a 50% improvement over semaglutide's 14.9% — at similar tolerability. Retatrutide further added glucagon receptor agonism, which activates thermogenesis in brown adipose tissue, creating a three-pronged attack on body weight from appetite, metabolism, and thermogenesis simultaneously.</p>
          </div>
        </div>
      </AnimateIn>

      {/* Comparison Table */}
      <AnimateIn delay={0.1}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-7 mb-14">
          <h2 className="text-xl font-bold text-white mb-6">GLP-1 Class Comparison — Clinical Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-gray-300 font-semibold text-left pr-4">Compound</th>
                  <th className="pb-3 text-gray-300 font-semibold text-left pr-4">Mechanism</th>
                  <th className="pb-3 text-gray-300 font-semibold text-left pr-4">Weight Loss</th>
                  <th className="pb-3 text-gray-300 font-semibold text-left pr-4">Key Trial</th>
                  <th className="pb-3 text-gray-300 font-semibold text-left pr-4">Half-Life</th>
                  <th className="pb-3 text-gray-300 font-semibold text-left">Research Dose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {glp1Comparison.map(row => (
                  <tr key={row.name}>
                    <td className={`py-3 pr-4 font-bold ${row.color}`}>{row.name}</td>
                    <td className="py-3 pr-4 text-gray-400 text-xs">{row.mechanism}</td>
                    <td className="py-3 pr-4 text-white font-semibold">{row.weightLoss}</td>
                    <td className="py-3 pr-4 text-gray-500 text-xs">{row.trial}</td>
                    <td className="py-3 pr-4 text-gray-400">{row.halfLife}</td>
                    <td className="py-3 text-gray-400 text-xs">{row.dose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimateIn>

      {/* Beyond GLP-1 */}
      <AnimateIn delay={0.12}>
        <div className="bg-[#111] border border-brand-500/20 rounded-2xl p-8 mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Beyond GLP-1: Non-Receptor Weight Loss Peptides</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-brand-400 mb-3">AOD9604 — HGH Fragment 176–191</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">AOD9604 is the C-terminal fragment of human growth hormone (amino acids 176–191) that retains HGH's lipolytic activity without its IGF-1-mediated anabolic and diabetogenic effects. FDA GRAS-designated with Phase IIb/III clinical data. Activates beta-3 adrenergic receptors in adipocytes, triggering hormone-sensitive lipase independent of the GLP-1 receptor pathway.</p>
              <p className="text-gray-400 text-sm leading-relaxed"><span className="text-white font-medium">Stacking value:</span> Genuine additive effect with GLP-1 compounds — different receptor, different adipocyte pathway. A GLP-1 protocol + AOD9604 addresses both appetite and direct adipocyte lipolysis simultaneously.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-400 mb-3">5-Amino-1MQ — NNMT Inhibitor</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">5-Amino-1MQ inhibits NNMT (Nicotinamide N-methyltransferase) — an enzyme hyperactivated in obese adipose tissue that depletes NAD+. NNMT inhibition raises intracellular NAD+, activates sirtuins, and shifts adipocyte gene expression from energy storage to energy burning through epigenetic reprogramming of fat cells.</p>
              <p className="text-gray-400 text-sm leading-relaxed"><span className="text-white font-medium">Key advantage:</span> Oral bioavailability. Works through entirely different mechanism from GLP-1. Combination of GLP-1 + 5-Amino-1MQ + AOD9604 covers three separate fat loss pathways with no mechanism overlap.</p>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Titration Protocol */}
      <AnimateIn delay={0.13}>
        <div className="bg-[#111] border border-violet-500/20 rounded-2xl p-8 mb-14">
          <h2 className="text-2xl font-bold text-white mb-3">How to Titrate GLP-1 Weight Loss Peptides</h2>
          <p className="text-gray-400 text-base mb-6 leading-relaxed">Slow titration is the single most important factor in determining whether your GLP-1 protocol is pleasant or plagued by nausea. The clinical approach used in STEP and SURMOUNT trials — starting at the lowest dose and increasing by one step every 4 weeks — is not optional caution. It is the primary harm reduction strategy.</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { compound: 'Semaglutide', steps: ['Weeks 1–4: 0.25mg/week', 'Weeks 5–8: 0.5mg/week', 'Weeks 9–12: 1mg/week', 'Week 13+: maintain at 0.5–2mg'], color: 'border-blue-500/20 text-blue-400' },
              { compound: 'Tirzepatide', steps: ['Weeks 1–4: 2.5mg/week', 'Weeks 5–8: 5mg/week', 'Weeks 9–12: 7.5mg/week', 'Week 13+: maintain at 5–15mg'], color: 'border-violet-500/20 text-violet-400' },
              { compound: 'Retatrutide', steps: ['Weeks 1–4: 2mg/week', 'Weeks 5–8: 4mg/week', 'Weeks 9–12: 8mg/week', 'Week 13+: maintain at 4–12mg'], color: 'border-brand-500/20 text-brand-400' },
            ].map(protocol => (
              <div key={protocol.compound} className={`bg-black/30 rounded-xl p-5 border ${protocol.color}`}>
                <h3 className={`text-base font-bold mb-3 ${protocol.color.split(' ')[1]}`}>{protocol.compound}</h3>
                <ul className="space-y-2">
                  {protocol.steps.map(step => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="text-gray-600 mt-0.5">→</span>
                      <span className="text-gray-400 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-gray-400 text-sm leading-relaxed"><span className="text-amber-300 font-medium">Side effect management: </span>Take weekly injection in the evening. Eat bland, low-fat foods for 24h post-injection. If nausea is severe, hold at current dose for an additional 4 weeks before escalating. Nausea is dose-dependent and diminishes significantly after 2–4 weeks at each dose level.</p>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Lean Mass Protection */}
      <AnimateIn delay={0.14}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-8 mb-14">
          <h2 className="text-2xl font-bold text-white mb-5">Protecting Lean Mass During GLP-1 Weight Loss</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-5">The most significant risk of aggressive GLP-1 weight loss protocols is muscle loss alongside fat loss. In the SURMOUNT trials, approximately 30–40% of weight lost on tirzepatide was lean mass — a significant catabolic burden for users who want improved body composition rather than simply a lower number on the scale.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-brand-400 mb-3">Nutritional Lean Mass Protection</h3>
              <ul className="space-y-2.5">
                {[
                  'Minimum 1.6g protein per kg bodyweight daily — consider 2g/kg for aggressive deficits',
                  'Do not rely on appetite cues — GLP-1 suppresses hunger for everything including protein',
                  'Track macronutrients explicitly: protein first, calories second',
                  'Leucine-rich protein sources: whey, eggs, lean meats preserve muscle protein synthesis',
                  'Resistance training 3–4× per week: the anabolic stimulus that signals lean mass retention',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-violet-400 mb-3">Peptide Lean Mass Protection</h3>
              <ul className="space-y-2.5">
                {[
                  'CJC-1295/Ipamorelin nightly: GH secretagogue that drives anabolism and preferentially mobilizes fat',
                  'IGF-1 LR3 post-workout: satellite cell activation for targeted lean mass preservation',
                  'Advanced Body Recomposition Stack combines tirzepatide + CJC/Ipa for simultaneous fat loss + muscle',
                  'Tesamorelin: visceral fat-specific lipolysis with anabolic GH axis activation',
                  'BPC-157: injury prevention during resistance training under caloric deficit',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* FAQ */}
      <AnimateIn delay={0.15}>
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Frequently Asked Questions — Peptides for Weight Loss</h2>
          <div className="space-y-4">
            {faq.map(item => (
              <div key={item.q} className="bg-[#111] border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-black text-white mb-2">Weight Loss Peptides</h2>
        <p className="text-gray-500 text-sm">Top-ranked fat loss compounds — sourced from Phiogen with COA-verified purity</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {weightLossProducts.map((product, i) => (
          <AnimateIn key={product.slug} delay={i * 0.06}>
            <ProductCard product={product} />
          </AnimateIn>
        ))}
      </div>
      <div className="text-center mb-16">
        <Link href="/fat-loss" className="px-8 py-3 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl transition-colors">
          View All Fat Loss Peptides →
        </Link>
      </div>

      <RelatedLinks pageKey="peptides-for-weight-loss" />
    </div>
  );
}

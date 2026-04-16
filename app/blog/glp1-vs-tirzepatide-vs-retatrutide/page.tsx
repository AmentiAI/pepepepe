import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { ArrowLeft, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GLP-1 vs. Tirzepatide vs. Retatrutide: Which Is Right for You? | MaxxingPeptides',
  description:
    'Three generations of incretin agonists. Which one matches your goal, your tolerance, and your budget? A practical comparison with dosing and side-effect data.',
};

const compounds = [
  {
    name: 'Semaglutide',
    gen: 'Gen 1 • GLP-1 agonist',
    slug: 'semaglutide-20mg',
    altSlug: 'glp-1s-10mg',
    expected: '10–15% body weight loss in 68 weeks',
    mechanism: 'Single-receptor — GLP-1 only',
    pros: [
      'Most-studied of the three. Largest dataset, longest safety record.',
      'Also improves glycemic control for pre-diabetic / Type 2 diabetic users.',
      'Cheaper than tirzepatide and retatrutide.',
      'FDA-approved (Ozempic, Wegovy) — regulatory footing clearest.',
    ],
    cons: [
      'Weight loss plateaus earlier than tirzepatide for most users.',
      'Side effects (nausea, constipation) common in first 4–8 weeks.',
      'Appetite suppression without corresponding energy expenditure increase.',
    ],
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    name: 'Tirzepatide',
    gen: 'Gen 2 • Dual GLP-1 / GIP agonist',
    slug: 'glp-2t-15mg',
    altSlug: 'glp-2t-30mg',
    expected: '20–22% body weight loss in 72 weeks',
    mechanism: 'Dual-receptor — GLP-1 + GIP',
    pros: [
      'Superior weight loss to semaglutide in head-to-head trials.',
      'GIP component appears to reduce nausea vs. equivalent GLP-1 dose.',
      'Better lipid profile improvements in trials.',
      'Effective at lower doses than semaglutide for same effect.',
    ],
    cons: [
      'Higher cost per mg than semaglutide.',
      'Shorter time in market — less real-world longitudinal data.',
      'GIP activation still being studied for long-term metabolic effects.',
    ],
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    name: 'Retatrutide',
    gen: 'Gen 3 • Triple agonist (GLP-1 / GIP / Glucagon)',
    slug: 'retatrutide-20mg',
    altSlug: 'glp-3r-15mg',
    expected: '24% body weight loss in 48 weeks (Phase 2)',
    mechanism: 'Triple-receptor — GLP-1 + GIP + glucagon',
    pros: [
      'Most aggressive weight loss of any peptide to date.',
      'Glucagon activation raises basal metabolic rate — energy expenditure actually increases.',
      'Phase 2 trial users lost weight faster than any prior GLP-1 class drug.',
      'Superior liver fat reduction, useful for NAFLD patients.',
    ],
    cons: [
      'Not yet FDA-approved; Phase 3 trials ongoing.',
      'Highest side-effect rate of the three in early data.',
      'Least real-world data on long-term safety.',
      'Most expensive per mg.',
    ],
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
];

export default function GLPComparisonArticle() {
  const products = allProducts.filter(p =>
    ['semaglutide-20mg', 'glp-2t-15mg', 'retatrutide-20mg'].includes(p.slug)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimateIn>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>

        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
          <Target className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 font-bold text-sm">Comparison</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          GLP-1 vs. Tirzepatide vs. Retatrutide:<br />
          <span className="gradient-text">Which is right for you?</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Three generations of incretin agonists, released about three years
          apart. Each hits a different combination of receptors, and the clinical
          result is genuinely different — not just marginal. Here's the honest
          breakdown without the pharma spin.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <div className="mb-12 p-8 bg-gradient-to-br from-blue-950/30 to-[#0d0d0d] border border-blue-500/20 rounded-3xl">
          <p className="text-xl font-black text-white mb-3">The quick answer</p>
          <ul className="space-y-2 text-gray-300 leading-relaxed">
            <li><strong className="text-blue-300">Semaglutide</strong> — best starting point, cheapest, most data.</li>
            <li><strong className="text-emerald-300">Tirzepatide</strong> — better results, slightly milder side effects, higher cost.</li>
            <li><strong className="text-amber-300">Retatrutide</strong> — biggest effect size, earliest stage, for users who've plateaued on the others.</li>
          </ul>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          The mechanism difference matters
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            All three mimic gut hormones that your body releases after a meal.
            Your body uses these signals to tell the pancreas to release insulin,
            to slow gastric emptying (you feel full longer), and to tell the
            brain the meal is over.
          </p>
          <p>
            <strong className="text-white">Semaglutide</strong> hits one of those
            receptors — GLP-1. <strong className="text-white">Tirzepatide</strong>{' '}
            hits two — GLP-1 and GIP, which together regulate both appetite and
            insulin sensitivity. <strong className="text-white">Retatrutide</strong>{' '}
            hits three — adding glucagon, which is the switch your body uses to
            mobilize stored energy. That glucagon component is why retatrutide
            produces weight loss that exceeds what you'd expect from appetite
            suppression alone. It's not just that you're eating less; your body
            is burning more.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
          Detailed comparison
        </h2>
        <div className="space-y-5 mb-12">
          {compounds.map((c) => (
            <div key={c.name} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <Link href={`/products/${c.slug}`} className="text-2xl font-bold text-white hover:text-brand-300 transition-colors">
                    {c.name}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">{c.gen}</p>
                </div>
                <span className={`inline-flex items-center text-xs font-semibold border rounded-full px-2.5 py-1 ${c.color}`}>
                  {c.expected}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-5">
                <span className="text-gray-500">Mechanism: </span>{c.mechanism}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-emerald-400 font-semibold mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-gray-300">
                    {c.pros.map((p) => <li key={p} className="leading-relaxed">• {p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-amber-400 font-semibold mb-2">Cons</p>
                  <ul className="space-y-1.5 text-sm text-gray-300">
                    {c.cons.map((p) => <li key={p} className="leading-relaxed">• {p}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          Who should pick what
        </h2>
        <div className="space-y-4 mb-12">
          <div className="p-6 bg-[#111] border border-blue-500/20 rounded-2xl">
            <p className="text-sm font-semibold text-blue-400 mb-2">Pick Semaglutide if…</p>
            <p className="text-gray-300 leading-relaxed">
              You're new to GLP-1s, you want the most established safety
              profile, you have 30–50 lb to lose, or you need glycemic control
              alongside weight loss. Start here before escalating. See the{' '}
              <Link href="/semaglutide-protocol" className="text-brand-400 hover:underline">
                semaglutide protocol
              </Link>.
            </p>
          </div>
          <div className="p-6 bg-[#111] border border-emerald-500/20 rounded-2xl">
            <p className="text-sm font-semibold text-emerald-400 mb-2">Pick Tirzepatide if…</p>
            <p className="text-gray-300 leading-relaxed">
              You've tried semaglutide and plateaued, you have 50+ lb to lose,
              or you want the best ratio of results to side effects. The
              current standard for serious weight loss. See the{' '}
              <Link href="/tirzepatide-guide" className="text-brand-400 hover:underline">
                tirzepatide guide
              </Link>.
            </p>
          </div>
          <div className="p-6 bg-[#111] border border-amber-500/20 rounded-2xl">
            <p className="text-sm font-semibold text-amber-400 mb-2">Pick Retatrutide if…</p>
            <p className="text-gray-300 leading-relaxed">
              You've maxed out tirzepatide at 15 mg/week and want to continue
              progress, or you have metabolic syndrome / NAFLD as a co-issue.
              Understand you're working with Phase 2 data and a less
              established side-effect map.
            </p>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.25}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          Stacking notes
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            Pairing a GLP-1 with{' '}
            <Link href="/products/cagrilintide-10mg" className="text-brand-400 hover:underline">
              cagrilintide
            </Link>{' '}
            (an amylin analog) is increasingly popular. The two mechanisms are
            complementary — GLP-1s reduce food intake, cagrilintide reduces meal
            size and improves satiety signaling. Cagri-sema and cagri-reta
            blends are already on the market.
          </p>
          <p>
            Do not run two GLP-1/GIP compounds simultaneously. They compete for
            the same receptors and you'll get no additive benefit, just additive
            side effects.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.3}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </AnimateIn>
    </div>
  );
}

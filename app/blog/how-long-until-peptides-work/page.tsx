import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { ArrowLeft, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Long Until Peptides Actually Work? | MaxxingPeptides',
  description:
    'Realistic timelines for every major peptide category. What you\'ll notice at week 1, week 4, week 12. Why some compounds feel like nothing for a month, and that\'s normal.',
};

const timelines = [
  {
    name: 'BPC-157',
    category: 'Healing',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    week1: 'Reduced pain at injection site, early anti-inflammatory signal',
    week4: 'Noticeable improvement in the target injury. Range of motion returning.',
    week12: 'Full remodeling. Tendon, gut, or nerve tissue genuinely rebuilt.',
    slug: 'bpc157-10mg',
  },
  {
    name: 'CJC-1295 / Ipamorelin',
    category: 'Growth Hormone',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    week1: 'Deeper sleep is usually the first thing. Dreams come back for some people.',
    week4: 'Improved recovery between workouts. Skin quality starts shifting.',
    week12: 'Visible body composition changes. IGF-1 up on bloodwork.',
    slug: 'cjc1295-ipamorelin',
  },
  {
    name: 'Semaglutide / Tirzepatide',
    category: 'Fat Loss',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    week1: 'Appetite suppression within 48 hours. Food noise drops immediately.',
    week4: '5–8 lb loss typical. Cravings almost absent at therapeutic dose.',
    week12: '15–20% body weight reduction on track for most users.',
    slug: 'semaglutide-20mg',
  },
  {
    name: 'GHK-Cu',
    category: 'Anti-Aging',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    week1: 'Nothing visible. Molecular work happening but not felt.',
    week4: 'Skin texture begins to improve. Wound healing acceleration.',
    week12: 'Visible reduction in fine lines, better overall skin quality.',
    slug: 'ghk-cu',
  },
  {
    name: 'Selank',
    category: 'Cognitive',
    color: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
    week1: 'Acute anxiolytic effect usually felt same day. Calmer baseline.',
    week4: 'Stabilized mood. Sleep quality improvements if anxiety was disrupting it.',
    week12: 'Full accommodation. Some users pulse on/off rather than running continuous.',
    slug: 'selank-10mg',
  },
  {
    name: 'Epithalon',
    category: 'Longevity',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    week1: 'Better sleep quality, deeper REM. Some users report vivid dreams.',
    week4: 'End of a typical 20-day cycle. Sleep and circadian improvements hold.',
    week12: 'Benefits are cumulative across annual cycles. Telomere data is long-horizon.',
    slug: 'epitalon-10mg',
  },
];

export default function HowLongUntilPeptidesWorkArticle() {
  const products = allProducts.filter(p =>
    ['bpc157-10mg', 'cjc1295-ipamorelin', 'semaglutide-20mg'].includes(p.slug)
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

        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400 font-bold text-sm">Timelines</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          How long until peptides<br />
          <span className="gradient-text">actually work?</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          The honest answer: it depends entirely on which peptide and what
          you're measuring. GLP-1s hit within 48 hours. Epithalon does
          essentially nothing you can feel until a week in. BPC-157 takes three
          months to fully rebuild damaged tissue. Here's what each category
          actually looks like on a calendar.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <div className="mb-12 p-8 bg-gradient-to-br from-amber-950/30 to-[#0d0d0d] border border-amber-500/20 rounded-3xl">
          <p className="text-xl font-black text-white mb-3">The one rule</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Anything that affects <strong className="text-white">signaling
            molecules directly</strong> (fat-loss peptides, Selank, PT-141)
            feels fast. Anything that works through{' '}
            <strong className="text-white">tissue remodeling</strong>{' '}
            (healing, skin, anti-aging) takes weeks before you can see it and
            months before it's fully cashed in. Neither is a problem — they're
            just different clocks.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
          Timelines by peptide
        </h2>
        <div className="space-y-5 mb-12">
          {timelines.map((t) => (
            <div key={t.name} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <Link href={`/products/${t.slug}`} className="text-xl font-bold text-white hover:text-brand-300 transition-colors">
                  {t.name}
                </Link>
                <span className={`inline-flex items-center text-xs font-semibold border rounded-full px-2.5 py-1 ${t.color}`}>
                  {t.category}
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1.5">Week 1</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{t.week1}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1.5">Week 4</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{t.week4}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1.5">Week 12</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{t.week12}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          Why people give up too early
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            The most common mistake is judging a healing or GH peptide at week 2.
            At week 2, BPC-157 has barely had time to establish tissue
            concentration. CJC-1295 / Ipamorelin may have improved your sleep
            already, but the body composition changes aren't on the mirror yet.
            Pulling the plug here is like quitting a diet on day 10 because the
            scale hasn't moved.
          </p>
          <p>
            Fat-loss peptides have the opposite problem. Semaglutide hits fast —
            appetite vanishes within a day or two — and users sometimes chase
            the feeling by escalating too quickly. The right dose is the one
            that suppresses food noise without nuking your calorie intake to
            unsustainable levels.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          How to set realistic expectations
        </h2>
        <div className="p-6 bg-[#111] border border-white/5 rounded-2xl space-y-3 mb-12">
          {[
            'Commit to 12 weeks minimum for any healing, GH, or anti-aging peptide before evaluating effects.',
            'Take bloodwork and progress photos at baseline. Memory is unreliable; numbers and pictures aren\'t.',
            'Pick one target outcome per cycle. "Heal the shoulder" is trackable; "feel better" isn\'t.',
            'Track sleep quality with a wearable or journal. It\'s often the first thing that moves on GH peptides.',
            'Don\'t stack new compounds inside the 4-week assessment window — you\'ll never know what did what.',
          ].map((tip) => (
            <div key={tip} className="flex gap-3 items-start">
              <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 shrink-0" />
              <p className="text-gray-300 leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.25}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          Fast-acting picks
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          If early signal matters to you — because you need to know the vial is
          real, or because you're feeling out whether peptides are for you —
          start with a compound whose effects show up in days, not months.
          See also the{' '}
          <Link href="/peptides-for-weight-loss" className="text-brand-400 hover:underline">
            peptides-for-weight-loss
          </Link>{' '}
          and{' '}
          <Link href="/ipamorelin-cjc-guide" className="text-brand-400 hover:underline">
            CJC-1295 / Ipamorelin guide
          </Link>{' '}
          for deeper dives.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </AnimateIn>
    </div>
  );
}

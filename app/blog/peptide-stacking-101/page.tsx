import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { ArrowLeft, Layers, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peptide Stacking 101: How to Combine Without Wasting Money | MaxxingPeptides',
  description:
    'The rules of peptide stacking — what combines well, what fights for the same receptors, and when to skip the stack entirely. Plus three foundational stacks to copy.',
};

const rules = [
  {
    title: 'Different systems stack. Same systems compete.',
    body: 'BPC-157 (healing) and CJC-1295 (GH) act on entirely different tissues via different receptors. They stack cleanly. GHRP-2 and GHRP-6 both bind the same ghrelin receptor — running them together is just a more expensive single dose.',
  },
  {
    title: 'One variable at a time.',
    body: 'If you add three peptides on the same day, you\'ll never know which one did what. Add compounds 2–3 weeks apart minimum. Track sleep, training, and target outcome for each.',
  },
  {
    title: 'Stack within a goal, not across goals.',
    body: 'Running a fat-loss peptide, a healing peptide, a cognitive peptide, and a GH peptide in parallel is how people end up with no progress anywhere. Pick one theme per 12-week block and stack toward it.',
  },
  {
    title: 'Check injection sites, not just doses.',
    body: 'If you\'re running four subcutaneous peptides a week, your usable injection real estate matters. Rotate abdomen, thighs, and upper arms. Tissue damage from site overuse is an underrated source of "stopped working."',
  },
  {
    title: 'More peptides isn\'t more progress.',
    body: 'A two-peptide stack that hits both mechanisms you care about will outperform a five-peptide stack where three are overlapping or duplicative. Start narrow, justify additions.',
  },
];

const stacks = [
  {
    name: 'The Recovery Stack',
    goal: 'Injury repair, tendon / ligament issues, gut health',
    slugs: ['bpc157-10mg', 'tb500-10mg'],
    notes: 'BPC-157 drives local angiogenesis and tissue signal. TB-500 mobilizes stem cells systemically. They cover different phases of the healing cascade — BPC handles the local repair, TB handles the body-wide reach.',
    color: 'border-emerald-500/20',
    badge: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    name: 'The GH Stack',
    goal: 'Body composition, sleep, recovery, anti-aging',
    slugs: ['cjc1295-ipamorelin', 'igf-1lr3'],
    notes: 'CJC-1295 / Ipamorelin pulses your own GH release. IGF-1 LR3 extends the downstream signal where it matters most (muscle tissue). Run IGF-1 only if you\'re training hard; otherwise the GH peptides alone are enough.',
    color: 'border-amber-500/20',
    badge: 'text-amber-400 bg-amber-500/10',
  },
  {
    name: 'The Aesthetic Stack',
    goal: 'Skin, hair, collagen, anti-aging',
    slugs: ['ghk-cu', 'epitalon-10mg'],
    notes: 'GHK-Cu handles tissue-level skin and hair quality — collagen density, fine lines, hair follicle health. Epithalon works at the systemic / circadian level on sleep and cellular repair. They\'re complementary, not redundant.',
    color: 'border-purple-500/20',
    badge: 'text-purple-400 bg-purple-500/10',
  },
];

export default function PeptideStackingArticle() {
  const products = allProducts.filter(p =>
    ['bpc157-10mg', 'tb500-10mg', 'cjc1295-ipamorelin', 'ghk-cu'].includes(p.slug)
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

        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-2 mb-6">
          <Layers className="w-4 h-4 text-brand-400" />
          <span className="text-brand-400 font-bold text-sm">Strategy</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          Peptide stacking 101:<br />
          <span className="gradient-text">combine without wasting money.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          The most expensive mistake in peptide therapy isn't buying the wrong
          compound — it's buying five of them and running them all at once. A
          stack is not a shopping list. It's two or three compounds chosen
          because they cover different failure modes in the same body.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <div className="mb-12 p-8 bg-gradient-to-br from-brand-950/30 to-[#0d0d0d] border border-brand-500/20 rounded-3xl">
          <p className="text-xl font-black text-white mb-3">Core principle</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            A good stack targets <strong className="text-white">different
            mechanisms toward the same goal</strong>. A bad stack targets the
            same mechanism from different angles, or different goals from the
            same budget.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          The five rules
        </h2>
        <div className="space-y-4 mb-12">
          {rules.map((r, i) => (
            <div key={r.title} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-black text-brand-400 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{r.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
          Three stacks worth copying
        </h2>
        <div className="space-y-5 mb-12">
          {stacks.map((s) => (
            <div key={s.name} className={`p-6 bg-[#111] border rounded-2xl ${s.color}`}>
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h3 className="text-xl font-bold text-white">{s.name}</h3>
                <span className={`inline-flex items-center text-xs font-semibold rounded-full px-2.5 py-1 ${s.badge}`}>
                  {s.goal}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">{s.notes}</p>
              <div className="flex flex-wrap gap-2">
                {s.slugs.map((slug) => {
                  const product = allProducts.find(p => p.slug === slug);
                  if (!product) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/products/${slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300 bg-white/5 hover:bg-white/10 rounded-lg px-3 py-1.5 transition-colors"
                    >
                      {product.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          Combinations that don't stack
        </h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          <div className="p-6 bg-[#111] border border-white/5 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-white">Don't run together</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• GHRP-2 + GHRP-6 (same receptor)</li>
              <li>• Semaglutide + Tirzepatide (overlapping receptors)</li>
              <li>• Multiple GHRH analogs (CJC + Sermorelin + Tesamorelin)</li>
              <li>• Melanotan-I + Melanotan-II (both MC1R)</li>
              <li>• DSIP + other sleep peptides in the same night</li>
            </ul>
          </div>
          <div className="p-6 bg-[#111] border border-white/5 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white">Do run together</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• GHRH (CJC-1295) + GHRP (Ipamorelin)</li>
              <li>• BPC-157 + TB-500 (local + systemic)</li>
              <li>• GLP-1 + Cagrilintide (different pathways)</li>
              <li>• GHK-Cu + Epithalon (tissue + systemic)</li>
              <li>• BPC-157 + almost anything (no interactions)</li>
            </ul>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.25}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          Where to go next
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          See{' '}
          <Link href="/stacks" className="text-brand-400 hover:underline">
            all curated stacks
          </Link>{' '}
          for pre-built combinations by goal, or the{' '}
          <Link href="/peptide-beginner-guide" className="text-brand-400 hover:underline">
            beginner guide
          </Link>{' '}
          if you're still on your first compound. Foundational products below.
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

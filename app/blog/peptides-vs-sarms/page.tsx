import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peptides vs. SARMs: What\'s Actually Different | MaxxingPeptides',
  description:
    'Peptides and SARMs both promise better bodies, but they work on completely different systems. A grounded breakdown of safety, side effects, and which to choose.',
};

const comparison = [
  {
    label: 'Mechanism',
    peptides: 'Signal molecules — tell existing cells to do more of what they already do',
    sarms: 'Bind androgen receptors directly — mimic testosterone in select tissues',
  },
  {
    label: 'Liver impact',
    peptides: 'Minimal to none for most peptides',
    sarms: 'Hepatotoxicity common, liver enzymes frequently elevated',
  },
  {
    label: 'HPTA suppression',
    peptides: 'Most peptides don\'t touch the HPTA; some GH peptides are actually protective',
    sarms: 'Suppresses natural testosterone production — post-cycle recovery required',
  },
  {
    label: 'Cardiovascular',
    peptides: 'Generally neutral or protective (e.g. BPC-157, TB-500)',
    sarms: 'Lipid panel damage — HDL drops hard, often within weeks',
  },
  {
    label: 'Legal status (US)',
    peptides: 'Sold for research use; not FDA-approved for human consumption but widely accessible',
    sarms: 'Banned by WADA, flagged by FDA, still sold as research chemicals',
  },
  {
    label: 'Cycle length',
    peptides: 'Most run 8–12 weeks; some (BPC-157, GHK-Cu) can run indefinitely',
    sarms: '6–10 weeks max, then mandatory PCT',
  },
];

export default function PeptidesVsSarmsArticle() {
  const products = allProducts.filter(p =>
    ['bpc157-10mg', 'cjc1295-ipamorelin', 'igf-1lr3'].includes(p.slug)
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
          <span className="text-blue-400 font-bold text-sm">Comparison</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          Peptides vs. SARMs:<br />
          <span className="gradient-text">What's Actually Different</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Both get shelved together in gym conversations. They're not the same class
          of compound, not even close. If you're choosing between them, the mechanism
          is the whole story — everything downstream (side effects, liver impact,
          how long you run them) flows from how they work.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          The core difference in one sentence
        </h2>
        <div className="p-8 bg-gradient-to-br from-blue-950/30 to-[#0d0d0d] border border-blue-500/20 rounded-3xl mb-12">
          <p className="text-xl text-white leading-relaxed">
            Peptides <strong className="text-blue-300">signal</strong> your body
            to do more of what it already does. SARMs{' '}
            <strong className="text-blue-300">override</strong> one of its primary
            hormonal systems.
          </p>
          <p className="text-gray-400 mt-4 leading-relaxed">
            That single distinction is why peptides tend to have far lighter side
            effect profiles, and why SARMs come bundled with post-cycle therapy,
            lipid crashes, and the kind of liver values that make endocrinologists
            nervous.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          How peptides actually work
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            Peptides are short chains of amino acids. Your body makes thousands
            of them already — insulin, oxytocin, and melatonin are all peptides.
            Therapeutic peptides are either copies of naturally occurring signals
            or synthetic analogs designed to hit a specific receptor.
          </p>
          <p>
            A compound like{' '}
            <Link href="/products/bpc157-10mg" className="text-brand-400 hover:underline">
              BPC-157
            </Link>{' '}
            doesn't build muscle or burn fat directly. It tells fibroblasts at
            an injury site to lay down more collagen, upregulates growth hormone
            receptors on the cells already doing repair, and grows new blood
            vessels into damaged tissue. The body does the work — BPC-157 just
            removes the bottlenecks.
          </p>
          <p>
            Growth-hormone-releasing peptides like{' '}
            <Link href="/products/cjc1295-ipamorelin" className="text-brand-400 hover:underline">
              CJC-1295 / Ipamorelin
            </Link>{' '}
            tell your pituitary to pulse more of its own GH. Your body still
            regulates the response. You keep your natural feedback loops intact.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          How SARMs work
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            Selective Androgen Receptor Modulators bind the same receptor
            testosterone binds to. They're "selective" in the sense that they
            preferentially activate muscle and bone androgen receptors over
            prostate or sebaceous receptors — at least on paper.
          </p>
          <p>
            In practice, they're hormone-axis drugs. They suppress endogenous
            testosterone production (your testes shut down when the body sees
            plenty of androgen signal already), they tank HDL cholesterol, and
            the orally active ones (ostarine, ligandrol, RAD-140) routinely
            elevate liver enzymes. The mechanism is fundamentally closer to a
            mild anabolic steroid than to a peptide.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">Side-by-side</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400"></th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-brand-400">Peptides</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-amber-400">SARMs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparison.map((row) => (
                <tr key={row.label}>
                  <td className="py-4 px-4 text-white font-semibold align-top">{row.label}</td>
                  <td className="py-4 px-4 text-gray-300 text-sm align-top">{row.peptides}</td>
                  <td className="py-4 px-4 text-gray-300 text-sm align-top">{row.sarms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.25}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          When to pick which
        </h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          <div className="p-6 bg-[#111] border border-emerald-500/20 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Pick peptides if…</h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• You want long-term use without cycling</li>
              <li>• Healing, recovery, or joint issues are your primary goal</li>
              <li>• You want GH benefits without touching testosterone</li>
              <li>• Skin, hair, or anti-aging applications matter</li>
              <li>• You're over 35 and care about cardiovascular health</li>
            </ul>
          </div>
          <div className="p-6 bg-[#111] border border-amber-500/20 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Think twice on SARMs if…</h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• You're unwilling to run bloodwork every 4–6 weeks</li>
              <li>• You can't commit to a proper PCT protocol</li>
              <li>• You have family history of cardiovascular or liver disease</li>
              <li>• You compete in any tested federation</li>
              <li>• You're under 25 (HPTA still developing)</li>
            </ul>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.3}>
        <div className="mb-12 flex gap-4 p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-300 font-semibold mb-1">Not a real dichotomy</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Some users run peptides alongside SARMs, or on the off-cycles between.
              If you're already using SARMs, BPC-157 and TB-500 can help protect
              connective tissue that grows faster than the tendons can adapt to.
              But if your goal is just "get leaner / build muscle," peptide stacks
              can get you most of the way there with a much lighter side-effect bill.
            </p>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.35}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          Where to start with peptides
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          If you're coming from SARMs or just considering your first compound,
          the three below cover the two biggest reasons people reach for androgens:
          recovery and body composition. See also the{' '}
          <Link href="/peptide-beginner-guide" className="text-brand-400 hover:underline">
            peptide beginner guide
          </Link>{' '}
          and{' '}
          <Link href="/muscle-building-peptides" className="text-brand-400 hover:underline">
            muscle-building peptides
          </Link>
          .
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

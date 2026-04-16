import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Are Peptides Safe? A Grounded Look at the Risks | MaxxingPeptides',
  description:
    'Peptide safety isn\'t binary. A practical breakdown of real risks (source quality, handling, dosing errors) vs overblown ones, plus how to lower your risk floor.',
};

const actualRisks = [
  {
    title: 'Source quality',
    severity: 'High',
    color: 'text-red-400 bg-red-500/10 border-red-500/20',
    body: 'The single biggest safety variable is not which peptide you choose — it\'s who made it. Under-dosed vials, bacterial contamination, and incorrect peptide sequences are all documented in independent testing of random research chemical vendors. Always choose a lab with third-party purity testing and a clear chain of custody.',
  },
  {
    title: 'Reconstitution & storage errors',
    severity: 'Moderate',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    body: 'Lyophilized peptide is stable for years. Reconstituted peptide is stable for weeks. Injecting an old vial, one left on the counter, or one reconstituted with tap water instead of bacteriostatic water introduces contamination risk that\'s entirely on the user.',
  },
  {
    title: 'Dosing math',
    severity: 'Moderate',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    body: 'Most peptide dosing is in micrograms. A decimal-place error is easy and rarely catastrophic, but it does mean you\'re often running the compound at 10× the intended dose for weeks before you notice. Every user should learn the reconstitution math for their specific vial size.',
  },
  {
    title: 'Stacking without purpose',
    severity: 'Low',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    body: 'Running five peptides at once because forum posts recommended each one individually is how people end up with mystery side effects and no clue which compound is responsible. Add one at a time and give each 2–3 weeks to reveal its effects.',
  },
];

const overblown = [
  {
    title: '"Peptides will shut down your natural hormones"',
    body: 'Most therapeutic peptides don\'t touch the HPTA. GHRH and GHRP peptides still preserve the pulsatile nature of your own GH release. Unlike exogenous GH, they don\'t create hard dependency. The exceptions (kisspeptin, gonadorelin) are intentionally hormonal and not what people usually mean.',
  },
  {
    title: '"Peptides cause cancer"',
    body: 'This mostly comes from concern about GH/IGF-1 driving proliferation of existing tumors. It\'s a real concern if you already have cancer, but no strong evidence supports peptides causing cancer in healthy users. Standard guidance: don\'t run growth-promoting peptides if you have an active malignancy.',
  },
  {
    title: '"Peptides aren\'t studied"',
    body: 'BPC-157 has 100+ peer-reviewed studies. Semaglutide is FDA-approved. GHK-Cu has 40 years of research behind it. The "research chemical" label often implies unknowability — but a lot of these compounds are better characterized than many supplements sold on Amazon.',
  },
];

export default function ArePeptidesSafeArticle() {
  const products = allProducts.filter(p =>
    ['bpc157-10mg', 'ghk-cu', 'bacteriostatic-water-reconstitution-solution-10ml'].includes(p.slug)
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

        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400 font-bold text-sm">Safety</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          Are peptides safe?<br />
          <span className="gradient-text">A grounded look at the risks.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          "Is it safe" is the wrong question — the right one is "what kinds of
          mistakes does this class of compound punish, and which ones does it
          forgive?" Peptides are relatively forgiving by pharmaceutical
          standards, but the failure modes are specific and worth understanding
          before your first vial.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <div className="mb-12 p-8 bg-gradient-to-br from-emerald-950/30 to-[#0d0d0d] border border-emerald-500/20 rounded-3xl">
          <p className="text-2xl font-black text-white leading-tight mb-3">
            The short answer
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Most popular peptides have therapeutic windows wide enough that you
            can make honest dosing mistakes and still be fine.{' '}
            <strong className="text-white">Source quality, sterile handling,
            and dosing math</strong>{' '}
            are where almost all real-world safety problems come from — not the
            peptides themselves.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          Risks that actually matter
        </h2>
        <div className="space-y-4 mb-12">
          {actualRisks.map((r) => (
            <div key={r.title} className={`p-6 bg-[#111] border rounded-2xl ${r.color.split(' ').slice(-1)[0]}`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white">{r.title}</h3>
                <span className={`inline-flex items-center text-xs font-semibold border rounded-full px-2.5 py-1 ${r.color}`}>
                  {r.severity}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          The legal picture
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            In the US, peptides occupy a legal middle ground. Most are sold for
            "research use only" — legal to buy, legal to possess, not legal to
            market as human therapeutics. A handful (semaglutide, tirzepatide,
            tesamorelin) have FDA-approved forms, though the research-chem
            versions of the same molecules are not the approved product.
          </p>
          <p>
            Compounding pharmacies filled much of the gap during GLP-1 shortages;
            the FDA has since begun restricting that pathway. The net result is
            that quality-controlled peptides remain accessible, but regulatory
            posture on individual compounds shifts. What was fine to buy last
            year may be harder to source this year.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          Overblown concerns
        </h2>
        <div className="space-y-4 mb-12">
          {overblown.map((c) => (
            <div key={c.title} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-gray-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.25}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          How to lower your risk floor
        </h2>
        <div className="p-6 bg-[#111] border border-white/5 rounded-2xl mb-12 space-y-3">
          {[
            'Buy from vendors that publish third-party mass-spectrometry purity data.',
            'Store lyophilized vials in a cool, dry place until use. Refrigerate after reconstitution.',
            'Use bacteriostatic water for reconstitution, never tap or distilled.',
            'Run bloodwork baseline and at 8–12 weeks for any peptide that affects GH, IGF-1, or insulin signaling.',
            'Add one compound at a time. Stack only after you know how each behaves in your body.',
            'Start at the low end of the dosing range for 1–2 weeks before titrating up.',
          ].map((tip) => (
            <div key={tip} className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-gray-300 leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.3}>
        <div className="mb-12 flex gap-4 p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-300 font-semibold mb-1">Groups that should talk to a doctor first</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Anyone with active cancer, pregnant or nursing, under 21, with
              uncontrolled diabetes (for GLP-1s specifically), on immune
              therapy, or with kidney or liver disease. The peptide doesn't
              know you have these conditions — you have to.
            </p>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.35}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          The safest places to start
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          If you want to minimize risk while still seeing real effects, the
          peptides below have the widest therapeutic windows and the cleanest
          side-effect profiles. See also the full{' '}
          <Link href="/peptide-beginner-guide" className="text-brand-400 hover:underline">
            peptide beginner guide
          </Link>{' '}
          for reconstitution math and injection technique.
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

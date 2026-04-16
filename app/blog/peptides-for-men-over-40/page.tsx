import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { ArrowLeft, TrendingDown, Zap, Heart, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Best Peptides for Men Over 40 | MaxxingPeptides',
  description:
    'GH output drops 50% by 40. Recovery slows. Joints start complaining. A practical peptide stack for the decade where everything starts to matter more.',
};

const whatChanges = [
  {
    icon: TrendingDown,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'GH drops ~50% from your 20s',
    body: 'Growth hormone output is the cleanest physiological marker of what people mean by "aging." You still make it — just less, and the pulses are smaller and less frequent. This is why sleep feels less restorative and why you can\'t push the volume in the gym like you used to.',
  },
  {
    icon: Zap,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    title: 'Recovery stretches out',
    body: 'The same workout that used to leave you fresh in 48 hours now takes 96. Muscle protein synthesis hasn\'t crashed, but the inflammation resolution pathway has slowed down. Your body is doing the same work with worse traffic flow.',
  },
  {
    icon: Heart,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    title: 'Joints file first',
    body: 'Tendon and ligament tissue is avascular — it has poor blood supply by design. The repair signaling that kept the wear-and-tear in check in your 20s and 30s starts missing deadlines. Small injuries become chronic.',
  },
  {
    icon: Brain,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    title: 'Sleep architecture shifts',
    body: 'Less slow-wave sleep means less GH release (since peak GH happens in deep sleep), less tissue repair overnight, and worse next-day cognitive function. Poor sleep in your 40s is a compounding interest rate.',
  },
];

const stack = [
  {
    tier: 'Foundation',
    name: 'CJC-1295 / Ipamorelin',
    slug: 'cjc1295-ipamorelin',
    why: 'Restores the GH pulse pattern of a younger man without shutting down your own pituitary. Run pre-sleep. Improvements in sleep quality and recovery show up first, body composition second.',
    dose: '100 mcg each, 30–60 min before bed, 5 days/week',
    color: 'border-amber-500/20',
  },
  {
    tier: 'Recovery',
    name: 'BPC-157',
    slug: 'bpc157-10mg',
    why: 'The joint-maintenance peptide. Heals the nagging shoulder, the chronic elbow, the plantar fascia. Run whenever an injury flares, or at low dose continuously if you still train hard.',
    dose: '250–500 mcg/day SC, 8+ weeks per cycle',
    color: 'border-emerald-500/20',
  },
  {
    tier: 'Longevity',
    name: 'Epithalon',
    slug: 'epitalon-10mg',
    why: 'Pineal-targeting peptide with long-horizon data on sleep quality, melatonin rhythm, and telomere markers. Run once or twice per year as a short intensive cycle.',
    dose: '5–10 mg/day SC for 10–20 days, 1–2× per year',
    color: 'border-purple-500/20',
  },
  {
    tier: 'Body comp',
    name: 'Tirzepatide',
    slug: 'glp-2t-15mg',
    why: 'If there\'s 15+ lb that\'s been hanging on since your 30s, tirzepatide resets the appetite and metabolic set point. More effective than semaglutide for weight loss, with better blood sugar control.',
    dose: 'Start 2.5 mg/week, titrate q4w to effect',
    color: 'border-blue-500/20',
  },
];

export default function PeptidesForMenOver40Article() {
  const products = allProducts.filter(p =>
    ['cjc1295-ipamorelin', 'bpc157-10mg', 'epitalon-10mg', 'glp-2t-15mg'].includes(p.slug)
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

        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
          <span className="text-purple-400 font-bold text-sm">For Men Over 40</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          Peptides for men<br />
          <span className="gradient-text">in their 40s and 50s.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Most fitness advice you read was written for a 25-year-old with
          intact GH output, snappy joints, and a thyroid that still listens.
          Peptide therapy is one of the few tools that actually addresses what
          changes after 40 — not by forcing your body to act younger, but by
          restoring signals that have quietly gone quiet.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
          What actually changes in the 40s
        </h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {whatChanges.map((c) => (
            <div key={c.title} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-semibold mb-4 ${c.color}`}>
                <c.icon className="w-4 h-4" />
                {c.title}
              </div>
              <p className="text-gray-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          The practical stack
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          You don't need all four at once. Add them in the order listed — each
          addresses a different failure mode, and the value of stacking comes
          from covering different systems, not doubling up within one.
        </p>
        <div className="space-y-4 mb-12">
          {stack.map((s, i) => (
            <div key={s.slug} className={`p-6 bg-[#111] border rounded-2xl ${s.color}`}>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-gray-700 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">{s.tier}</p>
                  <Link href={`/products/${s.slug}`} className="text-xl font-bold text-white hover:text-brand-300 transition-colors">
                    {s.name}
                  </Link>
                  <p className="text-gray-400 leading-relaxed my-3">{s.why}</p>
                  <p className="text-sm text-brand-400 font-mono">{s.dose}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          What about testosterone?
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            The biggest hormonal shift for men over 40 is declining testosterone.
            Peptides won't replace that — this is TRT territory and a
            conversation for an endocrinologist. What peptides do is address the
            complementary axis (GH/IGF-1) and the tissue-level issues (joints,
            skin, recovery) that TRT alone doesn't touch.
          </p>
          <p>
            Some peptides do support the reproductive axis:{' '}
            <Link href="/products/kisspeptin-10-10mg" className="text-brand-400 hover:underline">
              Kisspeptin-10
            </Link>{' '}
            and gonadorelin can stimulate LH/FSH production, which is relevant
            if you're trying to preserve fertility while on TRT. See the{' '}
            <Link href="/peptides-for-testosterone" className="text-brand-400 hover:underline">
              testosterone support guide
            </Link>{' '}
            for protocol detail.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          How to sequence it
        </h2>
        <div className="p-6 bg-[#111] border border-white/5 rounded-2xl space-y-3 mb-12">
          <div className="flex gap-3 items-start">
            <span className="text-brand-400 font-bold shrink-0">Month 1–3:</span>
            <p className="text-gray-300 leading-relaxed">
              Start with CJC-1295 / Ipamorelin alone. Assess sleep, recovery,
              body composition. Establish a baseline before adding anything else.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-brand-400 font-bold shrink-0">Month 3–6:</span>
            <p className="text-gray-300 leading-relaxed">
              Add BPC-157 if you have a specific injury or chronic joint issue.
              Can run concurrent with the GH peptides without interaction.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-brand-400 font-bold shrink-0">Month 6+:</span>
            <p className="text-gray-300 leading-relaxed">
              Layer in Epithalon (annual 20-day cycle) or tirzepatide if body
              composition hasn't moved enough with training and the GH stack alone.
            </p>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.25}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
          The stack
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          See the{' '}
          <Link href="/peptide-anti-aging" className="text-brand-400 hover:underline">
            anti-aging peptide protocol
          </Link>{' '}
          and{' '}
          <Link href="/longevity-peptides" className="text-brand-400 hover:underline">
            longevity peptides
          </Link>{' '}
          for deeper protocols. Products below.
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

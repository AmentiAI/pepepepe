import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { BookOpen, AlertTriangle, CheckCircle2, Package, Syringe, FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peptide Beginner Guide — First Peptide, Reconstitution & Starting Protocols',
  description:
    'Everything you need to start your first peptide protocol. What to buy, how to reconstitute, where to inject, and which peptides are safest for beginners. No fluff, no gatekeeping.',
};

const beginnerPeptides = [
  {
    rank: '01',
    name: 'BPC-157',
    why: 'The ideal first peptide. Extremely well-characterized, impressive safety profile, and the healing effect is felt quickly enough that you actually know it\'s working. Start here if you have any injury, chronic pain, or gut issues. Zero hormonal involvement.',
    dose: '250 mcg/day SC, 8–12 weeks',
    risk: 'Low',
    riskColor: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    rank: '02',
    name: 'CJC-1295 / Ipamorelin',
    why: 'The cleanest GH-boosting combination for beginners. Unlike GHRPs (GHRP-2, GHRP-6), Ipamorelin does not spike cortisol or prolactin — it\'s GH-selective. Pre-sleep protocol fits naturally into routine. Results are subtle but real: better sleep, better recovery, body composition shift over 8+ weeks.',
    dose: '100 mcg each SC, 30–60 min before sleep',
    risk: 'Low-Moderate',
    riskColor: 'text-amber-400 bg-amber-500/10',
  },
  {
    rank: '03',
    name: 'GHK-CU',
    why: 'For anyone with skin, hair, or anti-aging goals. Applied topically or injected subcutaneously. No hormonal effects. No receptor downregulation. The collagen and gene-level effects are well-documented across 40 years of research. A true workhorse compound.',
    dose: '2 mg/day SC or topical serum 2× daily',
    risk: 'Very Low',
    riskColor: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    rank: '04',
    name: 'Selank',
    why: 'If anxiety or sleep quality is the primary issue. Non-habit-forming, no withdrawal, no receptor downregulation. Unlike benzodiazepines, Selank actually improves cognitive function while reducing anxiety. Intranasal or subcutaneous. Most beginners feel it the same day they first use it.',
    dose: '250–500 mcg SC or intranasal, as needed',
    risk: 'Very Low',
    riskColor: 'text-emerald-400 bg-emerald-500/10',
  },
];

const supplies = [
  {
    item: 'Bacteriostatic Water',
    why: 'Required for reconstitution. Contains benzyl alcohol which prevents bacterial contamination. Do not use regular water or saline — it won\'t stay sterile.',
    icon: FlaskConical,
  },
  {
    item: 'Insulin Syringes (29–31 gauge, 0.5mL)',
    why: 'The standard for peptide injection. Short needle, fine gauge, pre-marked in units. 1 unit = 10 mcg (if reconstituted at 1mg/mL). Buy 100ct for a full protocol.',
    icon: Syringe,
  },
  {
    item: 'Alcohol Swabs',
    why: 'Wipe the vial septum before every draw and the injection site before every injection. Takes 3 seconds and matters.',
    icon: Package,
  },
];

const reconstitutionSteps = [
  { step: '1', action: 'Calculate your concentration', detail: 'Add 2mL BAC water to a 10mg BPC-157 vial → 5mg/mL → 500mcg per 0.1mL (10 units on syringe). Write this on the vial.' },
  { step: '2', action: 'Prep the vial', detail: 'Wipe the rubber septum with an alcohol swab. Let it dry 10 seconds.' },
  { step: '3', action: 'Draw BAC water', detail: 'Use your syringe to draw the calculated volume of bacteriostatic water.' },
  { step: '4', action: 'Inject into peptide vial', detail: 'Angle the needle along the side of the vial. Let the water run down the glass — don\'t blast it directly onto the powder. This preserves the peptide structure.' },
  { step: '5', action: 'Dissolve gently', detail: 'Slowly rotate the vial. Don\'t shake it. It will clear in 30–60 seconds. If it doesn\'t fully dissolve, put it in the fridge for an hour — still normal.' },
  { step: '6', action: 'Store correctly', detail: 'Refrigerate immediately. Label with date. Use within 4–6 weeks. Never freeze reconstituted peptide — it damages the structure.' },
];

const injectionSites = [
  { site: 'Abdomen (belly fat)', notes: 'Most common. Easy to pinch. Good absorption. Rotate around the navel at a 2-inch radius.' },
  { site: 'Thigh (upper, lateral)', notes: 'Good alternative. Pinch the fat on the side of the quad. Avoid injecting into muscle — this is subcutaneous, not IM.' },
  { site: 'Lower back / flanks', notes: 'Comfortable and accessible. Good for those with less abdominal fat.' },
  { site: 'Near injury site', notes: 'For BPC-157 injury repair — injecting locally (0.5–1 inch from injury site) maximizes local concentration.' },
];

export default function PeptideBeginnerGuidePage() {
  const products = allProducts.filter(p =>
    ['bpc157-10mg', 'cjc1295-ipamorelin', 'ghk-cu', 'bacteriostatic-water-30ml'].includes(p.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 font-bold text-sm">Beginner Guide</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Your First Peptide<br />
            <span className="gradient-text">Protocol. Done Right.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            No gatekeeping. No unnecessarily complex jargon. This is everything you actually need to know
            to start your first peptide protocol — what to buy, how to reconstitute it, where to inject,
            and what a realistic first 8 weeks looks like.
          </p>
        </div>
      </AnimateIn>

      {/* Honest disclaimer */}
      <AnimateIn delay={0.05}>
        <div className="mb-12 flex gap-4 p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-300 font-bold mb-2">Research Use Only</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              These are research peptides, not FDA-approved pharmaceuticals. Start conservatively. Research your chosen compound thoroughly. If you have medical conditions, consult a physician who understands peptide therapy. The information here is educational.
            </p>
          </div>
        </div>
      </AnimateIn>

      {/* Best for beginners */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-4">Best First Peptides (Ranked)</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl">Pick one. Run it for 8 weeks. Learn how your body responds before adding a second compound.</p>
        <div className="space-y-4 mb-16">
          {beginnerPeptides.map((p) => (
            <div key={p.name} className="flex gap-5 p-6 bg-[#111] border border-white/5 rounded-2xl items-start">
              <div className="text-5xl font-black text-white/10 leading-none shrink-0">{p.rank}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-black text-white">{p.name}</h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.riskColor}`}>Risk: {p.risk}</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-3">{p.why}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span className="text-sm text-brand-300 font-medium">{p.dose}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* What you need */}
      <AnimateIn delay={0.15}>
        <h2 className="text-3xl font-black text-white mb-8">What You Need to Buy</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {supplies.map((s) => (
            <div key={s.item} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <s.icon className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{s.item}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.why}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Reconstitution steps */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-4">How to Reconstitute (Step by Step)</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl">Reconstitution is dissolving the dry peptide powder into bacteriostatic water to make it injectable. It's simpler than it sounds.</p>
        <div className="space-y-3 mb-16">
          {reconstitutionSteps.map((s) => (
            <div key={s.step} className="flex gap-5 p-5 bg-[#111] border border-white/5 rounded-2xl items-start">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-black font-black flex items-center justify-center text-sm shrink-0">{s.step}</div>
              <div>
                <p className="text-white font-bold mb-1">{s.action}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Injection sites */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-8">Injection Sites</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {injectionSites.map((site) => (
            <div key={site.site} className="p-5 bg-[#111] border border-white/5 rounded-2xl">
              <p className="text-white font-bold mb-1">{site.site}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{site.notes}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.3}>
        <h2 className="text-3xl font-black text-white mb-8">Start Your First Protocol</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { Sparkles, Layers, Sun, Droplets, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skin & Collagen Peptides Guide — GHK-CU, SNAP-8 & Anti-Aging Protocols',
  description:
    'The complete guide to skin and collagen peptides. How GHK-CU rebuilds collagen at the gene level, what SNAP-8 actually does to expression lines, and the protocol that produces real, visible results.',
};

const collagenFacts = [
  { stat: '1%', label: 'collagen lost annually after age 25', color: 'text-red-400' },
  { stat: '25%', label: 'reduction by age 50', color: 'text-orange-400' },
  { stat: '4,000+', label: 'genes regulated by GHK-CU', color: 'text-brand-400' },
  { stat: '40 years', label: 'of human GHK-CU research', color: 'text-emerald-400' },
];

const collagenTypes = [
  { type: 'Type I', location: 'Skin, tendons, bone', role: 'Structural strength, skin firmness. The most abundant collagen. What you\'re losing as you age.' },
  { type: 'Type III', location: 'Skin, blood vessels', role: 'Skin elasticity and flexibility. Produced first during wound healing — GHK-CU upregulates both Type I and III genes.' },
  { type: 'Elastin', location: 'Skin, lungs, arteries', role: 'The "snap-back" protein. Allows skin to return to shape after stretching. Declines with UV damage and aging.' },
];

const peptideGuide = [
  {
    icon: Layers,
    color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    name: 'GHK-CU (Copper Peptide)',
    subtitle: 'The Gene-Level Rebuild',
    systemicDose: '1–2 mg SC daily',
    topicalDose: 'Serum 2–3× daily, cream overnight',
    timeline: '8–12 weeks for visible structural change',
    mechanism: 'GHK-CU is a copper-carrying tripeptide native to human plasma. At young ages it circulates at around 200 ng/mL — by age 60, that\'s dropped below 80. It activates genes involved in collagen I, III, and elastin synthesis through binding to DNA regulatory regions. It also inhibits the matrix metalloproteinases (enzymes) that degrade collagen. You\'re simultaneously building more and losing less.',
    best: 'Systemic anti-aging, skin firming, scar remodeling, wound healing',
  },
  {
    icon: Sparkles,
    color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    name: 'SNAP-8',
    subtitle: 'The Expression Line Eraser',
    systemicDose: 'N/A — topical only',
    topicalDose: 'Cream or serum 2× daily to forehead, eye area',
    timeline: '4–8 weeks for fine line reduction',
    mechanism: 'SNAP-8 is an 8-amino acid peptide that competes with SNAP-25 at the SNARE complex — the protein mechanism behind acetylcholine release at the neuromuscular junction. Less acetylcholine release means less microcontraction in the expression muscles underlying wrinkles. It\'s similar in principle to Botox but much more subtle — you don\'t freeze the muscle, you just reduce the habitual microcontractions causing lines.',
    best: 'Forehead lines, crow\'s feet, glabellar lines (between brows)',
  },
  {
    icon: Droplets,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    name: 'Epithalon',
    subtitle: 'The Clock Reset',
    systemicDose: '5–10 mg SC nightly, 10-night course',
    topicalDose: 'Some topical preparations available',
    timeline: 'Circadian and hormonal effects: 2–4 weeks',
    mechanism: 'Epithalon activates telomerase — the enzyme that maintains telomere length. Short telomeres mean cells divide less efficiently, produce less collagen, and age faster. Epithalon\'s effect on skin is therefore indirect but profound: it resets the cellular aging clock that determines how efficiently your skin cells operate. 15 years of Khavinson research showing lifespan extension had clear skin and hormonal markers as secondary endpoints.',
    best: 'Longevity-focused protocols, cellular aging, telomere support',
  },
];

const skincareStack = {
  morning: [
    'Vitamin C serum (antioxidant protection from UV)',
    'SNAP-8 serum (expression areas)',
    'SPF 30+ (UV is the #1 collagen destroyer)',
  ],
  evening: [
    'GHK-CU serum (systemic SC or topical, allows overnight absorption)',
    'SNAP-8 cream to treatment areas',
    'Retinol if not using GHK-CU topically (they compete for similar pathways)',
  ],
  weekly: [
    'Microneedling (0.5–1.5mm) creates channels for peptide penetration',
    'Apply GHK-CU immediately post-microneedling — absorption increases 8×',
    'BPC-157 topical post-procedure to accelerate healing and optimize remodeling',
  ],
};

const uvDamageInfo = [
  { stage: 'Immediate (minutes–hours)', effect: 'UV-B destroys collagen peptide bonds directly. DNA damage triggers inflammatory cascade.' },
  { stage: 'Short-term (days–weeks)', effect: 'MMP-1 (collagenase) activation degrades existing collagen. Melanin production creates uneven pigmentation.' },
  { stage: 'Long-term (years)', effect: 'Cumulative collagen loss, elastin cross-linking (wrinkles), basement membrane thinning. This is photoaging.' },
  { stage: 'Peptide intervention', effect: 'GHK-CU post-UV reverses MMP activation, drives repair gene expression. Apply same day, don\'t wait.' },
];

export default function SkinCollagenGuidePage() {
  const products = allProducts.filter(p =>
    ['ghk-cu', 'snap-8', 'epithalon-50mg', 'bpc157-10mg'].includes(p.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-400 font-bold text-sm">Skin & Collagen Science</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Skin Isn't Just Surface.<br />
            <span className="gradient-text">It's Biology All the Way Down.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Moisturizers hydrate. Peptides rebuild. The difference is working on the surface vs working
            at the gene expression level that tells your skin cells what to produce. GHK-CU doesn't
            stimulate collagen — it resets the gene that decides how much to make.
          </p>
        </div>
      </AnimateIn>

      {/* Stats */}
      <AnimateIn delay={0.05}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {collagenFacts.map((f) => (
            <div key={f.stat} className="p-5 bg-[#111] border border-white/5 rounded-2xl text-center">
              <div className={`text-4xl font-black mb-2 ${f.color}`}>{f.stat}</div>
              <p className="text-xs text-gray-500">{f.label}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Collagen types */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-6">What Collagen Actually Is</h2>
        <p className="text-gray-400 text-lg mb-6 max-w-3xl">Collagen is the structural scaffold your skin sits on. Not one protein — a family of 28. The ones that matter for skin appearance:</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {collagenTypes.map((c) => (
            <div key={c.type} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <h3 className="text-xl font-black text-white mb-1">{c.type}</h3>
              <p className="text-xs text-gray-500 mb-3">{c.location}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{c.role}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Peptide guide */}
      <AnimateIn delay={0.15}>
        <h2 className="text-3xl font-black text-white mb-8">The Skin Peptides, Explained</h2>
        <div className="space-y-5 mb-16">
          {peptideGuide.map((p) => (
            <div key={p.name} className="p-7 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${p.color}`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-5">{p.mechanism}</p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Systemic Dose</p>
                  <p className="text-white font-medium text-sm">{p.systemicDose}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Topical</p>
                  <p className="text-white font-medium text-sm">{p.topicalDose}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Timeline</p>
                  <p className="text-brand-400 font-medium text-sm">{p.timeline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Skincare stack */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-8">The Full Skincare Protocol</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {Object.entries(skincareStack).map(([timing, steps]) => (
            <div key={timing} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <h3 className="text-lg font-black text-white mb-4 capitalize">{timing}</h3>
              <ul className="space-y-3">
                {steps.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* UV damage */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-6">UV Damage — What's Happening and How to Reverse It</h2>
        <div className="space-y-3 mb-16">
          {uvDamageInfo.map((u) => (
            <div key={u.stage} className="flex gap-4 p-5 bg-[#111] border border-white/5 rounded-2xl">
              <div className="shrink-0">
                <Sun className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1">{u.stage}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{u.effect}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.3}>
        <h2 className="text-3xl font-black text-white mb-8">Skin & Collagen Peptides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

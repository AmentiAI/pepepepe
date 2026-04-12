import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { Sparkles, Eye, Layers, Sun, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Looksmaxxing Face Peptides — Collagen, Skin & Jaw Protocol | MaxxingPeptides',
  description:
    'The peptide protocol for facial looksmaxxing. GHK-CU rebuilds collagen structure, SNAP-8 softens expression lines, Melanotan II drives even tanning. Science-backed appearance optimization.',
};

const facialGoals = [
  {
    icon: Layers,
    color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    area: 'Skin Density & Collagen',
    peptides: 'GHK-CU · SNAP-8',
    what: 'Skin sag and hollowness isn\'t a fat problem — it\'s a collagen problem. You lose 1% of skin collagen every year after 25. GHK-CU activates the genes that produce collagen I, III, and elastin. It doesn\'t stimulate collagen — it resets the gene expression pattern that tells your skin to make it. Combined with SNAP-8\'s effect on acetylcholine at the neuromuscular junction, you\'re attacking fine lines from the inside out.',
    result: 'Measurable improvement in skin thickness and elasticity at 8 weeks',
  },
  {
    icon: Sun,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    area: 'Even, Deep Tanning',
    peptides: 'Melanotan II · Bremelanotide',
    what: 'Melanotan II binds MC1R and MC4R receptors, driving melanin production before UV exposure — not after. A Melanotan II protocol produces a deep, even tan that actually stays and distributes uniformly, including areas that typically don\'t tan (under chin, inner arms). The tan acts as natural UV protection, compounding the effect. One of the most visual and rapid looksmaxxing results available.',
    result: 'Visible tan development in 7–10 days with moderate sun exposure',
  },
  {
    icon: Eye,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    area: 'Under-Eye & Fine Lines',
    peptides: 'GHK-CU topical · SNAP-8',
    what: 'The periorbital area — around the eyes — is the thinnest skin on the face and the first place collagen loss shows. SNAP-8 is a modified octapeptide version of argireline that relaxes the microcontraction patterns causing crow\'s feet and expression lines. GHK-CU applied topically in this area simultaneously rebuilds the collagen matrix beneath them. Stack both and you\'re addressing the cause and the symptom.',
    result: 'Reduction in periorbital fine lines visible at 4–6 weeks topical use',
  },
  {
    icon: Droplets,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    area: 'Hair Thickness & Density',
    peptides: 'TB-500 · GHK-CU · BPC-157',
    what: 'Hairline thinning doesn\'t start from the hair — it starts from the follicle. TB-500 mobilizes follicle stem cells and drives angiogenesis to the scalp, restoring the blood supply that miniaturizing follicles need. GHK-CU activates follicle proliferation genes and extends the anagen (growth) phase. Applied topically to the scalp, these compounds target the exact cellular failure points in androgenic alopecia.',
    result: 'Terminal hair conversion from vellus in 12+ week protocols',
  },
];

const protocol = [
  {
    step: '01',
    title: 'Foundation — Collagen Rebuild',
    duration: 'Weeks 1–12',
    compounds: 'GHK-CU 2mg/day SC + topical serum',
    detail: 'Start here. Everything else sits on top of your skin\'s structural matrix. Give GHK-CU 12 weeks to genuinely rebuild it before adding other compounds. You\'re laying the foundation, not decorating a crumbling wall.',
  },
  {
    step: '02',
    title: 'Surface — Expression Lines',
    duration: 'Weeks 4–12 (add-on)',
    compounds: 'SNAP-8 topical 2× daily',
    detail: 'Add SNAP-8 cream or serum to the forehead and eye area once the systemic GHK-CU baseline is running. The synergy is real — systemic collagen rebuild + surface neuromuscular relaxation hits expression lines from both directions.',
  },
  {
    step: '03',
    title: 'Tan — UV Prep',
    duration: 'Weeks 1–3, then maintain',
    compounds: 'Melanotan II 250mcg → 500mcg (loading)',
    detail: 'Load Melanotan II before deliberate sun exposure. Start at 250mcg every other day for week 1, then 500mcg daily while tanning. Once your target depth is reached, drop to 1–2× weekly maintenance. The tan will hold without continued high dosing.',
  },
  {
    step: '04',
    title: 'Recovery — Skin Repair',
    duration: 'After sun, post-procedure',
    compounds: 'GHK-CU topical, BPC-157 topical',
    detail: 'After any UV exposure or cosmetic procedure (microneedling, chemical peels), applying GHK-CU and BPC-157 topically dramatically accelerates recovery, reduces redness, and optimizes the remodeling phase outcome.',
  },
];

const skinFacts = [
  { stat: '1%', label: 'collagen lost per year after age 25' },
  { stat: '32%', label: 'fine line reduction with SNAP-8 at 12 weeks (clinical trial)' },
  { stat: '4,000+', label: 'genes regulated by GHK-CU including collagen synthesis' },
  { stat: '7–10 days', label: 'for visible Melanotan II tan development' },
];

export default function LooksmaxxingFacePage() {
  const products = allProducts.filter(p =>
    ['ghk-cu', 'snap-8', 'epithalon-50mg'].includes(p.slug) ||
    p.tags.includes('skin') || p.tags.includes('tanning') || p.tags.includes('hair')
  ).slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-400 font-bold text-sm">Facial Looksmaxxing</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Your Face Is a<br />
            <span className="gradient-text">Biology Problem.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Genetics set the ceiling. Biology sets where you actually land. Collagen density, skin thickness,
            melanin distribution, follicle health — these are all biochemistry. Peptides target the exact
            mechanisms that determine how your face ages and how it looks right now.
          </p>
        </div>
      </AnimateIn>

      {/* Stats bar */}
      <AnimateIn delay={0.05}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {skinFacts.map((f) => (
            <div key={f.stat} className="p-5 bg-[#111] border border-white/5 rounded-2xl text-center">
              <div className="text-4xl font-black text-brand-400 mb-1">{f.stat}</div>
              <p className="text-xs text-gray-500">{f.label}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Facial goal breakdown */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-8">What Each Peptide Targets</h2>
        <div className="space-y-5 mb-16">
          {facialGoals.map((g) => (
            <div key={g.area} className="p-7 bg-[#111] border border-white/5 rounded-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-semibold ${g.color}`}>
                  <g.icon className="w-4 h-4" />
                  {g.area}
                </div>
                <span className="text-xs text-gray-500 font-medium bg-white/5 px-3 py-1.5 rounded-xl">{g.peptides}</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{g.what}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-sm text-brand-300 font-medium">{g.result}</span>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* The protocol */}
      <AnimateIn delay={0.15}>
        <h2 className="text-3xl font-black text-white mb-4">The Full Facial Protocol</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl">
          This isn't a skincare routine. This is a systematic approach to every biochemical lever that
          determines facial appearance — in the right order, for the right duration.
        </p>
        <div className="space-y-4 mb-16">
          {protocol.map((step) => (
            <div key={step.step} className="flex gap-5 p-6 bg-[#111] border border-white/5 rounded-2xl">
              <div className="text-5xl font-black text-white/10 leading-none shrink-0">{step.step}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg font-black text-white">{step.title}</h3>
                  <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">{step.duration}</span>
                </div>
                <p className="text-brand-400 font-semibold text-sm mb-2">{step.compounds}</p>
                <p className="text-gray-400 leading-relaxed text-sm">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Reality check callout */}
      <AnimateIn delay={0.2}>
        <div className="mb-16 p-8 bg-[#111] border border-brand-500/20 rounded-3xl">
          <h3 className="text-2xl font-black text-white mb-4">The Looksmaxxing Hierarchy</h3>
          <div className="space-y-3 text-gray-400">
            <p>Body fat is the most impactful single variable. No peptide fixes the face that sits on excess weight. Get lean first — everything else is optimization on top of a solid base.</p>
            <p>Sleep is second. Eight hours at low cortisol levels is more powerful than any peptide. GHK-CU applied on four hours of sleep doesn't perform the same as on eight.</p>
            <p>Then peptides. Once the foundation is there, GHK-CU rebuilds what you've lost, SNAP-8 cleans up expression lines, Melanotan II gives you the tan, and TB-500 puts the hair back.</p>
            <p className="text-brand-300 font-semibold">In that order. Every time.</p>
          </div>
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-8">Facial Optimization Peptides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

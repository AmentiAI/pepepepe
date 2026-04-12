import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { CheckCircle2, Zap, Flame, Heart, Shield, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'BPC-157 Complete Guide — Dosing, Benefits & Protocols | MaxxingPeptides',
  description:
    'Everything you need to know about BPC-157. How it heals tendons, gut lining, and nerves faster than anything else. Real dosing protocols, injection sites, and what to actually expect.',
};

const useCases = [
  {
    icon: Zap,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'Tendon & Ligament Repair',
    body: 'This is where BPC-157 built its reputation. Torn rotator cuffs, shredded ACLs, chronic Achilles issues — BPC-157 accelerates every phase. It floods the area with new blood vessels (angiogenesis) and upregulates growth hormone receptors in the fibroblasts already doing repair work. The tissue heals faster AND stronger.',
    stat: '4× faster tendon healing in controlled studies',
  },
  {
    icon: Heart,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    title: 'Gut & Digestive Healing',
    body: 'BPC-157 was literally isolated from human gastric juice. It is native to your gut. IBD, leaky gut, NSAID-damaged stomach lining, Crohn\'s flares — oral BPC-157 hits these directly without needing injection. It heals intestinal fistulas and protects the gut wall against the inflammatory cascade that drives these conditions.',
    stat: 'Oral administration effective for GI conditions',
  },
  {
    icon: Shield,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    title: 'Nerve Regeneration',
    body: 'Peripheral nerve damage — the kind from surgeries, compression injuries, or severe trauma — typically heals slowly or not at all. BPC-157 changes this by promoting nerve regrowth, reducing neuroinflammation, and protecting dopamine and serotonin pathways. Some users report it helping with nerve pain that hadn\'t responded to anything else.',
    stat: 'Peripheral nerve regrowth in crush injury models',
  },
  {
    icon: Flame,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    title: 'Inflammation Control',
    body: 'Unlike NSAIDs that just mute pain signals, BPC-157 modulates the actual inflammatory cascade. It reduces pro-inflammatory cytokines while keeping the healing response intact. You want some inflammation — it drives repair. BPC-157 keeps it productive and turns it off when the job is done.',
    stat: 'Cytokine modulation without suppressing repair',
  },
];

const protocol = [
  { week: 'Week 1–2', dose: '250 mcg', timing: 'Once daily, local injection near injury', note: 'Loading phase — establish tissue concentration' },
  { week: 'Week 3–8', dose: '250–500 mcg', timing: 'Once daily, subcutaneous or local', note: 'Main repair window — most noticeable progress here' },
  { week: 'Week 9–12', dose: '250 mcg', timing: 'Every other day', note: 'Maintenance — let remodeling complete' },
  { week: 'Gut protocol', dose: '500 mcg', timing: 'Oral, dissolved in water, morning empty stomach', note: 'Oral route preferred for GI conditions' },
];

const faqs = [
  { q: 'Does it need to be injected?', a: 'For systemic or injury repair use — yes, subcutaneous injection gets it into systemic circulation fastest. For gut issues specifically, oral (mixed in water, swallowed) works well because BPC-157 survives stomach acid.' },
  { q: 'How fast does it actually work?', a: 'Most users notice acute pain reduction within 3–7 days. Structural tissue repair — tendons, ligaments — becomes noticeable by weeks 4–6. Full remodeling takes 12 weeks. Don\'t judge it at two weeks.' },
  { q: 'Does it need to be cycled?', a: 'There\'s no evidence of tolerance or receptor downregulation. Most protocols run 8–12 weeks for an injury, then stop. For maintenance or gut health, some people run it indefinitely at low dose. No consensus on mandatory cycling.' },
  { q: 'Can I stack it with TB-500?', a: 'Yes — this is the gold standard combination. BPC-157 handles local repair and angiogenesis. TB-500 mobilizes systemic stem cells and handles the broader healing coordination. Together they cover every phase of the cascade.' },
];

export default function BPC157GuidePage() {
  const products = allProducts.filter(p =>
    ['bpc157-10mg', 'tb500-10mg', 'ghk-cu'].includes(p.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 font-bold text-sm">The Healing Peptide</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            BPC-157:<br />
            <span className="gradient-text">The Body's Own Repair Signal</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            It was found in human stomach acid. It heals tendons, rebuilds gut lining, and regenerates nerves.
            If you've ever had an injury that just won't close — this is probably why you're here.
          </p>
        </div>
      </AnimateIn>

      {/* Pull quote */}
      <AnimateIn delay={0.05}>
        <div className="mb-16 p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl">
          <p className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
            "Researchers nicknamed it the <span className="text-emerald-400">Wolverine peptide</span> for a reason."
          </p>
          <p className="text-gray-400 text-lg">
            BPC-157 (Body Protection Compound 157) is a 15-amino acid sequence extracted from human gastric juice.
            It doesn't force healing — it amplifies the signals your body is already sending and clears the bottlenecks slowing repair down.
          </p>
        </div>
      </AnimateIn>

      {/* What it does */}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl font-black text-white mb-8">What BPC-157 Actually Fixes</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {useCases.map((u) => (
            <div key={u.title} className={`p-6 rounded-2xl border bg-[#111] border-white/5`}>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-semibold mb-4 ${u.color}`}>
                <u.icon className="w-4 h-4" />
                {u.title}
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{u.body}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-sm text-emerald-300 font-medium">{u.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* The mechanism — author voice */}
      <AnimateIn delay={0.15}>
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-6">How It Works (Without the Textbook)</h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-4xl">
            <p>
              Your body already knows how to heal. The problem is traffic jams — inflammation that runs too long,
              blood supply that never reaches the injury, fibroblasts that show up late. BPC-157 is essentially
              a traffic controller for the healing cascade.
            </p>
            <p>
              It upregulates growth hormone receptors on the fibroblasts doing repair work. More receptors means
              more sensitivity to your existing GH signal — no exogenous GH needed. It also drives <strong className="text-white">angiogenesis</strong>,
              the formation of new blood vessels to the injury site. This is crucial — tendons and cartilage are
              notoriously avascular (poor blood supply), which is exactly why they heal so slowly. BPC-157 fixes that.
            </p>
            <p>
              For the gut specifically, it modulates the nitric oxide system. Nitric oxide regulates blood flow
              to the gut lining, drives the tight junction proteins that prevent leaky gut, and counteracts the
              prostaglandin-driven inflammation behind IBD and gastric ulcers. It works orally because it's
              native to the gastric environment — it wasn't engineered, it was <em>extracted</em>.
            </p>
          </div>
        </div>
      </AnimateIn>

      {/* Dosing protocol table */}
      <AnimateIn delay={0.2}>
        <h2 className="text-3xl font-black text-white mb-8">Dosing Protocol</h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Phase</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Dose</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Timing</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {protocol.map((row) => (
                <tr key={row.week} className="hover:bg-white/2 transition-colors">
                  <td className="py-4 px-4 text-white font-semibold">{row.week}</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">{row.dose}</td>
                  <td className="py-4 px-4 text-gray-300">{row.timing}</td>
                  <td className="py-4 px-4 text-gray-500 text-sm">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* Storage note */}
      <AnimateIn delay={0.22}>
        <div className="mb-16 flex gap-4 p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-300 font-semibold mb-1">Reconstitution & Storage</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reconstitute with bacteriostatic water. Use 2mL per 10mg vial for easy 500mcg/0.1mL dosing.
              Refrigerate after reconstitution — stable 4–6 weeks. Lyophilized (dry) powder is shelf stable
              for years at room temp. Never freeze reconstituted peptide.
            </p>
          </div>
        </div>
      </AnimateIn>

      {/* FAQ */}
      <AnimateIn delay={0.25}>
        <h2 className="text-3xl font-black text-white mb-8">Real Questions, Straight Answers</h2>
        <div className="space-y-4 mb-16">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-6 bg-[#111] border border-white/5 rounded-2xl">
              <p className="text-white font-bold mb-2">{faq.q}</p>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Products */}
      <AnimateIn delay={0.3}>
        <h2 className="text-3xl font-black text-white mb-8">Get Started</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </AnimateIn>
    </div>
  );
}

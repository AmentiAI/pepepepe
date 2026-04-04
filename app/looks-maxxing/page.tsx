import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { allStacks } from '@/lib/stacks';
import { RelatedLinks } from '@/components/RelatedLinks';
import { CheckCircle2, Sparkles, Droplets, Wind, Sun, TrendingUp, FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Looks Maxxing with Peptides — Science-Based Appearance Optimization Guide',
  description:
    'The complete peptide guide to looks maxxing. GHK-CU rebuilds collagen, SNAP-8 reduces expression lines, Melanotan II drives deep tanning, TB-500 restores hair follicles. Research-backed protocols for every appearance goal.',
};

const pillars = [
  {
    icon: Droplets,
    title: 'Skin & Collagen',
    href: '/skin',
    color: 'border-violet-500/30 bg-violet-500/5 text-violet-400',
    badge: 'bg-violet-500/10 border-violet-500/20',
    peptides: 'GHK-CU · SNAP-8 · BPC-157',
    description: 'Rebuild collagen density, reduce fine lines, and restore the structural matrix that makes skin look young and healthy.',
    stats: '32% fine line reduction at 12 weeks',
  },
  {
    icon: Wind,
    title: 'Hair Growth',
    href: '/hair',
    color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
    badge: 'bg-emerald-500/10 border-emerald-500/20',
    peptides: 'TB-500 · BPC-157 · GHK-CU',
    description: 'Activate dormant follicle stem cells, restore scalp vascularity, and drive terminal hair conversion from vellus miniaturization.',
    stats: 'Anagen phase initiation via Thymosin Beta-4',
  },
  {
    icon: Sun,
    title: 'Tanning & Pigmentation',
    href: '/tanning',
    color: 'border-amber-500/30 bg-amber-500/5 text-amber-400',
    badge: 'bg-amber-500/10 border-amber-500/20',
    peptides: 'Melanotan II · PT-141',
    description: 'Drive deep eumelanin pigmentation through direct melanocortin receptor activation — without requiring UV exposure as the primary trigger.',
    stats: 'Visible tanning in 4 injections (clinical)',
  },
  {
    icon: TrendingUp,
    title: 'Body Composition',
    href: '/fat-loss',
    color: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
    badge: 'bg-blue-500/10 border-blue-500/20',
    peptides: 'Tirzepatide · CJC-1295/Ipa · Semaglutide',
    description: 'The most impactful single lever for appearance: reduce body fat while preserving or building lean muscle for an aesthetic physique.',
    stats: '22.5% body weight loss (SURMOUNT trial)',
  },
];

const topPeptides = [
  {
    name: 'GHK-CU',
    slug: 'ghk-cu',
    mechanism: 'MC1R-independent collagen synthesis via TGF-β1 upregulation',
    benefit: 'Skin thickness, fine lines, scar reduction',
    evidence: 'Strong',
    color: 'text-violet-400',
  },
  {
    name: 'SNAP-8',
    slug: 'snap-8',
    mechanism: 'SNARE complex partial inhibition at neuromuscular junction',
    benefit: 'Expression line depth reduction up to 63%',
    evidence: 'Strong',
    color: 'text-violet-400',
  },
  {
    name: 'Melanotan II',
    slug: 'melanotan-ii-10mg',
    mechanism: 'MC1R/MC3R/MC4R agonism → eumelanin synthesis',
    benefit: 'Deep, even tanning without primary UV',
    evidence: 'Clinical Phase I/II',
    color: 'text-amber-400',
  },
  {
    name: 'TB-500',
    slug: 'tb500-10mg',
    mechanism: 'Actin-G/Actin-F ratio shift → follicle stem cell migration',
    benefit: 'Hair follicle activation, anagen initiation',
    evidence: 'Human trial data',
    color: 'text-emerald-400',
  },
  {
    name: 'BPC-157',
    slug: 'bpc157-10mg',
    mechanism: 'VEGF upregulation → angiogenesis at skin/follicle level',
    benefit: 'Skin luminosity, scar healing, follicle vascularity',
    evidence: 'Strong preclinical',
    color: 'text-emerald-400',
  },
  {
    name: 'Epithalon',
    slug: 'epithalon-50mg',
    mechanism: 'Telomerase activation → reduced cellular senescence',
    benefit: 'Cellular age reversal, skin rejuvenation',
    evidence: '15-year human study',
    color: 'text-purple-400',
  },
];

const looksStacks = allStacks.filter(s => s.goal === 'looks');

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Looks Maxxing with Peptides — Science-Based Appearance Optimization Guide',
  description: 'The complete peptide guide to appearance optimization covering skin collagen, hair growth, tanning, and body composition.',
  url: 'https://peptideprotocols.com/looks-maxxing',
  publisher: { '@type': 'Organization', name: 'PeptideProtocols', url: 'https://peptideprotocols.com' },
};

export default function LooksMaxxingPage() {
  const looksProducts = allProducts.filter(p =>
    p.category === 'looks' || p.tags.includes('tanning') || p.tags.includes('skin') || p.tags.includes('hair')
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-400 font-bold text-sm">Looks Maxxing Protocols</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Maximize Your Appearance.<br />
            <span className="gradient-text">With Peptide Science.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Looks maxxing is the systematic optimization of physical appearance using every available tool. Peptides represent the frontier of this approach — compounds that directly modulate collagen synthesis, melanin production, hair follicle biology, and body composition at the molecular level.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/skin" className="px-6 py-3 bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 text-violet-300 font-semibold rounded-xl text-sm transition-colors">
              Skin & Collagen Guide →
            </Link>
            <Link href="/hair" className="px-6 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 font-semibold rounded-xl text-sm transition-colors">
              Hair Growth Guide →
            </Link>
            <Link href="/tanning" className="px-6 py-3 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-300 font-semibold rounded-xl text-sm transition-colors">
              Tanning Peptides →
            </Link>
          </div>
        </div>
      </AnimateIn>

      {/* The 4 Pillars */}
      <AnimateIn delay={0.05}>
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-3">The 4 Pillars of Peptide Looks Maxxing</h2>
          <p className="text-gray-400 text-lg mb-8">Each pillar targets a distinct biological system. Real appearance optimization requires addressing all four.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link key={pillar.title} href={pillar.href}>
                  <div className={`border rounded-2xl p-7 h-full card-hover cursor-pointer transition-all ${pillar.color}`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-5 ${pillar.badge}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-4">{pillar.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-mono">{pillar.peptides}</span>
                      <span className="text-xs text-gray-600 bg-white/5 px-3 py-1 rounded-full">{pillar.stats}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </AnimateIn>

      {/* What Is Looks Maxxing */}
      <AnimateIn delay={0.08}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-5">What Is Looks Maxxing?</h2>
          <div className="prose-dark max-w-none">
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Looks maxxing is the systematic approach to optimizing physical appearance through evidence-based interventions. Unlike conventional beauty routines focused on cosmetic cover, looks maxxing targets the underlying biological systems that determine how you look — collagen density, melanin production, follicle health, body composition, and skin structure.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Peptides occupy a unique position in this toolkit because they operate at the same biological level as the processes they're targeting. GHK-CU doesn't mask aging — it reverses the gene expression shift that causes collagen loss. Melanotan II doesn't temporarily color skin — it triggers the same melanin synthesis pathway that UV radiation uses, but more efficiently. TB-500 doesn't stimulate follicles superficially — it activates the stem cells that initiate actual hair growth.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              This is the distinction between cosmetic intervention and biological optimization: peptides change the underlying system, not just the surface presentation. The effects take longer to appear than topical cosmetics but are correspondingly more durable and structurally meaningful.
            </p>
          </div>
        </div>
      </AnimateIn>

      {/* Peptide Reference Table */}
      <AnimateIn delay={0.1}>
        <div className="bg-[#111] border border-violet-500/20 rounded-2xl p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Top Looks Maxxing Peptides — Research Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Peptide</th>
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Mechanism</th>
                  <th className="pb-3 text-gray-300 font-medium text-left pr-4">Primary Benefit</th>
                  <th className="pb-3 text-gray-300 font-medium text-left">Evidence Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {topPeptides.map(p => (
                  <tr key={p.slug}>
                    <td className="py-3 pr-4">
                      <Link href={`/products/${p.slug}`} className={`font-semibold hover:underline ${p.color}`}>{p.name}</Link>
                    </td>
                    <td className="py-3 pr-4 text-gray-500 text-xs">{p.mechanism}</td>
                    <td className="py-3 pr-4 text-gray-300">{p.benefit}</td>
                    <td className="py-3 text-gray-400">{p.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimateIn>

      {/* Why peptides beat conventional tools */}
      <AnimateIn delay={0.12}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why Peptides Are Different From Conventional Approaches</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Operate at the gene expression level — GHK-CU modulates 4,000+ genes that control collagen and repair',
              'Produce structural changes (increased collagen density, follicle size) not possible with topical cosmetics',
              'No long-term receptor downregulation — SNAP-8 and GHK-CU do not lose efficacy with continued use',
              'Multiple mechanisms from one compound — BPC-157 improves skin vascularity, healing, and inflammation simultaneously',
              'Synergistic stacking — peptides working through different receptors can be combined for additive benefit',
              'Well-characterized safety profiles — GHK-CU, BPC-157, and TB-500 have 20+ years of research data',
            ].map(point => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Looks Maxxing Stacks */}
      {looksStacks.length > 0 && (
        <AnimateIn delay={0.14}>
          <div className="mb-16">
            <h2 className="text-3xl font-black text-white mb-3">Looks Maxxing Protocol Stacks</h2>
            <p className="text-gray-400 text-lg mb-8">Pre-built multi-peptide protocols designed for specific appearance goals.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {looksStacks.map((stack, i) => (
                <AnimateIn key={stack.slug} delay={i * 0.06}>
                  <Link href={`/stacks/${stack.slug}`}>
                    <div className="bg-[#111] border border-violet-500/20 rounded-2xl p-6 h-full card-hover">
                      <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1 mb-4">
                        <FlaskConical className="w-3.5 h-3.5 text-violet-400" />
                        <span className="text-violet-400 text-xs font-semibold uppercase tracking-wide">{stack.difficulty}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{stack.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{stack.tagline}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-brand-400 font-bold">${stack.cost.toFixed(2)}</span>
                        <span className="text-gray-500 text-xs">{stack.timeframe}</span>
                      </div>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </AnimateIn>
      )}

      {/* Products */}
      {looksProducts.length > 0 && (
        <>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-white">Looks Maxxing Peptides</h2>
              <p className="text-gray-500 text-sm mt-1">{looksProducts.length} peptides for appearance optimization</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {looksProducts.map((product, i) => (
              <AnimateIn key={product.slug} delay={i * 0.06}>
                <ProductCard product={product} />
              </AnimateIn>
            ))}
          </div>
        </>
      )}

      {/* Beginner path */}
      <AnimateIn delay={0.2}>
        <div className="bg-gradient-to-r from-violet-500/10 to-brand-500/10 border border-violet-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Not Sure Where to Start?</h2>
          <p className="text-gray-400 text-base mb-6 max-w-xl mx-auto">
            For most people, the highest-impact looks maxxing intervention is body composition — followed by skin collagen. Start with the guide most relevant to your primary goal.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/skin" className="px-5 py-2.5 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-xl text-sm transition-colors">
              Skin & Collagen Guide
            </Link>
            <Link href="/tanning" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl text-sm transition-colors">
              Tanning Peptides
            </Link>
            <Link href="/fat-loss" className="px-5 py-2.5 bg-brand-500 hover:bg-brand-400 text-black font-semibold rounded-xl text-sm transition-colors">
              Fat Loss Protocols
            </Link>
          </div>
        </div>
      </AnimateIn>

      <RelatedLinks pageKey="looks-maxxing" />
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle, TrendingDown } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Semaglutide vs Tirzepatide vs Retatrutide — GLP-1 Comparison Guide',
  description:
    'Head-to-head comparison of every GLP-1 class peptide: semaglutide vs tirzepatide vs retatrutide vs CagriSema. Clinical weight loss data, mechanism differences, dosing, and who each compound is for.',
  alternates: {
    canonical: 'https://peptideprotocols.com/compare',
  },
  openGraph: {
    title: 'Semaglutide vs Tirzepatide vs Retatrutide — GLP-1 Comparison',
    description: 'Clinical weight loss data, mechanisms, dosing, and head-to-head results for every GLP-1 class fat loss peptide.',
    url: 'https://peptideprotocols.com/compare',
  },
};

const compounds = [
  {
    name: 'Semaglutide',
    slug: 'glp-1s-5mg',
    mechanism: 'GLP-1 agonist',
    agonism: 'Single',
    peakWeightLoss: '14.9%',
    trial: 'STEP 1 (68 wk)',
    halfLife: '7 days',
    startDose: '0.25mg/week',
    maxDose: '2.4mg/week',
    difficulty: 'Beginner',
    diffColor: 'text-green-400',
    color: 'border-brand-500/30 bg-brand-500/5',
    badge: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
    pros: [
      'Most data — longest human use record',
      'Simplest titration schedule',
      'Well-understood side effect profile',
      'Best starting point for GLP-1 beginners',
    ],
    cons: [
      'Lower weight loss ceiling vs dual/triple agonists',
      'No GIP or glucagon pathway activation',
    ],
  },
  {
    name: 'Tirzepatide',
    slug: 'glp-2t-15mg',
    mechanism: 'GLP-1 + GIP agonist',
    agonism: 'Dual',
    peakWeightLoss: '22.5%',
    trial: 'SURMOUNT-1 (72 wk)',
    halfLife: '5 days',
    startDose: '2.5mg/week',
    maxDose: '15mg/week',
    difficulty: 'Intermediate',
    diffColor: 'text-yellow-400',
    color: 'border-blue-500/30 bg-blue-500/5',
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    pros: [
      '22.5% mean weight loss — best of any approved drug at launch',
      'GIP activation adds a second appetite suppression pathway',
      'Better metabolic markers (HbA1c, insulin sensitivity)',
      'Weekly injection — same convenience as semaglutide',
    ],
    cons: [
      'More complex titration than semaglutide',
      'Slightly higher GI burden at equivalent doses',
    ],
  },
  {
    name: 'Retatrutide',
    slug: 'glp-3r-10mg',
    mechanism: 'GLP-1 + GIP + GCG agonist',
    agonism: 'Triple',
    peakWeightLoss: '24%+',
    trial: 'Phase 2 TRIUMPH (24 wk)',
    halfLife: '~7 days',
    startDose: '0.5–1mg/week',
    maxDose: '12mg/week (Ph2)',
    difficulty: 'Advanced',
    diffColor: 'text-red-400',
    color: 'border-amber-500/30 bg-amber-500/5',
    badge: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    pros: [
      'Highest weight loss in class — glucagon adds thermogenesis',
      'Raises basal metabolic rate (~5–8%) via glucagon receptor',
      '50–60% liver fat reduction (TRIUMPH data)',
      'Three independent mechanisms working simultaneously',
    ],
    cons: [
      'Phase 3 only — not yet an approved pharmaceutical',
      'Most complex titration; highest GI side effect burden',
      'Not appropriate for beginners',
    ],
  },
  {
    name: 'CagriSema',
    slug: 'glp-1cglp-1s-5mg',
    mechanism: 'GLP-1 + amylin agonist',
    agonism: 'Dual (GLP-1 + amylin)',
    peakWeightLoss: '~15.6%',
    trial: 'REDEFINE (Phase 2)',
    halfLife: '7 days (both)',
    startDose: '0.16mg cagri + 0.25mg sema',
    maxDose: '2.4mg / 2.4mg',
    difficulty: 'Intermediate',
    diffColor: 'text-yellow-400',
    color: 'border-purple-500/30 bg-purple-500/5',
    badge: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    pros: [
      'Amylin pathway is completely distinct from GLP-1/GIP',
      'Combined weekly injection for both components',
      'Unique postprandial glucose and gastric emptying effects',
      'Suitable for GLP-1 responders wanting a second mechanism',
    ],
    cons: [
      'Weight loss similar to semaglutide alone — amylin adds modest incremental benefit',
      'Requires titrating two compounds independently',
    ],
  },
];

const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Semaglutide vs Tirzepatide vs Retatrutide — GLP-1 Comparison Guide',
  description:
    'Head-to-head comparison of semaglutide, tirzepatide, retatrutide, and CagriSema. Clinical weight loss data, mechanism differences, dosing protocols, and recommendation framework.',
  url: 'https://peptideprotocols.com/compare',
  publisher: { '@type': 'Organization', name: 'PeptideProtocols', url: 'https://peptideprotocols.com' },
};

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />

      <AnimateIn>
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-2 mb-6">
            <TrendingDown className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-semibold text-brand-300">Full clinical comparison</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
            Semaglutide vs Tirzepatide<br />
            vs <span className="gradient-text">Retatrutide</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Every GLP-1 class fat loss compound compared side by side — clinical weight loss data, mechanism differences, titration protocols, and which one is right for your goals.
          </p>
        </div>
      </AnimateIn>

      {/* Quick comparison table */}
      <AnimateIn delay={0.1}>
        <div className="mb-16 overflow-x-auto">
          <table className="w-full text-sm border border-white/5 rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-white/3 border-b border-white/5">
                <th className="text-left py-4 px-5 text-gray-400 font-medium">Compound</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Mechanism</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Peak Weight Loss</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Trial Data</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Half-Life</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {compounds.map((c) => (
                <tr key={c.name} className="hover:bg-white/2 transition-colors">
                  <td className="py-4 px-5">
                    <p className="font-bold text-white">{c.name}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{c.agonism}</p>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{c.mechanism}</td>
                  <td className="py-4 px-4">
                    <span className="text-brand-400 font-black text-lg">{c.peakWeightLoss}</span>
                    <p className="text-xs text-gray-600">body weight</p>
                  </td>
                  <td className="py-4 px-4 text-gray-500 text-xs">{c.trial}</td>
                  <td className="py-4 px-4 text-gray-400">{c.halfLife}</td>
                  <td className="py-4 px-4">
                    <span className={`text-xs font-semibold ${c.diffColor}`}>{c.difficulty}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* Mechanism explainer */}
      <AnimateIn delay={0.1}>
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-3">Why agonism count matters</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl leading-relaxed">
            Each additional receptor agonism adds an independent appetite and metabolic mechanism. More pathways means more total effect — but also more complexity and side effect burden.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'GLP-1 receptor',
                role: 'Slows gastric emptying, signals satiety to the brain, stimulates insulin release',
                compounds: 'All four compounds',
                color: 'border-brand-500/20 bg-brand-500/5 text-brand-400',
              },
              {
                label: 'GIP receptor',
                role: 'Adds a second satiety pathway; enhances insulin response; appears to amplify GLP-1 effects rather than simply duplicate them',
                compounds: 'Tirzepatide, Retatrutide',
                color: 'border-blue-500/20 bg-blue-500/5 text-blue-400',
              },
              {
                label: 'Glucagon receptor',
                role: 'Raises basal metabolic rate via thermogenesis (~5–8% BMR increase); drives hepatic fat mobilization and liver fat reduction',
                compounds: 'Retatrutide only',
                color: 'border-amber-500/20 bg-amber-500/5 text-amber-400',
              },
            ].map((r) => (
              <div key={r.label} className={`rounded-2xl border p-6 ${r.color.split(' ').slice(1).join(' ')}`}>
                <p className={`text-sm font-bold mb-2 ${r.color.split(' ')[0]}`}>{r.label}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{r.role}</p>
                <p className="text-xs text-gray-600"><span className="text-gray-500">Active in: </span>{r.compounds}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Individual compound cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {compounds.map((c, i) => (
          <AnimateIn key={c.name} delay={i * 0.07}>
            <div className={`bg-[#111] border rounded-2xl overflow-hidden h-full flex flex-col ${c.color}`}>
              <div className="p-7 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${c.badge}`}>
                    {c.agonism}
                  </span>
                  <span className={`text-xs font-semibold ${c.diffColor}`}>{c.difficulty}</span>
                </div>

                <h2 className="text-2xl font-black text-white mb-1">{c.name}</h2>
                <p className="text-sm text-gray-500 mb-5">{c.mechanism}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    ['Peak weight loss', c.peakWeightLoss],
                    ['Trial', c.trial],
                    ['Half-life', c.halfLife],
                    ['Start dose', c.startDose],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-white/3 rounded-xl p-3">
                      <p className="text-xs text-gray-600 mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-5">
                  {c.pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">{pro}</p>
                    </div>
                  ))}
                  {c.cons.map((con) => (
                    <div key={con} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-500">{con}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-7 pb-7">
                <Link
                  href={`/products/${c.slug}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/5 hover:bg-brand-500/20 border border-white/10 hover:border-brand-500/30 text-white hover:text-brand-300 font-bold rounded-xl text-sm transition-all"
                >
                  Full {c.name} Protocol
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Decision guide */}
      <AnimateIn>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-black text-white mb-6">Which compound should you choose?</h2>
          <div className="space-y-4">
            {[
              {
                condition: 'First time using a GLP-1 peptide',
                recommendation: 'Semaglutide 5mg',
                reason: 'Most data, simplest titration, best starting point for tolerance assessment before stepping up.',
                href: '/products/glp-1s-5mg',
              },
              {
                condition: 'Want maximum fat loss, experienced with GLP-1s',
                recommendation: 'Tirzepatide 15mg',
                reason: '22.5% mean weight loss in SURMOUNT-1 — 7–8 percentage points more than semaglutide. Dual mechanism with manageable titration.',
                href: '/products/glp-2t-15mg',
              },
              {
                condition: 'Want maximum possible efficacy, advanced user',
                recommendation: 'Retatrutide 10mg',
                reason: 'Triple agonism adds thermogenesis via glucagon receptor. Highest weight loss data in the class. Requires prior GLP-1 experience.',
                href: '/products/glp-3r-10mg',
              },
              {
                condition: 'Plateaued on semaglutide, want second mechanism without GIP',
                recommendation: 'CagriSema',
                reason: 'Adds amylin pathway — completely distinct from GLP-1/GIP. Both compounds weekly-dosed for simple combination protocol.',
                href: '/products/glp-1cglp-1s-5mg',
              },
              {
                condition: 'Want fat loss AND lean mass preservation',
                recommendation: 'Tirzepatide + CJC-1295/Ipamorelin',
                reason: 'The Advanced Body Recomp Stack — dual-agonist fat loss paired with GH secretagogue for simultaneous body recomposition.',
                href: '/stacks/advanced-recomp-stack',
              },
            ].map((item) => (
              <Link
                key={item.condition}
                href={item.href}
                className="group flex items-start gap-5 p-5 bg-white/3 hover:bg-white/6 border border-white/5 hover:border-brand-500/30 rounded-2xl transition-all"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-600 mb-1">If you…</p>
                  <p className="text-base font-semibold text-white mb-1">{item.condition}</p>
                  <p className="text-sm text-brand-300 font-bold mb-1">→ {item.recommendation}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.reason}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-brand-400 transition-colors shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* CTA to fat-loss guide */}
      <AnimateIn>
        <div className="text-center">
          <p className="text-gray-500 mb-4">Want the full clinical breakdown of every GLP-1 compound?</p>
          <Link
            href="/fat-loss"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl text-base transition-colors"
          >
            Full Fat Loss Peptide Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimateIn>
    </div>
  );
}

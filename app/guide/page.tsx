import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, BookOpen, Zap, Activity, Syringe } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Beginner\'s Guide to Peptides — Start Here',
  description:
    'Complete beginner\'s guide to therapeutic peptides: what they are, the four goal categories, reconstitution and injection basics, protocol design, and where to start.',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Reconstitute a Peptide Vial',
  description: 'Step-by-step guide to reconstituting a lyophilized peptide vial with bacteriostatic water for subcutaneous injection.',
  step: [
    { '@type': 'HowToStep', name: 'Draw bacteriostatic water', text: 'Draw 1–2ml of bacteriostatic water into a fresh insulin syringe.' },
    { '@type': 'HowToStep', name: 'Add water to vial', text: 'Insert the needle at the vial wall and let water run slowly down the glass — do not jet it onto the powder.' },
    { '@type': 'HowToStep', name: 'Dissolve the powder', text: 'Gently swirl (never shake) until the powder is fully dissolved. Let sit 2–3 minutes until clear.' },
    { '@type': 'HowToStep', name: 'Store and use', text: 'Refrigerate immediately. Use within 28 days. Draw doses using a 29–31 gauge insulin syringe.' },
  ],
};

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {/* Hero */}
      <AnimateIn>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-3 py-1.5 mb-6">
            <BookOpen className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-xs font-medium text-brand-300">Start Here</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Beginner&apos;s Guide to <span className="gradient-text">Peptides</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Everything you need to know before starting your first peptide protocol — how they work, which to choose for your goal, how to reconstitute and inject, and how to build your first 30-day plan.
          </p>
        </div>
      </AnimateIn>

      {/* Table of contents */}
      <AnimateIn delay={0.1}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-400" />
            What We Cover
          </h2>
          <ol className="space-y-2">
            {[
              'What are peptides — and how they differ from regular supplements',
              'The four goal categories and which peptides belong to each',
              'How to choose your first peptide based on your goal',
              'Reconstitution and injection basics',
              'Cycling and protocol design',
              'Critical safety considerations',
              'Your first 30-day protocol',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                <span className="w-5 h-5 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </AnimateIn>

      {/* Sections */}
      <div className="space-y-12">
        <AnimateIn delay={0.1}>
          <section>
            <h2 className="text-2xl font-black text-white mb-4">1. What Are Peptides?</h2>
            <div className="prose-dark space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Peptides are short chains of amino acids — the same building blocks as proteins, but smaller and more targeted in their biological action. Your body produces its own peptides as signaling molecules: growth hormone, insulin, and glucagon are all peptides. Therapeutic peptides are synthetically manufactured versions of these endogenous signals, designed to activate the same biological pathways.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Unlike traditional supplements, which provide raw material your body might be deficient in, peptides are precise molecular instructions. BPC-157 doesn&apos;t supplement a nutrient — it directly signals fibroblast proliferation, angiogenesis, and growth hormone receptor upregulation at the cellular level.
              </p>
              <p className="text-gray-300 leading-relaxed">
                MaxxingPeptides covers four goal categories: healing and recovery, fat loss, performance, and anti-aging. Every compound is selected for mechanism clarity, documented human use, and protocol specificity.
              </p>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section>
            <h2 className="text-2xl font-black text-white mb-4">2. The Four Goal Categories</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Choose your primary goal first. Each category operates through a different biological mechanism — there is no single peptide that does everything well.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Healing & Recovery',
                  mechanism: 'Tissue repair signaling',
                  effects: 'Tendon, ligament, gut, nerve, and muscle repair',
                  compounds: 'BPC-157, TB-500, GHK-CU',
                  color: 'border-emerald-500/20 bg-emerald-500/5',
                  badge: 'text-emerald-400 bg-emerald-500/10',
                  href: '/healing',
                },
                {
                  category: 'Fat Loss',
                  mechanism: 'GLP-1 / GIP / glucagon receptor agonism',
                  effects: 'Appetite suppression, insulin regulation, metabolic rate increase',
                  compounds: 'Semaglutide, Tirzepatide, Retatrutide',
                  color: 'border-blue-500/20 bg-blue-500/5',
                  badge: 'text-blue-400 bg-blue-500/10',
                  href: '/fat-loss',
                },
                {
                  category: 'Performance',
                  mechanism: 'GH axis stimulation + IGF-1',
                  effects: 'Lean muscle growth, faster recovery, body recomposition',
                  compounds: 'CJC-1295 / Ipamorelin, IGF-1 LR3',
                  color: 'border-amber-500/20 bg-amber-500/5',
                  badge: 'text-amber-400 bg-amber-500/10',
                  href: '/performance',
                },
                {
                  category: 'Anti-Aging',
                  mechanism: 'Telomerase activation, gene modulation, NAD+ metabolism',
                  effects: 'Cellular longevity, skin quality, mitochondrial function',
                  compounds: 'Epithalon, GHK-CU, NAD+, SNAP-8',
                  color: 'border-purple-500/20 bg-purple-500/5',
                  badge: 'text-purple-400 bg-purple-500/10',
                  href: '/anti-aging',
                },
              ].map(s => (
                <Link key={s.category} href={s.href} className={`rounded-xl border p-5 transition-opacity hover:opacity-90 ${s.color}`}>
                  <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${s.badge}`}>
                    {s.category}
                  </span>
                  <p className="text-white font-medium mt-3 mb-1">{s.mechanism}</p>
                  <p className="text-sm text-gray-400 mb-2">{s.effects}</p>
                  <p className="text-xs text-gray-600">
                    <span className="text-gray-500">Key compounds: </span>
                    {s.compounds}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section>
            <h2 className="text-2xl font-black text-white mb-4">3. How to Choose Your First Peptide</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The biggest mistake beginners make is starting with too many compounds at once. Run one peptide per goal for 8–12 weeks and evaluate before adding anything else.
            </p>
            <div className="bg-gradient-to-br from-brand-950/50 to-black border border-brand-500/20 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-400" />
                First Peptide by Goal
              </h3>
              <div className="space-y-3">
                {[
                  {
                    step: 'Healing',
                    action: 'BPC-157 10mg — 250–500mcg subcutaneous, daily',
                    why: 'Fastest onset of any healing peptide. Measurable pain and mobility improvement within 2–4 weeks.',
                  },
                  {
                    step: 'Fat Loss',
                    action: 'Semaglutide 5mg — start 0.25mg/week, titrate slowly',
                    why: 'Most documented GLP-1. The established first step before considering tirzepatide or retatrutide.',
                  },
                  {
                    step: 'Performance',
                    action: 'CJC-1295 / Ipamorelin — 100mcg each before bed',
                    why: 'Pulsatile GH release that mirrors natural rhythm. Clean lean mass gains without HPTA suppression.',
                  },
                  {
                    step: 'Anti-Aging',
                    action: 'Epithalon 50mg — 10mg/day for 10 consecutive days',
                    why: 'Course-based protocol. Run twice per year. Matches established human trial dosing approach.',
                  },
                ].map(s => (
                  <div key={s.step} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-brand-400 bg-brand-500/10 rounded-lg px-2 py-1 shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">{s.action}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section>
            <h2 className="text-2xl font-black text-white mb-4">4. Reconstitution &amp; Injection Basics</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Most peptides arrive as lyophilized (freeze-dried) powder and must be reconstituted with bacteriostatic water before use. The process is simple and takes under 5 minutes.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'What is bacteriostatic water?',
                  desc: 'Sterile water with 0.9% benzyl alcohol, which prevents bacterial contamination in multi-dose vials. Do not substitute plain sterile water — it has no preservative and your reconstituted peptide will degrade significantly faster.',
                },
                {
                  title: 'How to reconstitute a vial',
                  desc: 'Draw 1–2ml of bacteriostatic water into an insulin syringe. Insert the needle at the vial wall and let water run slowly down the glass — do not jet it directly onto the powder. Gently swirl (never shake). Let sit 2–3 minutes until fully clear.',
                },
                {
                  title: 'Subcutaneous injection technique',
                  desc: 'Pinch a fold of skin on your abdomen or flank. Insert a 29–31 gauge insulin syringe at a 45–90 degree angle. Inject slowly. Alternate injection sites each use to prevent lipohypertrophy. Sub-Q is preferred for most peptides — slower, more consistent absorption than intramuscular.',
                },
                {
                  title: 'Dosing math example',
                  desc: 'Example: 10mg BPC-157 vial + 2ml BAC water = 5,000mcg/ml. For a 250mcg dose: draw 0.05ml (5 units on a 100-unit insulin syringe). Each product page on this site includes a full reconstitution and dosing table.',
                },
              ].map(p => (
                <div key={p.title} className="flex items-start gap-3 bg-[#111] border border-white/5 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white text-sm mb-1">{p.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section>
            <h2 className="text-2xl font-black text-white mb-4">5. Cycling &amp; Protocol Design</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Different peptide classes have different cycling requirements based on receptor adaptation and mechanism:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-gray-400 font-medium">Peptide</th>
                    <th className="text-left py-3 pr-4 text-gray-400 font-medium">Protocol</th>
                    <th className="text-left py-3 text-gray-400 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['BPC-157', '8–12 weeks on, 4 weeks off', 'Off period resets receptor sensitivity'],
                    ['TB-500', '6-week loading (2×/week), then 2×/month maintenance', 'Loading phase saturates Thymosin Beta-4 levels systemically'],
                    ['Semaglutide / Tirzepatide', 'Continuous titration protocol', 'Therapeutic window maintained continuously — no cycling needed'],
                    ['CJC-1295 / Ipamorelin', '5 days on / 2 days off', 'Mirrors natural pulsatile GH secretion rhythm'],
                    ['Epithalon', '10-day course, 2× per year', 'Telomerase activation is cumulative across courses'],
                    ['GHK-CU', '12 weeks continuous', 'Epigenetic gene modulation accumulates with sustained use'],
                    ['IGF-1 LR3', '4 weeks on, 4 weeks off', 'Prevents receptor desensitization from extended use'],
                  ].map(([compound, cycle, reason]) => (
                    <tr key={compound}>
                      <td className="py-3 pr-4 text-gray-300">{compound}</td>
                      <td className="py-3 pr-4 text-brand-400 font-mono text-xs">{cycle}</td>
                      <td className="py-3 text-gray-500">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section>
            <div className="flex items-start gap-3 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6">
              <Activity className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl font-black text-white mb-3">6. Critical Safety Notes</h2>
                <div className="space-y-3">
                  {[
                    'Always use bacteriostatic water — not plain sterile water — for multi-dose vials. Store reconstituted peptides refrigerated at 2–8°C and use within 28 days.',
                    'Use 29–31 gauge insulin syringes for all subcutaneous injections. Rotate sites (abdomen, flanks) to prevent lipohypertrophy.',
                    'GLP-1 class peptides (semaglutide, tirzepatide, retatrutide): consult a physician if you are diabetic or take insulin — hypoglycemia risk with concurrent use.',
                    'Start every new peptide at the lowest effective dose. Give at least 2–4 weeks before adjusting upward. Add only one new compound at a time.',
                  ].map(note => (
                    <div key={note} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 shrink-0" />
                      <p className="text-sm text-yellow-200/70">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="bg-gradient-to-br from-brand-950/50 to-black border border-brand-500/20 rounded-2xl p-8 text-center">
            <Syringe className="w-10 h-10 text-brand-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white mb-3">Ready to start your first protocol?</h2>
            <p className="text-gray-400 mb-6">
              View a complete pre-designed stack for your goal, or browse all peptides and build your own.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/stacks"
                className="flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl text-sm transition-colors"
              >
                View Protocol Stacks <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl text-sm hover:bg-white/10 transition-colors"
              >
                Browse All Peptides
              </Link>
            </div>
          </section>
        </AnimateIn>
      </div>
    </div>
  );
}

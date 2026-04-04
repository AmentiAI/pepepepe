import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, TrendingUp, Clock, Shield, ChevronRight, FlaskConical, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Growth Hormone Peptides: Complete Guide to GH Secretagogues | PeptideProtocols',
  description:
    'The definitive guide to growth hormone peptides — CJC-1295, Ipamorelin, Sermorelin, GHRP-2, Tesamorelin, and more. Compare GH secretagogues, build the perfect stack, and understand dosing protocols.',
};

const ghPeptides = [
  {
    name: 'CJC-1295 / DAC',
    class: 'GHRH Analogue',
    halfLife: '6–8 days',
    dosing: '1–2 mg / week',
    pulse: 'Sustained (blunted)',
    bestFor: 'Steady GH elevation, body recomp',
  },
  {
    name: 'CJC-1295 No DAC',
    class: 'GHRH Analogue',
    halfLife: '30 min',
    dosing: '100 mcg × 2–3×/day',
    pulse: 'Pulsatile (physiologic)',
    bestFor: 'Natural rhythm preservation',
  },
  {
    name: 'Sermorelin',
    class: 'GHRH Analogue (1–29)',
    halfLife: '10–20 min',
    dosing: '200–300 mcg × 1–2×/day',
    pulse: 'Pulsatile',
    bestFor: 'Beginner HRT replacement',
  },
  {
    name: 'Ipamorelin',
    class: 'GHRP (selective)',
    halfLife: '2 hours',
    dosing: '200–300 mcg × 2–3×/day',
    pulse: 'Clean pulse, no cortisol',
    bestFor: 'Stacking, side-effect sensitive users',
  },
  {
    name: 'GHRP-2',
    class: 'GHRP (ghrelin mimetic)',
    halfLife: '1–2 hours',
    dosing: '100–200 mcg × 2–3×/day',
    pulse: 'Strong pulse, mild cortisol',
    bestFor: 'Maximum GH output',
  },
  {
    name: 'Tesamorelin',
    class: 'GHRH Analogue (stabilised)',
    halfLife: '26 min (active)',
    dosing: '1–2 mg / day',
    pulse: 'Pulsatile',
    bestFor: 'FDA-approved visceral fat reduction',
  },
];

const stackGoals = [
  {
    goal: 'Fat Loss & Recomp',
    stack: 'CJC-1295 No DAC + Ipamorelin',
    protocol: '100 mcg each, 2–3× daily, fasted AM + pre-bed',
    icon: TrendingUp,
  },
  {
    goal: 'Maximum GH Output',
    stack: 'CJC-1295 No DAC + GHRP-2',
    protocol: '100 mcg CJC + 100–200 mcg GHRP-2, 3× daily',
    icon: Zap,
  },
  {
    goal: 'Sleep & Recovery',
    stack: 'Sermorelin or Ipamorelin (pre-bed only)',
    protocol: '200–300 mcg, 30 min before sleep, no carbs',
    icon: Clock,
  },
  {
    goal: 'Visceral Fat (Clinical)',
    stack: 'Tesamorelin',
    protocol: '2 mg SC daily, abdomen injection site',
    icon: Shield,
  },
];

export default function GrowthHormonePeptidesPage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
            <FlaskConical className="w-3.5 h-3.5" />
            GH Secretagogues — Research Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Growth Hormone Peptides:{' '}
            <span className="gradient-text">The Complete Secretagogue Guide</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
            GHRH analogues and GHRPs work together to restore your body&apos;s own GH axis. Understand how each compound works, how to combine them for synergistic output, and which protocol matches your goal — fat loss, muscle, recovery, or anti-aging.
          </p>
          <div className="flex flex-wrap gap-3">
            {['CJC-1295 Guide', 'Ipamorelin Dosing', 'GHRP-2 vs Ipamorelin', 'Tesamorelin Protocol', 'GH Stack Builder'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* How GH Release Works */}
        <section>
          <h2 className="text-3xl font-bold mb-6">How Growth Hormone Release Actually Works</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              Growth hormone is not secreted continuously. The pituitary releases GH in discrete pulses — typically 6 to 12 per day in young adults — with the largest pulse occurring roughly 60–90 minutes after sleep onset during slow-wave sleep. This pulsatile pattern is not a quirk; it is biologically essential. Continuous GH exposure desensitises receptors and blunts downstream IGF-1 signalling. Pharmacologic strategies that try to raise GH all day long (like synthetic GH injections) are trading receptor sensitivity for peak levels, which is why research into secretagogues that preserve the pulse architecture has accelerated dramatically.
            </p>
            <p>
              Two hypothalamic hormones govern this pulse system. Growth hormone-releasing hormone (GHRH) acts on somatotroph cells in the anterior pituitary to stimulate synthesis and release of GH. Somatostatin does the opposite — it acts as the brake. GH pulse amplitude is determined by the ratio of GHRH stimulation to somatostatin tone at any given moment. The third player is ghrelin, the gut peptide that binds a distinct receptor (GHS-R1a) and amplifies GHRH signalling through a separate but synergistic pathway. This three-signal model explains why the most effective research stacks combine a GHRH analogue with a ghrelin mimetic (GHRP): you press the accelerator and release the brake simultaneously.
            </p>
            <p>
              Research peptides in the GH space fall into two mechanistic classes: GHRH analogues (CJC-1295 variants, Sermorelin, Tesamorelin) that bind the GHRH receptor and stimulate GH synthesis, and GHRPs — Growth Hormone Releasing Peptides — (Ipamorelin, GHRP-2, GHRP-6, Hexarelin) that act primarily at GHS-R1a. Using them together produces GH pulses 2–10× larger than either compound alone, a synergy documented in multiple Phase I and Phase II clinical trials.
            </p>
          </div>
        </section>

        {/* GHRH Analogues */}
        <section>
          <h2 className="text-3xl font-bold mb-4">GHRH Analogues: Sermorelin vs CJC-1295 vs Tesamorelin</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            All three are synthetic versions of endogenous GHRH (44 amino acids). They differ primarily in half-life — a distinction that has profound practical implications.
          </p>

          <div className="space-y-6">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-brand-400 mb-3">Sermorelin (GHRH 1–29)</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sermorelin is the first 29 amino acids of native GHRH — the minimum active fragment. It was FDA-approved in 1997 for paediatric GH deficiency and remains the longest-studied GHRH analogue in clinical use. Its short half-life (10–20 minutes) means it mimics the natural GHRH burst that precedes each GH pulse. Because Sermorelin depends on functional pituitary reserve, it provides a useful diagnostic signal: a poor response suggests pituitary dysfunction rather than a hypothalamic problem.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Dosing in wellness protocols is typically 200–300 mcg subcutaneously, once or twice daily. Pre-bed administration capitalises on the natural sleep-phase pulse and is the standard single-dose approach. The compound is well-tolerated, with the most common side effects being transient injection-site flushing and mild nausea. No cortisol, prolactin, or insulin-stimulating effects have been reported at therapeutic doses — an advantage over some GHRPs.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-brand-400 mb-3">CJC-1295 No DAC (Modified GRF 1–29)</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                CJC-1295 No DAC — also called Modified GRF 1–29 or Mod GRF — is Sermorelin with four amino acid substitutions that improve receptor binding affinity and extend the half-life to approximately 30 minutes. This is just long enough to ensure reliable absorption from the subcutaneous depot while remaining short enough to preserve pulsatility.
              </p>
              <p className="text-gray-300 leading-relaxed">
                It is widely considered the preferred GHRH analogue for stacking because its brief duration aligns well with the rapid action of co-administered GHRPs. Standard dosing is 100 mcg injected 2–3 times daily, ideally on an empty stomach (insulin blunts GH release). The most popular timing is morning fasted and pre-bed, with an optional midday dose for users seeking aggressive recomp or maximum pulsatility.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-brand-400 mb-3">CJC-1295 with DAC (Drug Affinity Complex)</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Adding a Drug Affinity Complex (DAC) — a lysine-biotin linker — allows CJC-1295 to covalently bind to albumin after injection, extending its half-life from 30 minutes to 6–8 days. A single injection of 1–2 mg sustains elevated GHRH signalling for a full week, dramatically simplifying administration schedules.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The tradeoff is that sustained GHRH signalling flattens the pulsatile architecture. Plasma GH levels rise but the discrete large pulses are replaced by a lower-amplitude continuous elevation. Whether this is inferior, equivalent, or superior to pulsatile stimulation for different outcomes (fat loss vs. muscle vs. anti-aging) remains an open question in the research literature. In practice, many users find the once-weekly convenience worth the theoretical tradeoff.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-brand-400 mb-3">Tesamorelin (Egrifta)</h3>
              <p className="text-gray-300 leading-relaxed">
                Tesamorelin is a full-length GHRH analogue (44 amino acids) stabilised by a trans-3-hexenoic acid modification. It earned FDA approval in 2010 for HIV-associated lipodystrophy — specifically visceral adiposity — making it the only GH secretagogue with a current FDA indication for fat reduction. Phase III trials (ENCORE, RADIANCE) demonstrated 15–20% reductions in visceral adipose tissue area measured by CT scan over 26 weeks at 2 mg/day, with maintenance of reductions at one year. IGF-1 elevations were approximately 181% above baseline. Tesamorelin is more expensive than other secretagogues and is typically reserved for users with specific visceral fat goals or those seeking clinical-grade evidence behind their protocol.
              </p>
            </div>
          </div>
        </section>

        {/* GHRPs */}
        <section>
          <h2 className="text-3xl font-bold mb-4">GHRPs: Ipamorelin vs GHRP-2 vs GHRP-6 vs Hexarelin</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            GHRPs act at the ghrelin receptor (GHS-R1a), amplifying GHRH signal and suppressing somatostatin. They differ critically in selectivity — how specifically they target GH release vs. stimulating cortisol, prolactin, and appetite.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Ipamorelin',
                badge: 'Most Selective',
                color: 'brand',
                body: 'Ipamorelin is a pentapeptide GHRP and the most selective GHS-R1a agonist available. It stimulates GH release without meaningfully increasing cortisol, prolactin, or ACTH at therapeutic doses — a profile confirmed in Phase I human trials. This makes it the preferred GHRP for users sensitive to cortisol elevation or those concerned about long-term HPA axis effects. Dose: 200–300 mcg, 2–3× daily. Stack: almost universally paired with CJC-1295 No DAC.',
              },
              {
                name: 'GHRP-2',
                badge: 'Strongest Output',
                color: 'yellow',
                body: 'GHRP-2 produces the largest acute GH pulses of any GHRP. In clinical studies it elevated plasma GH to levels significantly higher than Ipamorelin or GHRP-6 at equivalent doses. The tradeoff is a mild cortisol and prolactin increase (~30–50% above baseline), which is transient but becomes relevant in chronic use. Dose: 100–200 mcg, 2–3× daily. Best for users whose primary goal is maximum GH output and IGF-1 elevation, such as serious athletes and aggressive anti-aging protocols.',
              },
              {
                name: 'GHRP-6',
                badge: 'Hunger Warning',
                color: 'orange',
                body: 'GHRP-6 is a hexapeptide GHRP with potent GH-releasing effects but a notorious side effect: dramatically increased appetite, starting roughly 20–30 minutes post-injection. This occurs because GHRP-6 activates ghrelin pathways in the gut and hypothalamus beyond the pituitary. In a caloric deficit, this appetite drive makes compliance difficult. It does have the highest ghrelin mimicry, which may benefit gut healing applications (similar logic to BPC-157). Dose: 100–200 mcg, 2–3× daily.',
              },
              {
                name: 'Hexarelin',
                badge: 'Desensitises Fast',
                color: 'red',
                body: 'Hexarelin produces the largest single-dose GH spike of any GHRP — sometimes 2× the response of GHRP-2 — but its receptor desensitisation is rapid and pronounced. After 4–8 weeks of continuous use, GH response drops significantly even with dose escalation. Hexarelin also has the highest cortisol and prolactin stimulating effects. It is less commonly used in sustained protocols and better suited for short blast cycles (4 weeks on, 4 weeks off). Additionally, Hexarelin has independent cardioprotective effects via GHS-R1b in cardiac tissue, which is an area of ongoing research.',
              },
            ].map(item => (
              <div key={item.name} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    {item.badge}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Full GH Peptide Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {['Peptide', 'Class', 'Half-Life', 'Dose', 'Pulse Type', 'Best For'].map(h => (
                    <th key={h} className="text-left py-3 px-4 text-gray-400 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ghPeptides.map((p, i) => (
                  <tr key={p.name} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="py-3 px-4 font-medium text-white">{p.name}</td>
                    <td className="py-3 px-4 text-brand-400">{p.class}</td>
                    <td className="py-3 px-4 text-gray-300">{p.halfLife}</td>
                    <td className="py-3 px-4 text-gray-300">{p.dosing}</td>
                    <td className="py-3 px-4 text-gray-300">{p.pulse}</td>
                    <td className="py-3 px-4 text-gray-400">{p.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stacking */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Building a GH Peptide Stack</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The synergy between a GHRH analogue and a GHRP is well-documented. A landmark 1997 paper by Bowers et al. showed that combining GHRH with GHRP-6 produced GH pulses approximately 7–10× greater than either compound alone. The mechanism is dual-axis stimulation: GHRH loads the somatotrophs and GHRP suppresses somatostatin while independently stimulating GHS-R1a. The practical implication is that lower doses of each compound, stacked together, outperform high doses of either alone.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {stackGoals.map(({ goal, stack, protocol, icon: Icon }) => (
              <div key={goal} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <h3 className="font-bold">{goal}</h3>
                </div>
                <p className="text-brand-400 font-medium text-sm mb-1">{stack}</p>
                <p className="text-gray-400 text-sm">{protocol}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#111] border border-brand-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-400">Sample 12-Week Protocol: Fat Loss + Recomp</h3>
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <p><strong className="text-white">Stack:</strong> CJC-1295 No DAC 100 mcg + Ipamorelin 200 mcg per injection</p>
              <p><strong className="text-white">Timing:</strong> Injection #1: Morning, fasted (30–60 min before food). Injection #2: Pre-bed (2+ hours after last meal)</p>
              <p><strong className="text-white">Optional injection #3:</strong> Post-workout if training fasted, or midday on rest days</p>
              <p><strong className="text-white">Cycle length:</strong> 12 weeks on, 4 weeks off to preserve pituitary sensitivity</p>
              <p><strong className="text-white">IGF-1 monitoring:</strong> Baseline + 8-week bloodwork. Target: IGF-1 upper quartile of age-adjusted range</p>
              <p><strong className="text-white">Expected outcomes (with training + 500 kcal deficit):</strong> 8–14 lbs fat loss, 2–4 lbs lean mass gain, improved sleep quality by week 3</p>
            </div>
          </div>
        </section>

        {/* IGF-1 and downstream */}
        <section>
          <h2 className="text-3xl font-bold mb-4">IGF-1: The Downstream Mediator</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              The anabolic and lipolytic effects attributed to GH are largely mediated by insulin-like growth factor 1 (IGF-1), produced primarily in the liver in response to GH signalling. IGF-1 acts on muscle satellite cells to drive protein synthesis, on adipocytes to stimulate lipolysis, and on chondrocytes to support joint and connective tissue maintenance. In a healthy young adult, IGF-1 should fall in the upper-middle range for their age group; chronic low IGF-1 correlates strongly with accelerated body fat accumulation, reduced lean mass, impaired recovery, and poor sleep architecture.
            </p>
            <p>
              Monitoring serum IGF-1 is the most practical way to gauge whether your GH peptide protocol is working. Most secretagogue protocols targeting wellness raise IGF-1 by 30–60% from baseline within 8–12 weeks. Excessively high IGF-1 (top 5% of reference range or above) is associated with potential downsides including increased IGF-1-driven cell proliferation, which is why clinical oversight and bloodwork are standard practice in research contexts. Staying within the upper-normal range is the consensus target.
            </p>
          </div>
        </section>

        {/* Timing optimisation */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Timing Optimisation: Why Fasting and Sleep Matter</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              Insulin and GH exist in a reciprocal relationship. Elevated insulin — from a recent carbohydrate-containing meal — suppresses GH secretion directly at the pituitary and reduces GHRH receptor sensitivity. This is why virtually all clinical GH peptide protocols specify injecting in a fasted state, defined as at least 2 hours post-meal and ideally 3+ hours. For the pre-bed injection, the standard recommendation is no food containing significant carbohydrates for 2 hours beforehand. A small amount of protein (e.g., a casein shake or chicken) appears to have minimal blunting effect.
            </p>
            <p>
              Sleep amplifies GH secretion dramatically. The largest daily GH pulse in healthy adults coincides with sleep onset and peaks during slow-wave (stage 3) sleep. Administering a GHRH analogue or GHRP pre-bed amplifies this endogenous pulse rather than creating an artificial one in isolation. This is why even single-injection protocols almost universally target pre-sleep administration. Many users also report that GH peptides improve sleep depth and duration as a direct effect, likely through somatotroph-mediated increases in slow-wave sleep.
            </p>
          </div>
        </section>

        {/* Side effects */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Side Effects and Risk Profile</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Water Retention',
                severity: 'Common',
                description: 'GH increases tubular reabsorption of sodium and water. Mild puffiness, especially in extremities, is typical in the first 2–4 weeks. Usually resolves with dose reduction or stabilises on its own.',
              },
              {
                title: 'Carpal Tunnel Symptoms',
                severity: 'Moderate',
                description: 'Fluid accumulation in the carpal tunnel can cause hand numbness or tingling. More common at higher doses or with DAC-containing compounds. Dose reduction typically resolves it.',
              },
              {
                title: 'Cortisol / Prolactin',
                severity: 'GHRP-2, GHRP-6 only',
                description: 'Non-selective GHRPs raise cortisol and prolactin modestly. Clinically significant in chronic high-dose use only. Ipamorelin avoids this entirely.',
              },
              {
                title: 'Insulin Sensitivity',
                severity: 'Monitor',
                description: 'Chronically elevated GH can blunt insulin sensitivity. Periodic fasting glucose and HbA1c monitoring is recommended for cycles longer than 12 weeks.',
              },
              {
                title: 'Appetite Increase',
                severity: 'GHRP-6 only',
                description: 'Pronounced and consistent with GHRP-6. Can be exploited for lean bulking or avoided by choosing Ipamorelin or GHRP-2 instead.',
              },
              {
                title: 'Injection Site',
                severity: 'Minor',
                description: 'Subcutaneous injections into the abdomen cause mild transient redness or stinging in some users. Rotate sites and allow the peptide to warm to room temperature before injecting.',
              },
            ].map(se => (
              <div key={se.title} className="bg-[#111] border border-white/10 rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{se.title}</h3>
                  <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full">{se.severity}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{se.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section>
          <h2 className="text-3xl font-bold mb-6">GH Peptides Available from Phiogen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'CJC-1295 / Ipamorelin Blend', slug: 'cjc1295-ipamorelin', desc: 'Pre-formulated stack — 2 mg CJC-1295 No DAC + 2 mg Ipamorelin per vial.' },
              { name: 'Sermorelin 5mg', slug: 'sermorelin-5mg', desc: 'Classic GHRH analogue (1–29). Ideal for beginners and HRT replacement protocols.' },
              { name: 'Ipamorelin 5mg', slug: 'ipamorelin-5mg', desc: 'The cleanest GHRP — selective GH release, no cortisol or appetite spikes.' },
              { name: 'GHRP-2 5mg', slug: 'ghrp-2-5mg', desc: 'Maximum GH pulse amplitude. Best stacked with a GHRH analogue.' },
              { name: 'Tesamorelin 2mg', slug: 'tesamorelin-2mg', desc: 'FDA-approved GHRH analogue. Clinically proven visceral fat reduction.' },
              { name: 'CJC-1295 No DAC 5mg', slug: 'cjc1295-no-dac-5mg', desc: 'Pulsatile GHRH analogue. 30-minute half-life for perfect physiologic rhythm.' },
            ].map(p => (
              <a
                key={p.slug}
                href={`https://phiogen.vercel.app/products/${p.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111] border border-white/10 hover:border-brand-500/40 rounded-2xl p-5 transition-colors group"
              >
                <h3 className="font-semibold mb-2 group-hover:text-brand-400 transition-colors">{p.name}</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{p.desc}</p>
                <span className="text-brand-400 text-sm font-medium flex items-center gap-1">
                  View at Phiogen <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is the difference between GH peptides and actual HGH injections?',
                a: 'HGH injections deliver synthetic growth hormone directly, bypassing the pituitary entirely. GH peptides stimulate your own pituitary to produce and release GH, preserving the natural pulsatile rhythm and feedback loops. This makes peptides lower risk for receptor desensitisation, suppression of endogenous GH production, and acromegaly-like side effects associated with supraphysiologic HGH doses.',
              },
              {
                q: 'How long before I notice effects from GH peptides?',
                a: 'Improved sleep depth and quality is often the first reported effect, appearing within 1–3 weeks. Fat loss and body recomp changes become measurable at 8–12 weeks. IGF-1 bloodwork typically shows a meaningful rise by week 6–8. Results vary considerably based on diet, training, age, and baseline GH status.',
              },
              {
                q: 'Do I need to cycle GH peptides?',
                a: 'Most protocols recommend 12 weeks on, 4 weeks off to maintain pituitary sensitivity. Continuous use with GHRH analogues (especially DAC versions) can reduce pituitary responsiveness over time. GHRPs, particularly Hexarelin, desensitise faster. Ipamorelin appears to show the least receptor desensitisation in long-term animal studies.',
              },
              {
                q: 'Can I use GH peptides with other compounds like BPC-157 or TB-500?',
                a: 'Yes — GH peptides are commonly combined with healing peptides like BPC-157 and TB-500, particularly for injury recovery protocols where the connective tissue regeneration and angiogenesis from BPC-157 is augmented by the IGF-1-driven collagen synthesis from GH elevation. These compounds act through entirely different receptors and have no known negative interactions.',
              },
              {
                q: 'Is Tesamorelin better than CJC-1295 for fat loss?',
                a: 'Tesamorelin has Phase III randomised controlled trial data specifically for visceral fat reduction — a level of evidence no other secretagogue can match. However, CJC-1295 + Ipamorelin at 2–3 injections daily is likely to produce comparable or superior total GH output and therefore comparable fat loss with a much lower cost. Tesamorelin\'s advantage is its documented clinical evidence, once-daily convenience, and full-length GHRH structure.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-[#111] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-3 flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                  {q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-6">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-brand-500/10 to-transparent border border-brand-500/20 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your GH Protocol?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            All GH secretagogues above are available research-grade from Phiogen. Start with our most popular stack — CJC-1295 / Ipamorelin — or view individual compounds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/cjc1295-ipamorelin" className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl transition-colors">
              CJC-1295 / Ipamorelin Stack
            </Link>
            <Link href="/stacks" className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold transition-colors">
              All Protocol Stacks
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { FlaskConical, TrendingDown, Shield, AlertTriangle, ChevronRight, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Semaglutide Protocol: Complete Dosage Guide & Titration Schedule | MaxxingPeptides',
  description:
    'The complete semaglutide protocol guide — starting doses, titration schedule, injection timing, side effect management, and how to maximise fat loss results. Based on STEP clinical trial data.',
};

const titrationSchedule = [
  { week: 'Weeks 1–4', dose: '0.25 mg/week', notes: 'Induction dose. Not therapeutic for weight loss — acclimatises GI receptors. Expect mild nausea on injection days.' },
  { week: 'Weeks 5–8', dose: '0.5 mg/week', notes: 'First therapeutic dose. Appetite suppression begins meaningfully. Most users start seeing scale movement.' },
  { week: 'Weeks 9–12', dose: '1.0 mg/week', notes: 'Standard clinical dose. STEP-2 trial primary endpoint. Fat loss accelerates.' },
  { week: 'Weeks 13–16', dose: '1.5 mg/week', notes: 'Intermediate escalation (between clinical approved doses). Many researchers hold here.' },
  { week: 'Weeks 17–20', dose: '2.0 mg/week', notes: 'Upper clinical dose (STEP-1 trial used 2.4 mg). Stronger appetite suppression but higher side effect incidence.' },
  { week: 'Weeks 21–24', dose: '2.4 mg/week', notes: 'Maximum dose used in STEP-1 (68-week trial). 14.9% mean body weight loss at this endpoint.' },
];

const stepData = [
  { trial: 'STEP-1', n: '1961', population: 'Obesity (BMI ≥30)', dose: '2.4 mg/week', duration: '68 weeks', wtLoss: '14.9%', placebo: '2.4%', source: 'Wilding et al., NEJM 2021' },
  { trial: 'STEP-2', n: '1210', population: 'T2D + overweight', dose: '1.0–2.4 mg/week', duration: '68 weeks', wtLoss: '9.6%', placebo: '3.4%', source: 'Davies et al., Lancet 2021' },
  { trial: 'STEP-3', n: '611', population: 'Obesity + intensive behavioural', dose: '2.4 mg/week', duration: '68 weeks', wtLoss: '16.0%', placebo: '5.7%', source: 'Wadden et al., JAMA 2021' },
  { trial: 'STEP-4', n: '803', population: 'Continued vs discontinuation', dose: '2.4 mg/week', duration: '68 weeks', wtLoss: '+6.9% from STEP-1 base vs. regain', placebo: 'Regained 6.9%', source: 'Rubino et al., JAMA 2021' },
];

const sideEffects = [
  { se: 'Nausea', incidence: '44% vs 16% placebo', management: 'Eat smaller meals. Avoid fatty/fried foods on injection day. Time injection in the evening so peak nausea occurs during sleep. Resolves for most by weeks 8–12.', severity: 'Common' },
  { se: 'Vomiting', incidence: '24% vs 6% placebo', management: 'Same measures as nausea. Ensure adequate hydration. If vomiting persists after dose increase, hold current dose for an additional 4 weeks before escalating further.', severity: 'Moderate' },
  { se: 'Diarrhoea', incidence: '30% vs 16% placebo', management: 'Usually early and transient. BRAT diet during acute episodes. Loperamide PRN. Often coincides with dose increases.', severity: 'Common' },
  { se: 'Constipation', incidence: '24% vs 11% placebo', management: 'Increase dietary fibre and water. Gastric emptying slowing can cause constipation as a counterpoint to early diarrhoea. Osmotic laxative if persistent.', severity: 'Common' },
  { se: 'Injection site reactions', incidence: '~3%', management: 'Rotate sites. Allow medication to warm to room temperature. Use thin gauge needles (31G). Typical: mild erythema or warmth.', severity: 'Minor' },
  { se: 'Heart rate increase', incidence: '+~3 bpm mean', management: 'GLP-1 receptors in the sinoatrial node cause mild HR elevation. Clinically significant only in those with pre-existing arrhythmia. Monitor with wearable.', severity: 'Monitor' },
];

const foodTiming = [
  { timing: 'Injection day', advice: 'Inject in the evening. Eat earlier and lighter that day. Avoid high-fat meals within 4 hours of injection. Prioritise protein to maintain lean mass.' },
  { timing: 'Days 2–4 (nadir)', advice: 'Appetite suppression is strongest. Use this window for caloric deficit. High-protein, high-fibre meals to maximise satiety and lean mass protection.' },
  { timing: 'Days 5–7 (trough)', advice: 'Appetite returns slightly as semaglutide concentration decreases toward trough. Avoid "rebound eating." Consistent meal timing helps regulate hunger signals.' },
  { timing: 'Protein target', advice: '1.2–1.6 g/kg body weight minimum. Semaglutide-driven appetite suppression can cause inadequate protein intake and lean mass loss if not actively targeted.' },
];

export default function SemaglutideProtocolPage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
            <TrendingDown className="w-3.5 h-3.5" />
            GLP-1 Protocol Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Semaglutide Protocol:{' '}
            <span className="gradient-text">Complete Dosage & Titration Guide</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
            The most evidence-backed fat loss peptide available. This guide covers the complete semaglutide protocol — starting doses, weekly titration schedule, injection timing, side effect management, nutritional strategies, and the clinical trial data that informs every recommendation.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Semaglutide dosage', 'Semaglutide titration', 'How to inject semaglutide', 'Semaglutide side effects', 'STEP trial data', 'Semaglutide vs tirzepatide', 'GLP-1 weight loss protocol'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 sm:space-y-20">

        {/* What is semaglutide */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">What Is Semaglutide and How Does It Work?</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              Semaglutide is a synthetic analogue of glucagon-like peptide-1 (GLP-1), a 31-amino-acid incretin hormone secreted by L-cells in the small intestine in response to food intake. Native GLP-1 has a half-life of approximately 2 minutes due to rapid degradation by the enzyme DPP-4 (dipeptidyl peptidase-4). Semaglutide extends this to approximately 7 days through two structural modifications: a C-18 fatty diacid chain attached to lysine at position 26 (enabling albumin binding and slowing renal filtration) and substitution of alanine with 2-aminoisobutyric acid at position 8 (preventing DPP-4 cleavage).
            </p>
            <p>
              The GLP-1 receptor (GLP-1R) is expressed in multiple tissues relevant to appetite and metabolism. In pancreatic beta cells, GLP-1R activation increases glucose-dependent insulin secretion and suppresses glucagon. In the hypothalamus and brainstem (particularly the area postrema and nucleus tractus solitarius), GLP-1R activation reduces appetite and food reward signalling. In the stomach, GLP-1R activation slows gastric emptying, extending the duration of post-meal satiety signals. The combination of these effects — appetite suppression, reduced food reward, and prolonged satiety — produces the dramatic caloric restriction observed in STEP trial participants.
            </p>
            <p>
              Unlike many appetite-suppressant drugs (stimulants, serotonergic agents), semaglutide does not directly manipulate dopamine or serotonin pathways and does not carry addiction or abuse potential. Its mechanism is more analogous to amplifying a natural post-meal feedback signal than imposing an artificial appetite block. Many users describe this as a qualitative shift in their relationship with food — a reduction in food noise rather than simply willpower-based restriction.
            </p>
          </div>
        </section>

        {/* STEP trial data */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">STEP Trial Clinical Data</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            The STEP (Semaglutide Treatment Effect in People with Obesity) programme comprises four Phase III trials published in NEJM, Lancet, and JAMA between 2021–2022, providing the strongest clinical evidence base for any GLP-1 agonist in obesity management.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {['Trial', 'N', 'Population', 'Dose', 'Duration', 'Weight Loss', 'Placebo', 'Source'].map(h => (
                    <th key={h} className="text-left py-3 px-3 text-gray-400 font-medium whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stepData.map((row, i) => (
                  <tr key={row.trial} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="py-3 px-3 font-bold text-brand-400">{row.trial}</td>
                    <td className="py-3 px-3 text-gray-300">{row.n}</td>
                    <td className="py-3 px-3 text-gray-300 text-xs">{row.population}</td>
                    <td className="py-3 px-3 text-gray-300">{row.dose}</td>
                    <td className="py-3 px-3 text-gray-300">{row.duration}</td>
                    <td className="py-3 px-3 font-bold text-white">{row.wtLoss}</td>
                    <td className="py-3 px-3 text-gray-500">{row.placebo}</td>
                    <td className="py-3 px-3 text-gray-500 text-xs">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#111] border border-brand-500/20 rounded-xl p-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Key insight from STEP-4:</strong> Participants who discontinued semaglutide after achieving STEP-1 results regained an average of 6.9% body weight over the following 48 weeks — while those who continued maintained and further reduced weight. This demonstrates that semaglutide produces sustained weight loss only with continued treatment, and highlights the need for long-term maintenance strategies (dose reduction, lifestyle interventions, or alternative peptide protocols) rather than indefinite full-dose use.
            </p>
          </div>
        </section>

        {/* Titration schedule */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Semaglutide Titration Schedule</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Dose escalation is the single most important element of a successful semaglutide protocol. Going too fast dramatically increases GI side effects and dropout rates. The schedule below mirrors the FDA-approved Wegovy titration, which was designed to minimise nausea while reaching therapeutic doses in approximately 17–20 weeks.
          </p>
          <div className="space-y-3">
            {titrationSchedule.map((row, i) => (
              <div key={row.week} className={`flex gap-4 items-start border-l-2 pl-5 pb-5 ${i === titrationSchedule.length - 1 ? 'border-brand-400' : 'border-white/10'}`}>
                <div className="shrink-0 w-32">
                  <p className="font-bold text-sm">{row.week}</p>
                  <p className="text-brand-400 font-mono text-lg">{row.dose}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{row.notes}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <p className="text-yellow-200 text-sm leading-relaxed">
              <strong>Dose holding:</strong> If side effects are intolerable at any dose escalation, hold at the previous dose for an additional 4 weeks before re-attempting the increase. Never escalate during an acute GI episode. It is better to spend longer at a lower dose than to push through side effects and discontinue.
            </p>
          </div>
        </section>

        {/* Injection protocol */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Injection Protocol: When and Where</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-6">
            <p>
              Semaglutide is injected subcutaneously once weekly. Preferred sites are the abdomen (2–4 inches from the navel), outer thigh, and upper arm. Because semaglutide has a 7-day half-life, the timing of the weekly injection matters less than consistency — choose a day of the week and stick to it. If you miss a dose by up to 5 days, inject as soon as you remember. If more than 5 days have passed, skip that week&apos;s dose and resume on your regular schedule.
            </p>
            <p>
              For research-grade semaglutide (lyophilised powder in vials), reconstitution with bacteriostatic water is required before use. A standard reconstitution: add 2.5 mL bacteriostatic water to a 5 mg semaglutide vial → 2,000 mcg/mL (2 mg/mL) concentration. A 0.25 mg (250 mcg) dose then equals 0.125 mL (12.5 units on an insulin syringe). See our complete reconstitution guide for step-by-step instructions.
            </p>
          </div>
          <div className="bg-[#111] border border-white/10 rounded-xl p-6">
            <h3 className="font-bold text-brand-400 mb-4">Dose Calculation Reference (5 mg vial + 2.5 mL BW)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    {['Dose', 'Volume', 'Syringe Units'].map(h => (
                      <th key={h} className="text-left py-2 px-3 text-gray-400">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0.25 mg (250 mcg)', '0.125 mL', '12.5 units'],
                    ['0.5 mg (500 mcg)', '0.25 mL', '25 units'],
                    ['1.0 mg (1,000 mcg)', '0.5 mL', '50 units'],
                    ['1.5 mg (1,500 mcg)', '0.75 mL', '75 units'],
                    ['2.0 mg (2,000 mcg)', '1.0 mL', '100 units'],
                    ['2.4 mg (2,400 mcg)', '1.2 mL', '120 units (use 2× 0.5 mL syringes)'],
                  ].map(([dose, vol, units]) => (
                    <tr key={dose} className="border-b border-white/5">
                      <td className="py-2 px-3 text-white font-medium">{dose}</td>
                      <td className="py-2 px-3 text-gray-300">{vol}</td>
                      <td className="py-2 px-3 text-brand-400 font-mono">{units}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Nutrition timing */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Nutrition Strategy on Semaglutide</h2>
          <div className="space-y-3 mb-8">
            {foodTiming.map(f => (
              <div key={f.timing} className="flex gap-4 bg-[#111] border border-white/10 rounded-xl p-5">
                <div className="shrink-0 w-32 text-brand-400 font-semibold text-sm">{f.timing}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{f.advice}</p>
              </div>
            ))}
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              The most underappreciated risk on semaglutide is lean mass loss. STEP-1 trial participants lost an average 14.9% body weight — but DEXA imaging showed that approximately 38% of the lost weight was lean mass rather than fat. This is in line with other very low calorie interventions and reflects the non-discriminating nature of a large caloric deficit. Resistance training and high protein intake are the primary evidence-based countermeasures.
            </p>
            <p>
              A growing number of researchers combine semaglutide with CJC-1295/Ipamorelin (GH secretagogues) specifically to preserve lean mass during aggressive GLP-1-driven weight loss. Elevated IGF-1 from GH peptides creates an anabolic environment that can offset the catabolic effect of a large caloric deficit. This combination — GLP-1 agonist for fat loss + GH secretagogue for lean mass preservation — represents one of the most sophisticated current approaches to body recomposition in the research community.
            </p>
          </div>
        </section>

        {/* Side effects */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Side Effects and Management</h2>
          <div className="space-y-4">
            {sideEffects.map(se => (
              <div key={se.se} className="bg-[#111] border border-white/10 rounded-xl p-5 flex gap-4">
                <div className="shrink-0 w-36">
                  <p className="font-bold">{se.se}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                    se.severity === 'Common' ? 'bg-yellow-500/10 text-yellow-400' :
                    se.severity === 'Moderate' ? 'bg-orange-500/10 text-orange-400' :
                    se.severity === 'Monitor' ? 'bg-blue-500/10 text-blue-400' :
                    'bg-green-500/10 text-green-400'
                  }`}>{se.severity}</span>
                  <p className="text-gray-500 text-xs mt-1">{se.incidence}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{se.management}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sema vs tirze */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Semaglutide vs Tirzepatide: Which Is Better?</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-6">
            <p>
              Tirzepatide (Mounjaro/Zepbound) is a dual GIP/GLP-1 receptor agonist — it activates both the glucose-dependent insulinotropic peptide receptor (GIPR) and GLP-1R simultaneously. Phase III SURMOUNT-1 trial results showed 22.5% mean weight loss at 72 weeks at the 15 mg/week dose, compared to semaglutide&apos;s 14.9% at 68 weeks. The SURMOUNT-5 trial directly comparing the two showed tirzepatide superior to semaglutide for weight loss at equivalent timepoints.
            </p>
            <p>
              However, the drugs are not identical in their clinical applications. Semaglutide has more robust cardiovascular outcome data (SUSTAIN-6, SELECT trial: 20% reduction in major adverse cardiovascular events). Tirzepatide&apos;s long-term cardiovascular data is still accumulating. Semaglutide also has a longer track record in clinical practice (approved 2017 vs. 2022). Both require similar titration strategies and have overlapping GI side effect profiles.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400">Feature</th>
                  <th className="text-left py-3 px-4 text-brand-400">Semaglutide</th>
                  <th className="text-left py-3 px-4 text-gray-400">Tirzepatide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mechanism', 'GLP-1R agonist', 'Dual GIP/GLP-1R agonist'],
                  ['Max weight loss (Phase III)', '14.9% (STEP-1)', '22.5% (SURMOUNT-1)'],
                  ['CV outcome data', 'SELECT trial (20% MACE reduction)', 'SURPASS-CVOT ongoing'],
                  ['Max approved dose', '2.4 mg/week (Wegovy)', '15 mg/week (Zepbound)'],
                  ['Dosing frequency', 'Once weekly SC', 'Once weekly SC'],
                  ['Nausea profile', 'Moderate', 'Similar to semaglutide'],
                  ['FDA approval (obesity)', '2021 (Wegovy)', '2023 (Zepbound)'],
                ].map(([feature, sema, tirze], i) => (
                  <tr key={feature} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="py-3 px-4 font-medium text-white">{feature}</td>
                    <td className="py-3 px-4 text-gray-300">{sema}</td>
                    <td className="py-3 px-4 text-gray-300">{tirze}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Semaglutide Protocol FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How long does it take for semaglutide to start working?',
                a: 'The 0.25 mg induction dose is not pharmacologically designed to produce weight loss — it is a GI tolerability dose. Most people notice meaningful appetite suppression beginning at 0.5–1.0 mg/week (weeks 5–12). Visible scale changes typically begin by weeks 4–8, accelerating as the dose increases. Maximum weight loss velocity is usually seen at the 1.5–2.4 mg doses.',
              },
              {
                q: 'Can I inject semaglutide twice a week to reduce side effects?',
                a: 'Splitting the weekly dose into two injections is sometimes used to reduce peak-concentration side effects. The pharmacokinetics of semaglutide support this — a split dose creates a lower but more sustained plasma concentration, potentially reducing the nausea spike that peaks 24–48 hours post-injection. This is an off-label modification without clinical trial data but is used by some research protocols.',
              },
              {
                q: 'What happens when you stop semaglutide?',
                a: 'STEP-4 demonstrated that participants who discontinued semaglutide after 20 weeks regained approximately two-thirds of their lost weight within 1 year. This happens because semaglutide treats the symptoms of obesity (reduced appetite/food reward) rather than the underlying cause. When the drug is removed, appetite regulation returns to its pre-treatment state. Long-term maintenance requires either continued treatment, aggressive lifestyle restructuring, or a maintenance dose (0.5–1.0 mg/week) — research on the minimum effective maintenance dose is ongoing.',
              },
              {
                q: 'What is the difference between research-grade and pharmaceutical semaglutide?',
                a: 'Pharmaceutical semaglutide (Wegovy, Ozempic) is a pre-filled, precisely dosed, FDA-approved formulation in a regulated delivery device. Research-grade semaglutide is lyophilised peptide that requires reconstitution by the user, introduces manual dosing calculations, and lacks the regulatory oversight of pharmaceutical manufacturing. Both should be chemically identical (same peptide sequence) when sourced from a reputable vendor with a certificate of analysis.',
              },
              {
                q: 'Can semaglutide be combined with other peptides?',
                a: 'Yes. Common combinations include semaglutide + CJC-1295/Ipamorelin (GLP-1 for fat loss + GH secretagogue for lean mass preservation), and semaglutide + BPC-157 (some users report GI side effects reduced by BPC-157\'s gut-protective effects, though this is anecdotal). Semaglutide + tirzepatide is not recommended — stacking two GLP-1 agonists doubles nausea risk without proportionate benefit.',
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

        {/* Products */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">GLP-1 Peptides from Phiogen</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Semaglutide 5mg', slug: 'glp-1s-5mg', desc: 'Research-grade semaglutide. STEP trial compound. Third-party tested ≥98% purity.' },
              { name: 'Tirzepatide 15mg', slug: 'glp-2t-15mg', desc: 'Dual GIP/GLP-1 agonist. SURMOUNT-1 data. Superior weight loss vs semaglutide.' },
              { name: 'CJC-1295 / Ipamorelin', slug: 'cjc1295-ipamorelin', desc: 'Stack with semaglutide for lean mass preservation during aggressive fat loss.' },
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

        {/* CTA */}
        <section className="bg-gradient-to-br from-brand-500/10 to-transparent border border-brand-500/20 rounded-3xl p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start Your Fat Loss Protocol</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Read the complete GLP-1 comparison guide or explore our curated fat loss stacks for optimal protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fat-loss" className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl transition-colors">
              Fat Loss Hub
            </Link>
            <Link href="/peptides-for-weight-loss" className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold transition-colors">
              GLP-1 Deep Dive Guide
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

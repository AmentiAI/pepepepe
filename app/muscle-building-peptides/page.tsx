import type { Metadata } from 'next';
import Link from 'next/link';
import { FlaskConical, Zap, TrendingUp, Shield, ChevronRight, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peptides for Muscle Growth: Anabolic Peptides Guide | PeptideProtocols',
  description:
    'Complete guide to anabolic peptides for muscle building — GH secretagogues, BPC-157 for injury prevention, TB-500 for recovery, and advanced protocol stacks. Understand the mechanisms behind peptide-driven hypertrophy.',
};

const anabolicMechanisms = [
  {
    icon: Zap,
    name: 'GH / IGF-1 Axis',
    peptides: 'CJC-1295, Ipamorelin, GHRP-2, Sermorelin',
    detail: 'GH secretagogues stimulate pulsatile GH release → liver IGF-1 production → muscle satellite cell activation, protein synthesis, myofibrillar hypertrophy, and anti-catabolic nitrogen retention.',
  },
  {
    icon: TrendingUp,
    name: 'Tissue Repair & Connective Tissue',
    peptides: 'BPC-157, TB-500',
    detail: 'Accelerate tendon, ligament, and muscle fibre repair post-training. Allow higher training frequency by reducing downtime from micro-injuries — the overlooked driver of long-term hypertrophy.',
  },
  {
    icon: Shield,
    name: 'Anti-Catabolic Protection',
    peptides: 'TB-500, BPC-157, GHK-Cu',
    detail: 'Reduce cortisol-driven protein catabolism. BPC-157 protects muscle tissue from ischemia-reperfusion damage after intense training. GHK-Cu supports collagen framework integrity.',
  },
  {
    icon: FlaskConical,
    name: 'Follistatin / Myostatin Pathways',
    peptides: 'ACE-031 (research only), Follistatin 344',
    detail: 'Myostatin is the primary negative regulator of muscle mass. Compounds that suppress myostatin signalling (follistatin, ACE-031) allow substantially greater hypertrophy — highly studied in muscular dystrophy models.',
  },
];

const peptideData = [
  {
    name: 'CJC-1295 / Ipamorelin',
    type: 'GHRH + GHRP Stack',
    anabolicMech: 'Pulsatile GH → IGF-1 → protein synthesis, satellite cell activation',
    protocol: '100 mcg CJC + 200 mcg Ipamorelin, 2–3× daily. Best: AM fasted + pre-bed',
    trainingBenefit: 'Muscle recomp, fat loss concurrent with lean mass preservation',
    cycle: '12 weeks on, 4 off',
    link: '/products/cjc1295-ipamorelin',
  },
  {
    name: 'BPC-157 10mg',
    type: 'Healing Peptide',
    anabolicMech: 'VEGF ↑, angiogenesis, tendon/muscle fibre repair via growth factor cascade',
    protocol: '250–500 mcg SC daily, near injury site or systemic abdominal injection',
    trainingBenefit: 'Faster recovery from DOMS, tendon repair, allows higher frequency training',
    cycle: '4–8 weeks continuous; cycle off 2–4 weeks',
    link: '/products/bpc157-10mg',
  },
  {
    name: 'TB-500 (Thymosin β4)',
    type: 'Regenerative Peptide',
    anabolicMech: 'Actin sequestration → cell migration; stem cell mobilisation; satellite cell homing to damaged muscle',
    protocol: '2–2.5 mg 2× weekly (loading phase, weeks 1–4), then 1.25–2 mg/week maintenance',
    trainingBenefit: 'Repair of muscle tears, reduces scar tissue formation, systemic regeneration',
    cycle: '4–6 weeks loading, 8 weeks maintenance; or 12-week full cycle',
    link: '/products/tb500-10mg',
  },
  {
    name: 'GHRP-2 5mg',
    type: 'GHRP — Max GH Output',
    anabolicMech: 'Largest acute GH pulses of any GHRP → amplified IGF-1 → nitrogen retention',
    protocol: '100–200 mcg 2–3× daily, stacked with GHRH analogue',
    trainingBenefit: 'Maximum GH pulse amplitude — best for aggressive recomp or muscle-building phase',
    cycle: '12 weeks on, 4 off',
    link: '/products/ghrp-2-5mg',
  },
  {
    name: 'Sermorelin 5mg',
    type: 'GHRH Analogue — Beginner Friendly',
    anabolicMech: 'Native GHRH 1–29 fragment; pituitary somatotroph stimulation',
    protocol: '200–300 mcg SC pre-bed (single injection protocol) or 2× daily',
    trainingBenefit: 'Improved sleep, recovery, body recomp — best entry-level GH peptide',
    cycle: '12–16 weeks; lower desensitisation risk than GHRPs',
    link: '/products/sermorelin-5mg',
  },
];

const programmeDesign = [
  {
    week: 'Weeks 1–4: Foundation',
    compounds: 'CJC-1295 No DAC 100 mcg + Ipamorelin 200 mcg (2× daily) + BPC-157 250 mcg (1× daily)',
    rationale: 'Establish GH pulse rhythm and repair accumulated training micro-injuries heading into high-volume training phase.',
    training: 'Hypertrophy block: 4–5 days/week, 10–20 rep ranges, progressive overload',
  },
  {
    week: 'Weeks 5–8: Intensity Phase',
    compounds: 'Add TB-500 2 mg 2×/week. Maintain CJC-1295 / Ipamorelin 3× daily.',
    rationale: 'TB-500 for systemic regenerative support as training intensity increases. Third injection pre-workout maximises GH during peak anabolic window.',
    training: 'Strength block: 4 days/week, 4–8 rep ranges, submaximal loading',
  },
  {
    week: 'Weeks 9–12: Peak & Recomp',
    compounds: 'CJC-1295 DAC 2 mg / week (single shot). Ipamorelin 200 mcg 2× daily. BPC-157 250 mcg 5 days/week.',
    rationale: 'Switch to CJC-1295 DAC for sustained GH elevation. Simplified injection schedule for final block. BPC-157 for connective tissue protection during peak loads.',
    training: 'Peak week tapering or return to hypertrophy for continued recomp',
  },
];

export default function MuscleBuildingPeptidesPage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Performance & Anabolic Peptides
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Peptides for Muscle Growth:{' '}
            <span className="gradient-text">The Anabolic Peptide Guide</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
            Research peptides support muscle hypertrophy through multiple mechanisms — GH/IGF-1 axis stimulation, accelerated tissue repair, connective tissue strengthening, and anti-catabolic signalling. This guide covers the mechanisms, protocols, and how to structure a complete anabolic peptide stack.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Peptides for muscle growth', 'Anabolic peptides', 'IGF-1 peptides', 'CJC-1295 muscle building', 'BPC-157 recovery', 'GH secretagogue stack', 'Peptides vs steroids'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* How peptides build muscle */}
        <section>
          <h2 className="text-3xl font-bold mb-6">How Research Peptides Support Muscle Growth</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-8">
            <p>
              Muscle hypertrophy — the increase in muscle fibre cross-sectional area — is driven by the net balance between protein synthesis and protein breakdown. Any intervention that shifts this balance toward synthesis, or that reduces the downtime caused by injury, accelerates progress. Research peptides address both sides of this equation through mechanisms distinct from anabolic steroids.
            </p>
            <p>
              Anabolic-androgenic steroids (AAS) work primarily by binding androgen receptors in muscle cells, directly upregulating protein synthesis and suppressing glucocorticoid-driven catabolism. This is powerful but comes with systemic androgenic effects: endocrine disruption, suppression of natural testosterone production, erythrocytosis, and cardiovascular strain. Research peptides operate through entirely different receptor systems — the GH/IGF-1 axis, trophic growth factor pathways, and angiogenic cascades — making their mechanism of action fundamentally different and their side effect profile distinct.
            </p>
            <p>
              This does not make peptides a free lunch. The anabolic effects of peptides are meaningful but more moderate than AAS. The primary advantage of the peptide approach is multi-mechanism support — simultaneously optimising GH output, accelerating repair, and protecting connective tissue — without the hormonal suppression and virilisation associated with androgen-based protocols.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {anabolicMechanisms.map(({ icon: Icon, name, peptides, detail }) => (
              <div key={name} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-brand-400 text-sm">{peptides}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GH/IGF-1 deep dive */}
        <section>
          <h2 className="text-3xl font-bold mb-4">The GH / IGF-1 Axis: Deep Dive</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              When GH secretagogues stimulate a GH pulse, GH circulates to target tissues — liver, muscle, adipose, bone — where it binds the GH receptor (GHR) and triggers JAK-STAT signalling (primarily STAT5b). In the liver, this drives IGF-1 gene transcription and secretion into the bloodstream. Serum IGF-1 then acts on muscle cells via the IGF-1 receptor (IGF-1R), activating the PI3K/Akt/mTORC1 pathway — the same pathway that responds to dietary protein and resistance training.
            </p>
            <p>
              mTORC1 activation is the central anabolic hub. It phosphorylates 4E-BP1 (releasing eIF4E for cap-dependent translation initiation) and S6K1 (stimulating ribosomal biogenesis and elongation). The net result is increased protein synthesis, increased ribosome number (ribosomal biogenesis), and decreased protein degradation through autophagy suppression. GH itself also independently stimulates muscle satellite cell proliferation — the stem cells of skeletal muscle — through IGF-1-independent pathways involving STAT5.
            </p>
            <p>
              IGF-1 also suppresses myostatin signalling. Myostatin (GDF-8) is the primary negative regulator of muscle mass — animals with myostatin knockouts develop extraordinarily large muscles. IGF-1 promotes Akt-mediated phosphorylation of Smad3, which is a critical downstream mediator of myostatin signalling. By reducing Smad3 activity, IGF-1 partially lifts the myostatin brake on muscle growth. This is one reason why optimising the GH/IGF-1 axis can have disproportionate effects on muscle mass beyond what the direct anabolic effect predicts.
            </p>
            <p>
              In practical terms: a 12-week CJC-1295/Ipamorelin protocol at 2–3 injections daily typically raises serum IGF-1 by 30–60% from baseline. This is physiologically significant — it corresponds to moving from a low-normal IGF-1 (150 ng/mL) to an upper-normal IGF-1 (240 ng/mL), a range associated with meaningfully better lean mass retention, particularly as GH declines with age (somatopause begins in the mid-20s, with GH output declining ~15% per decade).
            </p>
          </div>
        </section>

        {/* BPC-157 and training */}
        <section>
          <h2 className="text-3xl font-bold mb-4">BPC-157 and TB-500: The Recovery Multiplier</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              The limiting factor in natural muscle building is not usually anabolic potential — it is recovery capacity. Most serious trainees can generate more training stimulus than their connective tissue and nervous system can recover from. BPC-157 and TB-500 address this bottleneck directly.
            </p>
            <p>
              BPC-157 (Body Protection Compound 157) is a 15-amino-acid peptide derived from a human gastric protein (BPC). It demonstrates remarkable versatility in animal models: accelerated healing of Achilles tendon transections, rotator cuff tears, quadriceps muscle crush injuries, and bone fractures — in each case producing faster and more complete healing than controls. The mechanisms include VEGF upregulation (driving new capillary formation to deliver nutrients and oxygen to healing tissue), upregulation of the EGR-1 transcription factor that drives collagen and elastin gene expression, and activation of the FAK-paxillin pathway that coordinates cell migration into injury sites.
            </p>
            <p>
              For training athletes, the implication is significant: training at intensities that cause micro-tears in tendon and muscle becomes less limiting when BPC-157 is accelerating repair between sessions. Users consistently report faster resolution of chronic tendon pain (golfer&apos;s elbow, patellar tendinitis, rotator cuff impingement), which allows return to heavy loading without the protective guarding and technique compensation that contribute to injury cycles.
            </p>
            <p>
              TB-500 (Thymosin Beta-4) complements BPC-157 with a different but synergistic mechanism. Where BPC-157 is primarily angiogenic and growth-factor-driven, TB-500 exerts its effects through actin dynamics. It sequesters G-actin (monomeric actin), regulating the actin polymerisation/depolymerisation cycle that underlies cell motility and migration. This mobilises stem cells (including satellite cells) and facilitates their migration to injury sites. TB-500 also suppresses inflammation-promoting MMP-1/9 activity and reduces scar tissue formation — an important consideration for repeated muscle strains where fibrotic scarring can permanently reduce mechanical properties of the tissue.
            </p>
          </div>
        </section>

        {/* Peptide profiles table */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Muscle-Building Peptide Profiles</h2>
          <div className="space-y-5">
            {peptideData.map(p => (
              <div key={p.name} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-400">{p.name}</h3>
                    <span className="text-xs text-gray-500">{p.type}</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">{p.cycle}</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Anabolic Mechanism</p>
                    <p className="text-gray-300 leading-relaxed">{p.anabolicMech}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Protocol</p>
                    <p className="text-gray-300 leading-relaxed">{p.protocol}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Training Benefit</p>
                    <p className="text-brand-400 leading-relaxed">{p.trainingBenefit}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Link href={p.link} className="text-brand-400 text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Full product page <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 12-week programme */}
        <section>
          <h2 className="text-3xl font-bold mb-4">12-Week Muscle Building Peptide Programme</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            This programme periodises both training and peptide protocols to maximise anabolic stimulus, recovery capacity, and hormonal optimisation across three distinct phases.
          </p>
          <div className="space-y-4">
            {programmeDesign.map(phase => (
              <div key={phase.week} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-brand-400 text-lg mb-3">{phase.week}</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Compounds</p>
                    <p className="text-white leading-relaxed">{phase.compounds}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Rationale</p>
                    <p className="text-gray-400 leading-relaxed">{phase.rationale}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Training</p>
                    <p className="text-gray-400 leading-relaxed">{phase.training}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nutrition */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Nutrition: Maximising Peptide Anabolic Signalling</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-6">
            <p>
              Peptides amplify anabolic signalling, but dietary protein provides the amino acids that protein synthesis actually requires. The mTORC1 pathway activated by IGF-1 and resistance exercise is also amino-acid sensitive — leucine specifically acts as a nutrient signal to mTORC1 via CASTOR1 and Sestrin 2 pathways. Protein intake of 1.6–2.2 g/kg body weight is supported by meta-analyses as the range maximising lean mass accretion in resistance-trained individuals.
            </p>
            <p>
              Insulin timing matters uniquely in the context of GH peptides. Insulin and GH have a reciprocal relationship — elevated insulin suppresses GH secretion from the pituitary. For this reason, GH peptide injections should be administered in a fasted state (2–3 hours post-meal minimum) to allow maximal GH pulse amplitude. The post-workout anabolic window, however, benefits from carbohydrate + protein to maximise insulin-driven glucose and amino acid uptake by muscle. A practical protocol: inject peptides 30–60 minutes before a fasted workout, train, then consume post-workout nutrition.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { factor: 'Protein Intake', target: '1.8–2.2 g/kg BW/day', note: 'Leucine-rich sources (whey, egg, beef) for mTORC1 activation' },
              { factor: 'Caloric Surplus', target: '200–400 kcal above TDEE', note: 'Lean bulk range. Larger surplus during peptide cycles tends toward fat gain, not additional muscle.' },
              { factor: 'Meal Timing for Injections', target: '2–3 hr fasted before injection', note: 'Avoid carbs especially. Small protein meal has minimal GH-blunting effect.' },
            ].map(n => (
              <div key={n.factor} className="bg-[#111] border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold mb-1">{n.factor}</h3>
                <p className="text-brand-400 font-medium text-sm mb-2">{n.target}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{n.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do peptides compare to anabolic steroids for muscle building?',
                a: 'Anabolic steroids directly bind androgen receptors and produce more potent and faster hypertrophy — typical AAS cycles can add 10–20 lbs of lean mass. GH secretagogue peptides produce more modest gains (2–5 lbs lean mass over 12 weeks) but with a fundamentally different side effect profile: no endocrine suppression, no virilisation, no haematocrit elevation, no liver strain. The primary use case for anabolic peptides is as a clean, sustainable performance and recovery tool — not a direct AAS substitute.',
              },
              {
                q: 'Can peptides help with muscle building after injury?',
                a: 'Yes — this is arguably the strongest use case. BPC-157 and TB-500 have extensive evidence for accelerating tissue repair, and their effects on tendon, ligament, and muscle healing allow earlier return to resistance training. GH secretagogues during injury recovery also help prevent the accelerated muscle loss (disuse atrophy) that occurs during enforced detraining. The combination of BPC-157 + CJC-1295/Ipamorelin during injury rehabilitation is a commonly used protocol in sports medicine research contexts.',
              },
              {
                q: 'Do I need to train hard for peptides to work?',
                a: 'GH secretagogues raise IGF-1 regardless of training, but the downstream muscle anabolic effect requires the mechanotransduction signal from resistance training to direct where new protein is synthesised. In sedentary individuals, elevated GH/IGF-1 tends to redistribute toward fat reduction rather than muscle accretion. For meaningful muscle gain, structured progressive resistance training is required — peptides are amplifiers, not replacements, for the training stimulus.',
              },
              {
                q: 'What is the fastest working peptide for muscle building?',
                a: 'GHRP-2 produces the largest acute GH pulses and therefore the fastest IGF-1 elevation — typically measurable within 2–4 weeks of consistent use. Stacked with CJC-1295 No DAC (for the GHRH synergy), this combination produces the most aggressive GH output achievable with research peptides. However, &quot;fastest&quot; in terms of visible muscle changes still requires 8–12 weeks minimum because hypertrophy is a slow biological process.',
              },
              {
                q: 'Is peptide-driven muscle gain permanent?',
                a: 'Muscle gained through training while on a peptide protocol is as permanent as muscle gained without peptides — it persists as long as the training stimulus is maintained. GH/IGF-1 from peptides does not cause supra-physiologic hypertrophy that reverses on cessation (unlike AAS, where significant &quot;off-cycle&quot; mass loss is common due to water retention loss and hormonal rebound). Connective tissue improvements from BPC-157 and TB-500 also tend to be durable.',
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
          <h2 className="text-3xl font-bold mb-4">Build Your Muscle Peptide Stack</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Start with the CJC-1295 / Ipamorelin blend and BPC-157 — the most researched and widely used combination for natural athletes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/cjc1295-ipamorelin" className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl transition-colors">
              CJC-1295 / Ipamorelin
            </Link>
            <Link href="/performance" className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold transition-colors">
              Performance Hub
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

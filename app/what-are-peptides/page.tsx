import type { Metadata } from 'next';
import Link from 'next/link';
import { FlaskConical, Zap, Shield, TrendingUp, Brain, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What Are Peptides? The Complete Beginner\'s Guide to Research Peptides | MaxxingPeptides',
  description:
    'Learn what peptides are, how they work in the body, the difference between research peptides and drugs, and which peptides are used for healing, fat loss, anti-aging, and cognitive enhancement.',
};

const categories = [
  {
    icon: Shield,
    title: 'Healing & Recovery',
    examples: ['BPC-157', 'TB-500', 'KPV'],
    href: '/healing',
    desc: 'Accelerate tissue repair, reduce inflammation, and recover from injury faster.',
  },
  {
    icon: TrendingUp,
    title: 'Fat Loss',
    examples: ['Semaglutide', 'Tirzepatide', 'AOD9604'],
    href: '/fat-loss',
    desc: 'GLP-1 receptor agonists and lipolysis peptides for metabolic optimisation.',
  },
  {
    icon: Zap,
    title: 'Performance & GH',
    examples: ['CJC-1295', 'Ipamorelin', 'GHRP-2'],
    href: '/performance',
    desc: 'GH secretagogues for muscle, body recomp, and athletic recovery.',
  },
  {
    icon: Brain,
    title: 'Cognitive',
    examples: ['Semax', 'Selank', 'Dihexa'],
    href: '/cognitive',
    desc: 'Neuropeptides that increase BDNF, reduce anxiety, and improve focus.',
  },
  {
    icon: FlaskConical,
    title: 'Anti-Aging',
    examples: ['Epithalon', 'FOXO4-DRI', 'MOTS-c'],
    href: '/anti-aging',
    desc: 'Longevity peptides targeting telomere length, senescent cells, and mitochondria.',
  },
];

const pepVsDrug = [
  { feature: 'Molecular size', peptides: 'Small (2–50 amino acids)', drugs: 'Varies widely (often larger small molecules)' },
  { feature: 'Mechanism', peptides: 'Mimics endogenous signalling molecules', drugs: 'Enzyme inhibition, receptor block/activation' },
  { feature: 'Metabolism', peptides: 'Enzymatic (peptidases)', drugs: 'Hepatic (CYP450 primarily)' },
  { feature: 'Receptor selectivity', peptides: 'High — designed to mimic native peptides', drugs: 'Variable' },
  { feature: 'Half-life', peptides: 'Minutes to days (structure-dependent)', drugs: 'Hours to days' },
  { feature: 'Immunogenicity', peptides: 'Low for short chains', drugs: 'Varies' },
  { feature: 'FDA status (research peptides)', peptides: 'Not approved for human use', drugs: 'Typically approved' },
];

export default function WhatArePeptidesPage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
            <FlaskConical className="w-3.5 h-3.5" />
            Beginner&apos;s Guide — Start Here
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            What Are Peptides?{' '}
            <span className="gradient-text">The Complete Research Guide</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
            Peptides are short chains of amino acids that act as biological messengers throughout the body. Research peptides replicate these natural signals to influence healing, hormone release, fat metabolism, and brain function. This guide explains the science — no jargon, no hype.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Peptide basics', 'How peptides work', 'Types of research peptides', 'Peptide vs drug', 'How to use peptides', 'Beginner FAQ'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 sm:space-y-20">

        {/* What is a peptide */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">What Exactly Is a Peptide?</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              A peptide is a molecule made of two or more amino acids joined together by peptide bonds — the same type of bond that links amino acids into proteins. The distinction between a peptide and a protein is simply size: by convention, chains of fewer than 50 amino acids are called peptides; longer chains are proteins. In practice the line blurs, and some biologically important peptides are 40+ amino acids long.
            </p>
            <p>
              Your body produces thousands of peptides naturally. Insulin (51 amino acids) regulates blood glucose. Glucagon-like peptide-1 (GLP-1, 31 amino acids) suppresses appetite after eating. Oxytocin (9 amino acids) drives social bonding. Growth hormone-releasing hormone (GHRH, 44 amino acids) tells your pituitary to make GH. BPC-157 — the &apos;Body Protection Compound&apos; — is a 15-amino-acid sequence isolated from gastric juice proteins, where it exists as part of the stomach&apos;s cytoprotective system.
            </p>
            <p>
              Research peptides are synthetic versions of these naturally occurring sequences — or novel sequences designed to mimic, amplify, or selectively activate the same receptors. Because they are based on amino acids (the same building blocks as food protein), they are metabolised by peptidases and proteases rather than the liver&apos;s cytochrome P450 system, making their interaction profile with other compounds generally more predictable than traditional small-molecule drugs.
            </p>
            <p>
              The term &quot;research peptides&quot; or &quot;research chemicals&quot; refers specifically to synthetic peptides sold for laboratory research purposes, not for human consumption. In the United States and most countries, these are not FDA-approved therapeutic agents. They are studied in preclinical models (cell cultures, rodent studies) and in some cases clinical trials, but they are not authorised medicines. This guide is for educational and research reference only.
            </p>
          </div>
        </section>

        {/* How peptides work */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">How Do Peptides Work in the Body?</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-8">
            <p>
              Peptides work as signalling molecules. They bind to specific cell surface receptors — G protein-coupled receptors (GPCRs), receptor tyrosine kinases, or nuclear receptors — and trigger intracellular signalling cascades that change gene expression, protein synthesis, or cellular behaviour.
            </p>
            <p>
              The key concept is receptor specificity. Each peptide has a three-dimensional shape that fits its target receptor the way a key fits a lock. A peptide that binds GHS-R1a (the ghrelin receptor) triggers GH release from pituitary somatotrophs. The same peptide has no direct effect on adipocytes, liver cells, or neurons that don&apos;t express that receptor. This specificity is why peptides can have targeted effects with relatively limited off-target interactions compared to small-molecule drugs that may interact with dozens of different enzymes and transporters.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                mechanism: 'Receptor Agonism',
                example: 'Ipamorelin binds GHS-R1a → GH release',
                desc: 'The peptide mimics the endogenous ligand and activates the receptor, producing the same (or amplified) downstream signal.',
              },
              {
                mechanism: 'Growth Factor Upregulation',
                example: 'BPC-157 upregulates VEGF → angiogenesis',
                desc: 'Some peptides stimulate production of growth factors like VEGF, EGF, or IGF-1 that drive tissue repair and regeneration.',
              },
              {
                mechanism: 'Gene Expression Modulation',
                example: 'GHK-Cu increases collagen gene transcription',
                desc: 'Copper-binding peptides and others enter cells and directly influence transcription factor activity, altering which genes are expressed.',
              },
              {
                mechanism: 'Anti-Inflammatory Signalling',
                example: 'KPV inhibits NF-κB pathway',
                desc: 'Tripeptides like KPV modulate nuclear factor kappa-B, the master regulator of inflammatory gene transcription.',
              },
              {
                mechanism: 'Apoptosis Induction',
                example: 'FOXO4-DRI selectively kills senescent cells',
                desc: 'Senolytic peptides disrupt survival signals in senescent ("zombie") cells, triggering programmed cell death without affecting healthy cells.',
              },
              {
                mechanism: 'Epigenetic Regulation',
                example: 'Epithalon activates telomerase',
                desc: 'Some peptides influence chromatin remodelling and telomere maintenance, acting at the level of DNA accessibility rather than protein signalling.',
              },
            ].map(m => (
              <div key={m.mechanism} className="bg-[#111] border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-brand-400 mb-1">{m.mechanism}</h3>
                <p className="text-xs text-gray-500 mb-3 italic">{m.example}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Administration */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">How Are Research Peptides Administered?</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-8">
            <p>
              Most research peptides are administered via subcutaneous (SC) injection because peptides are broken down by digestive enzymes in the gastrointestinal tract before reaching systemic circulation. Oral bioavailability for standard peptides is typically less than 1–5% without special formulation strategies. SC injection delivers the compound to the subcutaneous fat layer, where it is slowly absorbed into the bloodstream via the capillary network, typically achieving peak plasma levels in 15–60 minutes depending on the peptide&apos;s molecular weight and lipophilicity.
            </p>
            <p>
              Nasal spray formulations work for peptides that can cross the nasal epithelium. Semax and Selank — both Russian neuropeptides — are commonly available and studied in intranasal form because their small size and amphiphilic character allow absorption through the nasal mucosa directly into the bloodstream (and possibly via olfactory pathways into the CNS). Nasal bioavailability for these compounds is estimated at 80–90% in animal models.
            </p>
            <p>
              Oral formulations for peptides are an active area of pharmaceutical development. Semaglutide — the GLP-1 receptor agonist — became the first peptide drug with proven oral bioavailability after Novo Nordisk developed a co-formulation with the absorption enhancer SNAC (sodium N-[8-(2-hydroxybenzoyl)amino]caprylate). The oral form (Rybelsus) achieves approximately 1% bioavailability — sufficient for a therapeutically active dose because the total dose is scaled accordingly. Research-grade peptides are not typically sold in oral formulations with equivalent enhancers.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { route: 'Subcutaneous Injection', bioavail: '~95–100%', peptides: 'BPC-157, TB-500, CJC-1295, Ipamorelin, GLP-1 analogues', notes: 'Standard for most research peptides. Insulin syringe (29–31G). Rotate sites.' },
              { route: 'Intranasal Spray', bioavail: '80–90% (small peptides)', peptides: 'Semax, Selank, PT-141', notes: 'Convenient, needle-free. Requires peptide to be in appropriate pH/solvent for nasal mucosa.' },
              { route: 'Oral (specialised)', bioavail: '0.5–2%', peptides: 'Semaglutide (Rybelsus), BPC-157 capsules (gut-local effect)', notes: 'Low systemic bioavailability. Some peptides (BPC-157 oral) act locally on GI tract, which may be the intended target.' },
            ].map(r => (
              <div key={r.route} className="bg-[#111] border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold mb-1">{r.route}</h3>
                <div className="text-brand-400 text-sm font-medium mb-2">Bioavailability: {r.bioavail}</div>
                <p className="text-gray-500 text-xs mb-2 italic">{r.peptides}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{r.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types of research peptides */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Types of Research Peptides by Goal</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(({ icon: Icon, title, examples, href, desc }) => (
              <Link key={href} href={href} className="bg-[#111] border border-white/10 hover:border-brand-500/40 rounded-2xl p-6 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <h3 className="font-bold group-hover:text-brand-400 transition-colors">{title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {examples.map(e => (
                    <span key={e} className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-gray-400">{e}</span>
                  ))}
                </div>
                <span className="text-brand-400 text-sm flex items-center gap-1">
                  Explore <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Peptides vs drugs */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Research Peptides vs. Pharmaceutical Drugs</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-left py-3 px-4 text-brand-400 font-medium">Research Peptides</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Pharmaceutical Drugs</th>
                </tr>
              </thead>
              <tbody>
                {pepVsDrug.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="py-3 px-4 font-medium text-white">{row.feature}</td>
                    <td className="py-3 px-4 text-gray-300">{row.peptides}</td>
                    <td className="py-3 px-4 text-gray-400">{row.drugs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              One of the most important distinctions is regulatory status. Pharmaceutical drugs that reach the market have gone through Phase I, II, and III clinical trials demonstrating safety and efficacy in controlled human populations, followed by FDA review. Research peptides occupy a different legal category: they are not approved for human use, but their manufacture and sale for research purposes is generally legal. This creates an environment where compounds with promising preclinical and early clinical data are accessible before they complete the full drug approval process — which can take 10–15 years and cost over $1 billion.
            </p>
            <p>
              This does not mean research peptides are unsafe. Many have been studied in human clinical trials — BPC-157 has Phase II data in Crohn&apos;s disease, Tesamorelin is FDA-approved, Semaglutide is FDA-approved, Epithalon has extensive Russian clinical data. But the absence of the full regulatory approval pathway means the burden of risk assessment falls more heavily on the individual researcher, which is why protocols, bloodwork monitoring, and conservative dosing are the standard approach in serious research communities.
            </p>
          </div>
        </section>

        {/* Safety */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Peptide Safety: What the Research Shows</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-8">
            <p>
              The safety profile of peptides is generally favourable compared to many traditional pharmaceutical compounds, for several structural reasons. First, peptides are metabolised by ubiquitous peptidases throughout the body — not just by hepatic enzymes — reducing the likelihood of liver toxicity that can occur with small-molecule drugs. Second, because peptides mimic endogenous signalling molecules, they typically work within physiologic receptor systems that evolved to handle them, rather than forcing entirely novel biochemical pathways.
            </p>
            <p>
              That said, no compound is without risk. The risks with research peptides fall into several categories: dose-dependent on-target effects (e.g., too much GH from secretagogues causing carpal tunnel or insulin resistance), formulation risks (contamination or incorrect reconstitution), and unknown long-term effects from chronic use of compounds with limited longitudinal human data. The most significant practical risk for most research users is not the peptide itself but poor sourcing — bacterial contamination, misdosing due to concentration errors, or receiving a different compound than labelled.
            </p>
            <p>
              Best practices for research safety include: sourcing from reputable vendors who provide certificate of analysis (CoA) from third-party testing, using sterile bacteriostatic water for reconstitution, using appropriate needle gauges and sterile technique for injection, starting with conservative doses and titrating up, and monitoring relevant biomarkers via bloodwork (IGF-1 for GH peptides, CBC/CMP as baseline, fasting glucose for metabolic peptides).
            </p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
            <p className="text-yellow-300 text-sm leading-relaxed">
              <strong>Research Use Only:</strong> The information on this site is for educational and research reference purposes. Research peptides are not FDA-approved therapeutic agents and are not intended for human consumption. Always consult a qualified healthcare professional before considering any peptide protocol.
            </p>
          </div>
        </section>

        {/* Most researched peptides */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">The Most Researched Peptides — Quick Reference</h2>
          <div className="space-y-3">
            {[
              { name: 'BPC-157', type: 'Healing / Cytoprotective', evidence: 'Extensive animal studies; Phase II human Crohn\'s data', mechanism: 'VEGF upregulation, NO synthase, growth factor activation', link: '/products/bpc157-10mg' },
              { name: 'TB-500 (Thymosin β4)', type: 'Healing / Regenerative', evidence: 'Phase II in epidermolysis bullosa; extensive animal data', mechanism: 'Actin sequestration, stem cell mobilisation, angiogenesis', link: '/products/tb500-10mg' },
              { name: 'CJC-1295 / Ipamorelin', type: 'GH Secretagogue Stack', evidence: 'Phase I/II human trials for each compound independently', mechanism: 'GHRH receptor + GHS-R1a dual stimulation', link: '/products/cjc1295-ipamorelin' },
              { name: 'Semaglutide', type: 'GLP-1 Agonist / Fat Loss', evidence: 'FDA-approved (Wegovy, Ozempic); 68-week Phase III STEP-1', mechanism: 'GLP-1R agonism → appetite reduction, gastric emptying slowing', link: '/products/glp-1s-5mg' },
              { name: 'GHK-Cu', type: 'Skin / Collagen', evidence: 'Multiple human skin studies; wound healing RCTs', mechanism: 'Collagen I/III transcription, MMP suppression, VEGF', link: '/products/ghk-cu' },
              { name: 'Epithalon', type: 'Anti-Aging / Longevity', evidence: 'Russian clinical data; multiple animal lifespan studies', mechanism: 'Telomerase activation, pineal gland melatonin restoration', link: '/products/epithalon-50mg' },
            ].map(p => (
              <Link key={p.name} href={p.link} className="flex items-start gap-4 bg-[#111] border border-white/10 hover:border-brand-500/30 rounded-xl p-5 transition-colors group">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold group-hover:text-brand-400 transition-colors">{p.name}</span>
                    <span className="text-xs px-2 py-0.5 bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-full">{p.type}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-1">{p.mechanism}</p>
                  <p className="text-gray-400 text-sm">{p.evidence}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-brand-400 shrink-0 mt-1 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Beginner FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Are research peptides legal?',
                a: 'In the United States, research peptides are legal to purchase and possess for research purposes. They are not approved by the FDA for human use and cannot be legally sold as a therapeutic agent or dietary supplement for human consumption. The legal landscape varies by country — in some jurisdictions (Australia, for example), certain peptides require a prescription. Always check the laws in your jurisdiction before purchasing.',
              },
              {
                q: 'Do peptides need to be refrigerated?',
                a: 'Lyophilised (freeze-dried) peptide powder is stable at room temperature for several months and at refrigerator temperature (4°C) for 12+ months. Once reconstituted with bacteriostatic water, peptide solutions should be refrigerated (do not freeze) and typically used within 28–60 days. Exposure to UV light, repeated freeze-thaw cycles, and warm temperatures accelerate degradation.',
              },
              {
                q: 'What is the difference between a peptide and a protein?',
                a: 'By convention, molecules with fewer than 50 amino acids are called peptides; longer chains are proteins. There is no strict biological rule — the line is somewhat arbitrary. Insulin (51 AAs) is technically a small protein but is treated as a peptide pharmacologically. Most research peptides are 2–30 amino acids long.',
              },
              {
                q: 'Can you take peptides orally?',
                a: 'Most peptides are destroyed by digestive enzymes (proteases) in the stomach and small intestine before they can be absorbed intact into the bloodstream. Oral bioavailability is typically less than 5% for standard peptides. Exceptions include very small peptides (dipeptides, tripeptides) that can be absorbed via peptide transporters, and specially formulated oral peptides like Semaglutide (Rybelsus) with absorption enhancers. BPC-157 in oral capsule form may exert its effects locally on the GI tract rather than systemically.',
              },
              {
                q: 'How do I know if my peptides are high quality?',
                a: 'Look for vendors who provide third-party certificates of analysis (CoA) from accredited analytical labs showing HPLC purity ≥98% and mass spectrometry confirmation of the correct molecular weight. Reputable vendors like Apollo Peptide Sciences provide this documentation. Avoid vendors who cannot provide CoA on request or who have suspiciously low prices that may indicate compromised quality control.',
              },
              {
                q: 'What peptide should a complete beginner start with?',
                a: 'For most beginners interested in general wellness, BPC-157 is a commonly recommended starting point because of its well-characterised safety profile in animal studies, broad mechanism of action, and the straightforward protocol (typically 250–500 mcg/day SC injection). For beginners specifically interested in GH optimisation, a pre-formulated CJC-1295/Ipamorelin blend simplifies dosing. Read our full beginner guide before starting any protocol.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-[#111] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-3">{q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-brand-500/10 to-transparent border border-brand-500/20 rounded-3xl p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Explore Research Peptides?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Browse all 40+ research-grade peptides available from Apollo, or read our beginner guide to understand protocols, dosing, and reconstitution step-by-step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guide" className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl transition-colors">
              Read the Beginner Guide
            </Link>
            <Link href="/products" className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold transition-colors">
              Browse All Peptides
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

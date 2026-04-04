import type { Metadata } from 'next';
import Link from 'next/link';
import { FlaskConical, Dna, Zap, Shield, ChevronRight, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Longevity Peptides: Anti-Aging Protocols for Lifespan & Healthspan | PeptideProtocols',
  description:
    'Explore the science of longevity peptides — Epithalon, FOXO4-DRI, MOTS-c, SS-31, Thymosin Alpha-1, and more. Learn the mechanisms behind anti-aging protocols targeting telomeres, senescent cells, and mitochondria.',
};

const hallmarks = [
  {
    icon: Dna,
    hallmark: 'Telomere Attrition',
    peptides: 'Epithalon',
    mechanism: 'Activates telomerase (hTERT) to extend telomere length. Restores telomere elongation in aged somatic cells.',
  },
  {
    icon: Shield,
    hallmark: 'Cellular Senescence',
    peptides: 'FOXO4-DRI',
    mechanism: 'Disrupts FOXO4-p53 complex in senescent cells, triggering selective apoptosis. "Zombie cell" clearance.',
  },
  {
    icon: Zap,
    hallmark: 'Mitochondrial Dysfunction',
    peptides: 'SS-31, MOTS-c',
    mechanism: 'SS-31 stabilises cristae and reduces ROS at complex I/III. MOTS-c activates AMPK and mitochondrial biogenesis.',
  },
  {
    icon: FlaskConical,
    hallmark: 'Immunosenescence',
    peptides: 'Thymosin Alpha-1, Epithalon',
    mechanism: 'Thymosin α1 restores T-cell maturation and thymic output. Epithalon restores melatonin and circadian immune regulation.',
  },
];

const peptideProfiles = [
  {
    name: 'Epithalon (Epitalon)',
    aas: '4 amino acids (Ala-Glu-Asp-Gly)',
    mechanism: 'Telomerase activator (hTERT gene expression), pineal gland peptide regulator',
    evidence: 'Russian Institute on Bioregulation: 2.4-year mean lifespan extension in rats; normalised melatonin in elderly humans in two RCTs; improved vision and cardiovascular markers',
    protocol: '10 mg/day SC × 10 days, repeated 2–4× per year; or 5–10 mg × 20 days annually',
    synergy: 'GHK-Cu, MOTS-c, Thymosin α1',
  },
  {
    name: 'FOXO4-DRI',
    aas: '18 amino acids (D-retro-inverso peptide)',
    mechanism: 'Disrupts FOXO4-p53 interaction in senescent cells → selective apoptosis; spares healthy cells',
    evidence: 'Van Deursen lab (Nature Medicine 2017): FOXO4-DRI restored fur density, renal function, and exercise capacity in accelerated aging mice; preliminary human anecdotes only',
    protocol: '1–3 mg SC injection, 3× per week × 4–8 weeks. Advanced: 5 mg/day short pulse cycles',
    synergy: 'Rapamycin (mTOR suppression), senolytic quercetin/dasatinib stack',
  },
  {
    name: 'MOTS-c',
    aas: '16 amino acids (mitochondria-derived peptide)',
    mechanism: 'Activates AMPK → mitochondrial biogenesis, glucose metabolism, AICAR pathway; improves insulin sensitivity',
    evidence: 'Lee et al. (Cell Metabolism 2015): MOTS-c improved glucose tolerance, fat mass, and physical performance in obese mice. Human plasma MOTS-c declines with age. Phase I trial ongoing.',
    protocol: '5–10 mg/week SC; some protocols 10 mg 3× per week',
    synergy: 'SS-31 (complementary mitochondrial targets), Metformin (AMPK synergy)',
  },
  {
    name: 'SS-31 (Elamipretide)',
    aas: '4 amino acids (aromatic-cationic)',
    mechanism: 'Binds cardiolipin on inner mitochondrial membrane; stabilises cristae; reduces electron leak and ROS at complex I/III',
    evidence: 'Phase II trial in heart failure with preserved ejection fraction (TOPCAT): improved exercise capacity and quality of life. Multiple rodent data on neurodegeneration, ischemia-reperfusion protection.',
    protocol: '0.25–2 mg/kg SC (rodent); human Phase II: 0.05–0.25 mg/kg. Research doses: 5–10 mg SC daily',
    synergy: 'MOTS-c, NAD+ precursors (NMN/NR), BPC-157 for mitochondrial recovery post-injury',
  },
  {
    name: 'Thymosin Alpha-1 (Tα1)',
    aas: '28 amino acids',
    mechanism: 'Thymic peptide: stimulates T-cell maturation, dendritic cell function, NK cell activity; reduces IL-6 and TNF-α; restores thymic output in aged individuals',
    evidence: 'FDA-approved as Zadaxin in 37+ countries for HBV/HCV and as immune modulator in cancer. COVID-19 studies: Tα1 reduced mortality and ICU duration in severe cases (n=320 Chinese RCT).',
    protocol: '1.6 mg SC 2× per week for 6–12 months (clinical); shorter wellness cycles: 1.6 mg 3× per week × 4–6 weeks',
    synergy: 'Epithalon (thymic-pineal axis), BPC-157 (anti-inflammatory), Selank (immune-anxiolytic)',
  },
  {
    name: 'GHK-Cu (Copper Peptide)',
    aas: '3 amino acids + Cu²⁺ (Gly-His-Lys)',
    mechanism: 'Upregulates collagen I/III/VII, elastin, laminin; suppresses MMP-1/3/9; activates VEGF, TGF-β1; DNA repair pathway activation; decreases inflammatory NF-κB',
    evidence: 'Pickart et al.: GHK-Cu upregulates 31% of known aging-reset genes in fibroblast studies; wound healing RCTs; Linus Pauling Institute in vivo data',
    protocol: 'Topical: 0.01–0.1% cream (face); SC: 1–2 mg daily for systemic effects; combines with Epithalon for anti-aging stack',
    synergy: 'Epithalon, BPC-157, TB-500 (collagen and healing amplification)',
  },
];

export default function LongevityPeptidesPage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
            <Dna className="w-3.5 h-3.5" />
            Anti-Aging Science — Research Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Longevity Peptides:{' '}
            <span className="gradient-text">Anti-Aging Protocols for Healthspan</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
            The science of aging has identified hallmarks — root mechanisms driving cellular decline. Research peptides like Epithalon, FOXO4-DRI, MOTS-c, and SS-31 target these hallmarks directly. This guide explains the biology, the evidence, and how to structure longevity protocols.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Epithalon telomerase', 'FOXO4-DRI senolytic', 'MOTS-c AMPK', 'SS-31 mitochondria', 'Thymosin alpha-1', 'Longevity protocol', 'Healthspan vs lifespan'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Hallmarks of aging */}
        <section>
          <h2 className="text-3xl font-bold mb-4">The Hallmarks of Aging — and Which Peptides Target Them</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            In their seminal 2013 Cell paper, López-Otín et al. defined the molecular and cellular hallmarks of aging — the underlying drivers of age-related decline that are conserved across species. Research peptides are uniquely positioned to address these hallmarks because they can mimic endogenous signalling molecules that regulate these exact processes.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {hallmarks.map(({ icon: Icon, hallmark, peptides, mechanism }) => (
              <div key={hallmark} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">{hallmark}</h3>
                    <p className="text-brand-400 text-sm">{peptides}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{mechanism}</p>
              </div>
            ))}
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              The 2023 update to the Hallmarks framework (Cell, 2023) added five new hallmarks to the original nine, including disabled macroautophagy, chronic inflammation, and dysbiosis. Several longevity peptides address multiple hallmarks simultaneously — Epithalon, for example, activates telomerase (telomere attrition), restores melatonin rhythmicity (circadian dysregulation), and modulates immune function (immunosenescence). This multi-target profile makes peptides particularly interesting in longevity research compared to single-target small-molecule interventions.
            </p>
          </div>
        </section>

        {/* Telomeres */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Telomeres and Epithalon: The Evidence</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              Telomeres are repetitive DNA sequences (TTAGGG in humans) that cap chromosome ends and protect genomic integrity during cell division. With each replication, telomeres shorten by 50–200 base pairs due to the &quot;end replication problem.&quot; When telomeres reach a critical length (~3 kb), cells enter replicative senescence or apoptosis. Telomere length is positively correlated with biological age and inversely correlated with age-related disease risk in large epidemiological studies.
            </p>
            <p>
              The enzyme telomerase (hTERT complex) can extend telomere length in germ cells, stem cells, and cancer cells — but its expression is suppressed in most adult somatic cells. Epithalon — a tetrapeptide (Ala-Glu-Asp-Gly) first isolated by Vladimir Khavinson at the St. Petersburg Institute of Bioregulation — was found to activate hTERT gene expression in aged human fibroblasts, effectively restoring telomerase activity and allowing telomere elongation.
            </p>
            <p>
              Clinical studies conducted by Khavinson&apos;s group demonstrated that Epithalon extended mean lifespan by 24% in Drosophila, and by 24–40% in rodent models when administered chronically. In elderly human subjects (n=266, average age 60–75), biannual Epithalon cycles over 12 years were associated with reduced mortality (cardiovascular and cancer) compared to untreated controls — though these were non-randomised cohort studies rather than RCTs. The pineal peptide also restored melatonin secretion to youthful levels in elderly volunteers, which is particularly significant given the broad immunological and circadian roles of melatonin in aging.
            </p>
          </div>
        </section>

        {/* Senescent cells */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Senescent Cells and FOXO4-DRI: The Zombie Cell Killer</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              Cellular senescence is a state of permanent cell cycle arrest that serves an initial protective function — stopping the replication of damaged cells — but becomes harmful when senescent cells accumulate with age. These &quot;zombie cells&quot; resist apoptosis while secreting a destructive cocktail of inflammatory cytokines, proteases, and growth factors called the Senescence-Associated Secretory Phenotype (SASP). SASP creates a chronic inflammatory microenvironment that drives age-related pathologies including fibrosis, neurodegeneration, and carcinogenesis in adjacent tissue.
            </p>
            <p>
              Senescent cells survive by upregulating anti-apoptotic proteins, particularly through the FOXO4-p53 interaction in the nucleus. FOXO4 binds p53 and sequesters it away from its normal pro-apoptotic functions, allowing senescent cells to persist despite being damaged. FOXO4-DRI — a D-amino acid retro-inverso peptide — is designed to penetrate cells and disrupt this FOXO4-p53 interaction. When the interaction is broken, p53 is released and executes apoptosis specifically in senescent cells, while healthy cells (which do not rely on this FOXO4 survival mechanism) are unaffected.
            </p>
            <p>
              The landmark Van Deursen lab paper (Nature Medicine, 2017) demonstrated that FOXO4-DRI treatment in accelerated-aging (XPD) mice restored fur density (reversed hair loss), improved renal function (reduced BUN/creatinine), restored exercise capacity (grip strength, treadmill performance), and extended median lifespan — all hallmarks of healthspan improvement rather than just lifespan extension. Human data remains preliminary (case reports and anecdotal research communities), but interest is high given the mechanistic specificity of the compound.
            </p>
          </div>
        </section>

        {/* Mitochondria */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Mitochondrial Dysfunction: MOTS-c and SS-31</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              Mitochondria are not static organelles — they are dynamic signalling hubs that coordinate metabolism, calcium handling, apoptosis, and immune responses. Mitochondrial dysfunction is both a hallmark of aging and a driver of other hallmarks: dysfunctional mitochondria produce excess reactive oxygen species (ROS) that damage DNA, proteins, and lipids; impair ATP production that cells need for repair functions; and release signals (cytosolic mtDNA, cardiolipin fragments) that activate inflammatory pathways including the cGAS-STING pathway.
            </p>
            <p>
              MOTS-c (Mitochondrial Open-reading-frame of the twelve S rRNA-c) is a 16-amino-acid peptide encoded entirely within the mitochondrial genome — a discovery that fundamentally changed understanding of mitochondria as signal producers. MOTS-c translocates to the nucleus under metabolic stress and activates AMPK (AMP-activated protein kinase), the master metabolic sensor that drives mitochondrial biogenesis, fatty acid oxidation, and insulin sensitivity. MOTS-c plasma levels decline significantly with age in humans, and supplementation in aged mice restored metabolic flexibility, improved glucose tolerance, and enhanced physical performance without any reported toxicity in animal models.
            </p>
            <p>
              SS-31 (Elamipretide) works at a different mitochondrial target: cardiolipin, a phospholipid unique to the inner mitochondrial membrane (IMM) that is essential for the structural integrity of cristae — the folded IMM invaginations where the electron transport chain (ETC) is embedded. With aging and oxidative stress, cardiolipin becomes oxidised and loses its ability to anchor cytochrome c and organise the respiratory supercomplexes. SS-31&apos;s aromatic-cationic structure allows it to selectively penetrate and concentrate in the IMM, where it binds cardiolipin, stabilises cristae architecture, reduces electron leak at Complex I and III, and dramatically decreases mitochondrial ROS production. Phase II human trials in heart failure with preserved ejection fraction (HFpEF) demonstrated improved six-minute walk distance and quality of life measures.
            </p>
          </div>
        </section>

        {/* Peptide profiles */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Longevity Peptide Profiles</h2>
          <div className="space-y-6">
            {peptideProfiles.map(p => (
              <div key={p.name} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold text-brand-400">{p.name}</h3>
                  <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">{p.aas}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Mechanism</p>
                    <p className="text-gray-300 leading-relaxed">{p.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Evidence</p>
                    <p className="text-gray-300 leading-relaxed">{p.evidence}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Research Protocol</p>
                    <p className="text-gray-300 leading-relaxed">{p.protocol}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Synergy</p>
                    <p className="text-brand-400 leading-relaxed">{p.synergy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Protocol stack */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Structuring a Longevity Protocol</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-8">
            <p>
              Unlike acute-use peptides (BPC-157 for injury, GLP-1s for weight loss), longevity peptides are typically used in cycles of weeks to months, with repeat cycles over years. The rationale is that the hallmarks of aging accumulate gradually and require sustained intervention to meaningfully shift. Most protocols therefore use a &quot;pulse and rest&quot; structure — intensive cycles of a few weeks followed by rest periods — to avoid receptor desensitisation and allow biological reset.
            </p>
          </div>

          <div className="bg-[#111] border border-brand-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-brand-400 mb-6">Sample Annual Longevity Protocol (Conservative)</h3>
            <div className="space-y-4">
              {[
                { period: 'Q1 (January)', protocol: 'Epithalon 10 mg SC × 10 days → rest 90 days', rationale: 'Telomerase activation cycle. Minimal burden, high evidence for this short cycle.' },
                { period: 'Q2 (April)', protocol: 'Thymosin α1 1.6 mg 3×/week × 6 weeks', rationale: 'Immune system reset heading into spring. Restores T-cell function and NK activity.' },
                { period: 'Q3 (July)', protocol: 'MOTS-c 5–10 mg 3×/week × 4 weeks', rationale: 'Metabolic summer cycle. AMPK activation improves insulin sensitivity and mitochondrial function.' },
                { period: 'Q4 (October)', protocol: 'Epithalon 10 mg SC × 10 days + GHK-Cu 1 mg/day SC × 3 weeks', rationale: 'Second telomere cycle with collagen/DNA-repair support entering winter months.' },
                { period: 'Ongoing', protocol: 'GHK-Cu topical daily + CJC-1295/Ipamorelin pre-bed 5 nights/week', rationale: 'Continuous skin maintenance and GH optimisation as baseline longevity support.' },
              ].map(({ period, protocol, rationale }) => (
                <div key={period} className="flex gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="text-brand-400 font-bold text-sm w-28 shrink-0 pt-0.5">{period}</div>
                  <div>
                    <p className="font-medium text-sm mb-1">{protocol}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{rationale}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Biomarker monitoring */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Biomarker Monitoring for Longevity Protocols</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { marker: 'Telomere Length (TL)', test: 'SpectraCell Telomere Test or LifeLength', frequency: 'Annual', target: 'Maintain or increase relative to age peers' },
              { marker: 'IGF-1', test: 'Quest/LabCorp standard panel', frequency: 'Every 12 weeks on GH peptides', target: 'Upper-normal range for age' },
              { marker: 'Inflammatory markers', test: 'hsCRP, IL-6, TNF-α', frequency: 'Quarterly', target: 'hsCRP < 1 mg/L; trending down' },
              { marker: 'Immune panel', test: 'CD4/CD8 ratio, NK cell activity', frequency: 'Twice yearly (on Thymosin α1)', target: 'CD4/CD8 > 1.5; NK activity in normal range' },
              { marker: 'Metabolic health', test: 'Fasting glucose, HbA1c, HOMA-IR', frequency: 'Quarterly', target: 'FBG < 90 mg/dL; HbA1c < 5.4%' },
              { marker: 'Epigenetic age (biological age)', test: 'Trudiagnostic DunedinPACE or Horvath clock', frequency: 'Annual', target: 'Biological age younger than chronological' },
            ].map(m => (
              <div key={m.marker} className="bg-[#111] border border-white/10 rounded-xl p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold">{m.marker}</h3>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full shrink-0">{m.frequency}</span>
                </div>
                <p className="text-gray-500 text-xs mb-1">{m.test}</p>
                <p className="text-brand-400 text-sm">Target: {m.target}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Longevity Peptide FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is it safe to activate telomerase? Doesn\'t cancer also use telomerase?',
                a: 'This is the most important safety question for Epithalon. Cancer cells do universally reactivate telomerase to achieve immortality. However, the relationship is more nuanced: telomerase activation does not cause cancer — it is a consequence of oncogenic transformation, not a cause. In normal cells, telomerase activation allows continued division but does not override oncogene suppression pathways. Multiple rodent lifespan studies with Epithalon have not reported increased cancer incidence. That said, individuals with active cancer or very high cancer risk should discuss telomerase-activating compounds carefully with an oncologist.',
              },
              {
                q: 'How long does it take to see effects from longevity peptides?',
                a: 'Longevity interventions operate on long timescales by definition. Measurable changes in telomere length require months to years of cycling. Senescent cell burden reduction (FOXO4-DRI) may show effects in weeks in rodents, but human data is too limited to set expectations. Metabolic improvements from MOTS-c in rodents appeared within 8–12 weeks. The most noticeable subjective effects reported by researchers using Epithalon are improved sleep quality and depth (melatonin restoration), which can begin within the first cycle.',
              },
              {
                q: 'Can longevity peptides be stacked with other compounds like metformin or rapamycin?',
                a: 'Yes — longevity researchers increasingly combine peptide protocols with pharmaceutical geroprotectors. The most studied combination is MOTS-c + Metformin (both activate AMPK via different mechanisms, potentially synergistic). Rapamycin (mTOR inhibitor) combined with senolytics like FOXO4-DRI theoretically addresses both mTOR pathway aging and senescent cell accumulation. These are highly experimental combinations with no clinical safety data and should be considered only by knowledgeable researchers with close medical monitoring.',
              },
              {
                q: 'What is the difference between lifespan extension and healthspan extension?',
                a: 'Lifespan is the total duration of life. Healthspan is the period of life spent in good health — free from significant disease and functional decline. Many longevity researchers prioritise healthspan over lifespan: living 85 years in excellent health is clearly preferable to living 95 years with the final 15 in decline. The peptides described here show primarily healthspan effects in animal models — restoration of physical capacity, metabolic function, and immune competence — which may or may not translate to absolute lifespan extension in humans.',
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
          <h2 className="text-3xl font-bold mb-6">Longevity Peptides from Phiogen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Epithalon 50mg', slug: 'epithalon-50mg', desc: 'Telomerase activator. Russian clinical data. Multi-year cycle protocol.' },
              { name: 'FOXO4-DRI', slug: 'foxo4-dri', desc: 'Senolytic peptide. Selective apoptosis of senescent cells.' },
              { name: 'MOTS-c 10mg', slug: 'mots-c-10mg', desc: 'Mitochondria-derived peptide. AMPK activation and metabolic restoration.' },
              { name: 'SS-31 (Elamipretide)', slug: 'ss-31', desc: 'Cardiolipin-binding mitochondrial protector. Phase II heart failure data.' },
              { name: 'Thymosin Alpha-1 5mg', slug: 'thymosin-alpha-1-5mg', desc: 'Immune restoration peptide. Approved in 37+ countries for immune modulation.' },
              { name: 'GHK-Cu 50mg', slug: 'ghk-cu-50mg', desc: 'Copper tripeptide. Collagen synthesis, DNA repair, anti-inflammatory.' },
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
        <section className="bg-gradient-to-br from-brand-500/10 to-transparent border border-brand-500/20 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore the Anti-Aging Protocol</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            View our curated anti-aging stacks or browse all longevity-category peptides from Phiogen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/anti-aging" className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl transition-colors">
              Anti-Aging Hub
            </Link>
            <Link href="/stacks" className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold transition-colors">
              Protocol Stacks
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

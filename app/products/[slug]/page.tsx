import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft, ExternalLink, Star, CheckCircle2, Clock, Zap,
  FlaskConical, Syringe, TrendingDown, Activity, Leaf, Package,
} from 'lucide-react';
import { allProducts, getProductBySlug } from '@/lib/products';
import { AnimateIn } from '@/components/AnimateIn';
import { RelatedLinks } from '@/components/RelatedLinks';
import { productFaqs } from '@/lib/productFaqs';
import { getDeepDive } from '@/lib/deepDive';

export async function generateStaticParams() {
  return allProducts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `Buy ${product.name} | Research-Grade · Best Price | MaxxingPeptides`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://maxxingpeptides.com/products/${slug}`,
    },
    openGraph: {
      title: `Buy ${product.name} | MaxxingPeptides`,
      description: product.shortDescription,
      url: `https://maxxingpeptides.com/products/${slug}`,
      images: [{ url: `https://maxxingpeptides.com${product.image}` }],
    },
  };
}

// ── Category accent colors ──────────────────────────────────────────────────
const categoryAccent: Record<string, { badge: string; border: string; glow: string; icon: React.ReactNode }> = {
  healing: {
    badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    border: 'border-emerald-500/20',
    glow: 'bg-emerald-500/5',
    icon: <FlaskConical className="w-4 h-4 text-emerald-400" />,
  },
  'fat-loss': {
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    border: 'border-blue-500/20',
    glow: 'bg-blue-500/5',
    icon: <TrendingDown className="w-4 h-4 text-blue-400" />,
  },
  performance: {
    badge: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    border: 'border-amber-500/20',
    glow: 'bg-amber-500/5',
    icon: <Activity className="w-4 h-4 text-amber-400" />,
  },
  'anti-aging': {
    badge: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    border: 'border-purple-500/20',
    glow: 'bg-purple-500/5',
    icon: <Leaf className="w-4 h-4 text-purple-400" />,
  },
  supplies: {
    badge: 'text-gray-400 bg-gray-500/10 border-gray-500/20',
    border: 'border-gray-500/20',
    glow: 'bg-gray-500/5',
    icon: <Package className="w-4 h-4 text-gray-400" />,
  },
};

// ── Per-product unique research snapshots ───────────────────────────────────
type FactBox = { label: string; value: string; sub?: string };
type ProductFact = {
  heading: string;
  intro: string;
  facts: FactBox[];
  accentClass: string;
  iconNode: React.ReactNode;
};

const productFacts: Record<string, ProductFact> = {
  'bpc157-10mg': {
    heading: 'BPC-157 Protocol Snapshot',
    intro: 'A 15-amino-acid pentadecapeptide isolated from human gastric juice — backed by 100+ published studies for pleiotropic tissue repair.',
    facts: [
      { label: 'Amino acids', value: '15', sub: 'pentadecapeptide' },
      { label: 'Published studies', value: '100+', sub: 'peer-reviewed' },
      { label: 'Primary mechanism', value: 'GHr upregulation', sub: 'in fibroblasts' },
      { label: 'Tissues targeted', value: '7+', sub: 'tendon, gut, nerve, vessel, muscle, bone, skin' },
      { label: 'Hormonal impact', value: 'None', sub: 'no HPA suppression' },
      { label: 'Half-life (SC)', value: '~4 hrs', sub: 'supports twice-daily dosing' },
    ],
    accentClass: 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400',
    iconNode: <Syringe className="w-5 h-5 text-emerald-400" />,
  },
  'tb500-10mg': {
    heading: 'TB-500 Protocol Snapshot',
    intro: 'Synthetic Thymosin Beta-4 — a 43-amino-acid protein produced by every nucleated cell in response to injury. Delivers systemic healing from any injection site.',
    facts: [
      { label: 'Amino acids', value: '43', sub: 'Thymosin Beta-4 analog' },
      { label: 'Mechanism', value: 'Actin sequestration', sub: 'enables cell migration' },
      { label: 'Healing reach', value: 'Systemic', sub: 'any injection site' },
      { label: 'Recovery boost', value: '30–50%', sub: 'faster recovery time' },
      { label: 'Proven use', value: 'Elite sports', sub: 'tendon & ligament repair' },
      { label: 'Stack partner', value: 'BPC-157', sub: 'gold standard combo' },
    ],
    accentClass: 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400',
    iconNode: <Syringe className="w-5 h-5 text-emerald-400" />,
  },
  'glp-1s-5mg': {
    heading: 'Semaglutide 5mg — Protocol Data',
    intro: 'GLP-1 receptor agonist with 97% structural homology to human GLP-1. Engineered albumin binding extends half-life from 2 minutes (native) to 7 days.',
    facts: [
      { label: 'GLP-1 homology', value: '97%', sub: 'to endogenous GLP-1' },
      { label: 'Plasma half-life', value: '~7 days', sub: 'once-weekly dosing' },
      { label: 'Starter supply', value: '20 weeks', sub: 'at 0.25mg/week' },
      { label: 'Proven weight loss', value: '14.9%', sub: 'avg at 2.4mg/wk (STEP 1)' },
      { label: 'Injection frequency', value: 'Once weekly', sub: 'same day each week' },
      { label: 'Appetite reduction', value: '20–40%', sub: 'vs. baseline' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-1s-10mg': {
    heading: 'Semaglutide 10mg — Extended Protocol',
    intro: 'Double the supply — designed for users who have completed titration and want sustained 20-week coverage at maintenance doses.',
    facts: [
      { label: 'Supply at 0.5mg/wk', value: '20 weeks', sub: 'maintenance protocol' },
      { label: 'Supply at 1.0mg/wk', value: '10 weeks', sub: 'therapeutic protocol' },
      { label: 'Lean mass impact', value: 'Preserved', sub: 'vs. diet-only loss' },
      { label: 'NAFLD reduction', value: 'Secondary benefit', sub: 'liver fat reduction' },
      { label: 'Albumin binding', value: 'Engineered', sub: 'C18 fatty acid conjugate' },
      { label: 'Best paired with', value: 'CJC-1295/Ipa', sub: 'for body recomp' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-1s-15mg': {
    heading: 'Semaglutide 15mg — Maximum Dose Protocol',
    intro: 'The highest-supply semaglutide vial — optimized for users running at or near the 2.4mg/week clinical maximum used in the STEP weight loss trials.',
    facts: [
      { label: 'Supply at 2.4mg/wk', value: '6.25 weeks', sub: 'full clinical dose' },
      { label: 'STEP 1 trial result', value: '14.9% BWL', sub: 'avg at 68 weeks' },
      { label: 'Top responders', value: '20%+ BWL', sub: 'individual variance' },
      { label: 'Cost vs. 5mg vial', value: 'Lowest $/mg', sub: 'best value option' },
      { label: 'Protein requirement', value: '1.6g/kg LBM', sub: 'minimum at this dose' },
      { label: 'Phase', value: 'Maintenance only', sub: 'must be titrated first' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-2t-15mg': {
    heading: 'Tirzepatide 15mg — Dual Agonist Data',
    intro: '"Twincretin" — a single molecule activating both GLP-1 and GIP receptors simultaneously. Dual activation works synergistically to enhance fat oxidation and reduce GI side effects.',
    facts: [
      { label: 'Receptor targets', value: 'GLP-1 + GIP', sub: 'dual agonism' },
      { label: 'SURMOUNT weight loss', value: '22.5%', sub: 'avg at 15mg/wk (72 wks)' },
      { label: 'vs. Semaglutide', value: '+50% more', sub: 'fat loss in head-to-head' },
      { label: 'Plasma half-life', value: '~5 days', sub: 'once-weekly injection' },
      { label: 'GI tolerability', value: 'Improved', sub: 'GIP reduces nausea' },
      { label: 'Approval names', value: 'Mounjaro / Zepbound', sub: 'Eli Lilly' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-2t-30mg': {
    heading: 'Tirzepatide 30mg — Extended Protocol Supply',
    intro: 'Double vial for users sustaining a tirzepatide protocol at 5–10mg/week maintenance — covers 3–6 weeks at therapeutic weight loss doses.',
    facts: [
      { label: 'Supply at 5mg/wk', value: '6 weeks', sub: 'standard maintenance' },
      { label: 'Supply at 10mg/wk', value: '3 weeks', sub: 'high-dose protocol' },
      { label: 'Adipose receptor', value: 'GIP direct', sub: 'fat tissue activation' },
      { label: 'Insulin sensitivity', value: 'Superior', sub: 'vs. semaglutide alone' },
      { label: 'Start dose', value: '2.5mg/wk', sub: 'must titrate up' },
      { label: 'Best stack', value: 'CJC-1295/Ipa', sub: 'for muscle preservation' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-2t-60mg': {
    heading: 'Tirzepatide 60mg — Bulk Protocol Supply',
    intro: 'Largest tirzepatide vial — for long-term protocols at maximum 15mg/week dose, or extended maintenance at moderate doses with best cost efficiency.',
    facts: [
      { label: 'Supply at 15mg/wk', value: '4 weeks', sub: 'max clinical dose' },
      { label: 'Supply at 7.5mg/wk', value: '8 weeks', sub: 'mid-range maintenance' },
      { label: 'Max clinical dose', value: '15mg/week', sub: 'SURMOUNT trials' },
      { label: 'Cost per mg', value: 'Lowest', sub: 'in tirzepatide range' },
      { label: 'Fat loss mechanism', value: 'GLP-1 + GIP + adipose', sub: 'triple tissue pathway' },
      { label: 'Lean mass', value: 'Preserved', sub: 'SURMOUNT body comp data' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-3r-10mg': {
    heading: 'Retatrutide 10mg — Triple Agonist Entry',
    intro: 'Triple GIP/GLP-1/glucagon receptor agonist — the most potent fat loss peptide available, adding glucagon-driven energy expenditure to dual agonism.',
    facts: [
      { label: 'Receptor targets', value: 'GIP + GLP-1 + GCGR', sub: 'triple agonism' },
      { label: 'Proven weight loss', value: '24.2%', sub: 'at 12mg dose, 48 wks' },
      { label: 'Energy expenditure', value: 'Elevated', sub: 'glucagon receptor action' },
      { label: 'Titration start', value: '1mg/week', sub: 'slowest titration required' },
      { label: 'Supply at 1mg/wk', value: '10 weeks', sub: 'full titration phase' },
      { label: 'Development', value: 'Phase 2 complete', sub: 'most advanced triple agonist' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-3r-15mg': {
    heading: 'Retatrutide 15mg — Maintenance Supply',
    intro: 'Sufficient supply for the retatrutide titration phase plus early maintenance at 4–6mg/week — the dose range showing optimal tolerance and effect.',
    facts: [
      { label: 'Supply at 4mg/wk', value: '3.75 weeks', sub: 'optimal maintenance zone' },
      { label: 'Supply at 1mg/wk', value: '15 weeks', sub: 'full slow titration' },
      { label: 'Glucagon action', value: 'Thermogenic', sub: 'raises basal metabolic rate' },
      { label: 'Liver fat', value: 'Significantly reduced', sub: 'glucagon + GLP-1 effect' },
      { label: 'Appetite + expenditure', value: 'Dual attack', sub: 'vs. GLP-1 alone' },
      { label: 'Phase 2 completion', value: '2023', sub: 'Eli Lilly pipeline' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-3r-30mg': {
    heading: 'Retatrutide 30mg — High-Dose Protocol',
    intro: 'Extended supply for experienced users running retatrutide at 6–12mg/week — the dose range producing the most significant body composition changes in clinical data.',
    facts: [
      { label: 'Supply at 8mg/wk', value: '3.75 weeks', sub: 'high-dose protocol' },
      { label: 'Supply at 4mg/wk', value: '7.5 weeks', sub: 'mid-dose protocol' },
      { label: 'vs. Semaglutide', value: '+10% more BWL', sub: 'head-to-head estimates' },
      { label: 'Metabolic rate', value: '+5–8% BMR', sub: 'glucagon receptor data' },
      { label: 'GI risk at high dose', value: 'Moderate-high', sub: 'titrate meticulously' },
      { label: 'Best stack', value: 'CJC-1295/Ipa', sub: 'lean mass preservation' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-3r-60mg': {
    heading: 'Retatrutide 60mg — Maximum Supply',
    intro: 'Bulk supply for long-duration retatrutide protocols — best cost efficiency for sustained use at therapeutic doses above 8mg/week.',
    facts: [
      { label: 'Supply at 12mg/wk', value: '5 weeks', sub: 'max Phase 2 dose' },
      { label: 'Supply at 6mg/wk', value: '10 weeks', sub: 'standard therapeutic' },
      { label: 'Max Phase 2 dose', value: '12mg/week', sub: 'clinical data limit' },
      { label: 'Cost per mg', value: 'Best in range', sub: 'lowest unit cost' },
      { label: 'Glucagon ceiling', value: 'Self-limiting', sub: 'GI tolerance governs dose' },
      { label: 'Protocol type', value: 'Advanced only', sub: 'not for beginners' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'glp-1cglp-1s-5mg': {
    heading: 'CagriSema — Dual Amylin + GLP-1 Mechanism',
    intro: 'Cagrilintide (long-acting amylin analog) + semaglutide combined. Amylin acts on a completely separate pathway from GLP-1 — producing additive appetite suppression and unique fat loss effects.',
    facts: [
      { label: 'Components', value: 'Cagrilintide + Sema', sub: 'amylin + GLP-1 analog' },
      { label: 'Receptor pathways', value: '2 distinct', sub: 'amylin + GLP-1R' },
      { label: 'Phase 2 weight loss', value: '~15.6%', sub: 'at 2.4mg/2.4mg combo' },
      { label: 'Amylin half-life', value: '~7 days', sub: 'weekly injection for both' },
      { label: 'GI side effects', value: 'Comparable to sema', sub: 'amylin adds satiety' },
      { label: 'Pipeline status', value: 'Phase 3 (REDEFINE)', sub: 'Novo Nordisk 2024' },
    ],
    accentClass: 'bg-blue-500/5 border-blue-500/20 text-blue-400',
    iconNode: <TrendingDown className="w-5 h-5 text-blue-400" />,
  },
  'cjc1295-ipamorelin': {
    heading: 'CJC-1295 / Ipamorelin — GH Axis Data',
    intro: 'CJC-1295 (GHRH analog) + Ipamorelin (ghrelin mimetic) create a synergistic GH pulse without cortisol or prolactin elevation — the cleanest GH stack available.',
    facts: [
      { label: 'GH pulse increase', value: '200–300%', sub: 'above baseline at peak' },
      { label: 'Cortisol impact', value: 'None', sub: 'ipamorelin selective' },
      { label: 'Prolactin impact', value: 'None', sub: 'vs. GHRP-2/GHRP-6' },
      { label: 'HPTA suppression', value: 'Zero', sub: 'no PCT required' },
      { label: 'CJC-1295 half-life', value: '6–8 days', sub: 'with DAC modification' },
      { label: 'Timing', value: 'Fasted + pre-sleep', sub: 'maximize GH amplitude' },
    ],
    accentClass: 'bg-amber-500/5 border-amber-500/20 text-amber-400',
    iconNode: <Activity className="w-5 h-5 text-amber-400" />,
  },
  'igf-1lr3': {
    heading: 'IGF-1 LR3 — Downstream Anabolic Data',
    intro: 'IGF-1 LR3 is a modified version of insulin-like growth factor 1 with an arginine substitution that prevents binding protein deactivation — extending half-life 13x over native IGF-1.',
    facts: [
      { label: 'vs. native IGF-1 t½', value: '13× longer', sub: 'Arg3 substitution' },
      { label: 'Half-life', value: '20–30 hours', sub: 'once-daily dosing' },
      { label: 'Primary action', value: 'Satellite cell activation', sub: 'muscle hyperplasia' },
      { label: 'Cycle length', value: '4–6 weeks', sub: 'then 4 weeks off' },
      { label: 'Dose range', value: '20–100mcg/day', sub: 'post-workout or AM fasted' },
      { label: 'Synergy', value: 'CJC-1295/Ipa', sub: 'covers full GH/IGF axis' },
    ],
    accentClass: 'bg-amber-500/5 border-amber-500/20 text-amber-400',
    iconNode: <Activity className="w-5 h-5 text-amber-400" />,
  },
  'ghk-cu': {
    heading: 'GHK-CU — Gene Expression Data',
    intro: 'GHK (Gly-His-Lys) copper complex — a naturally occurring tripeptide found in human plasma that modulates over 4,000 genes and declines sharply with age.',
    facts: [
      { label: 'Genes modulated', value: '4,000+', sub: 'genomic analysis' },
      { label: 'Plasma level at 20', value: '200 ng/mL', sub: 'declines to 80 by 60' },
      { label: 'Collagen production', value: '+300%', sub: 'in dermal fibroblasts' },
      { label: 'Anti-inflammatory', value: '12 cytokines', sub: 'downregulated' },
      { label: 'Routes', value: 'SC + topical', sub: 'dual administration' },
      { label: 'Skin application', value: 'SNAP-8 stack', sub: 'copper + SNAP-8 combo' },
    ],
    accentClass: 'bg-purple-500/5 border-purple-500/20 text-purple-400',
    iconNode: <Leaf className="w-5 h-5 text-purple-400" />,
  },
  'epithalon-50mg': {
    heading: 'Epithalon — Telomere Biology',
    intro: 'Epithalon (Ala-Glu-Asp-Gly) is a synthetic tetrapeptide developed by the St. Petersburg Institute of Bioregulation. It activates telomerase — the enzyme that rebuilds telomere caps on chromosomes.',
    facts: [
      { label: 'Amino acids', value: '4', sub: 'Ala-Glu-Asp-Gly' },
      { label: 'Mechanism', value: 'Telomerase activation', sub: 'via TERT expression' },
      { label: 'Telomere response', value: 'Lengthening', sub: 'demonstrated in studies' },
      { label: 'Course length', value: '10–20 days', sub: '1–2× per year' },
      { label: 'Developed by', value: 'St. Petersburg IB', sub: 'Vladimir Khavinson' },
      { label: 'Lifespan result', value: '+24% in mice', sub: 'Khavinson, 2003' },
    ],
    accentClass: 'bg-purple-500/5 border-purple-500/20 text-purple-400',
    iconNode: <Leaf className="w-5 h-5 text-purple-400" />,
  },
  'nad': {
    heading: 'NAD+ — Cellular Energy Metabolism',
    intro: 'Nicotinamide adenine dinucleotide — the central coenzyme in cellular respiration. NAD+ levels drop ~50% between age 20 and 60, directly driving mitochondrial decline, DNA damage accumulation, and SIRT1/SIRT3 deactivation. Restoring NAD+ reverses this decline for measurable energy and longevity benefits.',
    facts: [
      { label: 'NAD+ decline', value: '~50%', sub: 'from age 20 to 60' },
      { label: 'Sirtuin activation', value: 'SIRT1–7', sub: 'NAD+-dependent enzymes' },
      { label: 'PARP-1 fuel', value: 'DNA repair', sub: 'requires NAD+ as substrate' },
      { label: 'Mitochondria', value: 'Biogenesis', sub: 'via PGC-1α upregulation' },
      { label: 'Injection timing', value: 'AM fasted', sub: 'matches circadian NAD+' },
      { label: 'Synergy', value: 'Epithalon + GHK-CU', sub: 'longevity stack core' },
    ],
    accentClass: 'bg-purple-500/5 border-purple-500/20 text-purple-400',
    iconNode: <Leaf className="w-5 h-5 text-purple-400" />,
  },
  'snap-8': {
    heading: 'SNAP-8 — SNARE Complex Inhibition',
    intro: 'SNAP-8 is an octapeptide (8 amino acids) that mimics the N-terminal end of SNAP-25 — a protein in the SNARE complex that governs neurotransmitter-driven muscle contraction, including the micro-contractions that cause expression lines.',
    facts: [
      { label: 'Amino acids', value: '8', sub: 'SNAP-25 N-terminal mimic' },
      { label: 'Target', value: 'SNARE complex', sub: 'blocks vesicle docking' },
      { label: 'Expression line reduction', value: 'Up to 63%', sub: 'clinically demonstrated' },
      { label: 'vs. Botox', value: 'Topical, no injection', sub: 'convenient, non-invasive' },
      { label: 'Application sites', value: 'Forehead, eyes, lips', sub: 'expression-line zones' },
      { label: 'Stack with', value: 'GHK-CU topical', sub: 'comprehensive skin protocol' },
    ],
    accentClass: 'bg-purple-500/5 border-purple-500/20 text-purple-400',
    iconNode: <Leaf className="w-5 h-5 text-purple-400" />,
  },
  'bacteriostatic-water-reconstitution-solution-10ml': {
    heading: 'Bacteriostatic Water — Reconstitution Reference',
    intro: '0.9% benzyl alcohol preservative solution — bacteriostatic water is required for reconstituting all injectable peptides. One 10ml vial reconstitutes multiple peptide vials.',
    facts: [
      { label: 'Preservative', value: '0.9% BnOH', sub: 'benzyl alcohol' },
      { label: 'Shelf life after opening', value: '28 days', sub: 'refrigerated' },
      { label: 'Sterility', value: 'Multi-draw safe', sub: 'inhibits bacterial growth' },
      { label: 'vs. sterile water', value: 'Preferred', sub: 'multi-use vials only' },
      { label: 'Typical use', value: '1–5ml per peptide', sub: 'per reconstitution' },
      { label: 'One vial covers', value: '2–5 peptide vials', sub: 'depending on dose' },
    ],
    accentClass: 'bg-gray-500/5 border-gray-500/20 text-gray-400',
    iconNode: <Package className="w-5 h-5 text-gray-400" />,
  },
};

function ProductFactBox({ slug, accent }: { slug: string; accent: { badge: string; border: string } }) {
  const data = productFacts[slug];
  if (!data) return null;

  return (
    <div className={`border rounded-2xl p-6 ${data.accentClass}`}>
      <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
        {data.iconNode}
        {data.heading}
      </h2>
      <p className="text-base text-gray-300 mb-6 leading-relaxed">{data.intro}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {data.facts.map(f => (
          <div key={f.label} className="bg-white/5 rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-1">{f.label}</p>
            <p className="font-bold text-white text-base leading-tight">{f.value}</p>
            {f.sub && <p className="text-sm text-gray-500 mt-0.5">{f.sub}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const accent = categoryAccent[product.category] ?? categoryAccent['healing'];

  const deepDive = getDeepDive(product.slug);

  const synergies = product.synergies
    .map(s => allProducts.find(p => p.slug === s))
    .filter(Boolean) as typeof allProducts;

  const faqs = productFaqs[product.slug] ?? [];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://maxxingpeptides.com' },
      { '@type': 'ListItem', position: 2, name: 'All Peptides', item: 'https://maxxingpeptides.com/products' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://maxxingpeptides.com/products/${product.slug}` },
    ],
  };

  const faqSchema = faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: `https://maxxingpeptides.com${product.image}`,
    brand: { '@type': 'Brand', name: 'Phiogen' },
    offers: {
      '@type': 'Offer',
      url: product.affiliateUrl,
      priceCurrency: 'USD',
      price: String(product.price),
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Phiogen' },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Breadcrumb */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        All Peptides
      </Link>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* ── Main content ─────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-8">

          {/* Hero: Image + header */}
          <AnimateIn>
            <div className={`bg-[#111] border ${accent.border} rounded-2xl overflow-hidden`}>
              {/* Product image */}
              <div className={`relative h-48 sm:h-72 ${accent.glow} flex items-center justify-center p-6 sm:p-8`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Header below image */}
              <div className="p-6 sm:p-8 border-t border-white/5">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1 capitalize ${accent.badge}`}>
                    {accent.icon}
                    {product.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < product.researchRating ? 'text-brand-400 fill-brand-400' : 'text-gray-700'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-400 ml-1">Quality Rating</span>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-3">
                  Buy {product.name}
                </h1>
                <p className="text-xl text-gray-400">{product.tagline}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.highlights.map(h => (
                    <span key={h} className="text-base text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-lg px-3 py-1.5">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Who This Is For */}
          {product.whoIsFor && (
            <AnimateIn delay={0.06}>
              <div className={`flex items-start gap-4 border rounded-2xl p-6 ${accent.border} bg-white/3`}>
                <div className="shrink-0 mt-1">
                  {accent.icon}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Who This Is For</p>
                  <p className="text-white text-lg leading-relaxed font-medium">{product.whoIsFor}</p>
                </div>
              </div>
            </AnimateIn>
          )}

          {/* Product-specific Snapshot */}
          <AnimateIn delay={0.08}>
            <ProductFactBox slug={product.slug} accent={accent} />
          </AnimateIn>

          {/* Overview & Benefits */}
          <AnimateIn delay={0.1}>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-5">Overview & Benefits</h2>
              <div className="whitespace-pre-line text-gray-300 leading-relaxed text-base">
                {product.fullDescription}
              </div>
            </div>
          </AnimateIn>

          {/* Key Benefits */}
          <AnimateIn delay={0.15}>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-5">Key Benefits</h2>
              <ul className="space-y-4">
                {product.benefits.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-6 h-6 mt-0.5 shrink-0 ${
                      product.category === 'healing' ? 'text-emerald-400' :
                      product.category === 'fat-loss' ? 'text-blue-400' :
                      product.category === 'performance' ? 'text-amber-400' :
                      product.category === 'anti-aging' ? 'text-purple-400' :
                      'text-brand-400'
                    }`} />
                    <span className="text-gray-300 text-base leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* Protocols & Dosing */}
          <AnimateIn delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">Protocols & Dosing</h2>
              <div className="space-y-4">
                {product.protocols.map(protocol => (
                  <div key={protocol.name} className="bg-[#111] border border-white/5 rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <h3 className="font-bold text-white text-lg">{protocol.name}</h3>
                      <span className={`flex items-center gap-1.5 text-sm border rounded-full px-3 py-1 ${accent.badge}`}>
                        <Clock className="w-4 h-4" />
                        {protocol.schedule}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className={`w-5 h-5 shrink-0 ${
                        product.category === 'healing' ? 'text-emerald-400' :
                        product.category === 'fat-loss' ? 'text-blue-400' :
                        product.category === 'performance' ? 'text-amber-400' :
                        'text-purple-400'
                      }`} />
                      <span className="text-base font-mono text-brand-300">{protocol.dose}</span>
                    </div>
                    <p className="text-base text-gray-400 leading-relaxed">{protocol.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* ── Deep Dive Sections ────────────────────────────────── */}
          {deepDive && (
            <>
              {/* Mechanism Deep Dive */}
              <AnimateIn delay={0.22}>
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-white mb-5">{deepDive.mechanismTitle}</h2>
                  <div className="text-gray-300 leading-relaxed text-base space-y-4 whitespace-pre-line">
                    {deepDive.mechanismBody}
                  </div>
                </div>
              </AnimateIn>

              {/* Research Evidence */}
              <AnimateIn delay={0.24}>
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-white mb-5">{deepDive.researchTitle}</h2>
                  <div className="text-gray-300 leading-relaxed text-base space-y-4 whitespace-pre-line mb-6">
                    {deepDive.researchBody}
                  </div>
                  {deepDive.studies.length > 0 && (
                    <div className="border-t border-white/5 pt-5">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Studies</h3>
                      <div className="space-y-3">
                        {deepDive.studies.map((s, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="w-5 h-5 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-brand-400 text-xs font-bold">{i + 1}</span>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-0.5">{s.citation}</p>
                              <p className="text-sm text-gray-300 leading-relaxed">{s.finding}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AnimateIn>

              {/* Safety Profile */}
              <AnimateIn delay={0.26}>
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-white mb-5">Safety Profile & Side Effects</h2>
                  <div className="space-y-4">
                    {deepDive.sideEffects.map((se, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="shrink-0 mt-1">
                          <span className={`inline-block w-2.5 h-2.5 rounded-full ${
                            se.severity === 'low' ? 'bg-emerald-400' :
                            se.severity === 'moderate' ? 'bg-yellow-400' :
                            'bg-red-400'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-white text-sm">{se.name}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              se.severity === 'low' ? 'bg-emerald-500/10 text-emerald-400' :
                              se.severity === 'moderate' ? 'bg-yellow-500/10 text-yellow-400' :
                              'bg-red-500/10 text-red-400'
                            }`}>{se.severity}</span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{se.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Buyer's Guide */}
              <AnimateIn delay={0.28}>
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-white mb-5">{deepDive.buyersGuideTitle}</h2>
                  <div className="text-gray-300 leading-relaxed text-base space-y-4 whitespace-pre-line">
                    {deepDive.buyersGuideBody}
                  </div>
                </div>
              </AnimateIn>

              {/* vs. Alternatives */}
              {deepDive.vsAlternativesTitle && deepDive.vsAlternativesBody && (
                <AnimateIn delay={0.30}>
                  <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-white mb-5">{deepDive.vsAlternativesTitle}</h2>
                    <div className="text-gray-300 leading-relaxed text-base space-y-4 whitespace-pre-line">
                      {deepDive.vsAlternativesBody}
                    </div>
                  </div>
                </AnimateIn>
              )}
            </>
          )}

          {/* Stack With These Peptides */}
          {synergies.filter(s => s.productType !== 'supply').length > 0 && (
            <AnimateIn delay={0.25}>
              <div>
                <h2 className="text-xl font-bold text-white mb-5">Stack With These Peptides</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {synergies.filter(s => s.productType !== 'supply').slice(0, 4).map(syn => (
                    <div key={syn.slug} className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden flex items-center gap-4 p-4 hover:border-brand-500/20 transition-colors group">
                      <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-[#0d0d0d] flex items-center justify-center p-1.5">
                        <img
                          src={syn.image}
                          alt={syn.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white text-sm group-hover:text-brand-300 transition-colors truncate">{syn.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{syn.category.replace('-', ' ')}</p>
                      </div>
                      <Link
                        href={`/products/${syn.slug}`}
                        className="text-xs text-brand-400 hover:text-brand-300 shrink-0"
                      >
                        View →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          )}
        </div>

        {/* ── Sidebar ───────────────────────────────────────────────── */}
        <div className="space-y-6">
          {/* Buy card */}
          <AnimateIn direction="left">
            <div className={`bg-[#111] border ${accent.border} rounded-2xl p-6 sticky top-24`}>
              {/* Product thumbnail in sidebar */}
              <div className="h-44 rounded-xl overflow-hidden bg-[#0d0d0d] mb-5 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-white text-lg">Buy {product.name}</h3>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-brand-400 mb-5">${product.price}</p>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full flex items-center justify-center gap-2 py-4 bg-brand-500 hover:bg-brand-400 text-black font-black rounded-xl text-base transition-colors mb-2"
              >
                Buy Now — ${product.price}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full flex items-center justify-center gap-2 py-3 border border-brand-500/40 hover:border-brand-500 text-brand-400 hover:text-brand-300 font-semibold rounded-xl text-sm transition-colors mb-4"
              >
                View at Phiogen
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-gray-500 text-center mb-5">
                Research-grade · COA verified · Ships from Phiogen
              </p>
              <div className="border-t border-white/5 pt-5 space-y-3">
                {[
                  ['Category', product.category.replace('-', ' ')],
                  ['Type', product.productType],
                  ['Quality Rating', `${'★'.repeat(product.researchRating)}${'☆'.repeat(5 - product.researchRating)}`],
                  ['Vendor', 'Phiogen'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{label}</span>
                    <span className="text-gray-300 text-right capitalize max-w-[60%]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Synergies list */}
          {synergies.length > 0 && (
            <AnimateIn direction="left" delay={0.1}>
              <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4">Also Needed</h3>
                <div className="space-y-2">
                  {synergies.slice(0, 5).map(syn => (
                    <Link
                      key={syn.slug}
                      href={`/products/${syn.slug}`}
                      className="flex items-center gap-3 p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group"
                    >
                      <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden bg-[#0d0d0d] flex items-center justify-center p-1">
                        <img src={syn.image} alt={syn.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                          {syn.name}
                        </p>
                        <p className="text-xs text-gray-600 capitalize">{syn.category.replace('-', ' ')}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimateIn>
          )}
        </div>
      </div>

      {faqs.length > 0 && (
        <div className="mt-16 border-t border-white/5 pt-12">
          <h2 className="text-2xl font-black text-white mb-6">
            Common Questions About {product.name.split(' ').slice(0, 2).join(' ')}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-base text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      )}

      <RelatedLinks pageKey={product.slug} />

      {/* Mobile sticky buy bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-t border-white/10 p-4 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-white font-bold text-sm truncate">{product.name}</p>
          <p className="text-brand-400 font-black text-lg">${product.price}</p>
        </div>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center gap-2 px-6 py-3.5 bg-brand-500 hover:bg-brand-400 text-black font-black rounded-xl text-sm transition-colors shrink-0"
        >
          Buy Now
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      {/* Spacer for mobile sticky bar */}
      <div className="lg:hidden h-24" />
    </div>
  );
}

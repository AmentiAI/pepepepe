export type Stack = {
  slug: string;
  name: string;
  tagline: string;
  goal: string;
  products: string[];
  description: string;
  protocol: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeframe: string;
  cost: number;
  highlights: string[];
  seoTitle: string;
};

export const allStacks: Stack[] = [
  {
    slug: 'healing-recovery-stack',
    name: 'Healing & Recovery Stack',
    tagline: 'BPC-157 + TB-500 + GHK-CU — the complete tissue repair protocol for injuries, surgery, and overtraining',
    goal: 'healing',
    products: ['bpc157-10mg', 'tb500-10mg', 'ghk-cu', 'bacteriostatic-water-reconstitution-solution-10ml'],
    description: `This is the gold standard healing peptide stack, combining the three most effective tissue repair peptides: BPC-157 for local receptor upregulation and angiogenesis at the injury site, TB-500 for systemic stem cell recruitment and extracellular matrix remodeling, and GHK-CU for collagen synthesis, blood vessel repair, and broad gene expression modulation across the healing cascade.

These three peptides operate through entirely complementary mechanisms — covering every phase of the tissue repair process. BPC-157 works locally and is most effective injected near the injury site, handling the initial phase of growth hormone receptor upregulation and local capillary formation. TB-500 works systemically and can be injected anywhere, delivering healing signals throughout the body and driving stem cell migration to damaged areas. GHK-CU covers the collagen remodeling phase, upregulating the enzymes and gene expression programs that rebuild proper tissue architecture.

The combination is synergistic, not merely additive. Angiogenesis, stem cell mobilization, and extracellular matrix remodeling are interdependent — acceleration of one phase without the others creates bottlenecks that limit overall healing velocity. This stack removes those bottlenecks simultaneously.

Clinical applications: acute sports injuries (tendon tears, muscle strains, ligament sprains), post-surgical recovery, chronic tendinopathy, joint inflammation, gut healing (BPC-157 oral route), and nerve injury. Most users report noticeable improvement in pain and functional range of motion within 2–3 weeks.`,
    protocol: `WEEK 1–4 (Loading Phase):
• BPC-157: 500mcg/day subcutaneous, near injury site if accessible
• TB-500: 2.5mg twice weekly subcutaneous (any site — typically abdomen)
• GHK-CU: 1mg/day subcutaneous (abdomen or thigh)

WEEK 5–8 (Maintenance Phase):
• BPC-157: 250mcg/day
• TB-500: 2.0mg once weekly
• GHK-CU: 1mg/day (continue — collagen remodeling is a slow process)

RECONSTITUTION GUIDE:
• BPC-157 10mg + 2ml bac water = 5,000mcg/ml. Draw 0.1ml per 500mcg dose.
• TB-500 10mg + 2ml bac water = 5,000mcg/ml. Draw 0.5ml per 2.5mg dose.
• GHK-CU 50mg + 5ml bac water = 10,000mcg/ml. Draw 0.1ml per 1mg dose.

Use 29–31g insulin syringes. Rotate injection sites to prevent scar tissue. Refrigerate reconstituted vials at 2–8°C, use within 28 days.`,
    difficulty: 'Intermediate',
    timeframe: '4–8 weeks for acute injury; 8–12 weeks for chronic',
    cost: 179.97,
    highlights: ['All three repair phases covered', 'Local + systemic reach', '4–8 week protocol'],
    seoTitle: 'Healing & Recovery Stack — BPC-157 + TB-500 + GHK-CU Protocol | PeptideProtocols',
  },
  {
    slug: 'beginner-fat-loss-protocol',
    name: 'Beginner Fat Loss Protocol',
    tagline: 'Semaglutide starter stack — GLP-1 appetite suppression with proper reconstitution and titration guide',
    goal: 'fat-loss',
    products: ['glp-1s-5mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    description: `The Beginner Fat Loss Protocol is designed for users new to GLP-1 receptor agonists who want to start with semaglutide — the most proven and well-established GLP-1 peptide, equivalent in mechanism to FDA-approved Ozempic and Wegovy.

Semaglutide is the ideal starting point for GLP-1 protocols because its half-life, tolerability profile, and clinical evidence base are the most well-established. The 5mg vial provides approximately 20 weeks of dosing at the starting 0.25mg/week dose, giving new users ample time to find their effective dose without purchasing more peptide than needed before confirming personal tolerance.

The titration approach is critical for GLP-1 beginners. Starting low and escalating slowly is not optional — it is the primary harm reduction strategy that determines whether the protocol is enjoyable or plagued by nausea. The slow titration schedule mirrors the clinical approach used in the STEP trials and significantly reduces side effect severity.

Most beginners experience meaningful appetite reduction within 2–4 weeks at 0.5mg/week, making this dose the common "staying point" for users who achieve adequate fat loss without escalating further.`,
    protocol: `RECONSTITUTION:
• Add 2ml bacteriostatic water to 5mg semaglutide vial
• Concentration: 2,500mcg/ml (2.5mg/ml)
• 0.1ml = 250mcg | 0.2ml = 500mcg | 0.4ml = 1mg

TITRATION SCHEDULE (Once Weekly Injection):
• Weeks 1–4: 0.25mg (draw 0.1ml)
• Weeks 5–8: 0.5mg (draw 0.2ml)
• Weeks 9–12: 1.0mg (draw 0.4ml)
• Weeks 13+: Maintain at 0.5–1.0mg based on appetite suppression

INJECTION: Subcutaneous — abdomen (preferred), upper thigh, or outer upper arm. Rotate sites weekly. Use 29–31g insulin syringe.

SIDE EFFECT MANAGEMENT:
• Nausea: Take dose in evening, eat bland foods for 24h after injection
• If severe: Hold at previous dose 2 additional weeks before escalating
• Refrigerate reconstituted vial; use within 28 days`,
    difficulty: 'Beginner',
    timeframe: '12–20 weeks for first protocol',
    cost: 89.98,
    highlights: ['20-week beginner supply', 'Full titration guide', 'Same as Ozempic/Wegovy'],
    seoTitle: 'Beginner Semaglutide Fat Loss Protocol | PeptideProtocols',
  },
  {
    slug: 'advanced-recomp-stack',
    name: 'Advanced Body Recomposition Stack',
    tagline: 'Tirzepatide + CJC-1295/Ipamorelin — simultaneous fat loss and muscle gain through dual metabolic mechanisms',
    goal: 'fat-loss',
    products: ['glp-2t-15mg', 'cjc1295-ipamorelin', 'bacteriostatic-water-reconstitution-solution-10ml'],
    description: `The Advanced Body Recomposition Stack pairs tirzepatide (dual GLP-1/GIP agonist) with CJC-1295/Ipamorelin (GH secretagogue stack) to achieve simultaneous fat loss and lean mass gain — creating the conditions for true body recomposition rather than simple weight loss.

Tirzepatide drives aggressive fat loss through the strongest dual-agonist mechanism available: GLP-1 receptor suppression of appetite combined with GIP receptor enhancement of fat oxidation and insulin sensitivity. In the SURMOUNT trials, tirzepatide at 15mg/week produced 22.5% body weight loss — predominantly from fat, with preservation of lean mass.

CJC-1295/Ipamorelin provides the anabolic counterbalance: by stimulating natural pulsatile GH release, the GH secretagogue stack increases IGF-1 levels, promotes satellite cell activation, and enhances protein synthesis — creating an anabolic signal that preferentially builds lean mass while tirzepatide's caloric deficit drives fat mobilization.

The metabolic result is what practitioners call a "body composition favorable environment": simultaneous caloric deficit combined with elevated anabolic signaling that instructs the body to oxidize fat stores while maintaining or increasing lean tissue.`,
    protocol: `TIRZEPATIDE PROTOCOL (Once Weekly):
Reconstitute: 15mg + 2ml bac water = 7,500mcg/ml
• Weeks 1–4: 2.5mg | Weeks 5–8: 5mg | Weeks 9–12: 7.5mg
• Maintenance: 7.5–15mg based on response and tolerance

CJC-1295/IPAMORELIN (Daily, concurrent):
• 100mcg each, subcutaneous, nightly 30–60 min before sleep
• Empty stomach required — last meal ≥3 hours prior
• Run continuously alongside tirzepatide

DIET NON-NEGOTIABLES:
• Minimum 1.6g protein per kg lean body mass daily
• Without adequate protein, tirzepatide's deficit increases muscle catabolism
• Track macros — do not rely on hunger signals (tirzepatide suppresses them)

MONITORING: Weekly weight. Monthly DEXA/InBody if available — track fat vs. lean mass separately.`,
    difficulty: 'Advanced',
    timeframe: '12–24 weeks',
    cost: 209.98,
    highlights: ['Simultaneous fat loss + muscle gain', 'Dual GLP-1/GIP + GH', '12–24 week recomp'],
    seoTitle: 'Advanced Body Recomposition Stack — Tirzepatide + CJC-1295/Ipamorelin | PeptideProtocols',
  },
  {
    slug: 'gh-optimization-stack',
    name: 'GH Optimization Stack',
    tagline: 'CJC-1295/Ipamorelin + IGF-1 LR3 — complete growth hormone axis protocol for performance and muscle hyperplasia',
    goal: 'performance',
    products: ['cjc1295-ipamorelin', 'igf-1lr3', 'bacteriostatic-water-reconstitution-solution-10ml'],
    description: `The GH Optimization Stack combines CJC-1295/Ipamorelin (upstream GH axis stimulation) with IGF-1 LR3 (downstream IGF-1 axis execution) to create a complete growth hormone axis protocol addressing both the signaling and execution phases of GH-mediated anabolism.

CJC-1295/Ipamorelin stimulates the pituitary to release natural, pulsatile GH using two complementary receptor pathways for synergistic effect. This elevated GH pulse then signals the liver to produce IGF-1, which travels to muscle tissue where it activates satellite cells and promotes protein synthesis.

IGF-1 LR3 amplifies this downstream phase by providing exogenous long-acting IGF-1 directly — bypassing the liver conversion step and delivering 20–30 hour half-life IGF-1 that saturates skeletal muscle receptors. Locally injected into the trained muscle immediately post-workout, it activates satellite cells at the exact site where muscle damage and repair are occurring.

The combined effect: CJC/Ipa provides systemic, sustained GH elevation for anabolism, fat mobilization, and recovery. IGF-1 LR3 provides targeted satellite cell activation for muscle-specific hyperplasia — the creation of new muscle fibers, not just enlargement of existing ones.`,
    protocol: `CJC-1295/IPAMORELIN (Continuous 12–16 weeks):
• 100mcg each, subcutaneous, nightly before sleep (empty stomach)
• Optional: add morning fasted dose for enhanced body composition
• 4 weeks off after each 12–16 week cycle

IGF-1 LR3 (4–6 week cycles within the CJC/Ipa run):
Reconstitute: 0.1mg + 1ml bac water = 100mcg/ml
• Dose: 20–50mcg IM into trained muscle, immediately post-workout
• Cycle: Weeks 1–6 ON, Weeks 7–12 OFF, Weeks 13–18 ON
• Never inject on empty stomach — hypoglycemia risk. Keep glucose source available.

CYCLE EXAMPLE:
• Weeks 1–16: CJC/Ipa nightly
• Weeks 1–6 + 13–18: IGF-1 LR3 post-workout
• Week 17+: 4-week CJC/Ipa rest, then repeat`,
    difficulty: 'Intermediate',
    timeframe: '12–16 week cycle, repeat 2–3× per year',
    cost: 139.98,
    highlights: ['Complete GH axis coverage', 'Muscle hyperplasia', '12–16 week cycle'],
    seoTitle: 'GH Optimization Stack — CJC-1295/Ipamorelin + IGF-1 LR3 Protocol | PeptideProtocols',
  },
  {
    slug: 'longevity-anti-aging-stack',
    name: 'Longevity Anti-Aging Stack',
    tagline: 'Epithalon + GHK-CU + NAD+ — the three-pathway approach to biological age reversal',
    goal: 'anti-aging',
    products: ['epithalon-50mg', 'ghk-cu', 'nad', 'bacteriostatic-water-reconstitution-solution-10ml'],
    description: `The Longevity Anti-Aging Stack addresses biological aging through three distinct and complementary mechanisms: telomere length restoration (Epithalon), gene expression reset (GHK-CU), and mitochondrial energy pathway restoration (NAD+). Together, they cover the three most actionable molecular hallmarks of aging at the cellular level.

Epithalon activates telomerase — the enzyme that rebuilds telomere caps that shorten with each cell division. A 15-year human follow-up study showed significantly reduced all-cause mortality and cancer incidence in patients who received annual Epithalon courses. No other longevity peptide has this depth of longitudinal human evidence.

GHK-CU modulates approximately 4,000 human genes — shifting gene expression from an aged pattern (elevated inflammation, downregulated repair) toward a younger pattern. This epigenetic reset addresses a fundamental mechanism of aging that neither Epithalon nor NAD+ covers.

NAD+ restoration addresses the metabolic core of aging: the 50% NAD+ decline by age 50 drives mitochondrial dysfunction, reduces DNA repair capacity (PARP enzymes), and silences sirtuins (longevity genes). Restoring NAD+ reverses mitochondrial dysfunction and enables continuous DNA repair.`,
    protocol: `COURSE STRUCTURE (Run 2–3× per year, 10–20 days each):

EPITHALON (10–20 day intensive course):
Reconstitute: 50mg + 5ml bac water = 10,000mcg/ml
• Dose: 5–10mg/day subcutaneous, morning
• Course 2× per year; off 4–6 months between courses

GHK-CU (Ongoing, 8–12 week runs):
Reconstitute: 50mg + 5ml bac water = 10,000mcg/ml
• Dose: 1–2mg/day subcutaneous
• Run alongside Epithalon course and continue 4–8 weeks after

NAD+ (Continuous maintenance):
Reconstitute: 500mg + 5ml bac water = 100mg/ml
• Dose: 100–250mg subcutaneous, 2–3× weekly
• Start at 100mg — flushing common at higher doses, titrate up
• Option: 50mg daily micro-dose to minimize flushing

COMBINED 20-DAY COURSE:
• AM: Epithalon 5–10mg + NAD+ 100mg (on NAD+ days)
• PM: GHK-CU 1mg
• After day 20: Continue GHK-CU + NAD+; Epithalon course complete`,
    difficulty: 'Advanced',
    timeframe: 'Ongoing — 2–3 intensive courses per year',
    cost: 269.97,
    highlights: ['Three aging pathways', 'Khavinson Epithalon protocol', '15-year human study data'],
    seoTitle: 'Longevity Anti-Aging Stack — Epithalon + GHK-CU + NAD+ Protocol | PeptideProtocols',
  },
  {
    slug: 'elite-performance-stack',
    name: 'Elite Performance Stack',
    tagline: 'CJC-1295/Ipamorelin + IGF-1 LR3 + BPC-157 — mass building, recovery, and injury prevention in one protocol',
    goal: 'performance',
    products: ['cjc1295-ipamorelin', 'igf-1lr3', 'bpc157-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    description: `The Elite Performance Stack is the most comprehensive peptide protocol for serious athletes — combining GH secretagogue anabolism (CJC-1295/Ipamorelin), direct IGF-1 axis stimulation for muscle hyperplasia (IGF-1 LR3), and continuous injury prevention and repair (BPC-157).

The addition of BPC-157 is what elevates this stack. Athletes training at intensities required to maximize GH and IGF-1 anabolic benefits inevitably accumulate microtrauma and overuse injuries that become limitations on training capacity. BPC-157 provides continuous background healing — keeping tendons, ligaments, and attachment points healthy enough to sustain the training loads that generate maximum anabolic stimulus.

This stack also creates an anti-catabolic dynamic: GH + IGF-1 LR3 drive anabolism; BPC-157 reduces training-induced inflammation and tissue damage; together they shift the net tissue balance strongly positive. Users typically report dramatically faster recovery between sessions, improved joint comfort at higher training loads, and progressive body composition changes over 3–4 months.

Recommended for experienced athletes who have trained consistently for 3+ years and are seeking to optimize training response at the hormonal and cellular level without exogenous hormones.`,
    protocol: `CJC-1295/IPAMORELIN (Continuous 12–16 weeks):
• 100mcg each, nightly before sleep (empty stomach, last meal ≥3h)
• Optional morning fasted dose for enhanced body composition
• 4 weeks off after each 16-week cycle

IGF-1 LR3 (Cycled):
Reconstitute: 0.1mg + 1ml bac water = 100mcg/ml
• 20–50mcg IM into trained muscle immediately post-workout
• Weeks 1–6 ON, Weeks 7–12 OFF, Weeks 13–18 ON

BPC-157 (Continuous throughout):
Reconstitute: 10mg + 2ml bac water = 5,000mcg/ml
• 250–500mcg/day subcutaneous near highest-stress joint/tendon
• Can be continued indefinitely — no known long-term toxicity

NUTRITION REQUIREMENTS:
• Caloric surplus: +200–300 kcal above TDEE
• Protein: 1.8–2.2g per kg bodyweight
• Training: minimum 4 sessions/week with progressive overload`,
    difficulty: 'Advanced',
    timeframe: '12–16 week cycles, 2–3 per year',
    cost: 199.97,
    highlights: ['Anabolism + recovery + injury prevention', 'No hormonal shutdown', 'Elite training amplifier'],
    seoTitle: 'Elite Performance Stack — CJC-1295/Ipa + IGF-1 LR3 + BPC-157 | PeptideProtocols',
  },
];

export function getStackBySlug(slug: string): Stack | undefined {
  return allStacks.find(s => s.slug === slug);
}

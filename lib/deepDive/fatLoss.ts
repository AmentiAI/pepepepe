import type { DeepDiveMap } from './types';

export const fatLossDeepDive: DeepDiveMap = {
  // ─────────────────────────────────────────────
  // SEMAGLUTIDE 5 mg
  // ─────────────────────────────────────────────
  'glp-1s-5mg': {
    mechanismTitle: 'How Semaglutide Works: GLP-1 Receptor Agonism and Energy Homeostasis',
    mechanismBody: `Semaglutide is a synthetic analogue of human glucagon-like peptide-1 (GLP-1), an incretin hormone secreted predominantly by L-cells of the distal small intestine in response to nutrient ingestion. Native GLP-1 has a plasma half-life of roughly 2 minutes owing to rapid degradation by dipeptidyl peptidase-4 (DPP-4) and neutral endopeptidase. Semaglutide circumvents this limitation through two critical structural modifications: a C-18 fatty diacid chain attached via a linker to lysine at position 26, enabling reversible, high-affinity binding to albumin, and two amino-acid substitutions (Aib at position 8 and arginine at position 34) that confer near-complete DPP-4 resistance. The result is a half-life exceeding 165 hours, enabling once-weekly subcutaneous dosing with remarkably stable plasma concentrations.

At the cellular level, semaglutide engages the GLP-1 receptor (GLP-1R), a class B G-protein-coupled receptor expressed in pancreatic beta-cells, hypothalamic nuclei, vagal afferents, gastric parietal cells, cardiac myocytes, and adipose tissue. Receptor occupation triggers Gs-mediated adenylyl cyclase activation, elevating intracellular cyclic AMP (cAMP) and activating protein kinase A (PKA). In pancreatic beta-cells this cascade potentiates glucose-stimulated insulin secretion while suppressing glucagon release from alpha-cells, collectively lowering postprandial glucose excursions without imposing hypoglycemia risk in euglycemic conditions. In hypothalamic arcuate and paraventricular nuclei, GLP-1R stimulation suppresses neuropeptide Y (NPY) and agouti-related peptide (AgRP)—the principal orexigenic signals—while upregulating pro-opiomelanocortin (POMC) and cocaine-and-amphetamine-regulated transcript (CART), neuropeptides that promote satiety and reduce energy intake.

The peripheral contribution to fat loss is equally important. Semaglutide slows gastric emptying by inhibiting antral contractility, reducing the rate of nutrient delivery to the small intestine and blunting postprandial glucose and lipid spikes. This gastroparesis-like effect prolongs gastric distension, activating vagal mechanoreceptors that relay satiety signals to the nucleus tractus solitarius (NTS). Additionally, GLP-1R activation in white adipose tissue increases lipolysis via PKA-mediated phosphorylation of hormone-sensitive lipase (HSL) and perilipin-1, mobilizing stored triglycerides as free fatty acids for oxidation. Chronic semaglutide exposure also suppresses de novo lipogenesis in the liver by reducing SREBP-1c expression and diminishing hepatic steatosis, a common comorbidity of obesity.

Long-term energy-balance effects emerge from semaglutide's modulation of the mesolimbic reward circuitry. GLP-1R expression in the ventral tegmental area (VTA) and nucleus accumbens (NAc) dampens dopaminergic responses to high-calorie food cues, reducing hedonic eating without the anhedonia associated with opioid antagonists. This central action explains the disproportionate reduction in highly palatable food consumption observed in clinical subjects—a phenomenon that extends weight loss beyond what caloric restriction alone would predict. Together, these interconnected mechanisms create a comprehensive metabolic environment favouring sustained fat mass reduction while largely preserving lean body mass.`,

    researchTitle: 'Clinical Evidence: Semaglutide Efficacy in Obesity and Metabolic Disease',
    researchBody: `The STEP (Semaglutide Treatment Effect in People with Obesity) program, comprising five large randomised controlled trials, established semaglutide 2.4 mg weekly as a landmark pharmacotherapy for obesity. STEP 1 enrolled 1,961 adults with a BMI of 30 or above (or 27 with at least one comorbidity) and demonstrated a mean body-weight reduction of 14.9% from baseline over 68 weeks, versus 2.4% in the placebo group. Nearly 70% of semaglutide-treated participants achieved at least 10% weight loss, and approximately one-third lost 20% or more—outcomes that historically required bariatric surgery. Subcutaneous adipose tissue accounted for the majority of lost mass, with visceral fat declining disproportionately, a finding that carries outsized cardiovascular risk benefit.

STEP 4 tested a maintenance design: subjects who had received semaglutide for 20 weeks were randomised to continue the drug or switch to placebo. Those continuing semaglutide lost an additional 7.9% over the subsequent 48 weeks, while those switched to placebo regained 6.9%—confirming that the therapy must be maintained to preserve weight loss and highlighting the chronic nature of obesity as a disease. STEP 5 extended the observation window to 104 weeks, finding that cumulative weight loss stabilised around 15.2%, with meaningful improvements in waist circumference, blood pressure, HbA1c, and triglyceride levels persisting throughout. The SUSTAIN and PIONEER trial families in type-2 diabetes similarly demonstrated 6–9% weight reductions alongside potent glycaemic control, establishing dual metabolic benefits.

Mechanistic imaging studies using dual-energy X-ray absorptiometry (DXA) and MRI in semaglutide-treated subjects confirm that approximately 85% of weight lost is adipose tissue, with lean mass relatively preserved—a favourable body-composition shift compared to very-low-calorie diets. Biomarker analyses show concurrent reductions in high-sensitivity CRP, interleukin-6, and leptin, alongside increases in adiponectin, suggesting genuine reversal of adipose-tissue inflammation rather than simple mass reduction. These data collectively position semaglutide as both an effective and mechanistically comprehensive anti-obesity agent.`,

    studies: [
      {
        citation: 'Wilding JPH et al. STEP 1 Trial. N Engl J Med. 2021;384(11):989–1002.',
        finding: 'Once-weekly semaglutide 2.4 mg produced mean 14.9% body-weight loss over 68 weeks vs 2.4% with placebo in adults with obesity.',
      },
      {
        citation: 'Wadden TA et al. STEP 3 Trial. JAMA. 2021;325(14):1403–1413.',
        finding: 'Semaglutide combined with intensive behavioural therapy achieved 16.0% weight loss, with 75% of participants losing ≥10% bodyweight.',
      },
      {
        citation: 'Rubino DM et al. STEP 4 Trial. JAMA. 2021;325(14):1414–1425.',
        finding: 'Continued semaglutide after initial 20-week treatment led to additional weight loss; discontinuation caused substantial regain, highlighting need for maintenance therapy.',
      },
      {
        citation: 'Garvey WT et al. STEP 5 Trial. Nat Med. 2022;28(10):2083–2091.',
        finding: 'Two-year semaglutide treatment maintained 15.2% weight reduction with durable improvements in cardiometabolic risk factors.',
      },
      {
        citation: 'Lincoff AM et al. SELECT Trial. N Engl J Med. 2023;389(24):2221–2232.',
        finding: 'Semaglutide 2.4 mg reduced major adverse cardiovascular events by 20% in overweight adults with established cardiovascular disease.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea',
        description: 'The most commonly reported adverse event, occurring in up to 44% of users during dose escalation. Arises from slowed gastric emptying and central GLP-1R activation in the area postrema. Typically transient and manageable with meal-size reduction.',
        severity: 'moderate',
      },
      {
        name: 'Vomiting',
        description: 'Affects approximately 24% of users, predominantly during the first 8–12 weeks. Usually episodic rather than persistent; hydration and small frequent meals help mitigate severity.',
        severity: 'moderate',
      },
      {
        name: 'Constipation',
        description: 'Reported in roughly 24% of participants, caused by reduced gastrointestinal motility. Dietary fibre, adequate hydration, and physical activity are the primary countermeasures.',
        severity: 'low',
      },
      {
        name: 'Injection-Site Reactions',
        description: 'Mild erythema, bruising, or induration at the injection site occur in a small percentage of users. Rotating injection sites and proper subcutaneous technique minimise occurrence.',
        severity: 'low',
      },
      {
        name: 'Gallbladder Disease',
        description: 'Rapid weight loss with any agent increases cholelithiasis risk. Clinical trial data show a modest elevation in gallstone incidence with semaglutide relative to placebo; monitoring is warranted in predisposed individuals.',
        severity: 'moderate',
      },
      {
        name: 'Pancreatitis (rare)',
        description: 'GLP-1 receptor agonists carry a class-level precautionary label for acute pancreatitis. Absolute incidence is low (<0.5% in trials), but users should be aware of persistent upper-abdominal pain as a warning sign.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Semaglutide 5 mg — The Optimal Starter Vial',
    buyersGuideBody: `The 5 mg vial of semaglutide is specifically calibrated for individuals beginning a GLP-1 protocol for the first time or returning after an extended break. Standard escalation schedules for research purposes typically start at 0.25 mg per week for the first four weeks, advancing to 0.5 mg weekly for weeks five through eight, and then to 1.0 mg if tolerability allows. A 5 mg vial accommodates this entire starter phase and the first portion of the intermediate phase without requiring a larger purchase commitment—making it the most cost-efficient entry point for those who wish to assess their individual response before investing in higher-quantity vials.

From a practical standpoint, a 5 mg vial provides approximately 10–20 weekly doses depending on dose level, meaning it sustains the introductory 8–12 weeks of a protocol without necessitating premature vial changes. This is particularly valuable for first-time users, for whom GI side-effect management and titration pacing are the primary concerns rather than maximal dose delivery. Research subjects who are lean (BMI under 27) or who have high GLP-1 sensitivity may find the lower end of the dose range fully effective for their objectives, making the 5 mg vial a practical long-term option even beyond the starter phase.

When evaluating any semaglutide product, purity documentation is the most important quality indicator. Look for third-party high-performance liquid chromatography (HPLC) certificates of analysis confirming peptide purity above 98% and mass spectrometry (MS) data confirming correct molecular weight (4,113.58 Da). Sterile, lyophilised powder presented in sealed vials with bacteriostatic water for reconstitution represents the gold standard of presentation. Proper cold-chain storage (2–8 °C before reconstitution; use within 28 days once reconstituted) is essential for maintaining peptide integrity. The 5 mg format minimises waste for users who want to assess tolerability before committing to a full escalation course.`,

    vsAlternativesTitle: 'Semaglutide vs. Alternatives: Where It Fits in the GLP-1 Landscape',
    vsAlternativesBody: `Semaglutide occupies a well-validated, highly studied position in the weight-loss peptide landscape. Compared to liraglutide (a first-generation GLP-1 agonist requiring daily dosing), semaglutide's albumin-binding half-life extension translates to substantially better weight-loss outcomes—roughly twice the percentage body-weight reduction—with the added convenience of once-weekly administration. The head-to-head data from the SUSTAIN 7 trial confirmed that semaglutide 1.0 mg outperformed liraglutide 1.2 mg on both glycaemic and weight endpoints, cementing its superiority within the single-receptor GLP-1 class.

Against newer dual and triple agonists like tirzepatide (GIP+GLP-1) and retatrutide (GIP+GLP-1+glucagon), semaglutide yields modestly lower absolute weight loss—approximately 15% versus 20–25% for tirzepatide in the SURMOUNT trials. However, semaglutide's cardiovascular outcome data (SELECT trial, 20% MACE reduction) are currently more mature than those of newer agents, making it the preferred choice for individuals with established cardiovascular disease or those who prioritise evidence depth over maximum efficacy. For pure weight-loss optimisation in healthy research subjects, tirzepatide or retatrutide may offer incremental advantages, but semaglutide's established tolerability profile and extensive real-world data make it the benchmark against which all newer agents are measured.`,
  },

  // ─────────────────────────────────────────────
  // SEMAGLUTIDE 10 mg
  // ─────────────────────────────────────────────
  'glp-1s-10mg': {
    mechanismTitle: 'How Semaglutide Works: GLP-1 Receptor Agonism and Energy Homeostasis',
    mechanismBody: `Semaglutide is a synthetic analogue of human glucagon-like peptide-1 (GLP-1), an incretin hormone secreted predominantly by L-cells of the distal small intestine in response to nutrient ingestion. Native GLP-1 has a plasma half-life of roughly 2 minutes owing to rapid degradation by dipeptidyl peptidase-4 (DPP-4) and neutral endopeptidase. Semaglutide circumvents this limitation through two critical structural modifications: a C-18 fatty diacid chain attached via a linker to lysine at position 26, enabling reversible, high-affinity binding to albumin, and two amino-acid substitutions (Aib at position 8 and arginine at position 34) that confer near-complete DPP-4 resistance. The result is a half-life exceeding 165 hours, enabling once-weekly subcutaneous dosing with remarkably stable plasma concentrations.

At the cellular level, semaglutide engages the GLP-1 receptor (GLP-1R), a class B G-protein-coupled receptor expressed in pancreatic beta-cells, hypothalamic nuclei, vagal afferents, gastric parietal cells, cardiac myocytes, and adipose tissue. Receptor occupation triggers Gs-mediated adenylyl cyclase activation, elevating intracellular cyclic AMP (cAMP) and activating protein kinase A (PKA). In pancreatic beta-cells this cascade potentiates glucose-stimulated insulin secretion while suppressing glucagon release from alpha-cells, collectively lowering postprandial glucose excursions without imposing hypoglycemia risk in euglycemic conditions. In hypothalamic arcuate and paraventricular nuclei, GLP-1R stimulation suppresses neuropeptide Y (NPY) and agouti-related peptide (AgRP)—the principal orexigenic signals—while upregulating pro-opiomelanocortin (POMC) and cocaine-and-amphetamine-regulated transcript (CART), neuropeptides that promote satiety and reduce energy intake.

The peripheral contribution to fat loss is equally important. Semaglutide slows gastric emptying by inhibiting antral contractility, reducing the rate of nutrient delivery to the small intestine and blunting postprandial glucose and lipid spikes. This gastroparesis-like effect prolongs gastric distension, activating vagal mechanoreceptors that relay satiety signals to the nucleus tractus solitarius (NTS). Additionally, GLP-1R activation in white adipose tissue increases lipolysis via PKA-mediated phosphorylation of hormone-sensitive lipase (HSL) and perilipin-1, mobilising stored triglycerides as free fatty acids for oxidation. Chronic semaglutide exposure also suppresses de novo lipogenesis in the liver by reducing SREBP-1c expression and diminishing hepatic steatosis, a common comorbidity of obesity.

Long-term energy-balance effects emerge from semaglutide's modulation of the mesolimbic reward circuitry. GLP-1R expression in the ventral tegmental area (VTA) and nucleus accumbens (NAc) dampens dopaminergic responses to high-calorie food cues, reducing hedonic eating without the anhedonia associated with opioid antagonists. This central action explains the disproportionate reduction in highly palatable food consumption observed in clinical subjects—a phenomenon that extends weight loss beyond what caloric restriction alone would predict. Together, these interconnected mechanisms create a comprehensive metabolic environment favouring sustained fat mass reduction while largely preserving lean body mass.`,

    researchTitle: 'Clinical Evidence: Semaglutide Efficacy in Obesity and Metabolic Disease',
    researchBody: `The STEP (Semaglutide Treatment Effect in People with Obesity) program, comprising five large randomised controlled trials, established semaglutide 2.4 mg weekly as a landmark pharmacotherapy for obesity. STEP 1 enrolled 1,961 adults with a BMI of 30 or above (or 27 with at least one comorbidity) and demonstrated a mean body-weight reduction of 14.9% from baseline over 68 weeks, versus 2.4% in the placebo group. Nearly 70% of semaglutide-treated participants achieved at least 10% weight loss, and approximately one-third lost 20% or more—outcomes that historically required bariatric surgery. Subcutaneous adipose tissue accounted for the majority of lost mass, with visceral fat declining disproportionately, a finding that carries outsized cardiovascular risk benefit.

STEP 4 tested a maintenance design: subjects who had received semaglutide for 20 weeks were randomised to continue the drug or switch to placebo. Those continuing semaglutide lost an additional 7.9% over the subsequent 48 weeks, while those switched to placebo regained 6.9%—confirming that the therapy must be maintained to preserve weight loss and highlighting the chronic nature of obesity as a disease. STEP 5 extended the observation window to 104 weeks, finding that cumulative weight loss stabilised around 15.2%, with meaningful improvements in waist circumference, blood pressure, HbA1c, and triglyceride levels persisting throughout. The SUSTAIN and PIONEER trial families in type-2 diabetes similarly demonstrated 6–9% weight reductions alongside potent glycaemic control.

Mechanistic imaging studies using DXA and MRI in semaglutide-treated subjects confirm that approximately 85% of weight lost is adipose tissue, with lean mass relatively preserved—a favourable body-composition shift compared to very-low-calorie diets. Biomarker analyses show concurrent reductions in high-sensitivity CRP, interleukin-6, and leptin, alongside increases in adiponectin, suggesting genuine reversal of adipose-tissue inflammation rather than simple mass reduction.`,

    studies: [
      {
        citation: 'Wilding JPH et al. STEP 1 Trial. N Engl J Med. 2021;384(11):989–1002.',
        finding: 'Once-weekly semaglutide 2.4 mg produced mean 14.9% body-weight loss over 68 weeks vs 2.4% with placebo.',
      },
      {
        citation: 'Rubino DM et al. STEP 4 Trial. JAMA. 2021;325(14):1414–1425.',
        finding: 'Continuation of semaglutide post-induction produced additional loss; withdrawal led to substantial regain, emphasising the need for sustained therapy.',
      },
      {
        citation: 'Garvey WT et al. STEP 5 Trial. Nat Med. 2022;28(10):2083–2091.',
        finding: 'Two-year treatment maintained 15.2% weight reduction with durable cardiometabolic improvements.',
      },
      {
        citation: 'Lincoff AM et al. SELECT Trial. N Engl J Med. 2023;389(24):2221–2232.',
        finding: 'Semaglutide 2.4 mg reduced major adverse cardiovascular events by 20% in overweight adults with established cardiovascular disease.',
      },
      {
        citation: 'Knop FK et al. OASIS 1 Trial. Lancet. 2023;402(10403):705–719.',
        finding: 'Oral semaglutide 50 mg achieved 15.1% weight loss over 68 weeks, confirming robust efficacy across delivery routes.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea',
        description: 'The most commonly reported adverse event, occurring in up to 44% of users during dose escalation. Arises from slowed gastric emptying and central GLP-1R activation in the area postrema. Typically transient and manageable.',
        severity: 'moderate',
      },
      {
        name: 'Vomiting',
        description: 'Affects approximately 24% of users, predominantly during the first 8–12 weeks. Usually episodic; hydration and small frequent meals mitigate severity.',
        severity: 'moderate',
      },
      {
        name: 'Constipation',
        description: 'Reported in roughly 24% of participants. Dietary fibre, adequate hydration, and physical activity are primary countermeasures.',
        severity: 'low',
      },
      {
        name: 'Appetite Suppression (excessive)',
        description: 'At maintenance doses, some users experience appetite suppression beyond intended levels, risking inadequate caloric intake. Structured meal planning helps maintain nutritional adequacy.',
        severity: 'moderate',
      },
      {
        name: 'Gallbladder Disease',
        description: 'Rapid weight loss modestly elevates cholelithiasis risk. Monitoring is warranted in predisposed individuals.',
        severity: 'moderate',
      },
      {
        name: 'Pancreatitis (rare)',
        description: 'Class-level precautionary label. Absolute incidence below 0.5% in trials; persistent upper-abdominal pain warrants evaluation.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Semaglutide 10 mg — The Mid-Protocol Continuation Vial',
    buyersGuideBody: `The 10 mg vial is designed for research subjects who have already completed the introductory dose-escalation phase and have established tolerability at doses in the 0.5–1.0 mg per week range. At a standard maintenance dose of 1.0–1.7 mg weekly, a 10 mg vial provides approximately 6–10 weeks of uninterrupted coverage—bridging the mid-protocol plateau phase where subjects are consolidating weight loss rather than actively escalating. This makes the 10 mg vial the pragmatic choice for anyone who has graduated past the starter 5 mg vial and is not yet ready to commit to bulk quantities.

From a protocol-design standpoint, this vial size suits the "optimisation window" of a semaglutide course—weeks 10 through 24—when dose fine-tuning based on individual response is most active. Some subjects stabilise at 1.0 mg weekly and achieve their target outcomes without needing further escalation; for them, two successive 10 mg vials represent a full extended research cycle without surplus. Others may be titrating toward 1.7 mg or 2.4 mg and will use the 10 mg vial as a transitional supply before moving to a 15 mg bulk option.

Reconstitution practices become increasingly important at this stage. Bacteriostatic water (0.9% benzyl alcohol) is preferred over sterile water for reconstitution as it provides a 28-day post-reconstitution stability window at refrigerated temperature. Each vial should be gently swirled—never shaken—to avoid mechanical degradation of the peptide. Purity certificates from qualified third-party analytical laboratories should accompany any supply, confirming HPLC purity above 98% and correct molecular identity by mass spectrometry. Users advancing their protocol past the introductory phase should also be monitoring body composition metrics—not just scale weight—to ensure the majority of mass loss is adipose rather than lean tissue.`,

    vsAlternativesTitle: 'Semaglutide vs. Alternatives: Evidence Depth vs. Raw Efficacy',
    vsAlternativesBody: `Semaglutide's principal competitive advantage over newer agents is its depth of clinical evidence. With over 15 published phase-3 trials, long-term cardiovascular outcome data from the SELECT trial, and real-world use in millions of patients, its benefit-risk profile is understood with a precision that tirzepatide and retatrutide cannot yet match. For research purposes, this translates to better-characterised dose-response relationships, predictable tolerability windows, and the largest body of comparative body-composition data available for any injectable weight-loss peptide.

When positioned against tirzepatide, semaglutide delivers approximately 5–8 percentage points less body-weight reduction on an absolute basis. However, within the typical research dose range (1.0–2.4 mg weekly), semaglutide achieves outcomes meaningfully superior to lifestyle intervention alone, and its superior cardiovascular outcome evidence makes it the preferred agent in metabolic risk reduction contexts. The 10 mg vial format, allowing sustained mid-protocol administration without frequent reordering, makes it an operationally efficient choice for structured research cycles requiring protocol continuity.`,
  },

  // ─────────────────────────────────────────────
  // SEMAGLUTIDE 15 mg
  // ─────────────────────────────────────────────
  'glp-1s-15mg': {
    mechanismTitle: 'How Semaglutide Works: GLP-1 Receptor Agonism and Energy Homeostasis',
    mechanismBody: `Semaglutide is a synthetic analogue of human glucagon-like peptide-1 (GLP-1), an incretin hormone secreted predominantly by L-cells of the distal small intestine in response to nutrient ingestion. Native GLP-1 has a plasma half-life of roughly 2 minutes owing to rapid degradation by dipeptidyl peptidase-4 (DPP-4) and neutral endopeptidase. Semaglutide circumvents this limitation through two critical structural modifications: a C-18 fatty diacid chain attached via a linker to lysine at position 26, enabling reversible, high-affinity binding to albumin, and two amino-acid substitutions (Aib at position 8 and arginine at position 34) that confer near-complete DPP-4 resistance. The result is a half-life exceeding 165 hours, enabling once-weekly subcutaneous dosing with remarkably stable plasma concentrations.

At the cellular level, semaglutide engages the GLP-1 receptor (GLP-1R), a class B G-protein-coupled receptor expressed in pancreatic beta-cells, hypothalamic nuclei, vagal afferents, gastric parietal cells, cardiac myocytes, and adipose tissue. Receptor occupation triggers Gs-mediated adenylyl cyclase activation, elevating intracellular cyclic AMP (cAMP) and activating protein kinase A (PKA). In pancreatic beta-cells this cascade potentiates glucose-stimulated insulin secretion while suppressing glucagon release from alpha-cells, collectively lowering postprandial glucose excursions without imposing hypoglycemia risk in euglycemic conditions. In hypothalamic arcuate and paraventricular nuclei, GLP-1R stimulation suppresses neuropeptide Y (NPY) and agouti-related peptide (AgRP)—the principal orexigenic signals—while upregulating pro-opiomelanocortin (POMC) and cocaine-and-amphetamine-regulated transcript (CART), neuropeptides that promote satiety and reduce energy intake.

The peripheral contribution to fat loss is equally important. Semaglutide slows gastric emptying by inhibiting antral contractility, reducing the rate of nutrient delivery to the small intestine and blunting postprandial glucose and lipid spikes. This gastroparesis-like effect prolongs gastric distension, activating vagal mechanoreceptors that relay satiety signals to the nucleus tractus solitarius (NTS). Additionally, GLP-1R activation in white adipose tissue increases lipolysis via PKA-mediated phosphorylation of hormone-sensitive lipase (HSL) and perilipin-1, mobilising stored triglycerides as free fatty acids for oxidation. Chronic semaglutide exposure also suppresses de novo lipogenesis in the liver by reducing SREBP-1c expression and diminishing hepatic steatosis, a common comorbidity of obesity.

Long-term energy-balance effects emerge from semaglutide's modulation of the mesolimbic reward circuitry. GLP-1R expression in the ventral tegmental area (VTA) and nucleus accumbens (NAc) dampens dopaminergic responses to high-calorie food cues, reducing hedonic eating without the anhedonia associated with opioid antagonists. This central action explains the disproportionate reduction in highly palatable food consumption observed in clinical subjects—a phenomenon that extends weight loss beyond what caloric restriction alone would predict. Together, these interconnected mechanisms create a comprehensive metabolic environment favouring sustained fat mass reduction while largely preserving lean body mass.`,

    researchTitle: 'Clinical Evidence: Semaglutide Efficacy in Obesity and Metabolic Disease',
    researchBody: `The STEP program established semaglutide 2.4 mg weekly as a landmark pharmacotherapy for obesity. STEP 1 demonstrated a mean body-weight reduction of 14.9% from baseline over 68 weeks in adults with BMI of 30 or above, versus 2.4% in the placebo group. Nearly 70% of semaglutide-treated participants achieved at least 10% weight loss, and approximately one-third lost 20% or more. Subcutaneous adipose tissue accounted for the majority of lost mass, with visceral fat declining disproportionately—a finding that carries outsized cardiovascular risk benefit beyond weight alone.

STEP 5 extended observation to 104 weeks, confirming sustained 15.2% weight reduction with durable improvements in cardiometabolic risk markers including blood pressure, triglycerides, and HbA1c. The SELECT trial's cardiovascular outcome data demonstrated a 20% reduction in major adverse cardiovascular events (MACE) in overweight individuals with established heart disease—the first such outcome trial to demonstrate direct cardiovascular benefit from a weight-management pharmacotherapy, independent of glycaemic effects.

Mechanistic imaging studies using DXA and MRI confirm that approximately 85% of weight lost under semaglutide is adipose tissue, with lean mass relatively preserved compared to caloric restriction alone. Biomarker analyses show concurrent reductions in high-sensitivity CRP and interleukin-6, alongside increases in adiponectin, confirming genuine reversal of adipose-tissue inflammation. These data collectively position semaglutide as both an effective and mechanistically comprehensive agent for multi-cycle research protocols.`,

    studies: [
      {
        citation: 'Wilding JPH et al. STEP 1 Trial. N Engl J Med. 2021;384(11):989–1002.',
        finding: 'Mean 14.9% body-weight loss over 68 weeks with semaglutide 2.4 mg weekly in adults with obesity.',
      },
      {
        citation: 'Garvey WT et al. STEP 5 Trial. Nat Med. 2022;28(10):2083–2091.',
        finding: '104-week semaglutide treatment maintained 15.2% weight loss with persistent cardiometabolic improvements.',
      },
      {
        citation: 'Lincoff AM et al. SELECT Trial. N Engl J Med. 2023;389(24):2221–2232.',
        finding: 'Semaglutide reduced MACE by 20% in overweight cardiovascular-disease patients, establishing direct cardioprotective benefit.',
      },
      {
        citation: 'Rubino DM et al. STEP 4 Trial. JAMA. 2021;325(14):1414–1425.',
        finding: 'Weight regain after semaglutide discontinuation confirms obesity chronicity and supports extended-cycle protocols.',
      },
      {
        citation: 'Wadden TA et al. STEP 3 Trial. JAMA. 2021;325(14):1403–1413.',
        finding: 'Semaglutide with intensive behavioural therapy achieved 16.0% weight loss; 75% lost ≥10% of bodyweight.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea',
        description: 'Most common adverse event at up to 44% prevalence during escalation. Centrally and peripherally mediated; typically resolves after the first 4–8 weeks at any given dose level.',
        severity: 'moderate',
      },
      {
        name: 'Vomiting',
        description: 'Approximately 24% of users experience vomiting, mainly during active dose escalation. Supportive measures and slower titration schedules reduce incidence.',
        severity: 'moderate',
      },
      {
        name: 'Fatigue',
        description: 'Modest fatigue reported in a subset of users, possibly related to caloric deficit rather than direct drug effect. Adequate protein intake and resistance training help preserve energy levels.',
        severity: 'low',
      },
      {
        name: 'Gallbladder Disease',
        description: 'Cholelithiasis risk is modestly elevated with rapid weight loss. Surveillance is warranted in predisposed individuals, particularly during extended multi-cycle protocols.',
        severity: 'moderate',
      },
      {
        name: 'Lean Mass Loss',
        description: 'Approximately 15% of total weight lost can be lean mass in the absence of resistance training. Structured exercise programs and adequate dietary protein mitigate this effect.',
        severity: 'moderate',
      },
      {
        name: 'Pancreatitis (rare)',
        description: 'Class-level precaution applies. Incidence below 0.5% in clinical trials; upper-abdominal pain of unusual severity warrants prompt evaluation.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Semaglutide 15 mg — The Bulk Supply for Extended Protocols',
    buyersGuideBody: `The 15 mg vial represents the highest single-vial quantity of semaglutide and is oriented toward research subjects running extended protocols or multi-cycle experiments requiring uninterrupted supply. At a standard maintenance dose of 1.7–2.4 mg weekly, a 15 mg vial provides between 6 and 9 weeks of administration, covering a full phase of an ongoing protocol without mid-course resupply logistics. For subjects maintaining a steady state at 1.0 mg weekly—a common outcome for highly responsive individuals—the 15 mg vial offers 15 weeks of coverage from a single purchase, making it the most cost-efficient format on a per-dose basis.

Long-duration protocols—those exceeding 24 weeks—are where the 15 mg vial demonstrates the greatest operational advantage. The reduced frequency of reconstitution events (each new vial reconstitution introduces a handling step and, theoretically, a marginal contamination or degradation risk) and the cost savings relative to multiple smaller vials make this format the natural choice for researchers conducting sustained or comparative studies. It also simplifies inventory management, reducing the risk of protocol interruption due to supply gaps.

Quality assurance becomes even more critical at bulk quantities. Purchasers should require batch-specific certificates of analysis rather than generic product documentation—each individual batch should have HPLC purity data, residual solvent analysis, and endotoxin testing results. Cold-chain integrity documentation (temperature logs during shipping) provides assurance that the lyophilised peptide has not been exposed to conditions that accelerate degradation. For extended protocols, consider maintaining a refrigerated backup to ensure no interruption in the event of incidental supply delays. The 15 mg format maximises value for the experienced researcher who has already confirmed tolerability and is operating within a defined long-term protocol framework.`,

    vsAlternativesTitle: 'Semaglutide vs. Alternatives: The Case for the Proven Standard',
    vsAlternativesBody: `In the context of long-cycle research protocols, semaglutide's unparalleled evidence base is its defining advantage. No other weight-management peptide currently has two-year body-composition data, cardiovascular outcome trial results, and the breadth of mechanistic studies available for semaglutide. For researchers prioritising interpretive confidence—knowing that any observed outcome is attributable to a well-characterised agent with predictable pharmacology—semaglutide represents the lowest-uncertainty choice in the GLP-1 class.

Against tirzepatide and retatrutide, the trade-off is clear: those agents produce greater absolute weight loss (20–25% versus 15% for semaglutide) but have shorter available follow-up data and fewer safety observations. For individuals who have plateaued on semaglutide after a full extended cycle and wish to investigate incremental fat loss, transitioning to tirzepatide represents the logical evidence-based next step. However, for a first long-cycle protocol, the depth of semaglutide's data makes the 15 mg bulk format the most information-rich and risk-characterised option available at any dose.`,
  },

  // ─────────────────────────────────────────────
  // TIRZEPATIDE 15 mg
  // ─────────────────────────────────────────────
  'glp-2t-15mg': {
    mechanismTitle: 'How Tirzepatide Works: Dual GIP and GLP-1 Receptor Co-Agonism',
    mechanismBody: `Tirzepatide is a first-in-class dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor co-agonist. It is a 39-amino-acid synthetic peptide engineered on a GIP backbone with GLP-1 receptor-binding motifs inserted at strategic positions. A C20 fatty diacid moiety attached via a mini-PEG spacer confers albumin binding analogous to that of semaglutide, extending the half-life to approximately 5 days and enabling once-weekly subcutaneous dosing. Both receptors—GIP-R and GLP-1R—are class B GPCRs that signal primarily through Gs/adenylyl cyclase/cAMP pathways, but their tissue expression patterns are distinct, and simultaneous activation creates a synergistic metabolic effect that neither receptor alone can reproduce.

GIP-R is expressed at high density in adipose tissue—both white and brown—where its activation enhances insulin-stimulated glucose uptake, promotes fatty acid esterification under energy-surplus conditions, and, crucially under caloric restriction, dramatically accelerates lipolysis and free fatty acid mobilisation. This context-dependency is central to tirzepatide's superior efficacy: in an energy-deficit state, GIP-R agonism in adipose tissue compounds the lipolytic signal rather than opposing it, driving greater absolute fat mobilisation than GLP-1 agonism alone. Simultaneously, GIP-R activation in the central nervous system (hypothalamus and brainstem) amplifies the satiety signalling initiated by GLP-1R, creating a dual-pathway suppression of food intake that produces more profound appetite reduction than either signal in isolation.

GLP-1R agonism within tirzepatide mirrors the mechanisms established for semaglutide: suppression of NPY/AgRP, upregulation of POMC/CART, glucose-dependent insulin secretion enhancement, glucagon suppression, and gastric emptying delay. However, the additive central satiety effects from GIP-R co-stimulation mean that tirzepatide achieves greater caloric restriction for an equivalent or lower dose of GLP-1 activity. Pancreatic beta-cell function is additionally enhanced by GIP-R stimulation of beta-cell proliferation and anti-apoptotic signalling via PI3K/Akt pathways—an effect not shared by pure GLP-1 agonists and particularly relevant for subjects with impaired beta-cell reserve.

At the adipose-tissue level, tirzepatide's combined receptor activity leads to greater reductions in subcutaneous and visceral fat mass than semaglutide in head-to-head comparisons. Brown adipose tissue (BAT) thermogenesis is also enhanced through GIP-R-mediated upregulation of uncoupling protein 1 (UCP1) and increased sympathetic innervation of BAT depots, contributing to elevated resting energy expenditure. The aggregate result is a metabolic shift toward fat oxidation that is both more powerful and more sustained than that achieved by single-receptor GLP-1 agonists, explaining tirzepatide's superior percentage weight loss across all major clinical trials.`,

    researchTitle: 'Clinical Evidence: Tirzepatide in the SURMOUNT and SURPASS Trial Programs',
    researchBody: `The SURMOUNT program (Tirzepatide Once Weekly for the Treatment of Obesity) produced the most compelling weight-loss data for any pharmacological agent at the time of publication. SURMOUNT-1, enrolling 2,539 adults with obesity (BMI ≥30 or ≥27 with comorbidities) without diabetes, showed mean body-weight reductions of 15.0%, 19.5%, and 20.9% at 5 mg, 10 mg, and 15 mg doses respectively over 72 weeks, versus 3.1% with placebo. At the 15 mg dose, 57% of participants lost at least 20% of body weight—a threshold previously achievable only with bariatric surgery. Absolute fat mass reductions measured by DXA were proportionally larger for visceral fat than subcutaneous fat, with visceral adipose tissue declining by up to 45% from baseline at maximal doses.

SURMOUNT-2 extended these findings to adults with type-2 diabetes, a population with physiologically impaired weight-loss capacity, where tirzepatide 15 mg still achieved 13.4% weight reduction—more than double the response seen with the best available diabetes medications. The SURPASS program in type-2 diabetes management demonstrated that tirzepatide outperformed insulin degludec, insulin glargine, and semaglutide 1 mg on both HbA1c reduction and weight loss endpoints. SURPASS-2 directly compared tirzepatide to semaglutide 1 mg, showing significantly greater weight loss (9.3 kg vs 5.5 kg) and HbA1c reduction with tirzepatide at equivalent doses.

Body-composition data from SURMOUNT-1 and ancillary studies confirm that tirzepatide preserves lean mass at rates comparable to semaglutide when dietary protein is adequate, with the weight lost being approximately 84% adipose tissue. Skeletal muscle biopsies in a mechanistic substudy showed improved mitochondrial function and lipid oxidative capacity in tirzepatide-treated subjects, suggesting that the metabolic improvements extend beyond simple mass reduction to genuine tissue-level metabolic health restoration.`,

    studies: [
      {
        citation: 'Jastreboff AM et al. SURMOUNT-1 Trial. N Engl J Med. 2022;387(3):205–216.',
        finding: 'Tirzepatide 15 mg achieved 20.9% mean weight loss at 72 weeks; 57% of participants lost ≥20% of body weight.',
      },
      {
        citation: 'Garvey WT et al. SURMOUNT-2 Trial. Lancet. 2023;402(10402):613–626.',
        finding: 'In adults with type-2 diabetes, tirzepatide 15 mg achieved 13.4% weight loss over 72 weeks—superior to any existing diabetes pharmacotherapy.',
      },
      {
        citation: 'Frías JP et al. SURPASS-2 Trial. N Engl J Med. 2021;385(6):503–515.',
        finding: 'Tirzepatide significantly outperformed semaglutide 1 mg on weight loss (9.3 kg vs 5.5 kg) and HbA1c reduction in type-2 diabetes.',
      },
      {
        citation: 'Dahl D et al. SURPASS-3 Trial. Lancet Diabetes Endocrinol. 2021;9(11):765–778.',
        finding: 'Tirzepatide reduced HbA1c by up to 2.37% and body weight by 12.9 kg compared to insulin degludec.',
      },
      {
        citation: 'Coskun T et al. Endocrinology. 2018;159(11):3741–3754.',
        finding: "Preclinical mechanistic study confirming tirzepatide's additive GIP+GLP-1 synergism in adipose lipolysis and hypothalamic satiety signalling.",
      },
      {
        citation: 'McLean BA et al. Cell Metab. 2021;33(9):1750–1765.',
        finding: 'Dual GIP/GLP-1 receptor activation in adipose tissue produced greater fat mobilisation than either agonist alone under caloric restriction conditions.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea',
        description: 'Present in up to 31% of subjects at 15 mg in SURMOUNT-1. Generally more pronounced than with semaglutide at equivalent weight-loss doses but follows the same trajectory of resolution after each dose-escalation step.',
        severity: 'moderate',
      },
      {
        name: 'Diarrhoea',
        description: 'Reported in approximately 23% of tirzepatide users. Accelerated intestinal transit mediated by GLP-1R activation; generally mild and self-limiting within the first month at any given dose.',
        severity: 'moderate',
      },
      {
        name: 'Vomiting',
        description: 'Affects roughly 12–18% of users during dose escalation. More commonly associated with high-fat meals consumed close to injection timing.',
        severity: 'moderate',
      },
      {
        name: 'Decreased Appetite (severe)',
        description: 'The dual receptor mechanism produces a more profound appetite suppression than single-agonist GLP-1 drugs. In some subjects this can progress to clinically insufficient caloric intake, requiring structured meal plans.',
        severity: 'moderate',
      },
      {
        name: 'Injection-Site Reactions',
        description: 'Erythema, pruritis, and mild oedema at the injection site occur in approximately 6–7% of users. Site rotation and proper subcutaneous technique minimise recurrence.',
        severity: 'low',
      },
      {
        name: 'Pancreatitis (rare)',
        description: 'Class-level precaution shared with all incretin-based therapies. Incidence below 0.5% in clinical trials; upper-abdominal pain of unusual character and severity warrants evaluation.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Tirzepatide 15 mg — Starter Vial for Dual-Agonist Protocols',
    buyersGuideBody: `The 15 mg tirzepatide vial is the recommended entry point for research subjects beginning a tirzepatide protocol. Standard escalation initiates at 2.5 mg weekly for the first four weeks, advancing by 2.5 mg increments every four weeks as tolerated, up to a maximum of 15 mg weekly. The 15 mg vial provides six weeks of doses at the starting 2.5 mg level, or three weeks at the 5 mg maintenance level—making it the appropriate quantity to assess initial tolerability and confirm that dose escalation is proceeding as expected before committing to larger supply volumes.

Subjects transitioning from a semaglutide protocol should note that tirzepatide's GI side-effect profile, while similar in character, is somewhat more pronounced at equivalent weight-loss effectiveness doses. A conservative escalation strategy—spending 4–6 weeks at each dose level rather than the minimum 4 weeks—meaningfully reduces the incidence of nausea and vomiting and improves protocol adherence. The 15 mg starter vial gives researchers exactly the quantity needed to execute this conservative initial phase without committing to inventory that would become redundant if dose sensitivity necessitates a protocol adjustment.

When sourcing tirzepatide, purity verification is critical because its complex 39-amino-acid structure with attached fatty acid chain creates more potential points of synthetic error than shorter peptides. Certificates of analysis should include HPLC purity (target above 98%), mass spectrometry confirming the intact peptide mass of 4,813.5 Da, and amino-acid analysis confirming sequence fidelity. Lyophilised powder stored at -20 °C prior to reconstitution maximises shelf stability; once reconstituted in bacteriostatic water, vials should be stored at 2–8 °C and used within 28 days. For subjects who respond well and proceed to the full escalation schedule, subsequent purchases of the 30 mg or 60 mg vials will offer better per-dose economics.`,

    vsAlternativesTitle: 'Tirzepatide vs. Alternatives: Superior Efficacy with Manageable Trade-offs',
    vsAlternativesBody: `Tirzepatide currently represents the best-evidenced pharmacological weight-loss agent for subjects without established cardiovascular disease who prioritise maximum fat-mass reduction. Its SURMOUNT-1 results—20.9% mean weight loss at 15 mg—exceed semaglutide's STEP-1 results (14.9%) by a clinically meaningful margin, and the SURPASS-2 head-to-head directly confirmed tirzepatide's superiority over semaglutide 1 mg in matched populations. The dual GIP+GLP-1 mechanism provides not only greater appetite suppression but also enhanced adipose lipolysis and BAT thermogenesis—mechanistic advantages that compound over time in extended protocols.

Against retatrutide (the triple GLP-1/GIP/glucagon agonist), tirzepatide yields modestly lower average weight loss in early-phase trials—approximately 20–25% versus retatrutide's 24% observed in phase-2 data—but the gap is narrower than the tirzepatide-versus-semaglutide comparison, and tirzepatide's phase-3 evidence base is substantially more mature. For most research applications, tirzepatide represents the current optimal balance of documented efficacy, characterised tolerability, and supply reliability. Subjects who have previously cycled semaglutide and seek incremental fat-loss outcomes will find the dual-agonist mechanism provides the most meaningful additional benefit over their established baseline.`,
  },

  // ─────────────────────────────────────────────
  // TIRZEPATIDE 30 mg
  // ─────────────────────────────────────────────
  'glp-2t-30mg': {
    mechanismTitle: 'How Tirzepatide Works: Dual GIP and GLP-1 Receptor Co-Agonism',
    mechanismBody: `Tirzepatide is a first-in-class dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor co-agonist. It is a 39-amino-acid synthetic peptide engineered on a GIP backbone with GLP-1 receptor-binding motifs inserted at strategic positions. A C20 fatty diacid moiety attached via a mini-PEG spacer confers albumin binding analogous to that of semaglutide, extending the half-life to approximately 5 days and enabling once-weekly subcutaneous dosing. Both receptors—GIP-R and GLP-1R—are class B GPCRs that signal primarily through Gs/adenylyl cyclase/cAMP pathways, but their tissue expression patterns are distinct, and simultaneous activation creates a synergistic metabolic effect that neither receptor alone can reproduce.

GIP-R is expressed at high density in adipose tissue—both white and brown—where its activation enhances insulin-stimulated glucose uptake, promotes fatty acid esterification under energy-surplus conditions, and, crucially under caloric restriction, dramatically accelerates lipolysis and free fatty acid mobilisation. This context-dependency is central to tirzepatide's superior efficacy: in an energy-deficit state, GIP-R agonism in adipose tissue compounds the lipolytic signal rather than opposing it, driving greater absolute fat mobilisation than GLP-1 agonism alone. Simultaneously, GIP-R activation in the central nervous system amplifies the satiety signalling initiated by GLP-1R, creating a dual-pathway suppression of food intake.

GLP-1R agonism within tirzepatide mirrors the mechanisms established for semaglutide: suppression of NPY/AgRP, upregulation of POMC/CART, glucose-dependent insulin secretion enhancement, glucagon suppression, and gastric emptying delay. The additive central satiety effects from GIP-R co-stimulation mean that tirzepatide achieves greater caloric restriction for an equivalent or lower dose of GLP-1 activity. Pancreatic beta-cell function is additionally enhanced by GIP-R stimulation of beta-cell proliferation and anti-apoptotic signalling via PI3K/Akt pathways—an effect not shared by pure GLP-1 agonists.

At the adipose-tissue level, tirzepatide's combined receptor activity leads to greater reductions in subcutaneous and visceral fat than semaglutide in head-to-head comparisons. Brown adipose tissue thermogenesis is enhanced through GIP-R-mediated upregulation of UCP1 and increased sympathetic innervation of BAT depots, contributing to elevated resting energy expenditure. The aggregate result is a metabolic shift toward fat oxidation that is both more powerful and more sustained than that achieved by single-receptor GLP-1 agonists, explaining tirzepatide's superior percentage weight loss across all major clinical trials.`,

    researchTitle: 'Clinical Evidence: Tirzepatide in the SURMOUNT and SURPASS Trial Programs',
    researchBody: `The SURMOUNT program produced the most compelling weight-loss data for any pharmacological agent at the time of publication. SURMOUNT-1 showed mean body-weight reductions of 15.0%, 19.5%, and 20.9% at 5 mg, 10 mg, and 15 mg doses respectively over 72 weeks, versus 3.1% with placebo. At the 15 mg dose, 57% of participants lost at least 20% of body weight—a threshold previously achievable only with bariatric surgery. Visceral adipose tissue declined by up to 45% from baseline at maximal doses.

SURMOUNT-2 extended findings to adults with type-2 diabetes, where tirzepatide 15 mg still achieved 13.4% weight reduction. SURPASS-2 directly compared tirzepatide to semaglutide 1 mg, demonstrating significantly greater weight loss (9.3 kg vs 5.5 kg) and HbA1c reduction. SURMOUNT-4 studied a weight-loss maintenance design analogous to STEP 4, randomising subjects who had lost weight on tirzepatide to continued treatment or placebo—those continuing tirzepatide experienced further loss of 5.5% while the withdrawal group regained 14% over 52 weeks, emphasising that sustained administration is required to maintain benefits.

Body-composition analyses across the SURMOUNT program confirm approximately 84% of lost weight is adipose tissue under adequate protein intake conditions. Mechanistic substudies reveal improved skeletal muscle mitochondrial lipid oxidative capacity, suggesting tirzepatide's benefits extend to tissue metabolic quality rather than mass reduction alone.`,

    studies: [
      {
        citation: 'Jastreboff AM et al. SURMOUNT-1 Trial. N Engl J Med. 2022;387(3):205–216.',
        finding: 'Tirzepatide 15 mg achieved 20.9% mean weight loss at 72 weeks; 57% of participants lost ≥20% body weight.',
      },
      {
        citation: 'Garvey WT et al. SURMOUNT-2 Trial. Lancet. 2023;402(10402):613–626.',
        finding: 'Tirzepatide 15 mg achieved 13.4% weight loss in type-2 diabetes patients, superior to all existing diabetes pharmacotherapy.',
      },
      {
        citation: 'Frías JP et al. SURPASS-2 Trial. N Engl J Med. 2021;385(6):503–515.',
        finding: 'Tirzepatide outperformed semaglutide 1 mg on both weight loss and glycaemic control in a direct head-to-head comparison.',
      },
      {
        citation: 'Aronne LJ et al. SURMOUNT-4 Trial. JAMA. 2024;331(1):38–48.',
        finding: 'Continued tirzepatide after induction produced additional 5.5% loss; withdrawal caused 14% weight regain, confirming maintenance requirement.',
      },
      {
        citation: 'McLean BA et al. Cell Metab. 2021;33(9):1750–1765.',
        finding: 'Dual GIP/GLP-1 co-agonism produced superior adipose fat mobilisation and BAT thermogenesis vs. single-receptor agonism under caloric restriction.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea',
        description: 'Present in up to 31% of subjects at 15 mg. Timelimited to the escalation phase; resolves once a stable dose is maintained for 4+ weeks.',
        severity: 'moderate',
      },
      {
        name: 'Diarrhoea',
        description: 'Approximately 23% incidence. GLP-1R-mediated acceleration of small intestinal motility; self-limiting in most subjects within weeks of dose stabilisation.',
        severity: 'moderate',
      },
      {
        name: 'Vomiting',
        description: 'Affects 12–18% during escalation; more common with high-fat meals consumed within hours of injection.',
        severity: 'moderate',
      },
      {
        name: 'Constipation',
        description: 'Paradoxically present in ~11% of users despite diarrhoea reports in others, reflecting the heterogeneous GI motility effects of combined GIP+GLP-1 agonism.',
        severity: 'low',
      },
      {
        name: 'Hair Loss',
        description: 'Telogen effluvium—stress-induced diffuse hair shedding—reported in a minority of subjects experiencing rapid significant weight loss. Typically self-resolving within 3–6 months.',
        severity: 'low',
      },
      {
        name: 'Hypoglycaemia (with insulin use)',
        description: 'In subjects co-administering insulin or sulphonylureas, tirzepatide substantially amplifies insulin action and increases hypoglycaemia risk; insulin dose reductions are indicated.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Tirzepatide 30 mg — The Mid-Protocol Continuation Vial',
    buyersGuideBody: `The 30 mg tirzepatide vial is calibrated for subjects who have completed the initial dose-escalation phase (typically weeks 1–12 at 2.5–5 mg weekly) and are now operating at a steady-state maintenance dose of 5–10 mg per week. At 5 mg weekly, a 30 mg vial provides six weeks of supply; at 7.5 mg weekly it provides four weeks; at 10 mg weekly it covers three weeks. This range makes the 30 mg vial the practical choice for subjects in the mid-protocol phase where dose optimisation is occurring—adjustments up or down are common, and the intermediate vial size avoids committing to surplus inventory while still providing economical per-dose pricing compared to the 15 mg starter.

Operationally, subjects at this stage are most focused on fine-tuning the balance between efficacy and tolerability. The 30 mg vial allows for dose-level experiments—for example, testing whether 7.5 mg versus 10 mg provides equivalent weight-loss velocity with meaningfully better GI tolerability—without requiring immediate commitment to a full 60 mg bulk supply. Body composition tracking via bioimpedance or DXA at this phase typically confirms that fat loss is occurring predominantly from visceral and subcutaneous depots, validating protocol progression.

Documentation of purity is essential at this intermediate phase. For a 30 mg vial, the cost-per-gram ratio means that any quality shortfall represents a proportionally larger resource loss than with the 15 mg starter. Batch-specific HPLC and mass spectrometry certificates should be requested from the supplier. Reconstitution of a 30 mg vial—typically into 2–3 mL of bacteriostatic water to achieve a 10–15 mg/mL working concentration—requires careful vial preparation. Aliquoting into tuberculin syringes pre-drawn for each weekly dose and stored at 4 °C extends the practical working life of the reconstituted preparation while maintaining measurable accuracy.`,

    vsAlternativesTitle: 'Tirzepatide vs. Alternatives: Maximising Fat Loss Across Protocol Phases',
    vsAlternativesBody: `At the mid-protocol phase represented by the 30 mg vial, tirzepatide subjects are typically achieving weight-loss velocities of 0.5–1.0% of body weight per week—rates that meaningfully exceed what semaglutide achieves at equivalent protocol stages. The dual GIP+GLP-1 mechanism's advantage is most visible at this phase: subjects who previously plateaued on semaglutide often experience renewed momentum when transitioning to tirzepatide, reflecting the additional adipose lipolytic capacity conferred by GIP-R co-agonism.

Against retatrutide, the 30 mg tirzepatide vial occupies a more evidence-backed position. Phase-3 SURMOUNT data are available for tirzepatide; retatrutide is supported primarily by phase-2 data. For research requiring robust interpretive confidence at the mid-protocol stage, tirzepatide's documented dose-response relationships make outcome interpretation more reliable. Subjects who have fully plateaued at tirzepatide's 15 mg ceiling and wish to explore the triple-agonist ceiling of retatrutide will find the 30 mg tirzepatide vial a useful reference-protocol anchor before that transition.`,
  },

  // ─────────────────────────────────────────────
  // TIRZEPATIDE 60 mg
  // ─────────────────────────────────────────────
  'glp-2t-60mg': {
    mechanismTitle: 'How Tirzepatide Works: Dual GIP and GLP-1 Receptor Co-Agonism',
    mechanismBody: `Tirzepatide is a first-in-class dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor co-agonist. It is a 39-amino-acid synthetic peptide engineered on a GIP backbone with GLP-1 receptor-binding motifs inserted at strategic positions. A C20 fatty diacid moiety attached via a mini-PEG spacer confers albumin binding analogous to that of semaglutide, extending the half-life to approximately 5 days and enabling once-weekly subcutaneous dosing. Both receptors—GIP-R and GLP-1R—are class B GPCRs that signal primarily through Gs/adenylyl cyclase/cAMP pathways, but their tissue expression patterns are distinct, and simultaneous activation creates synergistic metabolic effects neither receptor alone can reproduce.

GIP-R is expressed at high density in adipose tissue—both white and brown—where its activation enhances insulin-stimulated glucose uptake and, crucially under caloric restriction, dramatically accelerates lipolysis and free fatty acid mobilisation. This context-dependency is central to tirzepatide's superior efficacy: in an energy-deficit state, GIP-R agonism in adipose tissue compounds the lipolytic signal rather than opposing it, driving greater absolute fat mobilisation than GLP-1 agonism alone. Simultaneously, GIP-R activation in the central nervous system amplifies satiety signalling from GLP-1R, creating dual-pathway appetite suppression.

GLP-1R agonism within tirzepatide mirrors semaglutide's mechanisms: suppression of NPY/AgRP, upregulation of POMC/CART, glucose-dependent insulin secretion enhancement, glucagon suppression, and gastric emptying delay. Pancreatic beta-cell function is additionally enhanced by GIP-R stimulation of beta-cell proliferation and anti-apoptotic PI3K/Akt signalling. Together, the complementary receptor profiles create a metabolic environment where central appetite control, peripheral fat mobilisation, and pancreatic function all improve simultaneously.

Brown adipose tissue thermogenesis is enhanced through GIP-R-mediated upregulation of UCP1 and increased sympathetic innervation of BAT depots, contributing to elevated resting energy expenditure independent of caloric intake. Mechanistic imaging studies in tirzepatide-treated subjects document proportionally greater reductions in visceral adipose tissue compared to subcutaneous depots—a distribution pattern that carries the highest cardiovascular and metabolic risk-reduction benefit. These combined central and peripheral actions produce weight-loss outcomes that, at the 15 mg maximal dose, approach those historically associated only with surgical intervention.`,

    researchTitle: 'Clinical Evidence: Tirzepatide in the SURMOUNT and SURPASS Trial Programs',
    researchBody: `The SURMOUNT program produced the most compelling weight-loss data for any pharmacological agent at the time of publication. SURMOUNT-1 enrolled 2,539 adults with obesity and demonstrated 20.9% mean weight loss at 15 mg over 72 weeks—with 57% of participants losing at least 20% of body weight. These outcomes exceeded semaglutide's best results by approximately 6 percentage points and challenged the assumption that pharmacotherapy could not approach bariatric surgical outcomes. Visceral adipose tissue declined by up to 45% from baseline, producing measurable improvements in hepatic steatosis and arterial compliance.

SURMOUNT-3 studied tirzepatide as an adjunct to intensive behavioural intervention, achieving an extraordinary 24.3% mean weight loss at 72 weeks—the highest ever recorded in a phase-3 weight-management trial. This result confirmed that the dual-agonist mechanism does not become redundant when intensive lifestyle intervention is added; rather, the two approaches are genuinely additive. Long-term SURMOUNT-4 data confirmed that benefits persist with continuous treatment and that withdrawal causes substantial weight regain, establishing tirzepatide as a maintenance therapy rather than a short-course intervention.

SURPASS cardiovascular outcome trials are ongoing, but the SURPASS-CVOT program is expected to report within 2025–2026. Interim cardiovascular risk-factor data from completed SURPASS trials show consistent improvements in systolic blood pressure (−6 to −8 mmHg), triglycerides (−22 to −32%), LDL-cholesterol, and inflammatory markers—supporting an anticipated cardiovascular outcome benefit comparable to or exceeding semaglutide's 20% MACE reduction in the SELECT trial.`,

    studies: [
      {
        citation: 'Jastreboff AM et al. SURMOUNT-1 Trial. N Engl J Med. 2022;387(3):205–216.',
        finding: 'Tirzepatide 15 mg produced 20.9% mean weight loss; 57% lost ≥20% body weight—approaching surgical outcomes pharmacologically.',
      },
      {
        citation: 'Wadden TA et al. SURMOUNT-3 Trial. Nat Med. 2023;29(9):2170–2178.',
        finding: 'Tirzepatide combined with intensive lifestyle intervention achieved 24.3% weight loss—the highest recorded in any phase-3 pharmacological trial.',
      },
      {
        citation: 'Aronne LJ et al. SURMOUNT-4 Trial. JAMA. 2024;331(1):38–48.',
        finding: 'Continued tirzepatide after induction produced further 5.5% loss; withdrawal caused 14% regain over 52 weeks.',
      },
      {
        citation: 'Garvey WT et al. SURMOUNT-2 Trial. Lancet. 2023;402(10402):613–626.',
        finding: 'Even in type-2 diabetes patients (with blunted weight-loss response), tirzepatide 15 mg achieved 13.4% weight reduction.',
      },
      {
        citation: 'Frías JP et al. SURPASS-2 Trial. N Engl J Med. 2021;385(6):503–515.',
        finding: 'Tirzepatide significantly outperformed semaglutide 1 mg on both weight loss and HbA1c reduction in a direct head-to-head trial.',
      },
      {
        citation: 'Dahl D et al. SURPASS-3 Trial. Lancet Diabetes Endocrinol. 2021;9(11):765–778.',
        finding: 'Tirzepatide superior to insulin degludec on HbA1c reduction and produced 12.9 kg weight loss versus 2.3 kg weight gain with insulin.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea',
        description: 'Present in up to 31% of users at maximal doses. Follows a dose-escalation pattern; minimised by slow titration. Generally resolves within 4–8 weeks of reaching a stable dose.',
        severity: 'moderate',
      },
      {
        name: 'Diarrhoea',
        description: 'Reported in approximately 23% of subjects. GLP-1R-mediated intestinal motility acceleration; self-limiting and manageable with dietary adjustment.',
        severity: 'moderate',
      },
      {
        name: 'Vomiting',
        description: 'Affects 12–18% during escalation. The 60 mg bulk format means users have likely already established tolerability; vomiting at stable doses should prompt dose re-evaluation.',
        severity: 'moderate',
      },
      {
        name: 'Lean Mass Loss',
        description: 'Approximately 16% of total weight lost can be lean mass without resistance training. At the high cumulative weight-loss levels achievable with tirzepatide, active lean mass preservation strategies are critical.',
        severity: 'moderate',
      },
      {
        name: 'Hypoglycaemia (with insulin/sulphonylureas)',
        description: 'Tirzepatide substantially amplifies insulin action; co-administration with insulin or insulin secretagogues requires proactive dose reduction of those agents.',
        severity: 'high',
      },
      {
        name: 'Gallstone Formation',
        description: 'Rapid significant weight loss increases cholelithiasis risk. At the high weight-loss levels achievable with tirzepatide, monitoring for biliary symptoms is warranted.',
        severity: 'moderate',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Tirzepatide 60 mg — Bulk Supply for Extended High-Efficacy Protocols',
    buyersGuideBody: `The 60 mg tirzepatide vial is designed for experienced research subjects who have established tolerability at doses of 10–15 mg weekly and are committed to an extended protocol cycle of 16 weeks or longer. At 10 mg weekly, 60 mg provides six weeks of dosing; at the maximal 15 mg weekly maintenance dose, it covers four weeks. For subjects running 24-week extended protocols—representing approximately the minimum duration needed to observe tirzepatide's full potential weight-loss outcome—two or three 60 mg vials represent the full cycle supply. This bulk format maximises cost efficiency for the highest-efficacy phase of tirzepatide research.

From a protocol design perspective, subjects using the 60 mg vial are typically in the weight-loss maintenance and optimisation phase: dose escalation is complete, GI tolerability is established, and the primary focus shifts to sustaining caloric deficit, preserving lean mass, and tracking body-composition metrics. At this stage, the consistency of supply provided by bulk vials becomes a protocol-integrity factor—gaps in administration due to supply logistics can meaningfully disrupt the steady-state plasma concentrations that characterise tirzepatide's weekly dosing regimen.

Quality documentation for a 60 mg vial purchase deserves the highest level of scrutiny. At this quantity, any peptide-content discrepancy or purity compromise represents a significant research investment risk. Require batch-specific HPLC purity (above 98%), mass spectrometry confirming intact molecular weight (4,813.5 Da for tirzepatide), endotoxin testing (below 1 EU/mg), and sterility documentation. Cold-chain shipping with temperature excursion logs provides assurance that lyophilised integrity has been maintained. Reconstituting a 60 mg vial into a concentrated stock solution (e.g., 3–6 mL bacteriostatic water) and aliquoting into individual dose syringes stored at 4 °C is the recommended preparation approach for maintaining dose accuracy across a multi-week protocol.`,

    vsAlternativesTitle: 'Tirzepatide vs. Alternatives: The High-Volume Efficacy Case',
    vsAlternativesBody: `At the bulk supply level represented by the 60 mg vial, subjects are committed to a tirzepatide protocol for its maximal efficacy potential. Against semaglutide's best outcomes (~15% weight loss), tirzepatide's ~21% average in SURMOUNT-1 represents an approximately 40% greater relative fat-mass reduction—a clinically and experimentally meaningful difference that justifies the step-up for subjects who have plateaued on or completed a semaglutide protocol.

The comparison to retatrutide at this stage is nuanced. Phase-2 retatrutide data (Jastreboff et al., NEJM 2023) showed 24% mean weight loss over 48 weeks at the highest dose, suggesting a potential ceiling advantage over tirzepatide. However, phase-3 retatrutide data remain pending as of early 2026, and the safety profile at scale is not yet characterised with the same confidence as tirzepatide. For researchers who require both maximum efficacy and maximum interpretive confidence from established phase-3 data, the 60 mg tirzepatide vial represents the current state-of-the-art in research-validated weight-loss pharmacology.`,
  },

  // ─────────────────────────────────────────────
  // RETATRUTIDE 10 mg
  // ─────────────────────────────────────────────
  'glp-3r-10mg': {
    mechanismTitle: 'How Retatrutide Works: Triple GLP-1, GIP, and Glucagon Receptor Agonism',
    mechanismBody: `Retatrutide (LY3437943) is a single synthetic peptide that simultaneously activates three distinct receptors: the glucagon-like peptide-1 receptor (GLP-1R), the glucose-dependent insulinotropic polypeptide receptor (GIP-R), and the glucagon receptor (GCGR). This triple co-agonism represents the leading edge of incretin pharmacology and produces a mechanistically additive weight-loss effect that exceeds any dual or single-receptor agonist developed to date. The molecule is 45 amino acids in length, derived from a glucagon backbone, with engineered amino acid substitutions conferring GLP-1R and GIP-R binding while preserving native glucagon receptor interaction. A fatty acid chain attached via a gamma-glutamic acid linker provides albumin binding sufficient for once-weekly administration.

GLP-1R activation by retatrutide follows the well-established pathway: hypothalamic appetite suppression via NPY/AgRP inhibition and POMC/CART upregulation, glucose-dependent insulin secretion from pancreatic beta-cells, glucagon suppression, and gastric motility reduction. GIP-R co-agonism adds adipose-tissue lipolytic enhancement (particularly under caloric restriction), brown adipose tissue UCP1 upregulation and thermogenesis amplification, and central satiety signal reinforcement—the same additive mechanisms responsible for tirzepatide's superiority over pure GLP-1 agents.

The defining third element—glucagon receptor agonism—introduces mechanisms entirely absent from GLP-1 and GIP-class agents. GCGR activation stimulates hepatic glucose production from glycogen and amino acids (glycogenolysis and gluconeogenesis), which in isolation would be counterproductive in metabolic management. However, in the context of simultaneous GLP-1R and GIP-R agonism, the resulting hyperglucagonaemia is held in check, and the net hepatic metabolic effect shifts toward enhanced fat oxidation (beta-oxidation of long-chain fatty acids) and thermogenesis. Hepatic GCGR activation powerfully increases hepatic fatty acid oxidation via PKA/CREB-mediated upregulation of CPT1 (carnitine palmitoyltransferase 1) and suppression of ACC (acetyl-CoA carboxylase), diverting hepatic lipid away from storage toward combustion.

Brown adipose tissue GCGR expression enables glucagon to directly stimulate BAT thermogenesis via cAMP-mediated UCP1 induction, an effect amplified by simultaneous GIP-R activation. The aggregate thermogenic contribution to retatrutide's efficacy—estimated at an additional 80–150 kcal/day above basal metabolic rate in preclinical models—represents a meaningful passive energy-expenditure increment that neither tirzepatide nor semaglutide provides. Additionally, GCGR agonism promotes satiety through central nervous system pathways independent of GLP-1R and GIP-R, including direct hypothalamic GCGR-mediated orexigenic neuron suppression. These complementary mechanisms collectively explain why retatrutide's phase-2 weight-loss data exceeded all prior pharmacological benchmarks.`,

    researchTitle: 'Clinical Evidence: Retatrutide Phase-2 Data and Mechanistic Studies',
    researchBody: `The primary published clinical dataset for retatrutide is the phase-2 dose-finding trial by Jastreboff et al. (2023), which enrolled 338 adults with obesity (BMI ≥30 or ≥27 with comorbidities) and randomised them to placebo or retatrutide at doses ranging from 1 mg to 12 mg weekly for 48 weeks. The 12 mg cohort achieved a mean body-weight reduction of 24.2% from baseline—the highest ever reported in a placebo-controlled weight-management trial for a pharmacological agent. Remarkably, the weight-loss trajectory in the 12 mg group had not plateaued at 48 weeks, suggesting that the 24-week plateau commonly observed with GLP-1 monotherapy may be substantially delayed or eliminated by the triple-agonist mechanism. Approximately 26% of participants in the highest-dose cohort achieved ≥30% body-weight loss.

Body-composition analyses in the phase-2 trial confirmed that the majority of weight lost was adipose mass. Visceral adipose tissue declined disproportionately, with MRI-measured reductions of approximately 40% in the 12 mg group. Hepatic fat fraction declined by approximately 60% from baseline in subjects with non-alcoholic fatty liver disease (NAFLD) at enrollment—a result that exceeds any pharmacological intervention previously studied in fatty liver disease. These hepatic effects are mechanistically attributable to the GCGR component, which directly upregulates hepatic fatty acid oxidation and suppresses de novo lipogenesis via CREB/PPAR-alpha pathways.

Phase-3 TRIUMPH trials are ongoing as of early 2026. The phase-2 cardiovascular biomarker data are encouraging: subjects showed improvements in blood pressure, triglycerides, LDL-cholesterol, and CRP at least as large as those seen with tirzepatide, with the GCGR component potentially providing additional lipoprotein-modulating effects through VLDL secretion suppression. The totality of available evidence positions retatrutide as potentially the most potent weight-management pharmacotherapy ever developed, pending phase-3 confirmation.`,

    studies: [
      {
        citation: 'Jastreboff AM et al. Retatrutide Phase-2 Trial. N Engl J Med. 2023;389(6):514–526.',
        finding: 'Retatrutide 12 mg weekly achieved 24.2% mean weight loss at 48 weeks—the highest recorded in any placebo-controlled pharmacological obesity trial.',
      },
      {
        citation: 'Coskun T et al. Mol Metab. 2022;57:101461.',
        finding: 'Triple GLP-1/GIP/glucagon co-agonism produced synergistic reductions in body weight, hepatic fat, and plasma lipids in preclinical models, exceeding dual-agonist benchmarks.',
      },
      {
        citation: 'Ambery P et al. Lancet. 2018;391(10140):2607–2618.',
        finding: 'Dual GLP-1/glucagon agonism reduced body weight and hepatic fat in humans, establishing the basis for triple-agonist development.',
      },
      {
        citation: 'Brandt SJ et al. Diabetes Obes Metab. 2018;20(9):2188–2200.',
        finding: 'Glucagon receptor agonism specifically enhanced hepatic fat oxidation and brown adipose tissue thermogenesis in DIO mouse models.',
      },
      {
        citation: 'Holst JJ, Rosenkilde MM. J Clin Endocrinol Metab. 2020;105(8):e2956–e2964.',
        finding: 'Review confirming that simultaneous GLP-1R, GIP-R, and GCGR activation produces non-redundant, additive metabolic benefits attributable to distinct signalling pathways.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea and Vomiting',
        description: 'Reported in approximately 45% and 25% of subjects respectively in the phase-2 trial, proportionally higher than tirzepatide. The glucagon component may amplify gastric motility changes. Slow escalation substantially reduces incidence.',
        severity: 'moderate',
      },
      {
        name: 'Diarrhoea',
        description: 'Present in approximately 20–25% of subjects. Similar mechanistic origin to other GLP-1R agonists. Dietary modifications during escalation mitigate severity.',
        severity: 'moderate',
      },
      {
        name: 'Decreased Appetite (severe)',
        description: 'The triple-agonist satiety suppression can be more pronounced than with dual agonists. Structured dietary planning and caloric monitoring are important to prevent inadequate intake.',
        severity: 'moderate',
      },
      {
        name: 'Heart Rate Elevation',
        description: 'Glucagon receptor agonism has positive chronotropic effects. Mean heart rate increases of 3–5 bpm were observed in the phase-2 trial; monitoring is warranted in subjects with cardiac history.',
        severity: 'moderate',
      },
      {
        name: 'Injection-Site Reactions',
        description: 'Mild local reactions at injection sites occur in a small percentage of users. Standard rotation protocols minimise recurrence.',
        severity: 'low',
      },
      {
        name: 'Pancreatitis (rare)',
        description: 'Class-level precaution applies across all incretin-based therapies. Persistent severe upper-abdominal pain requires evaluation.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Retatrutide 10 mg — Cautious Entry into Triple-Agonist Research',
    buyersGuideBody: `The 10 mg retatrutide vial is the entry point for researchers beginning their first triple-agonist protocol. Phase-2 trial escalation started at 1 mg weekly for the first four weeks, advancing by 1–2 mg increments every four weeks based on tolerability. A 10 mg vial provides sufficient supply for the entire introductory escalation phase (weeks 1–16 at doses of 1–4 mg weekly) while limiting financial commitment during the period of highest tolerability uncertainty. Given that retatrutide's phase-3 data were still maturing as of early 2026, researchers new to this compound benefit from the conservative inventory management that the 10 mg vial enables.

The triple-agonist mechanism produces a qualitatively different appetite-suppression experience than semaglutide or tirzepatide—many subjects report not just reduced hunger but a notable reduction in food-reward salience that manifests earlier in the escalation schedule. This heightened efficacy at low doses means that some subjects will achieve meaningful fat-loss outcomes without ever reaching the maximal 12 mg dose used in the phase-2 trial. Researchers should track weekly body-composition metrics from the outset to identify response inflection points that guide dose optimisation.

Given that retatrutide is a more complex 45-amino-acid peptide with multiple engineered modifications, quality verification is more demanding than for shorter peptides. Certificates of analysis should confirm HPLC purity above 98%, mass spectrometry verification of the intact peptide mass (~5,765 Da for retatrutide), residual solvent levels below ICH Q3C limits, and endotoxin content below 1 EU/mg. The 10 mg starter vial is the appropriate quantity to verify supplier quality before committing to larger purchases.`,

    vsAlternativesTitle: 'Retatrutide vs. Alternatives: The Triple-Agonist Frontier',
    vsAlternativesBody: `Retatrutide occupies the leading edge of weight-management pharmacology, with phase-2 data showing approximately 24% mean weight loss—exceeding tirzepatide's 20.9% SURMOUNT-1 result and semaglutide's 14.9% STEP-1 result by meaningful margins. The glucagon receptor component is the differentiating mechanism: it adds hepatic fat oxidation, BAT thermogenesis, and a third satiety pathway that neither semaglutide nor tirzepatide engages.

However, the interpretive confidence gap is substantial. Tirzepatide and semaglutide have extensive phase-3 data, cardiovascular outcome trials, and real-world safety records. Retatrutide's dataset consists primarily of phase-2 results and mechanistic studies. For researchers who prioritise efficacy maximisation over evidence maturity, retatrutide is the current leading candidate. For those who require phase-3 validation and safety characterisation before protocol initiation, tirzepatide remains the highest-efficacy well-characterised option. The 10 mg starter vial serves the former group with appropriate caution.`,
  },

  // ─────────────────────────────────────────────
  // RETATRUTIDE 15 mg
  // ─────────────────────────────────────────────
  'glp-3r-15mg': {
    mechanismTitle: 'How Retatrutide Works: Triple GLP-1, GIP, and Glucagon Receptor Agonism',
    mechanismBody: `Retatrutide (LY3437943) is a single synthetic peptide that simultaneously activates three distinct receptors: the GLP-1 receptor (GLP-1R), the GIP receptor (GIP-R), and the glucagon receptor (GCGR). This triple co-agonism represents the leading edge of incretin pharmacology and produces mechanistically additive weight-loss effects exceeding any dual or single-receptor agonist. The molecule is 45 amino acids in length, derived from a glucagon backbone, with engineered substitutions conferring GLP-1R and GIP-R binding while preserving native glucagon receptor interaction. A fatty acid chain provides albumin binding sufficient for once-weekly dosing.

GLP-1R activation suppresses hypothalamic NPY/AgRP, upregulates POMC/CART, enhances glucose-dependent insulin secretion, suppresses glucagon, and delays gastric emptying. GIP-R co-agonism adds adipose-tissue lipolytic enhancement under caloric restriction, BAT UCP1 upregulation and thermogenesis amplification, and central satiety reinforcement. The defining third element—glucagon receptor agonism—stimulates hepatic fatty acid oxidation via PKA/CREB-mediated upregulation of CPT1 and suppression of ACC, diverting hepatic lipid from storage to combustion. Hepatic GCGR activation also suppresses VLDL secretion and SREBP-1c-driven de novo lipogenesis, producing exceptional hepatic fat reductions.

Brown adipose tissue GCGR expression enables glucagon to directly stimulate BAT thermogenesis via cAMP-mediated UCP1 induction, compounded by simultaneous GIP-R activation. The estimated thermogenic contribution—80–150 kcal/day above basal metabolic rate in preclinical models—represents passive energy expenditure neither tirzepatide nor semaglutide provides. Central GCGR agonism also suppresses orexigenic signalling through hypothalamic pathways independent of GLP-1R and GIP-R, adding a third satiety mechanism unique to retatrutide.

The combination of three complementary mechanisms—central appetite suppression via three independent receptors, peripheral adipose lipolysis via GIP-R and GLP-1R, hepatic fat oxidation via GCGR, and BAT thermogenesis via GCGR+GIP-R—creates a multilevel metabolic intervention that explains retatrutide's phase-2 weight-loss data exceeding all prior pharmacological benchmarks. Unlike single-pathway agents where receptor downregulation can attenuate effects over time, the redundancy built into triple agonism sustains metabolic pressure across longer treatment durations, potentially explaining the non-plateauing weight-loss trajectory observed at 48 weeks in the phase-2 trial.`,

    researchTitle: 'Clinical Evidence: Retatrutide Phase-2 Data and Mechanistic Studies',
    researchBody: `The primary clinical dataset for retatrutide is the phase-2 dose-finding trial published by Jastreboff et al. in the New England Journal of Medicine in 2023. This trial randomised 338 adults with obesity to placebo or retatrutide doses from 1 mg to 12 mg weekly over 48 weeks. The 12 mg cohort achieved 24.2% mean weight loss—the highest recorded in any placebo-controlled pharmacological obesity trial at that time. Weight loss trajectory had not plateaued at 48 weeks in the highest-dose cohorts, suggesting mechanistic features that delay or prevent the adipostat counter-regulatory responses that typically limit extended GLP-1 monotherapy outcomes.

Hepatic benefits were particularly notable: subjects with NAFLD at baseline showed approximately 60% reductions in hepatic fat fraction by MRI, attributable primarily to the GCGR component's direct upregulation of hepatic beta-oxidation. Visceral adipose tissue decreased by approximately 40% from baseline—proportionally exceeding even tirzepatide's impressive visceral fat reductions. Cardiometabolic biomarker improvements in the phase-2 trial were comprehensive: blood pressure, triglycerides, LDL-cholesterol, fasting glucose, and inflammatory markers all improved in dose-dependent fashion.

Phase-3 TRIUMPH trials were enrolling as of early 2026. Mechanistic substudy data from the phase-2 program confirmed that retatrutide's superior outcomes reflect all three receptor pathways contributing independently: blocking any single receptor with selective antagonists in preclinical models attenuated outcomes, while the combination produced the full observed benefit. This mechanistic non-redundancy provides confidence that phase-3 results will validate rather than contradict the phase-2 signals.`,

    studies: [
      {
        citation: 'Jastreboff AM et al. Retatrutide Phase-2 Trial. N Engl J Med. 2023;389(6):514–526.',
        finding: '24.2% mean weight loss at 48 weeks with retatrutide 12 mg—the highest reported for any pharmacological weight-management agent.',
      },
      {
        citation: 'Coskun T et al. Mol Metab. 2022;57:101461.',
        finding: 'Triple GLP-1/GIP/glucagon agonism produced synergistic reductions in body weight, hepatic fat, and plasma lipids in preclinical models.',
      },
      {
        citation: 'Brandt SJ et al. Diabetes Obes Metab. 2018;20(9):2188–2200.',
        finding: 'Glucagon receptor agonism enhanced hepatic fat oxidation and BAT thermogenesis in diet-induced obesity mouse models, supporting the third-agonist component.',
      },
      {
        citation: 'Ambery P et al. Lancet. 2018;391(10140):2607–2618.',
        finding: 'Dual GLP-1/glucagon agonism produced weight loss and hepatic fat reduction in humans, validating the glucagon mechanism in the triple-agonist context.',
      },
      {
        citation: 'Holst JJ, Rosenkilde MM. J Clin Endocrinol Metab. 2020;105(8):e2956–e2964.',
        finding: 'GLP-1R, GIP-R, and GCGR activation engage non-redundant metabolic pathways, confirming additive rather than merely overlapping mechanisms.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea and Vomiting',
        description: 'Approximately 45% and 25% incidence respectively in the phase-2 trial, somewhat higher than tirzepatide. The glucagon component may amplify gastric motility changes beyond the GLP-1 effect alone.',
        severity: 'moderate',
      },
      {
        name: 'Heart Rate Elevation',
        description: 'GCGR agonism has positive chronotropic effects. Phase-2 subjects showed 3–5 bpm mean heart rate increases; this effect warrants monitoring in subjects with cardiac history.',
        severity: 'moderate',
      },
      {
        name: 'Diarrhoea',
        description: 'Present in approximately 20–25% of subjects. Managed with dietary modification during escalation; generally self-limiting within weeks of dose stabilisation.',
        severity: 'moderate',
      },
      {
        name: 'Hypoglycaemia Risk',
        description: 'In non-diabetic subjects, hypoglycaemia risk is low due to glucose-dependent mechanisms. In subjects with impaired counterregulation or those co-administering insulin, the risk is meaningfully elevated.',
        severity: 'moderate',
      },
      {
        name: 'Appetite Suppression (extreme)',
        description: 'Triple-pathway appetite suppression is more potent than dual agonists. Some subjects in the 15 mg range may need caloric monitoring to ensure nutritional adequacy.',
        severity: 'moderate',
      },
      {
        name: 'Pancreatitis (rare)',
        description: 'Class-level precaution shared with all incretin-based agents. Incidence below 0.5%; persistent severe abdominal pain warrants evaluation.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Retatrutide 15 mg — Bridging Starter and Mid-Protocol Phases',
    buyersGuideBody: `The 15 mg retatrutide vial bridges the gap between the introductory 10 mg starter and the larger bulk quantities appropriate for sustained maintenance protocols. At early escalation doses of 2–4 mg weekly, 15 mg provides 4–8 weeks of supply—covering the critical tolerability-establishment period after the initial 10 mg starter phase has been completed. Alternatively, for subjects who identified their optimal dose in the 4–6 mg weekly range during their starter phase, the 15 mg vial provides 3–4 weeks of mid-protocol continuation without excess inventory.

Research designs that require dose-comparison experiments—for example, comparing fat-loss velocity at 4 mg versus 6 mg weekly across successive 4-week blocks—find the 15 mg vial size particularly practical. It provides enough material for a structured within-subject dose-comparison without the per-dose cost premium of the 10 mg starter while avoiding the bulk commitment of the 30 mg or 60 mg options. Subjects whose research objectives include characterising individual dose-response relationships in the low-to-mid dose range will find this vial size operationally optimal.

Quality documentation requirements at this stage mirror those for the 10 mg vial: batch-specific HPLC purity (above 98%), mass spectrometry confirming the intact retatrutide peptide mass (~5,765 Da), endotoxin testing (below 1 EU/mg), and sterility certification. Given retatrutide's relative novelty in the research peptide market compared to semaglutide and tirzepatide, due diligence on supplier analytical documentation is particularly important—fewer reference datasets exist against which to benchmark quality claims, making independent third-party laboratory verification more valuable.`,

    vsAlternativesTitle: 'Retatrutide vs. Alternatives: Navigating the Triple-Agonist Evidence Landscape',
    vsAlternativesBody: `The 15 mg retatrutide vial represents a commitment to the highest-efficacy but least-characterised option in the GLP-1 peptide landscape. Against semaglutide and tirzepatide, retatrutide's phase-2 data demonstrate unambiguous superiority on absolute weight-loss percentage. The approximately 4–10 percentage-point advantage over tirzepatide at equivalent protocol duration translates to meaningful additional fat mass reduction for subjects who have already achieved significant outcomes with dual-agonist protocols.

The interpretive caveat remains that phase-3 validation is pending. Researchers choosing retatrutide at the 15 mg supply level should operate with protocols that include more frequent body-composition monitoring and metabolic biomarker assessment than would typically be applied to the more thoroughly characterised semaglutide or tirzepatide protocols. The absence of long-term safety data—particularly regarding cardiovascular outcomes, renal function, and lean mass preservation at extreme weight-loss magnitudes—means that concurrent tracking of surrogate markers is both scientifically valuable and a responsible practice when working with a novel compound.`,
  },

  // ─────────────────────────────────────────────
  // RETATRUTIDE 30 mg
  // ─────────────────────────────────────────────
  'glp-3r-30mg': {
    mechanismTitle: 'How Retatrutide Works: Triple GLP-1, GIP, and Glucagon Receptor Agonism',
    mechanismBody: `Retatrutide (LY3437943) simultaneously activates three distinct receptors: the GLP-1 receptor (GLP-1R), the GIP receptor (GIP-R), and the glucagon receptor (GCGR). This triple co-agonism represents the leading edge of incretin pharmacology. The molecule is 45 amino acids in length, derived from a glucagon backbone, with engineered substitutions conferring GLP-1R and GIP-R binding while preserving GCGR interaction. A fatty acid chain provides albumin binding enabling once-weekly dosing with a half-life of approximately 6 days.

GLP-1R activation suppresses hypothalamic NPY/AgRP, upregulates POMC/CART, enhances glucose-dependent insulin secretion, suppresses glucagon from pancreatic alpha-cells, and delays gastric emptying. GIP-R co-agonism adds adipose-tissue lipolytic enhancement under caloric restriction, BAT UCP1-mediated thermogenesis amplification, and central satiety reinforcement. GCGR agonism drives hepatic fatty acid oxidation via CPT1 upregulation and ACC suppression, BAT thermogenesis via direct UCP1 induction, VLDL suppression, and a third independent satiety signal through central GCGR-expressing neurons.

The aggregate energy expenditure contribution from the GCGR thermogenic axis—estimated at 80–150 kcal/day above baseline resting metabolic rate in preclinical models—is entirely absent from GLP-1 monotherapies and only partially present in dual GLP-1/GIP agents. When combined with the dual lipolytic and satiety effects of GLP-1R and GIP-R co-agonism, retatrutide creates a thermogenic-lipolytic-appetite-suppressive triad that explains its phase-2 performance exceeding all prior pharmacological benchmarks.

Hepatic metabolic effects are uniquely attributable to the glucagon component. GCGR agonism activates hepatic CREB, which drives expression of PGC-1alpha and PPAR-alpha—transcription factors that upregulate the entire mitochondrial beta-oxidation machinery. This results in dramatically enhanced hepatic capacity to oxidise imported fatty acids, essentially creating a metabolic drain on the systemic lipid pool that amplifies the peripheral fat mobilisation initiated by GIP-R and GLP-1R. Together, peripheral mobilisation and hepatic combustion of fatty acids create a coordinated lipid-clearance system unmatched by any currently available alternative.`,

    researchTitle: 'Clinical Evidence: Retatrutide Phase-2 Data and Mechanistic Studies',
    researchBody: `The foundational clinical evidence for retatrutide comes from the phase-2 trial published by Jastreboff et al. (2023), in which retatrutide 12 mg weekly achieved 24.2% mean body-weight reduction over 48 weeks in adults with obesity—the highest ever reported in a placebo-controlled pharmacological obesity trial. Importantly, the weight-loss trajectory had not plateaued at week 48 in the highest-dose cohorts, suggesting that with longer treatment durations, cumulative fat loss may substantially exceed the already remarkable 24% observed. Modelling based on the trajectory slope suggested that 30% loss or more could be achievable in extended protocols, a level previously attainable only through surgical intervention.

The hepatic effects documented in the phase-2 trial are mechanistically significant: subjects with NAFLD showed approximately 60% reductions in hepatic fat fraction—reductions that would be clinically transformative if confirmed in phase-3 with hepatic histology endpoints. These hepatic data support the GCGR component's independent contribution through PPAR-alpha-mediated fatty acid oxidation enhancement. Visceral fat declined by approximately 40%, with body-composition data confirming that the majority of total weight lost was adipose tissue when dietary protein was adequate.

Phase-3 TRIUMPH trials are ongoing. Mechanistic investigations confirm that all three receptor components are necessary for the full observed effect—selective antagonism of any single receptor in preclinical models reduces outcomes proportionally, confirming genuine non-redundant contribution. For the 30 mg vial format, the target research population is subjects who have confirmed individual tolerability in the 4–8 mg weekly range and are now operating in the mid-to-high dose range of an extended protocol.`,

    studies: [
      {
        citation: 'Jastreboff AM et al. N Engl J Med. 2023;389(6):514–526.',
        finding: '24.2% mean weight loss at 48 weeks with retatrutide 12 mg; weight-loss trajectory not yet plateaued, suggesting higher cumulative losses with longer treatment.',
      },
      {
        citation: 'Coskun T et al. Mol Metab. 2022;57:101461.',
        finding: 'Preclinical triple-agonist model confirmed synergistic reductions in adiposity, hepatic fat, and plasma lipids not achievable with dual or single agonists.',
      },
      {
        citation: 'Ambery P et al. Lancet. 2018;391(10140):2607–2618.',
        finding: 'Dual GLP-1/glucagon co-agonism demonstrated hepatic fat reduction and weight loss in humans, providing clinical validation of the glucagon component in retatrutide.',
      },
      {
        citation: 'Brandt SJ et al. Diabetes Obes Metab. 2018;20(9):2188–2200.',
        finding: 'Glucagon receptor agonism specifically enhanced hepatic CPT1 activity and BAT thermogenesis, contributing mechanisms absent from GLP-1/GIP-only agents.',
      },
      {
        citation: 'Holst JJ, Rosenkilde MM. J Clin Endocrinol Metab. 2020;105(8):e2956–e2964.',
        finding: 'The three receptor pathways engaged by retatrutide activate non-overlapping downstream networks, confirming additivity rather than redundancy.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea',
        description: 'Present in approximately 45% of subjects in the phase-2 trial at high doses. At the mid-protocol doses covered by the 30 mg vial, subjects have typically established tolerability, and residual nausea is mild.',
        severity: 'moderate',
      },
      {
        name: 'Heart Rate Elevation',
        description: 'GCGR-mediated positive chronotropy produces 3–5 bpm mean heart rate increases. At mid-to-high dose ranges, ongoing heart rate monitoring is advisable for subjects with cardiovascular risk factors.',
        severity: 'moderate',
      },
      {
        name: 'Diarrhoea',
        description: 'Approximately 20–25% incidence. Generally self-limiting; dietary fibre and hydration modifications help.',
        severity: 'moderate',
      },
      {
        name: 'Muscle Mass Considerations',
        description: 'At the high weight-loss magnitudes achievable with retatrutide, lean mass preservation requires active intervention. Resistance training (3+ sessions weekly) and dietary protein (1.6–2.0 g/kg target body weight) are essential.',
        severity: 'moderate',
      },
      {
        name: 'Injection-Site Reactions',
        description: 'Mild local reactions in a small percentage of users. Standard rotation protocols are effective.',
        severity: 'low',
      },
      {
        name: 'Pancreatitis (rare)',
        description: 'Class-level precaution. Incidence below 0.5%; persistent severe abdominal pain requires evaluation.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Retatrutide 30 mg — Mid-Protocol Bulk for Established Tolerance',
    buyersGuideBody: `The 30 mg retatrutide vial is appropriate for subjects who have completed the introductory tolerance-establishment phase (weeks 1–12) and confirmed that their optimal or target research dose falls in the 4–8 mg weekly range. At 4 mg weekly, 30 mg provides approximately 8 weeks of dosing; at 6 mg weekly, approximately 5 weeks; at 8 mg weekly, approximately 4 weeks. This range covers the mid-protocol consolidation phase where dose optimisation is complete, steady-state plasma concentrations are established, and the primary focus is sustained fat-loss observation rather than dose titration.

For comparative protocol designs—where researchers are examining fat-loss trajectories at retatrutide versus tirzepatide or semaglutide across matched subjects—the 30 mg format provides enough material for one full protocol arm without over-commitment. The mid-protocol phase also represents the point at which body-composition monitoring should intensify: weekly DXA or monthly MRI assessments provide the resolution needed to attribute fat-mass changes to specific protocol periods, enabling dose-optimisation decisions that maximise adipose reduction while monitoring lean mass preservation.

Procurement due diligence for the 30 mg vial should include requesting the complete certificate of analysis package: HPLC purity above 98%, mass spectrometry confirmation of the intact peptide (~5,765 Da), amino-acid sequence verification, endotoxin testing below 1 EU/mg, residual solvent analysis, and sterility testing. Cold-chain documentation—temperature excursion logs covering the entire shipping journey—is particularly important for a 30 mg quantity representing a significant per-vial investment. Reconstituting into 2–3 mL bacteriostatic water and aliquoting dose-specific syringes stored at 4 °C maintains peptide integrity across the multi-week dosing schedule.`,

    vsAlternativesTitle: 'Retatrutide vs. Alternatives: Sustained Efficacy in Extended Protocols',
    vsAlternativesBody: `At the 30 mg supply level, researchers are committed to a multi-week retatrutide protocol that will generate meaningful comparative data relative to other GLP-1-class agents. The key differentiation from tirzepatide at this protocol stage is the non-plateauing weight-loss trajectory observed in the phase-2 trial: while tirzepatide weight loss typically stabilises around week 52–72, retatrutide's triple mechanism appears to sustain momentum across longer observation windows, potentially producing greater total fat-mass reduction in extended protocols exceeding 6 months.

Against semaglutide, the comparison at the 30 mg supply stage is primarily relevant for subjects who are seeking to quantify the incremental benefit of stepping from a well-characterised single-agonist to a triple-agonist protocol. The approximately 10-percentage-point gap in mean weight loss (24% vs 15%) represents clinically and experimentally meaningful additional fat reduction—sufficient to justify the choice for research contexts prioritising maximal efficacy. The ongoing TRIUMPH phase-3 program will provide the definitive evidence base that will eventually position retatrutide relative to tirzepatide and semaglutide with the same confidence level as those agents' existing data.`,
  },

  // ─────────────────────────────────────────────
  // RETATRUTIDE 60 mg
  // ─────────────────────────────────────────────
  'glp-3r-60mg': {
    mechanismTitle: 'How Retatrutide Works: Triple GLP-1, GIP, and Glucagon Receptor Agonism',
    mechanismBody: `Retatrutide (LY3437943) simultaneously activates three distinct receptors: the GLP-1 receptor (GLP-1R), the GIP receptor (GIP-R), and the glucagon receptor (GCGR). This triple co-agonism produces mechanistically additive weight-loss effects that exceed any dual or single-receptor agonist. The 45-amino-acid peptide, derived from a glucagon backbone with engineered GLP-1R and GIP-R binding capabilities and a fatty acid-linked albumin-binding moiety, enables once-weekly dosing at a half-life of approximately 6 days.

GLP-1R activation suppresses hypothalamic NPY/AgRP orexigenic signalling, upregulates POMC/CART satiety neuropeptides, enhances glucose-dependent insulin secretion, suppresses alpha-cell glucagon release, and delays gastric emptying. GIP-R co-agonism adds adipose-tissue lipolytic enhancement under caloric restriction, BAT thermogenesis via UCP1 upregulation, and central satiety reinforcement. GCGR agonism drives hepatic fatty acid beta-oxidation via CPT1 upregulation and ACC suppression, BAT thermogenesis via independent cAMP/UCP1 activation, VLDL secretion suppression, and a third orexigenic neuron-suppressing signal through hypothalamic GCGR neurons.

This three-axis energy balance intervention—(1) triple central appetite suppression, (2) peripheral adipose lipolytic enhancement, (3) hepatic lipid combustion with thermogenic augmentation—creates a metabolic situation where energy expenditure is simultaneously elevated and energy intake is simultaneously depressed through three non-redundant mechanisms. This mechanistic redundancy is critical for sustained efficacy: as any single pathway undergoes partial receptor desensitisation over time, the remaining two pathways maintain pressure on adipose stores, explaining the non-plateauing trajectory in the phase-2 trial data.

The hepatic GCGR-mediated effects deserve particular emphasis. Activation of the hepatic CREB/PGC-1alpha/PPAR-alpha transcriptional axis by glucagon creates a hepatocyte environment of elevated mitochondrial biogenesis, enhanced respiratory capacity, and maximal lipid oxidative throughput. Fatty acids mobilised from peripheral adipose tissue by GIP-R and GLP-1R activation are delivered to hepatocytes already primed for maximal oxidation, rather than being re-esterified or exported as VLDL. This hepatic capture-and-burn function is the molecular mechanism underlying retatrutide's extraordinary hepatic fat reductions and is the defining mechanistic feature that separates triple agonism from all prior pharmacological approaches.`,

    researchTitle: 'Clinical Evidence: Retatrutide Phase-2 Data and Mechanistic Studies',
    researchBody: `The principal clinical dataset for retatrutide is the phase-2 dose-finding trial by Jastreboff et al., published in the New England Journal of Medicine in 2023. The trial achieved 24.2% mean body-weight reduction at 12 mg weekly over 48 weeks—the highest recorded in any randomised controlled trial of a pharmacological weight-management agent. The weight-loss trajectory had not reached a plateau at 48 weeks, and modelling projected continued loss in longer-duration protocols. Visceral adipose tissue declined by approximately 40%, hepatic fat by approximately 60% in subjects with baseline NAFLD, and comprehensive cardiometabolic biomarkers improved in dose-dependent fashion.

Importantly, the phase-2 dose-response analysis confirmed that each dose increment from 1 mg to 12 mg produced additional weight loss, with no clear plateau in the dose-response relationship within the studied range. This absence of a pharmacological ceiling—rare among weight-management agents—suggests that higher doses or longer treatment durations may produce even greater outcomes, subject to tolerability constraints. Mechanistic studies from the phase-2 program confirmed additive contributions from all three receptor pathways, with selective antagonist experiments in preclinical models demonstrating that removing any single receptor engagement proportionally reduced outcomes.

Phase-3 TRIUMPH program enrollment was active as of early 2026, with cardiovascular outcome data anticipated to follow primary efficacy results. Preclinical models of atherosclerosis suggest the GCGR component may provide additional vascular benefits through VLDL suppression and direct arterial wall GLP-1R effects, potentially positioning retatrutide for a MACE reduction advantage over tirzepatide when cardiovascular outcome data mature.`,

    studies: [
      {
        citation: 'Jastreboff AM et al. N Engl J Med. 2023;389(6):514–526.',
        finding: 'Retatrutide 12 mg produced 24.2% mean weight loss at 48 weeks with non-plateauing trajectory, suggesting potential for higher loss with longer treatment.',
      },
      {
        citation: 'Coskun T et al. Mol Metab. 2022;57:101461.',
        finding: 'Preclinical triple GLP-1/GIP/glucagon agonism produced synergistic metabolic benefits exceeding dual or single agonists, including hepatic fat clearance via PPAR-alpha activation.',
      },
      {
        citation: 'Brandt SJ et al. Diabetes Obes Metab. 2018;20(9):2188–2200.',
        finding: 'Glucagon receptor agonism specifically upregulated CPT1 and PPAR-alpha in hepatocytes, enhancing fatty acid oxidation capacity and explaining the hepatic fat reduction seen with retatrutide.',
      },
      {
        citation: 'Ambery P et al. Lancet. 2018;391(10140):2607–2618.',
        finding: 'Phase-2 GLP-1/glucagon dual agonist produced human clinical validation of the glucagon component\'s hepatic and thermogenic contributions.',
      },
      {
        citation: 'Holst JJ, Rosenkilde MM. J Clin Endocrinol Metab. 2020;105(8):e2956–e2964.',
        finding: 'Mechanistic review confirming non-redundant activation of independent downstream networks by GLP-1R, GIP-R, and GCGR—the scientific basis for retatrutide\'s additive outcomes.',
      },
      {
        citation: 'McLean BA et al. Cell Metab. 2021;33(9):1750–1765.',
        finding: 'Dual adipose-directed GIP/GLP-1 receptor co-agonism produced greater fat mobilisation than either agonist alone under controlled caloric restriction; the addition of GCGR further amplified this effect in triple-agonist models.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea',
        description: 'Approximately 45% incidence in phase-2 at high doses. At the sustained maintenance doses covered by the 60 mg bulk vial, subjects have established tolerability and residual nausea is typically low-grade.',
        severity: 'moderate',
      },
      {
        name: 'Heart Rate Elevation',
        description: 'GCGR-mediated positive chronotropy persists throughout treatment. Mean increases of 3–5 bpm at therapeutic doses; cardiovascular monitoring is advisable for extended protocols.',
        severity: 'moderate',
      },
      {
        name: 'Extreme Appetite Suppression',
        description: 'At maintenance doses in the 8–12 mg range, appetite suppression can reach levels that meaningfully impair voluntary caloric intake. Structured high-protein meal plans prevent nutritional deficiency.',
        severity: 'moderate',
      },
      {
        name: 'Lean Mass Loss',
        description: 'At the extraordinary weight-loss magnitudes achievable with extended retatrutide protocols, lean mass preservation requires active resistance training and protein supplementation at above-typical levels.',
        severity: 'moderate',
      },
      {
        name: 'Vomiting',
        description: 'Approximately 25% incidence in phase-2. At stable maintenance doses (the usage context for the 60 mg bulk vial), vomiting should be infrequent; persistent vomiting warrants dose re-evaluation.',
        severity: 'moderate',
      },
      {
        name: 'Pancreatitis (rare)',
        description: 'Class-level precaution for all incretin-based therapies. Below 0.5% incidence; abdominal pain of unusual severity warrants evaluation.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: Retatrutide 60 mg — Long-Cycle Bulk Supply for Maximum Efficacy',
    buyersGuideBody: `The 60 mg retatrutide vial is designed for experienced research subjects operating at maintenance doses of 8–12 mg weekly within extended multi-week protocols. At 8 mg weekly, 60 mg provides approximately 7–8 weeks; at 10 mg weekly, approximately 6 weeks; at 12 mg weekly, approximately 5 weeks. For 24-week extended protocols at maintenance doses—the minimum duration needed to approach the full weight-loss potential suggested by the phase-2 non-plateauing trajectory—two to three 60 mg vials represent the complete cycle supply. This bulk format delivers the best available per-dose economics and minimises protocol disruption from resupply logistics.

Subjects at this stage are typically well past the tolerability-establishment and dose-titration phases and are focused on sustained protocol execution, body-composition monitoring, and metabolic biomarker tracking. The consistency of supply provided by the 60 mg bulk vial ensures that the steady-state plasma concentrations characteristic of retatrutide's weekly dosing are maintained without gaps that could disrupt the ongoing thermogenic-lipolytic metabolic state. Reconstituting a 60 mg vial into 5–6 mL bacteriostatic water and aliquoting weekly doses into pre-drawn insulin syringes stored at 4 °C is the recommended preparation approach, maintaining both dose accuracy and post-reconstitution peptide integrity across the full usage period.

At this quantity level, quality verification demands the highest available documentation: batch-specific HPLC purity above 98%, mass spectrometry intact-molecule confirmation (~5,765 Da), full amino-acid sequence analysis, endotoxin below 1 EU/mg, sterility testing, residual solvent analysis per ICH Q3C, and temperature-excursion-logged cold-chain shipping documentation. Given retatrutide's novelty relative to semaglutide and tirzepatide, independent third-party laboratory verification of peptide identity and purity—rather than relying solely on supplier certificates—represents best practice for bulk purchases of this magnitude.`,

    vsAlternativesTitle: 'Retatrutide vs. Alternatives: The Maximum Efficacy Protocol',
    vsAlternativesBody: `The 60 mg retatrutide bulk vial represents the highest-efficacy option currently available in the GLP-1 and incretin peptide research landscape. The approximately 24% mean weight loss in phase-2 data, combined with a non-plateauing trajectory suggesting even greater outcomes in extended protocols, places retatrutide in a class of its own relative to tirzepatide (20.9%, plateauing around week 72) and semaglutide (15%, plateauing earlier). For research designed to characterise maximum achievable pharmacological fat-mass reduction, retatrutide at full protocol doses is the scientifically indicated choice.

The primary trade-off relative to tirzepatide and semaglutide remains evidence maturity: those agents have phase-3 data, cardiovascular outcome trials, and extensive real-world safety records that retatrutide does not yet possess. Researchers selecting retatrutide at the 60 mg bulk level are accepting this evidence uncertainty in exchange for maximum efficacy potential. This trade-off is appropriate for controlled research contexts with comprehensive monitoring protocols; it is not appropriate for unmonitored self-experimentation. Extended protocols using the 60 mg format should incorporate regular cardiovascular monitoring (resting ECG, blood pressure), metabolic panels (lipids, hepatic enzymes, glucose), and body-composition assessments to generate the safety-relevant data that will inform broader use of this novel compound.`,
  },

  // ─────────────────────────────────────────────
  // CAGRISEMA (Cagrilintide + Semaglutide) 5 mg
  // ─────────────────────────────────────────────
  'glp-1cglp-1s-5mg': {
    mechanismTitle: 'How CagriSema Works: Dual Amylin Analogue and GLP-1 Receptor Co-Agonism',
    mechanismBody: `CagriSema is a fixed-ratio combination of cagrilintide—a long-acting amylin analogue—and semaglutide, the established GLP-1 receptor agonist. The combination exploits two distinct but mechanistically complementary hormonal axes to produce additive weight-loss effects that exceed either component alone. Semaglutide's GLP-1R-mediated mechanisms are well-established: hypothalamic NPY/AgRP suppression, POMC/CART upregulation, glucose-dependent insulin secretion, glucagon suppression, and gastric emptying delay. Cagrilintide operates through an entirely different receptor family, adding satiety and metabolic regulation through the amylin/calcitonin receptor pathway.

Amylin is a 37-amino-acid peptide co-secreted with insulin from pancreatic beta-cells in response to nutrient ingestion. Its cognate receptors—complexes of the calcitonin receptor (CTR) with receptor activity-modifying proteins 1, 2, or 3 (RAMP1, RAMP2, RAMP3)—are expressed prominently in the area postrema, nucleus tractus solitarius (NTS), lateral hypothalamus, and limbic structures. Native amylin's actions include slowing gastric emptying, suppressing post-meal glucagon secretion, and inducing satiety through brainstem NTS signalling. However, native amylin has a half-life of approximately 15 minutes, making pharmacological use impractical. Cagrilintide addresses this through an engineered sequence with multiple amino acid substitutions conferring DPP-4 resistance and a fatty acid chain providing albumin binding, extending the half-life to approximately 168 hours—enabling once-weekly dosing matched to semaglutide's administration schedule.

The central mechanism of cagrilintide's satiety effect is particularly important for understanding CagriSema's superiority over semaglutide alone. While GLP-1R agonism suppresses appetite primarily through hypothalamic arcuate nucleus circuits (NPY/AgRP inhibition and POMC activation), amylin receptor activation signals through the area postrema and NTS—brainstem structures that process visceral and humoral satiety signals from the GI tract. These are anatomically distinct circuits that converge at the parabrachial nucleus and hypothalamic paraventricular nucleus to suppress meal size and frequency. The result is appetite suppression through two non-overlapping neural pathways that are additive rather than redundant.

Peripheral contributions of cagrilintide include direct suppression of glucagon secretion from alpha-cells (complementing semaglutide's glucagon suppression via GLP-1R) and slowing of gastric emptying through a mechanism distinct from but additive to semaglutide's effect on antral contractility. Importantly, amylin receptor signalling in adipose tissue has been shown in preclinical models to enhance lipolysis via cAMP-mediated HSL activation, complementing the lipolytic effects of GLP-1R activation in white adipocytes. Additionally, cagrilintide appears to modulate the mesolimbic reward system through amylin receptors expressed in the ventral tegmental area, reducing food-reward salience through a pathway distinct from GLP-1R's dopaminergic modulation—further amplifying the hedonic appetite suppression that makes GLP-1-class drugs uniquely effective at reducing high-calorie food consumption.`,

    researchTitle: 'Clinical Evidence: CagriSema Phase-2 Data and Comparative Efficacy',
    researchBody: `The pivotal early clinical data for CagriSema come from the SCALE NEXT phase-2 trial, in which the cagrilintide 2.4 mg plus semaglutide 2.4 mg combination was compared directly to each component monotherapy and placebo. Over 32 weeks, CagriSema achieved 15.6% body-weight reduction compared to 8.0% for cagrilintide alone and 5.1% for semaglutide alone (at the doses studied)—confirming that the combination effect is substantially greater than either monotherapy, with the additive contribution reflecting the non-overlapping satiety and metabolic mechanisms. The magnitude of weight loss at a relatively early timepoint (32 weeks) with a lower dose than the approved semaglutide obesity regimen (2.4 mg) suggested the potential for significantly greater outcomes at full dose optimisation and longer duration.

The REDEFINE 1 phase-3 trial investigated the full CagriSema regimen (cagrilintide 2.4 mg + semaglutide 2.4 mg) versus placebo over 68 weeks in adults with obesity without type-2 diabetes. Preliminary results presented at EASD 2024 reported approximately 22.7% mean weight loss with CagriSema—substantially exceeding semaglutide monotherapy's STEP-1 result of 14.9% and approaching tirzepatide's SURMOUNT-1 result of 20.9%. The proportion of subjects achieving ≥25% weight loss was approximately 40%, compared to approximately 15% with semaglutide monotherapy. These data position CagriSema as a genuinely superior weight-management approach relative to existing GLP-1 monotherapy and broadly competitive with dual GIP+GLP-1 agonism.

The mechanistic basis for CagriSema's superiority over semaglutide monotherapy is confirmed by responder analyses: subjects who achieved only modest weight loss with prior semaglutide treatment demonstrated meaningfully improved responses after transition to CagriSema, confirming that the amylin component adds weight-loss capacity through mechanisms not addressed by GLP-1R agonism alone. Body-composition analyses confirm that the combination produces predominantly adipose-tissue loss with lean mass preservation comparable to semaglutide monotherapy.`,

    studies: [
      {
        citation: 'Enebo LB et al. SCALE NEXT Phase-2. Lancet. 2021;397(10285):1591–1600.',
        finding: 'CagriSema (cagrilintide + semaglutide) achieved 15.6% weight loss at 32 weeks vs 8.0% for cagrilintide alone and 5.1% for semaglutide alone, confirming additive efficacy.',
      },
      {
        citation: 'Lau DCW et al. REDEFINE-1 Phase-3 (Preliminary). EASD 2024 Presentation.',
        finding: 'CagriSema 2.4 mg/2.4 mg achieved approximately 22.7% weight loss over 68 weeks in adults with obesity, substantially exceeding semaglutide monotherapy.',
      },
      {
        citation: 'Hay DL et al. Pharmacol Rev. 2015;67(4):836–877.',
        finding: 'Comprehensive review of amylin receptor pharmacology confirming distinct brainstem (NTS/area postrema) satiety signalling pathways non-overlapping with GLP-1R hypothalamic circuits.',
      },
      {
        citation: 'Turek VF et al. J Pharmacol Exp Ther. 2010;332(3):779–787.',
        finding: 'Combined amylin and GLP-1 agonism produced additive weight loss in diet-induced obese rodents by engaging complementary hypothalamic and brainstem satiety pathways.',
      },
      {
        citation: 'Baggio LL et al. Diabetes. 2017;66(6):1504–1514.',
        finding: 'Amylin/GLP-1 co-agonism enhanced lean mass preservation relative to GLP-1 monotherapy under equivalent caloric restriction in preclinical models.',
      },
    ],

    sideEffects: [
      {
        name: 'Nausea',
        description: 'Reported in approximately 46% of CagriSema-treated subjects in phase-2, modestly higher than semaglutide monotherapy, reflecting additive gastric motility effects of both components.',
        severity: 'moderate',
      },
      {
        name: 'Vomiting',
        description: 'Approximately 21% incidence; follows the standard escalation-phase pattern of GLP-1-class agents, with resolution after dose stabilisation.',
        severity: 'moderate',
      },
      {
        name: 'Injection-Site Reactions',
        description: 'CagriSema requires a single injection, but the co-formulation may produce modestly higher local reaction rates than semaglutide alone. Site rotation remains the primary countermeasure.',
        severity: 'low',
      },
      {
        name: 'Constipation',
        description: 'Additive gastric and intestinal motility reduction from both amylin and GLP-1 components can produce more pronounced constipation than semaglutide monotherapy. Fibre and hydration supplementation is particularly important.',
        severity: 'moderate',
      },
      {
        name: 'Hypoglycaemia (with co-medications)',
        description: 'Both components contribute to insulin secretion augmentation and glucagon suppression; co-administration with insulin secretagogues or exogenous insulin significantly elevates hypoglycaemia risk.',
        severity: 'high',
      },
      {
        name: 'Pancreatitis (rare)',
        description: 'Class-level incretin precaution applies. Incidence below 0.5%; persistent upper-abdominal pain warrants evaluation.',
        severity: 'high',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: CagriSema 5 mg — Novel Dual-Mechanism Entry Point',
    buyersGuideBody: `The CagriSema 5 mg vial provides an introductory quantity for researchers exploring the amylin+GLP-1 dual-mechanism approach. Because CagriSema is a co-formulation, the dose ratios and escalation schedule differ from semaglutide monotherapy—researchers should reference the REDEFINE trial protocol structures when designing escalation schedules for research use. A conservative approach beginning at low fractions of the intended maintenance dose allows simultaneous establishment of tolerability for both the amylin and GLP-1 components, as the GI side-effect profiles of both are additive.

The 5 mg vial is particularly appropriate for researchers who want to compare the amylin+GLP-1 dual mechanism against their prior semaglutide or tirzepatide experience. The qualitatively different satiety character of amylin receptor activation—described by many subjects as a more pronounced fullness signal rather than appetite pre-suppression—produces a distinct subjective experience from pure GLP-1R agonism. Observing and documenting this qualitative difference is a legitimate research objective that the 5 mg starter vial enables without requiring a large initial investment.

From a quality assurance standpoint, CagriSema verification requires confirming both peptide components: HPLC and mass spectrometry should identify both the cagrilintide (approximately 4,740 Da) and semaglutide (4,113.58 Da) peaks, with combined purity documentation for the co-formulation. Cagrilintide's amide-modified C-terminus and fatty acid attachment create a distinct mass spectrometry fingerprint that serves as a primary authenticity marker. For the 5 mg format, ensure that the vial presentation and reconstitution instructions specify the co-formulation ratio, and that reconstituted solution concentration is sufficient for accurate dose measurement at the small volumes characteristic of introductory dose levels.`,

    vsAlternativesTitle: 'CagriSema vs. Alternatives: The Amylin Advantage in Weight Management',
    vsAlternativesBody: `CagriSema's key differentiation from all GLP-1R agonists—including tirzepatide, which adds GIP-R co-agonism—is the amylin receptor pathway. Amylin receptor signalling engages brainstem satiety circuits (area postrema, NTS) that are anatomically and functionally distinct from the hypothalamic GLP-1R circuits engaged by semaglutide and the additional GIP-R circuits engaged by tirzepatide. This means that even in subjects who have experienced significant semaglutide tolerance or plateau effects over extended protocols, CagriSema's amylin component adds genuinely new satiety and metabolic regulation that these subjects have not previously been exposed to.

Against tirzepatide's SURMOUNT-1 outcome (20.9%), CagriSema's REDEFINE-1 preliminary data (~22.7%) suggest modest incremental superiority, though head-to-head trials are needed for definitive comparison. The mechanistic distinction is important: tirzepatide adds lipolytic enhancement via adipose GIP-R activation, while CagriSema adds brainstem satiety circuit engagement via amylin receptor activation. These are different mechanisms producing numerically similar outcomes, and individual response may vary based on which pathway is the limiting factor for a given subject. For researchers who have characterised their response to GLP-1+GIP co-agonism and wish to explore the amylin alternative, CagriSema represents the scientifically rational next step.`,
  },

  // ─────────────────────────────────────────────
  // AOD9604 10 mg
  // ─────────────────────────────────────────────
  'aod9604-10mg': {
    mechanismTitle: 'How AOD9604 Works: Growth Hormone Fragment and Adipocyte Lipolysis',
    mechanismBody: `AOD9604 (Anti-Obesity Drug 9604) is a synthetic peptide fragment corresponding to amino acids 177–191 of the C-terminus of human growth hormone (hGH), with an added N-terminal tyrosine for stabilisation. Unlike intact growth hormone, which exerts widespread anabolic, diabetogenic, and proliferative effects through the GH receptor (GHR) and downstream IGF-1 production, AOD9604 was designed to isolate the fat-metabolising activity of hGH without the insulin-antagonising and growth-promoting properties of the full molecule. The key discovery enabling this separation was the identification of the hGH 177–191 region as the primary sequence responsible for GH's lipolytic effect in adipose tissue, an activity mechanistically distinct from the anabolic signalling mediated by the GH receptor's N-terminal binding domains.

At the receptor level, AOD9604 does not bind the classical GH receptor or stimulate IGF-1 production, which means it lacks the hyperglycaemic, proliferative, and fluid-retention side effects associated with exogenous GH administration. Instead, AOD9604 interacts with a beta-adrenergic-like receptor on adipocyte membranes—the precise identity of which remains an active area of investigation—activating adenylyl cyclase and elevating intracellular cyclic AMP (cAMP). Elevated adipocyte cAMP activates protein kinase A (PKA), which phosphorylates two critical lipolytic effectors: hormone-sensitive lipase (HSL) at Ser563 and Ser660 (activating it), and perilipin-1 at Ser517 (releasing it from its protective role on the lipid droplet surface). Together, phosphorylated HSL and freed perilipin-1 enable the hydrolysis of stored triglycerides into diacylglycerol, monoacylglycerol, and ultimately glycerol and free fatty acids, which are released into the circulation for oxidation by peripheral tissues.

AOD9604 also demonstrates the ability to stimulate adipocyte differentiation modulation—specifically, it appears to suppress preadipocyte differentiation into mature adipocytes by downregulating adipogenic transcription factors including PPAR-gamma and C/EBP-alpha, potentially limiting the expansion of adipose tissue mass at the level of adipogenesis rather than solely at the level of triglyceride mobilisation. This anti-adipogenic effect has been observed in both in vitro adipocyte culture models and in preclinical in vivo studies, suggesting a dual mode of action: acute lipolytic mobilisation of existing fat stores and chronic suppression of new adipocyte formation.

The metabolic specificity of AOD9604 relative to full-length GH is its defining clinical advantage. Intact GH at pharmacological doses causes insulin resistance through hepatic and peripheral GHR-mediated upregulation of p85-alpha regulatory subunit expression in the PI3K insulin signalling pathway, effectively blocking insulin-stimulated GLUT4 translocation in skeletal muscle and adipose tissue. AOD9604 lacks this insulin-antagonising activity entirely—glucose tolerance testing in human subjects showed no adverse effects on fasting or postprandial glucose, making it appropriate for metabolic research contexts where glucose homeostasis preservation is a primary concern. The compound's oral bioavailability—demonstrated in some preclinical studies—represents an additional potential advantage over injectable GH fragments, though subcutaneous administration remains the most studied route.`,

    researchTitle: 'Clinical Evidence: AOD9604 Human Trials and Adipocyte Studies',
    researchBody: `AOD9604 was investigated in a series of phase-1, phase-2, and ultimately phase-3 trials by Monash University and Metabolic Pharmaceuticals (later acquired by Calzada Ltd) between the late 1990s and mid-2000s. Phase-1 safety data established that AOD9604 at doses of 1–30 mg/day (oral) was well tolerated in healthy volunteers, with no observed effects on fasting or post-load glucose, insulin sensitivity, IGF-1 levels, or lipid panels at safety doses. Phase-2 dose-finding studies (METAOD and related trials) investigated the weight-loss effect of orally administered AOD9604 in overweight and obese adults over 12 weeks. Results showed approximately 2–3 kg greater weight loss than placebo in the mid-dose cohorts (1–9 mg/day oral), with fat mass preferentially reduced over lean mass—a body-composition shift consistent with the proposed lipolytic mechanism.

A pivotal phase-3 trial investigating oral AOD9604 at 1 mg per day over 24 weeks failed to achieve statistical significance on the primary weight-loss endpoint, with the treatment group losing approximately 1 kg more than placebo. This result—disappointing relative to the phase-2 signal—likely reflected insufficient dose in the oral formulation given the limited oral bioavailability challenges of peptide therapeutics. Notably, the subcutaneous route used in most mechanistic studies consistently produces greater fat mobilisation than the oral doses studied in phase-3, suggesting that the pharmacological activity of the compound was not fully explored in the failed large-scale trial.

In vitro adipocyte studies conducted at Monash University provided foundational mechanistic data, demonstrating direct AOD9604-stimulated glycerol release (a marker of lipolysis) from isolated primary human adipocytes—an effect blocked by cAMP pathway inhibitors, confirming the adenylyl cyclase/PKA mechanism. Comparative studies showed that AOD9604 produced greater relative lipolysis in visceral adipocytes than subcutaneous adipocytes, a preferential activity profile with significant metabolic relevance given visceral fat's outsized contribution to cardiometabolic risk.`,

    studies: [
      {
        citation: 'Heffernan MA et al. J Endocrinol. 2001;168(1):175–182.',
        finding: 'AOD9604 stimulated lipolysis in isolated primary adipocytes via cAMP-mediated PKA activation, with no effect on GH receptor binding or IGF-1 secretion.',
      },
      {
        citation: 'Ng FM et al. J Mol Endocrinol. 2000;24(3):413–424.',
        finding: 'The C-terminal 177–191 fragment of GH retained full lipolytic activity while lacking the diabetogenic and anabolic receptor-binding domains of intact GH.',
      },
      {
        citation: 'Ryall JG et al. Obesity (Silver Spring). 2004;12(2):205–213.',
        finding: 'Subcutaneous AOD9604 reduced body fat mass in obese Zucker rats with preferential reduction of visceral over subcutaneous adipose depots.',
      },
      {
        citation: 'Metabolic Pharmaceuticals. Phase-2 Clinical Data (METAOD). Reported 2004.',
        finding: 'Oral AOD9604 produced approximately 2–3 kg greater fat-mass loss than placebo at 12 weeks in overweight adults, without adverse glycaemic effects.',
      },
      {
        citation: 'Cox HD et al. Drug Test Anal. 2011;3(10):706–715.',
        finding: 'Analytical characterisation of AOD9604 confirmed sequence, mass, and pharmacokinetic properties consistent with the proposed beta-3-like adipocyte receptor mechanism.',
      },
    ],

    sideEffects: [
      {
        name: 'Injection-Site Reactions',
        description: 'Mild erythema, bruising, and transient soreness at the subcutaneous injection site occur in a minority of users. Standard site-rotation protocols are effective countermeasures.',
        severity: 'low',
      },
      {
        name: 'Headache',
        description: 'Mild headache reported in a subset of subjects in phase-2 trials; mechanism is uncertain but may relate to transient blood pressure fluctuations secondary to catecholamine release from adipose tissue.',
        severity: 'low',
      },
      {
        name: 'Facial Flushing',
        description: 'Occasional transient facial flushing in the hour following injection; likely beta-adrenergic-mediated peripheral vasodilation. Brief and self-limiting.',
        severity: 'low',
      },
      {
        name: 'Gastrointestinal Discomfort',
        description: 'Mild nausea reported in a small percentage of oral administration subjects; not typically observed with subcutaneous injection. Generally self-limiting.',
        severity: 'low',
      },
      {
        name: 'Palpitations (rare)',
        description: 'Beta-adrenergic receptor-like activation in adipose tissue may cause occasional mild palpitations in sensitive individuals. Monitoring is appropriate in those with existing cardiac arrhythmia history.',
        severity: 'moderate',
      },
      {
        name: 'Theoretical Proliferative Risk',
        description: 'While AOD9604 does not bind the classical GH receptor, theoretical concerns about off-target receptor interactions remain. Preclinical safety studies and clinical trial data have not identified proliferative signals, but this theoretical concern is noted for completeness.',
        severity: 'low',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: AOD9604 10 mg — Targeted Lipolytic Research',
    buyersGuideBody: `The 10 mg AOD9604 vial is appropriate for researchers investigating the GH-fragment lipolytic mechanism either as a standalone fat-loss intervention or as a complement to GLP-1-class protocols. Unlike GLP-1 receptor agonists, AOD9604's mechanism is primarily peripheral and lipolytic—it directly mobilises stored triglycerides from adipose tissue via the cAMP/PKA/HSL pathway rather than operating through central appetite suppression. This mechanistic distinction makes it an interesting research subject for protocols investigating additive effects of concurrent central satiety suppression (via GLP-1 agonism) and peripheral fat mobilisation (via AOD9604).

Protocol design for AOD9604 research typically involves subcutaneous doses in the 200–500 mcg per injection range, administered daily or multiple times per week. At 200 mcg per day, a 10 mg vial provides approximately 50 doses—sufficient for a 7-week daily protocol or up to 14 weeks at 3 injections per week. The modest absolute dose size makes accurate measurement with insulin syringes critical, and reconstituting the 10 mg vial into 10 mL bacteriostatic water to achieve a 1 mg/mL working concentration simplifies dose measurement and reduces measurement error.

From a quality verification standpoint, AOD9604's relatively short amino-acid sequence (16 residues) makes purity verification more straightforward than for longer peptides. HPLC purity above 98% and mass spectrometry confirmation of the correct molecular weight (approximately 1,815 Da) are the primary authenticity markers. Because AOD9604 does not activate the GH receptor or stimulate IGF-1 production, researchers interested in dissecting the fat-loss contribution of the GH axis without the confounding systemic effects of full-length GH will find the 10 mg vial provides a practical experimental quantity.`,

    vsAlternativesTitle: 'AOD9604 vs. Alternatives: A Targeted Peripheral Lipolytic Tool',
    vsAlternativesBody: `AOD9604 occupies a mechanistically unique niche in the fat-loss peptide landscape. Unlike GLP-1 receptor agonists—which primarily achieve fat loss through central appetite suppression and the secondary caloric deficit this creates—AOD9604 acts directly on adipocytes to stimulate triglyceride hydrolysis. This distinction makes it potentially complementary to, rather than competitive with, GLP-1-class agents. Research combining AOD9604 with semaglutide or tirzepatide explores the additive hypothesis: if GLP-1R agonism creates the caloric deficit that makes fat mobilisation thermodynamically favourable, and AOD9604 directly stimulates the lipolytic machinery, the combination could theoretically produce fat loss exceeding either agent alone.

Against peptides like 5-Amino-1MQ—which operates at the level of preadipocyte differentiation suppression via NNMT inhibition—AOD9604 targets mature adipocyte triglyceride mobilisation rather than upstream adipogenesis. These are complementary mechanisms operating at different points in the adipocyte lifecycle. In absolute weight-loss terms, AOD9604's clinical trial data showed more modest outcomes than GLP-1 receptor agonists, reflecting the fact that peripheral lipolytic stimulation without concurrent appetite suppression does not reliably sustain the caloric deficit needed for continuous fat mass reduction. Its greatest research value lies in mechanistic studies, body-composition-specific protocols, or combination investigations rather than as a standalone weight-management intervention.`,
  },

  // ─────────────────────────────────────────────
  // 5-AMINO-1MQ 50 mg
  // ─────────────────────────────────────────────
  '5-amino-1mq-50mg': {
    mechanismTitle: 'How 5-Amino-1MQ Works: NNMT Inhibition, NAD+ Metabolism, and Adipogenesis Suppression',
    mechanismBody: `5-Amino-1-methylquinolinium (5-Amino-1MQ) is a small-molecule inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme expressed at high levels in white adipose tissue (WAT) and liver that catalyses the methylation of nicotinamide (a form of vitamin B3) using S-adenosylmethionine (SAM) as the methyl donor, producing 1-methylnicotinamide (1-MNA) and S-adenosylhomocysteine (SAH). NNMT occupies a central position in cellular metabolic regulation because it simultaneously consumes two critical metabolic intermediates: nicotinamide—a precursor to NAD+—and SAM—the universal methyl donor for epigenetic and biochemical methylation reactions. NNMT is significantly overexpressed in obese versus lean adipose tissue, creating a state of relative NAD+ precursor depletion and methyl-group insufficiency in adipocytes that promotes fat accumulation and suppresses energy expenditure.

By inhibiting NNMT, 5-Amino-1MQ produces two simultaneous metabolic consequences. First, it elevates intracellular nicotinamide concentrations and redirects nicotinamide flux toward NAD+ synthesis via the salvage pathway (nicotinamide phosphoribosyltransferase/NAMPT → nicotinamide mononucleotide/NMN → NAD+ via NMNAT). Elevated NAD+ is the essential cofactor for sirtuin deacylases (SIRT1–SIRT3) and poly(ADP-ribose) polymerases (PARPs), enzymes that regulate mitochondrial biogenesis, fatty acid oxidation, and glucose metabolism. SIRT1 activation by elevated NAD+ deacetylates and activates PGC-1alpha—the master regulator of mitochondrial biogenesis—and deacetylates PPAR-alpha, enhancing its transcriptional activation of fatty acid oxidation genes. The net result in adipocytes is a shift toward oxidative rather than lipogenic metabolism.

Second, NNMT inhibition preserves SAM availability, maintaining the cellular methyl donor pool. SAM-dependent methylation reactions are critical for epigenetic gene regulation: SAM is the substrate for DNA methyltransferases (DNMTs) and histone methyltransferases (HMTs), including the H3K4 methyltransferase complex that activates gene expression at metabolic loci. In adipocytes, reduced SAM depletion by NNMT inhibition restores methylation capacity at the promoters of thermogenic and oxidative metabolism genes—including UCP1 (uncoupling protein 1 in brown and beige adipocytes) and PGC-1alpha—that are epigenetically silenced in obese WAT. This epigenetic re-activation of thermogenic capacity represents a mechanism fundamentally different from any GLP-1-class or GH-fragment peptide: 5-Amino-1MQ does not suppress appetite or stimulate lipolysis directly; instead, it rewires adipocyte gene expression to favour energy expenditure over storage.

The anti-adipogenic effect of NNMT inhibition is perhaps the most distinctive mechanistic feature. In preadipocyte differentiation models, 5-Amino-1MQ treatment suppresses the expression of key pro-adipogenic transcription factors—PPAR-gamma, C/EBP-alpha, C/EBP-beta, and adiponectin—during the differentiation cascade, substantially reducing the conversion of preadipocytes into mature lipid-storing adipocytes. This upstream block on adipocyte expansion means that 5-Amino-1MQ addresses not only existing adipose tissue (via metabolic reprogramming toward oxidation) but also the recruitment of new adipocytes that would otherwise expand fat depots. The combination of NAD+ restoration, SIRT1/PGC-1alpha pathway activation, epigenetic thermogenesis gene reactivation, and preadipocyte differentiation suppression creates a uniquely comprehensive anti-obesity mechanism that operates entirely independently of appetite regulation.`,

    researchTitle: 'Research Evidence: NNMT Inhibition and 5-Amino-1MQ in Adipose Biology',
    researchBody: `The scientific foundation for 5-Amino-1MQ as a fat-loss compound rests primarily on preclinical and in vitro evidence characterising the role of NNMT in adipose tissue biology. A landmark study by Kraus et al. (2014) in Nature Communications demonstrated that NNMT knockdown in white adipose tissue of mice fed a high-fat diet produced a lean phenotype—reduced fat mass, improved insulin sensitivity, and elevated energy expenditure—without any change in food intake. This genetic proof-of-concept established that NNMT activity in adipose tissue is causally linked to fat accumulation, and that its inhibition is sufficient to reverse diet-induced obesity in rodent models without appetite suppression. The same study identified elevated SAM levels, enhanced NAD+ precursor flux, and increased H3K4 methylation at thermogenic gene promoters as the molecular mechanisms underlying the phenotype.

Pharmacological inhibition using early-generation NNMT inhibitors, and subsequently 5-Amino-1MQ specifically, has been studied in both cell culture and animal models. In 3T3-L1 preadipocyte cultures, 5-Amino-1MQ treatment during the differentiation window produces dose-dependent suppression of lipid accumulation, consistent with blocked adipogenesis via PPAR-gamma and C/EBP-alpha downregulation. In diet-induced obese mice, oral or injected 5-Amino-1MQ administration over 4–8 weeks produced significant reductions in fat mass with preserved lean mass, alongside improvements in glucose tolerance, insulin sensitivity, and circulating triglycerides. Mechanistic analyses in treated animals confirmed elevation of adipose tissue NAD+, SIRT1 activity, and PGC-1alpha expression—verifying on-target NNMT inhibition.

Importantly, 5-Amino-1MQ has demonstrated effects specifically in white adipose tissue depots, where NNMT overexpression is most pronounced, with preferential activity in visceral fat depots consistent with the higher NNMT expression in visceral versus subcutaneous WAT in metabolically obese subjects. Human translational data remain limited as of 2026, but NNMT expression in human adipose biopsies consistently correlates with obesity severity and insulin resistance, supporting the mechanistic relevance of the rodent and in vitro data for human application.`,

    studies: [
      {
        citation: 'Kraus D et al. Nat Commun. 2014;5:3279.',
        finding: 'NNMT knockdown in white adipose tissue of high-fat-fed mice produced a lean phenotype with reduced fat mass and improved insulin sensitivity, establishing NNMT as a causal driver of adiposity.',
      },
      {
        citation: 'Kannt A et al. Sci Rep. 2015;5:8493.',
        finding: 'NNMT expression in human adipose tissue correlates positively with BMI, insulin resistance, and dyslipidaemia, supporting translational relevance of rodent NNMT inhibition data.',
      },
      {
        citation: 'Hong S et al. J Biol Chem. 2015;290(47):28304–28314.',
        finding: 'Pharmacological NNMT inhibition in adipocytes elevated NAD+ levels, activated SIRT1/PGC-1alpha, and upregulated thermogenic gene expression through restored H3K4 methylation.',
      },
      {
        citation: 'Neelakantan H et al. Biochem Pharmacol. 2018;147:222–232.',
        finding: '5-Amino-1MQ selectively inhibited NNMT activity in adipocyte cultures, suppressed preadipocyte differentiation, and reduced triglyceride accumulation without cytotoxicity.',
      },
      {
        citation: 'Roberts FL, Markby GR. Cells. 2021;10(11):3283.',
        finding: 'Comprehensive review confirming NNMT inhibition as a validated adipose-selective mechanism for improving metabolic health via NAD+ restoration and epigenetic thermogenesis pathway reactivation.',
      },
    ],

    sideEffects: [
      {
        name: 'Gastrointestinal Discomfort',
        description: 'Mild nausea, loose stools, or abdominal discomfort reported in some oral administration contexts, likely related to the quinolinium scaffold\'s mild GI irritant properties at higher concentrations. Generally self-limiting and dose-dependent.',
        severity: 'low',
      },
      {
        name: 'Methylation Pathway Interactions',
        description: 'NNMT inhibition preserves SAM availability; the theoretical concern that excess SAM could dysregulate downstream methylation reactions exists but has not been documented at doses used in research models. Subjects with known methylation cycle disorders should exercise caution.',
        severity: 'low',
      },
      {
        name: 'NAD+ Pathway Perturbation',
        description: 'Elevating NAD+ precursor flux via NNMT inhibition intersects with the same pathways targeted by NMN and NR supplementation; concurrent use may produce additive NAD+ elevation with uncertain effects on PARP activity and cellular energy sensing.',
        severity: 'low',
      },
      {
        name: 'Liver Enzyme Elevation (theoretical)',
        description: 'NNMT is expressed in liver as well as adipose tissue; inhibition could perturb hepatic methylation reactions. Preclinical data have not demonstrated hepatotoxicity at research doses, but liver enzyme monitoring is advisable in extended protocols.',
        severity: 'low',
      },
      {
        name: 'Interaction with Niacin Supplementation',
        description: 'Concurrent nicotinamide or niacin supplementation significantly increases NNMT substrate availability, potentially reducing 5-Amino-1MQ inhibitory efficacy by mass-action competition. Researchers should standardise co-administered vitamins.',
        severity: 'low',
      },
      {
        name: 'Long-Term Safety Uncertainty',
        description: 'As with any novel small molecule with epigenetic mechanism of action, long-term safety data in humans are not available. The H3K4 methylation effects on gene expression represent a potentially durable biological change; extended use requires appropriate scientific caution.',
        severity: 'moderate',
      },
    ],

    buyersGuideTitle: 'Buyers Guide: 5-Amino-1MQ 50 mg — NNMT Inhibition for Metabolic Research',
    buyersGuideBody: `The 50 mg vial of 5-Amino-1MQ provides a practical quantity for research protocols investigating NNMT inhibition as a standalone metabolic intervention or as a complement to peptide-based fat-loss protocols. Unlike GLP-1 receptor agonists—which require weekly subcutaneous injection—5-Amino-1MQ is a small molecule that can be administered orally or via injection, offering more flexible protocol design. Typical research doses used in preclinical models scale to human equivalents in the range of 50–200 mg per day; the 50 mg vial provides sufficient material for several weeks of research at these dose levels, enabling proper characterisation of metabolic responses before committing to larger quantities.

The most scientifically interesting protocol application for 5-Amino-1MQ in 2025–2026 is as a complement to GLP-1-class agents. The mechanistic rationale is compelling: GLP-1R agonism reduces caloric intake and mobilises adipose stores by creating a caloric deficit, while NNMT inhibition simultaneously reprograms adipose tissue metabolism to favour oxidation over re-esterification and suppresses new adipocyte recruitment. These mechanisms address entirely different aspects of adipose biology—intake restriction versus metabolic reprogramming—and there is no theoretical mechanism for interference between them. Preclinical combination studies are underway in multiple research laboratories, though published human combination data are not yet available as of early 2026.

From a quality standpoint, 5-Amino-1MQ's relatively simple small-molecule structure (molecular weight approximately 174 Da) means that HPLC purity verification is straightforward and highly reliable. Purity above 99% is achievable and should be the standard when evaluating supplier quality. Nuclear magnetic resonance (NMR) spectroscopy provides definitive structural confirmation and is the gold-standard identity test for small molecules. Researchers should request both HPLC purity data and NMR spectra when sourcing 5-Amino-1MQ, and should store the compound at room temperature in a desiccated, light-protected container to prevent oxidative degradation of the quinolinium ring system.`,

    vsAlternativesTitle: '5-Amino-1MQ vs. Alternatives: Epigenetic Metabolic Reprogramming vs. Hormonal Regulation',
    vsAlternativesBody: `5-Amino-1MQ occupies a mechanistically unique space in the fat-loss compound landscape. All GLP-1-class agents—semaglutide, tirzepatide, retatrutide—and amylin-class agents like cagrilintide, and GH-fragment agents like AOD9604, operate through receptor-mediated signalling: they bind a receptor, activate a second-messenger cascade, and produce acute cellular responses. 5-Amino-1MQ operates fundamentally differently: by inhibiting NNMT, it modifies the substrate availability for NAD+ biosynthesis and epigenetic methylation reactions, producing durable changes in adipocyte gene expression programs that persist beyond the period of active compound administration. This persistence of effect—dependent on the time required for epigenetic marks to be re-established or reversed—is both the most interesting and the most scientifically uncertain aspect of the compound.

Against the GLP-1 class, 5-Amino-1MQ is not a competitive alternative—it does not produce the 15–25% weight loss observed with semaglutide, tirzepatide, or retatrutide in clinical trials. Its value proposition is different: it targets adipose tissue biology directly, at the level of differentiation and metabolic programming, rather than through appetite suppression. In this respect, it is more analogous to lifestyle interventions that improve metabolic health through tissue-level adaptations than to receptor-based pharmacological interventions that produce immediate appetite and energy intake changes. For researchers interested in the intersection of NAD+ metabolism, epigenetics, and adipose tissue function, 5-Amino-1MQ represents the most pharmacologically specific available tool for interrogating the NNMT pathway in vivo.`,
  },
};

export type ProductFAQ = { q: string; a: string };

export const productFaqs: Record<string, ProductFAQ[]> = {

  'bpc157-10mg': [
    {
      q: 'How long does BPC-157 take to work?',
      a: 'Most users report measurable pain reduction and improved range of motion within 2–4 weeks of daily use at 250–500mcg. For acute injuries the response can begin within the first week. For chronic or long-standing injuries allow 6–8 weeks before evaluating. BPC-157 works faster for localized soft-tissue injuries than for nerve damage or advanced gut pathology, which require longer protocols.',
    },
    {
      q: 'What is the correct BPC-157 dosage?',
      a: 'The standard therapeutic range is 250–500mcg per day injected subcutaneously near the injury site using a 29–31 gauge insulin syringe. For gut healing the same dose can be taken orally on an empty stomach. Start at 250mcg/day and increase to 500mcg after 2 weeks if response is insufficient. Reconstitute the 10mg vial with 2ml bacteriostatic water to get 5,000mcg/ml — a 250mcg dose is then 0.05ml (5 units on a 100-unit syringe).',
    },
    {
      q: 'Can you combine BPC-157 with TB-500?',
      a: 'Yes — this is the gold-standard healing combination. BPC-157 handles local angiogenesis, receptor upregulation, and fibroblast activation at the specific injury site. TB-500 drives systemic stem cell recruitment from any injection site, covering areas BPC-157 cannot efficiently reach locally. Together they address every phase of the repair cascade. Standard combined protocol: BPC-157 at 250–500mcg daily + TB-500 at 2.5mg twice weekly for 6–8 weeks.',
    },
  ],

  'tb500-10mg': [
    {
      q: 'What is TB-500 used for?',
      a: 'TB-500 is used for systemic tissue repair and accelerated recovery from injuries involving tendons, ligaments, and muscle. Its defining advantage is systemic delivery — injected anywhere, it distributes throughout the body and recruits stem cells to injury sites across the whole system. This makes it uniquely effective for deep tissue injuries, spinal issues, and widespread overtraining damage that cannot be easily targeted with a local injection.',
    },
    {
      q: 'What is the TB-500 dosage protocol?',
      a: 'Loading phase: 2.5mg (2,500mcg) injected subcutaneously twice per week for 4–6 weeks. Maintenance phase: 2.5mg once every 1–2 weeks ongoing. Reconstitute the 10mg vial with 2ml bacteriostatic water to get 5,000mcg/ml — a 2.5mg dose is then 0.5ml. For maximum effect pair with BPC-157 at 250–500mcg daily throughout the loading phase.',
    },
    {
      q: 'How long does TB-500 take to work?',
      a: 'TB-500 reaches peak effect during the loading phase — most users report the most significant recovery acceleration between weeks 3 and 5 of the twice-weekly injection schedule. This differs from BPC-157 which shows faster initial local response. TB-500 builds systemic efficacy across the loading period rather than producing immediate localized effects, making the full 6-week loading phase essential for evaluating results.',
    },
  ],

  'ghk-cu': [
    {
      q: 'What does GHK-CU copper peptide do?',
      a: 'GHK-CU activates over 4,000 genes involved in tissue repair, collagen synthesis, anti-inflammatory response, and antioxidant defense. It promotes skin collagen and elastin production, accelerates wound healing, modulates neurotrophic factors, and reverses some age-related gene expression changes in human cells. It is one of the most comprehensively studied anti-aging peptides, with applications in both wound healing and longevity protocols.',
    },
    {
      q: 'How is GHK-CU used — topical or injectable?',
      a: 'GHK-CU can be used both topically (dissolved in a carrier serum at 3–10% concentration applied to skin) and injected subcutaneously for systemic effects. Topical application is most commonly used for skin collagen rebuilding, wrinkle reduction, and wound healing. Subcutaneous injection provides systemic gene expression modulation across a broader biological range. Many anti-aging protocols combine both routes — topical daily for skin, subcutaneous 2–3 times per week for systemic benefits.',
    },
    {
      q: 'How long does GHK-CU take to show results?',
      a: 'Topical results for skin quality — improved firmness, wrinkle reduction, and tone — are typically visible at 4–8 weeks of consistent daily use. Systemic benefits such as improved wound healing and inflammatory modulation begin within 2–3 weeks. The gene expression changes that drive most long-term benefits accumulate over 10–12 weeks of continuous use. Pair with SNAP-8 topically for the complete anti-aging skin protocol.',
    },
  ],

  'glp-1s-5mg': [
    {
      q: 'What is the correct semaglutide starting dosage?',
      a: 'The standard starting dose is 0.25mg (250mcg) once per week injected subcutaneously. This low dose minimizes GI side effects during the adaptation period. After 4 weeks increase to 0.5mg/week. Most users titrate to 1–2mg/week over 8–12 weeks. The 5mg vial provides approximately 20 weeks of supply at the 0.25mg/week starting dose — making it the ideal choice for anyone beginning a semaglutide protocol.',
    },
    {
      q: 'How much weight loss can I expect from semaglutide?',
      a: 'The STEP 1 clinical trial (68 weeks, 2.4mg/week dose) produced 14.9% mean body weight reduction — approximately 15kg average. At lower doses typical of self-directed protocols (1–2mg/week), results are dose-dependent but clinically significant. Most users report 5–10% body weight reduction within the first 12 weeks of consistent use at therapeutic doses. Weight loss continues as long as the protocol continues — the curve does not plateau early.',
    },
    {
      q: 'What are semaglutide\'s side effects?',
      a: 'The most common side effects are gastrointestinal: nausea, vomiting, diarrhea, and constipation, primarily during dose escalation. These are dose-dependent and typically resolve within 1–2 weeks at any given dose level. Slow titration is the most effective mitigation. Other reported effects include fatigue during early titration and reduced interest in previously enjoyed foods. Serious risks include pancreatitis (rare) and thyroid concerns in those with relevant personal or family history — do not use with personal or family history of MTC or MEN2.',
    },
  ],

  'glp-1s-10mg': [
    {
      q: 'Who needs a 10mg semaglutide vial?',
      a: 'The 10mg vial is for users who have completed the titration phase and are running semaglutide at an established therapeutic maintenance dose — typically 1–2mg/week. At 1mg/week this vial provides 10 weeks of supply; at 2mg/week, 5 weeks. It is also the right choice for users who have found their optimal dose and want cost-efficient ongoing supply without committing to the maximum 15mg vial.',
    },
    {
      q: 'What is the maximum effective semaglutide dose?',
      a: 'Pharmaceutical trials (Wegovy) used a maximum of 2.4mg/week reached via a 16-week step-wise titration. Self-directed protocols typically target 1–2mg/week as the practical therapeutic range balancing efficacy with tolerability. Higher doses produce marginally greater weight loss but significantly higher GI side effect burden. The dose-response curve flattens above 2mg/week for most users.',
    },
    {
      q: 'Semaglutide vs tirzepatide — which produces better results?',
      a: 'Head-to-head trial data consistently shows tirzepatide outperforms semaglutide. SURMOUNT-1 produced 22.5% mean body weight loss for tirzepatide vs semaglutide\'s 14.9% in STEP 1 — approximately 7–8 percentage points more. Tirzepatide adds GIP receptor activation to GLP-1 signaling, producing additive appetite suppression through a second pathway. For maximum fat loss, tirzepatide is the stronger compound. Semaglutide remains the better starting point for first-time GLP-1 users due to its simpler titration and extensive human use data.',
    },
  ],

  'glp-1s-15mg': [
    {
      q: 'What is the 15mg semaglutide vial for?',
      a: 'The 15mg vial is the maximum-supply option for users running semaglutide at full therapeutic doses (2–3mg/week). At 2mg/week it provides approximately 7.5 weeks; at 3mg/week, 5 weeks. This vial is best purchased once you have confirmed your dose and tolerability — not as a starting point. It offers the best cost-per-milligram of any semaglutide option on the site.',
    },
    {
      q: 'How long should a semaglutide protocol last?',
      a: 'The STEP 1 trial ran 68 weeks with continued improvement throughout. In practice, most self-directed protocols run 12–20 weeks, evaluate results, and continue if goals have not been met. Weight tends to return when semaglutide is discontinued — making it either a long-term maintenance tool or a protocol to run alongside lifestyle changes that independently maintain results. The 15mg vial supports sustained protocols without frequent reordering.',
    },
    {
      q: 'Should I use semaglutide 15mg or switch to tirzepatide?',
      a: 'If you are already on semaglutide and responding well, the 15mg vial is simply cost-efficient supply at your established dose. If you are choosing between them for maximum fat loss, tirzepatide produced 22.5% mean weight loss vs semaglutide\'s 14.9% in their respective pivotal trials. The upgrade to tirzepatide makes most sense for users who have plateaued on semaglutide or who are starting fresh and want the strongest available single-injection GLP-1 class compound.',
    },
  ],

  'glp-2t-15mg': [
    {
      q: 'What is tirzepatide and how does it work?',
      a: 'Tirzepatide is a dual GLP-1/GIP receptor agonist — it activates both the GLP-1 receptor (like semaglutide) and the GIP receptor simultaneously. GIP activation adds appetite suppression through an entirely distinct receptor pathway and appears to enhance the GLP-1 mechanism synergistically rather than simply duplicating it. SURMOUNT-1 (15mg dose, 72 weeks) produced 22.5% mean body weight loss — the highest of any approved weight loss drug at that time and significantly better than semaglutide.',
    },
    {
      q: 'What is the tirzepatide dosage and titration protocol?',
      a: 'Starting dose: 2.5mg/week subcutaneous injection for the first 4 weeks. Titrate up by 2.5mg every 4 weeks as tolerated: 2.5mg → 5mg → 7.5mg → 10mg → 12.5mg → 15mg (max). Most users find their optimal balance of efficacy and tolerability at 5–10mg/week. Slow titration is essential — rushing the escalation schedule produces unnecessary GI side effects. The 15mg vial provides approximately 6 weeks at the 2.5mg starting dose.',
    },
    {
      q: 'Tirzepatide vs semaglutide — what is the clinical difference?',
      a: 'Semaglutide activates only the GLP-1 receptor. Tirzepatide activates both GLP-1 and GIP receptors, producing greater appetite suppression and metabolic improvement through dual pathway activation. Clinical data: tirzepatide 22.5% mean body weight loss (SURMOUNT-1) vs semaglutide 14.9% (STEP 1) — a clinically meaningful 7–8 percentage point difference. Tirzepatide also produces greater improvements in HbA1c and insulin sensitivity. It is considered the step-up compound for users seeking maximum GLP-1 class fat loss.',
    },
  ],

  'glp-2t-30mg': [
    {
      q: 'Who should use the tirzepatide 30mg vial?',
      a: 'The 30mg vial is designed for users who have completed their initial titration (8–12 weeks) and are running at an established maintenance dose — typically 5–10mg/week. At 5mg/week this provides 6 weeks; at 10mg/week, 3 weeks. It is more economical than buying multiple 15mg vials for an ongoing protocol.',
    },
    {
      q: 'How long does tirzepatide 30mg last?',
      a: 'Supply duration depends on your weekly dose. At 5mg/week: approximately 6 weeks. At 7.5mg/week: 4 weeks. At 10mg/week: 3 weeks. For a full 12-week maintenance protocol at 7.5mg/week you would need approximately 3 vials of 30mg. Most experienced users buy 2–3 vials at once for a complete protocol cycle.',
    },
    {
      q: 'When should I consider tirzepatide instead of semaglutide?',
      a: 'Consider tirzepatide when you want maximum GLP-1 class fat loss potential or when you have already run semaglutide and want to step up. Tirzepatide produced 22.5% mean weight loss vs semaglutide\'s 14.9% in their respective pivotal trials. For a first-time GLP-1 user, semaglutide is often the better starting point for tolerance assessment. For experienced users or those prioritizing maximum efficacy, tirzepatide is consistently the stronger choice.',
    },
  ],

  'glp-2t-60mg': [
    {
      q: 'Why buy the tirzepatide 60mg vial?',
      a: 'The 60mg vial is the most cost-efficient option for long-term tirzepatide protocols. SURMOUNT-4 trial data showed weight loss continued improving through 88 weeks of use, confirming that sustained protocols outperform short runs. At 10mg/week the 60mg vial provides 6 weeks; at 5mg/week, 12 weeks. For users committed to a 16–20+ week protocol, the 60mg vial reduces per-milligram cost and vial-handling frequency.',
    },
    {
      q: 'Is the tirzepatide 60mg vial a single dose?',
      a: 'No — 60mg is the total vial content, not a single injection. Tirzepatide is dosed weekly at 2.5–15mg per injection. The 60mg vial contains enough for multiple weekly injections across several weeks depending on your dose. Never attempt to inject the entire vial contents at once.',
    },
    {
      q: 'What does a full 20-week tirzepatide protocol look like?',
      a: 'Weeks 1–4: 2.5mg/week (titration). Weeks 5–8: 5mg/week. Weeks 9–12: 7.5mg/week. Weeks 13–20: maintain at 7.5–15mg/week at your tolerance ceiling. Total supply needed for 20 weeks at 7.5mg maintenance: approximately 130mg. Pair with CJC-1295/Ipamorelin throughout to preserve lean mass during significant fat loss.',
    },
  ],

  'glp-3r-10mg': [
    {
      q: 'What makes retatrutide different from semaglutide and tirzepatide?',
      a: 'Retatrutide is a triple agonist — it activates GLP-1, GIP, and glucagon receptors simultaneously. The glucagon component adds thermogenesis (increases basal metabolic rate by an estimated 5–8%), which single and dual agonists lack. Phase 2 trial data showed up to 24% body weight reduction — the highest clinical result in the GLP-1 class at that time. It remains in Phase 3 development (Eli Lilly) and is not yet an approved pharmaceutical.',
    },
    {
      q: 'What is the retatrutide dosage protocol?',
      a: 'Starting dose: 0.5–1mg/week subcutaneous injection. Titrate by 1mg every 4 weeks as tolerated: 1mg → 2mg → 4mg → 6mg → 8mg → 12mg (Phase 2 maximum). Most users find the optimal efficacy-to-tolerability balance at 4–8mg/week. The glucagon component makes GI side effects more pronounced than tirzepatide at comparable doses — meticulous titration is non-negotiable. The 10mg vial at 2mg/week provides 5 weeks — primarily covering the early titration phase.',
    },
    {
      q: 'Retatrutide vs tirzepatide — which is more effective?',
      a: 'Phase 2 data places retatrutide above tirzepatide in raw weight loss percentage — approximately 24% vs 22.5%. The glucagon receptor component adds thermogenesis (increased caloric expenditure) on top of the shared GLP-1/GIP appetite and satiety mechanisms. However, retatrutide carries higher GI side effect burden at therapeutic doses and requires more meticulous titration. It is the advanced option for experienced users who have maximized tirzepatide results and are seeking further fat loss.',
    },
  ],

  'glp-3r-15mg': [
    {
      q: 'How is retatrutide 15mg used?',
      a: 'The 15mg vial supports the retatrutide titration phase plus early maintenance at 4–6mg/week — the dose range showing optimal tolerability and clinical effect in Phase 2 data. At 4mg/week it provides approximately 3.75 weeks; at 2mg/week, 7.5 weeks. It is well-suited for users who have completed a 10mg starter vial and are now established at their dose.',
    },
    {
      q: 'What are retatrutide\'s side effects?',
      a: 'Retatrutide\'s glucagon receptor activation adds thermogenic effects but also increases GI side effect intensity compared to tirzepatide — primarily nausea, vomiting, and diarrhea during titration. These are dose-dependent and manageable with proper titration (slow, 4-week escalation increments). Metabolic effects of glucagon (increased glucose output) require attention in users with diabetes or glucose regulation issues. Consult a physician before use if you have any metabolic condition.',
    },
    {
      q: 'Can I stack retatrutide with other peptides?',
      a: 'Yes. The most important stack for retatrutide users is CJC-1295/Ipamorelin to preserve lean mass during aggressive fat loss — glucagon receptor activation increases catabolism risk at therapeutic doses. Running a GH secretagogue alongside retatrutide ensures body composition stays favorable (fat loss without significant muscle loss). Do not combine with other GLP-1 class peptides simultaneously.',
    },
  ],

  'glp-3r-30mg': [
    {
      q: 'Who is the retatrutide 30mg vial for?',
      a: 'The 30mg vial is for experienced users running retatrutide at 4–8mg/week after completing titration. At 6mg/week this provides 5 weeks; at 4mg/week, 7.5 weeks. It is the appropriate supply level for a full maintenance phase once tolerance has been confirmed through the 10mg and 15mg titration vials.',
    },
    {
      q: 'What clinical data supports retatrutide at 30mg supply doses?',
      a: 'The TRIUMPH Phase 2 trial showed 50–60% reduction in liver fat alongside significant body weight reduction with extended retatrutide use. The full therapeutic benefit of the glucagon component on metabolic health requires sustained protocols of 12+ weeks. The 30mg vial supports a full 7.5-week protocol at 4mg/week or 5 weeks at 6mg/week — enough to evaluate full clinical response.',
    },
    {
      q: 'Should I use IGF-1 LR3 with retatrutide?',
      a: 'IGF-1 LR3 is worth considering for advanced users running retatrutide, as its direct anabolic signaling at the satellite cell level can offset the catabolic pressure from glucagon receptor activation. A typical integration: run a 4-week IGF-1 LR3 cycle (20–40mcg/day) during the middle of your retatrutide protocol, then 4 weeks off. This preserves and may increase lean mass during aggressive fat loss.',
    },
  ],

  'glp-3r-60mg': [
    {
      q: 'Why choose the retatrutide 60mg vial?',
      a: 'The 60mg vial is the maximum-supply option for long-duration retatrutide protocols. At 6mg/week it provides 10 weeks; at 8mg/week, 7.5 weeks; at 12mg/week (Phase 2 maximum), 5 weeks. It offers the lowest per-milligram cost and is intended for users fully committed to a complete 12–16 week protocol at therapeutic doses above 6mg/week.',
    },
    {
      q: 'What body weight loss can I expect from extended retatrutide use?',
      a: 'Phase 2 trial data showed up to 24% body weight reduction with sustained retatrutide at doses up to 12mg/week over approximately 24 weeks. At lower therapeutic doses (4–8mg/week), real-world results typically fall in the 15–20% range for users maintaining consistent protocols. The glucagon component\'s thermogenic effect compounds over time — longer protocols produce disproportionately better results than short runs.',
    },
    {
      q: 'Is retatrutide appropriate for beginners?',
      a: 'No. Retatrutide is an advanced compound intended for users who have prior experience with GLP-1 class peptides and understand GI side effect management, titration protocols, and lean mass preservation strategies. First-time GLP-1 users should start with semaglutide 5mg to establish GLP-1 tolerance before considering tirzepatide, and only consider retatrutide after completing at least one full tirzepatide protocol.',
    },
  ],

  'glp-1cglp-1s-5mg': [
    {
      q: 'What is CagriSema and how does it differ from semaglutide alone?',
      a: 'CagriSema is a fixed-ratio combination of cagrilintide (a long-acting amylin analog) and semaglutide. Amylin is a hormone co-secreted with insulin that suppresses appetite and slows gastric emptying through an entirely separate receptor pathway from GLP-1. Combining both mechanisms produces additive appetite suppression. Phase 2 REDEFINE trial data showed approximately 15.6% weight loss at 2.4mg/2.4mg — comparable to semaglutide alone, but with distinct metabolic advantages from the amylin pathway.',
    },
    {
      q: 'Who is CagriSema best suited for?',
      a: 'CagriSema is best suited for users who have responded to semaglutide but want to add a second appetite mechanism without switching to a GIP agonist. It is also appropriate for users interested in the amylin pathway specifically — amylin has distinct effects on postprandial glucose, gastric emptying, and food reward that complement GLP-1 signaling. Both compounds have weekly dosing schedules that can be co-administered in a single injection.',
    },
    {
      q: 'What is the CagriSema dosage protocol?',
      a: 'Both cagrilintide and semaglutide are titrated independently but follow compatible weekly injection schedules. Cagrilintide starting dose: 0.16mg/week, titrating to 2.4mg over 16 weeks. Semaglutide component follows the standard semaglutide titration: 0.25mg → 0.5mg → 1mg → 2.4mg. Both can be injected simultaneously from separate vials. The 5mg vial provides starter-phase supply for each component.',
    },
  ],

  'cjc1295-ipamorelin': [
    {
      q: 'What does CJC-1295/Ipamorelin do for muscle and performance?',
      a: 'CJC-1295 is a GHRH analog that signals the pituitary to release a pulse of growth hormone. Ipamorelin is a ghrelin mimetic that amplifies that GH pulse. Together, they produce a strong pulsatile GH release that drives lean mass gain, improved workout recovery, deeper sleep quality, and body fat reduction over 8–12 weeks. Unlike exogenous HGH, they stimulate your own production — no HPTA suppression, no shutdown, and the pulsatile pattern is more physiologically appropriate.',
    },
    {
      q: 'What is the CJC-1295/Ipamorelin dosage?',
      a: 'Standard protocol: 100–200mcg each (CJC-1295 and Ipamorelin) injected subcutaneously 30–60 minutes before bed on an empty stomach. The pre-bed timing aligns with the natural nocturnal GH pulse for maximum amplification. Run 5 days on/2 days off to maintain pituitary sensitivity. Run 12-week cycles with 4-week breaks. Full body composition effects require the complete 12-week cycle — evaluate at week 8 minimum.',
    },
    {
      q: 'How long does CJC-1295/Ipamorelin take to produce results?',
      a: 'Initial effects — improved sleep quality, faster workout recovery, morning pump — are typically noticed within 2–3 weeks. Visible body composition changes (lean mass increase, fat reduction) become apparent at 6–8 weeks. Maximum results require the full 12-week cycle. The mechanism works through GH axis stimulation which is cumulative — consistent daily timing (pre-bed, fasted state) and the full protocol duration are required for optimal results.',
    },
  ],

  'igf-1lr3': [
    {
      q: 'What does IGF-1 LR3 do?',
      a: 'IGF-1 LR3 activates satellite cells (muscle stem cells) and promotes muscle hyperplasia — the creation of new muscle fibers — rather than just hypertrophy of existing fibers. The LR3 modification extends its half-life from minutes to 20–30 hours, making it practical for daily dosing. The result over a 4-week cycle is structurally measurable increases in lean mass. New fiber creation is more permanent than training-induced hypertrophy and persists after the protocol ends.',
    },
    {
      q: 'What is the IGF-1 LR3 dosage?',
      a: 'Standard protocol: 20–60mcg injected subcutaneously or intramuscularly once daily post-workout or upon waking. Start at 20mcg and assess response (check for hypoglycemia) before increasing. Run for 4 weeks maximum, then take 4 weeks off — continuous use causes receptor desensitization that the off period resets. Do not exceed 100mcg/day; doses above this produce diminishing returns and meaningfully increase hypoglycemia risk.',
    },
    {
      q: 'Should I stack IGF-1 LR3 with CJC-1295/Ipamorelin?',
      a: 'Yes — this is the GH Optimization Stack. CJC-1295/Ipamorelin stimulates upstream pulsatile GH release from the pituitary; IGF-1 LR3 provides direct downstream IGF-1 signaling at the satellite cell level. Running both simultaneously activates the full GH/IGF-1 axis. Timing: CJC-1295/Ipa pre-bed (5 days on/2 off); IGF-1 LR3 post-workout daily. Cycle IGF-1 LR3 in 4-week blocks within your 12-week CJC/Ipa cycle.',
    },
  ],

  'epithalon-50mg': [
    {
      q: 'How does Epithalon work for anti-aging and longevity?',
      a: 'Epithalon activates telomerase — the enzyme responsible for maintaining and restoring telomere length. Telomeres are the protective caps at chromosome ends that shorten with each cell division. When critically short, cells enter senescence or die. Telomere length is one of the strongest biomarkers of biological vs. chronological aging. Epithalon\'s telomerase activation slows this shortening process and in multiple studies has produced measurable telomere lengthening after a course of treatment.',
    },
    {
      q: 'What is the Epithalon dosage and protocol?',
      a: 'The established course protocol — based on Khavinson\'s human trials — is 10mg per day injected subcutaneously for 10 consecutive days. This constitutes one full course. Run 2 courses per year for sustained telomerase activation. Some users run 3–4 courses annually for more aggressive longevity protocols. The 50mg vial provides 5 days of supply at 10mg/day; two vials (100mg total) are needed to complete one full 10-day course.',
    },
    {
      q: 'How long does Epithalon take to show effects?',
      a: 'Epithalon\'s primary benefits are cellular-level changes that accumulate across repeated courses — not immediate subjective sensations. Some users report improved sleep quality and more vivid dreams within the first course. The anti-aging effects (telomere preservation, pineal function normalization, circadian rhythm improvement) are measurable with appropriate biomarkers but not immediately perceptible. The value is compounding biological protection over years, not short-term feel.',
    },
  ],

  'nad': [
    {
      q: 'What does injectable NAD+ do for longevity?',
      a: 'NAD+ is a coenzyme essential for energy metabolism in every cell that declines approximately 50% between ages 40 and 60. This decline impairs mitochondrial function, reduces DNA repair capacity via sirtuin proteins, and slows cellular energy production. Restoring NAD+ levels reverses these effects: improved mitochondrial efficiency, enhanced DNA repair, increased cellular energy, and activation of sirtuin longevity pathways (SIRT1, SIRT3). Injectable NAD+ is one of the three core mechanisms in the Longevity Anti-Aging Stack.',
    },
    {
      q: 'How is NAD+ 500mg administered?',
      a: 'Reconstitute with 1–2ml bacteriostatic water. The standard protocol is 100–500mg injected subcutaneously, 1–3 times per week. Some users run a loading phase (daily for 5–10 days) followed by maintenance dosing (2–3 times per week). NAD+ IV infusions (clinic-administered) reach higher blood concentrations but subcutaneous injection provides sustained, practical delivery for home protocols.',
    },
    {
      q: 'Is injectable NAD+ better than NMN or NR supplements?',
      a: 'Yes, for therapeutic doses. Oral NAD+ precursors (NMN, NR) must be converted to NAD+ through multiple enzymatic steps with significant attrition at each stage. Oral bioavailability studies suggest only 20–40% of ingested NMN becomes intracellular NAD+. Injectable NAD+ bypasses this conversion entirely, delivering the molecule directly to tissues at clinically relevant concentrations. For anti-aging longevity protocols, injectable NAD+ is substantially more effective per milligram of active compound delivered.',
    },
  ],

  'snap-8': [
    {
      q: 'How does SNAP-8 reduce wrinkles?',
      a: 'SNAP-8 works by competitively blocking the SNARE protein complex — the molecular mechanism that triggers muscle contraction at neuromuscular junctions. Repetitive micro-contractions from facial expressions (frowning, squinting, smiling) are the primary cause of dynamic expression lines. By moderating these contractions at the peptide level, SNAP-8 reduces the depth and frequency of expression-line formation over time. Clinical studies demonstrated up to 63% reduction in wrinkle volume with consistent topical application.',
    },
    {
      q: 'How do you apply SNAP-8 topically?',
      a: 'SNAP-8 should be dissolved in a suitable carrier — typically a serum base at 3–10% concentration. Apply to targeted areas (forehead, around eyes, between brows, perioral) twice daily, morning and evening. Allow full absorption before applying other products. Consistent daily use over 4–8 weeks is required for measurable results. Pair with GHK-CU for the complete anti-aging topical protocol — SNAP-8 reduces expression lines while GHK-CU rebuilds collagen and elastin.',
    },
    {
      q: 'Is SNAP-8 similar to Botox?',
      a: 'SNAP-8 and Botox share the same underlying mechanism — both target the SNARE complex to reduce neuromuscular signaling at expression sites. The key difference is magnitude: Botox causes temporary muscle paralysis via neurotoxin injection, while SNAP-8 produces a moderate, reversible reduction in contraction intensity via competitive topical binding. SNAP-8 is non-invasive, non-toxic, and builds effect over weeks of use. It does not replace Botox for deep established wrinkles but is highly effective for prevention and early-stage expression line formation.',
    },
  ],

  'bacteriostatic-water-reconstitution-solution-10ml': [
    {
      q: 'What is bacteriostatic water used for with peptides?',
      a: 'Bacteriostatic water (BAC water) is used to reconstitute lyophilized (freeze-dried) peptide powder for injection. The 0.9% benzyl alcohol preservative prevents bacterial contamination in multi-use vials, keeping your reconstituted peptide sterile across multiple draws over 4–6 weeks. It is a non-negotiable component of any injectable peptide protocol — never substitute plain sterile water, saline, or tap water.',
    },
    {
      q: 'How much bacteriostatic water should I add to a peptide vial?',
      a: 'The amount depends on your desired dose concentration. Standard calculation: for a 10mg BPC-157 vial, adding 2ml BAC water gives 5,000mcg/ml (0.1ml = 500mcg on an insulin syringe; 0.05ml = 250mcg). Adding 1ml gives 10,000mcg/ml (0.05ml = 500mcg). Using more water makes measuring small doses easier and more accurate. Each product page on this site includes a reconstitution table with recommended volumes for that specific peptide.',
    },
    {
      q: 'Is bacteriostatic water the same as sterile water?',
      a: 'No. Sterile water is single-use only — it contains no preservative, and once the vial is opened it cannot prevent bacterial growth on subsequent draws. Bacteriostatic water contains 0.9% benzyl alcohol which actively inhibits bacterial growth, making it safe to draw from the same reconstituted vial multiple times over 4–6 weeks. Always use bacteriostatic water for multi-dose peptide vials. 10ml is sufficient for reconstituting most individual peptide vials.',
    },
  ],
};

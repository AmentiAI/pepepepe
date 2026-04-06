const PHIOGEN_BASE = 'https://phiogen.vercel.app/products';
const PHIOGEN_IMG = 'https://phiogen.vercel.app/images/products';

function phiogen(slug: string) {
  return `${PHIOGEN_BASE}/${slug}`;
}

function img(file: string) {
  return `${PHIOGEN_IMG}/${file}`;
}

export type Protocol = {
  name: string;
  schedule: string;
  dose: string;
  notes: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  category: string;
  productType: 'injectable' | 'topical' | 'oral' | 'supply';
  tags: string[];
  image: string;
  affiliateUrl: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  whoIsFor: string;
  protocols: Protocol[];
  synergies: string[];
  seoTitle: string;
  researchRating: number;
  popularityRank: number;
  highlights: string[];
};

export const allProducts: Product[] = [
  // ─── HEALING ──────────────────────────────────────────────────────────────
  {
    slug: 'bpc157-10mg',
    name: 'BPC-157 10mg',
    tagline: 'The body\'s own repair peptide — accelerates healing in tendon, muscle, gut, and nerve tissue',
    price: 59.99,
    category: 'healing',
    productType: 'injectable',
    tags: ['healing', 'tendon', 'gut', 'anti-inflammatory', 'beginner-friendly'],
    image: img('bpc-157-10mg.png'),
    affiliateUrl: phiogen('bpc-157-10mg'),
    shortDescription: 'BPC-157 is a synthetic pentadecapeptide derived from human gastric juice that accelerates healing across virtually every tissue type — from tendons to intestinal lining.',
    fullDescription: `Think of BPC-157 as the body's universal first responder — a 15-amino-acid signal peptide that mobilizes healing resources across every tissue type simultaneously. Whether the problem is a torn tendon that hasn't healed after months of physical therapy, a gut lining damaged by years of NSAIDs, or a nerve injury that conventional medicine offers little for, BPC-157 intervenes at the cellular level to accelerate the repair process that should have happened naturally — but didn't.

What separates BPC-157 from single-target healing agents is its reach. A joint inflammation compound works on joints. An intestinal supplement works in the gut. BPC-157 does both — and also accelerates muscle repair, promotes nerve regeneration, rebuilds blood vessel networks at injury sites, and moderates the inflammatory cascade that keeps old injuries from fully resolving. It activates the same fibroblasts that lay down new collagen in tendons while simultaneously stimulating the epithelial cell proliferation that patches a damaged intestinal wall. It does this without touching your hormone levels, suppressing your adrenal axis, or creating dependency.

The gut application deserves specific attention. BPC-157 counteracts the intestinal damage that NSAIDs cause — a common and underappreciated problem for anyone who regularly uses ibuprofen or naproxen. For leaky gut, IBD, or intestinal permeability issues, oral administration targets the gut tissue directly. For musculoskeletal injuries, subcutaneous injection near the injury site delivers the signal where it's needed most. The flexibility in administration route means BPC-157 adapts to whatever problem you're solving.

With over 100 published studies and no observed toxicity at therapeutic doses, BPC-157 has an unusually strong safety record. It doesn't compete with other compounds in your stack, doesn't require cycling off, and produces noticeable results within 2–4 weeks in most applications. For anyone dealing with an injury that hasn't responded to conventional approaches, this is the place to start.`,
    benefits: [
      'Heals across every tissue type: tendon, ligament, muscle, gut, nerve, and bone simultaneously',
      'Builds new blood vessel networks at injury sites — accelerates nutrient delivery to damaged tissue',
      'Oral administration heals gut lining directly — effective for leaky gut, IBD, and NSAID damage',
      'No hormone suppression, no cycling required, no interactions with other compounds',
      'Promotes nerve regeneration in peripheral nerve injuries and spinal damage',
      'Reduces chronic inflammation at injury sites without cortisol elevation',
      'Noticeable healing acceleration typically within 2–4 weeks of consistent use',
    ],
    whoIsFor: 'Athletes and active people dealing with persistent injuries, chronic pain, or gut issues that haven\'t responded to conventional treatment.',
    protocols: [
      {
        name: 'Injury Repair Protocol',
        schedule: 'Once or twice daily',
        dose: '250–500mcg subcutaneous near injury site',
        notes: 'Inject as close to the injured tissue as safely accessible. Use a 29–31g insulin syringe. Run for 4–8 weeks depending on injury severity. Can pair with TB-500 for systemic reach.',
      },
      {
        name: 'Gut Healing Protocol',
        schedule: 'Once daily on empty stomach',
        dose: '250–500mcg oral (dissolved in bacteriostatic water, swallowed)',
        notes: 'Oral route targets gut tissue directly. Take 30 minutes before first meal. Run 4–6 weeks for leaky gut or IBD. Can be combined with KPV for enhanced mucosal repair.',
      },
      {
        name: 'Systemic Maintenance',
        schedule: 'Once daily',
        dose: '250mcg subcutaneous abdomen',
        notes: 'Lower-dose maintenance after acute injury phase. Inject abdomen for systemic distribution. Some users run indefinitely at 250mcg/day; research supports long-term safety.',
      },
    ],
    synergies: ['tb500-10mg', 'ghk-cu', 'cjc1295-ipamorelin', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'BPC-157 Dosage & Protocol Guide — Healing Benefits & Results | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 1,
    highlights: ['100+ published studies', 'Tendon & gut repair', 'No hormonal impact'],
  },
  {
    slug: 'tb500-10mg',
    name: 'TB-500 10mg',
    tagline: 'Systemic tissue repair peptide — regenerates muscle, accelerates recovery, reduces inflammation body-wide',
    price: 59.99,
    category: 'healing',
    productType: 'injectable',
    tags: ['healing', 'muscle', 'anti-inflammatory', 'systemic', 'recovery'],
    image: img('tb-500-thymosin-beta-4-10mg.png'),
    affiliateUrl: phiogen('tb-500-thymosin-beta-4-10mg'),
    shortDescription: 'TB-500 is a synthetic version of Thymosin Beta-4, a naturally occurring protein that drives systemic tissue repair and dramatically reduces recovery time after injury.',
    fullDescription: `TB-500 earned its reputation in elite sport — and for good reason. As a synthetic version of Thymosin Beta-4, a protein naturally triggered by injury in every cell of the body, TB-500 has been the compound of choice for professional athletes dealing with tendon and ligament injuries that needed to heal on an accelerated timeline. Its defining characteristic is reach: inject it anywhere and it works everywhere. That systemic delivery makes it particularly valuable for the injuries that are hardest to treat locally — deep tissue tears, distributed overtraining damage, spinal injuries, and anything where a needle near the site simply isn't practical.

The mechanism driving this systemic reach is actin sequestration and directed cell migration. TB-500 binds G-actin and modulates actin polymerization dynamics, which fundamentally controls how cells move. The practical result is that stem cells and progenitor cells migrate to injury sites at dramatically accelerated rates — the body's repair workforce gets to the construction zone faster. Simultaneously, TB-500 upregulates the matrix metalloproteinases that remodel damaged tissue architecture, rebuilding the structural integrity of tendons, ligaments, and muscle fascia more rapidly than the body would manage unassisted.

The elite performance world has documented 30–50% reductions in recovery time from serious tendon and ligament injuries with TB-500 protocols. This isn't a marginal improvement — it's the difference between a 12-week and a 20-week recovery for a significant soft tissue injury. For recreational athletes and active people who simply can't afford extended time off from training, this compression of recovery time changes what's possible.

When paired with BPC-157, TB-500 completes a two-sided healing approach: BPC-157 handles local angiogenesis and receptor signaling at the specific injury site while TB-500 drives systemic stem cell recruitment and matrix remodeling. Run together for 6–8 weeks, this combination addresses every phase of the tissue repair process in a way neither compound achieves alone.`,
    benefits: [
      'Systemic delivery from any injection site — ideal for injuries that can\'t be injected locally',
      'Accelerates stem cell and progenitor cell migration to injury sites',
      'Documented 30–50% reduction in recovery time for tendon and ligament injuries',
      'Remodels damaged extracellular matrix architecture for full structural repair',
      'Reduces inflammation systemically by downregulating pro-inflammatory cytokines',
      'Restores flexibility and reduces tissue stiffness in post-injury fibrosis',
      'The essential complement to BPC-157 — together they cover the full repair cascade',
    ],
    whoIsFor: 'Serious athletes and active people with significant soft tissue injuries — especially those involving deep tissue, tendons, or areas where local injection isn\'t practical.',
    protocols: [
      {
        name: 'Loading Phase (Weeks 1–4)',
        schedule: 'Twice weekly',
        dose: '2.0–2.5mg subcutaneous or IM',
        notes: 'Can inject anywhere — abdomen, thigh, or shoulder are common. Loading phase saturates the system for maximum effect. No need to inject near the injury site.',
      },
      {
        name: 'Maintenance Phase (Weeks 5–8)',
        schedule: 'Once weekly',
        dose: '2.0mg subcutaneous',
        notes: 'After loading phase, maintain with once-weekly injection. Can extend maintenance phase indefinitely at this dose. Pair with BPC-157 during loading for optimal results.',
      },
    ],
    synergies: ['bpc157-10mg', 'ghk-cu', 'igf-1lr3', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'TB-500 Dosage & Protocol Guide — Injury Recovery Results | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 2,
    highlights: ['Systemic healing reach', 'Stem cell recruitment', 'Gold standard with BPC-157'],
  },

  // ─── FAT LOSS ─────────────────────────────────────────────────────────────
  {
    slug: 'glp-1s-5mg',
    name: 'Semaglutide 5mg',
    tagline: 'GLP-1 receptor agonist — clinically proven appetite reduction and sustainable fat loss',
    price: 79.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'appetite', 'glp-1', 'beginner', 'metabolic'],
    image: img('semaglutide-3mg.png'),
    affiliateUrl: phiogen('semaglutide-3mg'),
    shortDescription: 'Semaglutide is the GLP-1 receptor agonist behind Ozempic and Wegovy — delivering clinically significant fat loss through appetite suppression and slowed gastric emptying.',
    fullDescription: `The first 20 weeks of a semaglutide protocol are where you learn everything important: how your body responds, what dose keeps appetite suppression meaningful without the side effects becoming disruptive, and whether this approach fits your lifestyle. The 5mg vial is built for exactly this phase. At the recommended starting dose of 0.25mg/week for the first four weeks, this vial covers your entire titration period and gives you room to find where you actually want to maintain.

Most people starting semaglutide underestimate how different food feels within the first few weeks. The reduction in appetite isn't a willpower boost — it's a genuine neurological shift. GLP-1 receptors in the hypothalamus that normally drive hunger and food-seeking behavior are being consistently activated, and the result is that the urgency around eating simply diminishes. You still eat, but the grip that food previously had — the constant thoughts about the next meal, the inability to stop at a reasonable portion — that loosens considerably for most users by week three or four.

What the first 20 weeks also teach you is how to manage the protocol. Some people tolerate faster titration without nausea issues; others need to sit at a given dose for six or eight weeks before stepping up. Some find that 0.5mg/week is plenty; others need to reach 1.0mg before appetite suppression becomes meaningful. This vial gives you the supply to find your answer without having committed to more than you need. There's no pressure to rush to the maximum dose — the best maintenance dose is the lowest one that keeps results moving.

Starting your first semaglutide protocol also means building the habits that make the pharmacology work. The peptide creates the conditions for sustainable eating by dampening appetite signals — but the dietary structure you build during these early weeks is what turns short-term fat loss into lasting body composition change. The 5mg vial is your entry point: the lowest-commitment, best-fit starting option for anyone new to GLP-1 protocols.`,
    benefits: [
      'Perfect entry-point supply for a full 20-week titration at starting doses',
      'Appetite reduction typically noticeable by week 3–4 — not gradual willpower, an actual neurological shift',
      'Lets you find your personal optimal dose before committing to larger purchases',
      'Slows gastric emptying so meals satisfy longer — you eat less without feeling deprived',
      'Once-weekly injection — the simplest injectable fat loss protocol available',
      'Improves fasting glucose and insulin sensitivity as a meaningful secondary benefit',
      'Same pharmacology as Ozempic and Wegovy, without the pharmacy cost',
    ],
    whoIsFor: 'Anyone starting their first GLP-1 protocol who wants to ease in, test tolerance, and build the habit before committing to higher doses.',
    protocols: [
      {
        name: 'Standard Titration Protocol',
        schedule: 'Once weekly injection',
        dose: 'Weeks 1–4: 0.25mg | Weeks 5–8: 0.5mg | Weeks 9–12: 1.0mg | Maintenance: 1.0–2.4mg',
        notes: 'Slow titration is critical to minimize GI side effects (nausea, vomiting). Never rush to a higher dose. Inject subcutaneously — abdomen, thigh, or upper arm. Rotate sites.',
      },
      {
        name: 'Aggressive Protocol (Experienced Users)',
        schedule: 'Once weekly injection',
        dose: 'Weeks 1–2: 0.5mg | Weeks 3–4: 1.0mg | Weeks 5+: 1.5–2.4mg',
        notes: 'Only for users who have previously tolerated semaglutide. Higher GI side effect risk. Anti-nausea medication (ondansetron) available OTC to manage symptoms.',
      },
    ],
    synergies: ['glp-1cglp-1s-5mg', 'cjc1295-ipamorelin', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Semaglutide Dosage & Titration Guide — GLP-1 Fat Loss Protocol | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 3,
    highlights: ['14.9% body weight loss', 'Once-weekly injection', 'Same as Ozempic/Wegovy'],
  },
  {
    slug: 'glp-1s-10mg',
    name: 'Semaglutide 10mg',
    tagline: 'Double-vial supply of semaglutide — ideal for extended fat loss protocols',
    price: 99.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'appetite', 'glp-1', 'extended-supply', 'metabolic'],
    image: img('semaglutide-6mg.png'),
    affiliateUrl: phiogen('semaglutide-6mg'),
    shortDescription: 'The 10mg semaglutide vial provides extended protocol supply — sufficient for 40+ weeks at starter doses or 16–20 weeks at therapeutic weight loss doses up to 0.5mg/week.',
    fullDescription: `By the time you're ready for a 10mg vial, something important has shifted: you've proven the protocol works for you. You've found your dose, you know how your body responds, and the appetite suppression has become a reliable tool rather than an experiment. This vial is for the momentum phase — maintaining and building on progress that's already underway, without the friction of frequent restocking.

At 0.5mg/week maintenance, 10mg covers 20 weeks of continuous protocol. At 1.0mg/week, you're looking at 10 weeks. Most users in this phase aren't dramatically changing their dose week to week; they've landed somewhere in the 0.5–1.5mg range that provides meaningful appetite control and are now focused on consistency. The psychological difference of having an extended supply on hand matters — it removes the "running low" anxiety that can cause people to skip injections or disrupt their weekly schedule.

This is also the stage where body recomposition becomes a real possibility. Users who pair semaglutide with CJC-1295/Ipamorelin during this phase find that the combined effect — GLP-1's caloric deficit facilitation plus GH peptides' lean mass preservation and growth — produces body composition improvements that diet alone can't replicate. Semaglutide appears to preferentially draw from fat stores during its fat loss phase, and this preference becomes more pronounced when GH signaling is providing an anabolic counterforce. The result is simultaneous fat loss and muscle maintenance, or in some cases, genuine recomposition.

The 10mg vial also opens access to what semaglutide does beyond the scale number — improvements in fasting glucose, insulin sensitivity, triglycerides, and even liver fat accumulation that often go unnoticed because users focus only on weight. These metabolic improvements compound over weeks and represent real health gains independent of aesthetic results. At the 10mg level, you're building the sustained protocol duration where those secondary benefits become measurable.`,
    benefits: [
      '20-week supply at 0.5mg/week — the ideal maintenance-phase purchase',
      'Pairs with GH peptides for body recomposition: fat loss with lean mass preservation',
      'Removes restocking friction — consistent supply enables consistent weekly dosing',
      'Metabolic improvements in insulin sensitivity, triglycerides, and liver fat compound over extended use',
      'Preferentially draws from fat stores while preserving lean muscle during deficit',
      'Covers the full momentum phase: from early progress through established maintenance',
      'Best cost-per-mg across the semaglutide range for sustained protocols',
    ],
    whoIsFor: 'Users who have completed their initial titration, confirmed semaglutide works for them, and are ready to run a sustained fat loss or body recomposition protocol.',
    protocols: [
      {
        name: 'Maintenance Protocol',
        schedule: 'Once weekly',
        dose: '0.5–1.0mg subcutaneous after completing titration',
        notes: 'For users who have already titrated. Maintain at the lowest dose that provides adequate appetite suppression. Take on the same day each week for consistent coverage.',
      },
    ],
    synergies: ['cjc1295-ipamorelin', 'igf-1lr3', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Semaglutide 10mg Dosage & Protocol Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 4,
    highlights: ['20-week supply at 0.5mg', 'Preserves lean mass', 'Best value semaglutide'],
  },
  {
    slug: 'glp-1s-15mg',
    name: 'Semaglutide 15mg',
    tagline: 'Maximum supply semaglutide vial — for sustained protocols at full therapeutic doses',
    price: 159.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'appetite', 'glp-1', 'bulk-supply', 'therapeutic-dose'],
    image: img('semaglutide-12mg.png'),
    affiliateUrl: phiogen('semaglutide-12mg'),
    shortDescription: 'The 15mg semaglutide vial is designed for users running full 2.4mg/week therapeutic protocols — providing 6+ weeks at maximum clinical dose with the best cost-per-mg.',
    fullDescription: `The STEP 1 trial produced 14.9% average body weight loss at 68 weeks. That number comes from participants running 2.4mg/week — the maximum clinical dose. The 15mg vial is for users who are ready to run that exact protocol: fully committed, fully titrated, and focused on extracting the maximum fat loss that semaglutide can deliver. This is not the starting vial. This is the one you buy when you've made the decision to do this properly.

At 2.4mg/week, the appetite suppression is substantial. Most users at this dose find that the challenge shifts from "how do I eat less" to "how do I make sure I eat enough protein." The hypothalamic signaling is strong enough that food simply loses its urgency — which is the mechanism working exactly as intended, but requires deliberate management. Minimum 1.6g of protein per kilogram of lean body mass daily is non-negotiable at this dose level. The 14.9% average weight loss in the trials included muscle alongside fat in some participants; the high responders who avoided muscle catabolism were eating adequate protein and, in many cases, training.

The individual response variance at 2.4mg/week is worth understanding. The 14.9% is a mean — higher responders in the STEP trials achieved 20%+ total body weight loss. The magnitude of response correlates with baseline BMI, dietary structure, and whether the user is providing a genuine anabolic stimulus through training. For users pairing this with CJC-1295/Ipamorelin, the GH peptide's lean mass support allows more aggressive fat loss without the catabolism risk that typically accompanies deep caloric deficits.

This vial also represents the best cost structure in the semaglutide range. If you're running long-term — 3 to 6 months of sustained protocol at or near full dose — the 15mg option delivers maximum supply efficiency and the lowest cost per milligram available.`,
    benefits: [
      'Runs the exact 2.4mg/week dose used in the STEP trials that produced 14.9% weight loss',
      'Maximum appetite suppression — appetite drive at this dose is genuinely blunted for most users',
      'Lowest cost-per-mg across the entire semaglutide range',
      'High responders in trials achieved 20%+ total body weight loss at this dose level',
      'Pairs with CJC-1295/Ipamorelin to prevent muscle catabolism during aggressive deficit',
      'Covers 6+ weeks at full 2.4mg/week dose — ideal for the final phase of extended protocols',
      'Maximum food reward signal reduction — strongest support for sustained dietary compliance',
    ],
    whoIsFor: 'Experienced semaglutide users who are fully titrated and committed to running the maximum clinical dose for maximum fat loss results.',
    protocols: [
      {
        name: 'Full Therapeutic Protocol',
        schedule: 'Once weekly',
        dose: '2.4mg subcutaneous — abdomen, thigh, or upper arm',
        notes: 'Only for fully titrated users. Ensure minimum 1.6g protein/kg lean body mass daily to prevent muscle catabolism. Pair with GH peptides for body recomp vs. simple fat loss.',
      },
    ],
    synergies: ['cjc1295-ipamorelin', 'igf-1lr3', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Semaglutide 15mg Dosage & Maximum Dose Protocol | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 5,
    highlights: ['Full 2.4mg/week dose', '6-week supply', 'Best cost per mg'],
  },
  {
    slug: 'glp-2t-15mg',
    name: 'Tirzepatide 15mg',
    tagline: 'Dual GLP-1 + GIP agonist — superior fat loss and metabolic improvement beyond semaglutide alone',
    price: 149.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'glp-1', 'gip', 'dual-agonist', 'metabolic', 'body-recomp'],
    image: img('tirzepatide-15mg.png'),
    affiliateUrl: phiogen('tirzepatide-15mg'),
    shortDescription: 'Tirzepatide (Mounjaro/Zepbound) activates both GLP-1 and GIP receptors simultaneously — producing greater fat loss than semaglutide with potentially better tolerability.',
    fullDescription: `If you've researched semaglutide and are now looking at whether tirzepatide is worth the upgrade, the answer is in the numbers: 22.5% average body weight loss versus 14.9%. That's not a marginal improvement — it's the difference between losing 30 pounds and losing 45 pounds on an identical starting weight and timeline. The SURMOUNT trials ran head-to-head comparisons, and tirzepatide won decisively at every dose level. For anyone who is serious about fat loss outcomes, tirzepatide is simply the better compound.

The reason for the superior results lies in the second receptor. Tirzepatide activates both GLP-1 and GIP receptors simultaneously — GIP (glucose-dependent insulinotropic polypeptide) receptors are distributed throughout adipose tissue, and their activation drives fat oxidation and energy expenditure beyond what appetite suppression alone achieves. GLP-1 handles the appetitive side — reducing hunger, slowing gastric emptying. GIP handles the metabolic side — actively enhancing the rate at which stored fat is oxidized. The combination produces a physiological environment that's more favorable to fat loss than pure GLP-1 agonism can create.

There's also a tolerability argument for tirzepatide. GIP receptor activation appears to buffer some of the GI side effects associated with pure GLP-1 agonists — nausea in particular tends to be less pronounced with tirzepatide, and the overall side effect burden at comparable efficacy doses is frequently reported as lower. For users who tried semaglutide and found the nausea difficult to manage, this is worth noting.

The 15mg vial covers your titration phase from 2.5mg/week through your first few weeks at 5mg/week — the range where most users first start feeling meaningful appetite suppression and where the decision to continue becomes obvious. Think of this as your entry-point investment in the superior protocol.`,
    benefits: [
      '22.5% average body weight loss in trials — nearly 50% more than semaglutide',
      'Dual GLP-1 + GIP activation drives both appetite reduction and active fat oxidation',
      'Frequently better tolerated than pure GLP-1 agonists — less nausea at comparable efficacy',
      'Superior insulin sensitivity improvements vs. semaglutide in head-to-head data',
      'Excellent body composition profile: fat loss with preserved lean mass',
      'Once-weekly injection with 5-day half-life — same convenience as semaglutide',
      'The same pharmacology as FDA-approved Mounjaro and Zepbound',
    ],
    whoIsFor: 'Anyone who wants the most effective GLP-1 class fat loss protocol available, particularly those comparing options and willing to invest in superior outcomes.',
    protocols: [
      {
        name: 'Standard Tirzepatide Titration',
        schedule: 'Once weekly injection',
        dose: 'Weeks 1–4: 2.5mg | Weeks 5–8: 5mg | Weeks 9–12: 7.5mg | Maintenance: 10–15mg',
        notes: 'Slower titration reduces GI side effects. Many users find 5–7.5mg/week is optimal — providing significant fat loss with manageable side effects. Do not rush escalation.',
      },
    ],
    synergies: ['cjc1295-ipamorelin', 'glp-1cglp-1s-5mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Tirzepatide Dosage & Weight Loss Protocol — GLP-1 Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 6,
    highlights: ['22.5% weight loss in trials', 'Beats semaglutide', 'Dual GLP-1 + GIP'],
  },
  {
    slug: 'glp-2t-30mg',
    name: 'Tirzepatide 30mg',
    tagline: 'Extended tirzepatide supply for sustained dual-agonist fat loss protocols',
    price: 279.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'glp-1', 'gip', 'dual-agonist', 'extended-supply'],
    image: img('tirzepatide-30mg.png'),
    affiliateUrl: phiogen('tirzepatide-30mg'),
    shortDescription: 'The 30mg tirzepatide vial doubles the supply for users running established protocols at 5–10mg/week maintenance doses — providing 3–6 weeks of sustained dual-agonist coverage.',
    fullDescription: `The 30mg tirzepatide vial is for users who've moved past the questions and into the protocol. You know tirzepatide works for you — you've found your dose, your body has adapted to it, and now the goal is sustained transformation over the months that produce the results worth having. At 5mg/week, this vial is six weeks of consistent dual-agonist coverage. At 10mg/week, it's three solid weeks. Either way, it's the right size for someone treating this as a real protocol rather than an experiment.

What happens when tirzepatide is given time is where this compound distinguishes itself. The SURMOUNT trial ran 72 weeks and saw continued fat loss throughout — no plateau at week 12 or 24 as commonly seen with diet-only interventions. The dual GLP-1 and GIP mechanism maintains its efficacy because neither receptor system undergoes the same tolerance downregulation that appetite-only approaches face. The metabolic environment keeps improving: triglycerides typically fall 20–30% over extended protocols, fasting insulin normalizes, and the lipid profile shifts toward cardiovascular health in ways that often surprise users who were focused only on the scale.

The 30mg vial also brings practical convenience. Reconstituting a single vial and storing it correctly (2–8°C, used within 28 days) is fine for one month of dosing at 5mg/week. There's something to be said for the simplicity of handling one vial per month rather than managing multiple smaller vials with their own reconstitution timelines and storage logistics. One reconstitution, one label, one date to track.

These are also the months where secondary metabolic improvements become measurable. Fasting glucose, HbA1c, blood pressure, and inflammatory markers that were silently elevated often normalize over sustained tirzepatide protocols — changes that blood tests reveal and that represent real reductions in long-term health risk, independent of how the body looks in the mirror.`,
    benefits: [
      'Six weeks of dual-agonist coverage at 5mg/week — sustained transformation, not a short run',
      'Continued fat loss throughout extended protocols — no plateau seen at clinical trial endpoints',
      'Triglycerides typically fall 20–30% over sustained use — measurable cardiovascular improvement',
      'One reconstitution per month — practical and simple for established protocols',
      'Fasting insulin and glucose normalization emerge with extended protocol duration',
      'No tolerance development in GLP-1 or GIP receptor agonism over time',
      'Covers the extended timeline where metabolic syndrome markers visibly reverse',
    ],
    whoIsFor: 'Established tirzepatide users who have found their maintenance dose and want to run a sustained protocol long enough to capture the full metabolic benefits.',
    protocols: [
      {
        name: 'Maintenance Protocol (Post-Titration)',
        schedule: 'Once weekly',
        dose: '5–10mg subcutaneous — rotate injection sites weekly',
        notes: 'Refrigerate reconstituted vial at 2–8°C. Use within 28 days of reconstitution. Mark the reconstitution date on the vial with a marker.',
      },
    ],
    synergies: ['cjc1295-ipamorelin', 'igf-1lr3', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Tirzepatide 30mg Dosage & Protocol Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 7,
    highlights: ['6-week supply at 5mg/week', 'Sustained metabolic improvement', 'Single monthly reconstitution'],
  },
  {
    slug: 'glp-2t-60mg',
    name: 'Tirzepatide 60mg',
    tagline: 'Maximum supply tirzepatide — for long-term dual-agonist protocols and best-in-class value',
    price: 489.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'glp-1', 'gip', 'bulk-supply', 'long-term'],
    image: img('tirzepatide-60mg.png'),
    affiliateUrl: phiogen('tirzepatide-60mg'),
    shortDescription: 'The 60mg tirzepatide vial is Phiogen\'s highest-supply option — providing 6–12 weeks at maintenance doses and the lowest cost-per-mg for long-term dual-agonist protocols.',
    fullDescription: `Twelve weeks at 5mg/week. That's what the 60mg tirzepatide vial delivers — a single purchase that covers a complete 3-month protocol without restocking, without reconstitution anxiety, without gaps. For users who have made the decision to commit to tirzepatide properly, this is the most practical way to do it. One vial, one protocol, one uninterrupted run.

The 12-week protocol is where tirzepatide's deepest effects emerge. The scale changes are well underway by this point, but what's happening underneath — the metabolic reset that sustained dual-agonist signaling produces — is only fully realized with time. Visceral adipose tissue, the metabolically active fat surrounding the organs that drives inflammation and insulin resistance, requires sustained suppression of fat oxidation-promoting signals to meaningfully reduce. Leptin sensitivity, which dysregulates as body fat increases and drives the "hungry even when fed" pattern many people experience, begins normalizing over 10–12 weeks of consistent GIP and GLP-1 receptor activation. These aren't changes you see on a scale, but they're the changes that determine whether results last.

The SURMOUNT-4 extension data makes a clear case for why long-term protocols matter: participants who discontinued tirzepatide regained roughly two-thirds of their lost weight within 52 weeks. Those who continued maintained their results. For anyone who has struggled with weight regain after previous fat loss attempts, this data is relevant — it argues for protocols long enough to allow the metabolic adaptations that make maintenance sustainable.

At the 60mg level, you're also getting the best cost structure in the tirzepatide range. If you're running 5mg/week, this is four months of coverage per purchase. The math makes this the obvious choice for anyone who is decided on tirzepatide and wants to run it properly.`,
    benefits: [
      'Full 12-week protocol from a single purchase at 5mg/week — maximum convenience',
      'Lowest cost-per-mg in the entire tirzepatide range',
      'Visceral fat and leptin sensitivity normalization emerge only at the 10–12 week mark',
      'SURMOUNT-4 data: users who continued tirzepatide maintained results; those who stopped regained',
      'Covers the sustained duration needed for genuine metabolic reset — not just weight loss',
      'Eliminates restocking friction across a full 3-month committed protocol',
      'Single vial, single reconstitution timeline, maximum protocol simplicity',
    ],
    whoIsFor: 'Committed users who\'ve found their target dose and want maximum value with minimal restocking friction over a 3-month run.',
    protocols: [
      {
        name: 'Long-Term Protocol',
        schedule: 'Once weekly',
        dose: '5–15mg based on individual response and tolerance',
        notes: 'Store unmixed vials in freezer (–20°C) for up to 12 months. Once reconstituted, refrigerate at 2–8°C and use within 28 days. Use 29–31g insulin syringes.',
      },
    ],
    synergies: ['cjc1295-ipamorelin', 'igf-1lr3', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Tirzepatide 60mg Long-Term Dosage & Protocol Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 8,
    highlights: ['12-week supply at 5mg/week', 'Lowest cost per mg', 'Long-term metabolic reset'],
  },
  {
    slug: 'glp-3r-10mg',
    name: 'Retatrutide 10mg',
    tagline: 'Triple GLP-1 + GIP + glucagon agonist — the most potent fat loss peptide in clinical development',
    price: 149.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'triple-agonist', 'glp-1', 'gip', 'glucagon', 'advanced'],
    image: img('retatrutide-10mg.png'),
    affiliateUrl: phiogen('retatrutide-10mg'),
    shortDescription: 'Retatrutide is the world\'s first triple incretin agonist — simultaneously activating GLP-1, GIP, and glucagon receptors to produce 24.2% body weight loss in Phase 2 trials.',
    fullDescription: `Semaglutide reduces appetite. Tirzepatide reduces appetite and enhances fat oxidation. Retatrutide does both of those — and adds a third mechanism that neither can replicate: thermogenesis. By activating glucagon receptors alongside GLP-1 and GIP, retatrutide dramatically increases the rate at which your body generates heat by burning fat, particularly through brown adipose tissue activation and hepatic fat oxidation. The practical result was 24.2% mean body weight loss in 48 weeks of Phase 2 trials — the largest fat loss outcome ever recorded in a clinical peptide study at that timepoint.

This is the compound for people who have tried semaglutide or tirzepatide and hit a ceiling, or for those starting from a position where the marginal advantage of triple-agonist signaling is worth the step up in management complexity. The glucagon component is what makes retatrutide categorically different, not just incrementally better. While appetite suppression creates a caloric deficit and GIP enhances fat oxidation, glucagon receptor activation increases basal energy expenditure — your body burns more calories at rest. This combination of "eat less, absorb less fat, burn more" is a three-pronged metabolic intervention with no equivalent.

The thermogenic advantage comes with a trade-off that demands attention: elevated glucagon signaling can promote muscle protein catabolism if protein intake is inadequate. This isn't unique to retatrutide — it's a known glucagon biology effect — but it's more pronounced than with tirzepatide. Users on retatrutide maintain minimum 1.8g protein per kilogram of lean body mass and frequently pair with CJC-1295/Ipamorelin to provide an anabolic counterforce. This combination represents the highest-efficacy body recomposition approach available.

The 10mg vial covers your titration phase: starting at 1mg/week and stepping up carefully over 8–12 weeks to your maintenance dose. Slower titration than tirzepatide is recommended — the triple mechanism produces more pronounced initial GI effects, and patience in this phase pays dividends in long-term tolerability.`,
    benefits: [
      '24.2% mean body weight loss in Phase 2 — the highest fat loss outcome in clinical peptide data',
      'Thermogenic advantage: glucagon receptor activation increases basal energy expenditure beyond appetite suppression',
      'Brown adipose tissue activation burns fat at rest — a mechanism semaglutide and tirzepatide lack entirely',
      'Addresses metabolic syndrome comprehensively: appetite, fat oxidation, energy expenditure, and liver health simultaneously',
      'Significant NASH and liver fat reduction driven by the glucagon component',
      'The logical next step for users who have plateaued on tirzepatide',
      'Pairs with CJC-1295/Ipamorelin to counterbalance glucagon-driven catabolism for body recomposition',
    ],
    whoIsFor: 'Users seeking maximum fat loss efficacy, those who have plateaued on semaglutide or tirzepatide, or anyone with significant metabolic obesity who wants the most potent GLP-class option available.',
    protocols: [
      {
        name: 'Beginner Retatrutide Titration',
        schedule: 'Once weekly injection',
        dose: 'Weeks 1–4: 1mg | Weeks 5–8: 2mg | Weeks 9–12: 4mg | Maintenance: 4–8mg',
        notes: 'Slower titration than tirzepatide recommended due to triple mechanism. GI side effects can be more pronounced. Anti-nausea support recommended for first 4–6 weeks.',
      },
    ],
    synergies: ['bacteriostatic-water-reconstitution-solution-10ml', 'cjc1295-ipamorelin'],
    seoTitle: 'Retatrutide Dosage & Triple Agonist Protocol 10mg | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 9,
    highlights: ['24.2% weight loss in trials', 'Triple GLP-1/GIP/Glucagon', 'Most potent GLP class'],
  },
  {
    slug: 'glp-3r-15mg',
    name: 'Retatrutide 15mg',
    tagline: 'Extended supply triple agonist — for sustained retatrutide protocols at therapeutic doses',
    price: 189.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'triple-agonist', 'advanced', 'extended-supply'],
    image: img('retatrutide-15mg.png'),
    affiliateUrl: phiogen('retatrutide-15mg'),
    shortDescription: 'The 15mg retatrutide vial provides extended protocol coverage for users who have completed titration and are maintaining at 4–8mg/week for sustained triple-agonist fat loss.',
    fullDescription: `The 15mg vial is where most retatrutide users land when they've finished titrating and found their sweet spot. For the majority, that's somewhere in the 4–8mg/week range — high enough to feel the full triple-agonist effect, low enough that side effects remain manageable. At 4mg/week, this vial provides just under four weeks of dosing. At 6mg/week, it's about two and a half weeks. At 8mg/week, just under two. It's the right size for users who are settled into their protocol and want a supply that matches their dose without over-committing.

What sustained triple-agonist signaling at the 4–8mg range actually delivers: the Phase 2 TRIUMPH trial participants continued losing weight without plateau through week 48 at this dose range. The glucagon-driven thermogenic effect doesn't habituate the way appetite suppression sometimes does — brown adipose tissue activation and hepatic fat oxidation continue functioning as long as glucagon receptor signaling is maintained. This is the mechanism that keeps retatrutide working where other GLP-class compounds start to lose momentum.

The protein management piece deserves emphasis for users at this stage. Glucagon signaling at therapeutic doses promotes hepatic gluconeogenesis from amino acids — meaning your body will preferentially catabolize muscle protein if dietary protein is insufficient. This is biology, not a flaw in the compound. The solution is straightforward: maintain 1.8–2.0g protein per kilogram of lean body mass daily and pair retatrutide with CJC-1295/Ipamorelin. The GH secretagogue stack counteracts glucagon-driven catabolism and creates conditions for genuine body recomposition — fat loss with concurrent lean mass preservation or growth.

The 15mg vial sits in the practical middle of the retatrutide range — larger than the 10mg titration vial, smaller than the 30mg long-term commitment. It's the right purchase for users who are confident in their dose but want flexibility in protocol length.`,
    benefits: [
      'The right size for the 4–8mg/week maintenance range where most users settle',
      'Sustained triple-agonist signaling continues without plateau through extended protocols',
      'Glucagon-driven thermogenesis doesn\'t habituate — ongoing fat burn beyond appetite suppression',
      'Pairs with CJC-1295/Ipamorelin for muscle preservation against glucagon-driven catabolism',
      'Practical supply size for users who are confirmed on their dose but not ready for full 30mg commitment',
      'Continued weight loss at maintenance doses seen through 48 weeks in Phase 2 data',
      'The sweet spot vial: post-titration, pre-bulk-buy',
    ],
    whoIsFor: 'Users who have completed retatrutide titration, found their maintenance dose in the 4–8mg/week range, and want a practical ongoing supply without over-committing.',
    protocols: [
      {
        name: 'Maintenance Protocol',
        schedule: 'Once weekly',
        dose: '4–8mg subcutaneous based on tolerance and response',
        notes: 'Ensure minimum 1.8g protein/kg lean mass daily. Pair with CJC-1295/Ipamorelin for muscle preservation. Monitor weekly weight and adjust dose only if loss stalls for 3+ weeks.',
      },
    ],
    synergies: ['cjc1295-ipamorelin', 'igf-1lr3', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Retatrutide 15mg Dosage & Protocol Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 10,
    highlights: ['Sustained triple mechanism', 'No efficacy plateau', 'Advanced recomp option'],
  },
  {
    slug: 'glp-3r-30mg',
    name: 'Retatrutide 30mg',
    tagline: 'Maximum retatrutide supply — best value for committed triple-agonist long-term protocols',
    price: 349.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'triple-agonist', 'bulk-supply', 'advanced', 'long-term'],
    image: img('retatrutide-30mg.png'),
    affiliateUrl: phiogen('retatrutide-30mg'),
    shortDescription: 'The 30mg retatrutide vial provides maximum protocol coverage — up to 7 weeks at 4mg/week or 3.75 weeks at 8mg/week, with the best cost-per-mg in the retatrutide range.',
    fullDescription: `The 30mg retatrutide vial is built around a specific outcome: liver transformation. The Phase 2 TRIUMPH trial data showed 50–60% reductions in liver fat assessed by MRI-PDFF in participants on sustained retatrutide protocols — a result that gets little attention in fat loss conversations but represents one of the most clinically significant outcomes in metabolic pharmacology. Non-alcoholic fatty liver disease (NAFLD) and its inflammatory progression NASH affect a large proportion of people with metabolic obesity and carry serious long-term cardiovascular and hepatic consequences. Retatrutide addresses this directly through its glucagon component, which drives hepatic fat oxidation alongside systemic thermogenesis.

The catch is timing. Liver fat reduction doesn't show meaningful change until 12+ weeks of sustained triple-agonist signaling. The 30mg vial at 4mg/week covers 7.5 weeks — bought twice, or used alongside the 15mg vial, it enables the 12+ week protocol that liver transformation requires. At 8mg/week, the 30mg vial provides just under four weeks, positioning it as a natural pairing with the 15mg vial for users wanting to run the higher dose for a full two-month stretch.

Beyond liver fat, the extended protocol changes reflected in TRIUMPH data include normalization of ALT and AST liver enzymes, reductions in CRP and fibrinogen (cardiovascular inflammation markers), and triglyceride normalization. These are the changes that matter to anyone tracking metabolic health comprehensively — not just the weight reading, but the underlying biology that determines long-term risk.

The practical reconstitution math is also worth noting: at 4mg/week, a 30mg vial reconstituted in 3ml bacteriostatic water lasts nearly two months before you need to reconstitute again. Fewer sterile preparation steps means less contamination risk and a simpler protocol for users who are running this compound long-term.`,
    benefits: [
      '50–60% liver fat reduction documented in TRIUMPH trial data — the liver transformation protocol',
      '7.5 weeks at 4mg/week — enables the 12+ week duration needed for hepatic fat reduction',
      'ALT, AST liver enzyme normalization emerges only with extended sustained dosing',
      'Lowest cost-per-mg in the retatrutide range for committed users',
      'Triglycerides and cardiovascular inflammation markers (CRP, fibrinogen) continue improving with time',
      'Single reconstitution lasts nearly two months at 4mg/week — minimal sterile prep complexity',
      'Full NAFLD/NASH reversal protocol from one purchase at lower maintenance doses',
    ],
    whoIsFor: 'Users targeting liver health and NAFLD reversal alongside fat loss, or those committed to a long-term triple-agonist protocol who want the supply and cost efficiency for a sustained 8–12 week run.',
    protocols: [
      {
        name: 'Long-Term Metabolic Protocol',
        schedule: 'Once weekly',
        dose: '4–12mg based on individual response',
        notes: 'Store unmixed vials at –20°C for up to 12 months. Once reconstituted in bacteriostatic water, refrigerate at 2–8°C and use within 28 days. Mark reconstitution date on vial.',
      },
    ],
    synergies: ['cjc1295-ipamorelin', 'igf-1lr3', 'nad', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Retatrutide 30mg Dosage & Protocol Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 11,
    highlights: ['7.5-week supply', 'Lowest cost per mg', 'Full NAFLD reversal protocol'],
  },
  {
    slug: 'glp-1cglp-1s-5mg',
    name: 'Cagrilintide + Semaglutide (CagriSema)',
    tagline: 'Novel amylin + GLP-1 dual mechanism — exceeds both compounds alone for fat loss and satiety',
    price: 109.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'combo', 'amylin', 'glp-1', 'advanced', 'satiety'],
    image: img('cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg.png'),
    affiliateUrl: phiogen('cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg'),
    shortDescription: 'CagriSema combines cagrilintide (amylin analog) and semaglutide in one injection — producing 22–25% body weight loss through complementary satiety and appetite pathways.',
    fullDescription: `If you've been on semaglutide for several months and the scale has stopped moving, the problem isn't the compound — it's that you've exhausted what one receptor system can achieve. Your GLP-1 receptors are doing everything they can. CagriSema's answer is to activate a completely separate receptor system simultaneously. Cagrilintide is an amylin analog, and amylin works on entirely different receptors in the brainstem — not the hypothalamus — producing a distinct satiety signal that doesn't overlap with GLP-1's mechanism at all. Adding it to your semaglutide is adding a second, independent stop signal, not a louder version of the first.

The COMBINE Phase 3 trials quantified what that second signal delivers: 22.7% body weight reduction at 68 weeks, compared to approximately 14.9% with semaglutide alone. That's eight additional percentage points of body weight loss from a single mechanistic addition. The mechanism is accessible without jargon: GLP-1 tells your brain you don't want to start eating (reduces appetite and food-seeking drive), while amylin tells your brain you're done eating (enhances the meal-completion satiety signal). One addresses the "start" of eating, the other addresses the "stop." Together, they produce a more complete suppression of total caloric intake than either can achieve alone.

What makes CagriSema particularly attractive as a plateau-breaking solution is that the GI side effect burden doesn't scale proportionally with the added efficacy. The COMBINE trial data showed a side effect profile similar to semaglutide alone — cagrilintide adds weight loss without adding the nausea burden you'd expect from a larger dose of GLP-1 agonist. For users who tried higher semaglutide doses and found the GI effects unacceptable, this is a meaningful consideration.

The protocol is simple: both compounds co-injected in a single weekly subcutaneous injection, maintaining the once-weekly convenience you're already used to while delivering outcomes that no single GLP-1 compound can match.`,
    benefits: [
      '22.7% body weight loss in Phase 3 — 8 percentage points more than semaglutide alone',
      'Amylin mechanism is completely distinct from GLP-1 — adds efficacy without receptor overlap',
      'Breaks semaglutide plateaus without switching compounds or escalating doses',
      'GI side effect burden similar to semaglutide alone — efficacy gain without proportional side effect gain',
      'GLP-1 addresses "wanting to eat"; amylin addresses "not wanting to stop" — together they cover both',
      'Single weekly co-injection maintains the same once-weekly protocol simplicity',
      'Backed by Novo Nordisk COMBINE Phase 3 trial program — among the largest in obesity pharmacology',
    ],
    whoIsFor: 'Semaglutide users who have hit a plateau and want to break it by adding a complementary mechanism, without switching to a different compound class.',
    protocols: [
      {
        name: 'CagriSema Co-Injection Protocol',
        schedule: 'Once weekly',
        dose: 'Cagrilintide 2.4mg + Semaglutide 2.4mg — co-inject subcutaneous',
        notes: 'Titrate each compound separately before combining if new to either. Draw both into one syringe immediately before injection. Use abdomen or thigh. Rotate sites weekly.',
      },
    ],
    synergies: ['glp-1s-5mg', 'cjc1295-ipamorelin', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'CagriSema Dosage & Protocol — Amylin + GLP-1 Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 12,
    highlights: ['22.7% weight loss in trials', 'Dual amylin + GLP-1', 'Exceeds semaglutide alone'],
  },

  // ─── PERFORMANCE ──────────────────────────────────────────────────────────
  {
    slug: 'cjc1295-ipamorelin',
    name: 'CJC-1295 / Ipamorelin',
    tagline: 'The gold standard GH stack — pulsatile growth hormone release without cortisol or prolactin elevation',
    price: 50.00,
    category: 'performance',
    productType: 'injectable',
    tags: ['performance', 'growth-hormone', 'muscle', 'recovery', 'body-recomp', 'beginner-friendly'],
    image: img('ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg.png'),
    affiliateUrl: phiogen('ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg'),
    shortDescription: 'CJC-1295 (GHRH analog) and Ipamorelin (ghrelin mimetic) work synergistically to stimulate natural pulsatile GH release — the cleanest and most selective GH secretagogue stack available.',
    fullDescription: `Your body already knows how to release growth hormone — it does it every night during deep sleep. The problem is that those nocturnal GH pulses decline dramatically with age, reducing the regenerative and anabolic signaling that drives recovery, body composition, and cellular repair. CJC-1295/Ipamorelin doesn't introduce a foreign hormone; it amplifies the natural GH pulse your pituitary is already producing, working with your body's existing regulatory systems rather than bypassing them.

The two compounds work on different receptors to produce a GH release that's 2–3× greater than either alone: CJC-1295 binds GHRH receptors (the primary GH-release trigger), while Ipamorelin binds ghrelin receptors in the pituitary (a separate, potentiating signal). The combination hits both pathways simultaneously, producing a sharp, clean GH pulse — particularly when injected 30–60 minutes before sleep, synchronizing the pharmaceutical pulse with the body's natural nocturnal release window. Because the No-DAC formulation has a short half-life, GH elevation is pulsatile rather than sustained, which is critical: it's the natural pulsatile pattern that maintains pituitary receptor sensitivity and avoids the insulin resistance risk of sustained GH elevation.

Ipamorelin's selectivity is what makes this stack beginner-friendly. Earlier ghrelin mimetics (GHRP-2, GHRP-6) elevated cortisol and prolactin alongside GH — an acceptable trade-off in some contexts but a meaningful downside for everyday users. Ipamorelin produces pure GH and IGF-1 elevation with no cortisol spike, no prolactin elevation, and no hormonal suppression. You run it, it works, you come off — nothing to manage, no PCT, no axis disruption.

The timeline for results is honest: improved sleep quality and recovery acceleration within 2–4 weeks, body composition changes visible at 8–12 weeks, and the full benefit of 3–6 months of consistent nightly dosing. This is a slow-burn protocol that rewards consistency, not a rapid-onset intervention. But at 3–6 months, the combination of reduced body fat, improved lean mass, better sleep, accelerated recovery, and elevated IGF-1 for anti-aging purposes represents a meaningful transformation that can be sustained indefinitely.`,
    benefits: [
      'Amplifies natural nocturnal GH pulses — works with your body\'s existing biology, not against it',
      'Synergistic dual-receptor activation produces 2–3× greater GH release than either compound alone',
      'Zero cortisol or prolactin elevation — the cleanest, most selective GH secretagogue stack available',
      'No hormonal suppression, no PCT, no cycling off required — sustainable indefinitely',
      'Improved sleep quality and training recovery typically noticeable within 2–4 weeks',
      'Body composition changes (reduced fat, increased lean mass) visible at 8–12 weeks of consistent use',
      'Elevates IGF-1 naturally for downstream anabolic and anti-aging effects',
    ],
    whoIsFor: 'Anyone looking to optimize body composition, recovery, and GH-mediated anti-aging effects without synthetic hormones — ideal as a first performance peptide or long-term lifestyle protocol.',
    protocols: [
      {
        name: 'Classic Pre-Sleep Protocol',
        schedule: 'Once nightly, 30–60 min before sleep',
        dose: '100mcg CJC-1295 + 100mcg Ipamorelin subcutaneous',
        notes: 'Take on an empty stomach — insulin interferes with GH release. Inject abdomen or thigh. This protocol maximizes the synergy with natural nocturnal GH pulses. Run 3–6 month cycles.',
      },
      {
        name: 'Twice-Daily Protocol',
        schedule: 'Morning (fasted) and before sleep',
        dose: '100mcg CJC + 100mcg Ipa each injection (200mcg total/day)',
        notes: 'Advanced protocol for body recomposition. Morning injection taken fasted for clean GH pulse. Second injection pre-sleep. Better results than once-daily but requires stricter fasting compliance.',
      },
    ],
    synergies: ['igf-1lr3', 'bpc157-10mg', 'glp-1s-5mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'CJC-1295 Ipamorelin Dosage & GH Peptide Protocol | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 13,
    highlights: ['Pulsatile GH release', 'No cortisol elevation', 'Gold standard GH stack'],
  },
  {
    slug: 'igf-1lr3',
    name: 'IGF-1 LR3',
    tagline: 'Long R3 IGF-1 — promotes muscle hyperplasia and satellite cell activation for permanent muscle fiber growth',
    price: 79.99,
    category: 'performance',
    productType: 'injectable',
    tags: ['performance', 'muscle', 'igf-1', 'hyperplasia', 'advanced'],
    image: img('igf-1-lr3-1mg.png'),
    affiliateUrl: phiogen('igf-1-lr3-1mg'),
    shortDescription: 'IGF-1 LR3 is an engineered long-acting form of Insulin-like Growth Factor 1 — the downstream mediator of GH that activates satellite cells and promotes muscle hyperplasia (new fiber creation).',
    fullDescription: `Every rep you've ever done in the gym made your existing muscle fibers larger — that's hypertrophy, and it's how training works. What IGF-1 LR3 does is categorically different: it creates new muscle fibers. By activating satellite cells (the stem cells of muscle tissue) and driving them to proliferate and fuse, IGF-1 LR3 promotes muscle hyperplasia — the addition of new fibers rather than the enlargement of existing ones. This distinction matters because the fibers added through hyperplasia represent permanent structural changes to your muscle architecture, changes that persist after the protocol ends and that traditional training alone cannot replicate.

The mechanism requires explanation. When growth hormone is released — whether naturally or via CJC-1295/Ipamorelin — the liver produces IGF-1 in response, which circulates and drives tissue growth. Natural IGF-1 has a plasma half-life of minutes and is heavily bound by IGF-binding proteins that limit its receptor access. IGF-1 LR3 solves both problems: its modified structure extends half-life to 20–30 hours and dramatically reduces IGFBP binding, meaning more free IGF-1 is available for receptor activation over a longer window. One daily injection provides sustained satellite cell signaling throughout the recovery period.

The post-workout injection strategy takes advantage of a specific biological opportunity. Resistance training acutely activates satellite cells at the trained muscle — the exercise primes them for proliferation. Injecting IGF-1 LR3 directly into the trained muscle immediately after training catches these primed satellite cells at the optimal moment for IGF-1 signaling. The localized injection drives hyperplasia specifically in the muscle that just worked, adding fibers where you're asking the most of them.

IGF-1 LR3 is an advanced compound used in short 4–6 week cycles to avoid receptor desensitization. Paired with CJC-1295/Ipamorelin, it creates a complete GH/IGF-1 axis protocol: the secretagogue stack handles upstream GH release, IGF-1 LR3 handles downstream receptor activation. Together they address both sides of the anabolic signaling cascade.`,
    benefits: [
      'Promotes muscle hyperplasia — permanent new fiber creation beyond what training alone achieves',
      'Post-workout local injection drives hyperplasia in the specific trained muscle at the optimal biological moment',
      '20–30 hour half-life provides sustained satellite cell signaling from a single daily injection',
      'Reduced IGFBP binding means significantly more free IGF-1 available for receptor activation vs. natural IGF-1',
      'Pairs with CJC-1295/Ipamorelin for complete GH/IGF-1 axis coverage upstream and downstream',
      'Short 4–6 week cycles maximize results and prevent receptor desensitization',
      'Promotes nitrogen retention and protein synthesis through IGF-1 receptor pathways independent of GH',
    ],
    whoIsFor: 'Serious strength athletes and bodybuilders who have maximized hypertrophy through training and want to add permanent muscle fiber creation beyond what conventional protocols can deliver.',
    protocols: [
      {
        name: 'Post-Workout Local Injection Protocol',
        schedule: 'Once daily, immediately post-workout',
        dose: '20–50mcg injected IM into the trained muscle group',
        notes: 'Inject directly into the muscle just trained for localized satellite cell activation. Use an insulin syringe. Run 4–6 week cycles, then 4–6 weeks off. Combine with CJC-1295/Ipa for full axis coverage.',
      },
      {
        name: 'Systemic Protocol',
        schedule: 'Once daily, post-workout',
        dose: '20–60mcg subcutaneous (abdomen)',
        notes: 'Systemic injection for whole-body IGF-1 elevation. Less localized than IM but simpler. Monitor for hypoglycemia (have glucose source available). Never inject on an empty stomach.',
      },
    ],
    synergies: ['cjc1295-ipamorelin', 'bpc157-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'IGF-1 LR3 Dosage & Muscle Growth Protocol | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 14,
    highlights: ['Muscle hyperplasia', 'Satellite cell activation', 'Pairs with CJC-1295/Ipa'],
  },

  // ─── ANTI-AGING ───────────────────────────────────────────────────────────
  {
    slug: 'ghk-cu',
    name: 'GHK-CU Copper Peptide 50mg',
    tagline: 'Copper tripeptide that regulates 4,000+ genes — anti-aging, wound healing, and collagen synthesis',
    price: 50.00,
    category: 'anti-aging',
    productType: 'injectable',
    tags: ['anti-aging', 'skin', 'wound-healing', 'collagen', 'gene-expression'],
    image: img('ghk-cu-50mg.png'),
    affiliateUrl: phiogen('ghk-cu-50mg'),
    shortDescription: 'GHK-Cu is a naturally occurring copper tripeptide that activates over 4,000 human genes involved in wound healing, skin repair, anti-inflammation, and anti-aging.',
    fullDescription: `GHK-Cu operates at a level of biological influence that no other single peptide can match. While most compounds target one receptor system or one tissue type, this naturally occurring copper tripeptide works by directly modulating gene expression across approximately 4,000 human genes — simultaneously upregulating the genetic programs responsible for wound repair, collagen synthesis, anti-cancer defense, stem cell recruitment, and DNA maintenance while dialing down the genes that drive inflammation, neurodegeneration, and cancer progression. That breadth of influence makes GHK-Cu categorically different from any other compound in this catalog.

The skin applications are the most visible and well-documented. GHK-Cu drives fibroblast proliferation and stimulates the production of both collagen and elastin — the structural proteins that give skin its firmness and elasticity. At the same time, it suppresses matrix metalloproteinase activity, the enzymatic process that breaks down existing skin structure with age. The result is a compound that simultaneously builds new structure and slows the degradation of existing structure — applied topically or injected subcutaneously depending on whether you want surface skin effects or systemic reach.

For users running healing protocols, GHK-Cu fills a distinct niche alongside BPC-157 and TB-500. Where BPC-157 handles local angiogenesis and receptor signaling and TB-500 drives systemic stem cell migration, GHK-Cu covers the collagen remodeling phase — the final architectural repair stage where damaged tissue is rebuilt with proper structural organization rather than scar tissue. Including all three creates a healing protocol that covers every stage of the repair cascade from initial vascular response through final structural remodeling.

For longevity-focused users, the gene expression data is compelling in a way that's rare in this field: GHK-Cu has been shown to reverse the "gene expression aging" patterns observed in aged tissue, shifting the cellular genetic program toward a younger phenotype. Combined with Epithalon for telomere support and NAD+ for mitochondrial restoration, it forms the backbone of a scientifically grounded anti-aging protocol.`,
    benefits: [
      'Modulates 4,000+ human genes — the broadest biological reach of any peptide available',
      'Simultaneously builds new collagen/elastin while blocking enzymes that break down skin structure',
      'Covers the collagen remodeling phase of healing — the critical final stage BPC-157/TB-500 don\'t fully address',
      'Reverses aging gene expression patterns — shifts cellular programming toward a younger phenotype',
      'Drives angiogenesis and blood vessel repair in both skin and deeper injured tissue',
      'Neuroprotective: upregulates NGF and BDNF expression for nerve health and brain support',
      'Effective both topically for skin and subcutaneously for systemic anti-aging and healing effects',
    ],
    whoIsFor: 'People pursuing comprehensive anti-aging protocols or advanced healing stacks who want a single compound with the widest possible biological reach.',
    protocols: [
      {
        name: 'Systemic Anti-Aging Protocol',
        schedule: 'Once daily',
        dose: '1–2mg subcutaneous (abdomen or thigh)',
        notes: 'Run 8–12 week cycles with 4–8 weeks off. Can combine with Epithalon for comprehensive longevity protocol. Some users report improved skin appearance within 4–6 weeks.',
      },
      {
        name: 'Wound & Injury Healing Protocol',
        schedule: 'Twice daily',
        dose: '1mg near the injury site + 1mg systemic',
        notes: 'Use alongside BPC-157 and TB-500 for maximum healing. Local injection near the wound provides direct collagen remodeling stimulus. Systemic dose provides anti-inflammatory coverage.',
      },
    ],
    synergies: ['bpc157-10mg', 'tb500-10mg', 'epithalon-50mg', 'snap-8', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'GHK-CU Copper Peptide Dosage & Anti-Aging Benefits | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 15,
    highlights: ['4,000+ gene modulation', 'Skin + wound healing', 'Longevity peptide'],
  },
  {
    slug: 'epithalon-50mg',
    name: 'Epithalon 50mg',
    tagline: 'The telomere peptide — activates telomerase and extends telomere length for biological age reversal',
    price: 139.99,
    category: 'anti-aging',
    productType: 'injectable',
    tags: ['anti-aging', 'telomere', 'longevity', 'epigenetic', 'advanced'],
    image: img('epitalon-50mg.png'),
    affiliateUrl: phiogen('epitalon-50mg'),
    shortDescription: 'Epithalon (Epitalon) is a synthetic tetrapeptide developed by Dr. Vladimir Khavinson that activates telomerase, extends telomere length, and normalizes neuroendocrine function for biological age reversal.',
    fullDescription: `Cellular aging is not a mystery — it's a measurable process. Each time a cell divides, the telomeres at the ends of its chromosomes shorten slightly. After enough divisions, they reach a critical length and the cell stops dividing, entering a senescent state that contributes to tissue dysfunction and aging. Epithalon intervenes at this root mechanism by reactivating telomerase — the enzyme that rebuilds telomeres — in somatic cells where it's normally silenced after development. The result, documented in multiple in vitro and in vivo studies, is telomere lengthening and extended cellular lifespan without the malignant transformation risk associated with non-selective telomerase upregulation.

The 15-year follow-up study that separates Epithalon from every other longevity peptide deserves the spotlight. Dr. Vladimir Khavinson's long-term human data showed that aging patients who received annual Epithalon courses had significantly reduced all-cause mortality, decreased cancer incidence, and improved quality-of-life metrics compared to controls — tracked over a decade and a half. That level of human longitudinal data simply doesn't exist for other peptides in this space. It's what transforms Epithalon from a theoretically interesting compound into something with a practical, evidence-backed case for use.

Beyond telomere biology, Epithalon normalizes the hypothalamic-pituitary axis function that degrades with age. This master regulatory circuit controls GH, cortisol, thyroid, and sex hormone release patterns. The age-related dysregulation of this axis — blunted GH pulses, disrupted cortisol rhythms, declining sex hormone production — is a significant driver of how aging feels functionally. Epithalon partially restores the signaling patterns of younger biology through its interaction with the pineal-hypothalamic circuit, with melatonin restoration being the most directly measurable marker.

The Khavinson protocol — intensive 10–20 day courses run once or twice per year rather than chronic daily use — reflects how this compound was actually used in the studies that produced the 15-year data. This annual course approach matches Epithalon's biological role as a periodic regenerative signal rather than a continuous supplement.`,
    benefits: [
      'Reactivates telomerase in somatic cells — the only proven direct telomere-lengthening peptide',
      '15-year human follow-up study: reduced all-cause mortality and cancer incidence vs. controls',
      'Annual course protocol matches the exact approach used in the long-term efficacy data',
      'Normalizes hypothalamic-pituitary axis signaling toward younger hormonal patterns',
      'Restores melatonin secretion rhythms that degrade with age',
      'Reduces 8-OHdG (oxidative DNA damage marker) — measurable antioxidant protection',
      'Downregulates oncogenic gene expression patterns while extending cellular lifespan',
    ],
    whoIsFor: 'Longevity-focused individuals who want to address cellular aging at its root mechanism — specifically telomere shortening — and who are committed to running annual protocol courses.',
    protocols: [
      {
        name: 'Annual Longevity Course (Khavinson Protocol)',
        schedule: 'Once or twice daily for 10–20 day course',
        dose: '5–10mg/day subcutaneous during course',
        notes: 'The Khavinson protocol: intensive short courses 1–2 times per year rather than chronic daily use. Run 10–20 days, then off for 4–6 months. This matches the established human trial approach.',
      },
      {
        name: 'Extended Low-Dose Protocol',
        schedule: 'Once daily',
        dose: '2–5mg/day for 20–30 day courses, 2–3× per year',
        notes: 'Lower-dose alternative favored by some users. Less data than Khavinson protocol but anecdotally well-tolerated. Combine with GHK-CU and NAD+ for comprehensive longevity stack.',
      },
    ],
    synergies: ['ghk-cu', 'nad', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Epithalon Dosage & Longevity Protocol 50mg | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 16,
    highlights: ['Telomerase activator', '15-year human study data', 'Khavinson protocol'],
  },
  {
    slug: 'nad',
    name: 'NAD+ 500mg',
    tagline: 'The mitochondrial co-enzyme — restores cellular energy production, DNA repair, and sirtuins activity',
    price: 69.99,
    category: 'anti-aging',
    productType: 'injectable',
    tags: ['anti-aging', 'mitochondria', 'energy', 'dna-repair', 'sirtuin', 'longevity'],
    image: img('nad-500mg.png'),
    affiliateUrl: phiogen('nad-500mg'),
    shortDescription: 'NAD+ (Nicotinamide Adenine Dinucleotide) is the master cellular co-enzyme that declines 50% by age 50 — driving mitochondrial dysfunction, DNA damage accumulation, and hallmarks of aging.',
    fullDescription: `There's a simple number that explains a great deal about why people feel worse as they age: by 50, your intracellular NAD+ levels have dropped roughly 50% from their peak. By 80, less than 20% remains. NAD+ isn't one thing — it's the coenzyme that powers the mitochondrial electron transport chain (your cellular energy production), activates sirtuins (the gene regulators that control epigenetic stability and metabolic homeostasis), and supplies PARP enzymes with the substrate they need to repair DNA strand breaks continuously throughout the day. When NAD+ declines, all three of these systems decline simultaneously. The fatigue, the slower recovery, the cognitive fog, the accumulation of cellular damage — these aren't independent symptoms. They're the downstream consequences of NAD+ depletion.

What makes injectable NAD+ different from the NMN or NR supplements in capsule form is delivery efficiency. Oral NAD+ precursors require enzymatic conversion steps to reach intracellular NAD+, and that conversion pathway is rate-limited — meaning higher oral doses don't proportionally increase cellular NAD+. Subcutaneous injection bypasses those conversion steps entirely, delivering NAD+ directly into circulation for cellular uptake without the metabolic bottleneck. The pharmacokinetics closely resemble IV NAD+ infusions offered at longevity clinics, at a fraction of the cost and without the two-hour time commitment of IV administration.

The energy and recovery effects of NAD+ restoration are often among the first things users report — improved cellular energy production becomes perceptible within days as mitochondrial efficiency increases. The DNA repair and sirtuin-activation benefits operate on a slower timeline but represent the deeper anti-aging value: sirtuins regulate hundreds of genes involved in inflammation, metabolic function, and stress response, and their activation by adequate NAD+ keeps the epigenetic landscape closer to a younger pattern.

Paired with Epithalon for telomere support and GHK-Cu for gene expression breadth, NAD+ 500mg completes the foundation of a comprehensive cellular longevity protocol — addressing the mitochondrial and DNA repair dimensions that Epithalon and GHK-Cu don't specifically target.`,
    benefits: [
      'Directly restores the 50% NAD+ decline that occurs by age 50 — the foundational cellular aging problem',
      'Bypasses the enzymatic conversion bottleneck of oral NMN/NR — subcutaneous delivery is direct and efficient',
      'Activates sirtuins (SIRT1–7) — the longevity genes governing epigenetic stability and metabolic regulation',
      'Supplies PARP enzymes with substrate for continuous DNA strand break repair',
      'Energy and cellular recovery improvements often noticeable within days of first dose',
      'Reduces neuroinflammation through NAD+/NAMPT signaling pathways in the brain',
      'Similar pharmacokinetics to IV NAD+ at longevity clinics — at a fraction of the cost',
    ],
    whoIsFor: 'Anyone over 35 experiencing declining energy, recovery, or cognitive performance who wants to address the underlying cellular energy and DNA repair deficit at its source.',
    protocols: [
      {
        name: 'Weekly NAD+ Replenishment',
        schedule: 'Once or twice weekly',
        dose: '100–500mg subcutaneous (abdomen)',
        notes: 'Start at 100mg to assess flushing response (common with NAD+ at higher doses). Titrate up over 2–4 weeks. Some users split into daily micro-doses (50mg/day) to minimize flushing. Combine with Epithalon for comprehensive longevity protocol.',
      },
    ],
    synergies: ['epithalon-50mg', 'ghk-cu', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'NAD+ Dosage & Longevity Protocol 500mg | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 17,
    highlights: ['Mitochondrial restoration', 'Sirtuin activator', 'DNA repair coenzyme'],
  },
  {
    slug: 'snap-8',
    name: 'SNAP-8 Topical Peptide',
    tagline: 'Botox-alternative peptide — reduces expression wrinkles by 63% through neuromuscular junction modulation',
    price: 45.00,
    category: 'anti-aging',
    productType: 'topical',
    tags: ['anti-aging', 'skin', 'topical', 'wrinkles', 'cosmetic'],
    image: img('snap-8-10mg.png'),
    affiliateUrl: phiogen('snap-8-10mg'),
    shortDescription: 'SNAP-8 is an octapeptide that modulates SNARE complex assembly at the neuromuscular junction — reducing facial expression wrinkle depth by up to 63% without injection.',
    fullDescription: `Botox works by blocking acetylcholine release at the neuromuscular junction — paralyzing the facial muscles that create expression wrinkles. SNAP-8 works by the same mechanism, through a different molecular route, without an injection and without permanent paralysis. Applied topically as a 4% serum, it competes with the SNAP-25 protein that forms part of the SNARE complex responsible for neurotransmitter release. Less acetylcholine released means less intense muscle contraction, which means shallower wrinkle formation with every expression you make. Consistent use builds up the effect over four weeks as the cumulative reduction in muscle contraction prevents the daily reinforcement of existing wrinkle depth.

The clinical data is specific: silicon replica measurements of wrinkle area before and after 28 days of 4% SNAP-8 application showed up to 63% reduction in wrinkle depth in the highest responders and 52% average reduction across participants. For context, that outcome is achieved with a topical serum applied twice daily — no clinic visit, no needle, no downtime, no risk of the frozen or asymmetric results that make Botox anxiety-inducing for many people.

Who benefits most from SNAP-8 is equally specific: it works on dynamic wrinkles — the lines created by repetitive facial muscle movement. Forehead lines, crow's feet, frown lines (the 11s), smile lines around the mouth. These are the same wrinkle types Botox targets because they share the same cause: muscle contraction. SNAP-8 has limited effect on static wrinkles caused by skin volume loss and structural collagen degradation — for those, GHK-Cu's collagen-stimulating mechanism is the appropriate tool. Most users run both in a daily rotation: SNAP-8 in the morning targeting the neuromuscular mechanism, GHK-Cu in the evening driving collagen regeneration. Together they address both the dynamic and structural dimensions of facial aging.

Daily application is what maintains the effect. Unlike Botox's 3–4 month duration from a single treatment, SNAP-8 requires consistent use — but also provides consistent control, allowing you to adjust application frequency based on the level of effect you want.`,
    benefits: [
      'Up to 63% reduction in expression wrinkle depth in clinical measurement studies',
      'Same neuromuscular mechanism as Botox — without the injection, the toxin, or the clinic visit',
      'Targets dynamic wrinkles specifically: forehead lines, crow\'s feet, frown lines',
      'Topical 4% serum — no needles, no downtime, no risk of asymmetric results',
      'Effect builds over 4 weeks as cumulative muscle contraction reduction prevents wrinkle reinforcement',
      'Pairs with GHK-Cu for a complete protocol: SNAP-8 addresses dynamic wrinkles, GHK-Cu addresses structural aging',
      'Reversible and adjustable — reduce application frequency to modulate the level of effect',
    ],
    whoIsFor: 'Anyone looking to reduce expression wrinkles without Botox injections — particularly those with forehead lines, crow\'s feet, or frown lines who want a daily home protocol with clinically measured results.',
    protocols: [
      {
        name: 'Daily Anti-Wrinkle Protocol',
        schedule: 'Twice daily (morning and evening)',
        dose: '2–3 drops 4% SNAP-8 serum to target areas — gently massage in',
        notes: 'Apply to clean dry skin before moisturizer. Target crow\'s feet, forehead lines, and frown lines. Results visible after 4 weeks of consistent use; peak effect at 8–12 weeks. Continue daily for maintained effect.',
      },
      {
        name: 'Combined Peptide Skin Protocol',
        schedule: 'AM: SNAP-8 | PM: GHK-Cu serum',
        dose: 'SNAP-8 at 4% in morning; GHK-Cu 0.1–0.5% serum in evening',
        notes: 'Optimal combination: SNAP-8 targets neuromuscular wrinkle mechanism; GHK-Cu drives collagen synthesis and skin regeneration. Together they cover expression wrinkles (SNAP-8) and structural aging (GHK-Cu).',
      },
    ],
    synergies: ['ghk-cu', 'epithalon-50mg'],
    seoTitle: 'SNAP-8 Dosage & Anti-Wrinkle Peptide Protocol | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 18,
    highlights: ['63% wrinkle reduction', 'Botox alternative mechanism', 'Topical — no injection'],
  },

  // ─── SUPPLIES ─────────────────────────────────────────────────────────────
  {
    slug: 'bacteriostatic-water-reconstitution-solution-10ml',
    name: 'Bacteriostatic Water 10ml',
    tagline: 'Sterile preserved reconstitution water — required for all lyophilized peptide vials',
    price: 9.99,
    category: 'supplies',
    productType: 'supply',
    tags: ['supplies', 'reconstitution', 'essential', 'beginner-friendly'],
    image: img('bacteriostatic-water-30ml.png'),
    affiliateUrl: phiogen('bacteriostatic-water-30ml'),
    shortDescription: 'Bacteriostatic water (0.9% benzyl alcohol in sterile water) is the required reconstitution solution for all lyophilized peptide vials — preserved to remain sterile through multiple needle withdrawals.',
    fullDescription: `Every lyophilized peptide in this catalog — BPC-157, TB-500, semaglutide, tirzepatide, CJC-1295, Epithalon — arrives as a freeze-dried white powder. Before any of them can be injected, they need to be dissolved in a liquid. That liquid is bacteriostatic water, and there's no substitute. Regular sterile water for injection works only for single-use vials; the moment you puncture a regular sterile water vial a second time, you're introducing contamination risk with no preservative to stop bacterial growth. Bacteriostatic water's benzyl alcohol content (0.9%) prevents that bacterial growth — giving you 28 days of safe multi-use access after the first needle entry. Without it, your peptide vials aren't safely usable.

The reconstitution process is simple once you've done it once. Draw your target volume of bacteriostatic water into a syringe, insert the needle into the peptide vial, and let the water run slowly down the inside wall of the vial — not directly onto the lyophilized powder, which can shear the peptide's delicate structure. Gently swirl until fully dissolved. Never shake. Label with the reconstitution date. Refrigerate at 2–8°C and use within 28 days. That's the entire protocol, and it applies identically to every injectable peptide on this site.

The concentration math is what determines your injection volume and dose accuracy. A common example: BPC-157 10mg dissolved in 2ml bacteriostatic water produces 5,000mcg/ml. Drawing 0.1ml in an insulin syringe delivers exactly 500mcg. Different peptides at different target doses suggest different reconstitution volumes — but the principle is constant, and getting this right is what makes every downstream injection accurate.

The 10ml vial covers 3–10 reconstitutions depending on how much bacteriostatic water you use per peptide vial. For a user running multiple compounds simultaneously — say, BPC-157 plus CJC-1295/Ipamorelin — one 10ml vial handles all of them. This is the supply that makes every other product in the catalog functional.`,
    benefits: [
      'The non-negotiable foundation: every injectable peptide in this catalog requires it',
      '28-day multi-use safety after first puncture — benzyl alcohol prevents bacterial contamination',
      'Sterile water alone cannot safely serve multi-use peptide vials — bacteriostatic water is the correct choice',
      'Simple reconstitution process that applies identically to every lyophilized peptide',
      '10ml covers 3–10 peptide reconstitutions — one vial handles multiple compounds simultaneously',
      'Enables precise dose calculation through concentration math (mg in X ml = mcg/ml)',
      'Pharmaceutical injection-grade formulation matched to the standards of every peptide it reconstitutes',
    ],
    whoIsFor: 'Every peptide user, without exception — bacteriostatic water is required to reconstitute any lyophilized peptide before injection.',
    protocols: [
      {
        name: 'Standard Reconstitution Process',
        schedule: 'Once per new vial',
        dose: '1–3ml per lyophilized vial',
        notes: 'Draw BW into syringe. Insert needle into peptide vial at angle. Let BW run down vial wall slowly. Swirl gently until dissolved. Never shake. Refrigerate at 2–8°C. Use within 28 days. Label with reconstitution date.',
      },
    ],
    synergies: ['bpc157-10mg', 'tb500-10mg', 'cjc1295-ipamorelin', 'glp-1s-5mg', 'epithalon-50mg'],
    seoTitle: 'Bacteriostatic Water Peptide Reconstitution Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 19,
    highlights: ['Required for all peptides', '28-day multi-use', '10ml = 3–10 reconstitutions'],
  },
  {
    slug: 'glp-3r-60mg',
    name: 'Retatrutide 60mg',
    tagline: 'Maximum retatrutide supply — for aggressive long-term triple-agonist fat loss at the highest dose',
    price: 589.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'triple-agonist', 'bulk-supply', 'advanced', 'maximum-dose'],
    image: img('retatrutide-30mg.png'),
    affiliateUrl: phiogen('retatrutide-30mg'),
    shortDescription: 'The 60mg retatrutide vial supports 15 weeks at 4mg/week or 7.5 weeks at 8mg/week — designed for committed long-term triple-agonist protocols at maximum therapeutic doses.',
    fullDescription: `Fifteen weeks at 4mg/week. Seven and a half weeks at 8mg/week. Five weeks at the Phase 2 maximum dose of 12mg/week. The 60mg retatrutide vial is the full commitment — a single purchase that covers an entire 4-month protocol at lower maintenance doses, or nearly two months at high-efficacy therapeutic dosing. This is what running retatrutide properly looks like.

The TRIUMPH Phase 2 trial ran 48 weeks and produced its most dramatic results in participants who maintained consistent triple-agonist signaling throughout. The compounding thermogenic effect that distinguishes retatrutide from tirzepatide — glucagon-driven brown adipose tissue activation and hepatic fat oxidation — becomes more pronounced, not less, as the protocol extends. Week 12 results are meaningfully better than week 6. Week 24 results exceed week 12. The biology is cumulative, and the 60mg vial is built to support that cumulative effect without interruption.

For users running the combination protocol — retatrutide for fat loss with CJC-1295/Ipamorelin for lean mass preservation — the 60mg vial provides practical alignment with GH peptide cycling. Standard GH secretagogue protocols run 12 weeks on, 4 weeks off. A single 60mg vial at 4mg/week covers that 12-week active phase with room to spare, allowing the fat loss mechanism to run continuously while the anabolic component cycles appropriately. This is the highest-sophistication body recomposition approach available in the catalog.

The protocol commitment this vial represents also correlates with the outcomes worth pursuing. Four months of sustained triple-agonist signaling produces the hepatic fat reduction, cardiovascular marker improvements, insulin sensitivity restoration, and visceral fat elimination that represent real metabolic transformation — not just scale numbers, but changes that measurably reduce long-term disease risk.`,
    benefits: [
      '15-week supply at 4mg/week — the full 4-month commitment for maximum cumulative results',
      'Thermogenic compounding: glucagon-driven fat oxidation becomes more pronounced with extended use',
      'Aligns with 12-week CJC-1295/Ipamorelin cycling for uninterrupted fat loss during GH cycles',
      'Four months of sustained triple-agonist signaling for full metabolic transformation',
      'Lowest cost-per-mg in the entire retatrutide catalog',
      'Covers hepatic fat, visceral fat, insulin sensitivity, and cardiovascular markers — all improve with sustained dosing',
      'The protocol duration that most closely mirrors the TRIUMPH trial sustained fat loss curve',
    ],
    whoIsFor: 'Fully committed retatrutide users running extended 12–15 week protocols, or those pairing with CJC-1295/Ipamorelin who want uninterrupted fat loss coverage across a full GH cycle.',
    protocols: [
      {
        name: 'Extended Triple-Agonist Protocol',
        schedule: 'Once weekly',
        dose: '4–12mg subcutaneous based on tolerance and response',
        notes: 'Store unmixed at –20°C for up to 12 months. Reconstitute in 3ml bacteriostatic water. At 4mg/week: draw 0.2ml per injection from 3ml volume. Mark reconstitution date; use within 28 days. Pair with CJC-1295/Ipa for body recomp.',
      },
    ],
    synergies: ['cjc1295-ipamorelin', 'igf-1lr3', 'bpc157-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Retatrutide 60mg Maximum Dosage & Protocol Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 20,
    highlights: ['15-week supply at 4mg', 'Maximum efficacy protocol', 'Triple GLP-1/GIP/Glucagon'],
  },
  // ─── LOOKS MAXXING ───────────────────────────────────────────────────────
  {
    slug: 'melanotan-ii-10mg',
    name: 'Melanotan II 10mg',
    tagline: 'Synthetic alpha-MSH analog — stimulates melanin production for deep, UV-independent tanning',
    price: 54.99,
    category: 'looks',
    productType: 'injectable',
    tags: ['tanning', 'looks', 'melanocortin', 'pigmentation', 'advanced'],
    image: img('bpc-157-10mg.png'),
    affiliateUrl: phiogen('melanotan-2-10mg'),
    shortDescription: 'Melanotan II is a potent synthetic analog of alpha-melanocyte stimulating hormone (α-MSH) that activates melanocortin receptors to drive deep, even tanning — without requiring UV exposure as the primary trigger.',
    fullDescription: `Melanotan II is what happens when researchers take the body's own tanning signal — alpha-melanocyte stimulating hormone (α-MSH) — and engineer a more stable, more potent synthetic version. Where natural α-MSH requires significant UV exposure to reach tanning-effective levels, Melanotan II activates melanocortin receptors directly, producing deep eumelanin (brown-black melanin) pigmentation from a fraction of the UV dose. The result: faster, darker, and more even tanning than is achievable naturally.

The mechanism operates through the melanocortin receptor family. Melanotan II binds MC1R on melanocytes (driving melanin synthesis), MC3R (appetite and energy regulation), MC4R (satiety and libido), and MC5R (glandular function). This broad receptor binding is why Melanotan II produces multiple effects beyond tanning — appetite suppression, increased satiety, and pro-erectile effects are all documented consequences of MC3R and MC4R activation and are well-characterized in clinical literature.

Melanin production under Melanotan II is qualitatively different from sunburn-induced tanning. Natural UV tanning initially upregulates pheomelanin (reddish, less photoprotective) before converting to eumelanin. Melanotan II preferentially drives eumelanin synthesis — the darker, more photoprotective pigment type that produces the even brown complexion associated with deep natural tans. Users report more uniform color distribution and a natural-looking result that avoids the orange tones sometimes associated with topical tanners.

Clinical trials at the University of Arizona (Levine et al., 1991; Hadley et al., 1998) demonstrated that 4 subcutaneous injections over 5 days produced visible, measurable tanning in fair-skinned subjects. Subsequent work confirmed dose-dependent tanning response and established the current standard dosing protocol.

Side effect management is central to Melanotan II use. Nausea and facial flushing are the most common acute responses — both driven by MC receptor activation in the brainstem and peripheral vasculature. These effects are dose-dependent and largely eliminated by starting at a low dose (0.25–0.5mg), administering in the evening, and titrating slowly. The spontaneous pro-erectile effect seen in male users is a direct MC4R consequence and typically diminishes as receptor desensitization occurs with continued use.`,
    benefits: [
      'Activates MC1R on melanocytes to drive eumelanin (dark pigment) synthesis without primary UV dependence',
      'Produces deeper, more even tan than UV alone — preferential eumelanin over pheomelanin',
      'Clinically demonstrated tanning in University of Arizona Phase I/II trials with just 4 injections',
      'MC4R activation provides concurrent appetite suppression — synergistic with body composition goals',
      'Photoprotective effect: increased eumelanin provides natural SPF equivalent to sun-protective fair skin',
      'Once pigmentation is established, maintenance dosing 1–2× weekly sustains color with minimal UV',
    ],
    whoIsFor: 'Adults seeking accelerated, deep, even tan results; individuals with fair skin (Fitzpatrick Type I–III) who tan slowly or poorly under UV; users pursuing cosmetic appearance optimization.',
    protocols: [
      {
        name: 'Loading Phase (Weeks 1–3)',
        schedule: 'Daily or every other day',
        dose: '0.25–0.5mg subcutaneous, evening administration',
        notes: 'Start at 0.25mg and titrate based on nausea tolerance. Administer 60 min before sleep to sleep through peak nausea window. Even minimal UV exposure (15–20 min/day) dramatically accelerates visible results. Reconstitute 10mg vial with 2ml bac water = 5,000mcg/ml; draw 0.05ml for 0.25mg dose.',
      },
      {
        name: 'Maintenance Phase (Week 4+)',
        schedule: '1–2× weekly',
        dose: '0.5–1mg subcutaneous',
        notes: 'Once desired pigmentation is established, reduce to maintenance frequency. UV exposure is no longer required to maintain pigmentation but small doses (10–15 min sun) extend color quality. Refrigerate reconstituted vial; use within 28 days.',
      },
    ],
    synergies: ['pt-141-10mg', 'ghk-cu', 'cjc1295-ipamorelin', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Melanotan II 10mg Dosage & Tanning Protocol Guide | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 21,
    highlights: ['Deep eumelanin pigmentation', 'UV-independent tanning trigger', 'MC1R/MC3R/MC4R agonist'],
  },
  {
    slug: 'pt-141-10mg',
    name: 'PT-141 10mg',
    tagline: 'Bremelanotide — the well-tolerated melanocortin peptide for tanning, libido, and appearance enhancement',
    price: 59.99,
    category: 'looks',
    productType: 'injectable',
    tags: ['tanning', 'looks', 'melanocortin', 'pigmentation', 'beginner-friendly'],
    image: img('bpc-157-10mg.png'),
    affiliateUrl: phiogen('pt-141-10mg'),
    shortDescription: 'PT-141 (bremelanotide) is the FDA-studied melanocortin peptide with a more selective receptor profile than Melanotan II — delivering tanning and libido enhancement effects with significantly reduced nausea and a more manageable side effect window.',
    fullDescription: `PT-141 emerged from the same research program that produced Melanotan II — a University of Arizona melanocortin research initiative that produced two of the most clinically interesting cosmetic and sexual wellness peptides available. Where Melanotan II is a broad-spectrum melanocortin agonist with high binding affinity across the full MC receptor family, PT-141 has a selectivity profile that favors MC3R and MC4R over MC1R — making it a more targeted tool depending on your primary goal.

The tanning effect of PT-141 is real but milder than Melanotan II. This selectivity difference matters: MC1R is the primary receptor driving eumelanin synthesis in melanocytes, and PT-141's lower MC1R affinity means the tanning response per milligram is less pronounced. For users who want tanning as a secondary benefit alongside libido and wellness effects — or who found Melanotan II's tanning-plus-side-effects profile too aggressive — PT-141 offers a more manageable entry point.

Where PT-141 surpasses Melanotan II is in central nervous system effects and tolerability. The FDA evaluated bremelanotide (PT-141) for hypoactive sexual desire disorder, culminating in the 2019 approval of Vyleesi for premenopausal women. The clinical trial data accumulated during this pathway represents a level of safety characterization that the average research peptide lacks. Phase III trials involved hundreds of participants over months of use, documenting the side effect profile and establishing that the primary concerns are transient nausea and facial flushing — both dose-dependent and significantly milder than Melanotan II at equivalent doses.

The half-life of PT-141 (approximately 2.7 hours) is longer than Melanotan II's (~1 hour), which provides a wider window of effect with less frequent dosing. For practical use in a looks maxxing protocol, PT-141 functions well as a once or twice-weekly administration that contributes to gradual pigmentation development, appetite modulation, and overall melanocortin axis activation.`,
    benefits: [
      'More selective MC3R/MC4R profile than Melanotan II — significantly reduced nausea and flushing per dose',
      'FDA-evaluated in Phase III clinical trials for bremelanotide (Vyleesi) — extensive safety data available',
      'Longer half-life (~2.7h vs ~1h) provides a more sustained effect window with less frequent dosing',
      'Mild to moderate tanning response via MC1R partial activation — ideal for gradual pigmentation',
      'MC4R activation drives appetite suppression and body composition benefits',
      'Suitable introduction to melanocortin peptides before advancing to full Melanotan II protocols',
    ],
    whoIsFor: 'Users new to melanocortin peptides seeking tanning benefits with better tolerability; individuals prioritizing libido and wellness effects alongside pigmentation; those who experienced excessive side effects with Melanotan II.',
    protocols: [
      {
        name: 'Introductory Tanning Protocol',
        schedule: '2–3× weekly',
        dose: '1–2mg subcutaneous, evening administration',
        notes: 'Reconstitute 10mg vial with 2ml bac water = 5,000mcg/ml; draw 0.2ml for 1mg dose. Administer in evening to minimize active nausea window. Some UV exposure (15–20 min) significantly enhances tanning response. Start at 1mg and assess tolerance before advancing to 2mg.',
      },
      {
        name: 'Stacked Melanocortin Protocol',
        schedule: '2× weekly',
        dose: '0.5–1mg PT-141 + periodic Melanotan II 0.5mg',
        notes: 'PT-141 and Melanotan II can be alternated or combined at reduced doses for synergistic melanocortin coverage with minimized side effects. Total daily melanocortin peptide dose should not exceed 2mg when combining.',
      },
    ],
    synergies: ['melanotan-ii-10mg', 'ghk-cu', 'snap-8', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'PT-141 (Bremelanotide) 10mg Dosage & Protocol Guide | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 22,
    highlights: ['FDA-evaluated peptide', 'Better-tolerated melanocortin', 'Gradual tanning + libido'],
  },

  // ─── LOOKS: HAIR & SKIN ───────────────────────────────────────────────────
  {
    slug: 'melanotan-i-10mg',
    name: 'Melanotan I 10mg',
    tagline: 'Afamelanotide — the FDA-approved MC1R-selective tanning peptide with superior safety profile',
    price: 59.99,
    category: 'looks',
    productType: 'injectable',
    tags: ['tanning', 'looks', 'melanocortin', 'pigmentation', 'mc1r', 'beginner-friendly'],
    image: img('melanotan-1-10mg.png'),
    affiliateUrl: phiogen('melanotan-1-10mg'),
    shortDescription: 'Melanotan I (afamelanotide) is the FDA-approved melanocortin peptide with near-exclusive MC1R selectivity — producing deep, even tanning without the MC4R-mediated side effects (nausea, spontaneous erections) associated with Melanotan II.',
    fullDescription: `Melanotan I — clinically known as afamelanotide — is the more refined sibling of Melanotan II, engineered by researchers at the University of Arizona with the explicit goal of retaining the tanning benefits of alpha-MSH while eliminating the systemic side effects caused by MC4R activation. Where Melanotan II binds broadly across MC1R through MC5R, afamelanotide's receptor selectivity profile is dramatically skewed toward MC1R — the primary receptor driving eumelanin synthesis in melanocytes. This selectivity translates directly into a cleaner, more predictable experience.

The clinical validation of Melanotan I surpasses any other tanning peptide available. Afamelanotide was approved by the FDA in 2019 as Scenesse (Clinuvel Pharmaceuticals) for erythropoietic protoporphyria (EPP) — a rare genetic disorder causing extreme photosensitivity. The Phase III trial data behind this approval established what independent researchers had demonstrated for years: that MC1R-targeted eumelanin upregulation produces substantial, lasting photoprotection. Patients with EPP — who previously could not spend more than minutes in sunlight without excruciating pain — gained hours of pain-free sun exposure after Melanotan I treatment.

The practical advantage of Melanotan I's selectivity for cosmetic tanning users is significant. At equivalent doses, it produces a full-body tanning response via eumelanin synthesis without the nausea, flushing, yawning, or spontaneous pro-erectile effects that make Melanotan II dosing management challenging. The tanning result itself is also qualitatively superior: MC1R-preferential activation drives more eumelanin relative to pheomelanin than Melanotan II, producing a darker, more natural-appearing tan with better photoprotective properties.

Half-life is longer than Melanotan II (several hours vs approximately 1 hour), and the absence of MC4R-driven central effects means the experiential window is free of the neurological and appetite effects that some users find disruptive. For users who have previously found Melanotan II intolerable due to side effects, or who are beginning a melanocortin protocol for the first time, Melanotan I represents the clinically superior entry point.`,
    benefits: [
      'Near-exclusive MC1R selectivity — deep eumelanin tanning without MC4R nausea, flushing, or pro-erectile effects',
      'FDA-approved as Scenesse (afamelanotide) for EPP — more clinical validation than any other tanning peptide',
      'Longer half-life than Melanotan II — more sustained effect with less frequent dosing required',
      'Preferential eumelanin over pheomelanin — darker, more even, more natural-looking pigmentation',
      'Provides genuine photoprotection: equivalent to SPF 3–5 at full eumelanin induction',
      'No appetite or libido interference — cleaner profile for users who experienced MC4R side effects with MT-II',
    ],
    whoIsFor: 'Users who found Melanotan II intolerable due to side effects; those beginning melanocortin tanning for the first time; anyone seeking the cleanest path to deep, even tanning.',
    protocols: [
      {
        name: 'Standard Tanning Protocol',
        schedule: 'Daily (loading) → 2–3× weekly (maintenance)',
        dose: '0.5–1mg subcutaneous, evening administration',
        notes: 'Reconstitute 10mg vial with 2ml bac water = 5,000mcg/ml. 0.1ml = 0.5mg. Administer in evening. Some UV exposure (15–20 min/day) during loading accelerates visible results. Fewer side effects than MT-II allow for higher starting doses.',
      },
    ],
    synergies: ['melanotan-ii-10mg', 'ghk-cu', 'snap-8', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Melanotan I (Afamelanotide) 10mg — FDA-Grade Tanning Peptide Protocol | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 23,
    highlights: ['FDA-approved afamelanotide', 'MC1R-selective — no MC4R side effects', 'Superior safety profile'],
  },
  {
    slug: 'ru-58841-30ml',
    name: 'RU-58841 50mg/mL 30mL',
    tagline: 'Topical DHT blocker — prevents hair follicle miniaturization without systemic androgen suppression',
    price: 79.99,
    category: 'looks',
    productType: 'topical',
    tags: ['hair', 'looks', 'dht-blocker', 'androgenetic-alopecia', 'topical', 'advanced'],
    image: img('ru-58841-50mg-x-30ml.png'),
    affiliateUrl: phiogen('ru-58841-50mg-x-30ml'),
    shortDescription: 'RU-58841 is a non-steroidal topical androgen receptor antagonist that blocks DHT from binding hair follicle receptors — preventing the miniaturization process that causes androgenetic alopecia without the systemic side effects of finasteride.',
    fullDescription: `Androgenetic alopecia — male and female pattern hair loss — is fundamentally a DHT problem. Dihydrotestosterone binds androgen receptors in genetically predisposed hair follicles, triggering a miniaturization cascade that progressively shrinks follicles from large terminal hair producers to tiny vellus hair producers, eventually causing complete follicle closure. The conventional pharmacological response — finasteride — blocks DHT systemically by inhibiting 5-alpha reductase everywhere in the body. This works but at a significant cost: systemic DHT suppression interferes with neurosteroid synthesis, libido, erectile function, and mood in a substantial minority of users.

RU-58841 approaches the same problem from a different angle. Rather than reducing DHT systemically, it competes with DHT at the androgen receptor locally in the scalp, preventing follicle miniaturization without altering systemic DHT levels. Applied topically, RU-58841 stays predominantly in the scalp tissue due to its physicochemical properties — the compound is active where it's applied but does not achieve significant systemic concentrations at standard doses.

Research in androgenetic alopecia models demonstrates that topical RU-58841 application effectively prevents follicle miniaturization and in some models reverses early-stage miniaturization when initiated before complete follicle closure. The mechanism — receptor blockade rather than DHT reduction — means it can be combined with other hair loss approaches (TB-500 for stem cell activation, BPC-157 for vascularity, GHK-Cu for gene expression) without interference.

For the peptide hair restoration protocol, RU-58841 addresses the androgenetic cause while the peptide stack addresses the biological consequences — creating a two-pronged approach that targets both the driver of miniaturization and the restoration of follicle biology.`,
    benefits: [
      'Blocks DHT at the scalp androgen receptor without reducing systemic DHT — no finasteride-associated side effects',
      'Topical pharmacokinetics: effective locally in scalp tissue without significant systemic absorption',
      'Prevents follicle miniaturization progression — additive with peptide-based restoration protocols',
      'Non-steroidal structure — does not cross-react with other steroid receptors',
      'Combines cleanly with TB-500, BPC-157, and GHK-Cu for comprehensive hair loss coverage',
      'Can be used by males or females experiencing androgenetic pattern loss',
    ],
    whoIsFor: 'Males and females experiencing androgenetic (pattern) hair loss who want DHT blockade at the follicle level without systemic androgen suppression; users looking to combine hair loss prevention with peptide restoration.',
    protocols: [
      {
        name: 'Daily Scalp Application',
        schedule: 'Once daily, evening',
        dose: '1–2mL applied to affected scalp areas',
        notes: 'Apply 1–2mL of 50mg/mL solution (50–100mg total) to scalp areas experiencing thinning. Allow to fully absorb before sleep. Can be combined directly with topical GHK-Cu application (apply separately, allow each to absorb). Consistent daily use is required — hair loss protection returns to baseline within weeks of stopping.',
      },
    ],
    synergies: ['tb500-10mg', 'bpc157-10mg', 'ghk-cu', 'melanotan-i-10mg'],
    seoTitle: 'RU-58841 Topical DHT Blocker — Hair Loss Protocol Guide | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 24,
    highlights: ['Local DHT blockade', 'No systemic finasteride side effects', 'Stack with hair peptides'],
  },

  // ─── GROWTH PEPTIDES ──────────────────────────────────────────────────────
  {
    slug: 'sermorelin-5mg',
    name: 'Sermorelin 5mg',
    tagline: 'GHRH analogue — natural pulsatile GH stimulation with FDA-validated mechanism and no receptor downregulation',
    price: 69.99,
    category: 'performance',
    productType: 'injectable',
    tags: ['growth-hormone', 'performance', 'ghrh', 'fda-mechanism', 'beginner-friendly'],
    image: img('sermorelin-5mg.png'),
    affiliateUrl: phiogen('sermorelin-5mg'),
    shortDescription: 'Sermorelin is a 29-amino acid analogue of growth hormone releasing hormone (GHRH) with FDA-validated mechanism and clinical use history spanning decades — stimulating natural pulsatile GH release without the downregulation risks of long-acting CJC-1295 variants.',
    fullDescription: `Sermorelin holds a unique position in the growth hormone secretagogue landscape: it is the only GHRH analogue with a long history of FDA approval (as Geref, for pediatric growth hormone deficiency) combined with full clinical safety data from human use spanning decades. This established track record makes sermorelin the best-documented GH secretagogue available outside of direct growth hormone injection.

The mechanism is direct and elegant. Sermorelin is the N-terminal 29-amino-acid fragment of the endogenous 44-amino acid GHRH. This truncated fragment retains full biological activity at the pituitary GHRH receptor while being considerably shorter and synthetically simpler than native GHRH. When administered, sermorelin binds the pituitary GHRH receptor and triggers the same pulsatile GH release that endogenous GHRH produces — maintaining the natural GH release pattern that is associated with physiological anabolic and restorative effects.

Where sermorelin differs most importantly from CJC-1295 with DAC is in its half-life and release pattern. Sermorelin's plasma half-life is approximately 10–20 minutes — meaning each injection produces a discrete, physiological GH pulse that mimics the natural pulsatile pattern. CJC-1295 with DAC, by contrast, produces continuous elevated GH over days, which can suppress somatostatin feedback mechanisms and potentially cause receptor downregulation. Sermorelin preserves the pulsatile pattern that the body evolved to produce.

For users new to GH axis peptides who want clinical validation before moving to more aggressive protocols, sermorelin represents the most conservative entry point. For experienced users who specifically want the GH pulse pattern preserved without long-acting variants, sermorelin combined with Ipamorelin produces a synergistic effect: sermorelin activates the GHRH receptor while ipamorelin activates the ghrelin receptor — two complementary pathways that together produce significantly larger GH pulses than either alone.`,
    benefits: [
      'FDA-validated GHRH mechanism with decades of clinical use history — the most well-documented GH secretagogue',
      'Preserves natural pulsatile GH release pattern — no somatostatin blunting or receptor desensitization',
      'Short half-life (10–20 min) produces discrete GH pulses that mirror endogenous physiology',
      'Synergizes powerfully with ghrelin receptor agonists (Ipamorelin, GHRP-2) for amplified GH pulses',
      'No IGF-1 receptor suppression — suitable for long-term use without cycling concerns',
      'Well-tolerated side effect profile documented in pediatric and adult human trials',
    ],
    whoIsFor: 'Beginners to GH axis peptides who want a well-documented, FDA-validated mechanism; experienced users preferring pulsatile over continuous GH stimulation; those combining with Ipamorelin or GHRP-2 for synergistic GH release.',
    protocols: [
      {
        name: 'Sermorelin + Ipamorelin Protocol',
        schedule: 'Once daily, nightly (30–60 min before sleep)',
        dose: '100–200mcg sermorelin + 100mcg ipamorelin subcutaneous',
        notes: 'Reconstitute 5mg + 2ml bac water = 2,500mcg/ml. Draw 0.04–0.08ml per 100–200mcg dose. Administer on empty stomach (last meal ≥2–3h prior). Synergistic with ipamorelin — combining both receptor pathways produces significantly larger GH pulse than either alone.',
      },
    ],
    synergies: ['ipamorelin-10mg', 'igf-1lr3', 'ghrp-2-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Sermorelin 5mg Dosage & Protocol Guide — GHRH Analogue for GH Optimization | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 25,
    highlights: ['FDA-validated mechanism', 'Natural pulsatile GH release', 'No receptor downregulation'],
  },
  {
    slug: 'tesamorelin-10mg',
    name: 'Tesamorelin 10mg',
    tagline: 'FDA-approved GHRH analogue — Phase III data for 18% visceral fat reduction and superior GH axis activation',
    price: 119.99,
    category: 'performance',
    productType: 'injectable',
    tags: ['growth-hormone', 'performance', 'fat-loss', 'ghrh', 'fda-approved', 'visceral-fat'],
    image: img('tesamorelin-10mg.png'),
    affiliateUrl: phiogen('tesamorelin-10mg'),
    shortDescription: 'Tesamorelin is an FDA-approved GHRH analogue with the strongest clinical evidence for visceral fat reduction of any GH-related peptide — Phase III trials demonstrated 18% reduction in visceral adipose tissue at 26 weeks, with simultaneous lean mass preservation.',
    fullDescription: `Tesamorelin occupies a position no other GHRH analogue can claim: full FDA approval based on large-scale Phase III randomized controlled trials in humans. Approved as Egrifta (Theratechnologies) for HIV-associated lipodystrophy — a condition characterized by abnormal visceral fat accumulation — tesamorelin's clinical evidence base represents the most rigorous pharmaceutical-grade validation available for any research peptide. The Phase III trials enrolled hundreds of patients, used placebo controls, and produced statistically significant, reproducible results.

The mechanism of tesamorelin is a modified version of native GHRH, stabilized by the addition of a trans-3-hexenoic acid group that extends its half-life and metabolic stability. This modification allows tesamorelin to reach the pituitary GHRH receptor more effectively than native GHRH while still triggering the physiological pulsatile GH release pattern. The resulting GH elevation drives IGF-1 synthesis in the liver, which mediates the anabolic and lipolytic effects.

What distinguishes tesamorelin from other GHRH analogues is its specific visceral fat targeting. Phase III data showed 18% reduction in visceral adipose tissue (VAT) at 26 weeks — a clinically significant reduction in the most metabolically dangerous fat depot. Subcutaneous fat showed minimal reduction, suggesting that tesamorelin's GH-driven lipolysis preferentially targets visceral adipocytes. This visceral specificity makes tesamorelin uniquely valuable for users with central adiposity, metabolic syndrome, or abdominal fat that resists diet and exercise.

When combined with ipamorelin, tesamorelin creates a dual-receptor activation protocol: tesamorelin stimulates the GHRH receptor while ipamorelin stimulates the ghrelin receptor. These two pathways converge on the somatotroph, producing synergistic GH release that exceeds either compound alone. This combination is among the most evidence-based GH optimization protocols available without direct GH administration.`,
    benefits: [
      'FDA-approved as Egrifta — Phase III RCT data showing 18% reduction in visceral adipose tissue at 26 weeks',
      'Visceral fat-specific lipolysis: targets the most metabolically dangerous fat depot preferentially',
      'Modified GHRH with extended stability — more effective pituitary receptor engagement than native GHRH',
      'Pulsatile GH release pattern preserved — no somatostatin blunting, no axis shutdown',
      'Synergizes powerfully with Ipamorelin for dual-receptor GH optimization protocol',
      'Simultaneous lean mass preservation: GH/IGF-1 elevation is anabolic alongside its lipolytic effects',
    ],
    whoIsFor: 'Users with central/visceral adiposity who want the most clinically validated GHRH peptide; athletes and body composition-focused users wanting GH optimization with a visceral fat-reduction bonus; those pairing with ipamorelin for dual-receptor protocols.',
    protocols: [
      {
        name: 'Tesamorelin + Ipamorelin Protocol',
        schedule: 'Once daily, nightly (empty stomach)',
        dose: '1–2mg tesamorelin + 100mcg ipamorelin subcutaneous',
        notes: 'Reconstitute 10mg + 2ml bac water = 5,000mcg/ml. Draw 0.2–0.4ml for 1–2mg tesamorelin. Administer 30–60 min before sleep with last meal ≥2–3h prior. Clinical Phase III used 2mg/day. Run 12–26 week cycles; 4–8 weeks off.',
      },
    ],
    synergies: ['ipamorelin-10mg', 'igf-1lr3', 'cjc-ipa-blend-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Tesamorelin 10mg — FDA-Approved GHRH Analogue Dosage & Protocol | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 26,
    highlights: ['FDA-approved Phase III data', '18% visceral fat reduction', 'Strongest GHRH analogue'],
  },
  {
    slug: 'ghrp-2-10mg',
    name: 'GHRP-2 10mg',
    tagline: 'Second-generation ghrelin receptor agonist — potent GH pulse with minimal appetite stimulation',
    price: 49.99,
    category: 'performance',
    productType: 'injectable',
    tags: ['growth-hormone', 'performance', 'ghrp', 'ghrelin-receptor', 'gh-pulse'],
    image: img('ghrp-2-10mg.png'),
    affiliateUrl: phiogen('ghrp-2-10mg'),
    shortDescription: 'GHRP-2 is a second-generation ghrelin receptor agonist with one of the strongest GH release signals among the GHRP class — with significantly less appetite stimulation than GHRP-6, making it the preferred choice for users focused on GH optimization without caloric impact.',
    fullDescription: `GHRP-2 (Growth Hormone Releasing Peptide-2) belongs to the hexapeptide family of ghrelin receptor agonists — synthetic compounds that mimic the GH-releasing action of ghrelin at the pituitary ghrelin receptor (GHS-R1a) without the full ghrelin effect on hunger. GHRP-2 produces some of the largest single GH pulses observed with research peptides, making it the preferred GHRP-class compound for users prioritizing GH release magnitude over appetite effects.

The distinction between GHRP-2 and GHRP-6 is primarily in their ghrelin mimicry profile. GHRP-6 closely mimics full ghrelin activity — both the GH-releasing effect and the strong orexigenic (hunger-stimulating) effect at the hypothalamus. GHRP-2 activates GHS-R1a with high potency for GH release but with substantially reduced orexigenic signaling, producing notable hunger stimulation in only a minority of users at standard doses. This makes GHRP-2 more compatible with caloric-controlled protocols and fat loss phases.

Like all GHRP-class compounds, GHRP-2 works synergistically with GHRH receptor agonists. When GHRP-2 and sermorelin (or CJC-1295) are administered together, they activate two separate pathways that converge on pituitary somatotrophs: the ghrelin receptor (via GHRP-2) and the GHRH receptor (via sermorelin/CJC). This dual activation produces GH pulses substantially larger than either compound alone — clinical data shows the combination can produce 5–10x the GH release of either peptide administered solo.

For performance-focused users who want maximum GH pulse magnitude with a clean protocol, GHRP-2 combined with sermorelin or CJC-1295 No DAC represents the most evidence-based GHRP stack available. Half-life is approximately 15 minutes, making dosing timing more critical than longer-acting compounds — injection 30–60 minutes before sleep on an empty stomach produces the most pronounced pulsatile GH response.`,
    benefits: [
      'Among the highest GH pulse magnitude of any GHRP-class peptide — more GH release per dose than GHRP-6',
      'Significantly less hunger stimulation than GHRP-6 — compatible with caloric-controlled and fat loss protocols',
      'Synergizes powerfully with GHRH analogues (sermorelin, CJC-1295) for 5–10× combined GH release',
      'GHS-R1a activation through complementary pathway to GHRH receptor — additive with all GHRH peptides',
      'Short half-life (~15 min) produces clean, discrete pulsatile GH release that mirrors natural physiology',
      'Well-characterized in human studies with established safety profile at research doses',
    ],
    whoIsFor: 'Athletes and performance users wanting maximum GH pulse magnitude; users who found GHRP-6 appetite stimulation excessive; those stacking with CJC-1295 or sermorelin for dual-receptor GH protocols.',
    protocols: [
      {
        name: 'GHRP-2 + CJC-1295 Protocol',
        schedule: 'Once to twice daily',
        dose: '100–300mcg GHRP-2 + 100mcg CJC-1295 No DAC subcutaneous',
        notes: 'Reconstitute 10mg + 2ml bac water = 5,000mcg/ml. Draw 0.02–0.06ml per 100–300mcg. Administer on empty stomach (≥2h from last meal). Primary dose 30–60 min before sleep; optional second dose pre-workout. Combine with CJC-1295 No DAC for maximum synergistic GH pulse.',
      },
    ],
    synergies: ['sermorelin-5mg', 'cjc-1295-no-dac-10mg', 'igf-1lr3', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'GHRP-2 10mg — Ghrelin Receptor Agonist GH Peptide Protocol | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 27,
    highlights: ['High GH pulse magnitude', 'Minimal appetite stimulation', 'Synergizes with all GHRH peptides'],
  },
  {
    slug: 'ipamorelin-10mg',
    name: 'Ipamorelin 10mg',
    tagline: 'The cleanest GHRP — selective GH release without cortisol, prolactin, or appetite side effects',
    price: 59.99,
    category: 'performance',
    productType: 'injectable',
    tags: ['growth-hormone', 'performance', 'ghrp', 'ghrelin-receptor', 'beginner-friendly', 'clean'],
    image: img('ipamorelin-10mg.png'),
    affiliateUrl: phiogen('ipamorelin-10mg'),
    shortDescription: 'Ipamorelin is the most selective ghrelin receptor agonist available — producing GH release without the cortisol elevation, prolactin increase, or hunger stimulation that characterize older GHRP compounds like GHRP-6. The cleanest entry point to GH secretagogue protocols.',
    fullDescription: `Ipamorelin earned its reputation as the "clean GHRP" through clinical data that distinguished it from every other ghrelin receptor agonist at the time of its characterization. Where GHRP-2 and GHRP-6 produce significant GH release alongside measurable cortisol and prolactin elevation, ipamorelin produces GH release with essentially no cortisol or prolactin response at standard doses. This selectivity profile makes ipamorelin the preferred GHRP for protocols where avoiding stress hormone co-activation is important — including extended protocols, sleep-focused GH optimization, and any context where cortisol elevation would counteract anabolic goals.

The mechanism of ipamorelin's selectivity lies in its specific binding profile at the GHS-R1a receptor. While GHRP-2 and GHRP-6 trigger both GH release and downstream cortisol/prolactin activation through secondary receptor interactions, ipamorelin's binding geometry appears to preferentially couple GHS-R1a to the Gs pathway (GH release) without significant coupling to the pathways that elevate stress hormones. The clinical result is a GH secretagogue that behaves like GH in physiology without the off-target hormonal effects.

The practical implications are considerable. Cortisol is catabolic — chronically elevated cortisol from repeated GHRP administration undermines the anabolic goals that GH secretagogue protocols are designed to achieve. With ipamorelin, users running 16-week or longer GH protocols avoid this cortisol co-activation issue entirely. The absence of meaningful hunger stimulation also makes ipamorelin compatible with any dietary approach, including aggressive caloric restriction protocols where GHRP-6's hunger effects would be counterproductive.

Combined with CJC-1295 No DAC or sermorelin, ipamorelin produces synergistic GH pulses through dual receptor activation. The Ipamorelin/CJC-1295 blend is one of the most widely used GH optimization combinations — and Phiogen offers it pre-mixed for convenience. For those who prefer the control of separate compounds, 100mcg each administered together nightly represents the entry-level protocol with an established safety and efficacy record.`,
    benefits: [
      'Selective GH release without cortisol or prolactin elevation — no catabolic co-activation of stress hormones',
      'No appetite stimulation — compatible with any dietary approach including caloric restriction',
      'Cleanest GHRP profile for extended protocols — minimal off-target effects with long-term use',
      'Synergizes with all GHRH analogues (CJC-1295, sermorelin, tesamorelin) for dual-receptor GH optimization',
      'Well-tolerated by both men and women — most commonly used starting point for GHRP protocols',
      'Available pre-blended with CJC-1295 for convenient single-vial administration',
    ],
    whoIsFor: 'Users new to GH secretagogues wanting the cleanest, best-tolerated entry point; those running extended GH protocols where cortisol neutrality is essential; women; anyone stacking with CJC-1295 for the gold-standard GH optimization combination.',
    protocols: [
      {
        name: 'Ipamorelin + CJC-1295 No DAC',
        schedule: 'Once daily, nightly',
        dose: '100mcg ipamorelin + 100mcg CJC-1295 No DAC subcutaneous',
        notes: 'Reconstitute 10mg + 2ml bac water = 5,000mcg/ml. Draw 0.02ml per 100mcg dose. Administer 30–60 min before sleep on empty stomach (≥2–3h from last meal). Run 12–16 weeks; 4 weeks off. Or use pre-mixed CJC/Ipa blend vial for convenience.',
      },
    ],
    synergies: ['cjc-1295-no-dac-10mg', 'cjc-ipa-blend-10mg', 'tesamorelin-10mg', 'igf-1lr3', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Ipamorelin 10mg — Clean GHRP Protocol Guide for GH Optimization | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 28,
    highlights: ['Zero cortisol/prolactin elevation', 'Cleanest GHRP available', 'Pairs with CJC-1295 for gold-standard GH'],
  },
  {
    slug: 'cjc-1295-no-dac-10mg',
    name: 'CJC-1295 No DAC 10mg',
    tagline: 'Short-acting GHRH analogue — preserves natural pulsatile GH release for the most physiological GH optimization',
    price: 79.99,
    category: 'performance',
    productType: 'injectable',
    tags: ['growth-hormone', 'performance', 'ghrh', 'pulsatile', 'beginner-friendly'],
    image: img('cjc-1295-no-dac-10mg.png'),
    affiliateUrl: phiogen('cjc-1295-no-dac-10mg'),
    shortDescription: 'CJC-1295 without DAC (also called Mod GRF 1-29) is the short-acting GHRH analogue that produces discrete, physiological GH pulses when combined with a GHRP — the most commonly used GHRH peptide for daily GH optimization protocols.',
    fullDescription: `CJC-1295 without DAC — also known as Modified GRF 1-29 — is the modified GHRH fragment that forms half of the most widely used GH optimization combination in research peptide protocols. Unlike its long-acting counterpart CJC-1295 with DAC, the No-DAC version has a half-life of approximately 30 minutes, producing a discrete pulsatile GH stimulus that closely mirrors the natural GH release pattern rather than maintaining continuously elevated GH levels.

The modification that distinguishes CJC-1295 No DAC from native GHRH is the substitution of four amino acids (at positions 2, 8, 15, and 27) to prevent rapid degradation by dipeptidyl peptidase-IV (DPP-IV) and endogenous proteases. This increases plasma stability from the seconds-to-minutes lifespan of native GHRH to approximately 30 minutes for CJC-1295 No DAC — long enough to reliably activate pituitary GHRH receptors, but short enough to preserve the pulsatile pattern that the hypothalamic-pituitary axis is designed to operate within.

The synergy with ipamorelin (or any GHRP) is the central reason for CJC-1295 No DAC's widespread use. When GHRH receptors (activated by CJC-1295) and ghrelin receptors (activated by ipamorelin) are stimulated simultaneously, pituitary somatotrophs receive converging anabolic signals from two independent pathways. Research data shows the combined GH pulse from CJC-1295 No DAC + ipamorelin exceeds either compound's individual effect by multiple times — and Phiogen offers this pair pre-blended in a single vial for users who prefer simplified dosing.

For body composition-focused protocols, CJC-1295 No DAC's pulsatile action drives nocturnal GH release that preferentially mobilizes fat while preserving lean mass — the same mechanism responsible for the lean physiques seen in individuals with naturally high GH production in their youth.`,
    benefits: [
      'Short half-life (~30 min) preserves natural pulsatile GH release — the most physiological GH optimization approach',
      'Modified to resist DPP-IV degradation — 30× longer plasma stability than native GHRH',
      'Produces synergistic GH pulses with ipamorelin, GHRP-2, or any ghrelin receptor agonist',
      'Daily dosing protocol supports consistent nocturnal GH elevation for fat mobilization and recovery',
      'No continuous GH elevation — avoids the somatostatin blunting risk of long-acting DAC version',
      'Available pre-blended with ipamorelin in Phiogen\'s CJC/Ipa blend vial',
    ],
    whoIsFor: 'Users who want physiological pulsatile GH stimulation; those building the CJC/Ipamorelin combination from separate vials; athletes preferring daily dosing over weekly long-acting protocols.',
    protocols: [
      {
        name: 'Daily Nightly Protocol with Ipamorelin',
        schedule: 'Once daily, 30–60 min before sleep',
        dose: '100mcg CJC-1295 No DAC + 100mcg ipamorelin subcutaneous',
        notes: 'Reconstitute 10mg + 2ml bac water = 5,000mcg/ml. Draw 0.02ml per 100mcg. Empty stomach required (≥2–3h from last meal). Can be combined in same syringe with ipamorelin. 12–16 week cycles with 4 weeks off.',
      },
    ],
    synergies: ['ipamorelin-10mg', 'cjc-ipa-blend-10mg', 'igf-1lr3', 'ghrp-2-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'CJC-1295 No DAC 10mg — GHRH Analogue Protocol Guide for GH Optimization | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 29,
    highlights: ['Pulsatile GH release preserved', 'DPP-IV resistant', 'Gold-standard CJC/Ipa pair'],
  },

  // ─── FAT LOSS: NEW PHIOGEN COMPOUNDS ─────────────────────────────────────
  {
    slug: 'aod9604-10mg',
    name: 'AOD9604 10mg',
    tagline: 'HGH fragment 176–191 — the fat-burning sequence of growth hormone without IGF-1 or diabetogenic effects',
    price: 119.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'lipolysis', 'hgh-fragment', 'no-igf1', 'fda-gras', 'beginner-friendly'],
    image: img('aod9604-10mg.png'),
    affiliateUrl: phiogen('aod9604-10mg'),
    shortDescription: 'AOD9604 is the isolated C-terminal fragment of human growth hormone (amino acids 176–191) that retains HGH\'s lipolytic properties while eliminating its anabolic and diabetogenic effects — FDA-designated GRAS status with Phase III obesity trial data.',
    fullDescription: `AOD9604 represents one of the most elegant pharmacological engineering achievements in metabolic peptide research: isolating the specific region of growth hormone responsible for its fat-burning properties and separating it entirely from the IGF-1-mediated anabolic and diabetogenic effects that limit long-term HGH use. The compound is the C-terminal fragment of HGH containing amino acids 176 through 191 — a 16-amino acid sequence that specifically stimulates lipolysis without activating IGF-1 production, insulin resistance pathways, or growth-promoting receptors.

The mechanism differs from how intact HGH burns fat. Rather than signaling through the main GH receptor (which then triggers hepatic IGF-1 synthesis), AOD9604 appears to stimulate fat breakdown through beta-3 adrenergic receptors — the same receptors activated by epinephrine during exercise. This pathway activates hormone-sensitive lipase in adipocytes, triggering triglyceride hydrolysis and fatty acid release without the receptor competition for the main GH receptor that would produce IGF-1-related effects.

In obesity clinical trials, AOD9604 at 1mg/day produced significantly greater fat loss versus placebo while maintaining blood glucose and insulin levels equivalent to placebo — confirming the absence of diabetogenic effects at therapeutic doses. The FDA granted AOD9604 GRAS (Generally Recognized As Safe) designation, reflecting the accumulated safety data from its development program. Phase IIb/III clinical trials have been conducted, making this compound's human safety profile among the most characterized of any lipolytic research peptide.

For users seeking targeted fat mobilization without the complexity of full GH axis protocols, AOD9604 provides a focused lipolytic tool that can be stacked with GLP-1 compounds for enhanced fat loss or used independently during caloric deficits to preferentially mobilize adipose tissue rather than lean mass.`,
    benefits: [
      'Isolated lipolytic sequence of HGH — burns fat without activating IGF-1 production or growth receptors',
      'FDA-designated GRAS status with Phase IIb/III clinical trial data — excellent safety profile',
      'Beta-3 adrenergic mechanism: activates hormone-sensitive lipase directly in adipocytes',
      'No diabetogenic effect — blood glucose and insulin remain stable at therapeutic doses',
      'No IGF-1 elevation — can be used without concern for IGF-1-related anabolic side effects',
      'Compatible with GLP-1 protocols for additive fat loss without mechanism overlap',
    ],
    whoIsFor: 'Users wanting targeted fat mobilization without GH axis complexity; those combining with GLP-1 compounds for enhanced fat loss; individuals concerned about IGF-1 elevation from full GH protocols.',
    protocols: [
      {
        name: 'Daily Fat Loss Protocol',
        schedule: 'Once daily, fasted (morning or pre-workout)',
        dose: '300–500mcg subcutaneous',
        notes: 'Reconstitute 10mg + 2ml bac water = 5,000mcg/ml. Draw 0.06–0.1ml per 300–500mcg dose. Clinical trial dose was 1mg/day; common research dose is 300–500mcg. Administer fasted for maximum lipolytic response. Can be stacked with semaglutide or tirzepatide for enhanced total fat loss.',
      },
    ],
    synergies: ['semaglutide-3mg', 'tirzepatide-15mg', 'cjc-ipa-blend-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'AOD9604 10mg — HGH Fragment 176-191 Fat Loss Protocol Guide | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 30,
    highlights: ['FDA GRAS status', 'Pure lipolysis — no IGF-1', 'Phase III clinical data'],
  },
  {
    slug: '5-amino-1mq-50mg',
    name: '5-Amino-1MQ 50mg',
    tagline: 'NNMT inhibitor — spares NAD+, shrinks fat cells, and activates metabolic gene programs via epigenetic mechanism',
    price: 79.99,
    category: 'fat-loss',
    productType: 'oral',
    tags: ['fat-loss', 'nad-plus', 'nnmt-inhibitor', 'metabolic', 'oral', 'epigenetic'],
    image: img('5-amino-1mq-50mg.png'),
    affiliateUrl: phiogen('5-amino-1mq-50mg'),
    shortDescription: '5-Amino-1MQ is a selective NNMT (Nicotinamide N-methyltransferase) inhibitor that increases intracellular NAD+, reduces adipocyte size, and activates thermogenic gene programs — working through an epigenetic mechanism entirely distinct from GLP-1 or other fat loss compounds.',
    fullDescription: `5-Amino-1MQ operates through one of the most novel mechanisms in metabolic research: inhibition of NNMT (Nicotinamide N-methyltransferase), an enzyme that catabolizes NAD+ precursors by converting nicotinamide to 1-methylnicotinamide. NNMT activity is dramatically upregulated in obese adipose tissue — and this upregulation creates a metabolic vicious cycle: elevated NNMT depletes NAD+ precursors, reducing cellular NAD+ availability, which impairs sirtuin activity (NAD+-dependent longevity enzymes), mitochondrial function, and the gene expression programs that keep adipocytes in a healthy, metabolically active state.

By inhibiting NNMT, 5-Amino-1MQ breaks this cycle. NAD+ precursors are spared, intracellular NAD+ levels rise, sirtuins become more active, and the downstream gene expression changes that follow include: reduced adipogenesis (fat cell formation), increased adipocyte lipolysis, improved mitochondrial biogenesis, and epigenetic shifts in chromatin state that move adipose tissue toward a more metabolically healthy phenotype. Research published by Cornell University and published in journals including Nature Communications demonstrated that NNMT inhibition with compounds in this class produces significant body weight reduction in diet-induced obese mice without food restriction — and reduces adipocyte cell size substantially.

The oral bioavailability and completely different mechanism from GLP-1 compounds makes 5-Amino-1MQ particularly interesting as a stacking partner. GLP-1 agonists reduce food intake and slow gastric emptying; NNMT inhibitors work inside adipocytes to shift their metabolic programming. These mechanisms do not overlap or interfere, allowing genuine additive effects from combination use.

The NAD+ sparing effect also creates overlap with anti-aging protocols — elevated NAD+ activates SIRT1 through SIRT7, the same sirtuins targeted by NMN and NR supplementation but through a different upstream mechanism. For users running Epithalon or NAD+ injectable protocols, NNMT inhibition represents a complementary approach to NAD+ system optimization.`,
    benefits: [
      'Inhibits NNMT enzyme to spare NAD+ — elevates intracellular NAD+ and activates sirtuin-mediated gene programs',
      'Reduces adipocyte size and blocks adipogenesis through epigenetic mechanism independent of caloric restriction',
      'Oral bioavailability — no injection required for metabolic fat loss benefits',
      'Completely different mechanism from GLP-1 agonists — additive rather than redundant when combined',
      'Activates thermogenic and mitochondrial biogenesis gene programs in adipose tissue',
      'NAD+ sparing effect synergizes with Epithalon and injectable NAD+ anti-aging protocols',
    ],
    whoIsFor: 'Users wanting an oral fat loss compound with a unique mechanism; those stacking with GLP-1 compounds for additive effects; users running NAD+ or Epithalon protocols who want NAD+ pathway enhancement.',
    protocols: [
      {
        name: 'Daily Oral Protocol',
        schedule: 'Once daily with or without food',
        dose: '50–100mg oral',
        notes: 'Oral bioavailability makes dosing simple. Research dose range: 50–100mg/day. Can be taken with food. Stack with semaglutide or tirzepatide for additive fat loss via complementary mechanisms. Can also be combined with NAD+ injectable for synergistic NAD+ elevation from two approaches.',
      },
    ],
    synergies: ['semaglutide-3mg', 'tirzepatide-15mg', 'nad-500mg', 'epitalon-50mg'],
    seoTitle: '5-Amino-1MQ 50mg — NNMT Inhibitor NAD+ Sparing Fat Loss Protocol | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 31,
    highlights: ['NNMT inhibition — NAD+ sparing', 'Oral administration', 'Epigenetic fat cell reprogramming'],
  },

  // ─── HEALING: NEW PHIOGEN COMPOUNDS ──────────────────────────────────────
  {
    slug: 'thymosin-alpha-1-5mg',
    name: 'Thymosin Alpha-1 5mg',
    tagline: 'The immune-regulating thymic peptide — approved in 37 countries for hepatitis and immune deficiency treatment',
    price: 69.99,
    category: 'healing',
    productType: 'injectable',
    tags: ['immune', 'healing', 'thymic-peptide', 'anti-viral', 'thymosin', 'advanced'],
    image: img('thymosin-alpha-1-5mg.png'),
    affiliateUrl: phiogen('thymosin-alpha-1-5mg'),
    shortDescription: 'Thymosin Alpha-1 is a 28-amino acid thymic peptide approved as Zadaxin in 37 countries for chronic hepatitis B, hepatitis C, and primary immune deficiency — the most clinically validated immune-modulating peptide available in research form.',
    fullDescription: `Thymosin Alpha-1 occupies an extraordinary position in the peptide landscape: it is a naturally occurring human peptide with full regulatory approval as a pharmaceutical product (Zadaxin, SciClone Pharmaceuticals) in 37 countries across Asia, Europe, and Latin America. This level of regulatory validation — achieved through clinical trial programs spanning decades — represents a depth of safety and efficacy characterization that virtually no other research peptide can match.

The biological origin of thymosin alpha-1 is the thymus — the immune education organ that produces T lymphocytes. Isolated by Dr. Allan Goldstein in the 1970s as a component of thymosin fraction 5, thymosin alpha-1 was identified as the key immunomodulatory component of this thymic extract. The thymus involutes progressively with age, correlating with the age-related decline in T-cell function and adaptive immunity. Thymosin alpha-1 supplementation partially compensates for this decline by providing the signaling peptide that the thymus normally produces.

The mechanism operates across multiple arms of the immune system. Thymosin alpha-1 enhances differentiation and activation of T-helper cells (Th1 polarization), promotes dendritic cell maturation, increases natural killer cell activity, and upregulates major histocompatibility complex expression. In the context of viral infections, these effects translate to more effective recognition and clearance of infected cells. In the context of cancer, enhanced NK and T-cell activity supports immune surveillance. In immunocompromised patients, the restoration of T-cell function can be life-changing.

Clinical trials in hepatitis B and C demonstrated sustained virological response rates that supported regulatory approval. More recent research has explored thymosin alpha-1 in COVID-19, sepsis, and oncology contexts — with preliminary data suggesting benefits in all three. For research users interested in immune optimization, infection recovery acceleration, or general thymic support, thymosin alpha-1 represents the most thoroughly validated option in the immune peptide category.`,
    benefits: [
      'Approved as Zadaxin in 37 countries — the most clinically validated immune-modulating peptide available',
      'Enhances T-helper cell (Th1) differentiation, dendritic cell maturation, and NK cell activity',
      'Clinical evidence for chronic hepatitis B and C — reduced viral load and improved immune response',
      'Thymic signaling peptide compensation — counteracts age-related thymic involution and T-cell decline',
      'Anti-viral and anti-cancer immune surveillance support through multiple immune pathways simultaneously',
      'Emerging evidence in sepsis and post-infection immune recovery acceleration',
    ],
    whoIsFor: 'Users seeking immune system optimization; those recovering from chronic viral infections or illness; individuals with compromised immune function; athletes wanting enhanced immune resilience during high training loads.',
    protocols: [
      {
        name: 'Standard Immune Protocol',
        schedule: 'Twice weekly subcutaneous',
        dose: '1.6mg subcutaneous (clinical Zadaxin dose)',
        notes: 'Reconstitute 5mg + 2ml bac water = 2,500mcg/ml. Draw 0.64ml for 1.6mg dose. Standard clinical protocol: 1.6mg twice weekly for 6–12 months. Shorter research protocols: 1.6mg twice weekly for 4–8 weeks for acute immune support. Refrigerate reconstituted vial; use within 28 days.',
      },
    ],
    synergies: ['bpc157-10mg', 'kpv-5mg', 'll-37-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'Thymosin Alpha-1 5mg — Immune Protocol Guide | Zadaxin Research Peptide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 32,
    highlights: ['Approved in 37 countries as Zadaxin', 'T-cell and NK cell activation', 'Decades of clinical evidence'],
  },
  {
    slug: 'kpv-5mg',
    name: 'KPV 5mg',
    tagline: 'Alpha-MSH derived anti-inflammatory tripeptide — targeted gut healing and systemic inflammation reduction',
    price: 59.99,
    category: 'healing',
    productType: 'injectable',
    tags: ['healing', 'anti-inflammatory', 'gut', 'alpha-msh', 'mc1r', 'beginner-friendly'],
    image: img('kpv-5mg.png'),
    affiliateUrl: phiogen('kpv-5mg'),
    shortDescription: 'KPV (Lys-Pro-Val) is the C-terminal tripeptide of alpha-melanocyte stimulating hormone — retaining its potent anti-inflammatory MC1R activity without the tanning or appetite effects of full α-MSH. Particularly effective for gut inflammation and IBD-related conditions.',
    fullDescription: `KPV is the C-terminal tripeptide of alpha-melanocyte stimulating hormone (α-MSH), specifically the sequence Lysine-Proline-Valine that represents the biologically active anti-inflammatory core of the full 13-amino acid peptide. When researchers isolated which portion of α-MSH was responsible for its powerful anti-inflammatory effects, KPV emerged as the minimal functional unit — a three-amino acid sequence that activates MC1R to suppress NF-κB-driven inflammatory cascades without the melanocyte stimulation, appetite effects, or other systemic actions of full α-MSH.

The selectivity of KPV's anti-inflammatory activity makes it unique among inflammation-targeted peptides. Rather than broadly suppressing cytokine production (as corticosteroids do), KPV works upstream by activating MC1R, which in turn suppresses the NF-κB transcription factor cascade — the central control hub for pro-inflammatory gene expression. The result is reduced production of TNF-α, IL-6, IL-8, and other pro-inflammatory cytokines in inflamed tissue, with less systemic immunosuppression than conventional anti-inflammatory approaches.

For gut applications specifically, KPV demonstrates remarkable potential. Research published in Gastroenterology showed that KPV significantly reduced intestinal inflammation in murine IBD models, with marked reduction in colitis severity, restored intestinal barrier function, and reduced inflammatory cell infiltration. Critically, KPV is stable at low pH — meaning oral administration allows it to reach the intestinal lumen where gut inflammation occurs. This makes KPV one of the few peptides with genuine oral efficacy for gut inflammation, alongside BPC-157.

For systemic inflammation applications, subcutaneous administration achieves broader distribution. KPV can be stacked with BPC-157 for comprehensive gut healing: BPC-157 drives tissue repair, angiogenesis, and the structural restoration of damaged intestinal lining while KPV addresses the inflammatory environment that impedes healing.`,
    benefits: [
      'MC1R-mediated NF-κB suppression — targets the core pro-inflammatory signaling hub without broad immunosuppression',
      'Reduces TNF-α, IL-6, IL-8, and pro-inflammatory cytokines selectively in inflamed tissue',
      'Stable at low pH — effective via oral administration for direct gut lumen targeting',
      'Clinical-grade evidence in IBD models: reduced colitis severity, restored intestinal barrier function',
      'Stacks synergistically with BPC-157 for comprehensive gut healing — inflammation control + tissue repair',
      'No tanning, appetite, or melanocortin side effects — purely anti-inflammatory alpha-MSH activity',
    ],
    whoIsFor: 'Users with IBD, IBS, Crohn\'s disease, or intestinal inflammation; those using BPC-157 for gut healing who want to add anti-inflammatory coverage; individuals with systemic inflammatory conditions.',
    protocols: [
      {
        name: 'Gut Inflammation Protocol (Oral)',
        schedule: 'Twice daily with meals',
        dose: '500mcg–1mg oral (capsule or solution)',
        notes: 'For gut conditions: dissolve 5mg in 5ml sterile water = 1,000mcg/ml. Take 0.5–1ml orally twice daily with food. pH stability allows this to reach inflamed intestinal tissue directly. Combine with BPC-157 oral protocol for synergistic gut healing.',
      },
      {
        name: 'Systemic Inflammation Protocol (SC)',
        schedule: 'Once daily subcutaneous',
        dose: '500mcg–1mg subcutaneous',
        notes: 'For systemic inflammation: reconstitute 5mg + 2.5ml bac water = 2,000mcg/ml. Draw 0.25–0.5ml per dose. Subcutaneous administration achieves broader anti-inflammatory distribution than oral route.',
      },
    ],
    synergies: ['bpc157-10mg', 'bpc-tb-blend-20mg', 'thymosin-alpha-1-5mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'KPV 5mg — Alpha-MSH Anti-Inflammatory Peptide for Gut Healing | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 33,
    highlights: ['NF-κB anti-inflammatory signaling', 'Oral gut delivery at low pH', 'MC1R without melanocortin effects'],
  },

  // ─── ANTI-AGING: NEW PHIOGEN COMPOUNDS ───────────────────────────────────
  {
    slug: 'foxo4-dri-10mg',
    name: 'FOXO4-DRI 10mg',
    tagline: 'The precision senolytic peptide — selectively clears senescent "zombie cells" that drive biological aging',
    price: 149.99,
    category: 'anti-aging',
    productType: 'injectable',
    tags: ['anti-aging', 'senolytic', 'senescence', 'longevity', 'advanced', 'foxo4'],
    image: img('fox04-dri-10mg.png'),
    affiliateUrl: phiogen('fox04-dri-10mg'),
    shortDescription: 'FOXO4-DRI is a D-amino acid retro-inverso peptide published in Cell (de Keizer et al., 2017) that selectively induces apoptosis in senescent cells by disrupting the FOXO4-p53 interaction they use to evade cell death — without affecting healthy cells.',
    fullDescription: `FOXO4-DRI represents a conceptual breakthrough in longevity science: not just slowing aging, but actively removing the accumulating biological damage that drives it. Published in Cell by Peter de Keizer and colleagues at the Erasmus Medical Center in 2017, FOXO4-DRI is a designed peptide that exploits a specific vulnerability in senescent cells — the pro-survival mechanism that allows these "zombie cells" to persist in tissues and continuously secrete pro-inflammatory, tissue-degrading molecules.

The mechanism begins with understanding why senescent cells don't die normally. Cellular senescence is an anti-cancer mechanism: when cells accumulate excessive DNA damage or other oncogenic stress, they permanently arrest cell division to prevent becoming cancerous. This arrest is useful — but the cells don't die. Instead, they persist in a senescent state, secreting a toxic mixture of cytokines, proteases, and growth factors collectively called the Senescence-Associated Secretory Phenotype (SASP). SASP continuously damages surrounding tissue, promotes inflammation, and induces senescence in neighboring cells — creating a self-propagating aging mechanism.

The reason senescent cells survive is that FOXO4 — a transcription factor — translocates to the nucleus and physically sequesters p53, the "guardian of the genome" protein that normally drives damaged cells to apoptosis (programmed death). By holding p53 hostage in the nucleus and directing it away from pro-apoptotic targets, FOXO4 allows senescent cells to resist the death signal they would otherwise receive. FOXO4-DRI is a D-amino acid peptide (protease-resistant due to D-amino acid incorporation) that penetrates cells and disrupts the FOXO4-p53 interaction — releasing p53 to execute its apoptotic program specifically in senescent cells. Healthy cells are not affected because they don't rely on the FOXO4-p53 sequestration for survival.

The Cell publication demonstrated remarkable results in rapidly aging mice: FOXO4-DRI treatment restored fur density, exercise tolerance, and kidney function — physical markers of aging that reversed after senescent cell clearance. This publication catalyzed the senolytic field and established FOXO4-DRI as the mechanistically most specific senolytic available.`,
    benefits: [
      'Selectively induces apoptosis in senescent cells via FOXO4-p53 interaction disruption — published in Cell 2017',
      'D-amino acid structure provides protease resistance — superior stability vs. L-amino acid peptides',
      'Clears SASP-secreting "zombie cells" that drive chronic inflammation and tissue degradation',
      'Does not affect healthy cells — selectivity is built into the mechanism (healthy cells don\'t depend on FOXO4-p53 sequestration)',
      'Demonstrated reversal of aging markers in vivo: restored fur, exercise tolerance, kidney function',
      'Addresses the root driver of inflammaging — accumulated senescent cell burden',
    ],
    whoIsFor: 'Advanced longevity protocol users; those running Epithalon + FOXO4-DRI for comprehensive cellular age reversal; researchers interested in the leading edge of senolytic biology.',
    protocols: [
      {
        name: 'Intermittent Senolytic Course',
        schedule: '3 consecutive days, then 2–4 months off',
        dose: '5mg subcutaneous per day for 3 days (15mg total per course)',
        notes: 'Reconstitute 10mg + 2ml bac water = 5,000mcg/ml. Draw 1ml per 5mg dose. Intermittent "pulse" dosing mimics the protocol used in the Cell publication. Run 2–3 courses per year. Often combined with Epithalon for comprehensive telomere + senolytic longevity protocol. Expect transient fatigue during the 3-day course as senescent cells undergo apoptosis.',
      },
    ],
    synergies: ['epitalon-50mg', 'ghk-cu', 'nad-500mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'FOXO4-DRI 10mg — Senolytic Peptide Protocol Guide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 34,
    highlights: ['Published in Cell 2017', 'Selective senescent cell clearance', 'Reverses aging markers in vivo'],
  },
  {
    slug: 'mots-c-10mg',
    name: 'MOTS-c 10mg',
    tagline: 'Mitochondrial-encoded peptide — exercise mimetic that regulates metabolic homeostasis via AMPK',
    price: 129.99,
    category: 'anti-aging',
    productType: 'injectable',
    tags: ['anti-aging', 'metabolic', 'mitochondrial', 'ampk', 'exercise-mimetic', 'advanced'],
    image: img('mots-c-10mg.png'),
    affiliateUrl: phiogen('mots-c-10mg'),
    shortDescription: 'MOTS-c is a 16-amino acid peptide encoded in mitochondrial DNA — a recently discovered class of mitochondria-derived peptide that regulates metabolic homeostasis, insulin sensitivity, and muscle function via AMPK activation and nuclear gene expression modulation.',
    fullDescription: `MOTS-c represents one of the most significant discoveries in peptide biology of the past decade. Published in Cell Metabolism in 2015 by the Lee laboratory at USC, MOTS-c is a microprotein encoded not in nuclear DNA — where virtually all proteins are encoded — but in mitochondrial DNA itself. Specifically, it is encoded in the 12S ribosomal RNA gene of mitochondrial DNA, a region not previously known to produce functional peptides. This discovery opened a new category of biology: mitochondria-derived peptides (MDPs) that coordinate cellular metabolic responses.

The physiological role of MOTS-c mirrors exercise in remarkable ways. MOTS-c plasma levels increase with physical exercise and decrease with age and metabolic disease. In young, healthy individuals, exercise-induced MOTS-c is now understood to mediate some of the metabolic benefits of exercise — including improved insulin sensitivity, increased glucose uptake in skeletal muscle, and enhanced fatty acid oxidation. In older individuals and those with type 2 diabetes, both resting MOTS-c levels and the exercise-induced MOTS-c response are blunted, contributing to the metabolic deterioration associated with aging.

The mechanism operates primarily through AMPK (AMP-activated protein kinase) — the cellular energy sensor that shifts cells from energy storage to energy burning when activated. MOTS-c activates AMPK through a pathway that involves regulation of the folate cycle and methionine metabolism, which are fundamental to one-carbon metabolism and methylation. The AMPK activation downstream increases glucose uptake independent of insulin (through GLUT4 translocation), promotes mitochondrial biogenesis, enhances fatty acid oxidation, and reduces adipogenesis. In skeletal muscle, MOTS-c also modulates nuclear gene expression programs that support muscle function and resistance to age-related muscle loss.

For anti-aging protocols, MOTS-c addresses the metabolic component of aging that Epithalon (telomeres) and GHK-Cu (gene expression) do not directly target — the progressive decline in mitochondrial metabolic signaling that underlies age-related insulin resistance, reduced exercise capacity, and metabolic syndrome.`,
    benefits: [
      'Mitochondria-encoded peptide — discovered 2015 in Cell Metabolism; activates AMPK-mediated metabolic programs',
      'Exercise-mimetic: increases glucose uptake, fatty acid oxidation, and mitochondrial biogenesis like exercise',
      'Improves insulin sensitivity via AMPK-driven GLUT4 translocation independent of insulin signaling',
      'Circulates as an exercise signal — levels rise with physical activity and decline with age and metabolic disease',
      'Reduces age-related muscle metabolic decline through nuclear gene expression modulation',
      'Synergizes with NAD+ protocols: both target mitochondrial function through complementary mechanisms',
    ],
    whoIsFor: 'Advanced anti-aging protocol users; individuals with metabolic syndrome, insulin resistance, or age-related muscle metabolic decline; those seeking exercise mimetic effects; users building comprehensive longevity stacks.',
    protocols: [
      {
        name: 'Metabolic Optimization Protocol',
        schedule: '3–5× weekly subcutaneous',
        dose: '5–10mg subcutaneous per dose',
        notes: 'Reconstitute 10mg + 1ml bac water = 10,000mcg/ml. Draw 0.5–1ml per 5–10mg dose. Administer on training days or in conjunction with exercise for synergistic metabolic effects. Can be run in 8–12 week courses or continuously. Combine with NAD+ for complementary mitochondrial pathway coverage.',
      },
    ],
    synergies: ['nad-500mg', 'epitalon-50mg', 'ghk-cu', 'ss-31-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'MOTS-c 10mg — Mitochondrial Peptide Exercise Mimetic Protocol | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 35,
    highlights: ['Mitochondria-encoded peptide', 'Exercise mimetic via AMPK', 'Discovered 2015 — Cell Metabolism'],
  },
  {
    slug: 'ss-31-10mg',
    name: 'SS-31 10mg (Elamipretide)',
    tagline: 'Mitochondria-targeted antioxidant — Phase III clinical compound that binds cardiolipin to prevent mitochondrial oxidative damage',
    price: 99.99,
    category: 'anti-aging',
    productType: 'injectable',
    tags: ['anti-aging', 'mitochondrial', 'antioxidant', 'cardiolipin', 'clinical-stage', 'advanced'],
    image: img('ss-31-10mg.png'),
    affiliateUrl: phiogen('ss-31-10mg'),
    shortDescription: 'SS-31 (elamipretide) is a mitochondria-targeted tetrapeptide that concentrates in the inner mitochondrial membrane, binds cardiolipin to stabilize the electron transport chain, and reduces mitochondrial ROS — with Phase II/III clinical trial data in heart failure and Barth syndrome.',
    fullDescription: `SS-31 — known pharmaceutically as elamipretide and commercially as Bendavia — is arguably the most clinically advanced mitochondria-targeted compound in the research peptide space. Developed by Hazel Szeto and Shey-Shing Sheu, SS-31 is a tetrapeptide (D-Arg-dimethylTyr-Lys-Phe-NH2) with an alternating aromatic-cationic structure that allows it to selectively accumulate in the inner mitochondrial membrane (IMM) — concentrating where mitochondrial dysfunction is initiated and amplified.

The primary target of SS-31 is cardiolipin — a uniquely mitochondrial phospholipid found almost exclusively in the inner mitochondrial membrane, where it plays a structural and functional role in organizing the electron transport chain (ETC) complexes and supporting ATP synthase activity. As mitochondria age or become dysfunctional, cardiolipin undergoes peroxidation by reactive oxygen species — structural damage that disrupts ETC complex assembly, reduces electron flow efficiency, increases ROS production, and impairs ATP generation. This creates the mitochondrial "ROS spiral" that underlies age-related mitochondrial dysfunction.

By binding cardiolipin, SS-31 stabilizes it against peroxidation and maintains proper cristae structure. The downstream effects are profound: restored ETC complex organization, reduced electron leak (the primary source of mitochondrial ROS), improved ATP production efficiency, and reduction in further cardiolipin oxidative damage. These effects have been demonstrated in multiple model systems including aged hearts, ischemia-reperfusion injury, and genetic mitochondrial disease.

Phase II clinical trials in heart failure showed SS-31 (elamipretide) significantly improved exercise tolerance and cardiac function. Phase III trials in Barth syndrome — a rare genetic cardiomyopathy caused by cardiolipin metabolism defects — have been conducted. For anti-aging research contexts, SS-31's ability to restore mitochondrial function in aged cells without side effects makes it one of the most mechanistically credible longevity compounds available.`,
    benefits: [
      'Selectively concentrates in inner mitochondrial membrane — targets the precise site of mitochondrial dysfunction',
      'Binds and stabilizes cardiolipin against oxidative peroxidation — preserves ETC complex organization',
      'Reduces mitochondrial ROS production at the source — breaks the ROS spiral of mitochondrial aging',
      'Phase II data in heart failure (improved exercise tolerance); Phase III in Barth syndrome',
      'Restores ATP production efficiency in aged and dysfunctional mitochondria',
      'Synergizes with NAD+ and MOTS-c for comprehensive mitochondrial optimization from three distinct mechanisms',
    ],
    whoIsFor: 'Advanced anti-aging protocol users focused on mitochondrial health; those experiencing age-related energy decline, exercise intolerance, or cardiovascular function reduction; users running comprehensive longevity stacks.',
    protocols: [
      {
        name: 'Mitochondrial Optimization Protocol',
        schedule: 'Daily or every other day subcutaneous',
        dose: '5–10mg subcutaneous per dose',
        notes: 'Reconstitute 10mg + 1ml bac water = 10,000mcg/ml. Draw 0.5–1ml per 5–10mg dose. Can be run in 4–8 week courses or continuously. Combine with NAD+ and MOTS-c for three-pathway mitochondrial approach. Refrigerate reconstituted vial; use within 28 days.',
      },
    ],
    synergies: ['nad-500mg', 'mots-c-10mg', 'epitalon-50mg', 'ghk-cu', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'SS-31 (Elamipretide) 10mg — Mitochondrial Antioxidant Cardiolipin Peptide | MaxxingPeptides',
    researchRating: 5,
    popularityRank: 36,
    highlights: ['Phase III clinical compound', 'Cardiolipin-targeted inner membrane', 'Breaks mitochondrial ROS spiral'],
  },
  {
    slug: 'glutathione-600mg',
    name: 'Glutathione 600mg',
    tagline: 'Master antioxidant — subcutaneous delivery for systemic GSH levels that oral supplementation cannot achieve',
    price: 89.99,
    category: 'anti-aging',
    productType: 'injectable',
    tags: ['anti-aging', 'antioxidant', 'glutathione', 'skin-brightening', 'detox', 'immune'],
    image: img('glutathione-600mg.png'),
    affiliateUrl: phiogen('glutathione-600mg'),
    shortDescription: 'Glutathione is the body\'s master antioxidant — a tripeptide (Glu-Cys-Gly) that oral supplements cannot deliver systemically due to poor absorption. Subcutaneous injection achieves the cellular concentrations required for real antioxidant protection, skin brightening, heavy metal chelation, and immune support.',
    fullDescription: `Glutathione occupies a singular position in human biochemistry: it is simultaneously the most abundant intracellular antioxidant, the primary phase II detoxification agent, the regulator of redox-sensitive signaling pathways, and the cofactor for glutathione peroxidase — the enzyme that neutralizes hydrogen peroxide and lipid peroxides before they cause oxidative damage to proteins, lipids, and DNA. No other single molecule performs this breadth of antioxidant and detoxification function in human cells.

The fundamental problem with oral glutathione supplementation is delivery. Glutathione is a tripeptide, and peptides are hydrolyzed by digestive proteases into their component amino acids before reaching systemic circulation. Oral glutathione supplements provide the amino acid precursors (cysteine, glutamate, glycine) rather than intact glutathione itself — allowing cells to synthesize more glutathione endogenously, but with substantial variability based on individual enzyme activity, precursor availability, and cellular redox status. Subcutaneous injectable glutathione bypasses this limitation entirely, delivering intact glutathione directly to systemic circulation.

The cosmetic application most commonly associated with high-dose glutathione is skin brightening. Glutathione inhibits tyrosinase — the rate-limiting enzyme in melanin synthesis — and also shifts melanin synthesis from eumelanin (dark) toward pheomelanin (lighter) through glutathione-cysteine conjugation of dopaquinone. Clinical studies have documented significant skin tone lightening with sustained IV or IM glutathione administration. The effect is dose-dependent and reversible upon cessation, allowing users to modulate the degree of effect.

Beyond aesthetics, systemic glutathione elevation provides measurable benefits for immune function (GSH-depleted T-cells show reduced proliferative capacity), heavy metal chelation (glutathione conjugates mercury, lead, and arsenic for elimination), mitochondrial protection (mitochondrial GSH is a separate pool critical for organelle antioxidant defense), and recovery from oxidative stress events including intensive exercise, illness, and toxic exposures.`,
    benefits: [
      'Subcutaneous delivery achieves systemic GSH levels that oral supplementation fundamentally cannot — bypasses GI degradation',
      'Inhibits tyrosinase and shifts melanogenesis toward pheomelanin — skin brightening effect documented clinically',
      'Phase II detoxification: conjugates heavy metals (mercury, lead, arsenic) for renal elimination',
      'Restores mitochondrial GSH pool — the separate glutathione compartment essential for organelle antioxidant defense',
      'Enhances T-cell proliferative capacity — immune function is directly dependent on intracellular glutathione status',
      'Neutralizes hydrogen peroxide and lipid peroxides via glutathione peroxidase — prevents oxidative protein and DNA damage',
    ],
    whoIsFor: 'Users seeking skin brightening effects; those with oxidative stress from illness, overtraining, or toxic exposures; anti-aging protocol users wanting master antioxidant elevation; individuals supporting detoxification pathways.',
    protocols: [
      {
        name: 'Systemic Glutathione Protocol',
        schedule: '2–3× weekly subcutaneous',
        dose: '200–600mg subcutaneous per dose',
        notes: 'Reconstitute 600mg + 2ml bac water = 300mg/ml. Draw 0.67–2ml per 200–600mg dose. Start at 200mg and assess tolerance. Administer via slow subcutaneous injection. For skin brightening, higher doses (600mg) and more frequent dosing (3× weekly) are used in cosmetic protocols. For general antioxidant support, 200mg 2× weekly.',
      },
    ],
    synergies: ['nad-500mg', 'ghk-cu', 'methylene-blue-50ml', 'snap-8-10mg'],
    seoTitle: 'Glutathione 600mg Injectable — Systemic Antioxidant & Skin Brightening Protocol | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 37,
    highlights: ['Systemic delivery oral can\'t match', 'Tyrosinase inhibition — skin brightening', 'Master antioxidant + heavy metal chelation'],
  },
  {
    slug: 'methylene-blue-50ml',
    name: 'Methylene Blue 10mg/mL 50mL',
    tagline: 'Mitochondrial electron carrier — the oldest synthetic drug in medicine repurposed for cognitive enhancement and mitochondrial optimization',
    price: 59.99,
    category: 'anti-aging',
    productType: 'injectable',
    tags: ['anti-aging', 'cognitive', 'mitochondrial', 'electron-carrier', 'nootropic', 'beginner-friendly'],
    image: img('methylene-blue-10mg-ml-50ml.png'),
    affiliateUrl: phiogen('methylene-blue-10mg-ml-50ml'),
    shortDescription: 'Methylene blue is a mitochondrial electron carrier that can bypass damaged segments of the electron transport chain, reduce mitochondrial ROS, enhance ATP production, and provide cognitive enhancement — the first synthetic drug ever produced, with a 130-year safety record.',
    fullDescription: `Methylene blue holds a remarkable historical distinction: it is the first synthetic drug ever produced, synthesized in 1876 by Heinrich Caro and introduced into medicine within a decade. After more than 130 years of clinical use in antimalarial treatment, methemoglobinemia, and psychiatric disorders, methylene blue is experiencing a scientific renaissance as researchers explore its mitochondrial and cognitive mechanisms with modern tools.

The mitochondrial effect is the most mechanistically significant. Methylene blue is a redox-active compound that can accept electrons from NADH and FADH2 (electron donors in the mitochondrial electron transport chain) and donate them directly to cytochrome c — effectively acting as an alternative electron carrier that bypasses Complexes I, II, and III. In aged mitochondria where these complexes are damaged and inefficient, methylene blue provides a shortcut path for electrons that restores electron flow, increases ATP production, and critically — reduces electron leak. Electron leak from damaged ETC complexes is the primary source of mitochondrial reactive oxygen species; methylene blue's alternative electron shuttle dramatically reduces this ROS production.

The cognitive enhancement properties have been documented in multiple human studies. Methylene blue at low doses (0.5–4 mg/kg) enhances memory consolidation, improves working memory performance, and accelerates processing speed in controlled trials. The mechanism involves enhanced mitochondrial function in neurons (which are particularly dependent on oxidative phosphorylation), increased cytochrome c oxidase activity, and potentially direct effects on monoamine oxidase. The cognitive effects show a characteristic inverted U-dose response — too high a dose produces the opposite of the intended effect.

For anti-aging and longevity stacks, methylene blue's mitochondrial mechanism complements SS-31 (cardiolipin stabilization), MOTS-c (AMPK activation), and NAD+ (sirtuin activation) without mechanistic overlap — each compound targets different aspects of mitochondrial and cellular aging.`,
    benefits: [
      'Alternative mitochondrial electron carrier — bypasses damaged ETC complexes to restore ATP production',
      'Dramatically reduces mitochondrial ROS by eliminating electron leak at damaged Complex I, II, III sites',
      'Documented cognitive enhancement in human trials: improved memory consolidation and working memory at low doses',
      'Increases cytochrome c oxidase activity — enhances the final and rate-limiting step of oxidative phosphorylation',
      '130-year clinical safety record — the most established synthetic drug in the research peptide context',
      'Unique mechanism with no overlap to NAD+, SS-31, or MOTS-c — genuinely additive in mitochondrial stacks',
    ],
    whoIsFor: 'Users building comprehensive mitochondrial optimization stacks; those experiencing cognitive decline, brain fog, or reduced mental performance; anti-aging protocol users wanting the broadest mitochondrial coverage possible.',
    protocols: [
      {
        name: 'Low-Dose Cognitive Protocol',
        schedule: 'Daily oral (diluted solution) or subcutaneous',
        dose: '0.5–2mg/kg body weight (35–140mg for 70kg individual)',
        notes: '10mg/mL solution: measure target dose in mL. For 70mg dose: 7mL. Can take orally (diluted in water) or subcutaneously. Start at lowest dose — inverted U response means excessive dose reduces effect. Note: methylene blue turns urine blue — normal. Avoid with MAOIs, SSRIs (serotonin syndrome risk at high doses). Low doses (0.5–2mg/kg) are well-tolerated.',
      },
    ],
    synergies: ['nad-500mg', 'ss-31-10mg', 'mots-c-10mg', 'n-acetyl-semax-30mg'],
    seoTitle: 'Methylene Blue 10mg/mL — Mitochondrial Electron Carrier Cognitive Enhancement Protocol | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 38,
    highlights: ['First synthetic drug in medicine', 'Bypasses damaged ETC complexes', 'Human-documented cognitive enhancement'],
  },

  // ─── COGNITIVE PEPTIDES ───────────────────────────────────────────────────
  {
    slug: 'n-acetyl-semax-30mg',
    name: 'N-Acetyl Semax Amidate 30mg',
    tagline: 'ACTH-derived nootropic peptide — BDNF upregulation, neuroplasticity, and focus without stimulant mechanism',
    price: 149.99,
    category: 'cognitive',
    productType: 'injectable',
    tags: ['cognitive', 'nootropic', 'bdnf', 'neuroplasticity', 'focus', 'advanced'],
    image: img('n-acetyl-semax-amidate-30mg.png'),
    affiliateUrl: phiogen('n-acetyl-semax-amidate-30mg'),
    shortDescription: 'N-Acetyl Semax Amidate is the most potent form of semax — an ACTH(4-7)PGP analogue developed in Russia with decades of clinical use for stroke recovery, cognitive impairment, and focus enhancement. N-acetylation and amidation extend its half-life and significantly increase receptor potency.',
    fullDescription: `Semax originated in the Soviet and Russian pharmaceutical research tradition as a derivative of the ACTH(4-10) fragment — the portion of adrenocorticotropic hormone responsible for its cognitive effects without its adrenal stimulating activity. The modern N-Acetyl Semax Amidate represents the optimized pharmaceutical form: acetylation at the N-terminus and amidation at the C-terminus both protect the peptide from enzymatic degradation, dramatically extending its half-life relative to unmodified semax and increasing its apparent potency.

The primary mechanism that drives semax's cognitive effects is BDNF (brain-derived neurotrophic factor) upregulation. BDNF is the most important growth factor for neuronal survival, synaptic plasticity, and the formation of new neural connections. Low BDNF correlates with depression, cognitive decline, and neurodegeneration; elevated BDNF underlies the cognitive benefits of exercise, learning, and antidepressant treatments. Semax produces a rapid, sustained BDNF increase in the prefrontal cortex and hippocampus — the brain regions most critical for working memory, attention, and executive function.

Beyond BDNF, semax modulates the dopaminergic, serotonergic, and melanocortin systems — contributing to its mood-enhancing properties alongside its cognitive effects. Clinical trials in Russia documented significant improvements in attention, working memory, and cognitive speed in patients with cerebrovascular disease, stroke-related cognitive impairment, and healthy subjects undergoing demanding cognitive tasks. The compound entered the Russian medicine cabinet as a licensed drug (Semax 1% nasal solution) for stroke, brain trauma, and cognitive impairment.

For research users, the intranasal route (most common clinical delivery) makes administration convenient, but subcutaneous injection of the N-Acetyl Amidate form provides more reliable absorption. The cognitive enhancement profile — sharper focus, improved working memory, faster processing, and enhanced motivation — without stimulant mechanisms or cardiovascular effects makes semax uniquely valuable for knowledge work, high-demand cognitive periods, and long-term neuroprotection.`,
    benefits: [
      'Upregulates BDNF in prefrontal cortex and hippocampus — the primary growth factor for synaptic plasticity and memory',
      'N-acetylation + amidation: significantly enhanced metabolic stability and receptor potency vs. unmodified semax',
      'Licensed pharmaceutical in Russia for stroke, brain trauma, and cognitive impairment — decades of clinical use',
      'Modulates dopamine and serotonin systems: focus and mood enhancement without stimulant mechanism',
      'Neuroprotective: reduces glutamate excitotoxicity, supports neuronal survival under ischemic conditions',
      'No stimulant cardiovascular effects — cognitive enhancement through neurotrophin pathway, not catecholamine flooding',
    ],
    whoIsFor: 'Knowledge workers and high-cognitive-demand users wanting non-stimulant focus enhancement; users interested in BDNF-mediated neuroplasticity; those seeking neuroprotection alongside cognitive enhancement.',
    protocols: [
      {
        name: 'Cognitive Enhancement Protocol',
        schedule: 'Daily or as needed (subcutaneous or intranasal)',
        dose: '100–300mcg subcutaneous OR 1–2 drops (100mcg/drop) intranasal per nostril',
        notes: 'Reconstitute 30mg + 3ml bac water = 10,000mcg/ml. Draw 0.01–0.03ml per 100–300mcg SC dose. Alternatively: dilute to 1,000mcg/ml for intranasal — 1 drop per nostril = 100mcg total. Effects onset 15–30 min; duration 6–8 hours. Run 5 days on, 2 days off to prevent receptor habituation.',
      },
    ],
    synergies: ['na-selank-10mg', 'dsip-5mg', 'methylene-blue-50ml', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'N-Acetyl Semax Amidate 30mg — BDNF Nootropic Cognitive Enhancement Protocol | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 39,
    highlights: ['BDNF upregulation', 'Russian licensed pharmaceutical', 'Non-stimulant cognitive enhancement'],
  },
  {
    slug: 'na-selank-10mg',
    name: 'NA-Selank Amidate 10mg',
    tagline: 'Anxiolytic peptide — reduces anxiety and enhances cognition via GABA modulation without sedation or dependence',
    price: 79.99,
    category: 'cognitive',
    productType: 'injectable',
    tags: ['cognitive', 'anxiolytic', 'gaba', 'anti-anxiety', 'nootropic', 'beginner-friendly'],
    image: img('na-selank-amidate-10mg.png'),
    affiliateUrl: phiogen('na-selank-amidate-10mg'),
    shortDescription: 'NA-Selank Amidate is the stabilized form of selank — a tuftsin-derived anxiolytic peptide that reduces anxiety through GABA-A modulation and enkephalin protection without the sedation, dependence, or cognitive impairment associated with benzodiazepines.',
    fullDescription: `Selank is a synthetic analogue of the endogenous immunopeptide tuftsin (Thr-Lys-Pro-Arg), extended with Pro-Gly-Pro to improve stability. The N-Acetyl Amidate form provides further protection against enzymatic degradation, extending half-life and increasing available dose at target receptors. Originally developed at the Institute of Molecular Genetics of the Russian Academy of Sciences, selank was approved in Russia as an anxiolytic and nootropic for anxiety disorders and cognitive impairment.

The pharmacological profile of selank is what makes it scientifically interesting: it is anxiolytic — genuinely reducing anxiety — without the sedation, cognitive dulling, respiratory depression, or dependence potential of benzodiazepines. The mechanism differs fundamentally from benzodiazepines. While benzodiazepines bind directly to GABA-A receptors as positive allosteric modulators (enhancing chloride ion flux to produce sedation and anxiolysis together), selank appears to influence GABAergic tone through a more indirect pathway — potentially involving endogenous GABA metabolism, enkephalin degradation inhibition, and modulation of monoamine systems.

The enkephalin component is particularly notable. Selank inhibits the enzymes (enkephalinases) that break down enkephalins — endogenous opioid peptides that modulate pain, stress response, and mood through mu and delta opioid receptors in the limbic system. By allowing enkephalins to persist longer, selank provides endogenous anxiolytic and mood-enhancing effects through the body's own stress-reduction peptide system. This mechanism produces anxiolysis without the opioid receptor agonism of exogenous opioids.

Clinical trials in Russia documented significant reduction in anxiety scores on standardized measures without the cognitive impairment characteristic of benzodiazepine anxiolytics. Memory consolidation actually improved in some participants — an opposite effect from benzodiazepines, which reliably impair memory formation. The cognitive enhancement alongside anxiolysis makes selank particularly valuable for high-performance contexts where reducing performance anxiety is desired without compromising cognitive function.`,
    benefits: [
      'Anxiolytic without sedation, cognitive impairment, or dependence — fundamentally different mechanism from benzodiazepines',
      'Inhibits enkephalinase enzymes — extends endogenous enkephalin signaling for natural stress response modulation',
      'Russian licensed pharmaceutical for anxiety and cognitive impairment — clinical trial validated',
      'Memory consolidation improvement documented — opposite of the amnestic effect of benzodiazepines',
      'N-Acetyl Amidate modification: superior metabolic stability and potency vs. unmodified selank',
      'Pairs synergistically with semax — anxiety reduction + cognitive enhancement from complementary mechanisms',
    ],
    whoIsFor: 'Users experiencing performance anxiety, generalized anxiety, or stress-related cognitive impairment; those seeking anxiolysis during high-demand cognitive periods; users who have experienced sedation from pharmaceutical anxiolytics.',
    protocols: [
      {
        name: 'Daily Anxiolytic Protocol',
        schedule: 'Once to twice daily subcutaneous or intranasal',
        dose: '200–500mcg subcutaneous or intranasal',
        notes: 'Reconstitute 10mg + 2ml bac water = 5,000mcg/ml. Draw 0.04–0.1ml per 200–500mcg dose. Intranasal: dilute to 250mcg/drop for gentle dosing. Effects onset 20–40 min; duration 4–6 hours. Often stacked with semax for combined anxiolytic + cognitive enhancement. Can be used continuously or as-needed.',
      },
    ],
    synergies: ['n-acetyl-semax-30mg', 'dsip-5mg', 'pe-22-28-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'NA-Selank Amidate 10mg — Anxiolytic Nootropic Peptide Without Sedation | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 40,
    highlights: ['Anxiolysis without sedation or dependence', 'Enkephalin half-life extension', 'Memory enhancement alongside anxiety reduction'],
  },
  {
    slug: 'dsip-5mg',
    name: 'DSIP 5mg',
    tagline: 'Delta Sleep Inducing Peptide — promotes natural slow-wave sleep architecture and nocturnal GH release',
    price: 49.99,
    category: 'cognitive',
    productType: 'injectable',
    tags: ['cognitive', 'sleep', 'growth-hormone', 'neuropeptide', 'beginner-friendly'],
    image: img('dsip-delta-sleep-inducing-peptide-5mg.png'),
    affiliateUrl: phiogen('dsip-delta-sleep-inducing-peptide-5mg'),
    shortDescription: 'DSIP (Delta Sleep Inducing Peptide) is a 9-amino acid neuropeptide that promotes slow-wave (delta) sleep without next-day sedation — while also triggering the nocturnal GH release associated with natural sleep, providing sleep optimization and GH secretagogue effects simultaneously.',
    fullDescription: `Delta Sleep Inducing Peptide was isolated from rabbit cerebral venous blood by Monnier and colleagues in 1977 during experiments in which slow-wave electrical stimulation of the thalamus produced deep sleep in donor animals. When the blood from sleeping rabbits was transferred to awake recipients, the recipients entered deep slow-wave sleep — identifying a circulating factor responsible for this delta sleep induction. That factor, isolated and characterized, became DSIP.

The sleep quality improvement produced by DSIP is qualitatively different from pharmaceutical sleep aids. Most sleep medications (benzodiazepines, Z-drugs, antihistamines) work by sedation — forcing sleep through GABAergic or histaminergic inhibition, which produces sleep but often suppresses deep slow-wave sleep architecture. DSIP specifically promotes delta (slow-wave) sleep — the deepest, most restorative sleep stage, characterized by large amplitude, low frequency EEG waves and the deepest physical restoration. This is the sleep stage during which growth hormone is primarily secreted, memory consolidation occurs, and metabolic restoration takes place.

The growth hormone connection makes DSIP particularly interesting for performance and recovery protocols. Approximately 70% of daily GH secretion occurs during slow-wave sleep — meaning that sleep quality (specifically delta sleep quality) is a primary determinant of natural GH production. By enhancing slow-wave sleep architecture, DSIP indirectly amplifies the nocturnal GH pulse that every GH secretagogue protocol is designed to work with. This synergy with CJC-1295/Ipamorelin and other GH peptides makes DSIP a valuable addition to GH optimization protocols.

DSIP also demonstrates stress-axis modulation — reducing basal cortisol levels and ACTH sensitivity in research settings. The combination of promoted deep sleep, enhanced GH release, and reduced cortisol creates a profoundly recovery-supportive hormonal environment that is difficult to achieve through other means.`,
    benefits: [
      'Specifically promotes delta (slow-wave) sleep — the most restorative stage — without next-day sedation',
      'Enhances nocturnal GH release by improving the slow-wave sleep stage during which 70% of daily GH is secreted',
      'No GABA-A depression or sedation — works through neuropeptide pathways that improve sleep quality rather than forcing sedation',
      'Reduces basal cortisol and ACTH sensitivity — creates favorable hormonal environment for recovery and anabolism',
      'Synergizes with CJC-1295/Ipamorelin: deep sleep improvement amplifies nocturnal GH pulse from GH secretagogues',
      'No dependence or tolerance — can be used nightly or as needed without habituation',
    ],
    whoIsFor: 'Users with poor sleep quality, shallow sleep, or frequent night waking; those running GH secretagogue protocols who want to maximize nocturnal GH release through sleep optimization; anyone seeking recovery improvement through sleep architecture restoration.',
    protocols: [
      {
        name: 'Nightly Sleep Protocol',
        schedule: 'Once nightly, 30–60 min before sleep',
        dose: '100–500mcg subcutaneous',
        notes: 'Reconstitute 5mg + 2.5ml bac water = 2,000mcg/ml. Draw 0.05–0.25ml per 100–500mcg dose. Administer 30–60 min before intended sleep time. Start at 100mcg to assess sleep response — some users experience very deep sleep at low doses. Combine with CJC-1295/Ipamorelin nightly dose for synergistic GH + sleep protocol.',
      },
    ],
    synergies: ['cjc-ipa-blend-10mg', 'n-acetyl-semax-30mg', 'na-selank-10mg', 'bacteriostatic-water-reconstitution-solution-10ml'],
    seoTitle: 'DSIP 5mg — Delta Sleep Inducing Peptide for Deep Sleep & GH Release | MaxxingPeptides',
    researchRating: 4,
    popularityRank: 41,
    highlights: ['Promotes delta/slow-wave sleep', 'Amplifies nocturnal GH release', 'No sedation, no dependence'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(p => p.category === category || p.tags.includes(category));
}

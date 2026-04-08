// Maps old Phiogen slugs → internal /go/[slug] routes (which redirect to Apollo with affiliate code)
const GO: Record<string, string> = {
  'bpc-157-10mg': 'bpc157-10mg',
  'tb-500-thymosin-beta-4-10mg': 'tb500-10mg',
  'semaglutide-3mg': 'glp-1s-5mg',
  'semaglutide-6mg': 'glp-1s-10mg',
  'semaglutide-12mg': 'glp-1s-15mg',
  'tirzepatide-15mg': 'glp-2t-15mg',
  'tirzepatide-30mg': 'glp-2t-30mg',
  'tirzepatide-60mg': 'glp-2t-60mg',
  'retatrutide-10mg': 'glp-3r-10mg',
  'retatrutide-15mg': 'glp-3r-15mg',
  'retatrutide-30mg': 'glp-3r-30mg',
  'cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg': 'glp-1cglp-1s-5mg',
  'ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg': 'cjc1295-ipamorelin',
  'igf-1-lr3-1mg': 'igf-1lr3',
  'ghk-cu-50mg': 'ghk-cu',
  'epitalon-50mg': 'epithalon-50mg',
  'nad-500mg': 'nad',
  'snap-8-10mg': 'snap-8',
  'bacteriostatic-water-30ml': 'bacteriostatic-water-reconstitution-solution-10ml',
};

// Maps old Phiogen image filenames → local /public/images/ webp files
const IMGS: Record<string, string> = {
  'bpc-157-10mg.png': 'bpc157.webp',
  'tb-500-thymosin-beta-4-10mg.png': 'tb500.webp',
  'semaglutide-3mg.png': 'glp1s_5mg.webp',
  'semaglutide-6mg.png': 'glp1s_10mg.webp',
  'semaglutide-12mg.png': 'glp1s_15mg.webp',
  'tirzepatide-15mg.png': 'tirzepatide_15mg.webp',
  'tirzepatide-30mg.png': 'glp2t_30mg.webp',
  'tirzepatide-60mg.png': 'glp2t_60mg.webp',
  'retatrutide-10mg.png': 'glp3r_10mg.webp',
  'retatrutide-15mg.png': 'glp3r_15mg.webp',
  'retatrutide-30mg.png': 'glp3r_30mg.webp',
  'cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg.png': 'glp1c_glp1s_bundle.webp',
  'ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg.png': 'cjc1295_ipamorelin.webp',
  'igf-1-lr3-1mg.png': 'igf1lr3.webp',
  'ghk-cu-50mg.png': 'ghkcu.webp',
  'epitalon-50mg.png': 'epithalon.webp',
  'nad-500mg.png': 'nad.webp',
  'snap-8-10mg.png': 'snap8.webp',
  'bacteriostatic-water-30ml.png': 'bacteriostaticwater.webp',
};

function phiogen(slug: string): string {
  const goSlug = GO[slug];
  return goSlug ? `/go/${goSlug}` : '/go/shop';
}

function img(file: string): string {
  return `/images/${IMGS[file] ?? 'bpc157.webp'}`;
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
    name: 'GLP-1 S 5mg',
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
    name: 'GLP-1 S 10mg',
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
    name: 'GLP-1 S 15mg',
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
    name: 'GLP-2 T 15mg',
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
    name: 'GLP-2 T 30mg',
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
    name: 'GLP-2 T 60mg',
    tagline: 'Maximum supply tirzepatide — for long-term dual-agonist protocols and best-in-class value',
    price: 489.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'glp-1', 'gip', 'bulk-supply', 'long-term'],
    image: img('tirzepatide-60mg.png'),
    affiliateUrl: phiogen('tirzepatide-60mg'),
    shortDescription: 'The 60mg tirzepatide vial is the highest-supply option — providing 6–12 weeks at maintenance doses and the lowest cost-per-mg for long-term dual-agonist protocols.',
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
    name: 'GLP-3 R 10mg',
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
    name: 'GLP-3 R 15mg',
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
    name: 'GLP-3 R 30mg',
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
    name: 'GLP-1 C + GLP-1 S',
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
    name: 'GLP-3 R 60mg',
    tagline: 'Maximum retatrutide supply — for aggressive long-term triple-agonist fat loss at the highest dose',
    price: 589.99,
    category: 'fat-loss',
    productType: 'injectable',
    tags: ['fat-loss', 'triple-agonist', 'bulk-supply', 'advanced', 'maximum-dose'],
    image: '/images/glp3r_60mg.webp',
    affiliateUrl: '/go/glp-3r-60mg',
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
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(p => p.category === category || p.tags.includes(category));
}

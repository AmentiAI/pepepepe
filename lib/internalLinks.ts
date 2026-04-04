/**
 * Static internal link map — hardcoded per page, never changes on reload.
 * Each entry: 3-4 links with keyword-rich anchor text for SEO interlinking.
 */

export type InternalLink = {
  href: string;
  label: string;
  desc: string;
};

export const internalLinks: Record<string, InternalLink[]> = {

  // ─── PRODUCT PAGES ─────────────────────────────────────────────────────────

  'bpc157-10mg': [
    { href: '/products/tb500-10mg',         label: 'TB-500 10mg',                 desc: 'Pair with BPC-157 for full systemic + local repair coverage.' },
    { href: '/stacks/healing-recovery-stack', label: 'Healing & Recovery Stack',  desc: 'The complete 3-peptide tissue repair protocol.' },
    { href: '/healing',                      label: 'Healing Peptide Guide',       desc: 'All three repair phases explained with dosing timelines.' },
    { href: '/products/ghk-cu',              label: 'GHK-CU Copper Peptide',       desc: 'Add collagen remodeling and gene-level repair to your protocol.' },
  ],

  'tb500-10mg': [
    { href: '/products/bpc157-10mg',          label: 'BPC-157 10mg',               desc: 'The gold standard healing combo — local + systemic repair.' },
    { href: '/stacks/healing-recovery-stack', label: 'Healing & Recovery Stack',   desc: 'Run both peptides together in one structured protocol.' },
    { href: '/stacks/elite-performance-stack', label: 'Elite Performance Stack',   desc: 'Add TB-500 to your GH protocol for injury-proof training.' },
    { href: '/healing',                        label: 'Healing Peptide Guide',      desc: 'The three phases of tissue repair and where TB-500 fits.' },
  ],

  'ghk-cu': [
    { href: '/anti-aging',                     label: 'Anti-Aging Peptide Guide',   desc: 'How GHK-CU targets epigenetic drift and gene expression aging.' },
    { href: '/stacks/longevity-anti-aging-stack', label: 'Longevity Stack',        desc: 'GHK-CU paired with Epithalon and NAD+ for full longevity coverage.' },
    { href: '/products/bpc157-10mg',           label: 'BPC-157 10mg',              desc: 'Combine for the complete wound healing and tissue repair protocol.' },
    { href: '/products/snap-8',                label: 'SNAP-8 Topical Peptide',    desc: 'Stack GHK-CU with SNAP-8 for the complete anti-aging skin protocol.' },
  ],

  'glp-1s-5mg': [
    { href: '/fat-loss',                         label: 'Fat Loss Peptide Guide',    desc: 'Compare all four GLP-1 class compounds before choosing.' },
    { href: '/stacks/beginner-fat-loss-protocol', label: 'Beginner Fat Loss Protocol', desc: 'The starter stack built around Semaglutide 5mg with full titration guide.' },
    { href: '/products/glp-2t-15mg',             label: 'Tirzepatide 15mg',          desc: 'The next step when you\'re ready for dual-agonist fat loss.' },
    { href: '/products/cjc1295-ipamorelin',      label: 'CJC-1295 / Ipamorelin',     desc: 'Add GH peptides to preserve lean mass while semaglutide drives fat loss.' },
  ],

  'glp-1s-10mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'The full GLP-1 class comparison: semaglutide vs tirzepatide vs retatrutide.' },
    { href: '/stacks/advanced-recomp-stack',      label: 'Advanced Body Recomp Stack', desc: 'Pair semaglutide with CJC-1295/Ipamorelin for simultaneous fat loss and muscle gain.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'The ideal lean mass preservation partner during extended fat loss.' },
    { href: '/products/glp-1s-15mg',              label: 'Semaglutide 15mg',          desc: 'Ready for the maximum clinical dose? This is the next vial.' },
  ],

  'glp-1s-15mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'Understand the full GLP-1 landscape before running max dose.' },
    { href: '/stacks/advanced-recomp-stack',      label: 'Advanced Body Recomp Stack', desc: 'Stack maximum semaglutide with GH peptides for body recomposition.' },
    { href: '/products/glp-2t-15mg',              label: 'Tirzepatide 15mg',          desc: 'Considering the upgrade? Compare dual vs single agonist results.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'Protect lean mass at full therapeutic semaglutide doses.' },
  ],

  'glp-2t-15mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'How tirzepatide outperforms semaglutide in head-to-head trials.' },
    { href: '/stacks/advanced-recomp-stack',      label: 'Advanced Body Recomp Stack', desc: 'The tirzepatide + CJC-1295/Ipa stack for simultaneous fat loss and muscle.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'Add the GH axis protocol to preserve and build lean mass.' },
    { href: '/products/glp-1s-5mg',               label: 'Semaglutide 5mg',           desc: 'Compare the entry-level GLP-1 option before stepping up.' },
  ],

  'glp-2t-30mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'The full clinical breakdown of every GLP-1 compound available.' },
    { href: '/stacks/advanced-recomp-stack',      label: 'Advanced Body Recomp Stack', desc: 'Run tirzepatide alongside GH peptides for complete body recomposition.' },
    { href: '/products/glp-2t-60mg',              label: 'Tirzepatide 60mg',          desc: 'Ready to commit to a full 12-week protocol? Step up to the bulk vial.' },
    { href: '/products/igf-1lr3',                 label: 'IGF-1 LR3',                 desc: 'Amplify muscle preservation with direct IGF-1 axis activation.' },
  ],

  'glp-2t-60mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'SURMOUNT-4 data: why sustained protocols outperform short runs.' },
    { href: '/stacks/advanced-recomp-stack',      label: 'Advanced Body Recomp Stack', desc: 'The complete tirzepatide + GH peptide recomposition protocol.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'Cycle GH peptides alongside your long-term tirzepatide run.' },
    { href: '/products/glp-3r-10mg',              label: 'Retatrutide 10mg',          desc: 'The triple agonist option for users seeking maximum efficacy.' },
  ],

  'glp-3r-10mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'How triple agonism differs from semaglutide and tirzepatide.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'Pair GH peptides with retatrutide to protect lean mass during aggressive fat loss.' },
    { href: '/products/glp-3r-15mg',              label: 'Retatrutide 15mg',          desc: 'More supply for the maintenance phase once you\'ve found your dose.' },
    { href: '/products/glp-2t-15mg',              label: 'Tirzepatide 15mg',          desc: 'Compare dual vs triple agonist before choosing your protocol.' },
  ],

  'glp-3r-15mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'The clinical data behind sustained triple-agonist fat loss.' },
    { href: '/products/glp-3r-10mg',              label: 'Retatrutide 10mg',          desc: 'Start here if you\'re new to retatrutide — 10-week titration supply.' },
    { href: '/products/glp-3r-30mg',              label: 'Retatrutide 30mg',          desc: 'Ready for a longer run? The 30mg covers 7.5 weeks at 4mg/week.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'Anabolic counterbalance for glucagon-driven thermogenesis.' },
  ],

  'glp-3r-30mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'TRIUMPH trial data: 50-60% liver fat reduction with sustained retatrutide.' },
    { href: '/products/glp-3r-60mg',              label: 'Retatrutide 60mg',          desc: 'Maximum supply for the full 4-month triple-agonist commitment.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'Keep lean mass while retatrutide drives aggressive fat oxidation.' },
    { href: '/products/igf-1lr3',                 label: 'IGF-1 LR3',                 desc: 'Stack IGF-1 LR3 cycles within a long-term retatrutide run.' },
  ],

  'glp-3r-60mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'Why 15 weeks of continuous triple agonism produces compounding results.' },
    { href: '/products/glp-3r-30mg',              label: 'Retatrutide 30mg',          desc: 'A shorter commitment option before going all-in on the 60mg.' },
    { href: '/stacks/advanced-recomp-stack',      label: 'Advanced Body Recomp Stack', desc: 'Pair retatrutide with GH peptides for the ultimate body recomposition.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'The GH stack to cycle alongside your 4-month retatrutide protocol.' },
  ],

  'glp-1cglp-1s-5mg': [
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',   desc: 'How amylin + GLP-1 dual action compares to tirzepatide and retatrutide.' },
    { href: '/products/glp-1s-5mg',               label: 'Semaglutide 5mg',           desc: 'Start with semaglutide alone before adding cagrilintide.' },
    { href: '/stacks/beginner-fat-loss-protocol', label: 'Beginner Fat Loss Protocol', desc: 'The starter protocol before considering combination approaches.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'Add GH peptides to preserve lean mass alongside CagriSema.' },
  ],

  'cjc1295-ipamorelin': [
    { href: '/performance',                        label: 'Performance Peptide Guide', desc: 'The full GH axis explained — how CJC-1295/Ipa fits into the picture.' },
    { href: '/stacks/gh-optimization-stack',       label: 'GH Optimization Stack',    desc: 'Add IGF-1 LR3 to complete the full growth hormone axis protocol.' },
    { href: '/products/igf-1lr3',                  label: 'IGF-1 LR3',                 desc: 'The downstream anabolic partner for CJC-1295/Ipamorelin.' },
    { href: '/stacks/elite-performance-stack',     label: 'Elite Performance Stack',   desc: 'Add BPC-157 for injury-proof training alongside GH peptides.' },
  ],

  'igf-1lr3': [
    { href: '/performance',                        label: 'Performance Peptide Guide', desc: 'Muscle hyperplasia vs hypertrophy — the key distinction for IGF-1 LR3.' },
    { href: '/stacks/gh-optimization-stack',       label: 'GH Optimization Stack',    desc: 'The complete CJC-1295/Ipa + IGF-1 LR3 growth hormone protocol.' },
    { href: '/products/cjc1295-ipamorelin',        label: 'CJC-1295 / Ipamorelin',    desc: 'The upstream GH signal that IGF-1 LR3 amplifies downstream.' },
    { href: '/stacks/elite-performance-stack',     label: 'Elite Performance Stack',   desc: 'IGF-1 LR3 + GH peptides + BPC-157 for elite training results.' },
  ],

  'epithalon-50mg': [
    { href: '/anti-aging',                            label: 'Anti-Aging Peptide Guide',    desc: 'Telomere biology and how Epithalon fits the hallmarks of aging.' },
    { href: '/stacks/longevity-anti-aging-stack',     label: 'Longevity Anti-Aging Stack',  desc: 'Epithalon paired with GHK-CU and NAD+ for complete longevity coverage.' },
    { href: '/products/ghk-cu',                       label: 'GHK-CU Copper Peptide',       desc: 'Add gene expression reset to your Epithalon course protocol.' },
    { href: '/products/nad',                          label: 'NAD+ 500mg',                  desc: 'Restore mitochondrial function alongside telomere lengthening.' },
  ],

  'nad': [
    { href: '/anti-aging',                            label: 'Anti-Aging Peptide Guide',    desc: 'How NAD+ decline drives the hallmarks of cellular aging.' },
    { href: '/stacks/longevity-anti-aging-stack',     label: 'Longevity Anti-Aging Stack',  desc: 'NAD+ as part of the complete three-pathway longevity protocol.' },
    { href: '/products/epithalon-50mg',               label: 'Epithalon 50mg',              desc: 'Combine telomerase activation with mitochondrial NAD+ restoration.' },
    { href: '/products/ghk-cu',                       label: 'GHK-CU Copper Peptide',       desc: 'Add epigenetic reset to complete the three longevity mechanisms.' },
  ],

  'snap-8': [
    { href: '/anti-aging',                            label: 'Anti-Aging Peptide Guide',    desc: 'How SNAP-8 addresses cellular senescence at the neuromuscular junction.' },
    { href: '/products/ghk-cu',                       label: 'GHK-CU Copper Peptide',       desc: 'The ideal topical pairing — SNAP-8 reduces lines, GHK-CU rebuilds collagen.' },
    { href: '/stacks/longevity-anti-aging-stack',     label: 'Longevity Anti-Aging Stack',  desc: 'Add systemic anti-aging peptides alongside your topical protocol.' },
    { href: '/products/epithalon-50mg',               label: 'Epithalon 50mg',              desc: 'Combine surface-level wrinkle reduction with cellular age reversal.' },
  ],

  'bacteriostatic-water-reconstitution-solution-10ml': [
    { href: '/products/bpc157-10mg',       label: 'BPC-157 10mg',              desc: 'One of the most popular peptides to reconstitute with bacteriostatic water.' },
    { href: '/products/tb500-10mg',        label: 'TB-500 10mg',               desc: 'Requires bacteriostatic water — 2ml per 10mg vial.' },
    { href: '/products/cjc1295-ipamorelin', label: 'CJC-1295 / Ipamorelin',   desc: 'Reconstitute your GH stack with bacteriostatic water.' },
    { href: '/products',                   label: 'All Peptides',              desc: 'Every injectable peptide on this site requires bacteriostatic water.' },
  ],

  // ─── CATEGORY PAGES ────────────────────────────────────────────────────────

  healing: [
    { href: '/products/bpc157-10mg',          label: 'BPC-157 10mg',              desc: 'The most studied healing peptide — effective across every tissue type.' },
    { href: '/products/tb500-10mg',           label: 'TB-500 10mg',               desc: 'Systemic healing from any injection site — the gold standard partner.' },
    { href: '/stacks/healing-recovery-stack', label: 'Healing & Recovery Stack',  desc: 'All three peptides combined in one structured protocol.' },
    { href: '/products/ghk-cu',               label: 'GHK-CU Copper Peptide',     desc: 'Collagen remodeling and gene-level healing for the final repair phase.' },
  ],

  'fat-loss': [
    { href: '/products/glp-1s-5mg',               label: 'Semaglutide 5mg',             desc: 'The entry-level GLP-1 — 20 weeks of starter supply.' },
    { href: '/products/glp-2t-15mg',              label: 'Tirzepatide 15mg',             desc: '22.5% weight loss — the dual agonist upgrade over semaglutide.' },
    { href: '/stacks/beginner-fat-loss-protocol', label: 'Beginner Fat Loss Protocol',   desc: 'The complete starter stack with titration guide.' },
    { href: '/stacks/advanced-recomp-stack',      label: 'Advanced Body Recomp Stack',   desc: 'Tirzepatide + CJC-1295/Ipa for simultaneous fat loss and muscle.' },
  ],

  performance: [
    { href: '/products/cjc1295-ipamorelin',    label: 'CJC-1295 / Ipamorelin',    desc: 'The gold standard GH secretagogue stack — pulsatile, clean, effective.' },
    { href: '/products/igf-1lr3',              label: 'IGF-1 LR3',                 desc: 'Downstream anabolic signal for permanent muscle fiber growth.' },
    { href: '/stacks/gh-optimization-stack',   label: 'GH Optimization Stack',    desc: 'The complete growth hormone axis protocol.' },
    { href: '/stacks/elite-performance-stack', label: 'Elite Performance Stack',   desc: 'GH peptides + IGF-1 LR3 + BPC-157 for elite training performance.' },
  ],

  'anti-aging': [
    { href: '/products/epithalon-50mg',               label: 'Epithalon 50mg',             desc: 'Telomerase activation — the root of cellular age reversal.' },
    { href: '/products/ghk-cu',                       label: 'GHK-CU Copper Peptide',      desc: '4,000+ genes modulated — the broadest biological reach of any peptide.' },
    { href: '/products/nad',                          label: 'NAD+ 500mg',                  desc: 'Restore mitochondrial energy and DNA repair capacity.' },
    { href: '/stacks/longevity-anti-aging-stack',     label: 'Longevity Anti-Aging Stack',  desc: 'All three longevity mechanisms in one coordinated protocol.' },
  ],

  // ─── COGNITIVE PAGES ───────────────────────────────────────────────────────

  cognitive: [
    { href: '/products/n-acetyl-semax-30mg',  label: 'N-Acetyl Semax Amidate',    desc: 'BDNF upregulation and neuroplasticity — the most potent semax form available.' },
    { href: '/products/na-selank-10mg',        label: 'NA-Selank Amidate',          desc: 'Anxiolytic without sedation — enkephalinase inhibitor for GABAergic anxiety reduction.' },
    { href: '/products/dsip-5mg',             label: 'DSIP 5mg',                   desc: 'Deep slow-wave sleep + nocturnal GH release enhancement.' },
    { href: '/products/methylene-blue-50ml',  label: 'Methylene Blue',             desc: 'Mitochondrial electron carrier for neuronal energy optimization and cognitive enhancement.' },
  ],

  'n-acetyl-semax-30mg': [
    { href: '/cognitive',                     label: 'Cognitive Peptides Guide',   desc: 'All four cognitive peptide mechanisms explained.' },
    { href: '/products/na-selank-10mg',        label: 'NA-Selank Amidate',          desc: 'Stack Semax + Selank for combined focus and anxiety reduction.' },
    { href: '/products/dsip-5mg',             label: 'DSIP 5mg',                   desc: 'Sleep optimization to support the neuroplasticity effects of Semax.' },
    { href: '/products/methylene-blue-50ml',  label: 'Methylene Blue',             desc: 'Add mitochondrial energy support to your Semax cognitive protocol.' },
  ],

  'na-selank-10mg': [
    { href: '/cognitive',                     label: 'Cognitive Peptides Guide',   desc: 'Compare all cognitive peptide mechanisms.' },
    { href: '/products/n-acetyl-semax-30mg',  label: 'N-Acetyl Semax Amidate',    desc: 'Stack with Semax for anxiety-free cognitive enhancement.' },
    { href: '/products/dsip-5mg',             label: 'DSIP 5mg',                   desc: 'Deep sleep optimization to complement Selank\'s anxiolytic effects.' },
    { href: '/anti-aging',                    label: 'Anti-Aging Peptide Guide',   desc: 'Combine cognitive optimization with longevity protocols.' },
  ],

  'dsip-5mg': [
    { href: '/cognitive',                     label: 'Cognitive Peptides Guide',   desc: 'All cognitive and sleep peptide mechanisms explained.' },
    { href: '/products/cjc-ipa-blend-10mg',   label: 'CJC-1295/Ipamorelin Blend', desc: 'Stack DSIP with GH peptides for nocturnal GH optimization during deep sleep.' },
    { href: '/products/n-acetyl-semax-30mg',  label: 'N-Acetyl Semax Amidate',    desc: 'Daytime cognitive enhancement to pair with DSIP nighttime sleep optimization.' },
    { href: '/performance',                   label: 'Performance Peptide Guide',  desc: 'GH optimization through DSIP-enhanced slow-wave sleep.' },
  ],

  // ─── LOOKS MAXXING PAGES ───────────────────────────────────────────────────

  'looks-maxxing': [
    { href: '/skin',                              label: 'Skin & Collagen Guide',        desc: 'GHK-CU, SNAP-8, and BPC-157 for collagen rebuilding and skin optimization.' },
    { href: '/hair',                              label: 'Hair Growth Peptides',          desc: 'TB-500, BPC-157, and GHK-CU for follicle restoration and hair regrowth.' },
    { href: '/tanning',                           label: 'Tanning Peptides Guide',        desc: 'Melanotan II and PT-141 for deep, even pigmentation.' },
    { href: '/stacks/looks-maxxing-stack',        label: 'Complete Looks Maxxing Stack',  desc: 'GHK-CU + Melanotan II + SNAP-8 in one structured protocol.' },
  ],

  skin: [
    { href: '/products/ghk-cu',                   label: 'GHK-CU Copper Peptide',         desc: '4,000+ genes modulated for collagen synthesis and skin restoration.' },
    { href: '/products/snap-8',                   label: 'SNAP-8 Topical Peptide',         desc: '63% expression line reduction — the topical Botox alternative.' },
    { href: '/stacks/skin-renewal-protocol',      label: 'Skin Renewal Protocol',          desc: 'GHK-CU + SNAP-8 + BPC-157 in one structured skin restoration stack.' },
    { href: '/looks-maxxing',                     label: 'Looks Maxxing Hub',              desc: 'The complete guide to peptide-based appearance optimization.' },
  ],

  hair: [
    { href: '/products/tb500-10mg',               label: 'TB-500 10mg',                    desc: 'Thymosin Beta-4 — clinical evidence for follicle stem cell activation.' },
    { href: '/products/bpc157-10mg',              label: 'BPC-157 10mg',                   desc: 'Scalp angiogenesis and dermal vascularity for follicle nutrition.' },
    { href: '/stacks/hair-restoration-stack',     label: 'Hair Restoration Stack',         desc: 'TB-500 + BPC-157 + GHK-CU — the three-mechanism hair protocol.' },
    { href: '/looks-maxxing',                     label: 'Looks Maxxing Hub',              desc: 'Tanning, skin, hair, and body composition — the complete guide.' },
  ],

  tanning: [
    { href: '/products/melanotan-ii-10mg',        label: 'Melanotan II 10mg',              desc: 'Deep eumelanin pigmentation via MC1R agonism — the most potent tanning peptide.' },
    { href: '/products/pt-141-10mg',              label: 'PT-141 10mg',                    desc: 'Better-tolerated melanocortin peptide — FDA-evaluated bremelanotide.' },
    { href: '/stacks/looks-maxxing-stack',        label: 'Complete Looks Maxxing Stack',   desc: 'Add skin and collagen peptides to your tanning protocol.' },
    { href: '/looks-maxxing',                     label: 'Looks Maxxing Hub',              desc: 'The full spectrum of peptide appearance optimization.' },
  ],

  'melanotan-ii-10mg': [
    { href: '/tanning',                           label: 'Tanning Peptides Guide',         desc: 'Melanocortin receptor science and full tanning protocols explained.' },
    { href: '/products/pt-141-10mg',             label: 'PT-141 10mg',                    desc: 'The better-tolerated alternative with a longer half-life and milder side effects.' },
    { href: '/stacks/looks-maxxing-stack',        label: 'Complete Looks Maxxing Stack',   desc: 'Stack Melanotan II with GHK-CU and SNAP-8 for full appearance optimization.' },
    { href: '/looks-maxxing',                     label: 'Looks Maxxing Hub',              desc: 'All four pillars of peptide appearance optimization.' },
  ],

  'pt-141-10mg': [
    { href: '/tanning',                           label: 'Tanning Peptides Guide',         desc: 'Compare PT-141 and Melanotan II side-by-side with clinical data.' },
    { href: '/products/melanotan-ii-10mg',        label: 'Melanotan II 10mg',              desc: 'The more potent tanning peptide for deeper pigmentation results.' },
    { href: '/stacks/looks-maxxing-stack',        label: 'Complete Looks Maxxing Stack',   desc: 'Combine melanocortin peptides with skin and collagen protocols.' },
    { href: '/looks-maxxing',                     label: 'Looks Maxxing Hub',              desc: 'Skin, hair, tanning, and body — the complete appearance guide.' },
  ],

  // ─── STACK PAGES ───────────────────────────────────────────────────────────

  'healing-recovery-stack': [
    { href: '/products/bpc157-10mg',   label: 'BPC-157 10mg',          desc: 'Local receptor upregulation and angiogenesis — the foundation of this stack.' },
    { href: '/products/tb500-10mg',    label: 'TB-500 10mg',            desc: 'Systemic stem cell recruitment — covers the whole body from any injection site.' },
    { href: '/products/ghk-cu',        label: 'GHK-CU Copper Peptide',  desc: 'Collagen remodeling and gene-level tissue restoration in the final phase.' },
    { href: '/healing',                label: 'Healing Peptide Guide',  desc: 'The full three-phase tissue repair cascade explained.' },
  ],

  'beginner-fat-loss-protocol': [
    { href: '/products/glp-1s-5mg',              label: 'Semaglutide 5mg',           desc: 'The core peptide in this starter protocol — 20 weeks of supply.' },
    { href: '/fat-loss',                          label: 'Fat Loss Peptide Guide',    desc: 'Compare all four GLP-1 class options before your next step.' },
    { href: '/stacks/advanced-recomp-stack',      label: 'Advanced Body Recomp Stack', desc: 'When you\'re ready to add muscle preservation to your fat loss.' },
    { href: '/products/cjc1295-ipamorelin',       label: 'CJC-1295 / Ipamorelin',    desc: 'The GH peptide to stack once you\'ve established your GLP-1 protocol.' },
  ],

  'advanced-recomp-stack': [
    { href: '/products/glp-2t-15mg',          label: 'Tirzepatide 15mg',          desc: 'Dual GLP-1/GIP fat loss — the cornerstone of this recomposition stack.' },
    { href: '/products/cjc1295-ipamorelin',   label: 'CJC-1295 / Ipamorelin',     desc: 'Natural GH pulse for lean mass preservation alongside tirzepatide.' },
    { href: '/fat-loss',                      label: 'Fat Loss Peptide Guide',     desc: 'The mechanism behind simultaneous fat loss and muscle gain explained.' },
    { href: '/stacks/gh-optimization-stack',  label: 'GH Optimization Stack',     desc: 'Extend the GH component of your recomp protocol with IGF-1 LR3.' },
  ],

  'gh-optimization-stack': [
    { href: '/products/cjc1295-ipamorelin',        label: 'CJC-1295 / Ipamorelin',    desc: 'Upstream GH pulse stimulation — the foundation of this protocol.' },
    { href: '/products/igf-1lr3',                  label: 'IGF-1 LR3',                 desc: 'Direct satellite cell activation for permanent muscle hyperplasia.' },
    { href: '/performance',                        label: 'Performance Peptide Guide', desc: 'The full GH axis explained — why these two peptides work together.' },
    { href: '/stacks/elite-performance-stack',     label: 'Elite Performance Stack',   desc: 'Add BPC-157 to make this stack injury-proof.' },
  ],

  'longevity-anti-aging-stack': [
    { href: '/products/epithalon-50mg',   label: 'Epithalon 50mg',          desc: 'Telomerase activation — the first of the three longevity mechanisms.' },
    { href: '/products/ghk-cu',           label: 'GHK-CU Copper Peptide',   desc: 'Gene expression reset — the second mechanism in this stack.' },
    { href: '/products/nad',              label: 'NAD+ 500mg',               desc: 'Mitochondrial restoration — the third and final longevity mechanism.' },
    { href: '/anti-aging',               label: 'Anti-Aging Peptide Guide', desc: 'The four hallmarks of aging this stack targets explained.' },
  ],

  'elite-performance-stack': [
    { href: '/products/cjc1295-ipamorelin', label: 'CJC-1295 / Ipamorelin',    desc: 'Natural GH secretagogue — the anabolic engine of this stack.' },
    { href: '/products/igf-1lr3',           label: 'IGF-1 LR3',                 desc: 'Satellite cell activation for permanent muscle fiber creation.' },
    { href: '/products/bpc157-10mg',        label: 'BPC-157 10mg',              desc: 'Continuous injury prevention that keeps training loads sustainable.' },
    { href: '/performance',                 label: 'Performance Peptide Guide', desc: 'Why the GH/IGF-1 axis outperforms anabolic steroids for sustainable gains.' },
  ],

  'looks-maxxing-stack': [
    { href: '/products/ghk-cu',             label: 'GHK-CU Copper Peptide',    desc: 'The collagen and gene expression backbone of this protocol.' },
    { href: '/products/snap-8',             label: 'SNAP-8 Topical Peptide',   desc: 'Expression line reduction — the topical component of this stack.' },
    { href: '/products/melanotan-ii-10mg',  label: 'Melanotan II 10mg',         desc: 'Deep eumelanin pigmentation — the tanning component.' },
    { href: '/looks-maxxing',               label: 'Looks Maxxing Hub',         desc: 'All four pillars of peptide appearance optimization explained.' },
  ],

  'skin-renewal-protocol': [
    { href: '/products/ghk-cu',             label: 'GHK-CU Copper Peptide',    desc: 'Primary collagen rebuilder — modulates 4,000+ skin repair genes.' },
    { href: '/products/snap-8',             label: 'SNAP-8 Topical Peptide',   desc: 'Expression line reduction to complement structural collagen rebuilding.' },
    { href: '/products/bpc157-10mg',        label: 'BPC-157 10mg',             desc: 'Dermal angiogenesis for improved skin vascularity and luminosity.' },
    { href: '/skin',                        label: 'Skin & Collagen Guide',    desc: 'The complete science of peptide skin optimization.' },
  ],

  'hair-restoration-stack': [
    { href: '/products/tb500-10mg',         label: 'TB-500 10mg',               desc: 'Follicle stem cell activation — the primary driver of this protocol.' },
    { href: '/products/bpc157-10mg',        label: 'BPC-157 10mg',              desc: 'Scalp angiogenesis — restores the vascularity follicles need to grow.' },
    { href: '/products/ghk-cu',             label: 'GHK-CU Copper Peptide',     desc: 'Follicle gene expression modulation for dermal papilla optimization.' },
    { href: '/hair',                        label: 'Hair Growth Peptides',       desc: 'The complete guide to peptide-driven hair restoration.' },
  ],

  // ─── NEW GUIDE PAGES ────────────────────────────────────────────────────────

  'growth-hormone-peptides': [
    { href: '/products/cjc1295-ipamorelin', label: 'CJC-1295 / Ipamorelin Blend', desc: 'The most popular pre-formulated GH secretagogue stack.' },
    { href: '/products/sermorelin-5mg',     label: 'Sermorelin 5mg',              desc: 'Classic GHRH 1–29 analogue — the beginner-friendly GH peptide.' },
    { href: '/performance',                 label: 'Performance Hub',             desc: 'All performance peptides for muscle, recovery, and GH optimisation.' },
    { href: '/muscle-building-peptides',    label: 'Muscle Building Peptides',    desc: 'How GH/IGF-1 axis peptides drive hypertrophy and lean mass.' },
  ],

  'what-are-peptides': [
    { href: '/guide',                       label: 'Beginner Guide',              desc: 'Step-by-step introduction to research peptides and protocols.' },
    { href: '/products',                    label: 'All Peptides',                desc: 'Browse 40+ research-grade peptides available from Phiogen.' },
    { href: '/peptide-injection-guide',     label: 'Injection Guide',             desc: 'Reconstitution, dose calculation, and subcutaneous injection technique.' },
    { href: '/healing',                     label: 'Healing Peptides',            desc: 'BPC-157, TB-500, and the science of accelerated tissue repair.' },
  ],

  'peptide-injection-guide': [
    { href: '/what-are-peptides',           label: 'What Are Peptides?',          desc: 'Start here to understand peptide basics before your first injection.' },
    { href: '/products/bpc157-10mg',        label: 'BPC-157 10mg',                desc: 'The most commonly injected research peptide — full protocol.' },
    { href: '/growth-hormone-peptides',     label: 'GH Peptides Guide',           desc: 'CJC-1295 and Ipamorelin injection timing and dosing.' },
    { href: '/semaglutide-protocol',        label: 'Semaglutide Protocol',        desc: 'Complete dosing and injection guide for semaglutide.' },
  ],

  'longevity-peptides': [
    { href: '/products/epithalon-50mg',     label: 'Epithalon 50mg',              desc: 'Telomerase activator — the cornerstone of longevity protocols.' },
    { href: '/products/foxo4-dri',          label: 'FOXO4-DRI',                   desc: 'Senolytic peptide targeting zombie cell clearance.' },
    { href: '/anti-aging',                  label: 'Anti-Aging Hub',              desc: 'All anti-aging peptides and the hallmarks of aging they address.' },
    { href: '/stacks',                      label: 'Protocol Stacks',             desc: 'Curated longevity stack protocols for annual cycling.' },
  ],

  'muscle-building-peptides': [
    { href: '/products/cjc1295-ipamorelin', label: 'CJC-1295 / Ipamorelin',      desc: 'The foundational GH secretagogue stack for muscle and recomp.' },
    { href: '/products/bpc157-10mg',        label: 'BPC-157 10mg',                desc: 'Recovery peptide that allows higher training frequency.' },
    { href: '/growth-hormone-peptides',     label: 'GH Peptides Guide',           desc: 'Full breakdown of GHRH vs GHRP and how to build a GH stack.' },
    { href: '/performance',                 label: 'Performance Hub',             desc: 'All performance-category peptides and their protocols.' },
  ],

  'semaglutide-protocol': [
    { href: '/products/glp-1s-5mg',         label: 'Semaglutide 5mg',             desc: 'Research-grade semaglutide — STEP trial compound.' },
    { href: '/products/glp-2t-15mg',        label: 'Tirzepatide 15mg',            desc: 'Dual GIP/GLP-1 agonist with superior weight loss vs semaglutide.' },
    { href: '/peptides-for-weight-loss',    label: 'Weight Loss Peptides Guide',  desc: 'GLP-1 mechanism, AOD9604, and the complete fat loss peptide comparison.' },
    { href: '/fat-loss',                    label: 'Fat Loss Hub',                desc: 'All fat loss protocols and GLP-1 comparison tools.' },
  ],

  'peptides-for-weight-loss': [
    { href: '/semaglutide-protocol',        label: 'Semaglutide Protocol',        desc: 'Complete titration schedule and dosing guide for semaglutide.' },
    { href: '/products/glp-2t-15mg',        label: 'Tirzepatide 15mg',            desc: 'Dual GIP/GLP-1 — the most effective GLP-1-class peptide for fat loss.' },
    { href: '/fat-loss',                    label: 'Fat Loss Hub',                desc: 'All fat loss peptides with goal-based protocol matching.' },
    { href: '/products/glp-1s-5mg',         label: 'Semaglutide 5mg',             desc: 'Research-grade semaglutide from Phiogen.' },
  ],
};

export function getLinksFor(key: string): InternalLink[] {
  return internalLinks[key] ?? [];
}

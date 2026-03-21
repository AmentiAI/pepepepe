'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

const faqs = [
  {
    q: 'What are peptides and how are they different from steroids?',
    a: 'Peptides are short chains of amino acids that act as signaling molecules — they instruct your body to perform specific biological functions like repairing tissue, secreting growth hormone, or suppressing appetite. Unlike anabolic steroids, which directly replace or amplify hormones (like testosterone) and suppress the hypothalamic-pituitary axis, most therapeutic peptides work by stimulating your body\'s own existing pathways. CJC-1295/Ipamorelin, for example, signals your pituitary to release more of your own growth hormone — it doesn\'t introduce exogenous GH. This distinction means most peptides do not require PCT, do not cause hormonal shutdown, and carry a fundamentally different risk profile.',
  },
  {
    q: 'Do I have to inject peptides, or are there oral options?',
    a: 'The vast majority of therapeutic peptides must be injected subcutaneously (under the skin) because they are protein-based and would be digested and deactivated by stomach acid before absorption. The exception on this site is GHK-CU and SNAP-8, which are applied topically. GLP-1 class peptides (semaglutide, tirzepatide, retatrutide) are always injected subcutaneously — just like the pharmaceutical versions (Ozempic, Mounjaro). Subcutaneous injections with a 29–31 gauge insulin syringe are essentially painless and straightforward to self-administer.',
  },
  {
    q: 'What is bacteriostatic water and why do I need it?',
    a: 'Bacteriostatic water (BAC water) is sterile water with 0.9% benzyl alcohol added as a preservative. The benzyl alcohol prevents bacterial contamination in multi-dose vials — meaning you can draw from the same reconstituted vial over 4–6 weeks without risk of contamination. Do not substitute plain sterile water: it has no preservative and your reconstituted peptide becomes vulnerable to bacterial growth within days. Every injectable peptide on this site requires bacteriostatic water for reconstitution. 10ml is sufficient for most individual vials.',
  },
  {
    q: 'How do I reconstitute a peptide vial?',
    a: 'The process takes under 5 minutes: (1) Draw 1–2ml of bacteriostatic water into a fresh insulin syringe. (2) Insert the needle into the peptide vial at the glass wall — not through the top — and let the water run slowly down the inside surface. Do not jet it directly onto the powder. (3) Gently swirl the vial until the powder is fully dissolved. Never shake it. (4) Let it sit for 2–3 minutes. The solution should be clear and colorless. Refrigerate immediately and use within 28 days. Each product page includes a reconstitution table with exact volumes and doses per ml.',
  },
  {
    q: 'What\'s the difference between BPC-157 and TB-500?',
    a: 'BPC-157 (Body Protection Compound) works locally — it upregulates growth hormone receptors at the site of injury, drives angiogenesis (new blood vessel formation), and accelerates fibroblast activity. It\'s most effective for specific, localized injuries: a torn tendon, gut lining damage, a pulled muscle. TB-500 (Thymosin Beta-4 peptide) works systemically — injected anywhere, it recruits stem cells and promotes tissue repair throughout the entire body. It crosses into the bloodstream and distributes widely. The reason most serious healing protocols combine both is exactly this distinction: BPC-157 handles targeted local repair while TB-500 provides whole-body recovery support.',
  },
  {
    q: 'What is a GLP-1 receptor agonist and how does it cause fat loss?',
    a: 'GLP-1 (glucagon-like peptide-1) is a hormone your gut releases after eating, which signals the pancreas to release insulin, slows gastric emptying, and communicates satiety to the brain. GLP-1 receptor agonists are synthetic peptides that activate the same receptor — but with a much longer half-life than your body\'s natural GLP-1. The result: persistent appetite suppression, slower gastric emptying (you feel full longer), improved insulin sensitivity, and — at higher doses — direct effects on the brain\'s reward circuitry around food. Weight loss from GLP-1 class peptides is primarily driven by significant caloric reduction through appetite control, not by directly burning fat.',
  },
  {
    q: 'What\'s the difference between semaglutide, tirzepatide, and retatrutide?',
    a: 'Semaglutide is a GLP-1 receptor agonist only (single agonist). It produced 14.9% mean weight loss in the STEP 1 trial. Tirzepatide is a dual GLP-1/GIP receptor agonist — adding GIP activation on top of GLP-1 produced 22.5% mean weight loss in SURMOUNT-1, significantly outperforming semaglutide. Retatrutide is a triple agonist — GLP-1, GIP, and glucagon receptor. The glucagon component adds thermogenic effects (raises basal metabolic rate) and produces the highest fat loss numbers seen in any class, with Phase 2 data showing up to 24% body weight reduction. The tradeoff for each step up: more potency but also more GI side effects and more complex titration.',
  },
  {
    q: 'How long until I see results from BPC-157 or TB-500?',
    a: 'For acute injuries (tendon tears, ligament sprains, muscle strains), most users report measurable pain reduction and improved range of motion within 2–4 weeks of daily BPC-157 use. For chronic or long-standing injuries, expect 6–8 weeks before full assessment. TB-500 typically shows its strongest effects during the 6-week loading phase (2 injections per week), with peak recovery acceleration around weeks 3–5. If you\'re running both together in the Healing & Recovery Stack, the combined effect is typically noticeable faster than either alone — within 1–2 weeks for most acute injuries.',
  },
  {
    q: 'What is CJC-1295/Ipamorelin and how is it different from injecting HGH?',
    a: 'CJC-1295 is a GHRH analog — it signals your pituitary gland to release a pulse of growth hormone. Ipamorelin is a ghrelin mimetic that both amplifies the GH pulse and provides mild appetite stimulation. Together, they produce a strong, pulsatile GH release that closely mimics your natural nocturnal GH pattern. Injecting exogenous HGH directly raises GH blood levels but suppresses your pituitary\'s own production over time and requires precise dosing to avoid IGF-1 elevation issues. CJC-1295/Ipamorelin stimulates your own production — no suppression, no HPTA disruption, and the pulsatile pattern is more physiologically appropriate for long-term use.',
  },
  {
    q: 'What is Epithalon and what does it do for longevity?',
    a: 'Epithalon (Epitalon) is a synthetic tetrapeptide developed by Russian scientist Vladimir Khavinson at the St. Petersburg Institute of Bioregulation. It is one of the most studied peptides for longevity, with over 40 years of research behind it. Its primary mechanism is telomerase activation — it upregulates the enzyme that elongates telomeres, the protective caps on chromosomes that shorten with each cell division. Shorter telomeres correlate directly with cellular aging and disease risk. Epithalon is used in a course protocol (10mg/day for 10 days) rather than continuously, typically run twice per year, which matches the approach used in long-term human trials.',
  },
  {
    q: 'Can I stack multiple peptides at the same time?',
    a: 'Yes — and many protocols are specifically designed around combinations. The key principle is to stack peptides with complementary mechanisms rather than redundant ones. BPC-157 + TB-500 is the classic healing stack: local repair + systemic recruitment. CJC-1295/Ipamorelin + IGF-1 LR3 is the performance stack: GH axis stimulation + direct downstream anabolic signaling. Semaglutide or tirzepatide + CJC-1295/Ipamorelin is the body recomposition stack: fat loss + lean mass preservation. The stacks on this site are pre-designed around exactly these synergies — see the Protocol Stacks section for complete multi-compound protocols.',
  },
  {
    q: 'Are peptides legal to purchase?',
    a: 'Peptides occupy a complex legal space. In the United States, most therapeutic peptides are not approved pharmaceutical drugs and are not regulated as controlled substances — they exist in a gray area as research chemicals or compounded substances. They are legal to purchase for personal use in most US states. Internationally, the regulatory status varies significantly by country — semaglutide and tirzepatide, for example, are prescription medications in most jurisdictions because they have approved pharmaceutical forms (Ozempic, Wegovy, Mounjaro). Always verify the legal status of any specific compound in your country before ordering.',
  },
  {
    q: 'How do I store reconstituted peptides?',
    a: 'Reconstituted peptides should be stored refrigerated at 2–8°C (standard fridge temperature) and protected from light. Use within 28 days of reconstitution. Freeze-dried (lyophilized) powder in sealed vials can typically be stored at room temperature for several months or longer if kept cool, dry, and away from light — though refrigeration is always preferred. Never freeze a reconstituted peptide vial. Never shake a reconstituted peptide — swirl gently if you need to mix it. If the reconstituted solution appears cloudy, discolored, or has particulate matter, discard it.',
  },
  {
    q: 'What are the side effects of GLP-1 peptides like semaglutide and tirzepatide?',
    a: 'The primary side effects of GLP-1 class peptides are gastrointestinal: nausea, vomiting, diarrhea, and constipation, particularly during dose escalation. These are dose-dependent and typically improve after 1–2 weeks at any given dose — which is why slow titration is essential. Most users tolerate their therapeutic dose well once titration is complete. Other reported effects include fatigue during early titration, reduced interest in alcohol, and in some cases changes in facial appearance with significant weight loss ("Ozempic face"). Pancreatitis is a rare but serious risk flagged in pharmaceutical trials. Do not use GLP-1 class peptides if you have a personal or family history of medullary thyroid carcinoma or MEN2.',
  },
  {
    q: 'What should a complete beginner start with?',
    a: 'Start by identifying your primary goal — healing, fat loss, performance, or anti-aging — and run one peptide for that goal for 8–12 weeks before adding anything else. For healing: start with BPC-157 10mg at 250mcg subcutaneous daily. For fat loss: start with Semaglutide 5mg at 0.25mg/week and titrate slowly. For performance: start with CJC-1295/Ipamorelin at 100mcg of each before bed, 5 days on/2 off. For anti-aging: run an Epithalon 50mg course at 10mg/day for 10 days. If you want a pre-designed multi-compound protocol from day one, the stacks on this site include complete dosing schedules, synergy rationale, and sourcing for every compound. See the Beginner Fat Loss Protocol or Healing & Recovery Stack for a structured starting point.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateIn delay={i * 0.03}>
      <div className="border border-white/5 rounded-xl overflow-hidden">
        <button
          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/3 transition-colors gap-4"
          onClick={() => setOpen(!open)}
        >
          <span className="font-medium text-white text-sm leading-relaxed">{q}</span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
        {open && (
          <div className="px-5 pb-5 pt-0">
            <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
          </div>
        )}
      </div>
    </AnimateIn>
  );
}

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AnimateIn>
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg">
            {faqs.length} questions about peptides, protocols, reconstitution, and how to get started.
          </p>
        </div>
      </AnimateIn>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} i={i} />
        ))}
      </div>
    </div>
  );
}

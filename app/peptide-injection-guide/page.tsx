import type { Metadata } from 'next';
import Link from 'next/link';
import { FlaskConical, AlertTriangle, CheckCircle, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Inject Peptides: Complete Reconstitution & Injection Guide | PeptideProtocols',
  description:
    'Step-by-step guide to reconstituting research peptides with bacteriostatic water, calculating doses, drawing injections, and administering subcutaneous and intramuscular peptide injections safely.',
};

const supplies = [
  { item: 'Bacteriostatic water (BW)', why: 'Solvent for reconstitution. The 0.9% benzyl alcohol prevents bacterial growth, extending shelf life to 28+ days after opening.' },
  { item: 'Insulin syringes (29–31G, 0.5 mL)', why: 'Thin gauge causes minimal pain. 0.5 mL capacity is sufficient for almost all peptide doses. Pre-attached needle is ideal.' },
  { item: 'Alcohol swabs (70% isopropyl)', why: 'Sterilise vial tops and injection site before each use.' },
  { item: 'Lyophilised peptide vial', why: 'White or off-white powder. Check COA confirms purity ≥98% HPLC.' },
  { item: 'Sterile drawing needle (18G)', why: 'Optional. Used to draw BW from the BW vial into the syringe before switching to the injection needle. Reduces needle wear.' },
  { item: 'Sharps container', why: 'Safe disposal of used needles per local regulations.' },
];

const reconSteps = [
  {
    n: '01',
    title: 'Calculate how much BW to add',
    detail: 'This is the most important step. Adding more BW does not change the total amount of peptide — it only changes the concentration. A standard approach: add 2 mL BW to a 5 mg vial gives you 2,500 mcg/mL (2.5 mcg/µL). Adding 1 mL gives 5,000 mcg/mL. Adding 2.5 mL gives 2,000 mcg/mL. Choose a concentration that makes your target dose easy to measure with your syringe.',
  },
  {
    n: '02',
    title: 'Swab the tops of both vials',
    detail: 'Use a fresh alcohol swab on the rubber stopper of the BW vial and your peptide vial. Allow 30 seconds to air dry before penetrating with a needle. Wet alcohol can enter the vial and affect the peptide.',
  },
  {
    n: '03',
    title: 'Draw the bacteriostatic water',
    detail: 'Insert your syringe needle through the BW vial stopper. Invert the vial. Pull back the plunger to draw the target volume of BW. For a 2 mL reconstitution, draw 2 mL (if using a 1 mL syringe you may need two draws). Keep the needle tip submerged in liquid to avoid drawing air bubbles.',
  },
  {
    n: '04',
    title: 'Add BW to peptide vial slowly',
    detail: 'Insert the needle into the peptide vial stopper. Aim the stream of BW at the glass wall of the vial rather than directly onto the powder. This prevents mechanical shearing of the peptide chain. Push the plunger slowly and steadily. Do not shake the vial — swirl gently until the powder is fully dissolved. This usually takes 30–60 seconds.',
  },
  {
    n: '05',
    title: 'Verify complete dissolution',
    detail: 'The solution should be completely clear with no visible particulate matter. A very faint cloudiness can occur with some peptides (particularly larger ones like TB-500) but should resolve within a few minutes of gentle swirling. If the solution remains cloudy after 5 minutes, check that you are using bacteriostatic water and not saline — some peptides precipitate in saline.',
  },
  {
    n: '06',
    title: 'Label and store',
    detail: 'Label the vial with the peptide name, concentration, date of reconstitution, and expiry date (typically 28 days for room temp, 60 days refrigerated). Store upright in the refrigerator (4°C / 39°F). Do not freeze reconstituted peptides as ice crystal formation can damage the structure. Protect from light.',
  },
];

const doseCalcExamples = [
  { peptide: 'BPC-157 5mg vial', bwAdded: '2 mL', conc: '2,500 mcg/mL = 2.5 mcg/µL', targetDose: '250 mcg', units: '0.10 mL = 10 units on insulin syringe' },
  { peptide: 'CJC-1295 5mg vial', bwAdded: '2 mL', conc: '2,500 mcg/mL', targetDose: '100 mcg', units: '0.04 mL = 4 units on insulin syringe' },
  { peptide: 'Ipamorelin 5mg vial', bwAdded: '2 mL', conc: '2,500 mcg/mL', targetDose: '200 mcg', units: '0.08 mL = 8 units on insulin syringe' },
  { peptide: 'TB-500 5mg vial', bwAdded: '2.5 mL', conc: '2,000 mcg/mL', targetDose: '2,000 mcg (2mg)', units: '1.0 mL = 100 units on insulin syringe' },
  { peptide: 'Semaglutide 5mg vial', bwAdded: '2.5 mL', conc: '2,000 mcg/mL', targetDose: '250 mcg (starter)', units: '0.125 mL = 12.5 units' },
  { peptide: 'Epithalon 50mg vial', bwAdded: '5 mL', conc: '10,000 mcg/mL', targetDose: '5,000 mcg (5mg)', units: '0.5 mL = 50 units' },
];

const injSteps = [
  { step: 'Select site', detail: 'Abdomen (1–2 inches from navel), outer thigh, or upper arm. Rotate sites each injection. Avoid scar tissue, active bruising, and within 1 inch of previous injection.' },
  { step: 'Swab and air dry', detail: 'Wipe the skin with an alcohol swab using a single firm stroke outward from the center. Wait 30 seconds for alcohol to evaporate before injecting. Injecting through wet alcohol increases sting.' },
  { step: 'Draw dose', detail: 'Draw air equal to your dose into the syringe first (helps expel the solution). Insert needle through vial stopper, inject air, then invert and draw your dose. Tap to move air bubbles to the top, then expel air only.' },
  { step: 'Pinch and insert', detail: 'Pinch 1–2 inches of skin between thumb and forefinger. Insert needle at 45° for very lean individuals or 90° for those with adequate subcutaneous fat. Use a smooth, controlled motion — not a jab.' },
  { step: 'Inject slowly', detail: 'Push the plunger at a slow, steady rate over 5–10 seconds. Injecting too fast increases localised pressure and discomfort. There should be minimal resistance — if there is significant resistance, you may be in muscle (for SC injection) or have a blockage.' },
  { step: 'Remove and apply pressure', detail: 'Remove the needle at the same angle it was inserted. Apply gentle pressure with a clean cotton ball or alcohol swab for 10–20 seconds. Do not rub, which can increase bruising.' },
];

export default function PeptideInjectionGuidePage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
            <FlaskConical className="w-3.5 h-3.5" />
            Step-by-Step Protocol Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            How to Inject Peptides:{' '}
            <span className="gradient-text">Reconstitution & Injection Guide</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
            Everything you need to know about reconstituting lyophilised research peptides, calculating accurate doses, and administering subcutaneous injections safely and comfortably. Step-by-step with dose calculation examples.
          </p>
          <div className="flex flex-wrap gap-3">
            {['How to reconstitute peptides', 'Bacteriostatic water', 'Dose calculation', 'Subcutaneous injection', 'Peptide storage', 'Injection site rotation'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 sm:space-y-20">

        {/* Disclaimer */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-yellow-200 text-sm leading-relaxed">
            <strong>Research Use Only.</strong> This guide is for educational reference about research peptide protocols. Research peptides are not FDA-approved for human use. This is not medical advice. Consult a licensed healthcare provider before considering any injection protocol.
          </p>
        </div>

        {/* What you need */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">What You Need: Complete Supply List</h2>
          <div className="space-y-3">
            {supplies.map(s => (
              <div key={s.item} className="bg-[#111] border border-white/10 rounded-xl p-5 flex gap-4">
                <CheckCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">{s.item}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bacteriostatic water */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Bacteriostatic Water (Not Saline, Not Sterile Water)</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed">
            <p>
              The choice of solvent is not trivial. Bacteriostatic water (BW) contains 0.9% benzyl alcohol as a preservative, which inhibits bacterial growth and allows the reconstituted solution to be stored safely in the refrigerator for 28–60 days after opening. This multi-use property makes it the standard solvent for peptide research protocols where the vial will be accessed multiple times over weeks.
            </p>
            <p>
              Normal saline (0.9% sodium chloride) is a common alternative but has two drawbacks: it lacks a preservative (meaning the reconstituted solution should be used within 24 hours), and some peptides — particularly those with charged residues — can precipitate or aggregate in saline due to ionic interactions. If you encounter cloudiness when reconstituting in saline, switching to bacteriostatic water often resolves it.
            </p>
            <p>
              Sterile water for injection (SWFI) contains no preservatives and is intended for single-use reconstitution. It is appropriate when the entire vial will be used in one injection (uncommon with peptides) or when the user has a benzyl alcohol sensitivity. Plain tap water or distilled water should never be used — these are not sterile and introduce significant contamination risk.
            </p>
            <p>
              A small number of peptides (particularly hydrophobic ones like some GHRPs) may require a small amount of acetic acid (0.1–1%) to achieve initial dissolution before diluting with BW. This is noted on a per-peptide basis in research protocols and is uncommon for the most popular compounds.
            </p>
          </div>
        </section>

        {/* Reconstitution steps */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Reconstitution: Step-by-Step</h2>
          <div className="space-y-4">
            {reconSteps.map(step => (
              <div key={step.n} className="bg-[#111] border border-white/10 rounded-2xl p-6 flex gap-6">
                <div className="text-2xl sm:text-3xl font-black text-brand-500/30 shrink-0 w-12">{step.n}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dose calculation */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Dose Calculation: The Math Made Simple</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-8">
            <p>
              The most common source of dosing errors is not understanding that adding more water does not reduce the peptide — it changes the concentration. The formula is straightforward:
            </p>
            <div className="bg-[#111] border border-brand-500/20 rounded-xl p-5 my-4 font-mono text-sm">
              <p className="text-brand-400 font-bold mb-2">Concentration (mcg/mL) = Total peptide (mcg) ÷ Volume of BW added (mL)</p>
              <p className="text-gray-300">Volume to inject (mL) = Target dose (mcg) ÷ Concentration (mcg/mL)</p>
              <p className="text-gray-300 mt-2">Units on insulin syringe (U) = Volume to inject (mL) × 100</p>
            </div>
            <p>
              Insulin syringes are marked in &quot;units&quot; based on a U-100 insulin scale where 100 units = 1 mL. This means 1 unit = 0.01 mL. Knowing this conversion is essential: if your dose calculation says inject 0.08 mL, that is 8 units on the syringe. Always double-check this conversion before injecting.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {['Peptide', 'BW Added', 'Concentration', 'Target Dose', 'Syringe Draw'].map(h => (
                    <th key={h} className="text-left py-3 px-4 text-gray-400 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {doseCalcExamples.map((row, i) => (
                  <tr key={row.peptide} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="py-3 px-4 font-medium text-white">{row.peptide}</td>
                    <td className="py-3 px-4 text-gray-300">{row.bwAdded}</td>
                    <td className="py-3 px-4 text-gray-300">{row.conc}</td>
                    <td className="py-3 px-4 text-brand-400 font-medium">{row.targetDose}</td>
                    <td className="py-3 px-4 text-gray-300">{row.units}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Injection steps */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Subcutaneous Injection: Step-by-Step</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Subcutaneous (SC) injection delivers the peptide into the fat layer just below the skin. This is the preferred route for nearly all research peptides. The abdomen (2–4 inches from the navel) is the most popular site because of consistent fat coverage, easy access, and good absorption characteristics.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {injSteps.map((s, i) => (
              <div key={s.step} className="bg-[#111] border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-sm">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold">{s.step}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Site rotation */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Injection Site Rotation</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed mb-6">
            <p>
              Repeating injections at the same site causes localised lipodystrophy — changes in the fat tissue that result in lumps, divots, or hardened areas. This is the same problem encountered by diabetics who inject insulin at the same spot repeatedly. Systematic site rotation prevents this and also ensures consistent absorption, as heavily used sites can develop fibrous tissue that slows peptide uptake.
            </p>
            <p>
              A practical rotation system divides the abdomen into four quadrants (upper left, upper right, lower left, lower right) and rotates through them sequentially, staying at least 1 inch away from the previous injection site within each quadrant. Many protocols add the outer thighs as additional sites. For 2×/day injection protocols, use one quadrant for the morning injection and a different site for the evening.
            </p>
          </div>
          <div className="bg-[#111] border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-brand-400">8-Site Rotation Map (2 Injections/Day)</h3>
            <div className="grid grid-cols-4 gap-2 text-center text-sm">
              {[
                { site: 'Abd. Upper-R', day: 'Mon AM' },
                { site: 'Abd. Upper-L', day: 'Mon PM' },
                { site: 'Abd. Lower-R', day: 'Tue AM' },
                { site: 'Abd. Lower-L', day: 'Tue PM' },
                { site: 'R Thigh outer', day: 'Wed AM' },
                { site: 'L Thigh outer', day: 'Wed PM' },
                { site: 'Abd. Upper-R', day: 'Thu AM (rotated 1″)' },
                { site: 'Abd. Upper-L', day: 'Thu PM (rotated 1″)' },
              ].map(s => (
                <div key={s.site + s.day} className="bg-white/5 rounded-lg p-2.5">
                  <p className="text-white text-xs font-medium">{s.site}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{s.day}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Troubleshooting Common Issues</h2>
          <div className="space-y-4">
            {[
              {
                problem: 'Solution is cloudy after reconstitution',
                solution: 'Some peptides (especially TB-500, BPC-157 at high concentration) are naturally slightly turbid. Gently swirl for 2–3 minutes. If cloudiness persists, ensure you used bacteriostatic water, not saline. A very slight cloudiness that remains is generally acceptable. Visible particles or precipitate that don\'t dissolve may indicate contamination — discard the vial.',
              },
              {
                problem: 'Injection is painful or stinging',
                solution: 'Allow refrigerated solution to reach room temperature (10–15 min) before injecting — cold solutions sting more. Ensure the alcohol has fully evaporated from the skin (30 seconds). Inject more slowly. Check needle gauge — 29G is finer and less painful than 25G. Consider adding 0.1 mL lidocaine (if available) to the injection site SC first.',
              },
              {
                problem: 'Lump at injection site',
                solution: 'A small transient lump (bleb) immediately after injection is normal — it is the fluid displacing fat tissue and should resolve within 15–30 minutes. Persistent lumps indicate lipodystrophy from repeated same-site injection — improve rotation. Apply warm compress and gentle massage to help existing lumps resolve.',
              },
              {
                problem: 'Air bubbles in syringe',
                solution: 'Draw slightly more than your target dose, then tap the syringe with the needle pointing up and the plunger down. Bubbles will rise to the top. Push the plunger gently to expel only the air — stop when a drop of liquid appears at the needle tip, then adjust to your exact dose. Small bubbles (<0.1 mL air) in a SC injection are not dangerous but reduce dose accuracy.',
              },
              {
                problem: 'Peptide powder won\'t dissolve',
                solution: 'Ensure BW is being used, not plain sterile water. Try warming the BW to body temperature before adding. Swirl more gently for longer (some peptides take 5–10 minutes). If using acetic acid is recommended for the specific peptide (rare), add 1–2 drops of 0.1% acetic acid first, then dilute with BW.',
              },
            ].map(({ problem, solution }) => (
              <div key={problem} className="bg-[#111] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-2 text-yellow-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  {problem}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Storage */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Storage Guidelines</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                state: 'Lyophilised powder (sealed)',
                temp: '4°C (fridge)',
                duration: '12–24 months',
                notes: 'Room temp stable for 3–6 months. Keep sealed, dry, and away from UV light.',
              },
              {
                state: 'Reconstituted solution (BW)',
                temp: '4°C (fridge)',
                duration: '28–60 days',
                notes: 'Do NOT freeze. The benzyl alcohol in BW acts as preservative. Keep in original vial.',
              },
              {
                state: 'Reconstituted solution (sterile water)',
                temp: '4°C (fridge)',
                duration: '24 hours max',
                notes: 'No preservative — single-use reconstitution only. Discard after 24 hours.',
              },
            ].map(row => (
              <div key={row.state} className="bg-[#111] border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-brand-400 mb-2 text-sm">{row.state}</h3>
                <p className="text-2xl font-bold mb-1">{row.duration}</p>
                <p className="text-gray-500 text-sm mb-2">at {row.temp}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{row.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related guides */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'BPC-157 Complete Protocol', href: '/products/bpc157-10mg', desc: 'Dosing, timing, and injection sites for BPC-157.' },
              { title: 'GH Peptide Stack Guide', href: '/growth-hormone-peptides', desc: 'CJC-1295 + Ipamorelin stacking and dosing.' },
              { title: 'Semaglutide Protocol', href: '/semaglutide-protocol', desc: 'Titration schedule and injection timing for semaglutide.' },
            ].map(g => (
              <Link key={g.href} href={g.href} className="bg-[#111] border border-white/10 hover:border-brand-500/30 rounded-xl p-5 transition-colors group">
                <h3 className="font-semibold mb-2 group-hover:text-brand-400 transition-colors">{g.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{g.desc}</p>
                <span className="text-brand-400 text-sm flex items-center gap-1">Read guide <ChevronRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

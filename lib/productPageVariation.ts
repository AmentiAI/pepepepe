// Deterministic per-slug variation so every product page gets unique header
// phrasing AND a unique section order. Stable across builds (pure function of
// slug), but different between any two products — avoids Google clustering
// dynamic pages as duplicate-template content.

function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pickHeader(
  slug: string,
  section: string,
  name: string,
  pool: ((n: string) => string)[],
): string {
  const idx = hash(slug + '::' + section) % pool.length;
  return pool[idx](name);
}

export function shuffleSections<T extends { key: string }>(
  slug: string,
  sections: T[],
): T[] {
  const arr = [...sections];
  let h = hash(slug + '::order');
  for (let i = arr.length - 1; i > 0; i--) {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    h = h >>> 0;
    const j = h % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const OVERVIEW_HEADERS: ((n: string) => string)[] = [
  (n) => `What Is ${n}? — Overview & Benefits`,
  (n) => `${n}: Product Overview`,
  (n) => `About ${n} — Scope & Use Cases`,
  (n) => `${n} at a Glance`,
  (n) => `Understanding ${n}`,
  (n) => `${n}: Research Summary`,
  (n) => `Why Users Turn to ${n}`,
  (n) => `${n} Profile & Effects`,
  (n) => `Introducing ${n}`,
  (n) => `${n} Explained`,
];

export const BENEFITS_HEADERS: ((n: string) => string)[] = [
  (n) => `Key Benefits of ${n}`,
  (n) => `What ${n} Delivers`,
  (n) => `${n}: Outcomes to Expect`,
  (n) => `Main Advantages of ${n}`,
  (n) => `${n} Benefit Breakdown`,
  (n) => `Why Researchers Choose ${n}`,
  (n) => `${n} — Performance Highlights`,
  (n) => `What to Expect From ${n}`,
  (n) => `Effects & Outcomes of ${n}`,
  (n) => `Primary Benefits Associated With ${n}`,
];

export const PROTOCOLS_HEADERS: ((n: string) => string)[] = [
  (n) => `${n} Protocols & Dosing Schedules`,
  (n) => `How to Dose ${n}`,
  (n) => `Running a ${n} Protocol`,
  (n) => `${n}: Dosing Strategy`,
  (n) => `${n} Dosing Playbook`,
  (n) => `Protocol Design for ${n}`,
  (n) => `Structuring Your ${n} Cycle`,
  (n) => `${n} — Schedule & Dose Targets`,
  (n) => `Sample ${n} Protocols`,
  (n) => `Dosing Frameworks for ${n}`,
];

export const SAFETY_HEADERS: ((n: string) => string)[] = [
  (n) => `${n} Safety Profile & Side Effects`,
  (n) => `Is ${n} Safe? Side Effect Profile`,
  (n) => `Side Effects & Tolerability of ${n}`,
  (n) => `${n}: Safety & Risk Data`,
  (n) => `What to Watch For With ${n}`,
  (n) => `Tolerability of ${n}`,
  (n) => `Adverse Event Profile — ${n}`,
  (n) => `${n} Side Effects & Mitigation`,
  (n) => `Risk & Safety Considerations for ${n}`,
  (n) => `${n} — Known Side Effects`,
];

export const STACK_HEADERS: ((n: string) => string)[] = [
  (n) => `Stack ${n} With These Peptides`,
  (n) => `Synergies: Pairing ${n}`,
  (n) => `What Pairs Well With ${n}`,
  (n) => `Complementary Peptides for ${n}`,
  (n) => `${n} Stack Recommendations`,
  (n) => `Build Your Stack Around ${n}`,
  (n) => `Best Peptides to Combine With ${n}`,
  (n) => `${n} — Compound Pairings`,
  (n) => `Peptides That Complement ${n}`,
  (n) => `Stacking Options for ${n}`,
];

export const FAQ_HEADERS: ((n: string) => string)[] = [
  (n) => `Common Questions About ${n}`,
  (n) => `${n} — Frequently Asked Questions`,
  (n) => `${n}: What Buyers Ask Most`,
  (n) => `FAQ: ${n}`,
  (n) => `Answering Your ${n} Questions`,
  (n) => `${n} Buyer Q&A`,
  (n) => `Questions Buyers Ask About ${n}`,
  (n) => `What People Ask About ${n}`,
];

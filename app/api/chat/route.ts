import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { allProducts } from '@/lib/products';
import { allStacks } from '@/lib/stacks';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const catalog = allProducts.map(p => ({
  name: p.name,
  slug: p.slug,
  category: p.category,
  tags: p.tags,
  highlights: p.highlights,
}));

const stackCatalog = allStacks.map(s => ({
  name: s.name,
  slug: s.slug,
  goal: s.goal,
  difficulty: s.difficulty,
  tagline: s.tagline,
}));

const systemPrompt = `You are a knowledgeable peptide protocol advisor for MaxxingPeptides.com, a site dedicated to evidence-based research peptide protocols using research-grade products.

Your role:
- Help users identify the right peptides and protocol stacks for their specific goals (healing, fat loss, performance, anti-aging)
- Provide accurate, research-grounded guidance on mechanisms, dosing, reconstitution, and safety
- Recommend specific products from the catalog below and link to their pages
- Always emphasize that these are research peptides for educational information only, not medical advice
- Be direct and specific — users want protocol recommendations, not vague disclaimers

Current peptide catalog:
${JSON.stringify(catalog, null, 2)}

Current stacks:
${JSON.stringify(stackCatalog, null, 2)}

Guidance principles:
1. Ask clarifying questions if the user's goal (healing / fat loss / performance / anti-aging) is unclear
2. For injury/healing: recommend BPC-157 + TB-500 combo from the Healing & Recovery Stack (/stacks/healing-recovery-stack)
3. For fat loss beginners: recommend starting with Semaglutide via the Beginner Fat Loss Protocol (/stacks/beginner-fat-loss-protocol)
4. For fat loss advanced users: recommend Tirzepatide or Retatrutide based on their experience level
5. For performance/muscle: recommend CJC-1295/Ipamorelin + IGF-1 LR3 via GH Optimization Stack (/stacks/gh-optimization-stack)
6. For anti-aging/longevity: recommend Epithalon + GHK-CU + NAD+ via Longevity Stack (/stacks/longevity-anti-aging-stack)
7. Always explain that Bacteriostatic Water is required for all injectable peptides
8. Mention product pages at /products/[slug] and stack pages at /stacks/[slug]
9. Emphasize slow titration for GLP-1 class peptides (semaglutide, tirzepatide, retatrutide) to avoid GI side effects
10. Keep responses concise and actionable — 2-4 paragraphs maximum. Never recommend combining peptides with prescription medications without medical guidance.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.slice(-10), // keep last 10 messages for context
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const message = completion.choices[0]?.message?.content ?? 'I could not generate a response.';
    return NextResponse.json({ message });
  } catch (err) {
    console.error('[chat API error]', err);
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}

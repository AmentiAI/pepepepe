import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Peptide Blog — News, Comparisons & Research Explainers | MaxxingPeptides',
  description:
    'Plain-English articles on peptide therapy: what works, what\'s hype, how to choose, and how to stack. Top-of-funnel reading for anyone new to the space.',
};

const posts = [
  {
    slug: 'peptides-vs-sarms',
    title: 'Peptides vs. SARMs: What\'s Actually Different',
    summary:
      'Both get lumped together in gym circles, but mechanically they couldn\'t be further apart. A clear breakdown of when to pick which — and when neither is the answer.',
    category: 'Comparison',
    readTime: '7 min',
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    slug: 'are-peptides-safe',
    title: 'Are Peptides Safe? A Grounded Look at the Risks',
    summary:
      'Peptide therapy isn\'t risk-free, but the risks are usually not the ones the headlines talk about. Source quality, handling, dosing errors, and what the data actually says.',
    category: 'Safety',
    readTime: '9 min',
    badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    slug: 'how-long-until-peptides-work',
    title: 'How Long Until Peptides Actually Work?',
    summary:
      'Some peptides hit within days. Others take months and you barely notice the transition. Realistic timelines for healing, GH, fat loss, cognitive, and anti-aging peptides.',
    category: 'Timelines',
    readTime: '6 min',
    badge: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    slug: 'peptides-for-men-over-40',
    title: 'The Best Peptides for Men Over 40',
    summary:
      'After 40, GH output is down, recovery is slower, and joints start filing complaints. A practical stack for the decade where everything starts to matter more.',
    category: 'Demographics',
    readTime: '8 min',
    badge: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    slug: 'glp1-vs-tirzepatide-vs-retatrutide',
    title: 'GLP-1 vs. Tirzepatide vs. Retatrutide: Which Is Right for You?',
    summary:
      'Three generations of incretin agonists, three different receptor targets, three different weight-loss profiles. How to pick without guessing.',
    category: 'Comparison',
    readTime: '10 min',
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    slug: 'peptide-stacking-101',
    title: 'Peptide Stacking 101: How to Combine Without Wasting Money',
    summary:
      'Stacking isn\'t throwing five peptides into one syringe. It\'s sequencing compounds that don\'t compete for the same receptors — and knowing when one peptide does the job alone.',
    category: 'Strategy',
    readTime: '8 min',
    badge: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <AnimateIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 font-bold text-sm">The Blog</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Peptide research,<br />
            <span className="gradient-text">in plain English.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            The comparisons, safety questions, and timeline reality checks that
            most peptide sites won't publish. Start here before you buy anything.
          </p>
        </div>
      </AnimateIn>

      {/* Posts grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {posts.map((p, i) => (
          <AnimateIn key={p.slug} delay={0.05 + i * 0.04}>
            <Link
              href={`/blog/${p.slug}`}
              className="group block h-full p-6 sm:p-8 bg-[#111] border border-white/5 hover:border-white/10 rounded-2xl card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold border rounded-full px-2.5 py-1 ${p.badge}`}>
                  {p.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  {p.readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3 leading-tight group-hover:text-brand-300 transition-colors">
                {p.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">{p.summary}</p>
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 group-hover:gap-2.5 transition-all">
                Read article
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}

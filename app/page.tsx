import Link from 'next/link';
import { ArrowRight, FlaskConical, Zap, Shield, TrendingUp } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';
import { ProductCard } from '@/components/ProductCard';
import { allProducts } from '@/lib/products';
import { allStacks } from '@/lib/stacks';

const marqueeItems = [
  'BPC-157', 'TB-500', 'Semaglutide', 'Tirzepatide', 'Retatrutide',
  'CJC-1295/Ipamorelin', 'IGF-1 LR3', 'GHK-CU', 'Epithalon', 'NAD+',
  'SNAP-8', 'CagriSema', 'Bacteriostatic Water', 'BPC-157', 'TB-500',
];

const stats = [
  { value: '20', label: 'Premium peptides' },
  { value: '6', label: 'Protocol stacks' },
  { value: '4', label: 'Goal categories' },
  { value: '99.1%', label: 'Avg purity (Phiogen)' },
];

const goals = [
  { href: '/healing', label: 'Healing', icon: '🩹', desc: 'BPC-157, TB-500, GHK-CU', color: 'hover:border-emerald-500/20' },
  { href: '/fat-loss', label: 'Fat Loss', icon: '⚡', desc: 'Semaglutide, Tirzepatide, Retatrutide', color: 'hover:border-blue-500/20' },
  { href: '/performance', label: 'Performance', icon: '🏋️', desc: 'CJC-1295/Ipa, IGF-1 LR3', color: 'hover:border-amber-500/20' },
  { href: '/anti-aging', label: 'Anti-Aging', icon: '🧬', desc: 'Epithalon, GHK-CU, NAD+', color: 'hover:border-purple-500/20' },
];

export default function HomePage() {
  const topProducts = allProducts.filter(p => p.productType !== 'supply').slice(0, 4);
  const featuredStack = allStacks[0];

  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateIn>
                <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-8">
                  <FlaskConical className="w-4 h-4 text-brand-400" />
                  <span className="text-sm font-medium text-brand-300">Premium peptide protocols</span>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                  Peptide
                  <br />
                  <span className="gradient-text">protocols</span>
                  <br />
                  that work.
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-lg sm:text-2xl text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-xl">
                  Complete peptide protocols for healing, fat loss, performance, and longevity.
                  Research-grade Phiogen products. COA-verified purity. Real pricing.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/stacks"
                    className="flex items-center gap-2 px-6 py-3.5 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl transition-colors text-sm"
                  >
                    Explore Stacks
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/guide"
                    className="flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-colors text-sm"
                  >
                    Beginner Guide
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Hero product image grid */}
            <AnimateIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-3">
                {allProducts.filter(p => p.productType !== 'supply').slice(0, 4).map(p => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group bg-[#111] border border-white/5 hover:border-brand-500/20 rounded-2xl p-4 transition-colors card-hover"
                  >
                    <div className="relative h-32 sm:h-40 mb-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-1">
                      {p.name}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-brand-400 font-black">${p.price}</p>
                      <span className="text-xs text-gray-500 group-hover:text-brand-400 transition-colors">Buy →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────────────── */}
      <div className="border-y border-white/5 bg-black/40 py-4 overflow-hidden">
        <div className="flex">
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="text-base font-medium text-gray-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="bg-[#111] border border-white/5 rounded-2xl p-5 sm:p-8 text-center">
                <p className="text-4xl sm:text-5xl font-black text-brand-400 mb-2">{stat.value}</p>
                <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Goal tiles ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimateIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">What&apos;s your goal?</h2>
            <p className="text-lg text-gray-400">Find the right peptide protocol for your specific objective.</p>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {goals.map((goal, i) => (
            <AnimateIn key={goal.href} delay={i * 0.08}>
              <Link
                href={goal.href}
                className={`group flex flex-col items-center gap-2 sm:gap-3 bg-[#111] border border-white/5 ${goal.color} rounded-2xl p-5 sm:p-8 transition-all text-center card-hover`}
              >
                <span className="text-3xl sm:text-4xl">{goal.icon}</span>
                <p className="font-bold text-white text-base sm:text-lg group-hover:text-brand-300 transition-colors">{goal.label}</p>
                <p className="text-xs sm:text-sm text-gray-400">{goal.desc}</p>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Featured stack ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="bg-gradient-to-br from-brand-950/60 to-black border border-brand-500/20 rounded-3xl p-6 sm:p-8 md:p-6 sm:p-12">
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="inline-block text-xs font-semibold text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full px-3 py-1 mb-4">
                  Featured Stack
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">{featuredStack.name}</h2>
                <p className="text-gray-400 mb-4">{featuredStack.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredStack.highlights.map((h) => (
                    <span key={h} className="text-xs text-brand-300 bg-brand-500/10 rounded-lg px-2.5 py-1">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/stacks/${featuredStack.slug}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl text-sm transition-colors"
                  >
                    View Full Protocol <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/stacks"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white hover:bg-white/10 font-medium rounded-xl text-sm transition-colors"
                  >
                    All Stacks
                  </Link>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-4xl sm:text-5xl font-black text-brand-400">${featuredStack.cost.toFixed(0)}</p>
                <p className="text-gray-500 text-sm mt-1">Stack total / protocol</p>
                <p className="text-xs text-gray-600 mt-1">{featuredStack.difficulty} level</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Top products ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <AnimateIn>
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Buy Top Peptides</h2>
              <p className="text-base sm:text-lg text-gray-400">Research-grade · COA verified · Phiogen.</p>
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {topProducts.map((product, i) => (
            <AnimateIn key={product.slug} delay={i * 0.06}>
              <ProductCard product={product} large />
            </AnimateIn>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            View All Peptides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Why section ──────────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-[#111]/30 py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-12">
              Why MaxxingPeptides?
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6 text-brand-400" />,
                title: 'Real products, real images',
                desc: 'Every peptide in our catalog links directly to Phiogen with affiliate tracking. COA-verified purity — no placeholders.',
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-brand-400" />,
                title: 'Protocol-first approach',
                desc: 'Peptides work best in combination. We design protocols around synergistic mechanisms — covering local healing, systemic repair, anabolic signals, and anti-aging in single cohesive stacks.',
              },
              {
                icon: <Zap className="w-6 h-6 text-brand-400" />,
                title: 'AI-guided selection',
                desc: 'Our AI peptide advisor matches your goals to the right protocol — whether you\'re recovering from injury, pursuing fat loss, optimizing performance, or targeting longevity.',
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-brand-500/10 border border-brand-500/20 rounded-xl flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24 text-center">
        <AnimateIn>
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to build your stack?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Start with our beginner guide if you&apos;re new to peptides, or jump straight to the protocol stacks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/guide"
              className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-black font-bold rounded-xl transition-colors"
            >
              Start the Beginner Guide
            </Link>
            <Link
              href="/stacks"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-colors"
            >
              Browse All Stacks
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}

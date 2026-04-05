'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, FlaskConical, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/products', label: 'Peptides' },
  { href: '/stacks', label: 'Stacks' },
  { href: '/guide', label: 'Guide' },
  {
    label: 'Goals',
    children: [
      { href: '/healing', label: 'Healing & Recovery' },
      { href: '/fat-loss', label: 'Fat Loss' },
      { href: '/performance', label: 'Performance' },
      { href: '/anti-aging', label: 'Anti-Aging' },
      { href: '/cognitive', label: 'Cognitive & Nootropic' },
    ],
  },
  {
    label: 'Looks',
    children: [
      { href: '/looks-maxxing', label: 'Looks Maxxing Hub' },
      { href: '/skin', label: 'Skin & Collagen' },
      { href: '/hair', label: 'Hair Growth' },
      { href: '/tanning', label: 'Tanning Peptides' },
    ],
  },
  {
    label: 'Guides',
    children: [
      { href: '/what-are-peptides', label: 'What Are Peptides?' },
      { href: '/peptide-injection-guide', label: 'Injection Guide' },
      { href: '/growth-hormone-peptides', label: 'GH Peptides' },
      { href: '/muscle-building-peptides', label: 'Muscle Building' },
      { href: '/longevity-peptides', label: 'Longevity Peptides' },
      { href: '/semaglutide-protocol', label: 'Semaglutide Protocol' },
    ],
  },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // Track which mobile sections are expanded
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center group-hover:bg-brand-500/30 transition-colors">
              <FlaskConical className="w-4 h-4 text-brand-400" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Peptide<span className="text-brand-400">Protocols</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors ${
                      activeDropdown === link.label ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Invisible bridge to prevent gap-triggered close */}
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 w-full h-2" />
                  )}

                  {activeDropdown === link.label && (
                    <div className="absolute top-[calc(100%+4px)] left-0 min-w-[200px] bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/products"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              All Peptides
            </Link>
            <Link
              href="/stacks"
              className="px-4 py-2 bg-brand-500 hover:bg-brand-400 text-black font-semibold rounded-xl text-sm transition-colors"
            >
              View Stacks
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 py-3">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileExpanded === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="bg-white/3 border-l-2 border-brand-500/30 ml-3 mb-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                          className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 px-3 border-t border-white/5 mt-2">
              <Link
                href="/stacks"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3 bg-brand-500 hover:bg-brand-400 text-black font-semibold rounded-xl text-sm transition-colors"
              >
                View Stacks
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

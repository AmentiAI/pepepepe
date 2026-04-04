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
  const [open, setOpen] = useState(false);
  const [goalsOpen, setGoalsOpen] = useState(false);
  const [looksOpen, setLooksOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center group-hover:bg-brand-500/30 transition-colors">
              <FlaskConical className="w-4 h-4 text-brand-400" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Peptide<span className="text-brand-400">Protocols</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.label === 'Goals' ? setGoalsOpen(true) : link.label === 'Looks' ? setLooksOpen(true) : setGuidesOpen(true)}
                  onMouseLeave={() => link.label === 'Goals' ? setGoalsOpen(false) : link.label === 'Looks' ? setLooksOpen(false) : setGuidesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-md">
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {(link.label === 'Goals' ? goalsOpen : link.label === 'Looks' ? looksOpen : guidesOpen) && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                      {link.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
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
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/guide"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Beginner Guide
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
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/5 py-4 space-y-1">
            {navLinks.map(link =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {link.label}
                  </p>
                  {link.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2 px-3">
              <Link
                href="/stacks"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-2.5 bg-brand-500 hover:bg-brand-400 text-black font-semibold rounded-xl text-sm transition-colors"
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

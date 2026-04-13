import Link from 'next/link';
import { FlaskConical } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
                <FlaskConical className="w-4 h-4 text-brand-400" />
              </div>
              <span className="font-bold text-white">
                Peptide<span className="text-brand-400">Protocols</span>
              </span>
            </Link>
            <p className="text-base text-gray-400 leading-relaxed">
              Premium peptide protocols for healing, fat loss, performance, and longevity.
            </p>
          </div>

          {/* Peptides */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Peptides</h4>
            <ul className="space-y-2.5">
              {[
                ['BPC-157 10mg', '/products/bpc157-10mg'],
                ['TB-500 10mg', '/products/tb500-10mg'],
                ['Semaglutide 5mg', '/products/glp-1s-5mg'],
                ['Tirzepatide 15mg', '/products/glp-2t-15mg'],
                ['CJC-1295/Ipamorelin', '/products/cjc1295-ipamorelin'],
                ['GLP-1 Comparison →', '/compare'],
                ['View All →', '/products'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-base text-gray-400 hover:text-brand-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Goals */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Goals</h4>
            <ul className="space-y-2.5">
              {[
                ['Healing & Recovery', '/healing'],
                ['Fat Loss', '/fat-loss'],
                ['Performance', '/performance'],
                ['Anti-Aging', '/anti-aging'],
                ['Protocol Stacks', '/stacks'],
                ['Cognitive & Nootropic', '/cognitive'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-base text-gray-400 hover:text-brand-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Looks */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Looks Maxxing</h4>
            <ul className="space-y-2.5">
              {[
                ['Looks Maxxing Hub', '/looks-maxxing'],
                ['Skin & Collagen', '/skin'],
                ['Hair Growth', '/hair'],
                ['Tanning Peptides', '/tanning'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-base text-gray-400 hover:text-brand-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                ['What Are Peptides?', '/what-are-peptides'],
                ['Injection Guide', '/peptide-injection-guide'],
                ['GH Peptides Guide', '/growth-hormone-peptides'],
                ['Semaglutide Protocol', '/semaglutide-protocol'],
                ['Longevity Peptides', '/longevity-peptides'],
                ['Muscle Building', '/muscle-building-peptides'],
                ['Beginner Guide', '/guide'],
                ['FAQ', '/faq'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-base text-gray-400 hover:text-brand-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} MaxxingPeptides. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Research-grade · COA-verified peptides.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

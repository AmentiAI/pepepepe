'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ExternalLink, ArrowRight, Command } from 'lucide-react';
import { allProducts } from '@/lib/products';
import type { Product } from '@/lib/products';

const categoryColor: Record<string, string> = {
  healing: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'fat-loss': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  performance: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  'anti-aging': 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  supplies: 'text-gray-400 bg-gray-500/10 border-gray-500/20',
};

function score(product: Product, query: string): number {
  const q = query.toLowerCase();
  const name = product.name.toLowerCase();
  const tagline = product.tagline.toLowerCase();
  const tags = product.tags.join(' ').toLowerCase();
  const cat = product.category.toLowerCase();
  const highlights = product.highlights.join(' ').toLowerCase();

  if (name === q) return 100;
  if (name.startsWith(q)) return 80;
  if (name.includes(q)) return 60;
  if (tagline.includes(q)) return 40;
  if (tags.includes(q)) return 30;
  if (cat.includes(q)) return 20;
  if (highlights.includes(q)) return 10;
  return 0;
}

function search(query: string): Product[] {
  if (!query.trim()) return allProducts.slice(0, 6);
  const q = query.trim();
  return allProducts
    .map((p) => ({ product: p, score: score(p, q) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((r) => r.product);
}

const QUICK_SEARCHES = ['BPC-157', 'Semaglutide', 'Tirzepatide', 'GHK-CU', 'Epithalon', 'IGF-1', 'Selank', 'NAD+'];

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>(() => allProducts.slice(0, 6));
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Reset and focus on open
  useEffect(() => {
    if (open) {
      setQuery('');
      setResults(allProducts.slice(0, 6));
      setCursor(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Live search
  useEffect(() => {
    setResults(search(query));
    setCursor(0);
  }, [query]);

  // Scroll active result into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${cursor}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [cursor]);

  const navigate = useCallback((product: Product) => {
    router.push(`/products/${product.slug}`);
    onClose();
  }, [router, onClose]);

  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === 'Enter' && results[cursor]) {
      navigate(results[cursor]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [results, cursor, navigate, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
          <Search className="w-5 h-5 text-gray-500 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search peptides, goals, ingredients..."
            className="flex-1 bg-transparent text-white placeholder-gray-600 text-base outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-gray-600 hover:text-gray-400 transition-colors">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:flex items-center gap-1 text-xs text-gray-600 bg-white/5 border border-white/10 rounded-md px-2 py-1">
            esc
          </kbd>
        </div>

        {/* Quick searches (shown when no query) */}
        {!query && (
          <div className="px-4 pt-3 pb-2">
            <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">Popular searches</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_SEARCHES.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="text-xs text-gray-400 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-500/30 hover:text-brand-300 rounded-lg px-3 py-1.5 transition-all"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        <div ref={listRef} className="max-h-[420px] overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <Search className="w-8 h-8 text-gray-700 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">No peptides found for "{query}"</p>
              <p className="text-gray-700 text-sm mt-1">Try a different name, goal, or ingredient</p>
            </div>
          ) : (
            <div className="p-2">
              {query && (
                <p className="text-xs text-gray-600 px-2 py-1.5">
                  {results.length} result{results.length !== 1 ? 's' : ''}
                </p>
              )}
              {results.map((product, i) => {
                const catStyle = categoryColor[product.category] ?? 'text-gray-400 bg-white/5 border-white/10';
                const isActive = i === cursor;
                return (
                  <div
                    key={product.slug}
                    data-idx={i}
                    onClick={() => navigate(product)}
                    onMouseEnter={() => setCursor(i)}
                    className={`flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors ${
                      isActive ? 'bg-white/6 border border-white/8' : 'border border-transparent hover:bg-white/4'
                    }`}
                  >
                    {/* Image */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-1.5"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-white font-semibold text-sm truncate">{product.name}</p>
                        <span className={`text-xs font-medium border rounded-full px-2 py-0.5 capitalize shrink-0 ${catStyle}`}>
                          {product.category.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs truncate">{product.tagline}</p>
                    </div>

                    {/* Price + action */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-brand-400 font-black text-base">${product.price}</span>
                      <div className="flex items-center gap-1.5">
                        <a
                          href={`/go/${product.slug}`}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          onClick={(e) => { e.stopPropagation(); onClose(); }}
                          className="flex items-center gap-1 text-xs font-bold bg-brand-500 hover:bg-brand-400 text-black px-2.5 py-1.5 rounded-lg transition-colors"
                        >
                          Buy
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <ArrowRight className={`w-4 h-4 transition-colors ${isActive ? 'text-brand-400' : 'text-gray-700'}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span className="flex items-center gap-1"><kbd className="bg-white/5 border border-white/10 rounded px-1.5 py-0.5">↑↓</kbd> navigate</span>
            <span className="flex items-center gap-1"><kbd className="bg-white/5 border border-white/10 rounded px-1.5 py-0.5">↵</kbd> open guide</span>
            <span className="flex items-center gap-1"><kbd className="bg-white/5 border border-white/10 rounded px-1.5 py-0.5">esc</kbd> close</span>
          </div>
          <p className="text-xs text-gray-700">{allProducts.length} peptides</p>
        </div>
      </div>
    </div>
  );
}

// Trigger button — drop this anywhere in the nav
export function SearchTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/8 border border-white/8 hover:border-brand-500/30 rounded-xl text-sm text-gray-500 hover:text-gray-300 transition-all group"
    >
      <Search className="w-4 h-4" />
      <span className="hidden sm:inline">Search peptides...</span>
      <kbd className="hidden lg:flex items-center gap-0.5 text-[10px] text-gray-700 group-hover:text-gray-500 bg-white/5 border border-white/8 rounded px-1.5 py-0.5 transition-colors">
        <Command className="w-2.5 h-2.5" />K
      </kbd>
    </button>
  );
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getLinksFor } from '@/lib/internalLinks';

interface Props {
  pageKey: string;
}

export function RelatedLinks({ pageKey }: Props) {
  const links = getLinksFor(pageKey);
  if (!links.length) return null;

  return (
    <div className="mt-16 border-t border-white/5 pt-12">
      <h2 className="text-2xl font-black text-white mb-6">Related Protocols</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-start gap-4 p-5 bg-white/3 hover:bg-white/6 border border-white/5 hover:border-brand-500/30 rounded-2xl transition-all"
          >
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-white group-hover:text-brand-300 transition-colors mb-1">
                {link.label}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{link.desc}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-brand-400 transition-colors shrink-0 mt-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}

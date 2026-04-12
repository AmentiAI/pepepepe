import { NextRequest, NextResponse } from 'next/server';

const BASE = 'https://phiogen.is';
const REF = '?ref=PEPS';

// Maps internal /go/[slug] → Phiogen product page paths
const PRODUCT_MAP: Record<string, string> = {
  // Legacy Apollo slugs → Phiogen equivalents
  'bpc157-10mg': '/products/bpc-157-10mg',
  'tb500-10mg': '/products/tb-500-thymosin-beta-4-10mg',
  'glp-1s-5mg': '/products/semaglutide-3mg',
  'glp-1s-10mg': '/products/semaglutide-6mg',
  'glp-1s-15mg': '/products/semaglutide-12mg',
  'glp-2t-15mg': '/products/tirzepatide-15mg',
  'glp-2t-30mg': '/products/tirzepatide-30mg',
  'glp-2t-60mg': '/products/tirzepatide-60mg',
  'glp-3r-10mg': '/products/retatrutide-10mg',
  'glp-3r-15mg': '/products/retatrutide-15mg',
  'glp-3r-30mg': '/products/retatrutide-30mg',
  'glp-3r-60mg': '/products/retatrutide-30mg',
  'glp-1cglp-1s-5mg': '/products/cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg',
  'cjc1295-ipamorelin': '/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg',
  'igf-1lr3': '/products/igf-1-lr3-1mg',
  'ghk-cu': '/products/ghk-cu-50mg',
  'epithalon-50mg': '/products/epitalon-50mg',
  'nad': '/products/nad-500mg',
  'snap-8': '/products/snap-8-10mg',
  'bacteriostatic-water-reconstitution-solution-10ml': '/products/bacteriostatic-water-30ml',
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const path = PRODUCT_MAP[slug] ?? '/products';
  return NextResponse.redirect(`${BASE}${path}${REF}`, { status: 302 });
}

import { NextRequest, NextResponse } from 'next/server';

const BASE = 'https://apollopeptidesciences.com';
const AFFILIATE = '?rfsn=9016964.3f1b1e';

// Maps internal /go/[slug] → Apollo product page paths
const PRODUCT_MAP: Record<string, string> = {
  'bpc157-10mg': '/product/bpc157-10mg/',
  'tb500-10mg': '/product/tb500-10mg/',
  'glp-1s-5mg': '/product/glp-1s-5mg/',
  'glp-1s-10mg': '/product/glp-1s-10mg/',
  'glp-1s-15mg': '/product/glp-1s-15mg/',
  'glp-2t-15mg': '/product/glp-2t-15m/',
  'glp-2t-30mg': '/product/glp-2t-30mg/',
  'glp-2t-60mg': '/product/glp-2-t-60mg/',
  'glp-3r-10mg': '/product/glp-3r-10mg/',
  'glp-3r-15mg': '/product/glp-3r-15mg/',
  'glp-3r-30mg': '/product/glp-3-r-30mg/',
  'glp-3r-60mg': '/product/glp-3-r-60mg/',
  'glp-1cglp-1s-5mg': '/product/glp-1cglp-1s-5mg/',
  'cjc1295-ipamorelin': '/product/cjc1295-ipamorelin/',
  'igf-1lr3': '/product/igf-1lr3/',
  'ghk-cu': '/product/ghk-cu/',
  'epithalon-50mg': '/product/epithalon-50mg/',
  'nad': '/product/nad/',
  'snap-8': '/product/snap-8/',
  'bacteriostatic-water-reconstitution-solution-10ml': '/product/bacteriostatic-water-reconstitution-solution-10ml/',
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const path = PRODUCT_MAP[slug] ?? '/';
  return NextResponse.redirect(`${BASE}${path}${AFFILIATE}`, { status: 302 });
}

import { NextResponse } from 'next/server';

// Market cap starts at 0 - will update when token launches
const marketCap = 0;

export async function GET() {
  // When your token launches, replace this with real data from:
  // - DEX APIs (Raydium, Jupiter, etc.)
  // - Blockchain indexers (Moralis, Covalent, etc.)
  // - Your smart contract

  return NextResponse.json({
    marketCap: marketCap,
    targetMarketCap: 2500000, // $2,5M target
    progress: (marketCap / 2500000) * 100,
    updatedAt: new Date().toISOString(),
  });
}

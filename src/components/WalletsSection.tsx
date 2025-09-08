"use client";

import { useEffect, useState } from "react";
import WalletCard from "./WalletCard";

interface Wallet {
  id: string;
  name: string;
  solAmount: number;
  seedPhrase?: string;
  password?: string;
  isRevealed: boolean;
  progress: number;
}

export default function WalletsSection() {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [marketCap, setMarketCap] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch market cap
        const statsRes = await fetch('/api/stats');
        const statsData = await statsRes.json();
        const currentMarketCap = statsData.marketCap || 0;
        setMarketCap(currentMarketCap);

        // Fetch wallets
        const walletsRes = await fetch(`/api/wallets?marketCap=${currentMarketCap}`);
        const walletsData = await walletsRes.json();
        setWallets(walletsData.wallets);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const progress = Math.min((marketCap / 2500000) * 100, 100);

  if (loading) {
    return (
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Loading Wallets...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="wallets" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] bg-clip-text text-transparent">
            100 Solana Wallets
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            Total Prize Pool: 2,500 SOL
          </p>
          <p className="text-gray-400 mb-6">
            {marketCap >= 2500000
              ? "🎉 All wallets are unlocked! Claim your 25 SOL!"
              : `Wallets unlock at $2.5M market cap • Current: $${marketCap.toLocaleString()}`
            }
          </p>

          {/* Overall Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full progress-bar transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-sm mt-2 text-gray-400">
              <span>$0</span>
              <span className="text-white font-bold">${marketCap.toLocaleString()}</span>
              <span>$2,500,000</span>
            </div>
          </div>
        </div>

        {/* Wallets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {wallets.map((wallet) => (
            <WalletCard key={wallet.id} {...wallet} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import SolanaLogo from "./SolanaLogo";

export default function Hero() {
  const [marketCap, setMarketCap] = useState(0);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        const data = await response.json();
        setMarketCap(data.marketCap || 0);
        setIsLive(data.marketCap > 0);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const formatMarketCap = (cap: number) => {
    if (cap === 0) return "$0";
    if (cap < 1000000) return `$${(cap / 1000).toFixed(1)}K`;
    return `$${(cap / 1000000).toFixed(2)}M`;
  };

  const progress = Math.min((marketCap / 2500000) * 100, 100);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FFA3]/20 to-[#DC1FFF]/20 rounded-full backdrop-blur-sm">
              <SolanaLogo className="w-5 h-5" />
              <span className="text-sm font-semibold">Powered by Solana</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold">
              Win
              <span className="block bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] bg-clip-text text-transparent">
                Solana Wallets
              </span>
              with $PICU
            </h1>

            <p className="text-xl text-gray-300">
              {isLive
                ? `100 wallets containing 25 SOL each will unlock at $2,5M market cap. Current progress: ${progress.toFixed(1)}%`
                : "Token launching soon! 100 Solana wallets with 2,500 SOL total prize pool awaiting."
              }
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="stat-card p-4 rounded-xl text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] bg-clip-text text-transparent">
                  100
                </div>
                <div className="text-sm text-gray-400">Wallets</div>
              </div>
              <div className="stat-card p-4 rounded-xl text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#DC1FFF] to-[#00FFA3] bg-clip-text text-transparent">
                  25
                </div>
                <div className="text-sm text-gray-400">SOL Each</div>
              </div>
              <div className="stat-card p-4 rounded-xl text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] bg-clip-text text-transparent">
                  $2,5M
                </div>
                <div className="text-sm text-gray-400">Target</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] text-black font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                disabled={!isLive}
              >
                {isLive ? "Buy $PICU" : "Launching Soon"}
              </button>
              <a
                href="#wallets"
                className="px-8 py-4 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-center"
              >
                View Wallets
              </a>
            </div>
          </div>

          {/* Right Content - Market Cap Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="stat-card p-8 rounded-2xl backdrop-blur-sm max-w-sm w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Market Cap</h3>
                <span className={`flex items-center gap-1 text-sm ${isLive ? 'text-green-400' : 'text-yellow-400'}`}>
                  <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-400' : 'bg-yellow-400'} ${isLive ? 'animate-pulse' : ''}`} />
                  {isLive ? 'Live' : 'Pre-Launch'}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] bg-clip-text text-transparent">
                    {formatMarketCap(marketCap)}
                  </div>
                  <div className="text-sm text-gray-400">
                    Target: $2,500,000
                  </div>
                </div>

                <div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full progress-bar transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-2 text-center">
                    {progress.toFixed(1)}% to unlock all wallets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

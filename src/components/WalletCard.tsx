"use client";

import { useState } from "react";
import SolanaLogo from "./SolanaLogo";

interface WalletCardProps {
  id: string;
  name: string;
  solAmount: number;
  seedPhrase?: string;
  password?: string;
  isRevealed: boolean;
  progress: number;
}

export default function WalletCard({
  id,
  name,
  solAmount,
  seedPhrase,
  password,
  isRevealed,
  progress,
}: WalletCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="wallet-card rounded-xl overflow-hidden">
      {/* Header with Solana branding */}
      <div className="solana-gradient p-3">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <SolanaLogo className="w-5 h-5" />
            <span className="font-semibold text-sm">SOLANA</span>
          </div>
          <span className="font-bold">{solAmount} SOL</span>
        </div>
      </div>

      {/* Wallet Visual */}
      <div className="p-6 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <SolanaLogo className="w-16 h-16 mb-3" />
        <h3 className="font-semibold">{name}</h3>
      </div>

      {/* Progress Bar */}
      <div className="px-4 pb-4">
        <div className="mb-2">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">Progress</span>
            <span>{progress.toFixed(1)}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full progress-bar transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Status */}
        {!isRevealed ? (
          <div className="text-center py-3">
            <div className="text-xs text-gray-400">
              🔒 Unlocks at $2.5M market cap
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {!showDetails ? (
              <button
                onClick={() => setShowDetails(true)}
                className="w-full py-2 px-4 bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Reveal Access
              </button>
            ) : (
              <div className="space-y-2">
                <div>
                  <label className="text-xs text-gray-400">Seed Phrase</label>
                  <div className="seed-phrase text-xs break-all">
                    {seedPhrase}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400">Password</label>
                  <div className="password-field text-xs">
                    {password}
                  </div>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="w-full py-1 text-xs text-gray-400 hover:text-gray-300"
                >
                  Hide
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

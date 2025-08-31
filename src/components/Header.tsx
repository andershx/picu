"use client";

import SolanaLogo from "./SolanaLogo";
import PicuLogo from "./PicuLogo";
import { useWallet } from "../contexts/WalletContext";

export default function Header() {
  const { connected, publicKey, connecting, connect, disconnect } = useWallet();

  const handleWalletClick = () => {
    if (connected) {
      disconnect();
    } else {
      connect();
    }
  };

  const formatAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Picu Logo */}
          <PicuLogo />

          <nav className="flex items-center gap-6">
            <a href="#wallets" className="text-gray-300 hover:text-white transition-colors">
              View Wallets
            </a>
            <button
              onClick={handleWalletClick}
              disabled={connecting}
              className={`px-6 py-2 border rounded-lg transition-all duration-300 ${
                connected
                  ? 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border-cyan-500/50 text-cyan-400 hover:from-violet-500/30 hover:to-cyan-500/30'
                  : 'border-[#00FFA3]/30 text-[#00FFA3] hover:bg-[#00FFA3]/10'
              } ${connecting ? 'opacity-50 cursor-wait' : ''}`}
            >
              {connecting ? (
                'Connecting...'
              ) : connected ? (
                <>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    {formatAddress(publicKey || '')}
                  </span>
                </>
              ) : (
                'Connect Wallet'
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";

import SolanaLogo from "./SolanaLogo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Modern futuristic PICU text logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-black tracking-wider relative">
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-[#00FFA3] bg-clip-text text-transparent">
                PICU
              </span>
              {/* Futuristic underline effect */}
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 via-blue-400 to-[#00FFA3] opacity-60"></div>
              <div className="absolute -bottom-2 left-2 right-2 h-[1px] bg-gradient-to-r from-violet-400 via-blue-400 to-[#00FFA3] opacity-30"></div>
            </h1>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#wallets" className="text-gray-300 hover:text-white transition-colors">
              View Wallets
            </a>
            <button className="px-6 py-2 border border-[#00FFA3]/30 text-[#00FFA3] rounded-lg hover:bg-[#00FFA3]/10 transition-colors">
              Connect Wallet
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

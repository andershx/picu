"use client";

import { useEffect, useState } from 'react';
import { useWallet } from '../contexts/WalletContext';

export default function WalletToast() {
  const { connected, publicKey } = useWallet();
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [prevConnected, setPrevConnected] = useState(connected);

  useEffect(() => {
    if (prevConnected !== connected) {
      if (connected) {
        setMessage(`Wallet connected: ${publicKey?.slice(0, 4)}...${publicKey?.slice(-4)}`);
        setShowToast(true);
      } else if (prevConnected) {
        setMessage('Wallet disconnected');
        setShowToast(true);
      }
      setPrevConnected(connected);

      // Hide toast after 3 seconds
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [connected, publicKey, prevConnected]);

  if (!showToast) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 animate-slide-in ${showToast ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className={`px-6 py-3 rounded-lg backdrop-blur-md border ${
        connected
          ? 'bg-green-500/20 border-green-500/50 text-green-400'
          : 'bg-red-500/20 border-red-500/50 text-red-400'
      }`}>
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${connected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></span>
          {message}
        </div>
      </div>
    </div>
  );
}

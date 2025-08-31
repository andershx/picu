"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface PhantomWallet {
  publicKey: {
    toString(): string;
  };
  isConnected: boolean;
  connect(): Promise<{ publicKey: { toString(): string } }>;
  disconnect(): Promise<void>;
  on(event: string, callback: (data: { toString(): string } | null) => void): void;
  off(event: string, callback: (data: { toString(): string } | null) => void): void;
}

interface WalletContextType {
  wallet: PhantomWallet | null;
  connected: boolean;
  publicKey: string | null;
  connecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType>({
  wallet: null,
  connected: false,
  publicKey: null,
  connecting: false,
  connect: async () => {},
  disconnect: async () => {},
});

export const useWallet = () => useContext(WalletContext);

declare global {
  interface Window {
    solana?: PhantomWallet;
  }
}

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<PhantomWallet | null>(null);
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    const checkWallet = async () => {
      if (typeof window !== 'undefined' && window.solana) {
        const phantom = window.solana;
        setWallet(phantom);

        // Check if already connected
        if (phantom.isConnected) {
          setConnected(true);
          setPublicKey(phantom.publicKey.toString());
        }

        // Listen for account changes
        const handleAccountChange = (publicKey: { toString(): string } | null) => {
          if (publicKey) {
            setPublicKey(publicKey.toString());
            setConnected(true);
          } else {
            setPublicKey(null);
            setConnected(false);
          }
        };

        phantom.on('accountChanged', handleAccountChange);

        return () => {
          phantom.off('accountChanged', handleAccountChange);
        };
      }
    };

    // Check for Phantom after a delay to ensure window is loaded
    const timeout = setTimeout(checkWallet, 100);
    return () => clearTimeout(timeout);
  }, []);

  const connect = async () => {
    if (!wallet) {
      window.open('https://phantom.app/', '_blank');
      return;
    }

    try {
      setConnecting(true);
      const resp = await wallet.connect();
      setPublicKey(resp.publicKey.toString());
      setConnected(true);
    } catch (err) {
      console.error('Failed to connect wallet:', err);
    } finally {
      setConnecting(false);
    }
  };

  const disconnect = async () => {
    if (wallet) {
      try {
        await wallet.disconnect();
        setPublicKey(null);
        setConnected(false);
      } catch (err) {
        console.error('Failed to disconnect wallet:', err);
      }
    }
  };

  return (
    <WalletContext.Provider value={{
      wallet,
      connected,
      publicKey,
      connecting,
      connect,
      disconnect,
    }}>
      {children}
    </WalletContext.Provider>
  );
}

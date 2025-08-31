"use client";

import { ReactNode } from "react";
import { WalletProvider } from "../contexts/WalletContext";

interface ClientBodyProps {
  children: ReactNode;
  className?: string;
}

export default function ClientBody({ children, className }: ClientBodyProps) {
  return (
    <body className={`${className} antialiased`}>
      <WalletProvider>
        {children}
      </WalletProvider>
    </body>
  );
}

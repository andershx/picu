import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PICU - Win 100 Solana Wallets",
  description: "100 Solana wallets with 25 SOL each unlock at $2,5M market cap. Join the $PICU revolution!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <ClientBody className={inter.className}>{children}</ClientBody>
    </html>
  );
}

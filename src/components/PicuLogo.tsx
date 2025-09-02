"use client";

import Image from "next/image";

export default function PicuLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`group ${className}`}>
      <Image
        src="/logo.png" // from /public/logo.png
        alt="Logo"
        width={64}
        height={64}
        className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 cursor-pointer"
      />
    </div>
  );
}

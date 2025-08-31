"use client";

export default function AbstractBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b1e] via-[#141428] to-[#1a1a3e]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-violet-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

      {/* Solana gradient accents */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00FFA3]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#DC1FFF]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="animate-float absolute top-[10%] left-[10%] w-2 h-2 bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] rounded-full opacity-60" />
        <div className="animate-float absolute top-[20%] right-[20%] w-3 h-3 bg-gradient-to-r from-[#DC1FFF] to-[#00FFA3] rounded-full opacity-50" style={{ animationDelay: '2s' }} />
        <div className="animate-float absolute bottom-[30%] left-[30%] w-2 h-2 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full opacity-40" style={{ animationDelay: '4s' }} />
        <div className="animate-float absolute bottom-[20%] right-[40%] w-2 h-2 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full opacity-50" style={{ animationDelay: '1s' }} />
        <div className="animate-float absolute top-[50%] right-[10%] w-3 h-3 bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] rounded-full opacity-40" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}

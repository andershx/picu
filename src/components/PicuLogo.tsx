"use client";

export default function PicuLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`group ${className}`}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 1024 1024"
        className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="picuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="25%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>

        {/* P shape - left side */}
        <rect x="128" y="128" width="128" height="768" fill="url(#picuGradient)" />
        <rect x="256" y="128" width="128" height="128" fill="url(#picuGradient)" />
        <rect x="384" y="128" width="128" height="128" fill="url(#picuGradient)" />
        <rect x="256" y="384" width="128" height="128" fill="url(#picuGradient)" />
        <rect x="384" y="384" width="128" height="128" fill="url(#picuGradient)" />

        {/* U shape - right side */}
        <rect x="640" y="128" width="128" height="640" fill="url(#picuGradient)" />
        <rect x="768" y="128" width="128" height="640" fill="url(#picuGradient)" />
        <rect x="640" y="768" width="256" height="128" fill="url(#picuGradient)" />

        {/* Pixelated edges for retro effect */}
        <rect x="90" y="256" width="38" height="38" fill="url(#picuGradient)" opacity="0.7" />
        <rect x="90" y="512" width="38" height="38" fill="url(#picuGradient)" opacity="0.7" />
        <rect x="512" y="256" width="38" height="38" fill="url(#picuGradient)" opacity="0.5" />
        <rect x="896" y="256" width="38" height="38" fill="url(#picuGradient)" opacity="0.7" />
        <rect x="896" y="512" width="38" height="38" fill="url(#picuGradient)" opacity="0.7" />

        {/* Additional pixel details */}
        <rect x="180" y="90" width="64" height="38" fill="url(#picuGradient)" opacity="0.6" />
        <rect x="320" y="90" width="64" height="38" fill="url(#picuGradient)" opacity="0.6" />
        <rect x="690" y="90" width="64" height="38" fill="url(#picuGradient)" opacity="0.6" />
        <rect x="830" y="90" width="64" height="38" fill="url(#picuGradient)" opacity="0.6" />
        <rect x="690" y="896" width="64" height="38" fill="url(#picuGradient)" opacity="0.6" />
        <rect x="830" y="896" width="64" height="38" fill="url(#picuGradient)" opacity="0.6" />
      </svg>
    </div>
  );
}

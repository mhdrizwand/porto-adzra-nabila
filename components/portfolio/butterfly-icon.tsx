"use client"

export function ButterflyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left wing */}
      <path
        d="M60 50 C45 20, 10 10, 15 40 C18 55, 35 60, 60 50"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M60 50 C50 55, 20 75, 25 55 C28 42, 45 38, 60 50"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Right wing */}
      <path
        d="M60 50 C75 20, 110 10, 105 40 C102 55, 85 60, 60 50"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M60 50 C70 55, 100 75, 95 55 C92 42, 75 38, 60 50"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Body */}
      <line x1="60" y1="30" x2="60" y2="70" stroke="currentColor" strokeWidth="1.5" />
      {/* Antennae */}
      <path d="M60 32 C55 20, 48 15, 45 10" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M60 32 C65 20, 72 15, 75 10" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="45" cy="10" r="2" fill="currentColor" fillOpacity="0.5" />
      <circle cx="75" cy="10" r="2" fill="currentColor" fillOpacity="0.5" />
      {/* Wing veins */}
      <path d="M60 50 C50 35, 30 25, 25 35" stroke="currentColor" strokeWidth="0.5" fill="none" strokeOpacity="0.5" />
      <path d="M60 50 C70 35, 90 25, 95 35" stroke="currentColor" strokeWidth="0.5" fill="none" strokeOpacity="0.5" />
    </svg>
  )
}

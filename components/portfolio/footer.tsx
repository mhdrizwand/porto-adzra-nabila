"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-[var(--font-poppins)] font-light">
            &copy; {new Date().getFullYear()} Adzra Nabila. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-[var(--font-poppins)] font-light flex items-center gap-1.5">
            Made with <Heart size={14} className="text-primary fill-primary" /> by Adzra Nabila
          </p>
        </div>
      </div>
    </footer>
  )
}

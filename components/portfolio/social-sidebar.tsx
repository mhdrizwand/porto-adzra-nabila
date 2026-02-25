"use client";

import { Instagram, Phone, Facebook, Mail } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/adzranabila_",
    label: "Instagram",
  },
  { icon: Phone, href: "https://wa.me/6282160396952", label: "WhatsApp" },
  { icon: Mail, href: "mailto:adzran55@gmail.com", label: "Email" },
];

export function SocialSidebar() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
        >
          <Icon size={20} strokeWidth={1.5} />
        </a>
      ))}

      <div className="w-px h-12 bg-border my-2" />

      <span className="vertical-text text-xs tracking-widest text-muted-foreground font-[var(--font-poppins)]">
        NABILA
      </span>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative py-20 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
          Contact
        </h2>
        <div className="w-20 h-1 bg-primary/40 rounded-full mb-12" />

        <div className="glass-card rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-serif">
            {"Let's Connect"}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground font-sans font-light leading-relaxed mb-10 max-w-2xl">
             
          </p>

          {/* Contact items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <a
              href="mailto:adzran55@gmail.com"
              className="glass-card-strong flex items-center gap-4 p-5 rounded-2xl group hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-sans">Email</p>
                <p className="text-sm text-foreground font-sans font-medium">
                  adzran55@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://instagram.com/adzranabila_"
              className="glass-card-strong flex items-center gap-4 p-5 rounded-2xl group hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Instagram size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-sans">
                  Instagram
                </p>
                <p className="text-sm text-foreground font-sans font-medium">
                  @adzranabila_
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/6282160396952"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-strong flex items-center gap-4 p-5 rounded-2xl group hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageCircle size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-sans">
                  WhatsApp
                </p>
                <p className="text-sm text-foreground font-sans font-medium">
                  +62821-6039-6952
                </p>
              </div>
            </a>

            <div className="glass-card-strong flex items-center gap-4 p-5 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-sans">
                  Location
                </p>
                <p className="text-sm text-foreground font-sans font-medium">
                  Aceh, Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="text-sm text-muted-foreground font-sans mb-4">
              Follow me on social media
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-12 h-12 rounded-2xl glass-card-strong flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

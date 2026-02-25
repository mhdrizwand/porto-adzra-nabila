"use client";

import { ButterflyIcon } from "./butterfly-icon";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 relative z-10">
            {/* Butterflies */}
            <div className="relative">
              <ButterflyIcon className="w-16 h-16 md:w-24 md:h-24 text-primary/60 absolute -top-4 left-20 md:left-32 butterfly-animate" />
              <ButterflyIcon className="w-10 h-10 md:w-14 md:h-14 text-primary/40 absolute top-2 left-8 md:left-16 butterfly-animate [animation-delay:1s]" />
            </div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-[0.85] text-primary/30 select-none mt-16">
              <span className="italic">Porto</span>
              <br />
              <span className="ml-8 lg:ml-16 italic">Folio</span>
            </h1>

            <div className="mt-8 lg:mt-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-foreground">
                ADZRA NABILA
              </h2>
              <p className="mt-3 text-base md:text-lg text-muted-foreground font-[var(--font-poppins)] font-light">
                fresh graduate | Pendidikan Geografi
              </p>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex-shrink-0 relative z-10">
            <div className="photo-frame-glass w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[520px]">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-secondary">
                <img
                  src="profil.jpeg"
                  alt="Adzra Nabila - Fresh Graduate"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}

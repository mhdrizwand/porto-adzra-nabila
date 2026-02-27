"use client";

import { useEffect, useRef, useState } from "react";
import {
  User,
  MapPin,
  Calendar,
  Code,
  Palette,
  Globe,
  BookOpen,
  Users,
  Heart,
  MessageCircle,
  Lightbulb,
  Target,
  Handshake,
} from "lucide-react";

const hardSkills = [
  { name: "Content Creation", icon: Code },
  { name: "Microsoft Office", icon: Globe },
  { name: "Copywriting & Caption Writing", icon: Code },
  { name: "Customer Service", icon: Palette },
  { name: "Penulisan Ilmiah", icon: BookOpen },
  { name: "Kurikulum & RPP", icon: BookOpen },
];

const softSkills = [
  { name: "Pelayanan publik", icon: Users },
  { name: "Komunikasi", icon: MessageCircle },
  { name: "Kerja Tim", icon: Handshake },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Manajemen Waktu", icon: Target },
  { name: "Empati", icon: Heart },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-20 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
          About Me
        </h2>
        <div className="w-20 h-1 bg-primary/40 rounded-full mb-12" />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Photo */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="photo-frame-glass w-[260px] h-[320px] md:w-[300px] md:h-[380px]">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-secondary flex items-center justify-center">
                <img
                  src="profil-2.jpeg"
                  alt="Foto Profil"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <div className="glass-card rounded-3xl p-8 md:p-10 mb-8">
              <p className="text-base md:text-lg leading-relaxed text-foreground font-sans font-light mb-6">
                Lulusan S1 Pendidikan Geografi dengan minat dan pengalaman kuat
                di bidang Content Creation. Berpengalaman sebagai Customer
                Service dan tenaga pendidik yang terbiasa mengelola informasi
                secara kreatif, informatif, dan terstruktur untuk berbagai
                kebutuhan audiens Memiliki kemampuan dalam produksi konten
                edukatif dan informatif, pengelolaan media digital, serta
                penyusunan materi. Terbiasa bekerja secara teliti, sistematis,
                dan adaptif terhadap tren digital. Siap berkontribusi dalam
                pengembangan konten yang menarik, komunikatif, dan berdampak
                positif.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                  <MapPin size={16} className="text-primary" />
                  <span>Aceh, Indonesia</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                  <Calendar size={16} className="text-primary" />
                  <span>Fresh Graduate</span>
                </div>
              </div>
            </div>

            {/* Hard Skills */}
            <div className="glass-card rounded-3xl p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code size={20} className="text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif">
                  Hard Skills
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hardSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="glass-card-strong flex items-center gap-3 px-4 py-3 rounded-2xl hover:scale-[1.03] transition-transform duration-300"
                    >
                      <Icon size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground font-sans font-medium">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart size={20} className="text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif">
                  Soft Skills
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {softSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="glass-card-strong flex items-center gap-3 px-4 py-3 rounded-2xl hover:scale-[1.03] transition-transform duration-300"
                    >
                      <Icon size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground font-sans font-medium">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}

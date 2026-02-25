"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Image as ImageIcon } from "lucide-react";

const educationData = [
  {
    degree: "S1 Pendidikan Geografi",
    institution: "Universitas Al Washliyah Darussalam",
    period: "2020 - 2024",
    description:
      "Selama menempuh studi S1 Pendidikan Geografi, saya mendalami bidang geografi sosial serta mengembangkan kemampuan analisis sosial dan lingkungan. Pada KKN, saya terlibat dalam program pengabdian masyarakat, membantu pelaksanaan kegiatan edukatif dan sosial, serta berkolaborasi dengan perangkat desa dan masyarakat setempat. Pada PPL, saya memperoleh pengalaman mengajar, menyusun perangkat pembelajaran, dan mengelola kelas. Saya juga mengikuti program Kampus Mengajar dengan berkontribusi dalam peningkatan literasi, numerasi, dan adaptasi teknologi di sekolah, yang semakin melatih kemampuan komunikasi, kerja tim, dan manajemen kegiatan secara terstruktur.",
    achievements: ["IPK Cumlaude", "Aktif Organisasi", "Mahasiswa Prestasi"],
  },
  {
    degree: "SMA/MA",
    institution: "SMA Negeri 1 Bireuen",
    period: "2017 - 2020",
    description:
      "Selama menempuh pendidikan di jurusan IPS saat SMA, saya mempelajari berbagai bidang seperti ekonomi, geografi, sosiologi, dan sejarah yang membentuk pola pikir analitis serta pemahaman sosial yang kuat. Selain itu, saya aktif dalam organisasi Rohis (FOSREM) sebagai wadah pengembangan karakter dan spiritual, di mana saya terlibat dalam kegiatan keagamaan, kepanitiaan acara, serta pembinaan anggota, sehingga melatih tanggung jawab dan kerja sama tim.",
    achievements: ["Anggota Rohis (FOSREM)"],
  },
];

export function EducationSection() {
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
    <section id="education" className="relative py-20 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-primary/40 rounded-full mb-12" />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Photo space */}
          <div className="flex-shrink-0 flex justify-center order-2 lg:order-1">
            <div className="photo-frame-glass w-[260px] h-[320px] md:w-[300px] md:h-[380px]">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-secondary flex items-center justify-center">
                <div className="text-center text-muted-foreground font-[var(--font-poppins)]">
                  <ImageIcon
                    size={48}
                    className="mx-auto mb-2 text-primary/40"
                  />
                  <img src="profil 3.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Education cards */}
          <div className="flex-1 flex flex-col gap-6 order-1 lg:order-2">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 md:p-8 hover:scale-[1.02] transition-all duration-500"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={22} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-[var(--font-poppins)] text-primary font-medium glass-card-strong px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-primary/70 font-[var(--font-poppins)] font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground font-[var(--font-poppins)] font-light leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((ach) => (
                        <span
                          key={ach}
                          className="glass-card-strong px-3 py-1.5 rounded-full text-xs text-primary font-[var(--font-poppins)] font-medium"
                        >
                          {ach}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}

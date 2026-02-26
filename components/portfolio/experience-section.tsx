"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Briefcase,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";

const experiences = [
  {
    title: "Custumer Service, Admin & Conten Creator",
    place: "URLv Women Store",
    period: "9 September 2024 - Sekarang",
    description:
      "Melayani pelanggan secara langsung dengan sikap ramah dan profesional, menangani pertanyaan serta keluhan dengan memberikan solusi yang tepat dan cepat. Bertanggung jawab dalam mengelola transaksi serta administrasi penjualan secara tertib dan akurat. Terbiasa bekerja dengan target penjualan, menjaga loyalitas pelanggan, serta mampu berkolaborasi secara efektif dalam tim untuk memastikan pelayanan berjalan optimal.",
    photos: [
      { src: "UV 1.png", alt: "PPL Photo 1" },
      { src: "UV 2.png", alt: "PPL Photo 2" },
      { src: "UV 3.png", alt: "PPL Photo 3" },
      { src: "UV 4.png", alt: "PPL Photo 4" },
      { src: "UV 5.png", alt: "PPL Photo 5" },
      { src: "UV 6.png", alt: "PPL Photo 6" },
    ],
  },
  {
    title: "Guru PAUD",
    place: "PAUD UMMAH",
    period: "11 februari 2024 - 20 november 2024",
    description:
      "Mengelola administrasi dan dokumentasi kegiatan pembelajaran secara tertib dan sistematis, serta menjalin komunikasi aktif dengan orang tua terkait perkembangan peserta didik. Melalui peran ini, saya melatih kesabaran, ketelitian, dan kemampuan komunikasi interpersonal dalam menghadapi berbagai karakter. Selain itu, saya turut berpartisipasi dalam perencanaan dan evaluasi program untuk memastikan kegiatan pembelajaran berjalan efektif dan terarah.",
    photos: [
      { src: "PAUD 1.png", alt: "Photo 1" },
      { src: "PAUD 2.png", alt: "Photo 1" },
      { src: "PAUD 3.png", alt: "Photo 1" },
    ],
  },
  {
    title: "Customer Service ",
    place: "City Phone",
    period: "3 Maret 2022 - 18 Desember 2022",
    description:
      "Melayani pelanggan dalam pembelian handphone, aksesoris, dan produk pendukung lainnya dengan memberikan penjelasan terkait spesifikasi, perbandingan tipe, serta rekomendasi yang sesuai dengan kebutuhan pelanggan. Menangani komplain produk dan membantu proses klaim garansi secara responsif dan solutif. Bertanggung jawab mengelola transaksi tunai maupun non-tunai serta melakukan pencatatan administrasi harian secara akurat. Terbiasa bekerja dengan target penjualan, menjaga kepuasan dan loyalitas pelanggan, serta berkoordinasi dengan tim untuk memastikan pelayanan berjalan cepat dan efektif.",
    photos: [{ src: "", alt: " Photo 1" }],
  },
  {
    title: "Program Kampus Mengajar Angkatan 5",
    place: "SD Negeri 8 Banda Aceh",
    period: "Februari - Juni 2023",
    description:
      "Saya mengikuti Program Kampus Mengajar Angkatan 5 Tahun 2023 dengan kegiatan pembekalan dan penugasan di sekolah, meliputi observasi, pelaksanaan AKM, pembelajaran literasi dan numerasi, adaptasi teknologi, serta administrasi sekolah. Program ini memberikan pengalaman langsung dalam mendukung proses pembelajaran dan meningkatkan kompetensi pedagogis serta manajerial saya di bidang pendidikan.",
    photos: [
      { src: "KM5 1.png", alt: " Photo 1" },
      { src: "KM5 2.png", alt: " Photo 1" },
      { src: "KM5 3.png", alt: " Photo 1" },
      { src: "KM5 4.png", alt: " Photo 1" },
    ],
  },
  {
    title: "Pelatihan Master Of Ceremony",
    place: "Dinas Pendidikan Dayah Aceh",
    period: "Februari 2022",
    description:
      "Dalam kegiatan pelatihan Master of Ceremony (MC), saya mempelajari teknik public speaking, pengolahan vokal, penguasaan panggung, serta penyusunan susunan acara secara profesional. Selain itu, dalam pelatihan penulisan karya tulis ilmiah, saya mempelajari sistematika penulisan ilmiah, teknik penyusunan paragraf akademik, penggunaan bahasa sesuai kaidah, serta pengelolaan dan sitasi referensi secara tepat, sehingga meningkatkan kemampuan komunikasi dan literasi akademik saya.",
    photos: [
      { src: "KM 2.png", alt: " Photo 1" },
      { src: "KM 3.png", alt: " Photo 1" },
    ],
  },
];

function PhotoCollage({
  photos,
  onSeeMore,
}: {
  photos: { src: string; alt: string }[];
  onSeeMore: () => void;
}) {
  const visiblePhotos = photos.slice(0, 4);
  const remainingCount = photos.length - 3;

  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {visiblePhotos.map((photo, idx) => (
        <div
          key={idx}
          className={`relative rounded-xl overflow-hidden bg-secondary ${
            idx === 0 ? "col-span-2 h-32 md:h-40" : "h-24 md:h-28"
          }`}
        >
          {photo.src ? (
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Camera size={20} className="text-primary/30" />
            </div>
          )}

          {/* "See More" overlay on the last visible photo */}
          {idx === visiblePhotos.length - 1 && remainingCount > 0 && (
            <button
              onClick={onSeeMore}
              className="absolute inset-0 bg-primary/50 flex items-center justify-center cursor-pointer hover:bg-primary/60 transition-colors"
            >
              <span className="text-primary-foreground font-sans font-semibold text-sm">
                +{remainingCount} more
              </span>
            </button>
          )}
        </div>
      ))}

      <div className="col-span-2">
        <button
          onClick={onSeeMore}
          className="w-full py-2.5 rounded-xl glass-card-strong text-primary font-sans font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
        >
          <ImageIcon size={16} />
          See More Photos
        </button>
      </div>
    </div>
  );
}

function GalleryModal({
  open,
  onClose,
  photos,
  title,
}: {
  open: boolean;
  onClose: () => void;
  photos: { src: string; alt: string }[];
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState<"grid" | "single">("grid");

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, handlePrev, handleNext]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative z-10 w-[95vw] max-w-4xl max-h-[90vh] glass-card rounded-3xl p-6 md:p-8 overflow-hidden flex flex-col animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView(view === "grid" ? "single" : "grid")}
              className="px-3 py-1.5 rounded-lg glass-card-strong text-sm text-primary font-sans font-medium hover:scale-105 transition-transform"
            >
              {view === "grid" ? "Slideshow" : "Grid"}
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Close gallery"
            >
              <X size={20} className="text-primary" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {view === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {photos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setView("single");
                  }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-secondary group cursor-pointer"
                >
                  {photo.src ? (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <Camera size={28} className="text-primary/30" />
                      <span className="text-xs text-muted-foreground font-sans">
                        {photo.alt}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden bg-secondary mb-4">
                {photos[currentIndex]?.src ? (
                  <img
                    src={photos[currentIndex].src}
                    alt={photos[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <Camera size={48} className="text-primary/30" />
                    <span className="text-sm text-muted-foreground font-sans">
                      {photos[currentIndex]?.alt}
                    </span>
                  </div>
                )}

                {/* Nav arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} className="text-foreground" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} className="text-foreground" />
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 px-1 max-w-full">
                {photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-secondary transition-all duration-300 ${
                      idx === currentIndex
                        ? "ring-2 ring-primary scale-110"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {photo.src ? (
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Camera size={14} className="text-primary/30" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <p className="mt-3 text-sm text-muted-foreground font-sans">
                {currentIndex + 1} / {photos.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);

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

  const openGallery = (idx: number) => {
    setActiveExperience(idx);
    setGalleryOpen(true);
  };

  return (
    <section id="experience" className="relative py-20 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
          Experience
        </h2>
        <div className="w-20 h-1 bg-primary/40 rounded-full mb-12" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 md:p-8 hover:scale-[1.01] transition-all duration-500"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Experience info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Briefcase size={22} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-foreground font-serif">
                          {exp.title}
                        </h3>
                        <span className="text-xs font-sans text-primary font-medium glass-card-strong px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary/70 font-sans font-medium mb-3">
                        {exp.place}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground font-sans font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photo collage */}
                <div className="flex-shrink-0 w-full lg:w-[280px] xl:w-[320px]">
                  <PhotoCollage
                    photos={exp.photos}
                    onSeeMore={() => openGallery(idx)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GalleryModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        photos={experiences[activeExperience]?.photos ?? []}
        title={experiences[activeExperience]?.title ?? ""}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}

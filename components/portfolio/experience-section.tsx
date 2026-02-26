"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Briefcase,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type Experience = {
  title: string;
  place: string;
  period: string;
  description: string;
  photos: MediaItem[];
};

const experiences: Experience[] = [
  {
    title: "Customer Service, Admin & Content Creator",
    place: "URLv Women Store",
    period: "9 September 2024 - Sekarang",
    description:
      "Melayani pelanggan secara langsung dengan sikap ramah dan profesional, menangani pertanyaan serta keluhan dengan memberikan solusi yang tepat dan cepat. Bertanggung jawab dalam mengelola transaksi serta administrasi penjualan secara tertib dan akurat. Terbiasa bekerja dengan target penjualan, menjaga loyalitas pelanggan, serta mampu berkolaborasi secara efektif dalam tim untuk memastikan pelayanan berjalan optimal.",
    photos: [
      { type: "image", src: "UV 1.png", alt: "URLv Photo 1" },
      { type: "image", src: "UV 2.png", alt: "URLv Photo 2" },
      { type: "image", src: "UV 3.png", alt: "URLv Photo 3" },
      { type: "image", src: "UV 4.png", alt: "URLv Photo 4" },
      { type: "image", src: "UV 5.png", alt: "URLv Photo 5" },
      { type: "image", src: "UV 6.png", alt: "URLv Photo 6" },
      { type: "video", src: "video 4.mp4" },
      { type: "video", src: "video 5.mp4" },
      { type: "video", src: "video 6.mp4" },
      { type: "video", src: "video 3.mp4" },
      { type: "video", src: "video 2.mp4" },
      { type: "video", src: "video 1.mp4" },
    ],
  },
  {
    title: "Guru PAUD",
    place: "PAUD UMMAH",
    period: "11 Februari 2024 - 20 November 2024",
    description:
      "Mengelola administrasi dan dokumentasi kegiatan pembelajaran secara tertib dan sistematis, serta menjalin komunikasi aktif dengan orang tua terkait perkembangan peserta didik. Melalui peran ini, saya melatih kesabaran, ketelitian, dan kemampuan komunikasi interpersonal dalam menghadapi berbagai karakter. Selain itu, saya turut berpartisipasi dalam perencanaan dan evaluasi program untuk memastikan kegiatan pembelajaran berjalan efektif dan terarah.",
    photos: [
      { type: "image", src: "PAUD 1.png", alt: "PAUD Photo 1" },
      { type: "image", src: "PAUD 2.png", alt: "PAUD Photo 2" },
      { type: "image", src: "PAUD 3.png", alt: "PAUD Photo 3" },
    ],
  },
  {
    title: "Customer Service",
    place: "City Phone",
    period: "3 Maret 2022 - 18 Desember 2022",
    description:
      "Melayani pelanggan dalam pembelian handphone, aksesoris, dan produk pendukung lainnya dengan memberikan penjelasan terkait spesifikasi, perbandingan tipe, serta rekomendasi yang sesuai dengan kebutuhan pelanggan. Menangani komplain produk dan membantu proses klaim garansi secara responsif dan solutif. Bertanggung jawab mengelola transaksi tunai maupun non-tunai serta melakukan pencatatan administrasi harian secara akurat.",
    photos: [
      { type: "image", src: "CityPhone 1.png", alt: "City Phone Photo 1" },
    ],
  },
  {
    title: "Program Kampus Mengajar Angkatan 5",
    place: "SD Negeri 8 Banda Aceh",
    period: "Februari - Juni 2023",
    description:
      "Saya mengikuti Program Kampus Mengajar Angkatan 5 Tahun 2023 dengan kegiatan pembekalan dan penugasan di sekolah, meliputi observasi, pelaksanaan AKM, pembelajaran literasi dan numerasi, adaptasi teknologi, serta administrasi sekolah. Program ini memberikan pengalaman langsung dalam mendukung proses pembelajaran dan meningkatkan kompetensi pedagogis serta manajerial saya di bidang pendidikan.",
    photos: [
      { type: "image", src: "KM5 1.png", alt: "KM5 Photo 1" },
      { type: "image", src: "KM5 2.png", alt: "KM5 Photo 2" },
      { type: "image", src: "KM5 3.png", alt: "KM5 Photo 3" },
      { type: "image", src: "KM5 4.png", alt: "KM5 Photo 4" },
    ],
  },
  {
    title: "Pelatihan Master of Ceremony",
    place: "Dinas Pendidikan Dayah Aceh",
    period: "Februari 2022",
    description:
      "Dalam kegiatan pelatihan Master of Ceremony (MC), saya mempelajari teknik public speaking, pengolahan vokal, penguasaan panggung, serta penyusunan susunan acara secara profesional. Selain itu, dalam pelatihan penulisan karya tulis ilmiah, saya mempelajari sistematika penulisan ilmiah, teknik penyusunan paragraf akademik, penggunaan bahasa sesuai kaidah, serta pengelolaan dan sitasi referensi secara tepat.",
    photos: [
      { type: "image", src: "KM 2.png", alt: "MC Photo 1" },
      { type: "image", src: "KM 3.png", alt: "MC Photo 2" },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function normSrc(src: string) {
  return src.startsWith("/") ? src : `/${src}`;
}

/**
 * ImageCover — gambar mengisi container dengan object-cover.
 * Container harus punya ukuran tetap + overflow-hidden.
 */
function ImageCover({ item }: { item: MediaItem }) {
  return (
    <img
      src={normSrc(item.src)}
      alt={item.alt ?? ""}
      className="w-full h-full object-cover"
    />
  );
}

/**
 * VideoCover — video dipotong mengisi container (thumbnail & grid modal).
 * Container harus punya ukuran tetap + overflow-hidden.
 */
function VideoCover({ item }: { item: MediaItem }) {
  return (
    <video
      src={normSrc(item.src)}
      className="w-full h-full object-cover"
      muted
      autoPlay={false}
      playsInline
    />
  );
}

/**
 * VideoFull — video tampil PENUH mengikuti rasio aslinya.
 * JANGAN bungkus dengan overflow-hidden atau container bertinggi fixed.
 * Container cukup pakai w-full tanpa h-* apapun.
 */
function VideoFull({
  item,
  controls = false,
}: {
  item: MediaItem;
  controls?: boolean;
}) {
  return (
    <video
      src={normSrc(item.src)}
      // w-full + height auto = mengikuti rasio asli video, tidak pernah terpotong
      className="w-full block"
      style={{ height: "auto", maxHeight: "none" }}
      muted
      autoPlay={false}
      controls={controls}
      playsInline
    />
  );
}

// ─── Photo Collage (card preview) ────────────────────────────────────────────
function PhotoCollage({
  photos,
  onSeeMore,
}: {
  photos: MediaItem[];
  onSeeMore: () => void;
}) {
  const MAX_VISIBLE = 4;
  const visiblePhotos = photos.slice(0, MAX_VISIBLE);
  const remainingCount = photos.length - (MAX_VISIBLE - 1);

  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {visiblePhotos.map((photo, idx) => {
        const isFirst = idx === 0;
        const isVideo = photo.type === "video";

        return (
          <div
            key={idx}
            className={`relative rounded-xl bg-secondary ${isFirst ? "col-span-2" : ""} ${
              // Video: NO overflow-hidden & NO fixed height → expands naturally
              // Image: overflow-hidden + fixed height → rapi
              isVideo
                ? ""
                : isFirst
                  ? "h-32 md:h-40 overflow-hidden"
                  : "h-24 md:h-28 overflow-hidden"
            }`}
          >
            {isVideo ? <VideoFull item={photo} /> : <ImageCover item={photo} />}

            {/* "+N more" overlay */}
            {idx === MAX_VISIBLE - 1 && remainingCount > 0 && (
              <button
                onClick={onSeeMore}
                className="absolute inset-0 bg-primary/50 flex items-center justify-center hover:bg-primary/60 transition-colors rounded-xl"
              >
                <span className="text-primary-foreground font-sans font-semibold text-sm">
                  +{remainingCount} more
                </span>
              </button>
            )}
          </div>
        );
      })}

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

// ─── Gallery Modal ────────────────────────────────────────────────────────────
function GalleryModal({
  open,
  onClose,
  photos,
  title,
}: {
  open: boolean;
  onClose: () => void;
  photos: MediaItem[];
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState<"grid" | "single">("grid");

  const handlePrev = useCallback(
    () => setCurrentIndex((p) => (p === 0 ? photos.length - 1 : p - 1)),
    [photos.length],
  );
  const handleNext = useCallback(
    () => setCurrentIndex((p) => (p === photos.length - 1 ? 0 : p + 1)),
    [photos.length],
  );

  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
      setView("grid");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, handlePrev, handleNext]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const current = photos[currentIndex];
  const isVideo = current?.type === "video";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal — overflow-y-auto agar konten panjang bisa discroll */}
      <div className="relative z-10 w-[95vw] max-w-4xl max-h-[90vh] glass-card rounded-3xl p-6 md:p-8 flex flex-col animate-fade-in-up overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-shrink-0">
          <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif truncate pr-4">
            {title}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setView((v) => (v === "grid" ? "single" : "grid"))}
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
        <div className="flex-1">
          {view === "grid" ? (
            // ── Grid: aspect-square cells, video & gambar di-crop ──────────
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
                  {photo.type === "video" ? (
                    <VideoCover item={photo} />
                  ) : (
                    <ImageCover item={photo} />
                  )}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                </button>
              ))}
            </div>
          ) : (
            // ── Slideshow ────────────────────────────────────────────────────
            <div className="flex flex-col items-center">
              {/* Main viewer
                  - Video: w-full saja, TANPA overflow-hidden & TANPA h-* fixed
                            → video mengembang ke rasio aslinya, tidak terpotong
                  - Image: tetap aspect-[4/3] + overflow-hidden
              */}
              <div className="w-full max-w-2xl rounded-2xl bg-secondary mb-4">
                {isVideo ? (
                  // Wrapper video: TIDAK boleh ada overflow-hidden atau h-* fixed
                  <div className="w-full rounded-2xl overflow-hidden">
                    <VideoFull item={current} controls />
                  </div>
                ) : (
                  // Wrapper image: aspect ratio tetap
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <ImageCover item={current} />
                    {/* Nav arrows hanya untuk gambar */}
                    {photos.length > 1 && (
                      <>
                        <button
                          onClick={handlePrev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
                          aria-label="Previous"
                        >
                          <ChevronLeft size={20} className="text-foreground" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
                          aria-label="Next"
                        >
                          <ChevronRight size={20} className="text-foreground" />
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Nav buttons di bawah untuk video (karena video punya controls sendiri) */}
              {isVideo && photos.length > 1 && (
                <div className="flex justify-center gap-4 mb-4">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} className="text-foreground" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} className="text-foreground" />
                  </button>
                </div>
              )}

              {/* Thumbnail strip: ukuran fixed, video & gambar di-crop */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 px-1 w-full">
                {photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-secondary cursor-pointer ring-2 transition-all ${
                      idx === currentIndex
                        ? "ring-primary"
                        : "ring-transparent hover:ring-primary/40"
                    }`}
                    aria-label={`Go to item ${idx + 1}`}
                  >
                    {photo.type === "video" ? (
                      <VideoCover item={photo} />
                    ) : (
                      <ImageCover item={photo} />
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

// ─── Main Section ─────────────────────────────────────────────────────────────
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

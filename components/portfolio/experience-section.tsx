"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Briefcase,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  MapPin,
  Calendar,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences: Experience[] = [
  {
    title: "Customer Service, Admin & Content Creator",
    place: "URLv Women Store",
    period: "9 September 2024 - Sekarang",
    description:
      "Melayani pelanggan secara langsung dengan sikap ramah dan profesional, menangani pertanyaan serta keluhan dengan memberikan solusi yang tepat dan cepat. Bertanggung jawab dalam mengelola transaksi serta administrasi penjualan secara tertib dan akurat. Terbiasa bekerja dengan target penjualan, menjaga loyalitas pelanggan, serta mampu berkolaborasi secara efektif dalam tim untuk memastikan pelayanan berjalan optimal.",
    photos: [
      { type: "image", src: "/UV-1.webp", alt: "URLv Photo 1" },
      { type: "image", src: "/UV-2.webp", alt: "URLv Photo 2" },
      { type: "image", src: "/UV-3.webp", alt: "URLv Photo 3" },
      { type: "image", src: "/UV-4.webp", alt: "URLv Photo 4" },
      { type: "image", src: "/UV-5.webp", alt: "URLv Photo 5" },
      { type: "image", src: "/UV-6.webp", alt: "URLv Photo 6" },
      { type: "video", src: "/video-4.mp4" },
      { type: "video", src: "/video-5.mp4" },
      { type: "video", src: "/video-6.mp4" },
      { type: "video", src: "/video-3.mp4" },
      { type: "video", src: "/video-2.mp4" },
      { type: "video", src: "/video-1.mp4" },
    ],
  },
  {
    title: "Guru PAUD",
    place: "PAUD UMMAH",
    period: "11 Februari 2024 - 20 November 2024",
    description:
      "Mengelola administrasi dan dokumentasi kegiatan pembelajaran secara tertib dan sistematis, serta menjalin komunikasi aktif dengan orang tua terkait perkembangan peserta didik. Melalui peran ini, saya melatih kesabaran, ketelitian, dan kemampuan komunikasi interpersonal dalam menghadapi berbagai karakter. Selain itu, saya turut berpartisipasi dalam perencanaan dan evaluasi program untuk memastikan kegiatan pembelajaran berjalan efektif dan terarah.",
    photos: [
      { type: "image", src: "/PAUD-1.webp", alt: "PAUD Photo 1" },
      { type: "image", src: "/PAUD-2.webp", alt: "PAUD Photo 2" },
      { type: "image", src: "/PAUD-3.webp", alt: "PAUD Photo 3" },
    ],
  },
  {
    title: "Customer Service",
    place: "City Phone",
    period: "3 Maret 2022 - 18 Desember 2022",
    description:
      "Melayani pelanggan dalam pembelian handphone, aksesoris, dan produk pendukung lainnya dengan memberikan penjelasan terkait spesifikasi, perbandingan tipe, serta rekomendasi yang sesuai dengan kebutuhan pelanggan. Menangani komplain produk dan membantu proses klaim garansi secara responsif dan solutif. Bertanggung jawab mengelola transaksi tunai maupun non-tunai serta melakukan pencatatan administrasi harian secara akurat.",
    photos: [
      { type: "image", src: "/CityPhone-1.webp", alt: "City Phone Photo 1" },
    ],
  },
  {
    title: "Program Kampus Mengajar Angkatan 5",
    place: "SD Negeri 8 Banda Aceh",
    period: "Februari - Juni 2023",
    description:
      "Saya mengikuti Program Kampus Mengajar Angkatan 5 Tahun 2023 dengan kegiatan pembekalan dan penugasan di sekolah, meliputi observasi, pelaksanaan AKM, pembelajaran literasi dan numerasi, adaptasi teknologi, serta administrasi sekolah. Program ini memberikan pengalaman langsung dalam mendukung proses pembelajaran dan meningkatkan kompetensi pedagogis serta manajerial saya di bidang pendidikan.",
    photos: [
      { type: "image", src: "/KM5-1.webp", alt: "KM5 Photo 1" },
      { type: "image", src: "/KM5-2.webp", alt: "KM5 Photo 2" },
      { type: "image", src: "/KM5-3.webp", alt: "KM5 Photo 3" },
      { type: "image", src: "/KM5-4.webp", alt: "KM5 Photo 4" },
    ],
  },
  {
    title: "Pelatihan Master of Ceremony",
    place: "Dinas Pendidikan Dayah Aceh",
    period: "Februari 2022",
    description:
      "Dalam kegiatan pelatihan Master of Ceremony (MC), saya mempelajari teknik public speaking, pengolahan vokal, penguasaan panggung, serta penyusunan susunan acara secara profesional. Selain itu, dalam pelatihan penulisan karya tulis ilmiah, saya mempelajari sistematika penulisan ilmiah, teknik penyusunan paragraf akademik, penggunaan bahasa sesuai kaidah, serta pengelolaan dan sitasi referensi secara tepat.",
    photos: [
      { type: "image", src: "/KM-2.webp", alt: "MC Photo 1" },
      { type: "image", src: "/KM-3.webp", alt: "MC Photo 2" },
    ],
  },
];

// ─── Media Components ─────────────────────────────────────────────────────────

/** Gambar dengan object-cover — container harus punya ukuran tetap + overflow-hidden */
function ImageCover({ item }: { item: MediaItem }) {
  return (
    <img
      src={item.src}
      alt={item.alt ?? ""}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  );
}

/**
 * Thumbnail video (grid/collage) — di-crop persegi, preload="none" agar tidak lag.
 * Tampilkan ikon Play di atasnya supaya user tahu ini video.
 */
function VideoThumb({ item }: { item: MediaItem }) {
  return (
    <div className="relative w-full h-full">
      <video
        src={item.src}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="none"
      />
      {/* Play badge */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Play
            size={16}
            className="text-gray-800 ml-0.5"
            fill="currentColor"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Video penuh di slideshow — mengikuti rasio asli, TIDAK di-crop.
 * Tidak ada overflow-hidden atau height fixed pada wrapper.
 */
function VideoPlayer({ item }: { item: MediaItem }) {
  return (
    <video
      src={item.src}
      className="w-full block rounded-2xl"
      style={{ height: "auto" }}
      controls
      playsInline
      preload="metadata"
    />
  );
}

// ─── Mini Collage (preview di card) ──────────────────────────────────────────

function PhotoCollage({
  photos,
  onOpen,
}: {
  photos: MediaItem[];
  onOpen: () => void;
}) {
  // Tampilkan maks 4 item (3 + overlay "+N")
  const MAX = 4;
  const preview = photos.slice(0, MAX);
  const remaining = photos.length - MAX;

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-1.5">
        {preview.map((item, i) => {
          const isLast = i === MAX - 1;
          const showOverlay = isLast && remaining > 0;

          return (
            <button
              key={i}
              onClick={onOpen}
              className={`relative rounded-xl overflow-hidden bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                i === 0 ? "col-span-2 h-36 md:h-44" : "h-24 md:h-28"
              }`}
            >
              {item.type === "video" ? (
                <VideoThumb item={item} />
              ) : (
                <ImageCover item={item} />
              )}

              {showOverlay && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    +{remaining + 1}
                  </span>
                </div>
              )}

              {/* hover shimmer */}
              <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-colors duration-200" />
            </button>
          );
        })}
      </div>

      <button
        onClick={onOpen}
        className="w-full py-2 rounded-xl glass-card-strong text-primary font-sans font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
      >
        <Images size={15} />
        Lihat Semua ({photos.length})
      </button>
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
  const [idx, setIdx] = useState(0);
  const [view, setView] = useState<"grid" | "slide">("grid");

  const prev = useCallback(
    () => setIdx((p) => (p === 0 ? photos.length - 1 : p - 1)),
    [photos.length],
  );
  const next = useCallback(
    () => setIdx((p) => (p === photos.length - 1 ? 0 : p + 1)),
    [photos.length],
  );

  // Reset state saat modal dibuka
  useEffect(() => {
    if (open) {
      setIdx(0);
      setView("grid");
    }
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, prev, next]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const current = photos[idx];
  const isVideo = current?.type === "video";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] glass-card rounded-3xl flex flex-col overflow-hidden animate-fade-in-up">
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary/10 flex-shrink-0">
          <h3 className="text-lg md:text-xl font-bold text-foreground font-serif truncate pr-4">
            {title}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setView((v) => (v === "grid" ? "slide" : "grid"))}
              className="px-3 py-1.5 rounded-lg glass-card-strong text-xs text-primary font-sans font-semibold hover:scale-105 transition-transform"
            >
              {view === "grid" ? "Slideshow" : "Grid"}
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Tutup"
            >
              <X size={18} className="text-primary" />
            </button>
          </div>
        </div>

        {/* ── Content (scrollable) ── */}
        <div className="flex-1 overflow-y-auto p-6">
          {view === "grid" ? (
            /* ── Grid view ── */
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIdx(i);
                    setView("slide");
                  }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-secondary group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {photo.type === "video" ? (
                    <VideoThumb item={photo} />
                  ) : (
                    <ImageCover item={photo} />
                  )}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200" />
                </button>
              ))}
            </div>
          ) : (
            /* ── Slideshow view ── */
            <div className="flex flex-col items-center gap-4">
              {/* Viewer utama */}
              <div className="w-full max-w-2xl mx-auto">
                {isVideo ? (
                  /*
                   * VIDEO: wrapper tanpa height fixed & tanpa overflow-hidden
                   * → video mengembang sesuai rasio aslinya, tidak pernah terpotong
                   */
                  <div className="w-full">
                    <VideoPlayer item={current} />
                  </div>
                ) : (
                  /*
                   * IMAGE: wrapper dengan aspect ratio 4/3 + overflow-hidden
                   * → gambar rapi dan konsisten
                   */
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                    <ImageCover item={current} />
                  </div>
                )}
              </div>

              {/* Navigasi panah */}
              {photos.length > 1 && (
                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full glass-card-strong flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="Sebelumnya"
                  >
                    <ChevronLeft size={20} className="text-foreground" />
                  </button>
                  <span className="text-sm text-muted-foreground font-sans min-w-[60px] text-center">
                    {idx + 1} / {photos.length}
                  </span>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full glass-card-strong flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="Berikutnya"
                  >
                    <ChevronRight size={20} className="text-foreground" />
                  </button>
                </div>
              )}

              {/* Strip thumbnail */}
              <div className="flex gap-2 overflow-x-auto pb-1 w-full px-1">
                {photos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-secondary ring-2 transition-all focus:outline-none ${
                      i === idx
                        ? "ring-primary scale-105"
                        : "ring-transparent hover:ring-primary/40"
                    }`}
                    aria-label={`Item ${i + 1}`}
                  >
                    {photo.type === "video" ? (
                      <VideoThumb item={photo} />
                    ) : (
                      <ImageCover item={photo} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Experience Card ──────────────────────────────────────────────────────────

function ExperienceCard({
  exp,
  index,
  onOpenGallery,
}: {
  exp: Experience;
  index: number;
  onOpenGallery: () => void;
}) {
  return (
    <div
      className="glass-card rounded-3xl p-6 md:p-8 hover:scale-[1.005] transition-all duration-500"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col xl:flex-row gap-8">
        {/* ── Info ── */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mt-0.5">
              <Briefcase size={20} className="text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              {/* Title + period */}
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-base md:text-lg font-bold text-foreground font-serif leading-snug">
                  {exp.title}
                </h3>
                <span className="flex items-center gap-1.5 text-xs font-sans text-primary font-medium glass-card-strong px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  <Calendar size={11} />
                  {exp.period}
                </span>
              </div>

              {/* Place */}
              <p className="flex items-center gap-1.5 text-sm text-primary/70 font-sans font-semibold mb-3">
                <MapPin size={13} />
                {exp.place}
              </p>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground font-sans font-light leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        </div>

        {/* ── Collage ── */}
        {exp.photos.length > 0 && (
          <div className="flex-shrink-0 w-full xl:w-[300px] 2xl:w-[340px]">
            <PhotoCollage photos={exp.photos} onOpen={onOpenGallery} />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeExp, setActiveExp] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const openGallery = (i: number) => {
    setActiveExp(i);
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

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
              onOpenGallery={() => openGallery(i)}
            />
          ))}
        </div>
      </div>

      {/* Gallery modal */}
      <GalleryModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        photos={experiences[activeExp]?.photos ?? []}
        title={experiences[activeExp]?.title ?? ""}
      />

      {/* Divider bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}

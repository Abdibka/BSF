"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Event gallery data - ordered by importance
const eventGalleries = {
  principal: {
    title: "Kerjasama dengan Principal",
    titleEn: "Principal Partnership",
    caption: "Kemitraan strategis dengan berbagai principal farmasi",
    captionEn: "Strategic partnership with various pharmaceutical principals",
    images: [
      "/etc/darya1.jpeg",
      "/etc/dkt1.jpeg",
      "/etc/dkt2.jpeg",
      "/etc/WhatsApp Image 2025-12-11 at 15.58.18.jpeg",
    ],
  },
  warehouseOps: {
    title: "Kegiatan Operasional Gudang",
    titleEn: "Warehouse Operations",
    caption: "Aktivitas operasional sehari-hari di gudang PT Bintang Semesta Farma",
    captionEn: "Daily operational activities at PT Bintang Semesta Farma warehouse",
    images: [
      "/Dokumentasi Gudang/IMG_4934.JPG",
      "/Dokumentasi Gudang/IMG_4938.JPG",
      "/Dokumentasi Gudang/IMG_4956.JPG",
      "/Dokumentasi Gudang/IMG_4959.JPG",
      "/Dokumentasi Gudang/IMG_4965.JPG",
      "/Dokumentasi Gudang/IMG_4967.JPG",
      "/Dokumentasi Gudang/IMG_4968.JPG",
      "/Dokumentasi Gudang/IMG_4971.JPG",
      "/Dokumentasi Gudang/IMG_4976.JPG",
      "/Dokumentasi Gudang/IMG_4986.JPG",
      "/Dokumentasi Gudang/IMG_4991.JPG",
      "/Dokumentasi Gudang/IMG_4992.JPG",
      "/Dokumentasi Gudang/IMG_5000.JPG",
      "/Dokumentasi Gudang/IMG_5010.JPG",
      "/Dokumentasi Gudang/IMG_5013.JPG",
      "/Dokumentasi Gudang/IMG_5015 - Copy.JPG",
    ],
  },
  training: {
    title: "Training Gudang",
    titleEn: "Warehouse Training",
    caption: "Pelatihan keselamatan dan operasional gudang - 14 Desember 2024",
    captionEn: "Warehouse safety and operations training - December 14, 2024",
    images: [
      "/Training Gudang 14 Desember 2024/WhatsApp Image 2024-12-14 at 12.40.00_93617232.jpg",
      "/Training Gudang 14 Desember 2024/WhatsApp Image 2024-12-14 at 13.30.22_80161fa9.jpg",
      "/Training Gudang 14 Desember 2024/WhatsApp Image 2024-12-14 at 13.30.15_589a4c00.jpg",
    ],
  },
  bidan: {
    title: "Gathering Bidan",
    titleEn: "Midwife Gathering",
    caption: "Acara gathering bersama para bidan",
    captionEn: "Gathering event with midwives",
    images: [
      "/etc/bidan1.jpeg",
      "/etc/bidan2.jpeg",
      "/etc/bidan3.jpeg",
    ],
  },
  independence: {
    title: "17 Agustus 2025",
    titleEn: "Independence Day 2025",
    caption: "Perayaan Hari Kemerdekaan Indonesia ke-80",
    captionEn: "Celebrating Indonesia's 80th Independence Day",
    images: [
      "/17 Agutus 2025/1.jpeg",
      "/17 Agutus 2025/5.jpeg",
      "/17 Agutus 2025/10.jpeg",
      "/17 Agutus 2025/15.jpeg",
      "/17 Agutus 2025/20.jpeg",
      "/17 Agutus 2025/25.jpeg",
      "/17 Agutus 2025/35.jpeg",
    ],
  },
  bukaPuasa: {
    title: "Buka Puasa Bersama 2025",
    titleEn: "Iftar Gathering 2025",
    caption: "Kebersamaan tim di berbagai kota: Jakarta, Bandung, Bekasi, Sidoarjo",
    captionEn: "Team gathering across cities: Jakarta, Bandung, Bekasi, Sidoarjo",
    images: [
      "/Buka Puasa Bersama 2025 /Jakarta/1.jpeg",
      "/Buka Puasa Bersama 2025 /Jakarta/5.jpeg",
      "/Buka Puasa Bersama 2025 /Bandung/WhatsApp Image 2025-03-24 at 15.14.53_23c8465b.jpg",
      "/Buka Puasa Bersama 2025 /Bekasi/WhatsApp Image 2025-03-21 at 19.58.50_08e41cca.jpg",
      "/Buka Puasa Bersama 2025 /Sidoarjo/WhatsApp Image 2025-03-24 at 09.15.45_b5c2d4e1.jpg",
    ],
  },
};

function EventCarousel({
  event,
  isVisible,
  index,
  language,
  className = "",
}: {
  event: (typeof eventGalleries)[keyof typeof eventGalleries];
  isVisible: boolean;
  index: number;
  language: string;
  className?: string;
}) {
  return (
    <div
      className={`group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#8FDAEB] hover:shadow-xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Carousel */}
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <div className="relative">
          <CarouselContent>
            {event.images.map((src, imgIndex) => (
              <CarouselItem key={imgIndex}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${event.title} - ${imgIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-md" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-md" />
        </div>
      </Carousel>

      {/* Caption */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-6 bg-[#4AB8D3] rounded-full" />
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#4AB8D3] transition-colors">
            {language === "en" ? event.titleEn : event.title}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {language === "en" ? event.captionEn : event.caption}
        </p>
        <p className="text-sm text-gray-400 mt-2">
          {event.images.length} {language === "en" ? "photos" : "foto"} • {language === "en" ? "Swipe to view" : "Geser untuk melihat"}
        </p>
      </div>
    </div>
  );
}

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const galleryItems = [
    {
      src: "/Dokumentasi Kegiatan/Employee Gathering.jpeg",
      alt: "Employee Gathering PT Bintang Semesta Farma",
      title: t("gallery.employee.title"),
      caption: t("gallery.employee.caption"),
    },
    {
      src: "/Dokumentasi Kegiatan/BCA Gathering.jpeg",
      alt: "BCA Gathering bersama PT Bintang Semesta Farma",
      title: t("gallery.bca.title"),
      caption: t("gallery.bca.caption"),
    },
    {
      src: "/Dokumentasi Kegiatan/Universitas Pelita Harapan.jpeg",
      alt: "Kunjungan Universitas Pelita Harapan",
      title: t("gallery.uph.title"),
      caption: t("gallery.uph.caption"),
    },
    {
      src: "/Dokumentasi Kegiatan/Blibli & tiket.com.jpeg",
      alt: "Kerjasama dengan Blibli & Tiket.com",
      title: t("gallery.blibli.title"),
      caption: t("gallery.blibli.caption"),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="galeri" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#4AB8D3] font-semibold text-sm uppercase tracking-wider">
              {t("gallery.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {t("gallery.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </div>

          {/* Event Carousels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {Object.values(eventGalleries).map((event, index) => {
              const totalItems = Object.values(eventGalleries).length;
              const isLastRow = index >= totalItems - (totalItems % 3 || 3);
              const itemsInLastRow = totalItems % 3 || 3;
              // For 5 items: first 3 take lg:col-span-2, last 2 take lg:col-span-3
              const colSpan = totalItems === 5 && index >= 3 ? "lg:col-span-3" : "lg:col-span-2";

              return (
                <EventCarousel
                  key={event.title}
                  event={event}
                  isVisible={isVisible}
                  index={index}
                  language={language}
                  className={`md:col-span-1 ${colSpan}`}
                />
              );
            })}
          </div>

          {/* Original Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className={`group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#8FDAEB] hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-[#4AB8D3]" />
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-6 bg-[#4AB8D3] rounded-full" />
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#4AB8D3] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

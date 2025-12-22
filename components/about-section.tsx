"use client";

import Image from "next/image";
import { Building2, Store, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const stats = [
    { icon: Building2, value: "5", label: t("about.stat.branch") },
    { icon: Store, value: "5", label: t("about.stat.salespoint") },
    { icon: Monitor, value: "100%", label: t("about.stat.system") },
  ];

  const teamPhotos = [
    {
      src: "/Dokumentasi Kegiatan/bsf (6).jpeg",
      alt: "Tim PT Bintang Semesta Farma",
    },
    {
      src: "/Dokumentasi Kegiatan/bsf (8).jpg",
      alt: "Tim Manajemen PT Bintang Semesta Farma",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [teamPhotos.length]);

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#4AB8D3] font-semibold text-sm uppercase tracking-wider">
                {t("about.label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                {t("about.title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t("about.p1.1")}{" "}
                <strong className="text-gray-900 whitespace-nowrap">PT Bintang Semesta Farma</strong>{" "}
                {t("about.p1.2")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t("about.p2.1")}{" "}
                <strong className="text-[#4AB8D3]">PBF, CDOB, CDAKB, Importir, dan PSEF</strong>
                {t("about.p2.2")}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`rounded-xl p-4 text-center ${
                      index === 0
                        ? "bg-[#C5EDF5]"
                        : index === 1
                          ? "bg-orange-100"
                          : "bg-[#B0E4F0]"
                    }`}
                  >
                    <stat.icon
                      className={`h-6 w-6 mx-auto mb-2 ${
                        index === 0
                          ? "text-[#4AB8D3]"
                          : index === 1
                            ? "text-orange-600"
                            : "text-[#1E8FAA]"
                      }`}
                    />
                    <div
                      className={`text-2xl md:text-3xl font-bold mb-1 ${
                        index === 0
                          ? "text-[#4AB8D3]"
                          : index === 1
                            ? "text-orange-700"
                            : "text-[#1E8FAA]"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team photo slideshow */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
                {teamPhotos.map((photo, index) => (
                  <Image
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className={`object-cover object-center transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E8FAA]/20 to-transparent" />

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {teamPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? "bg-white w-6" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C5EDF5] rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-100 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

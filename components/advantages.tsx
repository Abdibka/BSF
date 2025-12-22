"use client";

import Image from "next/image";
import { ShieldCheck, Truck, Settings, Handshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";

const colorClasses = {
  blue: {
    bg: "bg-[#E8F7FA]",
    text: "text-[#4AB8D3]",
    hoverBg: "group-hover:bg-[#4AB8D3]",
    border: "hover:border-[#8FDAEB]",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    hoverBg: "group-hover:bg-orange-500",
    border: "hover:border-orange-200",
  },
  cyan: {
    bg: "bg-[#C5EDF5]",
    text: "text-[#1E8FAA]",
    hoverBg: "group-hover:bg-[#1E8FAA]",
    border: "hover:border-[#8FDAEB]",
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    hoverBg: "group-hover:bg-yellow-500",
    border: "hover:border-yellow-200",
  },
};

export function Advantages() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const advantages = [
    {
      icon: ShieldCheck,
      title: t("advantages.legal.title"),
      description: t("advantages.legal.desc"),
      color: "blue",
    },
    {
      icon: Truck,
      title: t("advantages.fast.title"),
      description: t("advantages.fast.desc"),
      color: "orange",
    },
    {
      icon: Settings,
      title: t("advantages.integrated.title"),
      description: t("advantages.integrated.desc"),
      color: "cyan",
    },
    {
      icon: Handshake,
      title: t("advantages.trusted.title"),
      description: t("advantages.trusted.desc"),
      color: "yellow",
    },
  ];

  const warehousePhotos = [
    {
      src: "/Dokumentasi Gudang/IMG_5029.JPG",
      alt: "Gudang PT Bintang Semesta Farma",
    },
    {
      src: "/Dokumentasi Gudang/IMG_4960.JPG",
      alt: "Operasional gudang farmasi",
    },
    {
      src: "/Dokumentasi Gudang/IMG_4979.JPG",
      alt: "Penyimpanan produk farmasi",
    },
    {
      src: "/Dokumentasi Gudang/IMG_4998.JPG",
      alt: "Fasilitas gudang farmasi",
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % warehousePhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [warehousePhotos.length]);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Warehouse photo slideshow */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                {warehousePhotos.map((photo, index) => (
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
                  {warehousePhotos.map((_, index) => (
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
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#C5EDF5] rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#E8F7FA] rounded-xl -z-10" />
            </div>

            {/* Text content */}
            <div className="order-1 lg:order-2">
              <span className="text-[#4AB8D3] font-semibold text-sm uppercase tracking-wider">
                {t("advantages.label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                {t("advantages.title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("advantages.subtitle")}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => {
              const colors =
                colorClasses[item.color as keyof typeof colorClasses];
              return (
                <div
                  key={item.title}
                  className={`group bg-white rounded-2xl p-6 border border-gray-100 ${colors.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 ${colors.hoverBg} group-hover:scale-110 transition-all duration-300`}
                  >
                    <item.icon
                      className={`h-7 w-7 ${colors.text} group-hover:text-white transition-colors`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

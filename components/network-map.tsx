"use client";

import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/lib/language-context";

// Dynamically import the map component to avoid SSR issues with Leaflet
const IndonesiaMap = dynamic(() => import("./indonesia-map"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[16/9] md:aspect-[21/9] bg-[#1E8FAA]/50 rounded-2xl flex items-center justify-center">
      <div className="text-[#C5EDF5]">Loading map...</div>
    </div>
  ),
});

// Correct coordinates for Indonesian cities
export const mapPins = [
  // PBF Locations (Cabang)
  {
    id: "jakarta",
    name: "BSF Taman Palem",
    type: "PBF",
    address: "Jl. Raya Outer Ring Road, Mutiara Taman Palem D8 No 88-89, Cengkareng Timur, Jakarta Barat 11730",
    lat: -6.1445,
    lng: 106.7308,
    isMain: true,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mutiara+Taman+Palem+Cengkareng+Jakarta",
  },
  {
    id: "sidoarjo",
    name: "BSF Cabang Sidoarjo",
    type: "PBF",
    address: "Diamond Park Residence Blok E-12B/07, Gedangan, Sidoarjo 61254",
    lat: -7.4139,
    lng: 112.7178,
    isMain: false,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Diamond+Park+Residence+Gedangan+Sidoarjo",
  },
  {
    id: "bandung",
    name: "BSF Cabang Bandung",
    type: "PBF",
    address: "Ruko Dynasti Plaza B12, Jl. Ibrahim Ajie No. 175, Babakan Sari, Kiaracondong, Bandung",
    lat: -6.9271,
    lng: 107.6455,
    isMain: false,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ruko+Dynasti+Plaza+Ibrahim+Ajie+Bandung",
  },
  {
    id: "cirebon",
    name: "BSF Cabang Cirebon",
    type: "PBF",
    address: "Jl. Cangkringan 1 No. 36, Kec. Kejaksan, Kota Cirebon 45123",
    lat: -6.7063,
    lng: 108.5570,
    isMain: false,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jl+Cangkringan+Kejaksan+Cirebon",
  },
  {
    id: "semarang",
    name: "BSF Cabang Semarang",
    type: "PBF",
    address: "Bukit Beringin Asri No. 35, Ngaliyan, Semarang",
    lat: -6.9932,
    lng: 110.3529,
    isMain: false,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bukit+Beringin+Asri+Ngaliyan+Semarang",
  },
  // Sales Point Locations (Area)
  {
    id: "bekasi",
    name: "BSF Area Bekasi",
    type: "Sales Point",
    address: "Jl. Pisangan Lama I No. 7C, Jakarta Timur",
    lat: -6.2297,
    lng: 106.9004,
    isMain: false,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jl+Pisangan+Lama+Jakarta+Timur",
  },
  {
    id: "medan",
    name: "BSF Area Medan",
    type: "Sales Point",
    address: "Jl. Besar Delitua-Medan No. 8, Deli Tua, Kab. Deli Serdang, Sumatera Utara",
    lat: 3.5114,
    lng: 98.6842,
    isMain: false,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Deli+Tua+Medan+Sumatera+Utara",
  },
  {
    id: "malang",
    name: "BSF Area Malang",
    type: "Sales Point",
    address: "Jl. Simpang Laksda Adi Sucipto, Perum Alam Nirwana Ruko Kav B, Pandanwangi, Blimbing, Kota Malang",
    lat: -7.9546,
    lng: 112.6506,
    isMain: false,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Alam+Nirwana+Pandanwangi+Malang",
  },
  {
    id: "palembang",
    name: "BSF Area Palembang",
    type: "Sales Point",
    address: "Jl. Musi Raya No. 7 RT 47, Kel. Sialang, Kec. Sako, Kota Palembang",
    lat: -2.9345,
    lng: 104.7644,
    isMain: false,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sako+Palembang",
  },
  {
    id: "depok",
    name: "BSF Area Depok",
    type: "Sales Point",
    address: "Grand Depok City Jalan Lantana No 26 A Kec. Cilodong Kel. Jatimulya Depok",
    lat: -6.4025,
    lng: 106.8336,
    isMain: false,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Depok+City+Lantana+Cilodong+Depok",
  },
];

const locationCards = [
  // PBF Locations
  {
    type: "PBF",
    name: "BSF Taman Palem",
    address: "Jl. Raya Outer Ring Road, Mutiara Taman Palem D8 No 88-89, Cengkareng Timur, Jakarta Barat 11730",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mutiara+Taman+Palem+Cengkareng+Jakarta",
  },
  {
    type: "PBF",
    name: "BSF Cabang Sidoarjo",
    address: "Diamond Park Residence Blok E-12B/07, Gedangan, Sidoarjo 61254",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Diamond+Park+Residence+Gedangan+Sidoarjo",
  },
  {
    type: "PBF",
    name: "BSF Cabang Bandung",
    address: "Ruko Dynasti Plaza B12, Jl. Ibrahim Ajie No. 175, Babakan Sari, Kiaracondong, Bandung",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ruko+Dynasti+Plaza+Ibrahim+Ajie+Bandung",
  },
  {
    type: "PBF",
    name: "BSF Cabang Cirebon",
    address: "Jl. Cangkringan 1 No. 36, Kec. Kejaksan, Kota Cirebon 45123",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jl+Cangkringan+Kejaksan+Cirebon",
  },
  {
    type: "PBF",
    name: "BSF Cabang Semarang",
    address: "Bukit Beringin Asri No. 35, Ngaliyan, Semarang",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bukit+Beringin+Asri+Ngaliyan+Semarang",
  },
  // Sales Point Locations
  {
    type: "Sales Point",
    name: "BSF Area Bekasi",
    address: "Jl. Pisangan Lama I No. 7C, Jakarta Timur",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jl+Pisangan+Lama+Jakarta+Timur",
  },
  {
    type: "Sales Point",
    name: "BSF Area Medan",
    address: "Jl. Besar Delitua-Medan No. 8, Deli Tua, Kab. Deli Serdang, Sumatera Utara",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Deli+Tua+Medan+Sumatera+Utara",
  },
  {
    type: "Sales Point",
    name: "BSF Area Malang",
    address: "Jl. Simpang Laksda Adi Sucipto, Perum Alam Nirwana Ruko Kav B, Pandanwangi, Blimbing, Kota Malang",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Alam+Nirwana+Pandanwangi+Malang",
  },
  {
    type: "Sales Point",
    name: "BSF Area Palembang",
    address: "Jl. Musi Raya No. 7 RT 47, Kel. Sialang, Kec. Sako, Kota Palembang",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sako+Palembang",
  },
  {
    type: "Sales Point",
    name: "BSF Area Depok",
    address: "Grand Depok City Jalan Lantana No 26 A Kec. Cilodong Kel. Jatimulya Depok",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Depok+City+Lantana+Cilodong+Depok",
  },
];

export function NetworkMap() {
  const totalCards = locationCards.length;
  // Start at the beginning of the middle set for seamless looping
  const [currentIndex, setCurrentIndex] = useState(totalCards);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { t } = useLanguage();

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Handle seamless loop reset
  useEffect(() => {
    if (currentIndex >= totalCards * 2) {
      // Reached end of middle set, jump to beginning of middle set
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalCards);
      }, 500);
      return () => clearTimeout(timeout);
    } else if (currentIndex < totalCards) {
      // Went before middle set, jump to end of middle set
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalCards * 2 - 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalCards]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStart(null);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <section id="jaringan" className="py-20 bg-[#1E8FAA]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              {t("network.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              {t("network.title")}
            </h2>
            <div className="flex justify-center gap-6 text-[#C5EDF5]">
              <span className="font-semibold">5 {t("network.pbf")}</span>
              <span>|</span>
              <span className="font-semibold">5 {t("network.salespoint")}</span>
            </div>
          </div>

          {/* Leaflet Map */}
          <div className="mb-8">
            <IndonesiaMap />
          </div>

          {/* Location Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            {/* Carousel Container */}
            <div
              className="overflow-hidden mx-6 md:mx-8"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {/* Render cards 3 times for infinite loop effect */}
                {[...locationCards, ...locationCards, ...locationCards].map((location, index) => (
                  <a
                    key={`${location.name}-${index}`}
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
                  >
                    <div className="bg-[#4AB8D3]/30 rounded-lg p-4 hover:bg-[#4AB8D3]/50 transition-colors cursor-pointer group h-full">
                      <span className="text-xs text-orange-400 font-medium">
                        {location.type}
                      </span>
                      <h4 className="text-white font-semibold mt-1 group-hover:text-orange-300 transition-colors">
                        {location.name}
                      </h4>
                      <p className="text-[#C5EDF5] text-sm mt-1">{location.address}</p>
                      <p className="text-orange-400 text-xs mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MapPin className="h-3 w-3" />
                        {t("network.maps")}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {locationCards.map((_, index) => {
                const normalizedIndex = currentIndex % totalCards;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setCurrentIndex(totalCards + index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === normalizedIndex ? "bg-white w-6" : "bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

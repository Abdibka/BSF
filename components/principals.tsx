"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { useLanguage } from "@/lib/language-context"

// Ordered from most famous to less famous
const principals = [
  { name: "Bayer", logo: "/Partner Principle/bayer.png" },
  { name: "Kalbe Farma", logo: "/Partner Principle/kalbe.png" },
  { name: "Novartis", logo: "/Partner Principle/NOVASTIS.png" },
  { name: "GlaxoSmithKline", logo: "/Partner Principle/GLAXO SMITH KLEINE.png" },
  { name: "Merck", logo: "/Partner Principle/MERCK.png" },
  { name: "MSD", logo: "/Partner Principle/MSD.png" },
  { name: "Boehringer Ingelheim", logo: "/Partner Principle/BOEHRINGER.png" },
  { name: "P&G", logo: "/Partner Principle/P&G.png" },
  { name: "Dexa Medica", logo: "/Partner Principle/dexa_medica.webp" },
  { name: "Darya-Varia", logo: "/Partner Principle/darya_varia.svg" },
  { name: "Combiphar", logo: "/Partner Principle/Combiphar.svg.png" },
  { name: "Sanbe Farma", logo: "/Partner Principle/SANBE.jpg" },
  { name: "Soho", logo: "/Partner Principle/SOHO.png" },
  { name: "Novell", logo: "/Partner Principle/NOVELL.png" },
  { name: "Indo Farma", logo: "/Partner Principle/INDO FARMA.png" },
  { name: "Sido Muncul", logo: "/Partner Principle/SIDO MUNCUL.svg" },
  { name: "Actavis", logo: "/Partner Principle/actavis.png" },
  { name: "Hexpharm", logo: "/Partner Principle/hexpharm.png" },
  { name: "Meiji", logo: "/Partner Principle/MEIJI.png" },
  { name: "Interbat", logo: "/Partner Principle/INTERBAT.jpg" },
  { name: "Sampharindo", logo: "/Partner Principle/SAMPHARINDO.png" },
  { name: "Berlico", logo: "/Partner Principle/BERLICO.png" },
  { name: "Cendo Pratama", logo: "/Partner Principle/CENDO PRATAMA.png" },
  { name: "Graha Farma", logo: "/Partner Principle/GRAHA FARMA.png" },
  { name: "Kalventis", logo: "/Partner Principle/KALVENTIS.png" },
  { name: "Fahrenheit", logo: "/Partner Principle/FAHRENHEIT.png" },
  { name: "Aurogen", logo: "/Partner Principle/AUROGEN.jpg" },
  { name: "Zenith", logo: "/Partner Principle/ZENITH.jpg" },
  { name: "Samco", logo: "/Partner Principle/SAMCO.png" },
  { name: "Itrasal", logo: "/Partner Principle/ITRASAL.webp" },
  { name: "Pyridam", logo: "/Partner Principle/pyridam.png" },
  { name: "Ifars", logo: "/Partner Principle/ifars.jpg" },
  { name: "Hufa", logo: "/Partner Principle/hufa.jpg" },
  { name: "Erela", logo: "/Partner Principle/erela.png" },
  { name: "DKT Indonesia", logo: "/Partner Principle/dkt_indonesia.jpg" },
  { name: "Hermed", logo: "/Partner Principle/hermed.png" },
  { name: "Calumika", logo: "/Partner Principle/calumika.png" },
  { name: "Cipta Sehat", logo: "/Partner Principle/cipta_sehat.jpg" },
  { name: "Top Lady", logo: "/Partner Principle/top_lady.jpg" },
]

export function Principals() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const { t } = useLanguage()

  // Items per slide - show 8 logos at once (2 rows of 4)
  const itemsPerSlide = 8
  const totalSlides = Math.ceil(principals.length / itemsPerSlide)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }
  }

  // Get items for current slide
  const getSlideItems = (slideIndex: number) => {
    const start = slideIndex * itemsPerSlide
    return principals.slice(start, start + itemsPerSlide)
  }

  return (
    <section id="principal" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#4AB8D3] font-semibold text-sm uppercase tracking-wider">{t("principals.label")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{t("principals.title")}</h2>
            <p className="text-gray-600">{t("principals.subtitle")}</p>
          </div>

          {/* Carousel Container */}
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-8"
                >
                  {getSlideItems(slideIndex).map((principal, index) => (
                    <div
                      key={`${slideIndex}-${index}`}
                      className="h-24 bg-white rounded-xl flex items-center justify-center p-4 border border-gray-200 hover:border-[#4AB8D3] hover:shadow-lg transition-all duration-300"
                    >
                      <Image
                        src={principal.logo}
                        alt={principal.name}
                        width={140}
                        height={60}
                        className="object-contain max-h-14 w-auto"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 z-10 transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 z-10 transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#4AB8D3] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Squash as Hamburger } from "hamburger-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Globe } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { label: t("nav.about"), href: "#tentang" },
    { label: t("nav.services"), href: "#layanan" },
    { label: t("nav.products"), href: "#produk" },
    { label: t("nav.network"), href: "#jaringan" },
    { label: t("nav.contact"), href: "#kontak" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="PT Bintang Semesta Farma"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span
              className={`font-semibold text-sm md:text-base hidden sm:block ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              PT Bintang Semesta Farma
            </span>
          </Link>

          {/* Desktop Nav - right aligned */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 ${
                isScrolled
                  ? "border-gray-300 text-gray-700 hover:border-[#4AB8D3] hover:text-[#4AB8D3]"
                  : "border-white/30 text-white/90 hover:border-white hover:text-white"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2 py-1 rounded-full border transition-all duration-200 ${
                isScrolled
                  ? "border-gray-300 text-gray-700"
                  : "border-white/30 text-white/90"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="text-xs font-medium uppercase">{language}</span>
            </button>

            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
              size={24}
              duration={0.4}
              color={isScrolled ? "#111827" : "#ffffff"}
              easing="ease-in-out"
              rounded
            />
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <nav className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 font-medium py-2 hover:text-orange-500 transition-all duration-200"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-10px)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

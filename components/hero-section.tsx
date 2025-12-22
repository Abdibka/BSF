"use client";

import { ChevronDown, Shield, Truck, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-section">
      {/* Professional gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0E657E] via-[#1E8FAA] to-[#4AB8D3]"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      {/* Abstract hexagon pattern - chemistry/pharma themed */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <polygon
                points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-cyan-400"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Floating molecular connection lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6EC9DF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4AB8D3" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Connection lines */}
          <line
            x1="10%"
            y1="20%"
            x2="25%"
            y2="35%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <line
            x1="25%"
            y1="35%"
            x2="40%"
            y2="25%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <line
            x1="70%"
            y1="60%"
            x2="85%"
            y2="45%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <line
            x1="85%"
            y1="45%"
            x2="95%"
            y2="55%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <line
            x1="60%"
            y1="80%"
            x2="75%"
            y2="70%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <line
            x1="5%"
            y1="70%"
            x2="20%"
            y2="60%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <line
            x1="80%"
            y1="15%"
            x2="90%"
            y2="25%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.15"
          />
          <line
            x1="15%"
            y1="50%"
            x2="30%"
            y2="45%"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.15"
          />
          {/* Nodes at intersections */}
          <circle cx="10%" cy="20%" r="5" fill="#6EC9DF" opacity="0.35" />
          <circle cx="25%" cy="35%" r="6" fill="#4AB8D3" opacity="0.3" />
          <circle cx="40%" cy="25%" r="4" fill="#6EC9DF" opacity="0.35" />
          <circle cx="70%" cy="60%" r="5" fill="#4AB8D3" opacity="0.3" />
          <circle cx="85%" cy="45%" r="6" fill="#6EC9DF" opacity="0.35" />
          <circle cx="95%" cy="55%" r="4" fill="#4AB8D3" opacity="0.3" />
          <circle cx="60%" cy="80%" r="5" fill="#6EC9DF" opacity="0.25" />
          <circle cx="75%" cy="70%" r="6" fill="#4AB8D3" opacity="0.35" />
          <circle cx="5%" cy="70%" r="4" fill="#6EC9DF" opacity="0.3" />
          <circle cx="20%" cy="60%" r="5" fill="#4AB8D3" opacity="0.35" />
          <circle cx="80%" cy="15%" r="4" fill="#6EC9DF" opacity="0.25" />
          <circle cx="90%" cy="25%" r="5" fill="#4AB8D3" opacity="0.3" />
          <circle cx="15%" cy="50%" r="5" fill="#6EC9DF" opacity="0.25" />
          <circle cx="30%" cy="45%" r="4" fill="#4AB8D3" opacity="0.3" />
        </svg>
      </div>

      {/* Floating pharmacy-themed elements with parallax */}
      {/* Pills */}
      <div
        className="absolute top-[15%] left-[8%] w-16 h-8 border-2 border-cyan-400/20 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.15}px) rotate(-15deg)` }}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-cyan-400/10" />
      </div>
      <div
        className="absolute top-[25%] right-[12%] w-14 h-7 border-2 border-emerald-400/20 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.2}px) rotate(20deg)` }}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-emerald-400/10" />
      </div>
      <div
        className="absolute bottom-[38%] left-[6%] w-12 h-6 border-2 border-blue-400/15 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.1}px) rotate(10deg)` }}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-blue-400/10" />
      </div>
      {/* Upper middle pills */}
      <div
        className="absolute top-[8%] left-[35%] w-14 h-7 border-2 border-cyan-400/15 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.12}px) rotate(25deg)` }}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-cyan-400/10" />
      </div>
      <div
        className="absolute top-[12%] left-[50%] w-12 h-6 border-2 border-emerald-400/18 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.18}px) rotate(-10deg)` }}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-emerald-400/10" />
      </div>
      <div
        className="absolute top-[6%] right-[38%] w-10 h-5 border-2 border-blue-400/15 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.14}px) rotate(15deg)` }}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-blue-400/10" />
      </div>
      <div
        className="absolute top-[18%] left-[42%] w-16 h-8 border-2 border-cyan-400/12 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.16}px) rotate(-20deg)` }}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-cyan-400/8" />
      </div>

      {/* Medical crosses */}
      <div
        className="absolute top-[20%] left-[18%]"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-cyan-400/20"
        >
          <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z" fill="currentColor" />
        </svg>
      </div>
      <div
        className="absolute bottom-[45%] right-[8%]"
        style={{ transform: `translateY(${scrollY * 0.22}px)` }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="text-emerald-400/15"
        >
          <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z" fill="currentColor" />
        </svg>
      </div>
      <div
        className="absolute top-[50%] left-[4%]"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-blue-400/20"
        >
          <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z" fill="currentColor" />
        </svg>
      </div>

      {/* Capsules */}
      <div
        className="absolute top-[35%] right-[5%] w-8 h-20 border-2 border-cyan-400/15 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.25}px) rotate(25deg)` }}
      >
        <div className="absolute left-0 top-0 w-full h-1/2 bg-cyan-400/10" />
      </div>
      <div
        className="absolute bottom-[30%] left-[15%] w-6 h-14 border-2 border-cyan-400/15 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.15}px) rotate(-20deg)` }}
      >
        <div className="absolute left-0 top-0 w-full h-1/2 bg-cyan-400/10" />
      </div>
      <div
        className="absolute top-[60%] right-[18%] w-5 h-12 border-2 border-emerald-400/12 rounded-full overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.18}px) rotate(15deg)` }}
      >
        <div className="absolute left-0 top-0 w-full h-1/2 bg-emerald-400/10" />
      </div>

      {/* Subtle gradient orbs */}
      <div
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#4AB8D3]/10 rounded-full blur-[120px]"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div
        className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-[#6EC9DF]/8 rounded-full blur-[150px]"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#1E8FAA]/5 rounded-full blur-[100px]"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* Content */}
      <div
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/10 transition-all duration-700 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 text-sm font-medium tracking-wide">
              {t("hero.badge")}
            </span>
          </div>
          {/* Company name */}
          <h2
            className={`text-2xl md:text-3xl font-bold text-orange-300 mb-4 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            PT Bintang Semesta Farma
          </h2>
          {/* Main heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("hero.title1")}{" "}
            <span className="text-orange-300">
              {t("hero.title2")}
            </span>{" "}
            {t("hero.title3")}
          </h1>
          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("hero.subtitle")}
          </p>
          {/* Trust indicators */}
          <div
            className={`flex flex-wrap justify-center gap-8 md:gap-12 transition-all duration-700 delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#4AB8D3]/10 border border-[#4AB8D3]/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#6EC9DF]" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  {t("hero.safe")}
                </p>
                <p className="text-orange-300 text-sm">{t("hero.safe.sub")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Truck className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  {t("hero.fast")}
                </p>
                <p className="text-orange-300 text-sm">{t("hero.fast.sub")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  {t("hero.certified")}
                </p>
                <p className="text-orange-300 text-sm">{t("hero.certified.sub")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown className="w-6 h-6 text-white/60 animate-bounce" />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

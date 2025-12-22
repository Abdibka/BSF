"use client"

import {
  Pill,
  Tablets,
  FlaskConical,
  Leaf,
  Stethoscope,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    icon: "bg-blue-100 text-blue-600",
    text: "text-blue-600",
    hover: "hover:shadow-lg hover:shadow-blue-500/10",
  },
  purple: {
    bg: "bg-purple-50",
    icon: "bg-purple-100 text-purple-600",
    text: "text-purple-600",
    hover: "hover:shadow-lg hover:shadow-purple-500/10",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "bg-orange-100 text-orange-600",
    text: "text-orange-600",
    hover: "hover:shadow-lg hover:shadow-orange-500/10",
  },
  green: {
    bg: "bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-600",
    text: "text-emerald-600",
    hover: "hover:shadow-lg hover:shadow-emerald-500/10",
  },
  red: {
    bg: "bg-rose-50",
    icon: "bg-rose-100 text-rose-600",
    text: "text-rose-600",
    hover: "hover:shadow-lg hover:shadow-rose-500/10",
  },
  yellow: {
    bg: "bg-amber-50",
    icon: "bg-amber-100 text-amber-600",
    text: "text-amber-600",
    hover: "hover:shadow-lg hover:shadow-amber-500/10",
  },
  pink: {
    bg: "bg-pink-50",
    icon: "bg-pink-100 text-pink-600",
    text: "text-pink-600",
    hover: "hover:shadow-lg hover:shadow-pink-500/10",
  },
};

export function ProductCategories() {
  const { t } = useLanguage();

  const categories = [
    {
      name: t("products.otc.name"),
      description: t("products.otc.desc"),
      icon: Pill,
      color: "blue",
    },
    {
      name: t("products.generic.name"),
      description: t("products.generic.desc"),
      icon: Tablets,
      color: "purple",
    },
    {
      name: t("products.vitamin.name"),
      description: t("products.vitamin.desc"),
      icon: FlaskConical,
      color: "orange",
    },
    {
      name: t("products.herbal.name"),
      description: t("products.herbal.desc"),
      icon: Leaf,
      color: "green",
    },
    {
      name: t("products.medical.name"),
      description: t("products.medical.desc"),
      icon: Stethoscope,
      color: "red",
    },
    {
      name: t("products.consumer.name"),
      description: t("products.consumer.desc"),
      icon: HeartPulse,
      color: "yellow",
    },
    {
      name: t("products.cosmetic.name"),
      description: t("products.cosmetic.desc"),
      icon: Sparkles,
      color: "pink",
    },
  ];

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#4AB8D3] font-semibold text-sm uppercase tracking-wider">
              {t("products.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {t("products.title")}
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              return (
                <div
                  key={category.name}
                  className={`${colors.bg} ${colors.hover} rounded-xl p-5 transition-all duration-300 cursor-default group`}
                >
                  <div
                    className={`${colors.icon} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className={`${colors.text} font-semibold text-sm mb-1`}>
                    {category.name}
                  </h3>
                  <p className={`${colors.text} text-sm font-medium leading-relaxed opacity-80`}>
                    {category.description}
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

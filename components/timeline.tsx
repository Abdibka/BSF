"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLanguage();

  const milestones = [
    {
      year: "2010",
      title: t("timeline.2010.title"),
      event: t("timeline.2010.event"),
    },
    {
      year: "2016",
      title: t("timeline.2016.title"),
      event: t("timeline.2016.event"),
    },
    {
      year: "2021",
      title: t("timeline.2021.title"),
      event: t("timeline.2021.event"),
    },
    {
      year: "2025",
      title: t("timeline.2025.title"),
      event: t("timeline.2025.event"),
    },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
            setLineHeight((index + 1) * 25);
          }
        },
        { threshold: 0.5 },
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#4AB8D3] font-semibold text-sm uppercase tracking-wider">
              {t("timeline.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {t("timeline.title")}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2">
              <div
                className="w-full bg-gradient-to-b from-[#4AB8D3] to-orange-500 transition-all duration-1000 ease-out"
                style={{ height: `${lineHeight}%` }}
              />
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 border-4 border-white shadow z-10 transition-all duration-500 ${
                      visibleItems.includes(index)
                        ? index % 2 === 0
                          ? "bg-[#4AB8D3] scale-100"
                          : "bg-orange-500 scale-100"
                        : "bg-gray-300 scale-75"
                    }`}
                    style={{
                      boxShadow: visibleItems.includes(index)
                        ? index % 2 === 0
                          ? "0 0 20px rgba(74, 184, 211, 0.5)"
                          : "0 0 20px rgba(249, 115, 22, 0.5)"
                        : "none",
                    }}
                  />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} transition-all duration-700 ${
                      visibleItems.includes(index)
                        ? "opacity-100 translate-x-0"
                        : index % 2 === 0
                          ? "opacity-0 -translate-x-8 md:-translate-x-8"
                          : "opacity-0 translate-x-8 md:translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${
                        index % 2 === 0
                          ? "hover:border-[#8FDAEB]"
                          : "hover:border-orange-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className={`font-bold text-2xl ${index % 2 === 0 ? "text-[#4AB8D3]" : "text-orange-600"}`}
                        >
                          {milestone.year}
                        </span>
                        <span className="text-gray-400">—</span>
                        <span className="font-semibold text-gray-800">
                          {milestone.title}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

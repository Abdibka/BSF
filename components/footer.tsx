"use client"

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Image
                  src="/logo.png"
                  alt="PT Bintang Semesta Farma"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-semibold">PT Bintang Semesta Farma</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t("footer.tagline")}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                © 2025 PT Bintang Semesta Farma. {t("footer.rights")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

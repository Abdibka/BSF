"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  // Header
  "nav.about": { id: "Tentang Kami", en: "About Us" },
  "nav.services": { id: "Layanan", en: "Services" },
  "nav.products": { id: "Produk", en: "Products" },
  "nav.network": { id: "Jaringan", en: "Network" },
  "nav.contact": { id: "Kontak", en: "Contact" },

  // Trust Badges
  "badge.pbf": { id: "Berizin PBF Resmi", en: "Licensed PBF" },
  "badge.cdob": {
    id: "Sertifikasi CDOB & CDAKB",
    en: "CDOB & CDAKB Certified",
  },
  "badge.import": { id: "Izin Importir", en: "Import License" },
  "badge.psef": { id: "PSEF Aktif", en: "Active PSEF" },

  // Hero Section
  "hero.badge": {
    id: "Distributor Farmasi Berizin Resmi",
    en: "Licensed Pharmaceutical Distributor",
  },
  "hero.title1": {
    id: "Solusi Distribusi Farmasi",
    en: "Trusted Pharmaceutical Distribution",
  },
  "hero.title2": { id: "Terpercaya", en: "Solutions" },
  "hero.title3": { id: "di Indonesia", en: "in Indonesia" },
  "hero.subtitle": {
    id: "Menyediakan solusi distribusi obat dan produk kesehatan yang aman, efisien, dan sepenuhnya sesuai regulasi kesehatan Indonesia.",
    en: "Providing safe, efficient medicine and healthcare product distribution solutions, fully compliant with Indonesian health regulations.",
  },
  "hero.safe": { id: "Terjamin Aman", en: "Guaranteed Safe" },
  "hero.safe.sub": { id: "100% Produk Asli", en: "100% Authentic Products" },
  "hero.fast": { id: "Distribusi Cepat", en: "Fast Distribution" },
  "hero.fast.sub": { id: "Seluruh Indonesia", en: "Across Indonesia" },
  "hero.certified": { id: "Bersertifikasi", en: "Certified" },
  "hero.certified.sub": { id: "CDOB & GDP", en: "CDOB & GDP" },

  // About Section
  "about.label": { id: "Tentang Kami", en: "About Us" },
  "about.title": {
    id: "Mitra Andal untuk Industri Farmasi Indonesia",
    en: "Reliable Partner for Indonesia's Pharmaceutical Industry",
  },
  "about.p1.1": {
    id: "Di tengah pertumbuhan industri kesehatan Indonesia,",
    en: "In the midst of Indonesia's growing healthcare industry,",
  },
  "about.p1.2": {
    id: "hadir sebagai distributor farmasi berizin resmi yang berkomitmen menghadirkan produk kesehatan berkualitas ke seluruh pelosok negeri.",
    en: "is here as an officially licensed pharmaceutical distributor committed to delivering quality healthcare products to all corners of the nation.",
  },
  "about.p2.1": {
    id: "Dengan izin lengkap sebagai",
    en: "With complete licenses as",
  },
  "about.p2.2": {
    id: "—kami melayani apotek, klinik, rumah sakit, hingga institusi pemerintah dengan standar distribusi yang aman, cepat, dan sesuai regulasi.",
    en: "—we serve pharmacies, clinics, hospitals, and government institutions with safe, fast, and regulation-compliant distribution standards.",
  },
  "about.stat.branch": { id: "Cabang PBF", en: "PBF Branches" },
  "about.stat.salespoint": { id: "Sales Point", en: "Sales Points" },
  "about.stat.system": { id: "Sistem Terintegrasi", en: "Integrated System" },

  // Services Section
  "services.label": { id: "Layanan", en: "Services" },
  "services.title": { id: "Layanan Kami", en: "Our Services" },
  "services.distribution.title": {
    id: "Distribusi & Logistik",
    en: "Distribution & Logistics",
  },
  "services.distribution.desc": {
    id: "Pengiriman tepat waktu ke seluruh Indonesia",
    en: "On-time delivery across Indonesia",
  },
  "services.warehouse.title": {
    id: "Manajemen Gudang",
    en: "Warehouse Management",
  },
  "services.warehouse.desc": {
    id: "Fasilitas sesuai standar CDOB/CDAKB dengan cold chain",
    en: "CDOB/CDAKB compliant facilities with cold chain",
  },
  "services.retail.title": { id: "Apotek Retail", en: "Retail Pharmacy" },
  "services.retail.desc": {
    id: "7 apotek terintegrasi melayani konsumen langsung",
    en: "7 integrated pharmacies serving direct consumers",
  },
  "services.import.title": { id: "Layanan Impor", en: "Import Services" },
  "services.import.desc": {
    id: "Dukungan regulasi dan proses impor produk farmasi",
    en: "Regulatory support and pharmaceutical import processing",
  },
  "services.digital.title": { id: "Platform Digital", en: "Digital Platform" },
  "services.digital.desc": {
    id: "Pemesanan online B2B melalui sistem PSEF",
    en: "B2B online ordering via PSEF system",
  },

  // Product Categories
  "products.label": { id: "Produk", en: "Products" },
  "products.title": { id: "Kategori Produk", en: "Product Categories" },
  "products.subtitle": {
    id: "Kami mendistribusikan berbagai kategori produk kesehatan berkualitas untuk memenuhi kebutuhan mitra dan masyarakat Indonesia",
    en: "We distribute various categories of quality healthcare products to meet the needs of our partners and the Indonesian community",
  },
  "products.otc.name": { id: "Obat Bebas (OTC)", en: "Over-the-Counter (OTC)" },
  "products.otc.desc": {
    id: "Obat yang dapat dibeli tanpa resep dokter",
    en: "Medicines available without prescription",
  },
  "products.generic.name": { id: "Obat Generik", en: "Generic Medicines" },
  "products.generic.desc": {
    id: "Obat dengan kualitas sama, harga terjangkau",
    en: "Same quality medicines at affordable prices",
  },
  "products.vitamin.name": {
    id: "Vitamin & Suplemen",
    en: "Vitamins & Supplements",
  },
  "products.vitamin.desc": {
    id: "Nutrisi untuk menjaga kesehatan tubuh",
    en: "Nutrients for maintaining body health",
  },
  "products.herbal.name": { id: "Produk Herbal", en: "Herbal Products" },
  "products.herbal.desc": {
    id: "Obat alami dari bahan-bahan herbal",
    en: "Natural medicines from herbal ingredients",
  },
  "products.medical.name": { id: "Alat Kesehatan", en: "Medical Devices" },
  "products.medical.desc": {
    id: "Peralatan medis untuk kebutuhan kesehatan",
    en: "Medical equipment for healthcare needs",
  },
  "products.consumer.name": { id: "Consumer Health", en: "Consumer Health" },
  "products.consumer.desc": {
    id: "Produk kesehatan untuk kebutuhan sehari-hari",
    en: "Health products for daily needs",
  },
  "products.cosmetic.name": { id: "Kosmetik", en: "Cosmetics" },
  "products.cosmetic.desc": {
    id: "Produk perawatan kulit dan kecantikan",
    en: "Skincare and beauty products",
  },

  // Principals Section
  "principals.label": { id: "Principal", en: "Principals" },
  "principals.title": { id: "Principal Kami", en: "Our Principals" },
  "principals.subtitle": {
    id: "Bermitra dengan perusahaan farmasi terkemuka untuk produk berkualitas.",
    en: "Partnering with leading pharmaceutical companies for quality products.",
  },

  // Network Section
  "network.label": { id: "Jaringan", en: "Network" },
  "network.title": { id: "Jaringan Kami", en: "Our Network" },
  "network.pbf": { id: "Cabang PBF", en: "PBF Branches" },
  "network.salespoint": { id: "Sales Point", en: "Sales Points" },
  "network.maps": { id: "Buka di Google Maps", en: "Open in Google Maps" },

  // Gallery Section
  "gallery.label": { id: "Galeri", en: "Gallery" },
  "gallery.title": {
    id: "Momen & Kegiatan Kami",
    en: "Our Moments & Activities",
  },
  "gallery.subtitle": {
    id: "Dokumentasi perjalanan dan kolaborasi PT Bintang Semesta Farma bersama tim, mitra, dan komunitas.",
    en: "Documentation of PT Bintang Semesta Farma's journey and collaborations with our team, partners, and community.",
  },
  "gallery.employee.title": {
    id: "Employee Gathering",
    en: "Employee Gathering",
  },
  "gallery.employee.caption": {
    id: "Mempererat kebersamaan tim BSF dalam suasana penuh keakraban. Karena di balik setiap kesuksesan distribusi, ada tim solid yang saling mendukung.",
    en: "Strengthening the BSF team bond in a warm atmosphere. Because behind every successful distribution, there's a solid team supporting each other.",
  },
  "gallery.bca.title": { id: "BCA Gathering", en: "BCA Gathering" },
  "gallery.bca.caption": {
    id: "Kolaborasi strategis dengan mitra perbankan terpercaya. Bersama BCA, kami terus memperkuat fondasi bisnis untuk pelayanan yang lebih optimal.",
    en: "Strategic collaboration with trusted banking partner. Together with BCA, we continue to strengthen our business foundation for optimal service.",
  },
  "gallery.uph.title": {
    id: "Universitas Pelita Harapan",
    en: "Pelita Harapan University",
  },
  "gallery.uph.caption": {
    id: "Kerjasama dengan Jurusan Apoteker UPH dalam membangun sinergi antara dunia industri dan akademisi untuk kemajuan farmasi Indonesia.",
    en: "Collaboration with UPH Pharmacy Department in building synergy between industry and academia for the advancement of Indonesian pharmacy.",
  },
  "gallery.blibli.title": {
    id: "Blibli & Tiket.com",
    en: "Blibli & Tiket.com",
  },
  "gallery.blibli.caption": {
    id: "Memperluas jaringan melalui kemitraan dengan ekosistem digital terkemuka. Inovasi dan adaptasi adalah kunci pertumbuhan di era modern.",
    en: "Expanding network through partnerships with leading digital ecosystems. Innovation and adaptation are keys to growth in the modern era.",
  },

  // Contact Section
  "contact.label": { id: "Kontak", en: "Contact" },
  "contact.title": { id: "Hubungi Kami", en: "Contact Us" },
  "contact.address": { id: "Alamat", en: "Address" },
  "contact.phone": { id: "Telepon", en: "Phone" },
  "contact.whatsapp.message": {
    id: "Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20PT%20Bintang%20Semesta%20Farma",
    en: "Hello,%20I%20would%20like%20to%20inquire%20about%20PT%20Bintang%20Semesta%20Farma%20products",
  },

  // Footer
  "footer.tagline": {
    id: "Distributor Farmasi Berizin Resmi",
    en: "Licensed Pharmaceutical Distributor",
  },
  "footer.rights": { id: "All rights reserved.", en: "All rights reserved." },

  // Timeline Section
  "timeline.label": { id: "Perjalanan", en: "Journey" },
  "timeline.title": { id: "Perjalanan Kami", en: "Our Journey" },
  "timeline.2010.title": { id: "Pondasi Awal", en: "Early Foundation" },
  "timeline.2010.event": {
    id: "Merintis distribusi produk kesehatan skala kecil dengan fokus membangun jaringan apotek dan klinik.",
    en: "Pioneering small-scale healthcare product distribution with focus on building pharmacy and clinic networks.",
  },
  "timeline.2016.title": {
    id: "Ekspansi & Standarisasi",
    en: "Expansion & Standardization",
  },
  "timeline.2016.event": {
    id: "Membuka cabang PBF pertama, memperluas lini produk (vitamin, herbal, OTC), dan menerapkan sistem distribusi berbasis SOP CDOB.",
    en: "Opening first PBF branch, expanding product lines (vitamins, herbal, OTC), and implementing CDOB SOP-based distribution system.",
  },
  "timeline.2021.title": {
    id: "Transformasi Legal",
    en: "Legal Transformation",
  },
  "timeline.2021.event": {
    id: "Resmi sebagai PBF berlisensi penuh dengan sertifikasi CDOB, CDAKB, izin Importir, dan PSEF untuk layanan elektronik.",
    en: "Officially became a fully licensed PBF with CDOB, CDAKB certification, Importer license, and PSEF for electronic services.",
  },
  "timeline.2025.title": {
    id: "Pertumbuhan Terintegrasi",
    en: "Integrated Growth",
  },
  "timeline.2025.event": {
    id: "Mengoperasikan 5 cabang PBF dan 5 sales point dengan sistem digital terintegrasi untuk supply chain, WMS, dan digital order.",
    en: "Operating 5 PBF branches and 5 sales points with integrated digital systems for supply chain, WMS, and digital ordering.",
  },

  // Vision & Mission Section
  "visionmission.label": { id: "Visi & Misi", en: "Vision & Mission" },
  "visionmission.title": {
    id: "Komitmen Kami untuk Indonesia",
    en: "Our Commitment to Indonesia",
  },
  "visionmission.vision.title": { id: "Visi", en: "Vision" },
  "visionmission.vision.text": {
    id: "Menjadi distributor obat dan produk kesehatan yang terpercaya, patuh regulasi, dan memberikan layanan terbaik di seluruh Indonesia.",
    en: "To become a trusted medicine and healthcare product distributor, compliant with regulations, and providing the best service across Indonesia.",
  },
  "visionmission.mission.title": { id: "Misi", en: "Mission" },
  "visionmission.mission.1": {
    id: "Menyediakan distribusi cepat dan aman sesuai standar CDOB & CDAKB.",
    en: "Provide fast and safe distribution according to CDOB & CDAKB standards.",
  },
  "visionmission.mission.2": {
    id: "Memperluas akses masyarakat terhadap produk farmasi berkualitas.",
    en: "Expand public access to quality pharmaceutical products.",
  },
  "visionmission.mission.3": {
    id: "Membangun kemitraan jangka panjang dengan principals dan fasilitas kesehatan.",
    en: "Build long-term partnerships with principals and healthcare facilities.",
  },
  "visionmission.mission.4": {
    id: "Mengoptimalkan teknologi digital dalam sistem distribusi dan pemesanan.",
    en: "Optimize digital technology in distribution and ordering systems.",
  },
  "visionmission.values.integrity.desc": {
    id: "Menjunjung tinggi kejujuran dan etika dalam setiap aktivitas bisnis",
    en: "Upholding honesty and ethics in every business activity",
  },
  "visionmission.values.reliability.desc": {
    id: "Dapat diandalkan dalam memenuhi komitmen kepada mitra",
    en: "Reliable in fulfilling commitments to partners",
  },
  "visionmission.values.excellence.desc": {
    id: "Memberikan layanan terbaik yang melampaui ekspektasi",
    en: "Delivering the best service that exceeds expectations",
  },
  "visionmission.values.compliance.desc": {
    id: "Patuh terhadap regulasi dan standar industri farmasi",
    en: "Compliant with pharmaceutical industry regulations and standards",
  },
  "visionmission.values.innovation.desc": {
    id: "Terus berinovasi untuk solusi distribusi yang lebih baik",
    en: "Continuously innovating for better distribution solutions",
  },

  // Advantages Section
  "advantages.label": { id: "Keunggulan", en: "Advantages" },
  "advantages.title": { id: "Mengapa Memilih Kami", en: "Why Choose Us" },
  "advantages.subtitle": {
    id: "Dengan fasilitas gudang modern dan tim profesional, kami memastikan setiap produk farmasi tersimpan dan terdistribusi dengan standar kualitas tertinggi.",
    en: "With modern warehouse facilities and professional team, we ensure every pharmaceutical product is stored and distributed with the highest quality standards.",
  },
  "advantages.legal.title": {
    id: "Legalitas Lengkap",
    en: "Complete Legality",
  },
  "advantages.legal.desc": {
    id: "PBF, CDOB, CDAKB, Importir, PSEF—semua izin resmi terpenuhi.",
    en: "PBF, CDOB, CDAKB, Importer, PSEF—all official licenses fulfilled.",
  },
  "advantages.fast.title": { id: "Distribusi Cepat", en: "Fast Distribution" },
  "advantages.fast.desc": {
    id: "Jaringan logistik luas dengan pelacakan real-time.",
    en: "Wide logistics network with real-time tracking.",
  },
  "advantages.integrated.title": {
    id: "Sistem Terintegrasi",
    en: "Integrated System",
  },
  "advantages.integrated.desc": {
    id: "WMS, OMS, dan kontrol batch & expiry otomatis.",
    en: "WMS, OMS, and automatic batch & expiry control.",
  },
  "advantages.trusted.title": { id: "Mitra Terpercaya", en: "Trusted Partner" },
  "advantages.trusted.desc": {
    id: "14+ tahun pengalaman melayani industri farmasi Indonesia.",
    en: "14+ years of experience serving Indonesia's pharmaceutical industry.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "id" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) return key;
    return translation[language] || translation.id || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

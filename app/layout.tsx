import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

import {
  DM_Sans,
  JetBrains_Mono as V0_Font_JetBrains_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google";

// Initialize fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});
const _jetBrainsMono = V0_Font_JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PT Bintang Semesta Farma | Distributor Farmasi Terpercaya di Indonesia",
  description:
    "PT Bintang Semesta Farma adalah distributor farmasi (PBF) berizin resmi dengan sertifikasi CDOB & CDAKB. Distribusi obat dan produk kesehatan yang aman, cepat, dan 100% sesuai regulasi ke seluruh Indonesia.",
  keywords: [
    "distributor farmasi",
    "distributor farmasi Indonesia",
    "PBF",
    "pedagang besar farmasi",
    "CDOB",
    "CDAKB",
    "apotek",
    "obat",
    "produk kesehatan",
    "supplier obat",
    "distribusi obat",
    "PT Bintang Semesta Farma",
    "Bintang Semesta Farma",
  ],
  authors: [{ name: "PT Bintang Semesta Farma" }],
  creator: "PT Bintang Semesta Farma",
  publisher: "PT Bintang Semesta Farma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://preview-bsf.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PT Bintang Semesta Farma | Distributor Farmasi Terpercaya",
    description:
      "Distributor farmasi (PBF) berizin resmi dengan sertifikasi CDOB & CDAKB. Distribusi obat dan produk kesehatan ke seluruh Indonesia.",
    url: "https://preview-bsf.vercel.app",
    siteName: "PT Bintang Semesta Farma",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "PT Bintang Semesta Farma Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Bintang Semesta Farma | Distributor Farmasi Terpercaya",
    description:
      "Distributor farmasi (PBF) berizin resmi dengan sertifikasi CDOB & CDAKB di Indonesia.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Bintang Semesta Farma",
  alternateName: "Bintang Semesta Farma",
  url: "https://preview-bsf.vercel.app",
  logo: "https://preview-bsf.vercel.app/logo.png",
  description:
    "Distributor farmasi (PBF) berizin resmi dengan sertifikasi CDOB & CDAKB. Distribusi obat dan produk kesehatan ke seluruh Indonesia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruko Mutiara Taman Palem, Blok D8 No.88-90",
    addressLocality: "Cengkareng",
    addressRegion: "Jakarta Barat",
    postalCode: "11810",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-811-1254-0380",
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: [],
  foundingDate: "2019",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  knowsAbout: [
    "Pharmaceutical Distribution",
    "CDOB Certification",
    "CDAKB Certification",
    "Medicine Supply Chain",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://preview-bsf.vercel.app",
  name: "PT Bintang Semesta Farma",
  image: "https://preview-bsf.vercel.app/logo.png",
  telephone: "+62-811-1254-0380",
  email: "pt_bsf@yahoo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruko Mutiara Taman Palem, Blok D8 No.88-90",
    addressLocality: "Cengkareng",
    addressRegion: "Jakarta Barat",
    postalCode: "11810",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.1447,
    longitude: 106.7283,
  },
  url: "https://preview-bsf.vercel.app",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}

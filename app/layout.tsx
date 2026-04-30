import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StructuredData from "@/components/structured-data";

const kenyanCoffee = localFont({
  src: [
    {
      path: "../fonts/kenyan-coffee-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/kenyan-coffee-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kenyan",
  display: "swap",
});

const satoshi = localFont({
  src: "../fonts/satoshi-variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luneescoladedanca.com"),
  title: {
    default: "Lune Escola de Dança | Aulas de Ballet, Hip Hop, Jazz-Funk e K-pop",
    template: "%s | Lune Escola de Dança",
  },
  description:
    "Transforme sua paixão em ritmo! Escola de dança com aulas de Ballet, Hip Hop, Jazz-Funk e K-pop para todas as idades. Do iniciante ao avançado, com estrutura completa e método de ensino comprovado. Venha fazer parte da Lune!",
  keywords: [
    "escola de dança",
    "aulas de dança",
    "ballet",
    "hip hop",
    "jazz funk",
    "k-pop",
    "dança urbana",
    "dança clássica",
    "aulas de dança para iniciantes",
    "aulas de dança para todas as idades",
    "escola de dança Jundiaí",
    "aulas de dança Jundiaí",
    "dança Jundiaí",
    "escola de dança Ponte São João",
    "curso de dança Jundiaí",
    "estúdio de dança Jundiaí",
    "aprender dança Jundiaí",
    "dança contemporânea",
    "aprender dança",
    "estúdio de dança",
    "Lune",
    "Lune Escola de Dança",
    "transforme sua paixão em ritmo",
  ],
  authors: [{ name: "Lune Escola de Dança" }],
  creator: "Lune Escola de Dança",
  publisher: "Lune Escola de Dança",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.luneescoladedanca.com",
    siteName: "Lune Escola de Dança",
    title: "Lune Escola de Dança | Aulas de Ballet, Hip Hop, Jazz-Funk e K-pop",
    description:
      "Transforme sua paixão em ritmo! Escola de dança com aulas de Ballet, Hip Hop, Jazz-Funk e K-pop para todas as idades. Do iniciante ao avançado, com estrutura completa e método de ensino comprovado.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lune Escola de Dança - Transforme sua paixão em ritmo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lune Escola de Dança | Aulas de Ballet, Hip Hop, Jazz-Funk e K-pop",
    description:
      "Transforme sua paixão em ritmo! Escola de dança com aulas para todas as idades. Do iniciante ao avançado.",
    images: ["/og-image.png"],
    creator: "@lunedanca",
  },
  alternates: {
    canonical: "https://www.luneescoladedanca.com",
  },
  category: "Education",
  classification: "Escola de Dança",
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Jundiaí",
    "geo.position": "-23.1864;-46.8964",
    "ICBM": "-23.1864, -46.8964",
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${kenyanCoffee.variable} ${satoshi.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

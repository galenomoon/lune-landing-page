import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Lune Escola de Dança | Transforme sua paixão em ritmo",
  description: "Lune Escola de Dança | Transforme sua paixão em ritmo",
  keywords: [
    "Lune Escola de Dança",
    "Transforme sua paixão em ritmo",
    "Dança",
    "Dança Urbana",
    "Dança Clássica",
    "Dança Brasileira",
    "Dança Internacional",
  ],
  openGraph: {
    title: "Lune Escola de Dança | Transforme sua paixão em ritmo",
    description: "Lune Escola de Dança | Transforme sua paixão em ritmo",
    images: ["/og-image.png"],
    url: "https://www.luneescoladedanca.com",
    siteName: "Lune Escola de Dança",
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kenyanCoffee.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

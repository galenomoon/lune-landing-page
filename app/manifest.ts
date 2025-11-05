import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lune Escola de Dança | Transforme sua paixão em ritmo",
    short_name: "Lune Dança",
    description:
      "Escola de dança com aulas de Ballet, Hip Hop, Jazz-Funk e K-pop para todas as idades. Do iniciante ao avançado.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#9F00C1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["education", "lifestyle"],
    lang: "pt-BR",
  };
}


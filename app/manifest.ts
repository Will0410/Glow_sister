import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Glow Sister | Maquiagem & Skincare",
    short_name: "Glow Sister",
    description:
      "Bem-vinda ao universo Glow. Maquiagem e skincare selecionados, com entrega para todo o Brasil.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#100d0c",
    theme_color: "#100d0c",
    orientation: "portrait-primary",
    categories: ["shopping", "beauty"],
    lang: "pt-BR",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

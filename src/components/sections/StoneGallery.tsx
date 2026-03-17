"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Complete stone library — all 3 CSV collections ──────────────────────────
const stones = [
  // Calming
  { name: "Verde Patagonia",    collection: "Calming",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FVerde-Patagonia-Sq_1.png&w=640&q=90" },
  { name: "White Onyx",         collection: "Calming",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FWhite-Onyx-1372x1936_V1_11zon-1.jpg&w=640&q=90" },
  { name: "Calacatta Lux",      collection: "Calming",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FCalacatta-lux_1372x1936_v1_11zon.jpg&w=640&q=90" },
  { name: "Thassos White",      collection: "Calming",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FThasos-White-1372x1936_V4.jpg&w=640&q=90" },
  { name: "Bianco Reale",       collection: "Calming",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FBIANCO-REALE-915X1291_V3.jpg&w=640&q=90" },
  { name: "Tortuga",            collection: "Calming",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FTortuga-Revised-1372x1936_44_11zon.png&w=640&q=90" },
  { name: "Statuario Baratini", collection: "Calming",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2025%2F10%2FStatBara-verticle-1.jpg&w=640&q=90" },
  { name: "Verde Onyx",         collection: "Calming",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FVerde-Onyx-1372x1936_V1_11zon-1.jpg&w=640&q=90" },
  { name: "Dover White",        collection: "Calming",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FDover-White-1372X1936_v1_11zon.jpg&w=640&q=90" },
  // Energising
  { name: "Azul Destello",      collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FAzul-Destello-1372x1936_V1_11zon.jpg&w=640&q=90" },
  { name: "Cosmos",             collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FCosmos-915x1291_V2.jpg&w=640&q=90" },
  { name: "Emerald Harmony",    collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FEmeraldHarmony1372x193.jpeg&w=640&q=90" },
  { name: "Portinari",          collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FPortinari-1372x1936_-V3.jpg&w=640&q=90" },
  { name: "Puntello",           collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FPuntello-1372x1936_11zon-1.png&w=640&q=90" },
  { name: "Rosso Pink",         collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FRossoPink1372x193.jpeg&w=640&q=90" },
  { name: "Amazonite",          collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FAmazonite-1372x1936_V1_11zon-1.jpg&w=640&q=90" },
  { name: "Fuego",              collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FFuego-915x1291_V1.jpg&w=640&q=90" },
  { name: "Golden Potro",       collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FGolden-Potro-1372x1936_v1_11zon.jpg&w=640&q=90" },
  { name: "Lemurian Blue",      collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FLemurian-1372x1936_v2_11zon-1.jpg&w=640&q=90" },
  { name: "Metal Rust",         collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FMetal-Rust-1372x1936_v1_11zon.jpg&w=640&q=90" },
  { name: "Parquet",            collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FParquet-1372x1936_V1_11zon.jpg&w=640&q=90" },
  { name: "Coliseum",           collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FColiseum-1372x1936_v1_11zon.jpg&w=640&q=90" },
  { name: "Amber Exotico",      collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FAmber-Exotico-1372x1936_v1_11zon-1.jpg&w=640&q=90" },
  { name: "Avocado",            collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FAvocado-1372x1936_Option-2_11zon-1.jpg&w=640&q=90" },
  { name: "Lanciana",           collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FLanciana-1372x1936-compressed.jpg&w=640&q=90" },
  { name: "Red Lavante",        collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FRed_Lavante_Sq_1-1.png&w=640&q=90" },
  { name: "Rosso Orobico",      collection: "Energising", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FRosso-Orobico_915x1291_V2.jpg&w=640&q=90" },
  // Refining
  { name: "Pink Onyx",          collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FPink-Onyx-Revised-1372x1936_27_11zon.png&w=640&q=90" },
  { name: "Aqua Briss",         collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FAqua-Briss-1372x1936_V1_11zon-1.jpg&w=640&q=90" },
  { name: "Capri",              collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FCapri-Revised-1372x1936_19_11zon.png&w=640&q=90" },
  { name: "Bianco Acropolis",   collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FBinaco-Acropolis-1372x1936_New-Image.jpg&w=640&q=90" },
  { name: "Crystallo Tiffany",  collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FCrystello-Tiffany-1372x1936_V4.jpg&w=640&q=90" },
  { name: "Forest Creek",       collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FForesr-Creek_915X1291_V1.jpg&w=640&q=90" },
  { name: "Laguna",             collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FLaguna-1372x1936_V3.jpg&w=640&q=90" },
  { name: "Lasa",               collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FLasa-Covilano-1372X1936_V3.jpg&w=640&q=90" },
  { name: "Monte Pulchiano",    collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FMontePulchiano1372x193.jpeg&w=640&q=90" },
  { name: "Alvorada",           collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FAlvorada-1372x1936_v1_11zon.jpg&w=640&q=90" },
  { name: "Calpe",              collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FCalpe-1372x1936_V2_11zon-1.jpg&w=640&q=90" },
  { name: "Illusion",           collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FIllusion-1372x1936_v2_11zon.jpg&w=640&q=90" },
  { name: "Mont Lucia",         collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FMONTE-LUCIA-1372X1936_11zon-1.jpg&w=640&q=90" },
  { name: "Montana",            collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FMontan-1372x1936_V1_11zon.jpg&w=640&q=90" },
  { name: "Xabia",              collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FXabia-1372x1936_v3-2nd-Option_11zon.jpg&w=640&q=90" },
  { name: "Aqua Fusion",        collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F10%2FAqua-Fusion-915x1291_v1.jpg&w=640&q=90" },
  { name: "Lumix",              collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F10%2FLumix-915x1291_v1.jpg&w=640&q=90" },
  { name: "Makia Wakia",        collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F04%2FMakia-Wakia-3.jpg&w=640&q=90" },
  { name: "Skyfall",            collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FSkyfall-1372x1936_v1_Option2_11zon-1.jpg&w=640&q=90" },
  { name: "Cavali",             collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FCavali-1372x1936_V1_11zon.jpg&w=640&q=90" },
  { name: "Bianco Eliptus",     collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FBianco-Eliptus-1372x1936-1.jpg&w=640&q=90" },
  { name: "Calacatta Gold",     collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FCalcutta-Gold-1372x1936-1.jpg&w=640&q=90" },
  { name: "Lapis Lazuli",       collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FLapis-Lazuli_915x1291_v3.jpg&w=640&q=90" },
  { name: "Estremoz",           collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FMichelangelo-1372x1936-compressed.jpg&w=640&q=90" },
  { name: "Pink Chianti",       collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FMain-Page-Images-1-1.png&w=640&q=90" },
  { name: "Vegas Gold",         collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FVegas_gold_Main_Category_1-1.png&w=640&q=90" },
  { name: "Santorini",          collection: "Refining",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FSantorini1372X193.jpeg&w=640&q=90" },
];

const tabs = ["All", "Calming", "Energising", "Refining"] as const;
type Tab = typeof tabs[number];

export default function StoneGallery() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeTab === "All" ? stones : stones.filter(s => s.collection === activeTab);

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest transition-all border ${
              activeTab === tab
                ? "bg-accent text-white border-accent"
                : "border-border text-foreground/60 hover:border-accent hover:text-accent"
            }`}
          >
            {tab}
          </button>
        ))}
        <span className="ml-auto text-foreground/40 text-sm self-center">{filtered.length} stones</span>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {filtered.map((stone, i) => (
          <motion.div
            key={stone.name}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
            className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-zoom-in"
            onClick={() => openLightbox(i)}
          >
            <Image
              src={stone.src}
              alt={stone.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-[10px] uppercase tracking-widest text-accent font-semibold">{stone.collection}</p>
              <p className="text-white text-xs font-semibold truncate">{stone.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 z-60 text-white/60 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 z-60 text-white/60 hover:text-white transition-colors p-2"
              onClick={e => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-[min(90vw,500px)] aspect-[3/4] rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].name}
                fill
                className="object-cover"
                sizes="500px"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-accent text-xs uppercase tracking-widest font-semibold mb-1">
                  {filtered[lightboxIndex].collection}
                </p>
                <p className="text-white text-lg font-semibold">{filtered[lightboxIndex].name}</p>
                <p className="text-white/40 text-xs mt-1">{lightboxIndex + 1} / {filtered.length}</p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 z-60 text-white/60 hover:text-white transition-colors p-2"
              onClick={e => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ─── 12 curated highlights for homepage strip ─────────────────────────────
const highlights = [
  { name: "Calacatta Gold",  src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FCalcutta-Gold-1372x1936-1.jpg&w=640&q=90" },
  { name: "Azul Destello",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FAzul-Destello-1372x1936_V1_11zon.jpg&w=640&q=90" },
  { name: "Verde Patagonia", src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FVerde-Patagonia-Sq_1.png&w=640&q=90" },
  { name: "Rosso Pink",      src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FRossoPink1372x193.jpeg&w=640&q=90" },
  { name: "Lapis Lazuli",    src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FLapis-Lazuli_915x1291_v3.jpg&w=640&q=90" },
  { name: "Calacatta Lux",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FCalacatta-lux_1372x1936_v1_11zon.jpg&w=640&q=90" },
  { name: "Amazonite",       src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FAmazonite-1372x1936_V1_11zon-1.jpg&w=640&q=90" },
  { name: "Santorini",       src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FSantorini1372X193.jpeg&w=640&q=90" },
  { name: "Vegas Gold",      src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FVegas_gold_Main_Category_1-1.png&w=640&q=90" },
  { name: "Pink Onyx",       src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FPink-Onyx-Revised-1372x1936_27_11zon.png&w=640&q=90" },
  { name: "Lemurian Blue",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FLemurian-1372x1936_v2_11zon-1.jpg&w=640&q=90" },
  { name: "Amber Exotico",   src: "https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FAmber-Exotico-1372x1936_v1_11zon-1.jpg&w=640&q=90" },
];

function StoneCard({ stone }: { stone: typeof highlights[0] }) {
  return (
    <div className="relative w-40 h-52 shrink-0 mx-2 rounded-xl overflow-hidden group cursor-pointer">
      <Image src={stone.src} alt={stone.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="165px" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold leading-tight z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{stone.name}</p>
    </div>
  );
}

export default function ApplicationsGallery() {
  const doubled = [...highlights, ...highlights];
  return (
    <section id="applications" className="py-20 bg-background text-foreground border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="font-display italic text-accent text-lg tracking-wide mb-3 block">A taste of what&apos;s possible</span>
              <h2 className="text-foreground">Stone Highlights</h2>
            </div>
            <a href="/collections" className="text-accent text-sm font-semibold underline underline-offset-4 hover:text-foreground transition-colors">
              View all 54 varieties →
            </a>
          </div>
        </motion.div>
      </div>
      <div className="flex group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {doubled.map((s, i) => <StoneCard key={i} stone={s} />)}
        </div>
      </div>
    </section>
  );
}

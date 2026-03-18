"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Link from 'next/link';
import stonesData from "@/data/stones.json";

interface Stone {
  name: string;
  category: string;
  image: string;
}

const stones: Stone[] = stonesData;

export default function StoneGallery() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-foreground/40 text-lg italic tracking-widest uppercase text-xs">Loading collection...</div>}>
      <StoneGalleryContent />
    </Suspense>
  );
}

function StoneGalleryContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeTab, setActiveTab ] = useState(categoryParam || "All");
  const [prevCategoryParam, setPrevCategoryParam] = useState(categoryParam);

  // Sync tab with URL if it changes externally (e.g., from Navbar)
  if (categoryParam !== prevCategoryParam) {
    setPrevCategoryParam(categoryParam);
    setActiveTab(categoryParam || "All");
  }

  // Dynamically derive categories from data
  const categories = useMemo(() => {
    const cats = new Set(stones.map(s => s.category));
    return ["All", ...Array.from(cats).sort()];
  }, []);

  const filtered = useMemo(() => {
    return stones.filter(stone => {
      const matchesCategory = activeTab === "All" || stone.category === activeTab;
      const matchesSearch = stone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            stone.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const openLightbox = (index: number) => setLightboxIndex(index);
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
      {/* Search and Filters Bar */}
      <div className="flex flex-col gap-8 mb-12">
        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto w-full group">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-foreground/40 group-focus-within:text-accent transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search for Alaska Gold, Absolute Black, Marble, Granite..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-8 py-5 bg-background border border-border rounded-full text-foreground/80 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all shadow-sm group-hover:shadow-md text-sm md:text-base"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSearchQuery(""); // Clear search when switching tabs for better UX
              }}
              className={`px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all border ${
                activeTab === tab
                  ? "bg-accent text-white border-accent shadow-glow-amber"
                  : "border-border text-foreground/60 hover:border-accent hover:text-accent bg-background/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="text-center">
          <span className="text-foreground/40 text-xs font-medium uppercase tracking-widest">
            Showing {filtered.length} varieties
          </span>
        </div>
      </div>

      {/* Grid Gallery */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((stone, i) => (
            <motion.div
              key={`${stone.name}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i % 20) * 0.03, duration: 0.4 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-zoom-in shadow-sm hover:shadow-2xl transition-all duration-500"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={stone.image}
                alt={stone.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                unoptimized // External images might not be in domain list, or just for faster dev
              />
              {/* Hover overlay with glassmorphism label */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Label - Always visible but enhanced on hover */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/40 backdrop-blur-md border border-white/20 rounded-xl translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-[9px] uppercase tracking-widest text-accent font-bold mb-0.5">{stone.category}</p>
                <p className="text-foreground text-xs font-bold truncate">{stone.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-foreground/40 text-lg italic">No stones found matching your search...</p>
          <button 
            onClick={() => {setSearchQuery(""); setActiveTab("All");}}
            className="mt-4 text-accent font-bold uppercase tracking-widest text-xs underline underline-offset-4"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
          {lightboxIndex !== null && (() => {
            const currentStone = filtered[lightboxIndex];
            if (!currentStone) return null;
            return (
              <motion.div
                key="lightbox-content"
                initial={{ opacity: 1 }}
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
                  className="relative w-[min(90vw,500px)] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                  onClick={e => e.stopPropagation()}
                >
                  <Image
                    src={currentStone.image}
                    alt={currentStone.name}
                    fill
                    className="object-cover"
                    sizes="500px"
                    priority
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <p className="text-accent text-xs uppercase tracking-widest font-bold mb-2">
                      {currentStone.category}
                    </p>
                    <p className="text-white text-2xl font-bold mb-1">{currentStone.name}</p>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter">
                        Variety {lightboxIndex + 1} of {filtered.length}
                      </p>
                      <Link 
                        href="#quote" 
                        onClick={closeLightbox}
                        className="text-white text-[10px] font-bold uppercase tracking-widest bg-accent px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                      >
                        Inquire Now
                      </Link>
                    </div>
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
            );
          })()}
      </AnimatePresence>
    </>
  );
}

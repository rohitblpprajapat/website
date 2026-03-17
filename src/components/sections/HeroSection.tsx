"use client";

import { motion } from "framer-motion";
import AntigravitySlabs from "../3d/AntigravitySlabs";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-hero flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <AntigravitySlabs />

      {/* Modern Architectural Grid */}
      <div className="absolute inset-0 bg-grid z-0" />

      {/* Scale Reference Overlay */}
      <div className="absolute bottom-20 left-8 md:bottom-24 md:left-12 flex items-center gap-4 z-20 opacity-40 pointer-events-none">
        <div className="h-[1px] w-12 bg-foreground" />
        <span className="text-[10px] uppercase tracking-widest font-mono text-foreground font-semibold">Standard Slab: 10ft × 6ft</span>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none mt-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="relative"
        >
          {/* Contrast Glow for better text legibility across all themes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] bg-background/80 blur-hero -z-10 rounded-full pointer-events-none" />

          <span className="text-gold font-semibold tracking-editorial uppercase text-xs md:text-sm mb-6 block drop-shadow-sm">
            The Pinnacle of Stone Craftsmanship
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-foreground mb-4 leading-none tracking-tight">
            Weightless Elegance, <br /> Grounded in Quality.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 transition-colors">
            Discover the timeless strength of Rajasthan Black & Kharda Red granite. Premium surfaces designed for architectural excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
            <Link 
              href="#quote" 
              className="relative group flex items-center justify-center bg-gold text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
              <div className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                Get a Wholesale Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link 
              href="#catalog" 
              className="group flex items-center justify-center gap-2 bg-background/50 backdrop-blur-md border-2 border-foreground text-foreground px-8 py-[14px] rounded-full text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all hover:scale-105"
            >
              <Download size={20} />
              Download 2026 Catalog
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlays for Text Readability & Deep Space Feel */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-0 pointer-events-none bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-1/3 z-0 pointer-events-none bg-gradient-to-b from-background/80 to-transparent" />

      {/* Modern Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-scroll font-semibold text-foreground/50">Scroll</span>
        <div className="w-[1px] h-12 bg-foreground/10 overflow-hidden relative">
          <motion.div 
            className="w-full h-1/2 bg-gold absolute top-0"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

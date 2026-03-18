"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CollectionsHeader() {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden mb-12">
      {/* Background Marble Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/capri-marble.png" // Luxury Capri Marble from Stonex Global assets
          alt="Capri Marble Luxury Background"
          fill
          className="object-cover opacity-80 filter contrast-110"
          priority
        />
        {/* Subtle Overlay only at top for Navbar visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display italic text-accent text-xl tracking-wide mb-4 block drop-shadow-sm">
              Curated Excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8 text-foreground tracking-tighter leading-none drop-shadow-md">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80">Collection</span>
            </h1>
            <p className="text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-sm">
              From the calming depths of White Onyx to the energising pulse of Azul Destello. 
              A comprehensive library of the world&apos;s finest stone.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Bottom Border/Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50 z-20" />
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import AntigravitySlabs from "../3d/AntigravitySlabs";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Ken Burns parallax: text drifts up slightly as the user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-hero flex items-center justify-center overflow-hidden bg-background">
      {/* Premium Marble Background with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F01%2FCalcutta-Gold-1372x1936-1.jpg&w=640&q=90"
          alt="Calacatta Gold Marble Background"
          fill
          className="object-cover opacity-20 scale-110 animate-ken-burns"
          priority
        />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/80" />
      </div>

      {/* 3D Floating Slabs — Airy, visible against light cream bg */}
      <AntigravitySlabs />

      {/* Subtle architectural grid overlay */}
      <div className="absolute inset-0 bg-grid z-0" />

      {/* Bottom gradient fade for smooth section blending */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 z-0 pointer-events-none bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-x-0 top-0 h-1/4 z-0 pointer-events-none bg-gradient-to-b from-background/60 to-transparent" />

      {/* Scale Reference — bottom left, subtle */}
      <div className="absolute bottom-24 left-8 md:left-12 flex items-center gap-3 z-20 opacity-40 pointer-events-none">
        <div className="h-[1px] w-10 bg-foreground" />
        <span className="text-[10px] uppercase tracking-widest font-mono text-foreground font-semibold">Standard 10ft × 6ft Slab</span>
      </div>

      {/* Hero Content — parallax on scroll */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Cormorant Garamond italic eyebrow */}
          <span className="font-display italic text-accent text-base md:text-lg tracking-wide mb-5 block drop-shadow-sm">
            Premium Granite — Kishangarh, Rajasthan
          </span>

          {/* Playfair Display H1 — generous tracking-tight for serif */}
          <h1 className="text-foreground mb-6">
            Stone of Distinction.<br />
            <span className="text-accent">Crafted in Kishangarh.</span>
          </h1>

          <p className="text-foreground/75 text-lg mx-auto mb-10 max-w-[52ch]">
            Rajasthan Black Granite and Kharda Red Granite — quarried,
            processed, and supplied directly from Kishangarh to your project site.
          </p>

          {/* CTAs — pointer-events enabled inside */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pointer-events-auto">
            {/* Primary CTA — Sheen shimmer effect */}
            <Link
              href="#quote"
              className="relative group inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 shadow-shadow-glow-amber"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shimmer" />
              <span className="relative z-10 flex items-center gap-2">
                Request a Wholesale Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Secondary CTA — outlined border */}
            <Link
              href="#catalog"
              className="group inline-flex items-center justify-center gap-2 border-2 border-foreground/30 text-foreground px-8 py-[14px] rounded-full text-sm font-semibold uppercase tracking-widest hover:border-accent hover:text-accent transition-all hover:scale-105"
            >
              <Download size={18} />
              Download 2026 Catalog
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-scroll font-semibold text-foreground/40">Scroll</span>
        <div className="w-[1px] h-10 bg-foreground/15 overflow-hidden relative">
          <motion.div
            className="w-full h-1/2 bg-accent absolute top-0"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

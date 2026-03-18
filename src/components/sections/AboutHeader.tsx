"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHeader() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Background Element */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/crystal-blue.png"
          alt="Luxury Stone Texture"
          fill
          className="object-cover opacity-10 filter grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
            Our Heritage
          </span>
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8 text-foreground tracking-tighter leading-none">
            Crafting <span className="italic font-display text-accent">Nature&apos;s</span> <br /> 
            Legacy in Stone
          </h1>
          <p className="max-w-2xl mx-auto text-foreground/60 text-lg md:text-xl font-light leading-relaxed">
            From the heart of Rajasthan to every corner of your creative vision. 
            A journey of precision, passion, and premium craftsmanship.
          </p>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
    </div>
  );
}

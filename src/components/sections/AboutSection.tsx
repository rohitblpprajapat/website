"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background text-foreground border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-display italic text-accent text-lg tracking-wide mb-4 block">
              The AAA STONEX Heritage
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Crafting <span className="italic font-display text-accent">Nature&apos;s</span> <br /> 
              Legacy in Every Slab
            </h2>
            
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
              Founded in the heart of Kishangarh, Rajasthan—the marble capital of India—AAA STONEX represents a legacy of uncompromising quality and direct-from-source authenticity.
              </p>
              <p>
                Our journey begins at the legendary quarries, where we hand-select the finest blocks of natural stone. We believe that every vein and crystal in a marble slab is a testament to millions of years of geological history, and our role is to preserve that beauty through precision processing.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-accent/30 pl-4">
                <h4 className="font-heading font-bold text-foreground text-xl mb-2">Direct From Source</h4>
                <p className="text-foreground/60 text-sm">We eliminate middlemen to ensure the highest purity and value for our global clientele.</p>
              </div>
              <div className="border-l-2 border-accent/30 pl-4">
                <h4 className="font-heading font-bold text-foreground text-xl mb-2">Artisan Precision</h4>
                <p className="text-foreground/60 text-sm">Our Kishangarh processing unit utilizes state-of-the-art Italian machinery for flawless finishes.</p>
              </div>
            </div>

            <motion.div 
              className="mt-12"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium hover:bg-accent hover:text-white transition-all duration-300 rounded-full"
              >
                Learn More About Our Journey
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE PANEL */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Premium Marble Craftsmanship"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 backdrop-blur-md bg-white/10 rounded-xl border border-white/20">
                  <p className="text-white/80 text-sm italic mb-1 font-display">Quality in every detail</p>
                  <p className="text-white font-bold text-lg">Rajasthan&apos;s Finest Stone Collection</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute -top-6 -right-6 w-32 h-32 border border-accent/30 rounded-full z-0 pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

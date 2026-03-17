"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LeadCapture() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call for download
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="catalog" className="py-32 relative overflow-hidden border-t border-border transition-colors duration-300">
      {/* Marble background image */}
      <Image
        src="https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FColiseum-1372x1936_v1_11zon.jpg&w=640&q=90"
        alt="Coliseum marble background"
        fill
        className="object-cover"
        priority={false}
      />
      {/* Strong dark overlay so text stays legible */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Ambient glow accent */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-glow h-glow bg-accent/30 rounded-full blur-glow" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="bg-accent/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent/30">
            <FileText className="w-12 h-12 text-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 transition-colors">
            Get the 2026 Design & Architecture Catalog
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto transition-colors">
            Packed with high-resolution slab textures, thickness guides, and commercial pricing. Enter your details to download the free PDF.
          </p>

          {!success ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="text" 
                required 
                placeholder="Full Name / Company" 
                className="flex-1 bg-background/50 border border-border rounded-full px-8 py-4 text-foreground focus:outline-none focus:border-gold transition-colors"
                disabled={loading}
              />
              <input 
                type="email" 
                required 
                placeholder="Email Address" 
                className="flex-1 bg-background/50 border border-border rounded-full px-8 py-4 text-foreground focus:outline-none focus:border-gold transition-colors"
                disabled={loading}
              />
              <button 
                type="submit" 
                disabled={loading}
                className="bg-accent text-white px-10 py-4 rounded-full font-semibold hover:bg-accent/80 transition-colors flex items-center justify-center gap-2 group hover:scale-105"
              >
                {loading ? "Processing..." : (
                  <>
                    <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                    Download Free
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-500/10 border border-green-500/30 text-green-400 p-8 rounded-2xl max-w-xl mx-auto backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold mb-3">Success!</h3>
              <p className="text-lg">Your catalog is downloading. Check your email for further pricing details from AAAStonex.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

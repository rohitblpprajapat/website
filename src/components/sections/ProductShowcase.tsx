"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "rajasthan-black",
    name: "Rajasthan Black Granite",
    description: "Black Beauty, commonly known as Ash Black or Rajasthan Black Granite. It is a dark stone characterized by small brown and blue garnets, with blue quartz prevalent in the pattern.",
    specs: ["Thickness: 16mm - 30mm", "Finish: Slabs, Tiles, Size", "Origin: Rajasthan, India"],
    image: "/assets/rajasthan-black.png",
  },
  {
    id: "crystal-blue",
    name: "Crystal Blue Granite",
    description: "Features a floral design in shades of blue. This granite is a very uniform and durable material and extremely popular due to its uniformity and textured brightness.",
    specs: ["Thickness: 16mm - 30mm", "Finish: Various Surface Options", "Origin: Rajasthan, India"],
    image: "/assets/crystal-blue.png",
  },
  {
    id: "tiger-skin",
    name: "Tiger Skin Granite",
    description: "Also known as tiger red. Its texture is similar to that of a tiger's skin. This granite has a brown/orange/red background with black waves in the pattern. It is a very hard granite.",
    specs: ["Thickness: 16mm - 30mm", "Finish: Polished, Honed, Leather", "Origin: Jalore District, Rajasthan"],
    image: "/assets/tiger-skin.png",
  },
  {
    id: "kharda-red",
    name: "Kharda Red Granite",
    description: "A signature red granite from the Kharda quarries of Rajasthan. Known for its intense deep red tones and exceptional durability, making it a favorite for premium architectural projects.",
    specs: ["Thickness: 16mm - 30mm", "Finish: High Gloss, Leathered", "Origin: Kharda, Rajasthan"],
    image: "/assets/kharda-red.png",
  }
];

export default function ProductShowcase() {
  return (
    <section id="collection" className="py-24 bg-background text-foreground relative transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-[300px] md:h-[500px] bg-accent/5 md:bg-accent/10 blur-2xl md:blur-collection rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-colors">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground tracking-tight">Signature Collection</h2>
            <p className="text-foreground/70 text-lg transition-colors">
              Explore our core selection. Hand-picked blocks, precisely cut, and polished to perfection for your most demanding architectural needs.
            </p>
          </div>
          <Link href="#quote" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-foreground transition-colors pb-2 border-b border-accent hover:border-foreground">
            Request Custom Cut <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-card bg-background border border-border shadow-md hover:shadow-2xl transition-all duration-700"
            >
              <div className="aspect-[4/3] md:aspect-video relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 dark:opacity-60 group-hover:opacity-100"
                />
              </div>

              <div className="absolute bottom-6 left-6 z-20 px-6 py-3 bg-background/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

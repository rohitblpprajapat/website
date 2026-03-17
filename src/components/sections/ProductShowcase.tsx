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
    id: "rosy-pink",
    name: "Rosy Pink Granite",
    description: "One of the finest pink granites on the market with an admirable radiance. It is an igneous rock that's packed full of crystalline textures due to the presence of quartz.",
    specs: ["Thickness: 16mm - 30mm", "Finish: Slabs, Tiles, Blocks", "Origin: Jalore, Rajasthan"],
    image: "/assets/rosy-pink.png",
  }
];

export default function ProductShowcase() {
  return (
    <section id="collection" className="py-24 bg-background text-foreground relative transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-accent/10 blur-collection rounded-full pointer-events-none" />
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-card bg-muted border border-border shadow-sm hover:border-gold/50 hover:shadow-product transition-all duration-700"
            >
              <div className="aspect-[4/3] md:aspect-video relative overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 dark:opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-muted via-muted/80 to-transparent z-10 transition-colors" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 transition-colors">
                <h3 className="text-3xl font-heading font-bold mb-3 text-foreground transition-colors">{product.name}</h3>
                <p className="text-foreground/70 mb-6 transition-colors duration-500 group-hover:text-foreground">
                  {product.description}
                </p>
                
                {/* Hover Reveal Specs */}
                <div className="overflow-hidden h-0 group-hover:h-32 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 mb-0 group-hover:mb-4">
                  <ul className="space-y-2 text-sm text-foreground/60 mb-6 border-l-2 border-accent pl-4 transition-colors">
                    {product.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full sm:w-auto bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-foreground hover:text-background transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
                  Request Sample
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

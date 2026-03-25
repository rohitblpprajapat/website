"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/assets/rajasthan-black.png", alt: "Rajasthan Black Slab", height: "h-[400px]" },
  { src: "/assets/crystal-blue.png", alt: "Crystal Blue Close Up", height: "h-[250px]" },
  { src: "/assets/tiger-skin.png", alt: "Tiger Skin Pattern", height: "h-[350px]" },
  { src: "/assets/rosy-pink.png", alt: "Rosy Pink Finish", height: "h-[450px]" },
  { src: "/assets/crystal-blue.png", alt: "Crystal Blue Floor", height: "h-[300px]" }, // Reuse
  { src: "/assets/rajasthan-black.png", alt: "Black Granite Counter", height: "h-[350px]" }, // Reuse
];

export default function MasonryShowcase() {
  return (
    <section className="py-24 bg-background text-foreground relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Design Inspiration</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
            See how AAA STONEX transforms spaces.
          </p>
        </div>

        {/* Pinterest-style Masonry Layout using Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.2, duration: 0.6 }}
              className={`relative w-full rounded-2xl overflow-hidden group ${image.height} inline-block`}
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <span className="font-semibold text-white">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

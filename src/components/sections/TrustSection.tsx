"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Ruler, CalendarDays } from "lucide-react";

const stats = [
  { icon: CalendarDays, title: "5 Years", desc: "Of Unmatched Craftsmanship" },
  { icon: ShieldCheck, title: "100% Guaranteed", desc: "Polishing & Finishing Quality" },
  { icon: Ruler, title: "Precision Cut", desc: "Perfect Slab Thickness" },
  { icon: CheckCircle, title: "Kishangarh Base", desc: "Direct from the Source" },
];

export default function TrustSection() {
  return (
    <section id="craftsmanship" className="py-24 bg-muted text-foreground border-y border-border flex transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground tracking-tight">
              Built on Trust. Forged in Stone.
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed transition-colors">
              Operating from the heart of Kishangarh, we deliver premium Rajasthan Black and Kharda Red granite directly to your project site.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-background/80 hover:border-gold/30 shadow-sm hover:shadow-card hover:-translate-y-2 transition-all duration-500 text-center group cursor-default"
            >
              <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 transition-colors">{stat.title}</h3>
              <p className="text-foreground/70 leading-relaxed transition-colors">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

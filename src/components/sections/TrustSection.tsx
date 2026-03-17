"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Ruler, MapPin } from "lucide-react";
import Image from "next/image";

// ─── Honest, accurate trust signals only ─────────────────────────────────────
const stats = [
  {
    icon: MapPin,
    stat: "Kishangarh",
    title: "Direct from Source",
    desc: "Based in the stone capital of India — no middlemen, no markups",
  },
  {
    icon: ShieldCheck,
    stat: "Quality First",
    title: "Every Slab Inspected",
    desc: "Manual quality check on polishing, thickness, and finish before dispatch",
  },
  {
    icon: Ruler,
    stat: "Custom Cut",
    title: "Precision Processing",
    desc: "Slabs cut and finished to your exact dimensions on-site in Kishangarh",
  },
  {
    icon: CheckCircle,
    stat: "Growing Fast",
    title: "Building Our Legacy",
    desc: "Young, driven team on a mission to set a new standard in Indian granite",
  },
];

export default function TrustSection() {
  return (
    <section id="craftsmanship" className="py-24 relative overflow-hidden border-y border-border transition-colors duration-300">
      {/* Stone background accent */}
      <Image
        src="https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FWhite-Onyx-1372x1936_V1_11zon-1.jpg&w=640&q=90"
        alt="White Onyx background"
        fill
        className="object-cover opacity-[0.07] dark:opacity-[0.05] pointer-events-none"
      />
      <div className="absolute inset-0 bg-background/40 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-display italic text-accent text-lg tracking-wide mb-4 block">
              Straightforward. No frills.
            </span>
            <h2 className="mb-6 text-foreground">
              Good Stone. Honest Work.<br />Direct from Kishangarh.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mx-auto">
              We are a young granite business based in the heart of India&apos;s stone industry.
              No inflated claims — just premium Rajasthan Black and Kharda Red granite,
              processed with care and supplied directly to your project.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-background/60 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-background hover:border-accent/40 hover:shadow-card hover:-translate-y-1 transition-all duration-500 text-center group cursor-default"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <p className="font-display text-2xl font-semibold text-foreground mb-1">{stat.stat}</p>
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">{stat.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

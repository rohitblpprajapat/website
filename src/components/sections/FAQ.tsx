"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "Where is AAA STONEX located and why does it matter?",
    a: "AAA STONEX is headquartered in Kishangarh, Rajasthan—the stone capital of the world. Being at the source allows us to offer the finest selection, competitive pricing, and direct access to premium quarries without middlemen markups.",
  },
  {
    q: "What types of stone does AAA STONEX specialize in?",
    a: "We offer an extensive collection of Italian Marble, Imported Marble, and premium Indian Marble (like Makrana and Morwad). Our range also includes high-quality natural Granite, Onyx, and Sandstone for diverse architectural needs.",
  },
  {
    q: "How does AAA STONEX ensure the quality of every slab?",
    a: "Our experts have decades of experience in selecting the finest blocks with unique veining and superior structural integrity. Every slab undergoes rigorous quality inspections for thickness, finish, and durability before being approved.",
  },
  {
    q: "Is marble a good long-term investment for my home?",
    a: "Absolutely. Marble is incredibly durable and, with proper care, can last for generations. Its timeless beauty creates an air of luxury that adds significant long-term value to any property.",
  },
  {
    q: "How do I choose between Italian and Indian marble for my project?",
    a: "Italian marble is preferred for luxury interior spaces and wall cladding due to its superior luster and unique patterns. Indian marble is an excellent choice for flooring in high-traffic areas and projects requiring exceptional durability and budget-friendliness.",
  },
  {
    q: "Does AAA STONEX have a transparent pricing policy?",
    a: "Yes, we are committed to fair and honest trade. We follow a strict 'No Hidden Price' policy, ensuring the quote you receive is comprehensive and transparent from the start.",
  },
  {
    q: "How long does delivery take and where do you ship?",
    a: "We deliver across India and export globally. Standard delivery takes 15-25 days depending on your location. We coordinate with trusted shipping partners to ensure your stone arrives in perfect condition.",
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className="border-b border-border cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
          {q}
        </h3>
        <div className="shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground/50 group-hover:border-accent group-hover:text-accent transition-colors">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-foreground/65 text-sm leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 relative overflow-hidden border-t border-border transition-colors duration-300">
      {/* Stone background accent */}
      <Image
        src="https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F08%2FCosmos-915x1291_V2.jpg&w=640&q=90"
        alt="Cosmos marble background"
        fill
        className="object-cover opacity-[0.05] dark:opacity-[0.03] pointer-events-none"
      />
      <div className="absolute inset-0 bg-background/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="font-display italic text-accent text-lg tracking-wide mb-3 block">
              Before you call us
            </span>
            <h2 className="text-foreground mb-5">Common Questions</h2>
            <p className="text-foreground/70 text-lg mb-8">
              Answers to the questions we hear most from contractors, architects, and interior designers placing their first granite order.
            </p>
            <p className="text-foreground/50 text-sm">
              Didn&apos;t find what you&apos;re looking for?{" "}
              <a
                href="https://wa.me/919571356596"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-foreground transition-colors"
              >
                WhatsApp us directly
              </a>
              {" "}— we reply fast.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="border-t border-border">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onClick={() => toggle(i)}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

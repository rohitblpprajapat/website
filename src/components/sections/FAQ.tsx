"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum order is 50 square feet. For custom cut projects we recommend sharing your full layout so we can optimise slab yield and reduce wastage.",
  },
  {
    q: "Do you offer samples before we place a full order?",
    a: "Yes. We dispatch a sample slab (approx. 12\" × 12\") so you can check the colour, veining, and finish in person. Courier cost is charged at actuals and credited toward your first order.",
  },
  {
    q: "What finishes are available?",
    a: "We offer polished, honed, leather (brushed), and bush-hammered finishes on all our granites. Let us know your preference when enquiring.",
  },
  {
    q: "How long does it take from order confirmation to delivery?",
    a: "Standard lead time is 10–15 working days for processing, plus transit time depending on your location. We'll confirm a precise delivery window at the time of order.",
  },
  {
    q: "What thicknesses do you supply?",
    a: "We supply 16mm, 18mm, and 20mm as standard for countertops and flooring. Thicknesses up to 30mm can be arranged for special architectural applications — just ask.",
  },
  {
    q: "Can you supply cut-to-size pieces?",
    a: "Yes. Share your layout drawings or cut-sheet and we will process the required pieces. Cut-to-size orders require a minimum lead time of 15–20 working days.",
  },
  {
    q: "How is freight handled?",
    a: "Slabs are packed in wooden crates with edge protection and sent via road freight. We coordinate logistics to your site or freight forwarder at Kishangarh. All shipments are insured.",
  },
  {
    q: "What are the payment terms?",
    a: "We work on a 50% advance for first-time orders, with the balance before dispatch. Repeat customers may qualify for credit terms after the first two orders.",
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
                href="https://wa.me/919982000000"
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

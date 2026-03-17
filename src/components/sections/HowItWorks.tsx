"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Send Your Enquiry",
    desc: "Tell us what stone, what finish, and how much you need. WhatsApp, email, or the quote form — whatever is easiest. We reply within a few hours.",
    detail: "Share your project dimensions, preferred finish (polished / honed / bush-hammered), and timeline.",
  },
  {
    number: "02",
    title: "Receive Your Sample",
    desc: "We dispatch a physical sample slab so you can assess the colour, veining, and finish in person before committing.",
    detail: "Sample courier cost is charged at actuals and adjusted against your first order.",
  },
  {
    number: "03",
    title: "Confirm & We Cut",
    desc: "Once you approve the sample, we cut and polish your slabs to exact specifications at our Kishangarh processing unit.",
    detail: "Standard lead time is 10–15 working days from order confirmation, depending on quantity.",
  },
  {
    number: "04",
    title: "Packed & Dispatched",
    desc: "Slabs are crated in wooden packaging with edge protection and dispatched via road freight or rail, fully insured.",
    detail: "We handle logistics to your site or freight forwarder. You get a tracking update at every stage.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-background text-foreground border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — steps */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <span className="font-display italic text-accent text-lg tracking-wide mb-3 block">
                Simple, transparent process
              </span>
              <h2 className="text-foreground mb-5">How It Works</h2>
              <p className="text-foreground/70 text-lg">
                From your first message to slabs on-site — here is exactly what to expect.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="space-y-10 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-[1px] before:bg-border">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="flex gap-8 items-start"
                >
                  {/* Badge — sits on the vertical line */}
                  <div className="w-16 h-16 shrink-0 rounded-full border-2 border-accent flex items-center justify-center bg-background z-10">
                    <span className="font-display text-accent text-lg font-semibold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-3">{step.desc}</p>
                    <p className="text-foreground/45 text-xs leading-relaxed border-l-2 border-accent/30 pl-3 italic">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — marble image panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden hidden lg:block"
          >
            <Image
              src="https://www.stonexglobal.com/_next/image?url=https%3A%2F%2Fwordpress-826134-4189514.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2024%2F07%2FAmber-Exotico-1372x1936_v1_11zon-1.jpg&w=640&q=90"
              alt="Amber Exotico marble slab"
              fill
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Stone name badge */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-1">Premium Marble</p>
              <p className="text-white font-semibold text-sm">Amber Exotico</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Builders & Developers",
    text: "AAAStonex provided the finest quality Rajasthan Black granite for our recent commercial project. The consistency in thickness and mirror polish was exactly what we needed. Highly recommended.",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    company: "Sharma Interiors",
    text: "As an interior designer, I am very particular about the stones I use. The Kharda Red from AAAStonex added a spectacular touch to my client's villa. Their delivery was prompt and the slabs were immaculate.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "Singh Architects",
    text: "We have been sourcing materials from Kishangarh for years, but the professionalism and quality at AAAStonex stand out. The Crystal Blue granite we ordered exceeded our expectations in every way.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background text-foreground border-y border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Client Testimonials
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed transition-colors">
              Don't just take our word for it. See what our partners and clients have to say about our premium stone collection.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-muted/70 border border-border rounded-2xl p-8 hover:bg-muted transition-colors cursor-default"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic transition-colors">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-foreground transition-colors">{testimonial.name}</h4>
                <p className="text-sm text-foreground/50 transition-colors">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

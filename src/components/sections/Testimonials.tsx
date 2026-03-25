"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "MD",
    company: "Kumar Builders & Developers",
    location: "Jaipur",
    text: "AAA STONEX delivered Rajasthan Black granite for our commercial project on time and within spec. Thickness consistency and mirror polish were exactly right. Will reorder.",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    role: "Principal Designer",
    company: "Sharma Interiors",
    location: "Delhi",
    text: "The Kharda Red added a spectacular character to my client's villa. Slabs arrived immaculate in wooden crating. Exactly the kind of supplier I want to work with long-term.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Project Architect",
    company: "Singh Architects",
    location: "Ahmedabad",
    text: "We source stone from Kishangarh regularly. AAA STONEX stands out — responsive team, no surprises on quality. The Crystal Blue we ordered exceeded expectations.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Procurement Head",
    company: "Mehta Construction Group",
    location: "Mumbai",
    text: "Fast reply to our enquiry, sample dispatched the next day, and the final order was ready ahead of schedule. That level of responsiveness is rare in this sector.",
    rating: 5,
  },
  {
    name: "Arun Patel",
    role: "Interior Contractor",
    company: "Patel Fit-Out Works",
    location: "Surat",
    text: "I have been using their polished granite for residential kitchens and bathrooms for the past year. Consistent quality batch after batch. My clients love the finish.",
    rating: 5,
  },
  {
    name: "Sunita Nair",
    role: "Founder",
    company: "Nair Design Studio",
    location: "Bengaluru",
    text: "Ordered a custom-cut batch of Rosy Pink and the slab dimensions were perfect. No wastage on site. Makes a real difference on a tight layout.",
    rating: 5,
  },
  {
    name: "Deepak Joshi",
    role: "Site Engineer",
    company: "Joshi Infra Projects",
    location: "Pune",
    text: "Good stone, honest pricing, and they actually pick up the phone. Three things that are hard to find together in this industry. Recommended to two colleagues already.",
    rating: 5,
  },
  {
    name: "Anita Bose",
    role: "Sr. Architect",
    company: "Bose & Associates",
    location: "Kolkata",
    text: "The 20mm bush-hammered finish on Rajasthan Black was exactly what we needed for an outdoor terrace. Slip-resistant and incredibly durable. Very pleased with the result.",
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="relative w-80 shrink-0 bg-muted/60 border border-border rounded-2xl p-7 mx-3 flex flex-col gap-4">
      <Quote className="w-6 h-6 text-accent/40 absolute top-6 right-6" />
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-accent fill-accent" />
        ))}
      </div>
      {/* Quote */}
      <p className="text-foreground/75 text-sm leading-relaxed italic flex-1">
        &ldquo;{t.text}&rdquo;
      </p>
      {/* Author */}
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground text-sm">{t.name}</p>
        <p className="text-xs text-accent">{t.role}, {t.company}</p>
        <p className="text-xs text-foreground/40 mt-0.5">{t.location}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate array for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-background text-foreground border-y border-border overflow-hidden transition-colors duration-300">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-display italic text-accent text-lg tracking-wide mb-3 block">
            What our clients say
          </span>
          <h2 className="text-foreground">Trusted by Builders, Designers & Architects</h2>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div
        className="flex select-none group"
        aria-label="Testimonials carousel"
      >
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Edge fade overlays - significantly reduced on mobile to prevent content blur */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
}

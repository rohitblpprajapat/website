"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Our Showroom",
    details: ["KH.978/970 & 1053/980", "Village-Khatoli, Kishangarh", "Rajasthan 305801, India"],
    link: "https://maps.app.goo.gl/J4koWVZ45JEixudEA?g_st=ac"
  },
  {
    icon: Phone,
    title: "Call or WhatsApp",
    details: ["+91 95713 56596", "+91 90016 29580"],
    link: "https://wa.me/919571356596"
  },
  {
    icon: Mail,
    title: "Email Enquiries",
    details: ["Aaastonex07@gmail.com"],
    link: "mailto:Aaastonex07@gmail.com"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sun: By Appointment Only"],
    link: null
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-display italic text-accent text-xl tracking-wide mb-4 block">
            Begin Your Stone Journey
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground tracking-tight">
            Connect with <span className="italic font-display text-accent">AAA STONEX</span>
          </h1>
          <p className="max-w-2xl mx-auto text-foreground/60 text-lg font-light leading-relaxed">
            From custom dimensions to global logistics—our team in Kishangarh is ready to assist with your most ambitious projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT: INFO CARDS */}
          <div className="lg:col-span-1 space-y-6">
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 bg-foreground/[0.02] border border-border rounded-2xl hover:border-accent/40 hover:bg-foreground/[0.04] transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-3">{item.title}</h3>
                    {item.details.map((line, idx) => (
                      <p key={idx} className="text-foreground/60 text-sm leading-relaxed">{line}</p>
                    ))}
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
                      >
                        {item.title.includes("Call") ? "Message us on WhatsApp →" : item.title.includes("Visit") ? "View on Google Maps →" : "Send an Email →"}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="p-10 md:p-14 bg-foreground/[0.01] border border-border rounded-3xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Send an Enquiry</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground/40 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-background border border-border rounded-xl px-4 py-4 text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground/40 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-background border border-border rounded-xl px-4 py-4 text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground/40 ml-1">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      className="w-full bg-background border border-border rounded-xl px-4 py-4 text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground/40 ml-1">Stone Interest</label>
                    <select className="w-full bg-background border border-border rounded-xl px-4 py-4 text-sm focus:border-accent focus:outline-none transition-colors appearance-none text-foreground/60">
                      <option>Select a category</option>
                      <option>Rajasthan Black Granite</option>
                      <option>Kharda Red Granite</option>
                      <option>Imported Marble</option>
                      <option>Onyx / Quartzite</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground/40 ml-1">Your Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell us about your project requirements..." 
                      className="w-full bg-background border border-border rounded-xl px-4 py-4 text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      type="submit"
                      className="w-full py-5 bg-foreground text-background font-bold uppercase tracking-widest rounded-xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      Submit Enquiry
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="mt-6 text-center text-xs text-foreground/40 italic">
                      No spam. We typically respond to enquiries within 2-4 hours during business days.
                    </p>
                  </div>
                </form>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>
          </div>

        </div>

        {/* MAP PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 h-[500px] rounded-3xl overflow-hidden grayscale brightness-90 contrast-125 border border-border relative group"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.627341852033!2d74.8385311!3d26.5642438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be1e550e50fd3%3A0xe677519639556cd3!2sAAA%20STONEX!5e0!3m2!1sen!2sin!4v1711350000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
          <div className="absolute top-6 left-6 p-4 bg-background/80 backdrop-blur-md border border-border rounded-xl max-w-[200px] pointer-events-none">
            <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">Our Location</p>
            <p className="text-foreground text-xs font-medium">Find us in the heart of India&apos;s stone capital.</p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link 
        href="https://wa.me/910000000000?text=Hello%20AAAStonex%21%20I%20would%20like%20to%20inquire%20about%20a%20granite%20order." 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-110 transition-all group"
      >
        <MessageCircle size={32} />
        {/* Tooltip */}
        <span className="absolute right-20 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          Chat with Sales
        </span>
      </Link>
    </motion.div>
  );
}

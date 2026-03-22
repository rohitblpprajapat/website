"use client";

import { useState } from "react";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Responsive logo selection
  const smallLogo = '/assets/logo-black.png';
  const fullLogo = '/assets/logo-black.svg'; // Using SVG for better clarity in light mode

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const rajasthanProducts = [
    { name: 'Rajasthan Black', href: '#rajasthan-black', desc: 'Signature charcoal elegance' },
    { name: 'Kharda Red', href: '#kharda-red', desc: 'Premium deep red intensity' },
  ];

  const categories = [
    "Alaska Granite",
    "Imported Marble",
    "Indian Marble",
    "North Indian Granite",
    "Onyx",
    "Quartzite",
    "Sandstone",
    "South Indian Granite",
    "Wall Cladding"
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed w-full left-0 right-0 z-50 top-0 border-b border-white/10 bg-background/30 backdrop-blur-3xl transition-all duration-300 shadow-lg shadow-black/5">
      <div className="px-6 md:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo Area */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            {/* Mobile Logo */}
            <div className="md:hidden">
              <Image
                src={smallLogo}
                alt="AAAStonex Logo"
                width={120}
                height={40}
                style={{ width: 'auto', height: '40px' }}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                priority
              />
            </div>
            {/* Desktop Logo */}
            <div className="hidden md:block">
              <Image
                src={fullLogo}
                alt="AAAStonex Full Logo"
                width={180}
                height={48}
                style={{ width: 'auto', height: '48px' }}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-editorial text-foreground/70 hover:text-accent transition-all duration-300 hover:tracking-editorial-hover"
            >
              Home
            </Link>

            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('collections')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-editorial text-foreground/70 hover:text-accent transition-all duration-300 group">
                Collections
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'collections' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'collections' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col"
                  >
                    <div className="px-5 py-3 border-b border-border/50 bg-accent/5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Stone Categories</p>
                    </div>
                    <div className="p-2 gap-1 grid grid-cols-1">
                      {categories.map((cat) => (
                        <Link
                          key={cat}
                          href={`/collections?category=${encodeURIComponent(cat)}`}
                          className="flex items-center p-3 rounded-lg hover:bg-accent/5 transition-colors group"
                        >
                          <span className="text-xs font-bold text-foreground group-hover:text-accent transition-colors uppercase tracking-widest">{cat}</span>
                        </Link>
                      ))}
                      <Link
                        href="/collections"
                        className="flex items-center p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors group mt-1"
                      >
                        <span className="text-xs font-bold text-accent uppercase tracking-widest">View All Varieties</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Rajasthan Series Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('rajasthan')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-editorial text-accent hover:text-accent/80 transition-all duration-300 group">
                <Sparkles size={14} className="animate-pulse" />
                Rajasthan Series
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'rajasthan' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'rajasthan' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-accent/20 rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {rajasthanProducts.map((p) => (
                        <Link
                          key={p.name}
                          href={p.href}
                          className="flex flex-col p-3 rounded-lg hover:bg-accent/5 transition-colors group"
                        >
                          <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{p.name}</span>
                          <span className="text-[10px] text-foreground/40 font-medium uppercase tracking-widest">{p.desc}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-accent/5 p-3 border-t border-accent/10">
                      <p className="text-[9px] uppercase tracking-widest text-accent/60 font-bold">Quarried in Kishangarh</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.filter(l => l.name !== 'Home').map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-editorial text-foreground/70 hover:text-accent transition-all duration-300 hover:tracking-editorial-hover"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/contact" className="px-8 py-3 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-md hover:shadow-lg">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-foreground transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-3xl border-b border-border overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
              {/* Mobile Collections Highlight */}
              <div className="px-4 py-2 bg-foreground/5 border border-border rounded-xl mb-2">
                <p className="text-[10px] uppercase tracking-widest text-foreground/60 font-bold mb-3">Stone Collections</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/collections?category=${encodeURIComponent(cat)}`}
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-1.5 bg-background border border-border rounded-lg text-[10px] font-bold text-foreground/70 hover:border-accent hover:text-accent transition-all uppercase tracking-tight"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Series Highlight */}
              <div className="px-4 py-2 bg-accent/5 border border-accent/20 rounded-xl mb-2">
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-3 flex items-center gap-2">
                  <Sparkles size={12} /> Rajasthan Series
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {rajasthanProducts.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-2 bg-background border border-border rounded-lg text-xs font-bold text-foreground hover:border-accent hover:text-accent transition-all"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-semibold uppercase tracking-wider text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-8 py-4 bg-accent text-background text-sm font-bold uppercase tracking-widest rounded-xl shadow-lg"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

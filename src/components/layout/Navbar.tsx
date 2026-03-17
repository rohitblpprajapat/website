"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Responsive logo selection
  const smallLogo = '/assets/logo-black.png';
  const fullLogo = '/assets/logo-black.svg'; // Using SVG for better clarity in light mode

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'About Us', href: '/about' },
  ];

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
                className="object-contain h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                priority
              />
            </div>
            {/* Desktop Logo */}
            <div className="hidden md:block">
              <Image
                src={fullLogo}
                alt="AAAStonex Full Logo"
                width={200} // Adjusted for SVG
                height={60}
                className="object-contain h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-editorial text-foreground/70 hover:text-accent transition-all duration-300 hover:tracking-editorial-hover"
              >
                {link.name}
              </Link>
            ))}

            <Link href="#quote" className="px-8 py-3 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-md hover:shadow-lg">
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
                  href="#quote"
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

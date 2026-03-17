"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Responsive logo selection
  const smallLogo = '/assets/logo-white.png';
  const fullLogo = '/assets/full-logo-white.png';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav className="fixed w-nav max-w-7xl left-1/2 -translate-x-1/2 z-50 top-6 border border-border bg-background/60 backdrop-blur-2xl transition-all duration-300 rounded-full shadow-lg dark:shadow-none">
      <div className="px-6 md:px-8">
        <div className="flex justify-between items-center h-20"> {/* Floating pill height */}
          
          {/* Logo Area */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            {/* Mobile Logo */}
            <div className="md:hidden">
              <Image 
                src={smallLogo} 
                alt="AAAStonex Logo" 
                width={120}
                height={40} 
                className="object-contain h-10 w-auto"
                priority
              />
            </div>
            {/* Desktop Logo */}
            <div className="hidden md:block">
              <Image 
                src={fullLogo} 
                alt="AAAStonex Full Logo" 
                width={280}
                height={80} 
                className="object-contain h-14 w-auto"
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
                className="text-xs font-semibold uppercase tracking-editorial text-foreground/70 hover:text-foreground transition-all duration-300 hover:tracking-editorial-hover"
              >
                {link.name}
              </Link>
            ))}
            
            <Link href="#quote" className="px-8 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-xl hover:shadow-2xl hover:bg-accent hover:text-white">
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

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-24 left-0 w-full bg-background/90 backdrop-blur-3xl border border-border overflow-hidden rounded-3xl shadow-2xl"
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

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className={scrolled ? 'text-black' : 'text-white'}>Lens</span>
            <span style={{ color: 'var(--color-gold)' }}>Studio</span>
          </span>
        </a>

        {/* Navigation Menu */}
        <div className="flex items-center gap-12">
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Portfolio', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative transition-colors hover:opacity-70 ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
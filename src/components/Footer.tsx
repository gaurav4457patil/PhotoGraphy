import React from 'react';
import { Instagram, Youtube, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span>Lens</span>
              <span style={{ color: 'var(--color-gold)' }}>Studio</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Creating timeless photographs that capture the essence of life's most beautiful moments.
              Based in New York, serving clients worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-600 hover:border-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-600 hover:border-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Portfolio', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Wedding Photography
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Portrait Sessions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Travel Photography
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Event Coverage
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} LensStudio. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Crafted with <Heart className="w-4 h-4" style={{ color: 'var(--color-gold)' }} /> by Alex Morrison
          </p>
        </div>
      </div>
    </footer>
  );
}
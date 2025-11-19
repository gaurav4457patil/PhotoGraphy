import React from 'react';
import { motion } from 'motion/react';

interface AboutProps {
  photographerImage: string;
}

export function About({ photographerImage }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={photographerImage}
                alt="Photographer"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Decorative Border */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border-2 -z-10"
                style={{ borderColor: 'var(--color-gold)' }}
              ></div>
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                About Me
              </h3>
              <h2 className="text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hello, I'm Alex Morrison
              </h2>
              <div className="w-24 h-0.5 mb-8" style={{ backgroundColor: 'var(--color-gold)' }}></div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              With over 10 years of experience in photography, I specialize in capturing the essence of
              life's most precious moments. From intimate weddings to breathtaking landscapes, my lens
              tells stories that resonate with emotion and authenticity.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              My approach combines artistic vision with technical excellence, ensuring that every frame is
              a masterpiece. I believe that photography is not just about taking pictures—it's about
              creating timeless memories that you'll cherish forever.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Based in New York, I work with clients worldwide, bringing their visions to life through my
              unique perspective and dedication to craft.
            </p>

            {/* Signature */}
            <div className="pt-8">
              <div className="text-4xl italic" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-gold)' }}>
                Alex Morrison
              </div>
              <p className="text-sm text-gray-500 mt-2 tracking-wider">PROFESSIONAL PHOTOGRAPHER</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-gold)' }}>
                  500+
                </div>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div>
                <div className="text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-gold)' }}>
                  10+
                </div>
                <p className="text-sm text-gray-600">Years</p>
              </div>
              <div>
                <div className="text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-gold)' }}>
                  50+
                </div>
                <p className="text-sm text-gray-600">Awards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

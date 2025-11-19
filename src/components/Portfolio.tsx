import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';

interface PortfolioImage {
  id: number;
  url: string;
  title: string;
  location: string;
  category: string;
}

interface PortfolioProps {
  images: PortfolioImage[];
}

export function Portfolio({ images }: PortfolioProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Portfolio Gallery
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: 'var(--color-gold)' }}></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            A curated selection of my finest work, showcasing moments of beauty, emotion, and artistry.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <Masonry columnsCount={3} gutter="24px">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay with Info */}
              <AnimatePresence>
                {hoveredId === image.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white p-6"
                  >
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {image.title}
                    </motion.h3>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '60px' }}
                      transition={{ delay: 0.2 }}
                      className="h-0.5 mb-3"
                      style={{ backgroundColor: 'var(--color-gold)' }}
                    ></motion.div>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm tracking-wider"
                    >
                      {image.location}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}

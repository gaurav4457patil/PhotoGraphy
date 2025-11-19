import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Using a sample wedding video URL - you can replace with your own video */}
          <source
            src="https://cdn.coverr.co/videos/coverr-wedding-couple-walking-in-nature-4512/1080p.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Capturing Stories Through Lens
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mb-4 tracking-wider"
          >
            <span className="inline-block mx-2">Wedding</span>
            <span style={{ color: 'var(--color-gold)' }}>|</span>
            <span className="inline-block mx-2">Portraits</span>
            <span style={{ color: 'var(--color-gold)' }}>|</span>
            <span className="inline-block mx-2">Travel</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-8 py-6 rounded-none border-none"
            >
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-6 rounded-none"
            >
              Book a Shoot
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
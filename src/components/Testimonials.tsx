import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Alex captured our wedding day perfectly. Every photo tells a story and brings back beautiful memories. His attention to detail and artistic vision are exceptional.",
      author: 'Sarah & Michael',
      role: 'Wedding Clients',
    },
    {
      id: 2,
      quote:
        "Professional, creative, and a pleasure to work with. The portrait session was comfortable and fun, and the results exceeded our expectations.",
      author: 'Jennifer Thompson',
      role: 'Portrait Client',
    },
    {
      id: 3,
      quote:
        "Working with Alex on our travel project was incredible. He has an eye for capturing the essence of a place and creating images that truly inspire.",
      author: 'David Chen',
      role: 'Commercial Client',
    },
  ];

  return (
    <section className="py-24 bg-white">
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
            Client Testimonials
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: 'var(--color-gold)' }}></div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-8 relative"
            >
              {/* Quote Icon */}
              <div className="mb-6" style={{ color: 'var(--color-gold)' }}>
                <Quote className="w-10 h-10 opacity-30" />
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">{testimonial.quote}</p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>

              {/* Decorative Element */}
              <div
                className="absolute top-0 left-0 w-1 h-16"
                style={{ backgroundColor: 'var(--color-gold)' }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

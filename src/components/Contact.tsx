import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
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
            Let's Work Together
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: 'var(--color-gold)' }}></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear from you. Reach out and let's create something beautiful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100" style={{ color: 'var(--color-gold)' }}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Email
                  </h3>
                  <p className="text-gray-600">hello@alexmorrison.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100" style={{ color: 'var(--color-gold)' }}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Phone
                  </h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100" style={{ color: 'var(--color-gold)' }}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Location
                  </h3>
                  <p className="text-gray-600">New York, NY</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500">
              <MapPin className="w-12 h-12" />
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-black text-white hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-black text-white hover:opacity-80 transition-opacity"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Larger Contact Info Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-12 shadow-lg flex flex-col justify-center"
          >
            <h3 className="text-4xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I'd love to hear about your project and discuss how we can work together to create something beautiful. Feel free to reach out via email or phone, and I'll get back to you as soon as possible.
            </p>
            <div className="space-y-4 text-lg">
              <p className="text-gray-700">
                <span className="inline-block w-20">Email:</span>
                <a href="mailto:hello@alexmorrison.com" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--color-gold)' }}>
                  hello@alexmorrison.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="inline-block w-20">Phone:</span>
                <a href="tel:+15551234567" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--color-gold)' }}>
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="text-gray-700">
                <span className="inline-block w-20">Based in:</span>
                <span>New York, NY</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
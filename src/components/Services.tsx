import React from 'react';
import { motion } from 'motion/react';
import { Camera, Heart, Map } from 'lucide-react';
import { Button } from './ui/button';

export function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description:
        'Capture your special day with elegance and emotion. Full-day coverage with edited photos and album design.',
      price: 'From $2,500',
      features: ['8-10 hours coverage', '500+ edited photos', 'Online gallery', 'Premium album'],
    },
    {
      icon: Camera,
      title: 'Portrait Sessions',
      description:
        'Professional portraits that capture your personality and style. Perfect for personal branding and family photos.',
      price: 'From $350',
      features: ['1-2 hours session', '50+ edited photos', 'Multiple locations', 'Styling consultation'],
    },
    {
      icon: Map,
      title: 'Travel Photography',
      description:
        'Document your adventures with stunning travel photography. Lifestyle and landscape shots for your journey.',
      price: 'Custom Quote',
      features: ['Flexible scheduling', 'Unlimited locations', 'Commercial rights', 'Expedited delivery'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
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
            Services & Pricing
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: 'var(--color-gold)' }}></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Professional photography services tailored to your needs. Each package can be customized to fit your vision.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center bg-gray-50 group-hover:bg-opacity-80 transition-all"
                  style={{ color: 'var(--color-gold)' }}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-gold)' }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-3xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-gold)' }}>
                  {service.price}
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full border-2 border-black bg-transparent text-black hover:bg-black hover:text-white rounded-none transition-all"
                >
                  Book Now
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

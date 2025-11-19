import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedGallery } from './components/FeaturedGallery';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Gallery images for Featured Gallery section
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'Weddings',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUyNDkxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portraits',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1622841345591-07927ccaf6af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwaG90b2dyYXBoeSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjM0NzM4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Travel',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1760496721999-f7cdfbf2147b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYzNTUwMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Events',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1763538299820-0edb58c7835e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHdlZGRpbmclMjBtb21lbnR8ZW58MXx8fHwxNzYzNTUxNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Weddings',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1653640869615-e9878a2c8344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzYzNTUxNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portraits',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1669986480140-2c90b8edb443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRyYXZlbCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjM1MzA2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Travel',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1655490162630-175929877280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYzNTUxNzc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Weddings',
    },
  ];

  // Portfolio images for masonry grid
  const portfolioImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc2MzQ1Nzg3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Golden Hour',
      location: 'Santorini, Greece',
      category: 'Wedding',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUyNDkxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Urban Portrait',
      location: 'New York City',
      category: 'Portrait',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1622841345591-07927ccaf6af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwaG90b2dyYXBoeSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjM0NzM4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Mountain Vista',
      location: 'Swiss Alps',
      category: 'Travel',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1760496721999-f7cdfbf2147b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYzNTUwMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Celebration',
      location: 'Los Angeles',
      category: 'Event',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1763538299820-0edb58c7835e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHdlZGRpbmclMjBtb21lbnR8ZW58MXx8fHwxNzYzNTUxNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Timeless Beauty',
      location: 'Paris, France',
      category: 'Wedding',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1653640869615-e9878a2c8344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzYzNTUxNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Studio Session',
      location: 'London, UK',
      category: 'Portrait',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1669986480140-2c90b8edb443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRyYXZlbCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjM1MzA2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Adventure',
      location: 'Iceland',
      category: 'Travel',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1655490162630-175929877280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYzNTUxNzc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Love Story',
      location: 'California Coast',
      category: 'Wedding',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwdmVudWV8ZW58MXx8fHwxNzYzNDMwNzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Venue',
      location: 'Dubai, UAE',
      category: 'Wedding',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1743642890337-239d8834c807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMG1vbWVudHxlbnwxfHx8fDE3NjM1MjQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Romantic Moment',
      location: 'Venice, Italy',
      category: 'Wedding',
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ3OTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Professional Headshot',
      location: 'Manhattan, NY',
      category: 'Portrait',
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1650511503497-f09930f2e10a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBzdW5zZXR8ZW58MXx8fHwxNzYzNTAzNzc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Desert Sunset',
      location: 'Arizona, USA',
      category: 'Travel',
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1700062069869-0c59ff21fa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHdlZGRpbmclMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjM1NTMwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Beach Ceremony',
      location: 'Maldives',
      category: 'Wedding',
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1642287040066-2bd340523289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwbmlnaHR8ZW58MXx8fHwxNzYzNTQ1NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'City Lights',
      location: 'Tokyo, Japan',
      category: 'Travel',
    },
    {
      id: 15,
      url: 'https://images.unsplash.com/photo-1694100381966-5cf52917d452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjBwYXRofGVufDF8fHx8MTc2MzQ5MzQzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Forest Path',
      location: 'Oregon, USA',
      category: 'Travel',
    },
    {
      id: 16,
      url: 'https://images.unsplash.com/photo-1762068863020-4ca97ec60cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnJpZGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM0NTg2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bridal Elegance',
      location: 'Tuscany, Italy',
      category: 'Wedding',
    },
    {
      id: 17,
      url: 'https://images.unsplash.com/photo-1601294281485-2b5a214689dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzYzNDkwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Family Moments',
      location: 'Central Park, NY',
      category: 'Portrait',
    },
    {
      id: 18,
      url: 'https://images.unsplash.com/photo-1604580826271-aa59d10b875a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBvY2VhbiUyMHdhdmVzfGVufDF8fHx8MTc2MzQ1ODAwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Ocean Waves',
      location: 'Bali, Indonesia',
      category: 'Travel',
    },
    {
      id: 19,
      url: 'https://images.unsplash.com/photo-1714972383570-44ddc9738355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jaW5nJTIwd2VkZGluZyUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3NjM1NTMwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'First Dance',
      location: 'Miami, Florida',
      category: 'Wedding',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Portfolio images={portfolioImages} />
      <FeaturedGallery images={galleryImages} />
      <About photographerImage="https://images.unsplash.com/photo-1737659700739-7d9d28b16c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNjM1NTE3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080" />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
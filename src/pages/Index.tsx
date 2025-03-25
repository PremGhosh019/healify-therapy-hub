
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

const Index = () => {
  useEffect(() => {
    // Apply animations on load
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add('appear');
        }
      });
    };

    // Initial animation
    setTimeout(animateElements, 100);

    // Scroll animation
    window.addEventListener('scroll', animateElements);
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

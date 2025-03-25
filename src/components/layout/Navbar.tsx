
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-medium tracking-tight">
            <span className="text-primary">Parent</span>
            <span className="text-foreground">Bless</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors duration-200">
            Services
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors duration-200">
            Contact
          </a>
          <Button
            size="sm"
            className="bg-primary text-white hover:bg-primary/90 transition-all duration-200"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          <a 
            href="#services" 
            className="py-2 text-foreground/80 hover:text-primary transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="py-2 text-foreground/80 hover:text-primary transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="py-2 text-foreground/80 hover:text-primary transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button
            size="sm"
            className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 w-full"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

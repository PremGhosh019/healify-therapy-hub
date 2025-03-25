
import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-medium text-white mb-4">
              <span className="text-primary">Heal</span>
              <span>Clinic</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We are dedicated to providing exceptional care and personalized treatment for a variety of neurological and 
              musculoskeletal conditions, helping patients regain mobility and improve their quality of life.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <span className="text-white/70 text-sm">123 Healing Street, Medical District, City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-sm">info@healclinic.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary shrink-0 mt-1" />
                <div>
                  <span className="block text-white/70 text-sm">Mon-Fri: 8:00 AM - 7:00 PM</span>
                  <span className="block text-white/70 text-sm">Saturday: 9:00 AM - 5:00 PM</span>
                  <span className="block text-white/70 text-sm">Sunday: Closed</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'About Us', 'Our Doctors', 'Book Appointment', 'Patient Resources', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white/70 text-sm hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Stay updated with our latest news and health tips.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} HealClinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

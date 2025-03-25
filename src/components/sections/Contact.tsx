
import React, { useEffect, useRef } from 'react';
import AppointmentForm from '@/components/ui/AppointmentForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      const elements = sectionElement.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionElement) {
        const elements = sectionElement.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-primary" />,
      title: 'Our Location',
      details: '123 Healing Street, Medical District, City, State 12345'
    },
    {
      icon: <Phone size={20} className="text-primary" />,
      title: 'Phone Number',
      details: '+1 (555) 123-4567'
    },
    {
      icon: <Mail size={20} className="text-primary" />,
      title: 'Email Address',
      details: 'info@healclinic.com'
    },
    {
      icon: <Clock size={20} className="text-primary" />,
      title: 'Working Hours',
      details: 'Mon-Fri: 8:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-foreground/5"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block mb-5 animate-on-scroll fade-in">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 animate-on-scroll slide-up">
            Schedule Your Appointment Today
          </h2>
          <p className="text-foreground/80 leading-relaxed animate-on-scroll slide-up">
            Take the first step towards recovery by scheduling a consultation with our specialists.
            We're here to provide the care and support you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll slide-up">
            <div className="glass-card p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-playfair font-medium mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-1">{item.title}</h4>
                      <p className="text-foreground/70">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-foreground/10">
                <h4 className="text-lg font-medium text-foreground mb-5">Follow Us</h4>
                <div className="flex items-center gap-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {social === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                        {social === 'twitter' && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />}
                        {social === 'instagram' && <rect x="2" y="2" width="20" height="20" rx="5" />}
                        {social === 'linkedin' && <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll slide-up">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
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

  const benefits = [
    'Experienced medical professionals',
    'Personalized treatment plans',
    'Modern facilities & equipment',
    'Patient-centered approach',
    'Evidence-based therapies',
    'Ongoing support & guidance'
  ];

  return (
    <section id="about" className="py-20 bg-foreground/5" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/5]">
                  <img
                    src="/lovable-uploads/f7037382-b01b-4db7-a032-301750784da6.png"
                    alt="Doctor with stethoscope"
                    className="h-full w-full object-cover animate-on-scroll scale-in"
                  />
                </div>
              </div>
              <div className="absolute top-6 -right-6 w-2/3 h-3/4 bg-primary/10 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-2/3 h-3/4 bg-accent/10 rounded-2xl -z-10"></div>
              
              {/* Stats card */}
              <div className="absolute -bottom-8 right-8 glass-card p-5 rounded-xl shadow-lg animate-on-scroll fade-in w-64">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">5000+</h3>
                    <p className="text-sm text-foreground/60">Satisfied Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block mb-5 animate-on-scroll fade-in">
              About Our Clinic
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 animate-on-scroll slide-up">
              Dedicated to Improving Your Mobility & Quality of Life
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed animate-on-scroll slide-up">
              Parent Bless was founded with a mission to provide specialized care for patients
              with neurological and physical conditions. Our team of experienced healthcare 
              professionals is committed to delivering personalized treatment plans that address
              the unique needs of each patient.
            </p>
            <p className="text-foreground/80 mb-8 leading-relaxed animate-on-scroll slide-up">
              We combine advanced medical expertise with compassionate care to help our patients
              achieve optimal recovery and improved quality of life. Our state-of-the-art
              facilities and evidence-based approaches ensure that you receive the highest standard
              of care throughout your healing journey.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 animate-on-scroll slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="animate-on-scroll slide-up">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

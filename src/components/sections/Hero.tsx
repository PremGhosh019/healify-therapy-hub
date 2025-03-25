
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const heroElement = heroRef.current;
    if (heroElement) {
      const elements = heroElement.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (heroElement) {
        const elements = heroElement.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-16" ref={heroRef}>
      {/* Background with a gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]"></div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/3 right-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-float animation-delay-1000"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8">
          <div className="animate-on-scroll slide-up">
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block mb-6">
              Specialized Rehabilitation Clinic
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold leading-tight">
              Advanced Care for <br />
              <span className="text-primary">Neurological &</span> <br />
              <span className="text-primary">Physical</span> Conditions
            </h1>
          </div>
          
          <p className="text-lg text-foreground/80 leading-relaxed animate-on-scroll slide-up">
            Our specialized team provides personalized treatment plans for paralysis, cerebral palsy, 
            cervical pain, frozen shoulder, and sciatica. Experience exceptional care that focuses on 
            improving your mobility and quality of life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll slide-up">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 font-medium"
            >
              Book an Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 text-foreground group"
            >
              Learn About Our Services
              <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-4 animate-on-scroll slide-up">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-primary/30 flex items-center justify-center overflow-hidden">
                  <span className="text-xs font-medium text-primary">MD</span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-accent"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-foreground/80">
                <span className="font-semibold">4.9</span> from over{" "}
                <span className="font-semibold">2,000+</span> reviews
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative animate-on-scroll scale-in">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-md mx-auto lg:ml-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10 rounded-2xl"></div>
            <div className="bg-[url('https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070')] bg-cover bg-center h-full w-full"></div>
          </div>
          
          {/* Specialized care card - kept this card but removed the 15+ years card */}
          <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl shadow-lg animate-on-scroll scale-in w-64">
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Specialized Care</h3>
                <p className="text-sm text-foreground/60">Personalized treatment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

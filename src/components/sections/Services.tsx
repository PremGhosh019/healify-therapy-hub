
import React, { useEffect, useRef } from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { 
  Brain, 
  ActivitySquare, 
  Spine, 
  HandMetal, 
  Zap
} from 'lucide-react';

const services = [
  {
    title: 'Paralysis Rehabilitation',
    description: 'Comprehensive rehabilitation programs designed to improve mobility, strength, and quality of life for patients with paralysis.',
    icon: <ActivitySquare className="w-6 h-6 text-primary" />
  },
  {
    title: 'Cerebral Palsy Therapy',
    description: 'Specialized therapy techniques that focus on improving motor skills, coordination, and overall function for cerebral palsy patients.',
    icon: <Brain className="w-6 h-6 text-primary" />
  },
  {
    title: 'Cervical Pain Treatment',
    description: 'Advanced treatments that target the root causes of cervical pain to provide lasting relief and improved neck mobility.',
    icon: <Spine className="w-6 h-6 text-primary" />
  },
  {
    title: 'Frozen Shoulder Recovery',
    description: 'Effective therapeutic approaches to restore range of motion and alleviate pain associated with frozen shoulder conditions.',
    icon: <HandMetal className="w-6 h-6 text-primary" />
  },
  {
    title: 'Sciatica Pain Management',
    description: 'Targeted interventions to reduce sciatic nerve inflammation and provide relief from radiating pain down the lower back and legs.',
    icon: <Zap className="w-6 h-6 text-primary" />
  }
];

const Services = () => {
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

  return (
    <section id="services" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block mb-5 animate-on-scroll fade-in">
            Our Specialized Services
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 animate-on-scroll slide-up">
            Comprehensive Care for Neurological and Physical Conditions
          </h2>
          <p className="text-foreground/80 leading-relaxed animate-on-scroll slide-up">
            We provide specialized treatment for a range of conditions, focusing on personalized
            care plans that address your specific needs and goals for recovery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll scale-in">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

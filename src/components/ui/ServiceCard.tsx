
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 hover:shadow-md transition-all duration-300 group h-full"
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex flex-col h-full">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-playfair font-medium mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-foreground/70 mb-4 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <a href="#" className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
            Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Calendar, Clock, User, MessageSquare, Phone } from 'lucide-react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulating form submission
    console.log('Form submitted:', formData);
    toast.success('Your appointment request has been submitted!', {
      description: 'We will contact you shortly to confirm your appointment.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-playfair font-medium mb-6">Book an Appointment</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User size={16} className="text-foreground/50" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="bg-white/50 border border-foreground/10 rounded-md pl-10 p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone size={16} className="text-foreground/50" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="bg-white/50 border border-foreground/10 rounded-md pl-10 p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="bg-white/50 border border-foreground/10 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      
      <div className="mb-6">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="bg-white/50 border border-foreground/10 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="" disabled>Select Service</option>
          <option value="paralysis">Paralysis Rehabilitation</option>
          <option value="cerebral-palsy">Cerebral Palsy Therapy</option>
          <option value="cervical-pain">Cervical Pain Treatment</option>
          <option value="frozen-shoulder">Frozen Shoulder Recovery</option>
          <option value="sciatica">Sciatica Pain Management</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar size={16} className="text-foreground/50" />
          </div>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="bg-white/50 border border-foreground/10 rounded-md pl-10 p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Clock size={16} className="text-foreground/50" />
          </div>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="bg-white/50 border border-foreground/10 rounded-md pl-10 p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="" disabled>Select Time</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">02:00 PM</option>
            <option value="15:00">03:00 PM</option>
            <option value="16:00">04:00 PM</option>
            <option value="17:00">05:00 PM</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6 relative">
        <div className="absolute top-3 left-3 pointer-events-none">
          <MessageSquare size={16} className="text-foreground/50" />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Additional Information or Special Requirements"
          rows={4}
          className="bg-white/50 border border-foreground/10 rounded-md pl-10 p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-white py-3 transition-colors"
      >
        Book My Appointment
      </Button>
    </form>
  );
};

export default AppointmentForm;

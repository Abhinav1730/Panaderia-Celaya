"use client";

import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="visit" className="py-24 bg-brand-secondary/40">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Info Column */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-highlight/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-highlight/20 transition-colors duration-500"></div>
          
          <h2 className="text-4xl font-serif font-bold text-brand-accent mb-8 relative z-10">Visit Our Bakery</h2>
          
          <div className="space-y-8 relative z-10">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-brand-secondary/30 p-3 rounded-full text-brand-primary">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-brand-accent">Location</h3>
                <p className="text-stone-600 mt-1">906 W Marshall Dr, <br /> Grand Prairie, TX 75051</p>
                <a 
                  href="https://maps.google.com/?q=906+W+Marshall+Dr,+Grand+Prairie,+TX+75051" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-brand-primary font-semibold hover:underline"
                >
                  Get Directions <Navigation size={16} />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-brand-secondary/30 p-3 rounded-full text-brand-primary">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-brand-accent">Bakery Hours</h3>
                <ul className="text-stone-600 mt-1 space-y-1">
                  <li className="flex justify-between w-full"><span>Daily:</span> <span>6:00 AM - 8:50 PM</span></li>
                  <li className="flex justify-between w-full text-brand-primary font-medium pt-2 border-t border-stone-100 mt-2"><span>Delivery:</span> <span>6:00 AM - 9:00 PM</span></li>
                </ul>
              </div>
            </div>
            
            {/* Contact */}
             <div className="flex items-start gap-4">
              <div className="bg-brand-secondary/30 p-3 rounded-full text-brand-primary">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-brand-accent">Questions?</h3>
                <p className="text-stone-600 mt-1">Call us at (972) 522-7939 for orders & inquiries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div className="h-full min-h-[400px] w-full bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.574635954625!2d-96.99427492476563!3d32.738090973682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e8fb29eb5e5eb%3A0xe5452d2448342468!2s906%20W%20Marshall%20Dr%2C%20Grand%20Prairie%2C%20TX%2075051!5e0!3m2!1sen!2sus!4v1709428514806!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: "450px" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

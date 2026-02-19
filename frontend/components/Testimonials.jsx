"use client";

import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Maria Gonzalez",
    role: "Local Resident",
    review: "The conchas here are exactly like the ones I had growing up in Mexico. Soft, sweet, and always fresh. My family loves them!",
    stars: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "James Smith",
    role: "First-time Visitor",
    review: "Stumbled upon this gem while driving through Grand Prairie. The Empanadas are to die for! The staff is so welcoming.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Elena Rodriguez",
    role: "Regular Customer",
    review: "Ordered a custom cake for my daughter's quinceañera and it was perfect. Not just beautiful, but delicious too. Highly recommend!",
    stars: 5,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-secondary/20 to-transparent -z-10" />
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary uppercase tracking-widest font-bold text-sm">Community Love</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent mt-3 mb-6">What Our Neighbors Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 text-brand-secondary/30 w-12 h-12" />
              
              <div className="flex items-center gap-1 mb-6 text-brand-highlight">
                {[...Array(t.stars)].map((_, index) => (
                  <Star key={index} fill="currentColor" size={20} strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-stone-600 italic text-lg leading-relaxed mb-6">"{t.review}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-secondary" />
                <div>
                  <h4 className="font-serif font-bold text-brand-accent">{t.name}</h4>
                  <p className="text-xs text-stone-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

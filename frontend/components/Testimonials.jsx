"use client";

import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Birthday Celebration",
    review: "The butterfly cake they made for my daughter's birthday was absolutely stunning! Every detail was perfect, and it tasted even better than it looked. Pure artistry!",
    stars: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Rahul Menon",
    role: "Anniversary Party",
    review: "We ordered the Dark Chocolate Caramel for our anniversary. The richness of flavour and the elegant design exceeded all expectations. Nanté is our go-to patisserie now!",
    stars: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Ananya Patel",
    role: "Wedding Cake",
    review: "Our three-tier wedding cake was the highlight of the reception. Guests couldn't stop talking about how delicious and beautiful it was. Thank you, Nanté, for making our day magical!",
    stars: 5,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-brand-secondary/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-brand-rose/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-brand-primary" />
            <span className="text-brand-primary uppercase tracking-[0.2em] font-semibold text-sm">Happy Customers</span>
            <span className="w-12 h-[1px] bg-brand-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-accent mt-3 mb-6">
            Love from Our <span className="italic text-brand-primary">Patrons</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="premium-card bg-white p-8 rounded-3xl shadow-lg border border-brand-rose/10 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-secondary/60 flex items-center justify-center">
                <Quote className="text-brand-primary/30 w-6 h-6" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.stars)].map((_, index) => (
                  <Star key={index} fill="currentColor" size={18} strokeWidth={0} className="text-brand-highlight" />
                ))}
              </div>

              {/* Review */}
              <p className="text-stone-600 italic text-base leading-relaxed mb-8">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-rose/30 to-transparent mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-rose/20 shadow-sm"
                />
                <div>
                  <h4 className="font-serif font-bold text-brand-accent text-lg">{t.name}</h4>
                  <p className="text-xs text-brand-primary uppercase tracking-wider font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

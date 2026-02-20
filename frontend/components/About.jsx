"use client";

import { Cake, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-secondary/40 relative overflow-hidden pattern-overlay">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-rose/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-brand-mauve/10 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Section */}
        <div className="order-2 md:order-1 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-brand-primary" />
            <span className="text-brand-primary text-sm uppercase tracking-[0.2em] font-semibold">
              Our Story
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent leading-snug">
            Where Every Cake
            <br />
            <span className="italic text-brand-primary">Tells a Story</span>
          </h2>

          <p className="text-stone-600 text-lg leading-relaxed">
            At <strong className="text-brand-primary font-semibold">Nanté Patisserie & Confectionery</strong>, founded by <strong className="text-brand-primary font-semibold">Nandita Saxena</strong> — a passionate Cake Artist & Patissier — we believe every celebration deserves a masterpiece. Our custom designer cakes are handcrafted with premium ingredients and meticulous attention to detail.
          </p>

          <p className="text-stone-600 text-lg leading-relaxed">
            From elegant wedding tiers to whimsical birthday creations, each cake is a unique work of art. Nandita pours her heart into every fondant flower, every buttercream swirl, and every edible detail — because your special moments deserve nothing less.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6">
            <div className="text-center p-3 sm:p-4 bg-white rounded-2xl shadow-sm border border-brand-rose/10 hover:shadow-md transition-shadow">
              <Cake className="w-6 h-6 sm:w-7 sm:h-7 text-brand-primary mx-auto mb-2" />
              <p className="font-serif font-bold text-brand-accent text-lg sm:text-xl">500+</p>
              <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider">Cakes Crafted</p>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white rounded-2xl shadow-sm border border-brand-rose/10 hover:shadow-md transition-shadow">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-brand-primary mx-auto mb-2" />
              <p className="font-serif font-bold text-brand-accent text-lg sm:text-xl">100%</p>
              <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider">Made Fresh</p>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white rounded-2xl shadow-sm border border-brand-rose/10 hover:shadow-md transition-shadow">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-brand-primary mx-auto mb-2" />
              <p className="font-serif font-bold text-brand-accent text-lg sm:text-xl">Premium</p>
              <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider">Ingredients</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-mauve/20 rounded-3xl transform rotate-3 scale-95 transition-transform group-hover:rotate-6 duration-500" />
          <img
            src="https://images.unsplash.com/photo-1535141192574-5d4897c12636"
            alt="Beautiful custom designer cakes at Nanté Patisserie"
            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[350px] md:h-[520px] transform transition-transform duration-500 group-hover:-translate-y-2"
          />
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20 border border-brand-rose/20 hidden md:block">
            <p className="font-serif text-2xl font-bold text-brand-primary">Custom</p>
            <p className="text-sm text-stone-500 uppercase tracking-wider">Designer Cakes</p>
          </div>
          {/* Decorative dot pattern */}
          <div className="absolute -top-4 -right-4 w-20 h-20 grid grid-cols-4 gap-1 opacity-30 z-20 hidden md:grid">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-brand-primary" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Sparkles, Crown, Star } from "lucide-react";

const CLASSIC_SELECTIONS = [
  { name: "Fresh Fruit", desc: "Light sponge layered with seasonal fresh fruits and cream" },
  { name: "Banana Caramel", desc: "Moist banana cake with rich caramel drizzle and buttercream" },
  { name: "Coffee Mascarpone", desc: "Espresso-infused layers with silky mascarpone cream" },
  { name: "O.G Chocolate", desc: "Classic dark chocolate cake with ganache and cocoa buttercream" },
  { name: "Strawberry and Cream", desc: "Fresh strawberries nestled in vanilla cream on fluffy sponge" },
];

const SIGNATURE_SELECTIONS = [
  { name: "Red Velvet Raspberry", desc: "Vibrant red velvet with raspberry coulis and cream cheese frosting" },
  { name: "Dark Chocolate Caramel", desc: "Decadent dark chocolate paired with salted caramel filling" },
  { name: "Blueberry, Lime, Cream Cheese", desc: "Zesty lime cake with blueberry compote and cream cheese" },
  { name: "Mocha Caramel", desc: "Coffee and chocolate fusion with caramel ribbon swirls" },
  { name: "Black Forest", desc: "Traditional chocolate sponge with cherries and whipped cream" },
  { name: "Chocolate & Nut", desc: "Rich chocolate cake with roasted hazelnuts and praline" },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-brand-rose/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand-champagne/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-mauve/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 flex-wrap">
            <span className="hidden sm:block w-16 h-[1px] bg-gradient-to-r from-transparent to-brand-primary" />
            <Sparkles size={14} className="text-brand-primary" />
            <span className="text-brand-primary uppercase tracking-[0.15em] sm:tracking-[0.25em] font-semibold text-xs sm:text-sm">Custom Designer Cake Menu</span>
            <Sparkles size={14} className="text-brand-primary" />
            <span className="hidden sm:block w-16 h-[1px] bg-gradient-to-l from-transparent to-brand-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-accent mt-3 mb-6">
            Our <span className="italic text-brand-primary">Flavours</span>
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Choose from our curated selection of classic and signature flavours.
            Every cake is custom designed and handcrafted to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Classic Selections Card */}
          <div className="group premium-card bg-white rounded-3xl overflow-hidden shadow-lg border border-brand-rose/10 relative">
            {/* Card Header */}
            <div className="relative bg-gradient-to-br from-brand-secondary via-white to-brand-champagne/30 p-8 pb-6 border-b border-brand-rose/10">
              <div className="absolute top-4 right-4">
                <Star size={20} className="text-brand-highlight/40" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Star size={18} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-brand-accent">Classic Selections</h3>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-brand-primary">₹1,800</span>
                <span className="text-stone-400 text-sm font-medium">/ per Kg</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-8">
              <ul className="space-y-5">
                {CLASSIC_SELECTIONS.map((item, index) => (
                  <li key={index} className="group/item flex items-start gap-4 cursor-default">
                    <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-brand-secondary flex items-center justify-center text-sm font-serif font-bold text-brand-primary border border-brand-rose/20 group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors duration-300">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-brand-accent text-lg group-hover/item:text-brand-primary transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-stone-400 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636"
                alt="Classic selection cakes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-6 text-white font-serif font-medium text-lg drop-shadow-md">
                Timeless Classics
              </span>
            </div>
          </div>

          {/* Signature Selections Card */}
          <div className="group premium-card bg-white rounded-3xl overflow-hidden shadow-lg border border-brand-primary/10 relative">
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 backdrop-blur-sm text-brand-primary text-xs font-bold uppercase tracking-wider border border-brand-primary/20">
                <Crown size={12} />
                Premium
              </span>
            </div>

            {/* Card Header */}
            <div className="relative bg-gradient-to-br from-brand-accent via-[#4a3628] to-brand-accent p-8 pb-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,110,121,0.15),transparent)]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Crown size={18} className="text-brand-rose" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Signature Selections</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-brand-rose">₹2,000</span>
                  <span className="text-white/50 text-sm font-medium">/ per Kg</span>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-8">
              <ul className="space-y-5">
                {SIGNATURE_SELECTIONS.map((item, index) => (
                  <li key={index} className="group/item flex items-start gap-4 cursor-default">
                    <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-brand-primary/10 flex items-center justify-center text-sm font-serif font-bold text-brand-primary border border-brand-primary/20 group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors duration-300">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-brand-accent text-lg group-hover/item:text-brand-primary transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-stone-400 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
                alt="Signature selection cakes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-6 text-white font-serif font-medium text-lg drop-shadow-md">
                Signature Creations
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-stone-400 text-sm mb-4">Want something truly unique? We craft bespoke designs for every occasion.</p>
          <a
            href="tel:6381151942"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-accent text-white font-semibold rounded-full hover:bg-brand-primary transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/20 hover:scale-105"
          >
            Order Your Custom Cake
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { AlertCircle, Clock, Scale, Palette, Phone, Truck } from "lucide-react";

const POLICIES = [
  {
    icon: <Scale size={24} />,
    title: "Minimum Weight",
    desc: "Minimum weight for customisation is 1.5 kg",
    highlight: "1.5 Kg"
  },
  {
    icon: <Palette size={24} />,
    title: "Special Decorations",
    desc: "Extra charges are applicable for edible print, handmade figurines and edible sugar flowers",
    highlight: "Custom Pricing"
  },
  {
    icon: <Clock size={24} />,
    title: "Prior Notice",
    desc: "Minimum 24-48 hours prior notice for all customisations",
    highlight: "24-48 Hours"
  },
  {
    icon: <Phone size={24} />,
    title: "Smaller Orders",
    desc: "For smaller customizations, please contact us directly",
    highlight: "6381151942"
  },
  {
    icon: <Truck size={24} />,
    title: "Delivery",
    desc: "Delivery charges applicable as per actuals based on distance and order size",
    highlight: "As Per Actuals"
  },
];

export default function Policies() {
  return (
    <section id="policies" className="py-24 bg-brand-secondary/30 relative overflow-hidden pattern-overlay">
      {/* Decorative */}
      <div className="absolute -top-10 left-0 w-40 h-40 rounded-full bg-brand-rose/10 blur-3xl" />
      <div className="absolute -bottom-10 right-0 w-60 h-60 rounded-full bg-brand-champagne/20 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-brand-primary" />
            <AlertCircle size={16} className="text-brand-primary" />
            <span className="text-brand-primary uppercase tracking-[0.2em] font-semibold text-sm">Please Note</span>
            <AlertCircle size={16} className="text-brand-primary" />
            <span className="w-12 h-[1px] bg-brand-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent mt-3">
            Ordering <span className="italic text-brand-primary">Information</span>
          </h2>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {POLICIES.map((policy, index) => (
            <div
              key={index}
              className={`premium-card bg-white p-7 rounded-2xl shadow-sm border border-brand-rose/10 relative group ${
                index === POLICIES.length - 1 && POLICIES.length % 3 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                {policy.icon}
              </div>

              {/* Content */}
              <h4 className="font-serif font-bold text-xl text-brand-accent mb-2">
                {policy.title}
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">
                {policy.desc}
              </p>

              {/* Highlight Badge */}
              <span className="inline-block px-3 py-1.5 rounded-full bg-brand-secondary text-brand-primary text-xs font-bold tracking-wider border border-brand-rose/15">
                {policy.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 glass p-6 rounded-2xl shadow-md border border-brand-rose/15">
            <Phone size={20} className="text-brand-primary" />
            <div className="text-left">
              <p className="text-xs text-stone-400 uppercase tracking-wider font-medium">For Orders & Enquiries</p>
              <a href="tel:6381151942" className="text-xl font-serif font-bold text-brand-accent hover:text-brand-primary transition-colors">
                6381151942
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

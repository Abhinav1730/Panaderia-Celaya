"use client";

import { Accessibility, Utensils, CreditCard, Car, Clock } from "lucide-react";

export default function Amenities() {
  const categories = [
    {
      title: "Service Options",
      icon: <Utensils size={28} />,
      items: ["Delivery", "Takeaway", "Dine-in", "On-site services"]
    },
    {
      title: "Accessibility",
      icon: <Accessibility size={28} />,
      items: ["Wheelchair-accessible entrance", "Wheelchair-accessible car park"]
    },
    {
      title: "Payments",
      icon: <CreditCard size={28} />,
      items: ["Credit cards", "Debit cards"]
    },
    {
      title: "Parking & Planning",
      icon: <Car size={28} />,
      items: ["Free parking lot", "Quick visit"]
    }
  ];

  return (
    <section className="py-16 bg-stone-50 border-t border-stone-100">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
            <span className="text-brand-primary uppercase tracking-widest font-bold text-sm">For Your Convenience</span>
            <h3 className="text-3xl font-serif font-bold text-brand-accent mt-2">Amenities & Services</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-brand-secondary/30 p-3 rounded-full text-brand-primary">
                  {cat.icon}
                </div>
                <h4 className="font-bold text-lg text-brand-accent">{cat.title}</h4>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-highlight flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
